<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" 
		:scroll-into-view="scrollInto" scroll-with-animation>
			<block v-for="(item,index) in list" :key="index">
				<view :id="'chat'+index">
					<user-chat-page :item="item" :index="index"
					:pretime="index>0?list[index-1].nows_time : 0"></user-chat-page>
				</view>				
			</block>			
		</scroll-view>
		<!-- 底部操作条 -->
		<bottom-input  @submit="submit"></bottom-input>
		<!-- <view class="fixed-bottom flex align-center border-top bg-white" 
		style="height: 100rpx;">
			<input type="text" v-model="content2" class="flex-1 rounded bg-light ml-2" 
			 style="padding: 5rpx; "placeholder="文明发言" @confirm="submit" />
			<view class="iconfont icon-fabu flex align-center justify-center font-md animated" 
			style="width: 100rpx;" hover-class="rubberBand color-global" @click="submit()"></view>
		</view> -->
	</view>
</template>

<script>
	import { ref } from 'vue';
import userChatPage from '@/components/users-chat/user-chat-page.vue';
import bottomInput from '@/components/common/bottom-input.vue';
	export default {
		components:{
			userChatPage,
			bottomInput
		},
		data() {
			return {
				scrollInto:"",
				content2:"",
				scrollH:500,
				list:[{
					user_id:2,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:1,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:2,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:2,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:1,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:2,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:2,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:1,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				},{
					user_id:1,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:"你好哈哈哈哈哈哈红红火火恍恍惚惚",
					type:"text",
					nows_time:1752722735
				}]
			}
		},
		// 页面加载的时候滚动到底部
		onReady() {
			this.toBottom()
		},
		onLoad() {
			uni.getSystemInfo({
				success:(res) => {
					this.scrollH = res.windowHeight -uni.upx2px(101)
				}
			})
		},
		methods: {
			// 发送
			submit(data) {
				let obj = {
					user_id:1,
					headshot:"/static/common/demo5.jpg",
					username:"昵称",
					content:data,
					type:"text",
					nows_time:(new Date()).getTime()		
				}				
				this.list.push(obj)				
				// 滚动到底部
				this.toBottom()
			},
			// 滚动到底部
			toBottom() {
				let lastIndex = this.list.length - 1
				if (lastIndex < 0) return;
				this.scrollInto = 'chat'+lastIndex
			}
		}
	}
</script>

<style>

</style>
