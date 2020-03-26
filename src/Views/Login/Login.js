import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect }  from 'react-redux';
import { getLogin } from '../../Actions/userActions';
import Modal from '../Modal/Modal';
import Style from '../../Styles/form.module.scss';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const params = {
			email: this.state.email,
			password: this.state.password
		}

		this.props.getLogin(params);
	};

	isLogin = ()=>{
		return localStorage.getItem('Authorization') ? <Redirect to={{pathname: '/dashboard'}} /> : <Redirect to={{ pathname:"/login"}} />;
	}

	back = ()=>{
		window.location.reload();
	}

	render() {
		return <div className={Style.container}>
				{this.isLogin()}
				<div className={Style.card}>
					<div className={Style.header}>Login</div>
					{this.props.loginResponse.error && !this.props.loginResponse.error.success ? (this.props.loginResponse.error.notVerified ? <div className={Style.warning}>
									<h1>Account is not verified</h1>
									<Link to="/resend_otp">
										<button className={Style.btn}>Resend OTP</button>
									</Link>
								</div> : <React.Fragment>
									<h1>
										{this.props.loginResponse.error && this.props.loginResponse.error.msg}
									</h1>
									<button onClick={this.back} className={Style.btn}>Back</button>
								</React.Fragment>) : <React.Fragment>
								<div className={Style.form_wrapper}>
									<form onSubmit={this.handleSubmit}>
										<div className={Style.input_wrapper}>
											<input type="text" required value={this.state.email} name="email" onChange={this.handleChange} className={Style.input} />
											<label className={Style.label}>
												<span className={Style.label_text}>Email</span>
											</label>
										</div>
										<div className={Style.input_wrapper}>
											<input type="password" required value={this.state.password} name="password" onChange={this.handleChange} className={Style.input} />
											<label className={Style.label}>
												<span className={Style.label_text}>Password</span>
											</label>
										</div>
										<div className={Style.btn_wrapper}>
											<button className={Style.btn}>Login</button>
										</div>
									</form>
								</div>
								<div className={Style.btn_wrapper}>
									<Link to="/forget_password">
										<button className={Style.btn_forget}>Forget Password?</button>
									</Link>
								</div>
							</React.Fragment>}
				</div>
			</div>;
	}
}

const mapStateToProps = state =>{

	return {
		loginResponse: state.loginResponse
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getLogin: params => dispatch(getLogin(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
