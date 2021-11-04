import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../common/constant";

const PostDetails = () => {
	let {id} = useParams();

	const [post, setPost] = useState({});

	// call api here to get post details
	useEffect(() => {
		axios({
			method: 'GET',
			url: API_URL.GET_POSTS_BY_ID + id
		}).then(response => { // model for response
			setPost(response.data)
		}).catch(error => {
			console.log(error)
		})
	}, [])

	console.log(post)

	return (
		<div className="details__wrapper">
			<div>
				{post.title}
			</div>

			<div>
				{post.body}
			</div>
		</div>
	);
};

export default PostDetails;