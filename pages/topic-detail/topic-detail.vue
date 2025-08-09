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
				page1:1,
				firstLoad1:false,
				// 最新
				list2:[],
				loadtext2:"上拉加载更多",
				page2:1,
				firstLoad2:false,
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
				this.info = JSON.parse(e.detail)
				uni.setNavigationBarTitle({
					title:this.info.title
				})
			}
			// 加载数据
			this.getData()
			// 监听关注和顶踩操作
			uni.$on('updateFollowOrLiked',(e)=>{
				switch (e.type){
					case 'follow'://关注
					this.follow(e.data.user_id)
						break;
					case 'liked':
					this.liked(e.data)
						break;
				}
			})
		},
		// 触底事件
		onReachBottom() {
			this.loadmore()
		},
		onUnload() {
			uni.$off('updateFollowOrLiked',(e)=>{})
		},
		methods: {
			//关注
			follow(user_id){
				// 找到当前作者的所有列表
				this.list1.forEach((item)=>{
					if(item.user_id === user_id){
						item.isFollow = true
					}
				})
				this.list2.forEach((item)=>{
					if(item.user_id === user_id){
						item.isFollow = true
					}
				})
				uni.showToast({
					title:'关注成功',
					icon:'none'
				})
			},
			//顶踩
			liked(e){
				// 拿到当前的选项卡对应的list
				let no = this.tabIndex + 1
				this['list'+no].forEach(item=>{
					if(item.id === e.id){
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
					}
				})
				let msg = e.type === 'liked' ? '赞':'踩'
				uni.showToast({
					title:msg+'成功',
					icon:'none'
				});
			},
			// tab切换
			changeTab(index){
				this.tabIndex = index
				if(!this['firstLoad'+(index+1)]) {
					this.getData()
				}
			},
			// 加载数据
			getData() {
				let no = this.tabIndex + 1
				let page = this['page'+no]
				let isrefresh = page === 1
				this.$H.get('/topic/'+this.info.id+"/post/"+page).then(res=>{
					let list = res.data.data.list.map(v=>{
						return this.$U.formatCommonList(v)
					})
					this['list'+no] = isrefresh ? list : [...this['list'+no],...list],
					this['loadtext'+no] = list.length < 10 ?'没有更多了' : '上拉加载更多'
					if (isrefresh) {
						this['firstLoad'+no] = true
					}
				}).catch(err=>{
					if (!isrefresh) {
						page--
					}
				})
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
				this['page'+(index+1)]++;
				this.getData()
			}			
		}
	}
</script>

<style>
	.filter{
		filter: blur(8px);
	}
</style>
