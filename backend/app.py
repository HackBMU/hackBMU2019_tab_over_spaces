from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
import os
from model.src.classes.inference.Sampler import *


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'upload'
app.config['OUTPUT_FOLDER'] = 'output'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:1234'
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
        model = 'lel'
    elif model_name == 'image':
        model = 'lwl'
    else:
        raise Exception
    return model

from models import *
from views import *

db.create_all()

if __name__ == '__main__':
    app.run()
