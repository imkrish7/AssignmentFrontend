import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResetPassword } from '../../Actions/userActions';
import Style from '../../Styles/verify.module.scss';
class ResetPassword extends Component {

	constructor(props){
		super(props);
		this.state = {
			oldPassword: '',
			newPassword: '',
			repeatNewPassword: ''
		}
	}

	isValid = ()=>{
		return this.state.oldPassword.length > 0 && this.state.newPassword.length > 0 && this.state.newPassword == this.state.repeatNewPassword
	}

	handleChange = (e)=>{
		const { name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = ()=>{
		const params = {
			oldPassword: this.state.oldPassword,
			newPassword: this.state.newPassword
		}

		this.props.getResetPassword(params);
	}

	home = ()=>{
		window.location.href = '/dashboard';
	}

	back = ()=>{
		window.location.reload();
	}
	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Reset Password</div>
					{this.props.resetPasswordResponse.data && this.props.resetPasswordResponse.data.success ? <React.Fragment>
								<h1>Password Successfull reset</h1>
								<button onClick={this.home} className={Style.btn}>
									Dashboard
								</button>
							</React.Fragment> : this.props.resetPasswordResponse.error && !this.props.resetPasswordResponse.error.success ? <React.Fragment>
									<h1>
										{this.props.resetPasswordResponse.error && this.props.resetPasswordResponse.error.msg}
									</h1>
									<button onClick={this.back} className={Style.btn}>Back</button>
								</React.Fragment> : <div className={Style.form_wrapper}>
									<div className={Style.input_wrapper}>
										<input type="password" onChange={this.handleChange} value={this.state.oldPassword} name="oldPassword" placeholder="Enter your old password" className={Style.input} />
									</div>
									<div className={Style.input_wrapper}>
										<input type="password" onChange={this.handleChange} value={this.state.newPassword} name="newPassword" placeholder="Enter your new password" className={Style.input} />
									</div>
									<div className={Style.input_wrapper}>
										<input type="password" onChange={this.handleChange} value={this.state.repeatNewPassword} name="repeatNewPassword" placeholder="Enter your repeat password" className={Style.input} />
									</div>
									<div className={Style.btn_wrapper}>
										<button disabled={!this.isValid()} onClick={this.handleSubmit} className={Style.btn}>
											Submit
										</button>
									</div>
								</div>}
				</div>
			</div>;
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		getResetPassword: params=> dispatch(getResetPassword(params))
	}
}

const mapStateToProps = state =>{
	return {
		resetPasswordResponse: state.resetPasswordResponse
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);