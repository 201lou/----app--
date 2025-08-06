<template>
	<view>
		<view class="flex align-center justify-between px-2">
			<text class="font-md">热门分类</text>
			<view class="felx align-center font text-secondary animated" hover-class="rubberBand"
			@click="openMore">
				更多 <text class="iconfont icon-xiangyou1"></text>
			</view>
		</view>
		<view class="flex align-center py-3 px-2 border-bottom">
			<view class="border rounded bg-light mx-1 px-2 animated" hover-class="rubberBand"
			v-for="(item,index) in hotClick" :key="index" @click="openMore">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props : ['hotClick'],
		methods: {
			openMore() {
				uni.navigateTo({
					url:'/pages/topic-nav/topic-nav'
				})
			}
		}
	}
</script>

<style>
</style>