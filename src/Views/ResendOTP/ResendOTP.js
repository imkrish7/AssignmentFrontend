import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getResendOTP } from '../../Actions/userActions'
import Style from '../../Styles/verify.module.scss'
class ResendOTP extends Component{

	constructor(props){
		super(props);
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

	isValid = () =>{
		return this.state.email.length > 0;
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		const params = {
			email: this.state.email
		}
		this.props.getResendOTP(params);
	}

	componentWillReceiveProps(nextProps, nextContext){
		console.log(nextProps);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Resend OTP</div>
					{this.props.resendOTPResponse.data && this.props.resendOTPResponse.data.success ? <React.Fragment>
								<h1 className={Style.info}>Please check your register mail</h1>
								<Link to="/login"><button className={Style.btn}>Login</button></Link>
							</React.Fragment> : <form className={Style.form} onSubmit={this.handleSubmit}>
								<div className={Style.input_wrapper}>
									<input required placeholder="Enter your email" type="email" name="email" onChange={this.handleChange} className={Style.input} />
								</div>
								<div className={Style.btn_wrapper}>
									<button disabled={!this.isValid()} type="submit" className={Style.btn}>
										Submit
									</button>
								</div>
							</form>}
				</div>
			</div>;
	}
}


const mapStateToProps = state => {
	return { 
		resendOTPResponse: state.resendOtpResponse
	}
}

const mapDispatchToProps = dispatch => {
	return{ 
		getResendOTP: params=> dispatch(getResendOTP(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResendOTP);