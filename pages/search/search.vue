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
		</template>
	</view>
</template>

<script>
	const demo_post = [{
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
	
	const demo_topic = [{
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
				}]
				
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
	export default {
		components: {
			commonList,
			topicList,
			userList
		},
		data() {
			return {
				searchText:"",
				list:['uni-app第二季商城类实战开发','uni-app第三季仿微信实战开发','实战教程','系列教程'],
				// 搜索结果
				searchList:[],
				// 当前搜索类型
				type:"post"
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
			// let pageTitle = '帖子'
			// switch (this.type) {
			// 	case 'post':
			// 	pageTitle = '帖子'
			// 		break;
			// 	case 'topic':
			// 	pageTitle = '话题'
			// 		break;
			// 	case 'user':
			// 	pageTitle = '用户'
			// 		break;
			// }
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
					switch (this.type){
						case 'post':
						this.searchList = demo_post
						break;
						case 'topic':
						this.searchList = demo_topic
						break;
						case 'user':
						this.searchList = demo_user
						break;
					}
					
					// 隐藏请求中
					uni.hideLoading()
				},3000)
				
			},
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
