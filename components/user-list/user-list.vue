<template>
	<view class=" flex align-center p-2 border-bottom border-light-secondary"
	hover-class="bg-light">
		<image :src="item.headshot" 
		style="width: 100rpx;height: 100rpx;" 
		class="rounded-circle mr-2"></image>
		<view class="flex flex-column flex-1">
			<text class="font-md text-dark">{{item.username}}</text>
			<uni-badge :text="item.age" :type="item.gender === 1?'error':'primary'" 
			size="small">
				<text v-if="item.gender > 0" class="iconfont font-sm" 
				:class="item.gender === 1?'icon-nv':'icon-nan'" 
				style="margin-right: 5rpx;"></text>
			</uni-badge>
		</view>
		<view class="iconfont icon-xuanze font-md"
		:class="item.isFollow?'text-light-muted':'color-global'"></view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni-uni/uni-badge/uni-badge.vue';
	export default {
		components:{
			uniBadge
		},
		props :{
			item:Object,
			indexe:Number
		}
	}
</script>

<style>
</style>