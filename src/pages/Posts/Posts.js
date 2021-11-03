import React, {useEffect, useState} from 'react';
import PostList from "../../components/PostList/PostList";
import axios from "axios";

const Posts = () => {
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
		<div>
			<PostList posts={ posts }/>
		</div>
	);
};

export default Posts;