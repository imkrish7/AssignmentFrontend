import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVerify } from '../../Actions/userActions';
import Style from '../../Styles/verify.module.scss';

class Verify extends Component{

	constructor(props){
		super(props);
		this.state = {
			email:'',
			otp: ''
		}
	}

	componentDidMount(){
		const url = (new URL(document.location).searchParams);
		const email = url.get('email');
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

	handleSubmit = ()=>{
		const params = {
			email: this.state.email,
			otp: this.state.otp
		}	
		
		this.props.getVerify(params);
	}

	back = ()=>{
		window.location.reload();
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Verify</div>
					{this.props.verifyResponse.data && this.props.verifyResponse.data.success ? <React.Fragment>
								<h1>Account is verified</h1>
								<Link to="/login"><button className={Style.btn}>Login</button></Link>
							</React.Fragment> : this.props.verifyResponse.error && !this.props.verifyResponse.error.success ? <React.Fragment>
									<h1>
										{this.props.verifyResponse.error && this.props.verifyResponse.error.msg}
									</h1>
									<button onClick={this.back} className={Style.btn}>Back</button>
								</React.Fragment> : <div className={Style.form_wrapper}>
									<div className={Style.input_wrapper}>
										<input name="otp" onChange={this.handleChange} value={this.state.otp} placeholder="Enter your verification code" className={Style.input} />
									</div>
									<div className={Style.btn_wrapper}>
										<button onClick={this.handleSubmit} className={Style.btn}>
											Submit
										</button>
									</div>
								</div>}
				</div>
			</div>;
	}
}

const mapStateToProps = state =>{
	return { 
		verifyResponse: state.verifyResponse
	}
}

const mapDispatchToProps = dispatch => {
	return { 
		getVerify: params=> dispatch(getVerify(params))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Verify);