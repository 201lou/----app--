<template>
	<view>
		<template v-if="list.length > 0">
			<!-- 消息列表 -->
			<block v-for="(item,index) in list" :key="index">
				<msg-list :item="item" :index="index"></msg-list>
			</block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>
		<!-- 弹出层 -->
		<uni-popup ref="popup" type="top">
			<view class="flex align-center justify-center color-aliceblue w-100 font-md border-bottom py-1" 
			style="height: 100rpx;" hover-class="color-global" @click="popupEvent('friend')">
				<text class="iconfont icon-icon-1 mr-2"></text> 添加好友
			</view>
			<view class="flex align-center justify-center color-aliceblue w-100 font-md py-1"
			style="height: 100rpx;" hover-class="color-global" @click="popupEvent('clear')">
				<text class="iconfont icon-qingchu mr-2"></text> 清除列表
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const demo = [{
					headshot:"/static/common/demo6.jpg",
					username:"星期四的微信",
					update_time:1752722735,
					data:"nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
					notread:2
				},{
					headshot:"/static/common/demo6.jpg",
					username:"星期四的微信",
					update_time:1752722735,
					data:"nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
					notread:2
				},{
					headshot:"/static/common/demo6.jpg",
					username:"星期四的微信",
					update_time:1752722735,
					data:"nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
					notread:2
				},{
					headshot:"/static/common/demo6.jpg",
					username:"星期四的微信",
					update_time:1752722735,
					data:"nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
					notread:2
				}];
	
	import msgList from '@/components/msg/msg-list.vue';
	import noThing from '@/components/common/no-thing.vue';
	import uniPopup from '@/components/uni-uni/uni-popup/uni-popup.vue';
	export default {
		components: {
			msgList,
			noThing,
			uniPopup
		},
		data() {
			return {
				list:[]
			}
		},
		// 页面加载
		onLoad() {
			this.list = demo
		},
		// 监听原生导航栏按钮事件
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0 :  //左边
				uni.navigateTo({
					url:'/pages/friend-list/friend-list'
				});
				// 关闭弹出层
				this.$refs.popup.close()
					break;
				case 1: //右边
					this.$refs.popup.open()
					break;
			}
		},
		// 过滤器
		// filters: {
		// 	formaTime(value) {
		// 		return $T.gettime(Number(value));
		// 	}
		// },
		// 监听下拉刷新
		onPullDownRefresh() {
			this.refresh()
		},
		methods: {
			//下拉刷新
			refresh() {
				setTimeout(()=>{
					this.list = demo
					uni.stopPullDownRefresh()
				},2000)
			},
			// 弹出层选项点击事件
			popupEvent(e) {
				switch (e) {
					case 'friend':
						uni.navigateTo({
							url:"/pages/search/search?type=user",
						})
					break;
					case 'clear':
					console.log('clear');
					break;
				}
				// 关闭弹出层
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>

</style>
