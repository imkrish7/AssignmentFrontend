import React, { Component } from 'react';
import Style from '../../Styles/forget_password.module.scss';
class ForgetPassword extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Forget Password</div>
					<div className={Style.form_wrapper}>
						<div className={Style.input_wrapper}>
							<input placeholder="Enter your OTP" className={Style.input} />
						</div>
						<div className={Style.btn_wrapper}>
							<button className={Style.btn}>Submit</button>
						</div>
						<div className={Style.input_wrapper}>
							<input placeholder="Enter your new password" className={Style.input} />
						</div>
						<div className={Style.input_wrapper}>
							<input placeholder="Enter your new repeat password" className={Style.input} />
						</div>
						<div className={Style.btn_wrapper}>
							<button className={Style.btn}>Submit</button>
						</div>
					</div>
				</div>
			</div>;
	}
}

export default ForgetPassword;