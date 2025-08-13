<template>
	<view>
		<!-- 时间 -->
		<view v-if="shortTime" class="flex align-center justify-center font-sm text-light-muted">
			{{shortTime}}
		</view>
		<!-- 消息气泡 -->
		<view class="flex align-center px-2 my-2"
		:style="isSelf?'flex-direction: row-reverse':''">
			<image :src="item.headshot ? item.headshot : '/static/common/demo6.jpg'" class="rounded-circle" 
			style="width: 100rpx;height: 100rpx;"></image>
			<view class="bg-light p-2 rounded mx-2" 
			style="max-width: 400rpx;">
				{{item.content}}
			</view>
		</view>
	</view>
</template>

<script>
	// 模拟当前登录用户的userid
	// const uid = 1;
	import $T from '@/common/time.js';
	export default {
		props:{
			item:Object,
			index:Number,
			pretime:[Number,String]
		},
		computed: {
			// 是否是登录用户本人
			isSelf() {
				let myId = this.$store.state.user.id
				return myId === this.item.user_id
			},
			// 转换时间
			shortTime(){
				return $T.getChatTime(this.item.create_time,this.pretime)
			}
		}
	}
</script>

<style>
</style>