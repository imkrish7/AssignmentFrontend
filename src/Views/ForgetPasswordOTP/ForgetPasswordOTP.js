import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
	back = ()=>{
		window.location.reload();
	}
	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Forget Password</div>
					<div className={Style.form_wrapper}>
						{this.props.forgetPasswordOtpResponse.data && this.props.forgetPasswordOtpResponse.data.success ? <React.Fragment>
									<h1>Please Check your mail</h1>
									<Link to="/login">
										<button className={Style.btn}>Login</button>
									</Link>
								</React.Fragment> : this.props.forgetPasswordOtpResponse.error && !this.props.forgetPasswordOtpResponse.error.success ? <React.Fragment>
										<h1>
											{this.props.forgetPasswordOtpResponse.error && this.props.forgetPasswordOtpResponse.error.msg}
										</h1>
										<button onClick={this.back} className={Style.btn}>Back</button>
									</React.Fragment> : <form onSubmit={this.handleSubmit}>
										<div className={Style.input_wrapper}>
											<input required type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter your email" className={Style.input} />
										</div>
										<div className={Style.btn_wrapper}>
											<button className={Style.btn}>Submit</button>
										</div>
									</form>}
					</div>
				</div>
			</div>;
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