import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
import Contact from "./pages/Contact/Contact";
import PostDetails from "./components/PostDetails/PostDetails";
import Header from "./components/Header/Header";

function App() {
  return (
			<Router>
				<div className="app__wrapper">
					<Header/>
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/posts" component={Posts} />
						<Route path="/contact" component={Contact} />
						<Route path="/details/:id" component={PostDetails} />
					</Switch>
				</div>
			</Router>
  );
}

export default App;
