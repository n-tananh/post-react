import {useEffect, useState} from 'react';
import axios from "axios";


const useFetch = ( initialData, url, convertResponseToData ) => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(initialData);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		let didCancel = false;
		setIsLoading(true);

		axios({
			method: "GET",
			url: url
		}).then(res => {
			if(!didCancel) {
				setIsLoading(false);
				setData(convertResponseToData(res))
			}
		}).catch(err => {
			if (!didCancel) {
				setIsLoading(false);
				setErrorMessage(err.message)
			}
		});

		return () => {
			didCancel = true;
		}
	}, [convertResponseToData, url]);

	return {
		isLoading,
		data,
		errorMessage
	};
};

export default useFetch;