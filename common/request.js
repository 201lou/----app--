import $C from '@/common/config.js'

export default {
	common:{
		method:'GET',
		header:{
			"content-type":"application/json"
		},
		data:{}
	},
	request(options = {}) {
		// 返回 Promise
		return new Promise((resolve, reject) => {
			options.url = $C.webUrl + options.url;
			options.method = options.method || this.common.method;
			options.header = options.header || this.common.header;
			
			// 添加成功/失败回调
			options.success = (res) => resolve(res);
			options.fail = (err) => {
                uni.showToast({
                    title: '网络连接失败',
                    icon: 'none'
                });
                reject({
                    code: -1,
                    msg: '网络异常',
                    raw: err
                })
            };
			
			uni.request(options);
		});
	},
	get(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	
	post(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	}
}