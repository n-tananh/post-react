import React from 'react';
import './NavBar.css'
import {NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/images/post_logo.png'
import {Search} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const NavBar = () => {

	const Search = styled('div')(({theme}) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.black, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.black, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({theme}) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const StyledInputBase = styled(InputBase)(({theme}) => ({
		color: 'black',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}));

	return (
		<div className="nav__wrapper">
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static" sx={{bgcolor: "transparent"}}>
					<Toolbar sx={{justifyContent: "space-around"}}>
						{/*Logo*/}
						<div className="nav__logo">
							<img style={{width: 100}} src={Logo} alt="logo"/>
						</div>

						{/*Link and Search bar*/}
						<div className="nav__link">
							<NavLink className="item__link" to="/">Home</NavLink>
							<NavLink className="item__link" to="/about">About</NavLink>
							<NavLink className="item__link" to="/posts">Posts</NavLink>
							<NavLink className="item__link" to="/contact">Contact</NavLink>

							<Search>
								<SearchIconWrapper>
									<SearchIcon sx={{color: "black"}}/>
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{'aria-label': 'search'}}
								/>
							</Search>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
};

export default NavBar;