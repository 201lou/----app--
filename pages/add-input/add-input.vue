<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar left-icon="back" statusBar :border="false" @click="back">
			<view class="flex align-center justify-center w-100">
			所有人可见<text class="iconfont icon-shezhi1"></text>
			</view>
		</uni-nav-bar>
		<!-- 文本域组件 -->
		<textarea v-model="content" placeholder="说一句话吧~" class="w-100 px-2"/>
		<!-- 上传多图 -->
		<upload-image :show="show" ref="uploadImage" :list="imageList" @change="changeImage"></upload-image>
		<!-- 底部操作条 -->
		<view class="fixed-bottom bg-white flex align-center justify-center" style="height: 85rpx;">
			<view class="footer-btn iconfont icon-caidan animated faster" hover-calss="jello"></view>
			<view class="footer-btn iconfont icon-huatifuhao animated faster" hover-calss="jello"></view>
			<view class="footer-btn iconfont icon-tupian animated faster" 
			hover-calss="jello" @click="iconclick('uploadImage')"></view>
			
			<view class="bg-color text-white ml-auto flex justify-center align-center rounded mr-3 animated faster" 
			style="width: 140rpx;height: 60rpx;" hover-class="bounce">发送</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-uni/uni-nav-bar/uni-nav-bar.vue';
	import uploadImage from '@/components/common/upload-image.vue';
	export default {
		components:{
			uniNavBar,
			uploadImage
		},
		data() {
			return {
				content:"",
				imageList:[],
				showBack:false
			}
		},
		computed: {
			show() {
				return this.imageList.length > 0 
			}
		},
		// 监听返回
		onBackPress() {
				if ( (this.content !== '' || this.imageList.length > 0) && !this.showBack) {
					uni.showModal({
						content:'是否要保存为草稿?',
						showCancel:true,
						cancelText:'不保存',
						confirmText:'保存',
						success: res => {
							//点击保存
							if (res.confirm) {
								this.store()
							}else {
								uni.removeStorage({
									key:"add-input"
								})
							}									
							//手动执行返回
							uni.navigateBack({ delta : 1});
						},
					});
					this.showBack = true
				return true
				}
		},
		//页面加载
		onLoad() {
			uni.getStorage({
				key:"add-input",
				success: (res) => {
					if (res.data) {
						let result = JSON.parse(res.data)
						this.content = result.content,
						this.imageList = result.imageList
					}
				}
			})
		},
		methods: {				
			// 选中图片
			changeImage(e){
				this.imageList = e
			},
			//保存操作
			store() {
				// 保存为本地存储
				uni.setStorage({
					key:'add-input',
					data:JSON.stringify({
						content:this.content,
						imageList:this.imageList
					})
				})
			},
			// 返回上一步
			back() {
				uni.navigateBack();
			},
			// 底部图片图标点击
			iconclick(e) {
				switch (e) {
					case 'uploadImage':
					this.$refs.uploadImage.chooseImage()
						break;
				}
			}
		}
		
	}
</script>

<style>
	.footer-btn {
		width: 86rpx;
		height: 86rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50rpx;
	}
</style>
