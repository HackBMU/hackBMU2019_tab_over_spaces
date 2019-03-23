import React, { Component } from 'react';
import './base.css';
import image from './image.jpg'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleClick(event){
        console.log("Reached here");
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
						<a className="logreg-icon logreg-icon--prev" href="./index" title="Home"><svg className="icon icon--arrow"> <use xlinkHref="#icon-arrow"> </use> </svg> </a>
					</div>
					<h1 className="logreg-header__title">Login</h1>
					<p className="info">Login to start using.</p>
				</header>
					<div className="form__item">
						<label className="form__label" >Email Address</label>
						<input className="form__input" type="email" onChange = {event => this.setState({email : event.target.value})} name="email" id="email" />
					</div>
					<div className="form__item">
						<label className="form__label" >Password</label>
						<div className="form__input-wrap">
							<input className="form__input" type="password" onChange = {event => this.setState({password : event.target.value})} name="password" id="password" />
                            <p className="form__password-strength" id="strength-output" style={{display: "none"}}></p>
						</div>
					</div>
					<div className="form__item form__item--actions">
						<span>Don't have an account? <Link className="form__link" to="/register">Register here</Link></span>
						<Link className="form__button" type="button" to = "/" name="signin" value="Login">Login</Link>
					</div>
			
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

export default Login;
