import React, { Component } from 'react';
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

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Reset Password</div>
					<div className={Style.form_wrapper}>
						<div className={Style.input_wrapper}>
							<input placeholder="Enter your old password" className={Style.input} />
						</div>
						<div className={Style.input_wrapper}>
							<input placeholder="Enter your new password" className={Style.input} />
						</div>
						<div className={Style.input_wrapper}>
							<input placeholder="Enter your repeat password" className={Style.input} />
						</div>
						<div className={Style.btn_wrapper}>
							<button disabled={!this.isValid()} className={Style.btn}>Submit</button>
						</div>
					</div>
				</div>
			</div>;
	}
}

export default ResetPassword;