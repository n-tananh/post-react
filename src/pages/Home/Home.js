import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostList from "../../components/PostList/PostList";
import './Home.css'
import {API_URL} from '../../common/constant'
import {NavLink} from "react-router-dom";
import '../../common/common.css'

const Home = () => {
	const [posts, setPosts] = useState([]);

	// TODO refactor call api here
	useEffect(() => {
		axios({
			method: 'GET',
			url: API_URL.GET_POSTS
		}).then(response => { // model for response
			setPosts(response.data)
		}).catch(error => {
			console.log(error)
		})

	}, [])

	return (
		<div className="home__wrapper">
			<div className="home__content">
				<PostList posts={posts}/>
				<NavLink to="/posts" className="home btn__link">View All Posts →</NavLink>
			</div>
		</div>
	);
};

export default Home;