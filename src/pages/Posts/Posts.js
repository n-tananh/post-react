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

const Posts = () => {
	const {isLoading, data, errorMessage} = useFetch([], API_URL.GET_POSTS, convertData);
	const posts = data;

	if (isLoading) return (
		<React.Fragment>
			<Header
				heading={heading}
				subheading={subheading}
				backgroundUrl={backgroundUrl}
			/>
			<Loading type="bars"/>
		</React.Fragment>
	)
	if (errorMessage) return errorMessage;

	return (
		<React.Fragment>
			<Header
				heading={heading}
				subheading={subheading}
				backgroundUrl={backgroundUrl}
			/>
			<div className="posts__wrapper">
				<PostList posts={posts}/>
			</div>
		</React.Fragment>
	);
};

export default Posts;