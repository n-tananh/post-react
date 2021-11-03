import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import './Post.css'

const Post = ({ post } ) => {

	return (
		<div className="card__wrapper">
			<Card sx={{ maxWidth: 600 }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{ post.title }
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Edit</Button>
					<Link className="card__link" to={"/details/" + post.id}>Link to details</Link>
				</CardActions>
			</Card>
		</div>
	);
};

export default Post;