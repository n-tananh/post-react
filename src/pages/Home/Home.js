import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostList from "../../components/PostList/PostList";
import './Home.css'

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts?q=eveniet'
		}).then(response => { // model for response
			setPosts(response.data)
		}).catch(error => {
			console.log(error)
		})

	}, [])

	return (
		<div className="home__wrapper">
			<PostList posts={posts}/>
		</div>
	);
};

export default Home;