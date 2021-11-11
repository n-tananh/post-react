import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './Post.css'
import {Button} from "@material-ui/core";

const Post = ({post, username, handleDelete}) => {

	return (
		<div className="card__wrapper">
			<Card sx={{
				maxWidth: 760,
				minWidth: 505,
				boxShadow: "none",
				border: "none",
				borderBottom: "1px solid rgba(0,0,0,.1)",
				marginTop: "30px"
			}}>
				<CardContent sx={{padding: 0}}>
					<Link className="card__details_link" to={`/details/${post.id}`}>
						<Typography className="card__heading" gutterBottom variant="h5" component="div">
							{post.title}
						</Typography>

						<Typography className="card__subtitle" variant="h6">
							{post.description}
						</Typography>
					</Link>

					<Typography className="card__meta" variant="p" color="text.secondary">
						Posted by Ocean Nguyen on May 20, 2021 · by Tony
					</Typography>

				</CardContent>

				{username ?
					(<CardActions className="card__action">
						<Button value={post.id} className="card__link" onClick={handleDelete} to={"/"}>Delete</Button>
						<Link className="card__link" to={`/edit/${post.id}`}>Edit</Link>
					</CardActions>) : ""
				}
			</Card>
		</div>
	);
};

export default Post;