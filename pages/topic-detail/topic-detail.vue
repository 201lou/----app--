<template>
	<view>
		<topic-info :info="info"></topic-info>
		<view class="divider"></view>
		<!-- 置顶帖子 -->
		<view class="p-2 flex align-center border-bottom" hover-class="bg-light"
		v-for="(item,index) in hotpost" :key="index">
			<text class="iconfont icon-xihuan color-global"></text>
			<text class="font text-dark text-ellipsis">
				{{item.title}}
			</text>
		</view>		
		<view class="divider"></view>
		<!-- tab -->
		<view class="flex align-center py-2">
			<view class="flex-1 flex align-center justify-center" 
			v-for="(item,index) in tabBars" :key="index" 
			:class="index === tabIndex ? 'font-lg font-weight-bold color-global': 'font-md'"
			@click="changeTab(index)">{{item.name}}</view>
		</view>
		<!-- 列表 -->
		<template v-if="listData.length > 0">
		<block v-for="(item,index) in listData" :key="index">
			<common-list :item="item" :index="index"></common-list>
			<view class="divider"></view>
		</block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>
		<!-- 上拉加载 -->
		<load-more :loadmore="loadtext"></load-more>
	</view>
</template>

<script>
	const demo = [{
		username:"昵称",
		userpic:"/static/tabber/msg2.png",
		nowstime:"2019-10-20 下午04:30",
		isFollow:false,
		title:"我是标题",
		titlepic:"/static/common/banner2.jpg",
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
		titlepic:"/static/common/banner2.jpg",
		liked:{
			type:"",
			liked_count:1,
			disliked_count:2
		},
		comment_count:2,
		share_count:2
	}
	];
	
	import topicInfo from '@/components/topic-detail/topic-info.vue';
	import commonList from '@/components/common/common-list.vue';
	import noThing from '@/components/common/no-thing.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components:{
			topicInfo,
			commonList,
			noThing,
			loadMore
		},
		data() {
			return {
				info:{
					cover: "/static/common/banner2.jpg",
					title: "话题名称",
					desc: "话题描述",
					today_count: 0,
					news_count: 10
				},
				hotpost:[{
					title:"【新人必读】 uni-app实战第二季商城类项目开发"
				},{
					title:"【新人必读】 uni-app实战第三季仿微信类项目开发"
				}],
				tabIndex:0,
				tabBars:[{
					name:"热门"
				},{
					name:"最新"
				}],
				// 热门
				list1:[],
				loadtext1:"上拉加载更多",
				// 最新
				list2:[],
				loadtext2:"上拉加载更多",
			}
		},
		computed:{
			// 当前列表数据
			listData() {
				// return this['list'+this.tabIndex+1]
				if(this.tabIndex === 0) {
					return this.list1
				}
				return this.list2
			},
			// 当前上拉加载
			loadtext() {
				if(this.tabIndex === 0) {
					return this.loadtext1
				}
				return this.loadtext2
			}
		},
		onLoad(e) {
			if (e.detail) {
				let res = JSON.parse(e.detail)
				// console.log(res)
			}
			this.list1 = demo
		},
		// 触底事件
		onReachBottom() {
			this.loadmore()
		},
		methods: {
			// tab切换
			changeTab(index){
				this.tabIndex = index
			},
			// 上拉加载更多
			loadmore() {
				// 拿到当前列表
				let index = this.tabIndex
				// 判断是否处于可加载状态
				if (this.loadtext !== '上拉加载更多') return;
				// 设置上拉加载状态处于加载中
				this['loadtext'+(index+1)] = '加载中...'
				// 请求数据
				setTimeout(()=>{
					this['list'+(index+1)] = [...this['list'+(index+1)],...this['list'+(index+1)]]
					this['loadtext'+index+1] = '上拉加载更多'
				},2000)
			}			
		}
	}
</script>

<style>
	.filter{
		filter: blur(8px);
	}
</style>
