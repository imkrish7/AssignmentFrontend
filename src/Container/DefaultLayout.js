import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DefaultHeader from './DefaultHeader';
import Style from '../Styles/default_layout.module.scss';
import Routes from '../privateRoutes';
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
				<main className={Style.main}>
						<Suspense fallback={() => '....loading'}>
							<Switch>
								{
									Routes.map((route, idx) => {
										return route.component ? <Route key={idx} path={route.path} name={route.name} exact={route.exact} render={props => <route.component {...props} />} /> : null;
									})
								}
								<Redirect from="/" to="/dashboard" />
							</Switch>
						</Suspense>
				</main>
			</div>;
	}
}

export default DefaultLayout;