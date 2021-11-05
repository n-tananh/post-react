const BASE_URL = "https://jsonplaceholder.typicode.com"

export const API_URL = {
	GET_POSTS: BASE_URL + "/users/6/posts?q=ha",
	GET_POSTS_BY_ID: BASE_URL + "/posts/"
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
			NAME: "POSTs"
		},
		{
			URL: "/contact",
			NAME: "Contact"
		}
	]

export const PATTERN = {
	EMAIL:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}