import React, { Component } from 'react';
import Style from '../Styles/default_header.module.scss';
class DefaultHeader extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<header className={Style.container}>
				<div className={Style.logo}>Logo</div>
				<nav className={Style.nav}>
					<button onClick={ this.props.logout} className={Style.btn}>Logout</button>
				</nav>
			</header>
		)
	}
}

export default DefaultHeader;