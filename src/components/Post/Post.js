import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './Post.css'

const Post = ({ post } ) => {

	// TODO get real data

	return (
		<div className="card__wrapper">
			<Card sx={{ maxWidth: 760 }}>
				<CardContent>
					<Link className="card__details_link" to={"/posts/" + post.id}>
						<Typography className="card__heading" gutterBottom variant="h5" component="div">
							{/*{ post.title }*/}
							Lizards are a widespread group of squamate
						</Typography>

						<Typography className="card__subtitle" variant="h6">
							{/*{post.subtitle}*/}
							How to use volumes and bind mounts in Docker.
						</Typography>
					</Link>

					<Typography className="card__meta" variant="p" color="text.secondary">
						Posted by Ocean Nguyen on May 20, 2019 · by Tony
					</Typography>

				</CardContent>

				<CardActions className="card__action">
					<Link className="card__link" to={"/edit/" + post.id}>Edit</Link>
					<Link className="card__link" to={"/posts/" + post.id}>Details</Link>
				</CardActions>
			</Card>
		</div>
	);
};

export default Post;