<template>
	<view class="flex align-center p-2 border-bottom border-light-secondary" hover-class="bg-light" @click="openChat">
		<image class="rounded-circle mr-2" :src="item.headshot" 
		style="width: 80rpx;height: 80rpx;"></image>
		<view class="flex flex-column flex-1">
			<view class="flex align-center justify-between">
				<text class="font-md">{{item.username}}</text>
				<text class="font-sm text-secondary">{{formaTime(item.update_time)}}</text>
			</view>
			<view class="flex align-center justify-between">
				<text class="text-secondary text-ellipsis" style="max-width: 500rpx;">{{item.data}}</text>
				<uni-badge :text="item.notread" type="error"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import $T from '@/common/time.js';
	import uniBadge from '@/components/uni-uni/uni-badge/uni-badge.vue';
	export default {
		components:{
			uniBadge
		},
		props: {
			item:Object,
			index:Number
		},
		methods: {
			formaTime(value) {
				return $T.gettime(value);
			},
			openChat() {
				uni.navigateTo({
					url:'/pages/users-chat/users-chat'
				})
			}
		}
	}
</script>

<style>
</style>