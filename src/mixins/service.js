import axios from 'axios';
import qs from 'qs';

const service = {
	methods: {
		baseService(url, type, data, isLoading){
	    return axios({
			  method: type,
			  url: process.env.VUE_APP_ROOT_API + url,
			})
		  .then(res => {
				if (res.status === 200) {
					return res.data
		    }
		  })
		  .catch(e => {
		  	console.log(e);
		  })
		}
	}

}

export default service;