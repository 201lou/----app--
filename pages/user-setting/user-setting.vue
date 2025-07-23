<template>
	<view>
		<uni-list>
			<uni-list-item title="账号与安全" @click="open('user-password')"></uni-list-item>
			<uni-list-item title="绑定邮箱" @click="open('user-email')"></uni-list-item>
			<uni-list-item title="资料编辑"  @click="open('user-ownerinfo')"></uni-list-item>
			<uni-list-item title="清除缓存" @click="clear">
				<text slot="right">{{currentSize}}</text>
			</uni-list-item>
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
				currentSize:0
			}
		},
		onLoad() {
			this.getStorageInfo()
		},
		methods: {
			getStorageInfo(){
				let res = uni.getStorageInfoSync()
				this.currentSize = (res.currentSize / 1024).toFixed(2) + 'KB'
			},
			open(path) {
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			},
			// 清除缓存
			clear(){
				uni.showModal({
					title:'提示',
					content:'是否要清除缓存',
					cancelText:'不清除',
					confirmText:'清除',
					success: res => {
						if(res.confirm){
							uni.clearStorageSync()
							this.getStorageInfo()
							uni.showToast({
								title:'清除成功',								
							})
						}
					}
				})
			}
		}
	}
</script>

<style>

</style>
