import axios from 'axios';
import * as action from '../redux/actions';
import store from '../redux/store';

const API = axios.create({
	baseURL: 'http://desafioonline.webmotors.com.br/api',
});

API.interceptors.request.use(config => { 
	store.dispatch(action.showLoading());

	return config; 
}, error => { return Promise.reject(error); });

API.interceptors.response.use(config => { 
	store.dispatch(action.hideLoading());

	return config; 
}, error => {
	store.dispatch(action.hideLoading());
	store.dispatch(action.showError({title: error.response?.status, message: error?.response?.data?.Message}))

	return Promise.reject(error);
});

export default API;