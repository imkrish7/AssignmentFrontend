import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRegister } from '../../Actions/userActions';
import Style from '../../Styles/form.module.scss';
class Registration extends Component{

	constructor(props){
		super(props);
		this.state = {
			name: "",
			email: "",
			countryCode: '',
			phoneNumber: '',
			password: ''
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
		const  params = {
			email: this.state.email,
			name: this.state.name,
			password: this.state.password,
			countryCode: this.state.countryCode,
			phoneNumber: this.state.phoneNumber
		}

		this.props.getRegister(params);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Registration</div>
					<div className={Style.form_wrapper}>
						<form onSubmit={this.handleSubmit}>
							<div className={Style.input_wrapper}>
								<input type="text" required value={this.state.name} name="name" onChange={this.handleChange} className={Style.input} />
								<label className={Style.label}>
									<span className={Style.label_text}>Name</span>
								</label>
							</div>
							<div className={Style.input_wrapper}>
								<input type="email" required value={this.state.email} name="email" onChange={this.handleChange} className={Style.input} />
								<label className={Style.label}>
									<span className={Style.label_text}>Email</span>
								</label>
							</div>
							<div className={Style.input_wrapper}>
								<input type="text" required value={this.state.countryCode} name="countryCode" onChange={this.handleChange} className={Style.input} />
								<label className={Style.label}>
									<span className={Style.label_text}>Country Code</span>
								</label>
							</div>
							<div className={Style.input_wrapper}>
								<input type="text" required value={this.state.phoneNumber} name="phoneNumber" onChange={this.handleChange} className={Style.input} />
								<label className={Style.label}>
									<span className={Style.label_text}>Phone Number</span>
								</label>
							</div>
							<div className={Style.input_wrapper}>
								<input type="password" required value={this.state.password} name="password" onChange={this.handleChange} className={Style.input} />
								<label className={Style.label}>
									<span className={Style.label_text}>Password</span>
								</label>
							</div>
							<div className={Style.btn_wrapper}>
								<button className={Style.btn}>Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>;
	}
}

const mapStateToProps = state => {
	return{ 
		userRegisterResponse: state.registerResponse 
	}
} 

const mapDispatchToProps = dispatch =>{
	return{
		getRegister: params => dispatch(getRegister(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);