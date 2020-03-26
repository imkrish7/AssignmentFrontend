import React, { Component } from 'react';
import { connect } from 'react-redux';
import Style from '../../Styles/forget_password.module.scss';
import { getForgetPasswordOTPVerify, getForgetPassword} from '../../Actions/userActions';
class ForgetPassword extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			otp: '',
			password: '',
			repeatPassword: ''
		}
	}

	componentDidMount(){
		const url = (new URL(document.location).searchParams);
		const email = url.get('email')
		this.setState({
			email: email
		})
	}

	handleChange = (e)=>{
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	verifyOtp = ()=>{
		const params = {
			email : this.state.email,
			otp: this.state.otp
		}

		this.props.getForgetPasswordOTPVerify(params);
	}

	isPassword = () =>{
		return this.state.password.length > 0 && this.state.password == this.state.repeatPassword; 
	}

	isOtp = () =>{
		return this.state.otp.length > 0 && this.state.otp.length == 4
	}

	forgetPassword = ()=>{
		
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Forget Password</div>
					<div className={Style.form_wrapper}>
						{this.props.forgetPasswordOtpVerifyResponse.data && this.props.forgetPasswordOtpVerifyResponse.data.success ? <React.Fragment>
									<div className={Style.input_wrapper}>
										<input onChange={this.handleChange} value={this.state.password} name="password" placeholder="Enter your new password" className={Style.input} />
									</div>
									<div className={Style.input_wrapper}>
										<input onChange={this.handleChange} value={this.state.repeatPassword} name="repeatPassword" placeholder="Enter your new repeat password" className={Style.input} />
									</div>
									<div className={Style.btn_wrapper}>
										<button disabled={!this.isPassword()} onClick={this.forgetPassword} className={Style.btn}>Submit</button>
									</div>
								</React.Fragment> : <React.Fragment>
									<div className={Style.input_wrapper}>
										<input onChange={this.handleChange} name="otp" placeholder="Enter your OTP" className={Style.input} />
									</div>
									<div className={Style.btn_wrapper}>
										<button disabled={!this.isOtp()} onClick={this.verifyOtp} className={Style.btn}>
											Submit
										</button>
									</div>
								</React.Fragment>}
					</div>
				</div>
			</div>;
	}
}

const mapStateToProps = state => {
	return { 
		forgetPasswordOtpVerifyResponse: state.forgetPasswordOtpVerifyResponse,
		forgetPasswordResponse: state.forgetPasswordResponse
	}
}

const mapDispatchToProps = dispatch =>{
	return { 
		getForgetPasswordOTPVerify: params => dispatch(getForgetPasswordOTPVerify(params)),
		getForgetPassword: params => dispatch(getForgetPassword(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);