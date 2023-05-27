import axios from 'axios'

import config from './shared/config'

const instance = axios.create({
	baseURL: config.address,
})

instance.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})

export default instance
