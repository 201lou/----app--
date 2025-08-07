export default {
	// 监听网络
	onNetwork() {
		let func = (res)=>{
				if(res.networkType === 'none') {
					uni.showToast({
						title:'当前处于断网状态',							
					})
				};
			}
		uni.getNetworkType({
			success:func
		});
		uni.onNetworkStatusChange(func);
	},
	// 热更新
	update() {
		// 
	},
	// 转换公共列表数据
	formatCommonList(v){
		return {
			id:v.id,
			user_id:v.user_id,
			username:v.user.username,
			userpic:v.user.userpic,
			nowstime:v.create_time,
			isFollow:false,
			title:v.title,
			titlepic:v.titlepic,
			liked:{
				type:"liked",
				liked_count:1,
				disliked_count:2
			},
			comment_count:v.comment_count,
			share_count:v.share_count
		}
	},
	// 数组置顶
	__toFirst(arr,index){
		if (index != 0) {
			arr.unshift(arr.splice(index,1)[0]);
		}
		return arr;
	},
	// userinfo格式转换
	formatUserinfo(obj){
			// 第三方登录（已绑定）
			if (obj.user && obj.user_id > 0) {
				return {
					id: obj.user.id,
					username: obj.user.username || obj.nickname,
					userpic: obj.user.userpic || obj.avatarurl,
					phone: obj.user.phone,
					email: obj.user.email,
					status: obj.user.status,
					create_time: obj.user.create_time,
					logintype: obj.logintype,
					password:obj.user.password,
					token: obj.token,
					userinfo: {
						id: obj.user.userinfo.id,
						user_id: obj.user.userinfo.user_id,
						age: obj.user.userinfo.age,
						sex: obj.user.userinfo.sex,
						qg: obj.user.userinfo.qg,
						job: obj.user.userinfo.job,
						path: obj.user.userinfo.path,
						birthday: obj.user.userinfo.birthday,
					}
				}
			}
			// 第三方登录（未绑定）
			return {
				id: obj.user_id,
				username: obj.nickname,
				userpic: obj.avatarurl,
				phone: false,
				email: false,
				status: 1,
				create_time: false,
				logintype: obj.logintype,
				token: obj.token,
				userinfo: false
			}
		},
}