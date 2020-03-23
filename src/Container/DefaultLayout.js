import React, { Component } from 'react';
import DefaultHeader from './DefaultHeader';
import Style from '../Styles/default_layout.module.scss';
class DefaultLayout extends Component{

	constructor(props){
		super(props);
	}

	logout = ()=>{
		localStorage.clear();
		window.location.href = '/';
	}

	render(){
		return <div className={Style.container}>
					<DefaultHeader logout={this.logout} />
					<main className={Style.main}></main>
		</div>
	}
}

export default DefaultLayout;