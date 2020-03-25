import React, { Component } from 'react';
import DefaultLayout from './Container/DefaultLayout'; 
import Dashboard from './Views/Dashboard/Dashboard';
import ResetPassword from './Views/ResetPassword/ResetPassword';

const Route = [
	{ path: '/', name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
	{ path: '/reset_password', exact: true, name: 'Reset Password', component: ResetPassword },
];

export default Route;
