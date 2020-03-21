import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Default from './Views/DefaultPage/DefaultPage';
import Registration from './Views/Registration/Registration';

function App() {
  return (
    <Router>
		<Switch>
			<Route exact path="/" component={Default} />
			<Route exact path="/registration" component={Registration} />
		</Switch>
    </Router>
  );
}

export default App;
