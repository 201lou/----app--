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
	}
}