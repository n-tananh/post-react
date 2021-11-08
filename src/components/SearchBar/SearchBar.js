import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({theme}) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.1),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.black, 0.2),
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

// Style for input field
const StyledInputBase = styled(InputBase)(({theme}) => ({
	color: '#fff',
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

const SearchBar = () => {
	return (
		<>
			<Search>
				<SearchIconWrapper>
					<SearchIcon sx={{color: "#fff"}}/>
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Search..."
					inputProps={{'aria-label': 'search'}}
				/>
			</Search>
		</>
	);
};

export default SearchBar;

