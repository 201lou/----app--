<template>
	<view>
		<input class="uni-input" type="text" placeholder="输入旧密码" v-model="oldpassword"/>
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
	export default {
		data() {
			return {
				oldpassword:"",
				newpassword:"",
				renewpassword:""
			}
		},
		computed:{
			disabled() {
				return this.oldpassword == '' || this.newpassword == '' || this.renewpassword == ''
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
				console.log("提交成功");
			}
		}
	}
</script>

<style>

</style>
