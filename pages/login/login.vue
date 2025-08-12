<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="iconfont icon-guanbi1 flex align-center justify-center font-lg" 
		style="width: 100rpx;height: 100rpx;" hover-class="bg-light" @click="back"></view>
		
		<view class="text-center" style="padding-top: 130rpx;padding-bottom: 70rpx; font-size: 55rpx;"
		>{{status ? '手机验证码登录' : '账号密码登录'}}</view>
		
		<view class="px-2">
			<template v-if="!status">
				<view class="mb-2">
					<input type="text" v-model="username" placeholder="昵称/手机号/邮箱" class="border-bottom p-2"/>
				</view>
				<view class="mb-2 flex align-stretch">
					<input type="text" v-model="password" placeholder="请输入密码" class="border-bottom p-2 flex-1"/>
					<view class="border-bottom flex align-center justify-center font text-muted" style="width: 150rpx;">忘记密码</view>
				</view>
			</template>
			<template v-else>
				<view class="mb-2 flex align-stretch">
					<view class="border-bottom flex align-center justify-center font px-2">+86</view>
					<input type="text" v-model="phone" placeholder="手机号" class="border-bottom p-2 flex-1"/>
				</view>
				<view class="mb-2 flex align-stretch">
					<input type="text" v-model="pincode" placeholder="请输入验证码" class="border-bottom p-2 flex-1"/>
					<view class="border-bottom flex align-center justify-center font-sm text-white" 
					style="width: 180rpx;" :class="codeTime > 0 ?'bg-color-disabled':'bg-color'"
					@click="getCode">{{codeTime > 0 ? codeTime+'s':'获取验证码'}}</view>
				</view>
			</template>
			
			
		</view>
		
		<view class="py-2 px-3">
			<button class=" text-white" style="border-radius: 50rpx;border: 0;"type="primary" 
			:disabled="disabled" :class="disabled ? 'bg-color-disabled':'bg-color'"
			@click="submit">登录</button>
		</view>
		
		<view class="flex align-center justify-center pt-2 pb-4">
			<view class="text-primary font-sm" @click="changeStatus">{{status ? '账号密码登录' : '验证码登录'}}</view>
			<text class="text-muted mx-2">|</text>
			<view class="text-primary font-sm">登录遇见问题</view>
		</view>
		
		<view class="flex align-center justify-center">
			<view style="height: 1rpx;background-color: #ddd;width: 100rpx;"></view>
			<view class="mx-2 text-muted">社交账号登录</view>
			<view style="height: 1rpx;background-color: #ddd;width: 100rpx;"></view>
		</view>
		
		<!-- 第三方登录 -->
		<other-login back></other-login>
		
		<view class="flex align-center justify-center text-muted">
			注册即代表同意<text class="text-primary">《xxx社区协议》</text>
		</view>
		
	</view>
</template>

<script>
	import otherLogin from '@/components/common/other-login.vue';
	import uniStatusBar from '@/components/uni-uni/uni-status-bar/uni-status-bar.vue';
	export default {
		components:{
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				status:false,
				username:"",
				password:"",
				phone:"",
				pincode:"",
				codeTime:0
			}
		},
		onLoad() {
			
		},
		computed: {
			disabled() {
				if (this.status) {
					// 验证码登录模式：手机号和验证码都不能为空
					return this.phone === '' || this.pincode === ''
				} else {
					// 密码登录模式：用户名和密码都不能为空
					return this.username === '' || this.password === ''
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta:1
				});
			},
			// 初始化表单
			initForm() {
				this.username=''
				this.password=''
				this.phone=''
				this.pincode=''
			},
			// 切换登录方式
			changeStatus() {
				// 初始化表单
				this.initForm()
				this.status = !this.status
			},
			// 获取验证码
			getCode() {
				// 防止重复获取
				if(this.codeTime >0) {
					return;
				}
				// 验证手机号
				if(!this.validata()) return
				// 倒计时
				this.codeTime = 60
				let timer = setInterval(()=>{
					if(this.codeTime >= 1){
						this.codeTime--
					}else {
						this.codeTime = 0
						clearInterval(timer)
					}
				},1000)
			},
			// 表单验证
			validata() {
				var mpattern = /^1[3-9]\d{9}$/;
				if(!mpattern.test(this.phone)) {
					uni.showToast({
						title:'手机号格式不正确',
						icon:'none'
					});
					return false
				}
				return true
			},
			// 提交
			submit() {
				// 表单验证
				if(this.staus) {
					if(!this.validata()) return
				}
				// 提交后端
				this.$H.post('/user/login',{
					username:this.username,
					password:this.password
				}).then(res=>{
					// 修改vuex的state,持久化存储
					this.$store.commit('login',res.data.data)
					// 开启socket
					this.$store.dispatch('openSocket')
					// 提示和跳转
					uni.navigateBack({
						delta:1
					})
					uni.showToast({
						title:'登录成功',
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style>

</style>
