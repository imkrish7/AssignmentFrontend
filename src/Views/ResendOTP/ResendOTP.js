import React, { Component } from 'react';
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

	handleSubmit = ()=>{
		const params = {
			email: this.state.email
		}
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Resend OTP</div>
					<form className={Style.form} onSubmit={this.handleSubmit}>
						<div className={Style.input_wrapper}>
							<input required placeholder="Enter your email" type="email" name="email" onChange={this.handleChange} className={Style.input} />
						</div>
						<div className={Style.btn_wrapper}>
							<button disabled={!this.isValid()} type="submit" className={Style.btn}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>;
	}
}

export default ResendOTP;