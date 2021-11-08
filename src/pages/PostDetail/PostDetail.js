import React from 'react';
import './PostDetail.css'
import '../../assets/styles/custom.css'
import '../../assets/styles/syntaxHighlight.css'
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch/useFetch";
import {NavLink, useParams} from "react-router-dom";
import {API_URL} from "../../common/constant";
import {mockPost} from "../../mockPost"; // get mock data to test view post details

const convertResponseToData = res => res.data;

const PostDetail = () => {

	const {id} = useParams();

	const {isLoading, data: post, errorMessage} = useFetch({}, `${API_URL.GET_POSTS_BY_ID}/${id}`, convertResponseToData);

	return (
		<React.Fragment>
			<Header
				heading={mockPost.title}
				subheading={mockPost.description}
				backgroundUrl={mockPost.background}
			/>
			{isLoading && <Loading type="bars"/>}
			{errorMessage && errorMessage}

			{post && (
				<div className="details__wrapper">
					<div className="container">
						<div className="details__content" dangerouslySetInnerHTML={{__html: mockPost.content}}/>
						<div className="navigate">

							{/*TODO implement prev, next post feature*/}
							<NavLink to="/posts" className="details__prev btn__link">← Previous post </NavLink>
							<NavLink to="/posts" className="details__next btn__link">Next post →</NavLink>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default PostDetail;