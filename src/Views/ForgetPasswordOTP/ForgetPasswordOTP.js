import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForgetPasswordOtp } from '../../Actions/userActions';
import Style from '../../Styles/forget_password.module.scss';
class ForgetPasswordOTP extends Component{

	constructor(props){
		super(props)
		this.state = {
			email: ''
		}
	}

	handleChange = (e)=>{
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		const params = {
			email: this.state.email
		}
		this.props.getForgetPasswordOtp(params);
	}
	render(){
		return(
			<div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Forget Password</div>
					<div className={Style.form_wrapper}>
						<form onSubmit={this.handleSubmit}>
							<div className={Style.input_wrapper}>
								<input required type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter your email" className={Style.input}></input>
							</div>
							<div className={Style.btn_wrapper}>
								<button className={Style.btn}>Submit</button>
							</div>
						</form>
					</div>  
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		forgetPasswordOtpResponse: state.forgetPasswordOtpResponse
	}
}

const mapDispatchToProps = dispatch =>{
	return { 
		getForgetPasswordOtp: params=> dispatch(getForgetPasswordOtp(params))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordOTP);