<template>
	<view>
		<!-- 头部 -->
		<view class="flex align-center p-4 border-bottom border-light-secondary">
			<image src="/static/common/demo5.jpg" style="width: 180rpx;height: 180rpx;" 
			class="rounded-circle"></image>
			<view class="pl-3 flex flex-column flex-1">
				<view class="flex align-center">
					<view class="flex-1 flex flex-column align-center justify-center">
						<text class="font-lg font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center">
						<text class="font-lg font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center">
						<text class="font-lg font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
				</view>
				<view class="flex align-center justify-center">
					<button type="primary" size="mini" class="bg-color" style="width: 80%;">关注</button>
				</view>
			</view>
		</view>
		
		<!-- tab -->
		<view class="flex align-center py-2" style="height: 100rpx;">
			<view class="flex-1 flex align-center justify-center" 
			v-for="(item,index) in tabBars" :key="index" 
			:class="index === tabIndex ? 'font-lg font-weight-bold color-global': 'font-md'"
			@click="changeTab(index)">{{item.name}}</view>
		</view>
		
		<template v-if="tabIndex === 0">
			<view class="p-3 border-bottom">
				<view class="font-md">账号信息</view>
				<view class="font">账号年龄:12个月</view>
				<view class="font">账号ID:1</view>
			</view>
			<view class="p-3 border-bottom">
				<view class="font-md">个人信息</view>
				<view class="font">星座:白羊座</view>
				<view class="font">职业:老师</view>
				<view class="font">故乡:广东</view>
				<view class="font">情感:已婚</view>
				</view>
		</template>
		<template v-else>
			<common-list v-for="(item,index) in list" :key="index" :item="item" :index="index"
			@follow="follow" @liked="liked"></common-list>
			<view class="divider"></view>
			<load-more :loadmore="loadmore"></load-more>
		</template>
		
		<!-- 弹出层 -->
		<uni-popup ref="popup" type="top">
			<view class="flex align-center justify-center color-aliceblue w-100 font-md border-bottom py-1" 
			style="height: 100rpx;" hover-class="color-global" @click="popupEvent('friend')">
				<text class="iconfont icon-icon-1 mr-2"></text> 加入黑名单
			</view>
			<view class="flex align-center justify-center color-aliceblue w-100 font-md py-1"
			style="height: 100rpx;" hover-class="color-global" @click="popupEvent('clear')">
				<text class="iconfont icon-qingchu mr-2"></text> 开始聊天
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	const demo = [{
		username:"昵称",
		userpic:"/static/common/demo5.jpg",
		nowstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"/static/common/demo2.jpg",
		liked:{
			type:"liked",
			liked_count:1,
			disliked_count:2
		},
		comment_count:2,
		share_count:2
	},
	{
		username:"昵称",
		userpic:"/static/common/demo5.jpg",
		nowstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"",
		liked:{
			type:"disliked",
			liked_count:1,
			disliked_count:2
		},
		comment_count:2,
		share_count:2
	},
	{
		username:"昵称",
		userpic:"/static/common/demo5.jpg",
		nowstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"/static/common/demo2.jpg",
		liked:{
			type:"",
			liked_count:1,
			disliked_count:2
		},
		comment_count:2,
		share_count:2
	}
	];
	
	import commonList from '@/components/common/common-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	import uniPopup from '@/components/uni-uni/uni-popup/uni-popup.vue';
	export default {
		components:{
			commonList,
			loadMore,
			uniPopup
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[{
					name:"首页",
				},{
					name:"帖子",
					list:demo,
					//1.上拉加载更多 2.加载中 3...没有更多了
					loadmore:"上拉加载更多",
				},{
					name:"动态",
					list:demo,
					//1.上拉加载更多 2.加载中 3...没有更多了
					loadmore:"上拉加载更多",
				}],
			}
		},
		onNavigationBarButtonTap() {
			this.$refs.popup.open()
		},
		computed: {
			list() {
				return this.tabBars[this.tabIndex].list
			},
			loadmore() {
				return this.tabBars[this.tabIndex].loadmore
			}
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index
			},
			//关注
			follow(e){
				let list = this.tabBars[this.tabIndex].list
				list[e].isFollow = true
				uni.showToast({
					title:'关注成功'
				})
			},
			//顶踩
			liked(e){
				let list = this.tabBars[this.tabIndex].list;
				let item = list[e.index]
				let msg = e.type === 'liked' ? '赞':'踩'
				if (item.liked.type === ''){
					item.liked[e.type+'_count']++
					}
				else if (item.liked.type === 'liked' && e.type === 'disliked'){
					item.liked.liked_count--;
					item.liked.disliked_count++;
				}
				else if(item.liked.type === 'disliked' && e.type === 'liked'){
					item.liked.liked_count++;
					item.liked.disliked_count--;
				}
				item.liked.type = e.type
				uni.showToast({
					title:msg+'成功'
				});
			},
		}
	}
</script>

<style>

</style>
