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
				setData(convertResponseToData(res))
				setIsLoading(false);
			}
		}).catch(err => {
			if (!didCancel) {
				setErrorMessage(err.message)
				setIsLoading(false);
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