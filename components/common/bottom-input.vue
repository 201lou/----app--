<template>
	<view class="fixed-bottom flex align-center border-top bg-white"
	style="height: 100rpx;">
		<input type="text" v-model="content" class="flex-1 rounded bg-light ml-2" 
		 style="padding: 5rpx; " :focus="focus" placeholder="文明发言" @confirm="submit" @blur="$emit('blur')"/>
		<view class="iconfont icon-fabu flex align-center justify-center font-md animated" 
		style="width: 100rpx;" hover-class="rubberBand color-global" @click="submit()"></view>
	</view>
</template>

<script>
	export default {
		props: {
			focus: {
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				content:""
			}
		},
		methods:{
			submit() {
				// 判断是否为空
				if (this.content === '') {
					return uni.showToast({
						title:'消息不能为空',
						icon:'none'
					});					
				}
				this.$emit('submit',this.content)
				// 清空输入框
				this.content = ''
			}
		}
	}
</script>

<style>
</style>