<template>
	<uni-popup ref="popup" type="bottom">
		<view class="color-aliceblue">
			<view class="text-center py-2 font-md border-bottom border-light-secondary">分享到</view>
			<view class="flex align-center">
				<view class="flex-1 flex flex-column align-center justify-center py-2"
				v-for="(item,index) in providerList" :key="index" hover-class="bg-light" @tap="share(item)">
					<view class="iconfont text-white flex align-center justify-center font-lg rounded-circle"
					:class="item.icon+' '+item.color" style="width: 100rpx;height: 100rpx;"></view>
					<text class="font mt-1 text-muted">{{item.name}}</text>
				</view>
			</view>
			<view class="text-center py-2 font-md border-top border-light-secondary" 
			hover-class="bg-light" @click="close()">取消</view>
		</view>			
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-uni/uni-popup/uni-popup.vue';
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				title: '',
				shareText: '',
				href:"",
				image: '',
				shareType:0,
				providerList:[
					{
					name: '微信好友',
					icon:"icon-weixin",
					color:"bg-success",
					id:'weixin'
				},{
					name: '新浪微博',
					icon:"icon-qq",
					color:"bg-danger",
					id:'weixin'
				},{
					name: '新浪微博',
					icon:"icon-qq",
					color:"bg-danger",
					id:'weixin'
				},{
					name: '新浪微博',
					icon:"icon-qq",
					color:"bg-danger",
					id:'weixin'
				},
				]
			}
		},
		computed:{
			isDisableButton() {
				return function(item) {
					if(this.shareType === 0 && item.id === 'qq'){
						return true;
					}
					if(this.shareType === 5 && item.name !== '分享到微信好友'){
						return true;
					}
					return false;
				}
			}
		},
		onShareAppMessage() {
			return {
				title: this.shareText ? this.shareText : "欢迎体验uni-app",
				path: '/pages/tabBar/component/component',
				imageUrl:this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
			}
		},
		// 销毁之前
		beforeDestroy(){
			this.shareText='uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
			this.href = 'https://uniapp.dcloud.io',
			this.image='';
		},
		onReady() {
			this.loadShareProviders()
		},
		methods:{
			async loadShareProviders() {
				try {
					const res = await uni.getProvider({ service: 'share' })
					const providers = []
					
					res.provider.forEach(service => {
					  switch(service) {
						case 'weixin':
						  providers.push({
							name: '微信好友',
							icon: 'icon-weixin',
							color: 'bg-success',
							id: 'weixin'
						  }, {
							name: '朋友圈',
							icon: 'icon-weixincircle',
							color: 'bg-dark',
							id: 'weixin',
							type: 'WXSenceTimeline'
						  })
						  break
						case 'sinaweibo':
						  providers.push({
							name: '新浪微博',
							icon: 'icon-weibo',
							color: 'bg-danger',
							id: 'sinaweibo'
						  })
						  break
						case 'qq':
						  providers.push({
							name: 'QQ好友',
							icon: 'icon-qq',
							color: 'bg-primary',
							id: 'qq'
						  })
						  break
					  }
					})
					
				this.providerList = providers
				  } catch (e) {
					console.error('获取分享服务失败', e)
					uni.showToast({
					  title: '分享功能初始化失败',
					  icon: 'none'
					})
				  }
				},
			open(options) {
				this.title = options.title
				this.shareText = options.shareText
				this.href = options.href
				this.image = options.image
				console.log(options)
				this.$refs.popup.open()
			},
			close(){
				this.$refs.popup.close()
			},
			async share(e) {
				if (!e.id) {
				    uni.showToast({
				      title: '分享服务未就绪',
				      icon: 'none'
				    })
				    return
				  }
				
				console.log('分享通道:'+ e.id +'； 分享类型:' + this.shareType);
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'分享内容不能为空',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'分享图片不能为空',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('分享操作结束!')
					}
				}
				
				switch (this.shareType){
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id:'gh_33446d7f7a26',
							path:'/pages/tabBar/component/component',
							webUrl:'https://uniapp.dcloud.io',
							type:0
						};
						break;
					default:
						break;
				}
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOPtions);
			},
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => {// 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if(file.size > 20480) {// 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content:'分享图片太大,需要请重新选择图片!',
										showCancel:false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content:'分享图片太大,需要请重新选择图片!',
							showCancel:false
						})
					});
				})
			}
		}
	}
</script>

<style>
</style>