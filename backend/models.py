from app import db
from sqlalchemy_serializer import SerializerMixin


class User(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.UnicodeText)
    email_id = db.Column(db.UnicodeText)
    password = db.Column(db.UnicodeText)
    projects = db.relationship('Projects', backref='user', lazy=True)

    def __init__(self, full_name, email_id, password):
        self.full_name = full_name
        self.email_id = email_id
        self.password = password
    
    def get_projects(self):
        return self.projects
        
    @staticmethod
    def get_by_id(id):
        return User.query.filter_by(id=id).first()
    
    @staticmethod
    def get_by_email(email):
        return User.query.filter_by(email_id=email).first()

    def __repr__(self):
        return '<User %r>' % self.full_name


class Projects(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    model_name = db.Column(db.UnicodeText)
    html_code = db.Column(db.UnicodeText)
    screenshot_path = db.Column(db.UnicodeText)
    deploy_url = db.Column(db.UnicodeText)

    @staticmethod
    def get_project_by_id(id):
        return Projects.query.filter_by(id=id).first()

    def __init__(self, model_name='None'):
        self.model_name = model_name

    def __repr__(self):
        return '<Project %r belonging to %r>' % (self.id, self.user.full_name)
