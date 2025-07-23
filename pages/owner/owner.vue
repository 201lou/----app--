<template>
	<view>
		<navigator url="/pages/login/login">
			<view class="flex align-center p-2" hover-class="bg-light">
				<image src="/static/common/demo6.jpg" style="width: 100rpx;height: 100rpx;" 
				class="rounded-circle"></image>
				<view class="flex flex-column flex-1 px-2">
					<text class="font-lg font-weight-bold">昵称</text>
					<text class="font text-muted">总帖子10 今日发帖0</text>
				</view>
				<text class="iconfont icon-xiangyou1"></text>
			</view>
		</navigator>		
		
		<view class="flex align-center px-3 py-2">
			<block v-for="(item,index) in myData" :key="index">
				<view class="flex-1 flex-column flex align-center justify-center">
					<text class="font-lg font-weight-bold">{{item.num}}</text>
					<text class="font text-muted">{{item.name}}</text>
				</view>
			</block>
		</view>
		
		<view class="px-3 py-2">
			<image src="/static/common/banner2.jpg" mode="aspectFill" style="height: 170rpx;"
			class="rounded w-100"></image>
		</view>
		
		<uni-list>
			<uni-list-item title="浏览历史" showExtraIcon>
				<template v-slot:icon>
		            <text class="iconfont icon-icon-"></text>
				</template>
			</uni-list-item>
			<uni-list-item title="社区认证" showExtraIcon>
				<template v-slot:icon>
			        <text class="iconfont icon-huiyuan"></text>
				</template>
			</uni-list-item>
			<uni-list-item title="审核帖子" showExtraIcon>
				<template v-slot:icon>
			        <text class="iconfont icon-xiugai"></text>
				</template>
			</uni-list-item>
			
		</uni-list>
		
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-uni/uni-list-item/uni-list-item.vue';
	import uniList from '@/components/uni-uni/uni-list/uni-list.vue';
	export default {
		components:{
			uniListItem,
			uniList
		},
		data() {
			return {
				myData:[{
					name:"帖子",
					num:1
				},{
					name:"动态",
					num:2
				},{
					name:"评论",
					num:0
				},{
					name:"粉丝",
					num:1
				}]
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'/pages/user-setting/user-setting'
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
