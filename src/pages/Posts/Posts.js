import React from 'react';
import {API_URL} from '../../common/constant'
import './Posts.css'
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import useFetch from "../../hooks/useFetch/useFetch";
import PostList from "../../components/PostList/PostList";
import HEADER_DATA from "../../common/headerConstant";

const convertData = res => res.data;
const {heading, subheading, backgroundUrl} = HEADER_DATA.post;

const Posts = ({token, username, handleDelete}) => {

	const {isLoading, data: posts, errorMessage} = useFetch([], API_URL.GET_POSTS, convertData);

	return (
		<React.Fragment>
			<Header
				heading={heading}
				subheading={subheading}
				backgroundUrl={backgroundUrl}
			/>

			{isLoading && <Loading type="bars"/>}
			{errorMessage && errorMessage}
			{posts && (
				<div className="posts__wrapper">
					 <PostList posts={posts}  username={username} token={token} handleDelete={handleDelete}/>
				</div>
			)}
		</React.Fragment>
	);
};

export default Posts;