<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar left-icon="back" statusBar :border="false" @click-left="back">
			<view class="flex align-center justify-center w-100" @click="changeOpen">
			{{isOpenText}}<text class="iconfont icon-shezhi1"></text>
			</view>
		</uni-nav-bar>
		<!-- 文本域组件 -->
		<textarea v-model="content" placeholder="说一句话吧~" class="w-100 px-2"/>
		<!-- 选中的分类 -->
		<view class="font-md px-2 py-1 flex">
			<view class="border px-3 py text-dark flex align-center justify-center"
			style="border-radius: 50rpx;">
				<text class="iconfont icon-huatifuhao mr-1"></text>
				{{post_class_name ? "所属分类："+post_class_name : "请选择分类"}}
			</view>
		</view>
		<!-- 选中的话题 -->
		<view class="font-md px-2 py-1 flex">
			<view class="border px-3 py text-dark flex align-center justify-center"
			style="border-radius: 50rpx;">
				<text class="iconfont icon-huatifuhao mr-1"></text>
				{{topic.title ? "所属话题："+topic.title : "请选择话题"}}
			</view>
		</view>
		<!-- 上传多图 -->
		<upload-image :show="show" ref="uploadImage" :list="imageList" @change="changeImage"></upload-image>
		<!-- 底部操作条 -->
		<view class="fixed-bottom bg-white flex align-center justify-center" style="height: 85rpx;">
			<<picker mode="selector" :range="range" @change="choosePostClass">
				<view class="footer-btn iconfont icon-caidan animated faster"
				hover-calss="jello"></view>
			</picker>
			<view class="footer-btn iconfont icon-huatifuhao animated faster" hover-calss="jello"
			@click="chooseTopic"></view>
			<view class="footer-btn iconfont icon-tupian animated faster" 
			hover-calss="jello" @click="iconclick('uploadImage')"></view>
			
			<view class="bg-color text-white ml-auto flex justify-center align-center rounded mr-3 animated faster" 
			style="width: 140rpx;height: 60rpx;" hover-class="bounce" @click="submit">发送</view>
		</view>
	</view>
</template>

<script>
	const isOpenArray = ['仅自己可见','所有人可见'];
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
				showBack:false,
				isOpen:1,
				topic:{
					id:0,
					title:""
				},
				post_class_list:[],
				post_class_index:-1
			}
		},
		computed: {
			show() {
				return this.imageList.length > 0 
			},
			isOpenText(){
				return isOpenArray[this.isOpen]
			},
			// 文章分类可选项
			range(){
				return this.post_class_list.map(item=>{
					return item.classname
				})
			},
			post_class_id(){
				if(this.post_class_index !== -1){
					return this.post_class_list[this.post_class_index].id
				}
			},
			post_class_name(){
				if(this.post_class_index !== -1){
					return this.post_class_list[this.post_class_index].classname
				}
			},
			imageListIds(){
				return this.imageList.map(item=>{
					return {
						id:item.id
					}
				})
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
			// 监听选择话题事件
			uni.$on('chooseTopic',(e)=>{
				this.topic.id = e.id
				this.topic.title = e.title
			})
			// 获取所有文章分类
			this.getPostClass()
		},
		beforeDestroy() {
			uni.$off('chooseTopic',(e)=>{})
		},
		methods: {
			// 发布文章
			submit(){
				if(this.topic.id == 0) {
					return uni.showToast({
						title: '请选择话题',
						icon:'none'
					});
				}
				if(this.post_class_id == -1) {
					return uni.showToast({
						title: '请选择分类',
						icon:'none'
					});
				}
				uni.showLoading({
					title:'发布中。。。',
					mask:false
				})
				this.$H.post('/post/create',{
					imaglist:JSON.stringify(this.imageListIds),
					text:this.content,
					isopen:this.isOpen,
					topic_id:this.topic.id,
					post_class_id:this.post_class_id
				},{
					token:true
				}).then(res=>{
					console.log(res) ;
					uni.hideLoading()
					uni.$emit('updateIndex')
					uni.showToast({
						title:'发布成功',
						icon:'none'
					})
					this.showBack = true
					uni.navigateBack({
						delta:1
					})
				}).catch(err=>{
					uni.hideLoading()
				})
			},
			// 获取所有文章分类
			getPostClass(){
				this.$H.get('/postclass').then(res=>{
					this.post_class_list = res.data.data.list
				})
			},
			// 选择文章分类
			choosePostClass(e){
				this.post_class_index = e.detail.value
			},
			// 选择话题
			chooseTopic(){
				uni.navigateTo({
					url: '../topic-nav/topic-nav?choose=true'
				});
			},
			// 切换可见性
			changeOpen(){
				uni.showActionSheet({
					itemList:isOpenArray,
					success: (res) => {
						this.isOpen = res.tapIndex
					}
				})
			},
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
