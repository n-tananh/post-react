import React from 'react';
import PostList from "../../components/PostList/PostList";
import './Home.css'
import {API_URL} from '../../common/constant'
import {NavLink} from "react-router-dom";
import '../../common/common.css'
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch/useFetch";


const convertDataResponse = response => response.data;

const Home = () => {
	const {isLoading, data, errorMessage} = useFetch([], API_URL.GET_POSTS, convertDataResponse);
	const posts = data;

	if (isLoading) return <Loading type="bars" color="#333"/>;
	if (errorMessage) return errorMessage;

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