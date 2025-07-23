<template>
	<view class="flex align-center justify-center px-2 py-3">
			<view class="flex-1 flex align-center justify-center" v-for="(item,index) in providerList" :key="index">
				<view :class="item.icon + ' '+item.bgColor" 
				class="iconfont font-lg text-white flex align-center justify-center rounded-circle"
				style="width: 100rpx;height: 100rpx;"></view>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				providerList: []
			}
		},
		mounted() {
			uni.getProvider({
				service: 'oauth',
				success: (result) => {
					this.providerList = result.provider.map((value) => {
						let providerName = '';
						let icon = ''
						let bgColor = ''
						switch (value) {
							case 'weixin':
								providerName = '微信登录'
								icon = 'icon-weixin'
								bgColor='bg-success'
								break;
							case 'qq':
								providerName = 'QQ登录'
								icon = 'icon-qq'
								bgColor = 'bg-primary'
								break;
							case 'sinaweibo':
								providerName = '新浪微博登录'
								icon = 'icon-weibo'
								bgColor= 'bg-warning'
								break;						
						}
						return {
							name: providerName,
							icon:icon,
							bgColor:bgColor,
							id: value
						}
						// 过滤没有名字的
					}).filter(item => item.name);
			
				},
				fail: (error) => {
					console.log('获取登录通道失败', error);
				}
			});
		}
	}
</script>

<style>
</style>