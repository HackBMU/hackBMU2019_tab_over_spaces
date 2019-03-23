from app import *
from flask import session, redirect, url_for, render_template, abort, request, flash, send_from_directory, jsonify
import os
from models import Projects


@app.route('/models/<model_name>', methods=['GET', 'POST'])
def generate(model_name):
    if request.method == 'POST':
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
            file_address = os.path.join(os.getcwd(), app.config['UPLOAD_FOLDER'], 'image.png')
            file.save(file_address)
            output_folder = os.path.join(os.getcwd(), app.config['OUTPUT_FOLDER'])
            html = model.convert_single_image(output_folder, png_path=file_address, print_generated_output=0, get_sentence_bleu=0, original_gui_filepath=None, style='default')
            return jsonify({'html': html})
    else:
        return render_template('generator_page.html')


@app.route('/dashboard', methods=['GET'])
def index():
    return Projects.query.all()

@app.route('/output/<path:path>')
def generated(path):
    return send_from_directory('generated', path)

@app.route('/upload/<path:path>')
def uploaded(path):
    return send_from_directory('upload', path)

@app.route('/static/<path:path>')
def staticpath(path):
    return send_from_directory('static', path)

