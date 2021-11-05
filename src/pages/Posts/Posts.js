import React, {useEffect, useState} from 'react';
import PostList from "../../components/PostList/PostList";
import axios from "axios";
import {API_URL} from '../../common/constant'
import './Posts.css'
import Loading from "../../components/Loading/Loading";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading]	= useState(true);

	useEffect(() => {
		axios({
			method: 'GET',
			url: API_URL.GET_POSTS
		}).then(response => { // model for response
			setPosts(response.data)
			setIsLoading(false)
		}).catch(error => {
			console.log(error)
		})

	}, [])

	if (isLoading) return <Loading type="bars" color="#333"/>;

	return (
		<div className="posts__wrapper">
			<PostList posts={ posts }/>
		</div>
	);
};

export default Posts;