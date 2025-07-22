<template>
	<view>
		<view class="flex align-center justify-center flex-column pt-4 pb-3">
			<image src="/static/common/demo5.jpg" style="width: 200rpx;height: 200rpx;"
			class="rounded-circle"></image>
			<text class="font text-muted mt-2">version 1.0.1</text>
		</view>
		<uni-list>
			<uni-list-item title="新版本检测"></uni-list-item>
			<uni-list-item title="社区用户协议"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-uni/uni-list-item/uni-list-item.vue';
	import uniList from '@/components/uni-uni/uni-list/uni-list.vue';
	export default {
		components:{
			uniList,
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
