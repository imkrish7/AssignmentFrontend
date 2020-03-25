import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route , Redirect} from 'react-router-dom'
import Default from './Views/DefaultPage/DefaultPage';
import Registration from './Views/Registration/Registration';
import Login from './Views/Login/Login';
import Verify from './Views/Verify/Verify';
import ForgetPassword from './Views/Forget Password/ForgetPassword';
import ForgetPasswordOTP from './Views/ForgetPasswordOTP/ForgetPasswordOTP';
import DefaultLayout from './Container/DefaultLayout';
import ResendOTP from './Views/ResendOTP/ResendOTP';

const isAuthenticated = ()=>{
	return localStorage.getItem('Authorization') ? true : false;
}

const PrivateRoute = ({ component: Component, ...rest})=>{

return <Route {...rest} render={props=> isAuthenticated() ? (<Component {...props} />): <Redirect to={{ pathname:"/home",  state: { from: props.location}}} />} />;
}


function App() {
  return <Router>
			<Switch>
				<Route exact path="/" component={Default} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/verify" component={Verify} />
				<Route exact path="/forget_password" component={ForgetPassword} />
				<Route exact path="/forget_password_otp" component={ForgetPasswordOTP} />
				<Route exact path="/resend_otp" component={ResendOTP} />
				<PrivateRoute path="/" component={DefaultLayout} />
			</Switch>
		</Router>;
}

export default App;
