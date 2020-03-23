import React, { Component } from 'react';
import Style from '../../Styles/verify.module.scss';

class Verify extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return( 
			<div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.header}>Verify</div>
					<div className={Style.form_wrapper}>
						<div className={Style.input_wrapper}>
							<input placeholder="Enter your verification code" className={Style.input}></input>
						</div>
						<div className={Style.btn_wrapper}>
							<button className={Style.btn}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Verify;