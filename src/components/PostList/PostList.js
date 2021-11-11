import React from 'react';
import Post from "../Post/Post";

const PostList = ({ posts, username, token, handleDelete }) => {

	const listPost = posts.map((post) => <Post key={post.id} post={post} username={username} token={token} handleDelete={handleDelete}/>)

	return (
		<div>
			{ listPost }
		</div>
	);
};

export default PostList;