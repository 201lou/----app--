<template>
	<view>
		<!-- 帖子详情页详细信息 -->
		<common-list :item="info" isdetail @doComment="doComment" @shared="shared"
		@follow="follow" @liked="liked">
			<view>{{info.content}}</view>
			<view>
				<image v-for="(item,index) in images" :src="item.url" 
				class="w-100" mode="widthFix" @click="preview(index)"></image>
			</view>
		</common-list>
		
		<view class="divider"></view>
		<view class="p-2 font-md font-weight-bold">
			最新评论 {{info.comment_count}}
		</view>
		<view class="px-2">
			<view class="uni-comment-list">
				<view class="uni-comment-face"><image src="/static/common/demo5.jpg" 
				mode="widthFix"></image></view>
				<view class="uni-comment-body">
					<view class="uni-comment-top">
						<text>花开富贵</text>
					</view>
					<view class="uni-comment-content">支持爱你</view>
					<view class="uni-comment-date">
						<view>2天前</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出分享 -->
		<share-to ref="share"></share-to>
		<!-- 占位 -->
		<view style="height: 100rpx;"></view>
		<!-- 底部发送框 -->
		<bottom-input @submit="submit"></bottom-input>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	import bottomInput from '@/components/common/bottom-input.vue';
	import shareTo from '@/components/common/share-to.vue';
	export default {
		components:{
			commonList,
			bottomInput,
			shareTo
		},
		data() {
			return {				
				// 当前帖子信息
				info:{
					id:0,
					user_id:0,
					username:"昵称",
					userpic:"/static/common/demo5.jpg",
					nowstime:"2019-10-20 下午04:30",
					isFollow:false,
					title:"我是标题",
					titlepic:"/static/common/demo2.jpg",
					liked:{
						type:"liked",
						liked_count:1,
						disliked_count:2
					},
					comment_count:2,
					share_count:2,
					content:"地煞编程学院:多热烈的白羊,热烈得好抽象,抽象掩盖欲望,却又欲盖弥彰",
				},
				images:[]
			}
		},
		onLoad(e) {
			// 初始化操作
			if (e.detail) {
				this.__init(JSON.parse(e.detail))
			}
			// 监听关注和顶踩操作
			uni.$on('updateFollowOrLiked',(e)=>{
				switch (e.type){
					case 'follow'://关注
					this.follow(e.data.user_id)
						break;
					case 'liked':
					this.liked(e.data)
						break;
				}
			})
		},
		onUnload() {
			uni.$off('updateFollowOrLiked',(e)=>{})
		},
		computed: {
			imagesList() {
				return this.images.map(item=>item.url) 
			}
		},
		onNavigationBarButtonTap() {
			this.$refs.share.open({
				title: this.info.title,
				shareText: this.info.title,
				href:"https://www.dishaxy.com",
				image: this.info.titlepic,
			})
		},
		onBackPress() {
			this.$refs.share.close()
		},
		methods: {
			__init(data) {
				// 修改标题
				uni.setNavigationBarTitle({
					title:data.title
				})
				this.info = data
				this.info.content = ''
				//请求api
				this.$H.get('/post/'+this.info.id).then(res=>{
					this.info.content = res.data.data.detail.content
					this.images = res.data.data.detail.images
				})
			},
			// 点击评论
			doComment() {
				
			},
			// 点击分享
			shared() {
				
			},
			// 关注
			follow() {
				this.info.isFollow = true
				uni.showToast({
					title:'关注成功'
				})
			},
			// 顶踩操作
			liked(e) {
				if(this.info.liked.type === e.type) {
					return uni.showToast({
						title:'你已经操作过了',
						icon:'none'
					})					
				}
				let msg = e.type === 'liked' ? '顶' : '踩'
				// 判断之前有没有操作过
				if (this.info.liked === '') {
					this.info.liked[e.type+'_count']++
				}else if(this.info.liked.type === 'liked' && e.type === 'disliked') {
					this.info.liked.liked_count--;
					this.info.liked.disliked_count++;
				}else if(this.info.liked.type === 'disliked' && e.type === 'liked') {
					this.info.liked.liked_count++;
					this.info.liked.disliked_count--;
				}
				this.info.liked.type = e.type
				uni.showToast({
					title: msg
				});
			},
			// 预览图片
			preview(index) {
				uni.previewImage({
					current:index,
					urls:this.imagesList,
					
				})
			},
			// 提交评论
			submit() {
				
			}
		}
	}
</script>

<style>

</style>
