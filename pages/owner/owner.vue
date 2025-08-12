<template>
	<view>
		<!-- 未登录 -->
		<template v-if="!loginStatus">
			<view class="flex align-center justify-center py-2 font">
				登录社区，体验更多功能
			</view>
			<other-login></other-login>
			<view class="flex align-center justify-center py-2 font text-secondary" 
			@click="openLogin">
				账号/邮箱/手机登录<text class="ml-2 iconfont icon-xiangyou1"></text>
			</view>
		</template>
		<!-- 已登录 -->
		<view v-else class="flex align-center p-2" hover-class="bg-light">
			<image :src="avatar" style="width: 100rpx;height: 100rpx;" 
			class="rounded-circle"></image>
			<view class="flex flex-column flex-1 px-2">
				<text class="font-lg font-weight-bold">{{user.username}}</text>
				<text class="font text-muted">总帖子{{myData[0].num}} 今日发帖{{myData[1].num}}</text>
			</view>
			<text class="iconfont icon-xiangyou1"></text>
		</view>		
		
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
			<uni-list-item title="浏览历史" showExtraIcon @click="openHistory">
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
	import otherLogin from '@/components/common/other-login.vue';
	import { mapState } from 'vuex'
	export default {
		components:{
			uniListItem,
			uniList,
			otherLogin
		},
		data() {
			return {
				myData:[{
					name:"帖子",
					num:0
				},{
					name:"动态",
					num:0
				},{
					name:"关注",
					num:0
				},{
					name:"粉丝",
					num:0
				}]
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'/pages/user-setting/user-setting'
			})
		},
		computed: {
			...mapState({
				loginStatus:state=>state.loginStatus,
				user:state=>state.user
			}),
			// 用户头像
			avatar(){
				return (this.user.userpic && this.user) ? this.user.userpic : '/static/common/demo6.jpg'
			}
		},
		mounted() {
			// console.log(this.loginStatus);
			// console.log(this.user)
		},
		onShow() {
			if(this.loginStatus){
				this.getCounts()
			}
		},
		watch:{
			loginStatus(newValue,oldValue) {
				if(newValue){
					this.getCounts()
				} else {
					this.myData.forEach(item=>{
						item.num = 0
					})
				}
			}
		},
		methods: {
			// 获取用户相关统计数据
			getCounts(){
				this.$H.get('/user/getcounts/'+this.user.id,{},{
					token:true,
					notoast:true
				}).then(res=>{
					this.myData[0].num = res.data.data.post_count
					this.myData[1].num = res.data.data.today_posts_count
					this.myData[2].num = res.data.data.withfollow_count
					this.myData[3].num = res.data.data.withfen_count
				})
			},
			// 打开登录页
			openLogin(){
				uni.navigateTo({
					url: '/pages/login/login',
				});
			},
			openHistory(){
				uni.navigateTo({
					url:'/pages/history/history'
				})
			}
		}
	}
</script>

<style>

</style>
