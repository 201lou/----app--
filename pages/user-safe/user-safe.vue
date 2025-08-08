<template>
	<view>
		<uni-list>
			<uni-list-item :title="item.name" v-for="(item,index) in list" :key="index"
			@click="handleEvent(item)">
				<template v-slot:right>
					<view class="flex align-center text-right text-light-muted">
						{{item.data}}
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-uni/uni-list-item/uni-list-item.vue';
	import uniList from '@/components/uni-uni/uni-list/uni-list.vue';
	import { mapState } from 'vuex'
	
	export default {
		components: {
			uniList,
			uniListItem,
			
		},
		data() {
			return {
				list:[]
			}
		},
		computed: {
			...mapState({
				user:state=>state.user
			})
		},
		onShow() {
			this.__init()
		},
		methods: {
			__init() {
				let list = [{
					name:"手机号",
					data:this.user.phone ? this.user.phone : "未绑定",
					type:"navigateTo",
					url:"/pages/user-phone/user-phone"
				},{
					name:"登录密码",
					data:this.user.password ? "修改密码" : "未设置",
					type:"navigateTo",
					url:"/pages/user-password/user-password"
				},{
					name:"绑定邮箱",
					data:this.user.email ? this.user.email : "未绑定",
					type:"navigateTo",
					url:"/pages/user-email/user-email"
				},]
				this.list = [...list]
				
				this.$H.get('/user/getuserbind',{},{
					token:true
				}).then(res=>{
					this.$store.commit('editUserInfo',{
						key:"user_bind",
						value:res
					})
					let other = [{
							name:"微信绑定", 
							data:this.user.user_bind.data.data.weixin ? 
							this.user.user_bind.data.data.weixin.nickname : "未绑定",
							type:"bind",
							provider:"weixin"
						},{
							name:"微博绑定",
							data:this.user.user_bind.data.data.sinaweibo ? 
							this.user.user_bind.data.data.sinaweibo.nickname : "未绑定",
							type:"bind",
							provider:"sinaweibo"
						},{
							name:"qq绑定",
							data:this.user.user_bind.data.data.qq ? 
							this.user.user_bind.data.data.qq.nickname : "未绑定",
							type:"bind",
							provider:"qq"
						}]
					this.list = [...this.list,...other]
				})
			},
			handleEvent(item) {
				if(item.type === '') return
				switch (item.type){
					case 'navigateTo':
					uni.navigateTo({
						url:item.url
					})
						break;
					case 'bind':
					if(item.data !== '未绑定'){
						return uni.showToast({
							title: '你已经绑定过了',
							icon:'none'
						});
					}
					this.bind(item.provider)
						break;
				}
			},
			
			// 绑定第三方登录
			bind(provider) {
				uni.login({
					provider:provider,
					success: (r) => {
						uni.getUserInfo({
							provider:provider,
							success: (res) => {
								let obj = {
									provider:provider,
									openid:res.userInfo.openId,
									nickName:res.userInfo.nickName,
									avatarUrl:res.userInfo.avatarUrl
								}
								this.$H.post('user/bindother',obj,{
									token:true
								}).then(res=>{
									this.__init()
									uni.showToast({
										title: '绑定成功',
										icon:'none'
									});
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
