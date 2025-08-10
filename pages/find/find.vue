<template>
	<view>
		<!-- 导航 -->
		<uni-nav-bar :border="false" :fixed="true" statusBar="true" @clickRight="openInput">
			<view class="flex align-center justify-center font-weight-bold w-100">
				<!-- <view class="font-lg color-global mx-1">关注</view> -->
				<view class="font-md text-light-muted mx-1"  @click="changeTab(index)"
				v-for="(item,index) in tabBar" :key="index" 
				:class="tabIndex === index ? 'font-lg color-global':'font-md text-light-muted'">{{item.name}}</view>
			</view>
			<template v-slot:right>
				<text class="iconfont icon-fabu1"></text>
			</template>
		</uni-nav-bar>
		
		<!-- 划动界面 -->
		<swiper :current="tabIndex" :duration="150" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
			<!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" 
				@scrolltolower="loadmoreEvent">
					<block v-for="(item,index) in list" :key="index">
						<common-list :item="item" :index="index" @liked="liked"></common-list>
						<view class="divider"></view>					
					</block>
					<load-more v-if="list.length" :loadmore="loadmore"></load-more>
					<no-thing v-else></no-thing>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>				
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<!-- 热门分类 -->
					<hot-click :hotClick="hotClick"></hot-click>
					<!-- 搜索框 -->
					<view class="p-2">
						<view class="color-aliceblue rounded flex align-center justify-center py-2 text-secondary" @click="openSearch()">
							<text class="iconfont icon-sousuo mr-2"></text>
							搜索话题
						</view>
					</view>
					<!-- 轮播图 -->
					<swiper class="px-2 pb-2" :indicator-dots="true" :autoplay="true" 
					:interval="3000" :duration="1000">
						<swiper-item v-for="(item,index) in swiperList" :key="index">
							<image :src="item.src"
							style="height: 300rpx;" class="w-100 rounded"></image>
						</swiper-item>						
					</swiper>
					<view class="divider"></view>
					<!-- 最近更新 -->
					<view class="p-2 font-md">最近更新</view>
					<!-- 话题列表组件 -->
					<block v-for="(item,index) in topicList" :key="index">
						<topic-list :item="item" :index="index"></topic-list>
					</block>
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-uni/uni-nav-bar/uni-nav-bar.vue';
	import commonList from '@/components/common/common-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	import hotClick from '@/components/find/hot-click.vue';
	import topicList from '@/components/find/topic-list.vue';
	import noThing from '@/components/common/no-thing.vue';
	export default {
		components:{
			uniNavBar,
			commonList,
			loadMore,
			hotClick,
			topicList,
			noThing
		},
		data() {
			return {
				scrollH : 500,
				tabIndex : 0,
				tabBar:[
					{
						name:'关注'
					},
					{
						name:'话题'
					}
				],
				list : [],
				loadmore : "上拉加载更多",
				page:1,
				hotClick:[],
				topicList:[],
				swiperList:[]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - res.statusBarHeight -44
				}
			})
			// 获取数据
			this.getTopicNav()
			this.getHotTopic()
			this.getSwipers()
		},
		onShow() {
			this.page = 1
			this.getList()
		},
		methods: {
			// 获取关注好友文章列表
			getList(){
				let isrefresh = this.page === 1
				this.$H.get('/followpost/'+this.page,{},{
					token:true,
					notoast:true
				}).then(res=>{
					let list = res.data.data.list.map(v=>{
						return this.$U.formatCommonList(v)
					})
					this.list = isrefresh ? list : [...this.list,...list],
					this.loadmore = list.length < 10 ?'没有更多了' : '上拉加载更多'
				}).catch(err=>{
					if (!isrefresh) {
						this.page--
					}
				})
			},
			// 获取热门分类
			getTopicNav(){
				this.$H.get('/topicclass').then(res=>{
					this.hotClick = res.data.data.list.map(item=>{
						return {
							id:item.id,
							name:item.classname
						}
					})
				})
			},
			// 获取热门话题
			getHotTopic(){
				this.$H.get('/hottopic').then(res=>{
					this.topicList = res.data.data.list.map(item=>{
						return {
							id:item.id,
							cover:item.titlepic,
							title:item.title,
							desc:item.desc,
							today_count:item.today_count,
							news_count:item.post_count
						}
					})
				})
			},
			// 获取轮播图
			getSwipers(){
				this.$H.get('/adsense/0').then(res=>{
					this.swiperList = res.data.data.list
				})
			},
			// 打开发布页
			openInput(){
				uni.navigateTo({
					url:'/pages/add-input/add-input'
				});
			},
			//切换选项
			changeTab(index){
				this.tabIndex = index
			},
			// 滑动切换
			onChangeTab(e) {
				this.tabIndex = e.detail.current
			},
			// 赞踩事件
			liked(e){
				//拿到当前对象
				let item = this.list[e.index];
				let msg = e.type === 'liked' ? '赞':'踩'
				//之前没操作过
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
			// 上拉加载
			loadmoreEvent() {
				// 验证当前是否处于可加载状态
				if (this.loadmore !== '上拉加载更多') return;
				// 设置加载状态
				this.loadmore = '加载中'
				// 请求数据
				this.page++
				this.getList()
			},
			// 打开搜索页
			openSearch(){
				uni.navigateTo({
					url:'/pages/search/search?type=topic'
				})
			}
		}
	}
</script>

<style>

</style>
