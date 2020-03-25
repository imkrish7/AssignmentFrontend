import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Profile from '../Static/media/profile.svg';
import Style from '../Styles/default_header.module.scss';
class DefaultHeader extends Component{
	constructor(props){
		super(props)
		this.state = {
			actions: false
		}
	}

	toggle = ()=>{
		this.setState({
			actions: !this.state.actions
		})
	}


	render(){
		return <header className={Style.container}>
				<div className={Style.logo}>Logo</div>
				<nav className={Style.nav}>
					<div onClick={this.toggle} className={Style.profile}>
						<img src={Profile} />
					</div>
					{this.state.actions && <div className={Style.actions}>
							<Link to="/reset_password">
								<button className={Style.btn}>Reset Password</button>
							</Link>
							<button onClick={this.props.logout} className={[Style.btn, Style.no_border].join(' ')}>
								Logout
							</button>
						</div>}
				</nav>
			</header>;
	}
}

export default DefaultHeader;