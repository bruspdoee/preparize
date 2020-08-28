import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Alert from './components/Alert';
import Navbar from './containers/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectedRoute';
// import Questions from './pages/FAQ/index';
import { user as userAPI } from "./utils/API";
import './App.css';
import FAQ from './pages/FAQ';
import History from './pages/History';

function App() {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [alertInfo, setAlertInfo] = useState({message:"", theme:"success"});
	const [jobs, setJob] = useState({});

   useEffect(() => {
		// no catch, add if you want to check for it.
		// only setting user if we got one, to avoid rerendering the page.
		userAPI.authenticate()
			.then(res => res.data ? setUser(res.data) : 0)
			// repress the authenticate route error if recieved one.
			.catch(e => console.log(e))
   }, []);
   
	return (
		<>
			<Router>
				<Route render={ props => 
					<Navbar user={user} setUser={setUser} {...props} />
				} />
				<LoadingSpinner isLoading={loading} />
				<Switch>
					<Route
						exact
						path='/'
						render={ props => (
							<Login
								{...props}
								{...{ user, setUser, setLoading, setAlertInfo }} 
							/>
						)}
					/>
					<Route
						path='/login'
						render={ () => <Redirect to="/" />}
					/>
					<Route 
						exact 
						path='/signup' 
						render={ props => 
							<Signup
								{...props}
								user={user}
								setUser={setUser}
								setLoading={setLoading} 
								setAlertInfo={setAlertInfo}
							/>
						}
						{...{ user, setUser, setLoading, setAlertInfo }} />
					<Route exact path="/home" 
						render={props => 
							<Home 
							{...props} 
							jobs={jobs} 
							setJob={setJob} 
							user={user} 
							{...{user, 
								// loading
							} 
							} />
						}>
					</Route>
					<Route exact path="/faq"> <FAQ /> </Route>
					<Route exact path="/history"> <History /> </Route>
					<Route component={NoMatch} />
				</Switch>
			</Router>
			{ alertInfo.message 
				? <Alert alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
				: <></>
			}
			
		</>
	);
}

export default App;
