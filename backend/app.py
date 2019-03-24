from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS
from model.src.classes.inference.Sampler import *


app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'upload'
app.config['OUTPUT_FOLDER'] = 'output'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://tabs_over_spaces:1TabOver4Spaces!@localhost/tabs_over_spaces'
app.secret_key = 'this_is_a_secret_key'
ALLOWED_EXTENSIONS = ['png']
db = SQLAlchemy(app)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def prep_model(model_name='sketch'):
    '''
    Ensure model is prepped and ready to use
    '''
    if model_name == 'sketch':
        model = Sampler(model_json_path='model/bin/model_json.json', model_weights_path='model/bin/weights.h5')
    elif model_name == 'image':
        raise Exception
    else:
        raise Exception
    return model

from views import *
from models import *

db.create_all()

if __name__ == '__main__':
    app.run()
