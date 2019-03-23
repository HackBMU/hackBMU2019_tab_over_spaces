from app import db


class User(db.Model):
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


class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __init__(self, user_id):
        self.user_id = user_id

    def __repr__(self):
        return '<Lottery Ticket %r belonging to %r>' % (self.id, self.user.full_name)