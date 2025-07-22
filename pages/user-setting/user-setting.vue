<template>
	<view>
		<uni-list>
			<uni-list-item title="账号与安全" @click="open('user-password')"></uni-list-item>
			<uni-list-item title="绑定邮箱" @click="open('user-email')"></uni-list-item>
			<uni-list-item title="资料编辑"  @click="open('user-ownerinfo')"></uni-list-item>
			<uni-list-item title="清除缓存"></uni-list-item>
			<uni-list-item title="意见反馈" @click="open('user-feedback')"></uni-list-item>
			<uni-list-item title="关于社区" @click="open('about')"></uni-list-item>
			
			<view class="py-2 px-3">
				<button class="bg-color text-white" style="border-radius: 50rpx;border: 0;"
				type="primary">退出登录</button>
			</view>
			
		</uni-list>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-uni/uni-list-item/uni-list-item.vue';
	import uniList from '@/components/uni-uni/uni-list/uni-list.vue';	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			open(path) {
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>

</style>
