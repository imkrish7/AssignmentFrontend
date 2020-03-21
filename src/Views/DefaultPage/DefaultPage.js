import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from '../../Styles/default_page.module.scss';

class DefaultPage extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.action}>
					<button className={[Style.btn, Style.orange].join(' ')}>
						<Link to="/login">Sign In</Link>
					</button>
				</div>
				<div className={Style.action}>
					<Link to="/registration">
						<button className={[Style.btn, Style.red].join(' ')}>Register</button>
					</Link>
				</div>
			</div>;
	}
}

export default DefaultPage;