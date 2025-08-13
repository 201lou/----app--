<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" 
		:scroll-into-view="scrollInto" scroll-with-animation>
			<block v-for="(item,index) in list" :key="index">
				<view :id="'chat'+index">
					<user-chat-page :item="item" :index="index"
					:pretime="index>0?list[index-1].create_time : 0"></user-chat-page>
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
				list:[]
			}
		},
		// 页面加载完成的时候滚动到底部
		onReady() {
			this.toBottom()
		},
		onLoad(e) {
			uni.getSystemInfo({
				success:(res) => {
					this.scrollH = res.windowHeight -uni.upx2px(101)
				}
			})
			if(!e.user){
				uni.navigateBack({
					delta:1
				});
				return uni.showToast({
					title:'聊天对象不存在',
					icon:'none'
				})
			}
			let ToUser = JSON.parse(e.user)
			// 创建聊天对象
			this.$store.commit('createToUser',ToUser)
			// 获取当前聊天对象的聊天记录
			this.$store.dispatch('getChatDetailToUser').then(list=>{
				this.list = list
			})
			// 开启监听接受聊天信息
			uni.$on('UserChat',(res)=>{
				console.log('[user-chat]chatmsg',res);
				if(res.form_id === ToUser.user_id){
					this.randerPage({
						data:res,
						send:false
					})
				}
			})
		},
		// 页面销毁之前
		beforeDestroy() {
			// 关闭聊天对象
			this.$store.commit('closeToUser')
			// 移除监听聊天信息事件
			uni.$off('UserChat',()=>{})
		},
		methods: {
			// 渲染到页面
			randerPage(e){
				this.$store.dispatch('formatChatDetailObject',e).then(msg=>{
					this.list.push(msg)
					// 滚动到底部
					this.toBottom()
				})
			},
			// 发送
			async submit(data) {
				let result = await this.$store.dispatch('sendChatMessage',{
					data,
					type:"text"
				})
				// 请求发送接口
				this.$H.post('/chat/send',result,{
					token:true
				}).then(res=>{
					this.randerPage({
						data:result,
						send:true
					})
				})
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
