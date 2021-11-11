import React from 'react';
import './NavBar.css'
import {Link, NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/images/post_logo.png';
import {PAGE_URL} from "../../common/constant";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Typography} from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

const linkList = PAGE_URL.map(({URL, NAME}) =>
	<NavLink
		key={URL}
		activeStyle={{color: 'rgba(255, 255, 255, .7)'}}
		className="item__link"
		to={URL}
		exact={true}
	>
		{NAME}
	</NavLink>
);

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down("sm")]: {
			flexGrow: 1,
			background: 'white'
		},
		position: "absolute",
		flexGrow: 1,
		zIndex: 99,
		top: 0,
		right: 0,
		left: 0,
	},

	menuButton: {
		marginRight: theme.spacing(2),
		borderRadius: 2,
		color: "black",
		fontSize: 8,
		border: "1px dashed",
		borderColor: 'rgba(0,0,0,.5)',
		padding: 8
	},

	logo: {
		flexGrow: 1
	},

}));

const NavBar = ({ username }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>

			<AppBar position="static" sx={{background: "transparent", boxShadow: "none"}}>
				<Toolbar sx={{justifyContent: "space-around"}}>
					<div className={classes.logo}>
						<Link to="/">
							<img src={logo} alt="logo"/>
						</Link>
					</div>

					{isMobile ? (
						<>
							<div style={{marginRight: 30}}>
								<SearchBar/>
							</div>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={handleMenu}
							>
								<Typography
									sx = {{
										fontSize: 12,
										fontWeight: 800,
										color: '#343a40',
									}}
								>
									MENU
								</Typography>
								<MenuIcon/>
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								keepMounted
								anchorOrigin={{
									vertical: "top",
									horizontal: "right"
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right"
								}}
								PaperProps={{
									style: {
										marginTop: 48,
										borderRadius: 0,
										width: '100vw',
										boxShadow: 'none',
										left: 0
									}
								}}
								open={open}
								onClose={() => setAnchorEl(null)}
							>
								{PAGE_URL.map(menuItem => {
									const {URL, NAME} = menuItem;
									return (
										<MenuItem
											key={URL}
											onClick={() => handleMenuClick(URL)}
											component={Link}
											to={URL}
											style={{
												color: 'rgba(0,0,0,.6)',
												fontSize: 12,
												fontWeight: 800,
												letterSpacing: 1,
												textTransform: 'uppercase',
												paddingLeft: 27
											}}
										>
											{NAME}
										</MenuItem>
									);
								})}
								{!username ?
									<MenuItem
										key="login"
										onClick={() => handleMenuClick("/login")}
										component={Link}
										to="/login"
										style={{
											color: 'rgba(0,0,0,.6)',
											fontSize: 12,
											fontWeight: 800,
											letterSpacing: 1,
											textTransform: 'uppercase',
											paddingLeft: 27
										}}
									>
										Login
									</MenuItem> :
									<MenuItem
										key="logout"
										onClick={() => handleMenuClick("/logout")}
										component={Link}
										to="/logout"
										style={{
											color: 'rgba(0,0,0,.6)',
											fontSize: 12,
											fontWeight: 800,
											letterSpacing: 1,
											textTransform: 'uppercase',
											paddingLeft: 27
										}}
									>
										Logout
									</MenuItem>}
							</Menu>
						</>
					) : (
						<div className="nav__link">
							{linkList}
							{!username ? <NavLink
								key="login"
								activeStyle={{color: 'rgba(255, 255, 255, .7)'}}
								className="item__link"
								to="/login"
								exact={true}
							>
								Login
							</NavLink> :
								<NavLink
									key="logout"
									activeStyle={{color: 'rgba(255, 255, 255, .7)'}}
									className="item__link"
									to="/logout"
									exact={true}
								>
									Logout
								</NavLink>}
							<SearchBar/>
						</div>
					)}
				</Toolbar>
			</AppBar>
			{/*End nav bar*/}
		</div>
	);
};

export default NavBar;