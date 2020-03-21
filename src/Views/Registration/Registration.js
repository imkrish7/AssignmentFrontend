import React, { Component } from 'react';
import Style from '../../Styles/registration.module.scss';
class Registration extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Registration</div>
					<div className={Style.form_wrapper}>
						<form>
							<div className={Style.input_wrapper}>
								<label className={Style.label}>
									Name
									<input className={Style.input} />
								</label>
							</div>
						</form>
					</div>
				</div>
			</div>;
	}
}

export default Registration;