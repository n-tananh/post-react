const BASE_URL = "http://localhost:8080/api/v1.0"

export const API_URL = {
	GET_POSTS: BASE_URL + "/posts",
	GET_POSTS_BY_ID: BASE_URL + "/posts",
	AUTHENTICATE: BASE_URL + "/authenticate"
}

export const PAGE_URL =
	[
		{
			URL: "/",
			NAME: "Home"
		},
		{
			URL: "/about",
			NAME: "About"
		},
		{
			URL: "/posts",
			NAME: "Posts"
		},
		{
			URL: "/contact",
			NAME: "Contact"
		}
	]

export const PATTERN = {
	EMAIL:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}