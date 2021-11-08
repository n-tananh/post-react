import React from 'react';
import PostList from "../../components/PostList/PostList";
import './Home.css'
import {API_URL} from '../../common/constant'
import {NavLink} from "react-router-dom";
import '../../assets/styles/common.css'
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch/useFetch";
import Header from "../../components/Header/Header";
import HEADER_DATA from "../../common/headerConstant";


const convertDataResponse = response => response.data;
const {heading, subheading, backgroundUrl} = HEADER_DATA.home;

const Home = () => {

	const {isLoading, data: posts, errorMessage} = useFetch([], API_URL.GET_POSTS, convertDataResponse);

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
				<div className="home__wrapper">
					<div className="home__content">
						<PostList posts={posts}/>
						<NavLink to="/posts" className="home btn__link">View All Posts →</NavLink>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Home;