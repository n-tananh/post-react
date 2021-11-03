import React from 'react';
import {useParams} from "react-router-dom";

const PostDetails = () => {
	let { id } = useParams();

	// call api here to get post details

	return (
		<div>
			post detail { id }
		</div>
	);
};

export default PostDetails;