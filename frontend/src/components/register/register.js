import React, { Component } from 'react';
import './base.css';
import image from './image.jpeg'
import { Link } from 'react-router-dom';



class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email: '',
            password: '',
            confPass: ''
        }
    }

    handleClick(event){
        console.log("Reached here")
        // var apiBaseUrl = "http://localhost:4000/api/";
        // var self = this;
        // var payload={
        //     "email":this.state.username,
        //     "password":this.state.password
        // }
        // axios.post(apiBaseUrl+'login', payload)
        //      .then(function (response) {
        //         console.log(response);
        //         if(response.data.code == 200){
        //             console.log("Login successfull");
        //         }
        //         else if(response.data.code == 204){
        //             console.log("Username password do not match");
        //             alert("username password do not match")
        //         }
        //         else{
        //             console.log("Username does not exists");
        //             alert("Username does not exist");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    componentDidUpdate(){
        console.log(this.state)
    }

  render() {
    return (
        <div className="demo-1 loading">
            <svg className="hidden">
                <symbol id="icon-arrow" viewBox="0 0 24 24">
                    <title>arrow</title>
                    <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
                </symbol>
            </svg>
		<main>
			<div className="content content--side">
				<header className="logreg-header">
					<div className="logreg-links">
						<Link className="logreg-icon logreg-icon--prev" to="/" title="Home"><svg className="icon icon--arrow"> <use xlinkHref="#icon-arrow"> </use> </svg> </Link>
					</div>
					<h1 className="logreg-header__title">Register</h1>
					<p class="info">Fill up the details to register and start using the app for free.</p>
				</header>
				
                <form className="form" action="" method="" id="contact_form" name="userRegForm">
					<div className="form__item">
						<label className="form__label" >First Name</label>
						<input type="text" name="firstName" id="firstName" className="form__input" onChange = {event => this.setState({firstName : event.target.value})} required title="First name is required."  />
					</div>
                    <div className="form__item">
						<label className="form__label" >Last Name</label>
						<input type="text" name="lastName" id="lastName" className="form__input" onChange = {event => this.setState({lastName : event.target.value})} required title="Last name is required."  />
					</div>
                    
					<div className="form__item">
						<label className="form__label" >Email Address</label>
						<input type="email" name="email" id="email" className="form__input" onChange = {event => this.setState({email : event.target.value})} required pattern="^.{0,64}$" title="Enter an email address with a maximum of 64 characters."  />
					</div>
					<div className="form__item">
						<label className="form__label" >Password</label>
						<div className="form__input-wrap">
							<input type="password" name="password" id="password" className="form__input" onChange = {event => this.setState({password : event.target.value})} id="password"  required />
							<p className="form__password-strength" id="strength-output"></p>
						</div>
					</div>
                    <div className="form__item">
						<label className="form__label" >Confirm Password</label>
						<input type="password" name="passwordConfirm" id="passwordConfirm" onChange = {event => this.setState({confPass : event.target.value})} className="form__input" title="Passwords must match." />
					</div>
					<div className="form__item form__item--actions">
						<span>Already have an account? <Link className="form__link" to="/login">Login here</Link></span>
						<input className="form__button" type="submit" name="signup" value="Signup" />
					</div>
				</form>
			
			</div>
			<div className="content content--side">
				<div className="poster" style= {{backgroundImage: `url(${image})`}}></div>
				<div className="canvas-wrap">
					<canvas></canvas>
				</div>
			</div>
		</main>
        </div>
    )
  }
}

export default Register;
