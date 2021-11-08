import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
import Contact from "./pages/Contact/Contact";
import PostDetail from "./pages/PostDetail/PostDetail";
import Footer from "./components/Footer/Footer";
import PostEdit from "./pages/PostEdit/PostEdit";
import NavBar from "./components/NavBar/NavBar";

function App() {

	return (
		<Router>
			<div className="app__wrapper">
				<NavBar/>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/about" component={About} exact/>
					<Route path="/posts" component={Posts} exact/>
					<Route path="/contact" component={Contact} exact/>
					<Route path="/details/:id" component={PostDetail} exact/>
					<Route path="/edit/:id" component={PostEdit} exact/>
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
