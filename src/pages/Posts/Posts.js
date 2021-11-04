import React, {useEffect, useState} from 'react';
import PostList from "../../components/PostList/PostList";
import axios from "axios";
import {API_URL} from '../../common/constant'

const Posts = () => {
	const [posts, setPosts] = useState([]);

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
		<div>
			<PostList posts={ posts }/>
		</div>
	);
};

export default Posts;