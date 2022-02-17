import axios from 'axios';

const base = 'https://pokemon-go1.p.rapidapi.com/';
const headers = {
	'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
	'x-rapidapi-key': 'fda088c685msh21b013bf36b34efp1ff469jsn169c31050850',
	useQueryString: true,
};

class Request {
	constructor(url, baseUrl) {
		this.url = url;
		this.baseUrl = baseUrl || base;
		this.request = axios.create({ baseURL: this.baseUrl, headers });
	}

	get() {
		return this.request({ url: this.url });
	}

	getOne(id) {
		return this.request({ url: `${this.url}/${id}` });
	}

	post(value) {
		return this.request({ url: this.url, data: value, method: 'post' });
	}

	put(value, id) {
		return this.request({
			url: `${this.url}/${id}`,
			data: value,
			method: 'put',
		});
	}

	delete(id) {
		return this.request({ url: `${this.url}/${id}`, method: 'delete' });
	}
}

export default Request;
