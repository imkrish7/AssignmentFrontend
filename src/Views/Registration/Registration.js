import React, { Component } from 'react';
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
								<input type="text" required value={this.state.email} name="email" onChange={this.handleChange} className={Style.input} />
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
								<input type="password
								" required value={this.state.password} name="password" onChange={this.handleChange} className={Style.input} />
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

export default Registration;