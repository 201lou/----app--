<template>
	<view class="p-2">
		<!-- 头像 昵称 | 关注按钮 -->
		<view class="flex align-center justify-between"> 
			<view  class="flex align-center" >
			<!-- 头像 -->
				<image class="mr-2 rounded-circle" :src="item.userpic" style="width: 65rpx;height: 65rpx;" lazy-load @click="openSpace"></image>
				<!-- 昵称发布时间 -->
				<view>
					<view class="font" style="line-height: 25rpx;" @click="openSpace">{{item.username}}</view>
					<text class="font-sm text-light-muted" style="line-height: 25rpx;">{{item.nowstime}}</text>
				</view>
			</view>
			<!-- 按钮 -->
			<view class="flex align-center justify-center rounded text-white bg-color animated faster" 
			style="width: 90rpx;height: 50rpx;" hover-class="rubberBand" @click="follow" v-if="!item.isFollow">
			关注
			</view>
		</view>
		<!-- 标题 -->
		<view class="font my-2" @click="openDetail">{{item.title}}</view>
		<!-- 帖子详情 -->
		<slot>
			<!-- 图片 -->
			<image v-if="item.titlepic" calss="rounded" :src="item.titlepic" 
			style="height: 350rpx;width: 100%;" @click="openDetail" mode="widthFix"></image>
		</slot>
		<!-- 图标按钮 -->
		<view class="flex align-center">
			<!-- 顶 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			hover-class="jello color-global" @click="liked('liked')" 
			:class="item.liked.type === 'liked' ? 'liked-active':''">
				<text class="iconfont icon-icon mr-1"></text>
				<text>{{item.liked.liked_count > 0 ? item.liked.liked_count : '赞'}}</text>
			</view>
			<!-- 踩 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			hover-class="jello color-global" @click="liked('disliked')"
			:class="item.liked.type === 'disliked' ? 'liked-active':''">
				<text class="iconfont icon-anniucai mr-1"></text>
				<text>{{item.liked.disliked_count > 0 ? item.liked.disliked_count : '踩'}}</text>
			</view>
			<!-- 评论 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			hover-class="jello color-global" @click="doComment">
				<text class="iconfont icon-pinglun2 mr-1"></text>
				<text>{{item.comment_count > 0 ? item.comment_count : '评论'}}</text>
			</view>
			<!-- 分享 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			hover-class="jello color-global" @click="shared">
				<text class="iconfont icon-zhuanfa1 mr-1"></text>
				<text>{{item.share_count > 0 ? item.share_count : '分享'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index:{
				type:Number,
				default:-1
			},
			isdetail:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			//打开个人空间
			openSpace(){
				uni.navigateTo({
					url:'/pages/user-space/user-space'
				})
			},
			//打开详情页
			openDetail(){
				// 处于详情页中
				if (this.isdetail) return;
				uni.navigateTo({
					url:'/pages/post-detail/post-detail?detail='+JSON.stringify(this.item)
				})
			},
			//关注操作
			follow(){
				this.checkAuth(()=>{
					this.$H.post('/follow',{
						follow_id:this.item.user_id
					},{
						token:true
					}).then(res=>{
						// 通知更新
						uni.$emit('updateFollowOrLiked',{
							type:"follow",
							data:{
								user_id:this.item.user_id
							}
						})
					}).catch(err=>{
						uni.showToast({
							title: '关注失败',
							icon:'none'
						});
					})
				})
			},
			//顶踩操作
			liked(type){
				this.checkAuth(()=>{
					this.$H.post('/liked',{
						post_id:this.item.id,
						type:type === 'liked' ? 0 : 1
					},{
						token:true,
					}).then(res=>{
						if(res.data.errorCode) {
							return uni.showToast({
								title: res.data.msg,
								icon:'none'
							});
						}
					// 通知父组件
					uni.$emit('updateFollowOrLiked',{
						type:"liked",
						data:{
							type:type,
							id:this.item.id
						}
						})
					})
				})
			},
			// 评论
			doComment(){
				this.checkAuth(()=>{
					if (this.isdetail) {
						return this.openDetail()
					}
					this.$emit('doComment')
				})
			},
			//分享操作
			shared(){
				if (this.isdetail) {
					return this.openDetail()
				}
				this.$emit('shared')
			}
		}
	}
</script>

<style>
	.liked-active{
		color: #1296db;
	}
</style>