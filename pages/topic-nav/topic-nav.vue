<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollInto" 
		scroll-with-animation class="scroll-row" style="height: 100rpx;">
			<view v-for="(item,index) in tabBars" :key="index" 
			class="scroll-row-item px-3 py-2" :id="'tab'+index"
			:class="tabIndex === index?'color-global font-lg font-weight-bold':''"
			@click="changeTab(index)">{{item.classname}}</view>
		</scroll-view>
		
		<!-- 滑动列表 -->
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
					<!-- 列表 -->
					<block v-for="(item2,index2) in item.list" :key="index2">
						<!-- 列表样式 -->						
						<topic-list :choose="choose" :item="item2" :index="index2"></topic-list>
						<!-- 全局分割线 -->
						<view class="divider"></view>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<!-- 加载中 -->
					<template v-else-if="!item.firstLoad">
						<view class="text-light-muted flex align-center justify-center font-md"
						style="height: 200rpx;">加载中</view>
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
				tabBars: [],
				newList:[],
				choose:false
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
		onLoad(e) {
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			this.getData()
			
			if(e.choose){
				uni.setNavigationBarTitle({
					title:'选择话题'
				})
				this.choose = true
			}
		},
		methods: {
			//获取数据
			getData() {
				// 获取分类
				this.$H.get('/postclass').then(res=>{
					// 渲染分类
					this.tabBars = res.data.data.list
					var arr = []
					for (let i = 0; i < this.tabBars.length; i++) {
						//生成列表模板
						let obj = {
							//1.上拉加载更多 2.加载中 3...没有更多了
							loadmore:"上拉加载更多",
							list:[],
							page:1,
							firstLoad:false
							
						}
						arr.push(obj)
					}
					this.newList = arr
					// 获取第一个分类的数据
					if (this.tabBars.length) {
						this.getList()
					}
				})
			},
			// 获取指定分类下的列表数据
			getList(){
				let index = this.tabIndex
				let id = this.tabBars[index].id
				let page = this.newList[index].page
				let isrefresh = page === 1
				this.$H.get('/topicclass/'+id+'/topic/'+page).then(res2=>{
					let list = res2.data.data.list.map(item=>{
						return {
							id:item.id,
							cover:item.titlepic,
							title:item.title,
							desc:item.desc,
							today_count:item.today_count,
							news_count:item.post_count
						}
					})
					this.newList[index].list = isrefresh ? list : [...this.newList[index].list,
					...list],
					this.newList[index].loadmore = list.length < 10 ?'没有更多了' : '上拉加载更多'
					if (isrefresh) {
						this.newList[index].firstLoad = true
					}
				}).catch(err=>{
					if (!isrefresh) {
						this.newList[index].page--
					}
				})
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
				// 滚动到指定元素
				this.scrollInto = 'tab'+index
				// 获取当前分类下的列表数据
				if (!this.newList[this.tabIndex].firstLoad) {
					this.getList()
				}
			},
			//上拉加载更多
			loadmore(index) {
				// 拿到当前列表
				let item = this.newList[index]
				// 判断是否处于可加载状态
				if(item.loadmore !== '上拉加载更多') return;
				//修改当前列表加载状态
				item.loadmore = '加载中...'
				// 请求数据
				item.page++;
				this.getList()
			}
		}
	}
</script>

<style>
	
</style>
