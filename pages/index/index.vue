<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation class="scroll-row">
			<view v-for="(item,index) in tabBars" :key="index" 
			class="scroll-row-item px-3 py-2" :id="'tab'+index"
			:class="tabIndex === index?'color-global font-lg font-weight-bold':''"
			@click="changeTab(index)">{{item.name}}</view>
		</scroll-view>
		
		<!-- <block v-for="(item,index) in list" :key="index"> -->
			<!-- 列表样式 -->
			<!-- <common-list :item="item" :index="index" @follow="follow" @liked="liked"></common-list> -->
			<!-- 全局分割线 -->
			<!-- <view class="divider"></view> -->
		<!-- </block> -->
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	export default {
		components: {
			commonList
		},
		data() {
			return {
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
				list:[
					{
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
						titlepic:"",
						liked:{
							type:"",
							liked_count:1,
							disliked_count:2
						},
						comment_count:2,
						share_count:2
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
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
			}
		}
	}
</script>

<style>
	
</style>
