import React from 'react';
import {useParams} from "react-router-dom";
import {API_URL} from "../../common/constant";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";

const convertResponseToData = res => res.data;

// TODO implement post detail
const PostDetail = () => {
	const {id} = useParams();

	const {isLoading, data, errorMessage} = useFetch({}, `${API_URL.GET_POSTS_BY_ID}/${id}`, convertResponseToData);
	const post = data;

	if (isLoading) return <Loading type="bars"/>

	if (errorMessage) return errorMessage;

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

export default PostDetail;