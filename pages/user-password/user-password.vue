<template>
	<view>
		<input v-if="user.password" class="uni-input" type="text" placeholder="输入旧密码" v-model="oldpassword"/>
		<input class="uni-input" ype="text" placeholder="输入新密码" v-model="newpassword"/>
		<input class="uni-input" type="text" placeholder="确认新密码"v-model="renewpassword"/>
		<view class="py-2 px-3">
			<button class="bg-color text-white" style="border-radius: 50rpx;border: 0;"
			type="primary" :disabled="disabled" :class="disabled ? 'bg-color-disabled' : ''"
			@click="submit">设置</button>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				oldpassword:"",
				newpassword:"",
				renewpassword:""
			}
		},
		computed:{
			...mapState({
				user:state=>state.user
			}),
			disabled() {
				if (this.user.password) {
					return this.oldpassword == '' || this.newpassword == '' || this.renewpassword == ''
				}
				return this.newpassword == '' || this.renewpassword == ''
			}
		},
		methods: {
			// 验证密码
			check() {
				if(this.newpassword !== this.renewpassword) {
					uni.showToast({
						title:'两次密码不一样',
						icon:'none'
					});
					return
				}
				return true
			},
			submit() {
				if(!this.check()) {
					return;
				}
				this.$H.post('/repassword',{
					oldpassword:this.oldpassword,
					newpassword:this.newpassword,
					renewpassword:this.renewpassword
				},{
					token:true
				}).then(res=>{
					this.$store.commit('editUserInfo',{
						key:'password',
						value:true
					})
					uni.navigateBack({
						delta:1
					})
					uni.showToast({
						title:'修改密码成功',
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style>

</style>
