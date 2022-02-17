import axios from 'axios';
import { Service } from 'axios-middleware';

const base = 'https://us-central1-blog-d682e.cloudfunctions.net/';

class Register {
	constructor() {
		if (typeof Register.instance === 'object') {
			return Register.instance;
		}
		Register.instance = this;
	}

	onResponse(response) {
		const res = JSON.parse(response.data);
		return res;
	}
}

class Request {
	constructor(url, baseUrl) {
		this.url = url;
		this.baseUrl = baseUrl || base;
		this.request = axios.create({ baseURL: this.baseUrl });
		const service = new Service(this.request);
		service.register(new Register());
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
