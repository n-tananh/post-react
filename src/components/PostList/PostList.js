import React from 'react';
import Post from "../Post/Post";

const PostList = ({posts}) => {
	const listPost = posts.map((post) => <Post key={post.id} post={post}/>)

	return (
		<div>
			{ listPost }
		</div>
	);
};

export default PostList;