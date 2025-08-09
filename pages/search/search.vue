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
				<template v-if="type === 'post'">
					<!-- 帖子 -->
					<common-list :item="item" :index="index"></common-list>
				</template>
				<template v-else-if="type === 'topic'">
					<!-- 话题 -->
					<topic-list :item="item" :index="index"></topic-list>
				</template>			
				<template v-else>
					<!-- 用户 -->
					<user-list :item="item" :indexe="index"></user-list>
				</template>
			</block>
			<!-- 上拉加载 -->
			<load-more :loadmore="loadmore"></load-more>
		</template>
	</view>
</template>

<script>
	const demo_user = [{
		headshot:"/static/common/demo6.jpg",
		username:"烦躁杏鲍菇",
		gender:1,//0未知 1女性 2男性
		age:24,
		isFollow:true
	},{
		headshot:"/static/common/demo6.jpg",
		username:"烦躁杏鲍菇",
		gender:0,//0未知 1女性 2男性
		age:24,
		isFollow:true
	},{
		headshot:"/static/common/demo6.jpg",
		username:"烦躁杏鲍菇",
		gender:2,//0未知 1女性 2男性
		age:24,
		isFollow:true
	},{
		headshot:"/static/common/demo6.jpg",
		username:"烦躁杏鲍菇",
		gender:1,//0未知 1女性 2男性
		age:24,
		isFollow:false
	}];
	
	import commonList from '@/components/common/common-list.vue';
	import topicList from '@/components/find/topic-list.vue';
	import userList from '@/components/user-list/user-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			commonList,
			topicList,
			userList,
			loadMore
		},
		data() {
			return {
				searchText:"",
				list:[],
				// 搜索结果
				searchList:[],
				// 当前搜索类型
				type:"post",
				loadmore:"上拉加载更多",
				page:1
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
		onLoad(e) {
			if (e.type) {
				this.type = e.type
			}
			this.updateSearchPlaceholder();
			let pageTitle = '帖子'
			switch (this.type) {
				case 'post':
				pageTitle = '帖子'
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
					break;
				case 'topic':
				pageTitle = '话题'
					break;
				case 'user':
				pageTitle = '用户'
					break;
			}
			// // 修改搜索占位
			// // #ifdef APP-PLUS
			// this.$nextTick(() => {
			//     let currentWebview = plus.webview.currentWebview()
			//     let style = currentWebview.getStyle()
			//     if (style && style.titleNView) {
			//         let tn = style.titleNView
			//         if (tn.searchInput) {
			//             tn.searchInput.placeholder = '搜索 ' + pageTitle
			//             currentWebview.setStyle({
			//                 titleNView: tn
			//             })
			//         }
			//     }
			// })
			// // #endif
			// this.updateSearchPlaceholder()
			// 取出搜索历史
			let list = uni.getStorageSync('historySearchText')
			if (list) {
				this.list = JSON.parse(list)
			}
		},
		onUnload() {
			if(this.type === 'post'){
				uni.$off('updateFollowOrLiked',(e)=>{})
			}
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			if(this.searchText === '') {
				return uni.stopPullDownRefresh()
			}
			this.getDate(true,()=>{
				// 关闭下拉刷新状态
				uni.stopPullDownRefresh()
			})
		},
		// 监听上拉加载
		onReachBottom() {
			if (this.loadmore !== '上拉加载更多') {
				return;
			}
			this.loadmore = "加载中..."
			this.getData(false)
		},
		methods: {
			//顶踩
			liked(e){
				this.searchList.forEach(item=>{
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
			//关注
			follow(user_id){
				// 找到当前作者的所有列表
				this.searchList.forEach((item)=>{
					if(item.user_id === user_id){
						item.isFollow = true
					}
				})
				uni.showToast({
					title:'关注成功',
					icon:'none'
				})
			},
			// 点击搜索历史
			clickSearchHistory(text) {
				this.searchText = text
				this.searchEvent()
			},
			//搜索事件
			searchEvent() {
				// 收起键盘
				uni.hideKeyboard()
				// 加入搜索历史
				let index = this.list.findIndex(v=>v===this.searchText)
				if(index !== -1) {
					this.$U.__toFirst(this.list,index)
				} else {
					this.list.unshift(this.searchText)
				}
				uni.setStorageSync('historySearchText',JSON.stringify(this.list))
				// 请求搜索
				this.getDate()
			},
			getDate(isrefresh = true,callback = false) {
				//处于显示请求中
				uni.showLoading({
					title: '加载中...',
					mask: false
				})
				// 请求搜索
				this.page = isrefresh ? 1 : (this.page + 1)
				this.$H.post('/search/'+this.type,{
					keyword:this.searchText,
					page:this.page
				}).then(res=>{
					// 整理格式
					let list = []
					switch (this.type) {
						case 'post':
						list = res.data.data.list.map(v=>{
						return this.$U.formatCommonList(v)
					})
							break;
						case 'topic':
						list = res.data.data.list.map(v=>{
							return {
								id:v.id,
								cover:v.titlepic,
								title:v.title,
								desc:v.desc,
								today_count:v.today_count,
								news_count:v.news_count
							}
						})
							break;
						case 'user':
						pageTitle = '用户'
							break;
					}
					// 渲染到页面
					this.searchList = isrefresh ? [...list] : [...this.searchList,...list]
					// 加载情况
					this.loadmore = list.length < 10 ? '没有更多了' : '上拉加载更多'
					uni.hideLoading()
					if (typeof callback === 'function'){
						callback()
					}
				}).catch(err => {
					this.page--
				    uni.hideLoading()
					if (typeof callback === 'function'){
						callback()
					}					
				})
			},
			// 更新搜索占位符
			updateSearchPlaceholder() {
			  let placeholder = '搜索帖子';
			  switch (this.type) {
			    case 'post': placeholder = '搜索帖子'; break;
			    case 'topic': placeholder = '搜索话题'; break;
			    case 'user': placeholder = '搜索用户'; break;
			  }
			  
			  // 统一设置导航栏标题
			  uni.setNavigationBarTitle({
			    title: placeholder.replace('搜索', '')
			  });
			  
			  // APP平台设置搜索框占位符
			  // #ifdef APP-PLUS
			  const currentWebview = plus.webview.currentWebview();
			  if (currentWebview.setTitleNViewSearchInputText) {
			    currentWebview.setTitleNViewSearchInputText({
			      placeholder: placeholder
			    });
			  }
			  // #endif
			  
			  // 其他平台（如H5）可能需要特殊处理
			  // #ifdef H5
			  const input = document.querySelector('.uni-page-head-search-input');
			  if (input) {
			    input.setAttribute('placeholder', placeholder);
			  }
			  // #endif
			}
		}
	}
</script>

<style>

</style>
