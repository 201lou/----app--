<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollInto" 
		scroll-with-animation class="scroll-row" style="height: 100rpx;">
			<view v-for="(item,index) in tabBars" :key="index" 
			class="scroll-row-item px-3 py-2" :id="'tab'+index"
			:class="tabIndex === index?'color-global font-lg font-weight-bold':''"
			@click="changeTab(index)">{{item.name}}</view>
		</scroll-view>
		
		<!-- 滑动列表 -->
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
					<!-- 列表 -->
					<block v-for="(item2,index2) in item.list" :key="index2">
						<!-- 列表样式 -->						
						<topic-list :item="item2" :index="index2"></topic-list>
						<!-- 全局分割线 -->
						<view class="divider"></view>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<!-- 没有数据 -->
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	
	const demo = [{
		cover:"/static/common/banner2.jpg",
		title:"话题名称",
		desc:"话题描述",
		today_count:0,
		news_count:10
	},{
		cover:"/static/common/banner2.jpg",
		title:"话题名称",
		desc:"话题描述",
		today_count:0,
		news_count:10
	},{
		cover:"/static/common/banner2.jpg",
		title:"话题名称",
		desc:"话题描述",
		today_count:0,
		news_count:10
	},{
		cover:"/static/common/banner2.jpg",
		title:"话题名称",
		desc:"话题描述",
		today_count:0,
		news_count:10
				}];
	
	import topicList from '@/components/find/topic-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			topicList ,
			loadMore
		},
		data() {
			return {
				//列表高度
				scrollH : 600,
				// 顶部选项卡
				scrollInto : "",
				tabIndex : 0,
				tabBars: [
					{
						name: '关注',
					},
					{
						name: '推荐',
					},
					{
						name: '热点',
					},
					{
						name: '新闻',
					},
					{
						name: '财经',
					},
					{
						name: '娱乐',
					},
					{
						name: '军事',
					},
					{
						name: '体育',
					},
				],
				newList:[]
			}
		},
		//监听点击导航栏搜索框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"/pages/search/search?type=post",
			})
		},
		//监听导航按钮点击事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'/pages/add-input/add-input',
			})
		},
		onLoad() {
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			this.getData()
		},
		methods: {
			//获取数据
			getData() {
				var arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					//生成列表模板
					let obj = {
						//1.上拉加载更多 2.加载中 3...没有更多了
						loadmore:"上拉加载更多",
						list:[]
					}
					if (i < 3) {
						obj.list = demo
					}
					arr.push(obj)
				}
				this.newList = arr
			},
			//监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			//切换选项卡
			changeTab(index){
				if (this.tabIndex === index){
					return;
				}
				this.tabIndex = index
				this.scrollInto = 'tab'+index
			},
			//关注
			follow(e){
				this.list[e].isFollow = true
				uni.showToast({
					title:'关注成功'
				})
			},
			//顶踩
			liked(e){
				let item = this.list[e.index];
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
			//上拉加载更多
			loadmore(index) {
				// 拿到当前列表
				let item = this.newList[index]
				// 判断是否处于可加载状态
				if(item.loadmore !== '上拉加载更多') return;
				//修改当前列表加载状态
				item.loadmore = '加载中...'
				//模拟数据请求
				setTimeout(()=>{
					// 加载数据
					item.list = [...item.list,...item.list]
					// 恢复加载状态
					item.loadmore = '上拉加载更多'
				},2000)
			}
		}
	}
</script>

<style>
	
</style>
