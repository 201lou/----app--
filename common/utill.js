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
	}
}