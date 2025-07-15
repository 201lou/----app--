<template>
	<view>
		<!-- 导航 -->
		<uni-nav-bar :border="false" :fixed="true" statusBar="true" @clickRight="openInput">
			<view class="flex align-center justify-center font-weight-bold w-100">
				<!-- <view class="font-lg color-global mx-1">关注</view> -->
				<view class="font-md text-light-muted mx-1"  @click="changeTab(index)"
				v-for="(item,index) in tabBar" :key="index" 
				:class="tabIndex === index ? 'font-lg color-global':'font-md text-light-muted'">{{item.name}}</view>
			</view>
			<template v-slot:right>
				<text class="iconfont icon-fabu1"></text>
			</template>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-uni/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				tabIndex : 0,
				tabBar:[
					{
						name:'关注'
					},
					{
						name:'话题'
					}
				],
			}
		},
		methods: {
			// 打开发布页
			openInput(){
				uni.navigateTo({
					url:'/pages/add-input/add-input'
				});
			},
			//切换选项
			changeTab(index){
				this.tabIndex = index
			}
		}
	}
</script>

<style>

</style>
