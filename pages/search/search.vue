<template>
	<view>
		<template v-if="searchList.length === 0">
			<!-- 搜索历史 -->
			<view class="py-2 font-md px-2">搜索历史</view>
			<view class="flex flex-wrap">
				<view class="border rounded font mx-2 my-1 px-2" v-for="(item,index) in list" 
				:key="index" hover-class="color-aliceblue" @click="clickSearchHistory(item)">{{item}}</view>
			</view>
		</template>
		<template v-else>			
			<!-- 数据列表 -->
			<block v-for="(item,index) in searchList" :key="index">
				<common-list :item="item" :index="index"></common-list>
			</block>
		</template>
	</view>
</template>

<script>
	const demo = [{
		username:"昵称",
		userpic:"/static/tabber/msg2.png",
		nowstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"/static/demo/屏幕截图 2025-07-14 081555.png",
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
		userpic:"/static/tabber/msg2.png",
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
		userpic:"/static/tabber/msg2.png",
		nowstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"/static/demo/屏幕截图 2025-07-14 081555.png",
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
	export default {
		components: {
			commonList
		},
		data() {
			return {
				searchText:"",
				list:['uni-app第二季商城类实战开发','uni-app第三季仿微信实战开发','实战教程','系列教程'],
				searchList:[]
			}
		},
		// 监听导航搜入
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		// 监听点击导航搜索按钮
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.searchEvent()
			}
		},
		methods: {
			// 点击搜索历史
			clickSearchHistory(text) {
				this.searchtext = text
				this.searchEvent()
			},
			//搜索事件
			searchEvent() {
				// 收起键盘
				uni.hideKeyboard()
				//处于显示请求中
				uni.showLoading({
					title: '加载中...',
					mask: false
				})
				// 请求搜索
				setTimeout(()=>{
					this.searchList = demo
					// 隐藏请求中
					uni.hideLoading()
				},3000)
				
			}
		}
	}
</script>

<style>

</style>
