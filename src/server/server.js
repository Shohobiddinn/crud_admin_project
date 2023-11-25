import axios from 'axios';
import baseurl from './baseurl';
export default async function server(
	endpoint = '',
	method = 'get',
	data = null
) {
	let token = ' ';
	let result, error;

	await axios
		.request({
			baseURL: baseurl + endpoint,
			headers: { Authorization: `Bearer ${token}` },
			method: method,
			data: data,
		})
		.then((res) => {
			result = res;
		})
		.catch((err) => {
			error = err;
		})
		.finally(() => {
			console.log("hello");
		});

	return new Promise((resolve, reject) => {
		if (result) resolve(result);
		else reject(error);
	});
}
