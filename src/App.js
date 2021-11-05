import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
import Contact from "./pages/Contact/Contact";
import PostDetail from "./pages/PostDetail/PostDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostEdit from "./pages/PostEdit/PostEdit";

function App() {

	return (
		<Router>
			<div className="app__wrapper">
				<Header/>
				<Switch>
					<Route path="/" component={Home} exact={true}/>
					<Route path="/about" component={About} exact={true}/>
					<Route path="/posts" component={Posts} exact={true}/>
					<Route path="/contact" component={Contact} exact={true}/>
					<Route path="/details/:id" component={PostDetail} exact={true}/>
					<Route path="/edit/:id" component={PostEdit} exact={true}/>
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
