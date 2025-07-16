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
					<load-more :loadmore="loadmore"></load-more>
					
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>				
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<!-- 热门分类 -->
					<hot-click :hotClick="hotClick"></hot-click>
					<!-- 搜索框 -->
					<!-- 轮播图 -->
					<!-- 最近更新 -->
				</scroll-view>												
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	const demo = [{
		username:"昵称",
		userpic:"/static/tabber/msg2.png",
		nowstime:"2019-10-20 下午04:30",
		isFollow:true,
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
		isFollow:true,
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
		isFollow:true,
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
	
	import uniNavBar from '@/components/uni-uni/uni-nav-bar/uni-nav-bar.vue';
	import commonList from '@/components/common/common-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	import hotClick from '@/components/find/hot-click.vue';
	export default {
		components:{
			uniNavBar,
			commonList,
			loadMore,
			hotClick
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
				hotClick:[{
					name:"关注"
				},{
					name:"推荐"
				},{
					name:"体育"
				},{
					name:"热点"
				},{
					name:"财经"
				},{
					name:"娱乐"
				}]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - res.statusBarHeight -44
				}
			})
			// 加载数据
			this.list = demo
		},
		methods: {
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
			// 欢动切换
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
				// 模拟请求数据
				setTimeout(()=>{
					// 加载数据
					this.list = [...this.list,...this.list]
					// 设置加载状态
					this.loadmore = '上拉加载更多'
				},2000)
			}
		}
	}
</script>

<style>

</style>
