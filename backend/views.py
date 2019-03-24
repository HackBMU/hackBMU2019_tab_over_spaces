from app import *
from flask import session, redirect, url_for, render_template, abort, request, flash, send_from_directory, jsonify
import os
from models import Projects
from keras import backend as K


@app.route('/models/<model_name>', methods=['GET', 'POST'])
def generate(model_name):
    if request.method == 'POST':
        project_id = request.form.get('project_id')
        # Prep model on basis of which mdoel is requested
        model = prep_model(model_name)
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser still
        # submits an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            file_name = str(project_id) + '.png'
            file_address = os.path.join(os.getcwd(), app.config['UPLOAD_FOLDER'], file_name)
            file.save(file_address)
            output_folder = os.path.join(os.getcwd(), app.config['OUTPUT_FOLDER'])
            html = model.convert_single_image(output_folder, png_path=file_address, print_generated_output=0, get_sentence_bleu=0, original_gui_filepath=None, style='webase')
            project = Projects.get_project_by_id(project_id)
            project.html_code = html
            project.deploy_url = f'localhost:5000/deploy/{project_id}'
            db.session.add(project)
            db.session.commit()
            K.clear_session()
            return get_project(project_id)
    else:
        return render_template('generator_page.html')


@app.route('/project/<id>', methods=['GET'])
def get_project(id):
    return jsonify(Projects.get_project_by_id(id).to_dict())


@app.route('/project', methods=['POST'])
def post_project():
    data = request.get_json(silent=True, force=True)
    new_project = Projects(data['project_name'])
    db.session.add(new_project)
    db.session.commit()
    return jsonify({'id': new_project.id})


@app.route('/dashboard', methods=['GET'])
def dash():
    return jsonify([project.to_dict() for project in Projects.query.all()])


@app.route('/deploy/<project_id>', methods=['GET'])
def deploy(project_id):
    project = Projects.get_project_by_id(project_id)
    return render_template(project.html_code)

@app.route('/output/<path:path>')
def generated(path):
    return send_from_directory('generated', path)


@app.route('/upload/<path:path>')
def uploaded(path):
    return send_from_directory('upload', path)


@app.route('/static/<path:path>')
def staticpath(path):
    return send_from_directory('static', path)
