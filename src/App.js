import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route , Redirect} from 'react-router-dom'
import Default from './Views/DefaultPage/DefaultPage';
import Registration from './Views/Registration/Registration';
import Login from './Views/Login/Login';
import Verify from './Views/Verify/Verify';
import ForgetPassword from './Views/Forget Password/ForgetPassword';
import DefaultLayout from './Container/DefaultLayout'

const isAuthenticated = ()=>{
	return localStorage.getItem('Authorization') ? true : false;
}

const PrivateRoute = ({ component: Component, ...rest})=>{

return<Route {...rest} render={props=> isAuthenticated() ? (<Component {...props} />): <Redirect to={{ pathname:"/",  state: { from: props.location}}} />} />;
}


function App() {
  return <Router>
			<Switch>
				<Route exact path="/" component={Default} />
				<Route exact path="/registration" component={Registration} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/verify" component={Verify} />
				<Route exact path="/forget_password" component={ForgetPassword} />
				<PrivateRoute exact path="/dashboard" component={DefaultLayout} />
			</Switch>
		</Router>;
}

export default App;
