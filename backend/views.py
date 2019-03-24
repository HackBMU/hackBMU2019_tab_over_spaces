from app import *
from flask import session, redirect, url_for, render_template, abort, request, flash, send_from_directory, jsonify
import os
from models import Projects
from keras import backend as K


@app.route('/project', methods=['GET', 'POST'])
def generate():
    if request.method == 'POST':
        project_name = request.form.get('project_name')
        style = request.form.get('style')
        # Prep model on basis of which mdoel is requested
        model = prep_model()
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
            new_project = Projects(project_name)
            db.session.add(new_project)
            db.session.commit()
            project_id = new_project.id
            file_name = str(project_id) + '.png'
            file_address = os.path.join(os.getcwd(), app.config['UPLOAD_FOLDER'], file_name)
            file.save(file_address)
            output_folder = os.path.join(os.getcwd(), app.config['OUTPUT_FOLDER'])
            html = model.convert_single_image(output_folder, png_path=file_address, print_generated_output=0, get_sentence_bleu=0, original_gui_filepath=None, style=style)
            project = Projects.get_project_by_id(project_id)
            project.html_code = html
            project.deploy_url = f'http://localhost:5000/deploy/{project_id}'
            db.session.add(project)
            db.session.commit()
            K.clear_session()
            return get_project(project_id)
    else:
        return render_template('generator_page.html')


@app.route('/project/<id>', methods=['GET'])
def get_project(id):
    return jsonify(Projects.get_project_by_id(id).to_dict())


@app.route('/dashboard', methods=['GET'])
def dash():
    return jsonify([project.to_dict() for project in Projects.query.all()])


@app.route('/deploy/<project_id>', methods=['GET'])
def deploy(project_id):
    project = Projects.get_project_by_id(project_id)
    return project.html_code


@app.route('/html/<id>', methods=['POST'])
def change_html(id):
    project = Projects.get_project_by_id(id)
    project.html_code = request.form.get('html_code')
    db.session.add(project)
    db.session.commit()
    return get_project(id)


@app.route('/output/<path:path>')
def generated(path):
    return send_from_directory('generated', path)


@app.route('/upload/<path:path>')
def uploaded(path):
    return send_from_directory('upload', path)


@app.route('/static/<path:path>')
def staticpath(path):
    return send_from_directory('static', path)
