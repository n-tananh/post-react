import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
import Contact from "./pages/Contact/Contact";
import PostDetail from "./pages/PostDetail/PostDetail";
import Footer from "./components/Footer/Footer";
import PostEdit from "./pages/PostEdit/PostEdit";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import ScrollToTop from "./components/ScrollOnTop/ScrollOnTop";
import {API_URL} from "./common/constant";
import axios from "axios";


function App() {
	const [token, setToken] = useState(localStorage.getItem('TOKEN'));
	const [username, setUsername] = useState(localStorage.getItem('USERNAME'));

	const handleDelete = e => {
		const id = e.currentTarget.value;
		const url = `${API_URL.GET_POSTS}/${id}`;
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

		axios({
			method: 'DELETE',
			url: url
		}).then(res => {
			console.log("Delete done", res)
			window.location.href = "/"
		}).catch(error => {
			console.log(error.message)
		})
	};

	useEffect(() => {
		if (token) {
			localStorage.setItem('TOKEN', token);
		} else {
			localStorage.removeItem('TOKEN');
		}
		if (username) {
			localStorage.setItem('USERNAME', username);
		} else {
			localStorage.removeItem('USERNAME');
		}
	}, [token, username])

	return (
		<Router>
			<ScrollToTop/>
			<div className="app__wrapper">
				<NavBar username={username}/>
				<Switch>
					<Route exact path="/" render={() => <Home token={token} username={username} handleDelete={handleDelete}/>}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/posts"
								 render={() => <Posts token={token} username={username} handleDelete={handleDelete}/>}/>
					<Route exact path="/contact" component={Contact}/>
					<Route exact path="/details/:id" component={PostDetail}/>
					<Route exact path="/edit/:id" render={() => <PostEdit token={token}/>}/>

					<Route exact path="/login">
						{username ? <Redirect to="/"/> : <Login setToken={setToken} setUsername={setUsername}/>}
					</Route>
					<Route path="/logout" exact render={() =>
						<Logout
							setToken={setToken}
							setUsername={setUsername}
						/>
					}/>
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
