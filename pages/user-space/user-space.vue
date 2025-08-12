<template>
	<view>
		<!-- 头部 -->
		<view class="flex align-center p-4 border-bottom border-light-secondary">
			<image :src="userinfo.userpic" style="width: 180rpx;height: 180rpx;" 
			class="rounded-circle"></image>
			<view class="pl-3 flex flex-column flex-1">
				<view class="flex align-center">
					<view class="flex-1 flex flex-column align-center justify-center" 
					v-for="(item,index) in counts" :key="index">
						<text class="font-lg font-weight-bold">{{item.num}}</text>
						<text class="font text-muted">{{item.name}}</text>
					</view>
				</view>
				<view class="flex align-center justify-center">
					<button  v-if="user_id == user.id" type="default" size="mini" 
					style="width: 80%;" @click="openUserInfo">编辑资料</button>
					<button v-else type="default" size="mini" 
					:class="userinfo.isFollow ? 'bg-light text-dark': 'bg-color'" style="width: 80%;"
					@click="doFollow">{{userinfo.isFollow ? '已关注' : '关注'}}</button>
				</view>
			</view>
		</view>
		
		<!-- tab -->
		<view class="flex align-center py-2" style="height: 100rpx;">
			<view class="flex-1 flex align-center justify-center" 
			v-for="(item,index) in tabBars" :key="index" 
			:class="index === tabIndex ? 'font-lg font-weight-bold color-global': 'font-md'"
			@click="changeTab(index)">{{item.name}}</view>
		</view>
		
		<template v-if="tabIndex === 0">
			<view class="p-3 border-bottom">
				<view class="font-md">账号信息</view>
				<view class="font">账号年龄:{{userinfo.regtime}}</view>
				<view class="font">账号ID:{{user_id}}</view>
			</view>
			<view class="p-3 border-bottom">
				<view class="font-md">个人信息</view>
				<view class="font">星座:{{userinfo.birthday}}</view>
				<view class="font">职业:{{userinfo.job}}</view>
				<view class="font">故乡:{{userinfo.path}}</view>
				<view class="font">情感:{{userinfo.qg}}</view>
				</view>
		</template>
		<template v-else>
			<common-list v-for="(item,index) in list" :key="index" :item="item" :index="index"
			@follow="follow" @liked="liked"></common-list>
			<view class="divider"></view>
			<load-more :loadmore="loadmore"></load-more>
		</template>
		
		<!-- 弹出层 -->
		<uni-popup ref="popup" type="top">
			<view class="flex align-center justify-center color-aliceblue w-100 font-md border-bottom py-1" 
			style="height: 100rpx;" hover-class="color-global" 
			@click="doBlack">
				<text class="iconfont icon-icon-1 mr-2"></text> 
				{{userinfo.isblack ? '移出黑名单' : '加入黑名单'}}
			</view>
			<view v-if="!userinfo.isblack" class="flex align-center justify-center color-aliceblue w-100 font-md py-1"
			style="height: 100rpx;" hover-class="color-global" @click="popupEvent('clear')">
				<text class="iconfont icon-qingchu mr-2"></text> 开始聊天
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	const relationArray = ['保密','未婚','已婚']
	import commonList from '@/components/common/common-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	import uniPopup from '@/components/uni-uni/uni-popup/uni-popup.vue';
	import $T from '@/common/time.js';
	import { mapState } from 'vuex'
	export default {
		components:{
			commonList,
			loadMore,
			uniPopup
		},
		data() {
			return {
				user_id:0,
				userinfo:{
					userpic:"/static/common/demo5.jpg",
					username:"",
					sex:0,
					age:20,
					isFollow:false,
					regtime:"",
					birthday:"",
					job:"",
					path:"",
					qg:""
				},
				counts:[{
					name:"帖子",
					num:0
				},{
					name:"关注",
					num:0
				},{
					name:"粉丝",
					num:0
				}],
				tabIndex:0,
				tabBars:[{
					name:"首页",
				},{
					name:"帖子",
					list:[],
					//1.上拉加载更多 2.加载中 3...没有更多了
					loadmore:"上拉加载更多",
					page:1
				},{
					name:"动态",
					list:[],
					//1.上拉加载更多 2.加载中 3...没有更多了
					loadmore:"上拉加载更多",
					page:1
				}],
			}
		},
		onNavigationBarButtonTap() {
			if(this.user_id == this.user.id){
				return uni.navigateTo({
					url: '../user-setting/user-setting',
				});
			}
			this.$refs.popup.open()
		},
		onLoad(e) {
			if(!e.user_id){
				return uni.showToast({
					title: '非法参数',
					icon:'none'
				});
			}
			this.user_id = e.user_id
			// 加载用户个人信息
			this.getUserInfo()
			// 获取用户相关统计数据
			this.getCounts()
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
			// 监听评论数变化
			uni.$on('updateCommentsCount',({id,count})=>{
				this.tabBars.forEach(tab=>{
					if(tab.list){
						tab.list.forEach(item=>{
							if(item.id === id) {
								item.comment_count = count
							}
						})
					}
				})
			})
		},
		onUnload() {
			uni.$off('updateFollowOrLiked',(e)=>{})
			uni.$off('updateCommentsCount',(e)=>{})
		},
		computed: {
			...mapState({
				user:state=>state.user
			}),
			list() {
				return this.tabBars[this.tabIndex].list
			},
			loadmore() {
				return this.tabBars[this.tabIndex].loadmore
			}
		},
		methods: {
			// 获取用户相关统计数据
			getCounts(){
				this.$H.get('/user/getcounts/'+this.user_id).then(res=>{
					this.counts[0].num = res.data.data.post_count
					this.counts[1].num = res.data.data.withfollow_count
					this.counts[2].num = res.data.data.withfen_count
				})
			},
			// 获取用户个人信息
			getUserInfo() {
				this.$H.post('/getuserinfo',{
					user_id:this.user_id
				},{
					token:true,
					notoast:true
				}).then(res=>{
					this.userinfo = {
						userpic:res.data.data.userpic,
						username:res.data.data.username,
						sex:res.data.data.userinfo.sex,
						age:res.data.data.userinfo.age,
						isFollow:res.data.data.fens.length > 0,
						isblack:res.data.data.blacklist.length > 0,
						regtime:$T.getAgeByBirthday(res.data.data.create_time),
						birthday:$T.getHoroscope(res.data.data.userinfo.birthday),
						job:res.data.data.userinfo.job ? res.data.data.userinfo.job : '无',
						path:res.data.data.userinfo.path ? res.data.data.userinfo.path : '无',
						qg:relationArray[res.data.data.userinfo.qg]
					}
					uni.setNavigationBarTitle({
						title:this.userinfo.username
					})
				})
			},
			changeTab(index) {
				this.tabIndex = index
				this.getList()
			},
			//关注
			follow(user_id){
				// 找到当前作者的所有列表
				this.tabBars.forEach(tab=>{
					if(tab.list){
						tab.list.forEach((item)=>{
							if(item.user_id === user_id){
								item.isFollow = true
							}
						})
					}
				})
				uni.showToast({
					title:'关注成功',
					icon:'none'
				})
			},
			//顶踩
			liked(e){
				this.tabBars[this.tabIndex].list.forEach(item=>{
					if(item.id === e.id){
						if (item.liked.type === ''){
							item.liked[e.type+'_count']++
							}
						else if (item.liked.type === 'liked' && e.type === 'disliked'){
							item.liked.liked_count--;
							item.liked.disliked_count++;
						}
						else if(item.liked.type === 'disliked' && e.type === 'liked'){
							item.liked.liked_count++;
							item.liked.disliked_count--;
						}
						item.liked.type = e.type
					}
				})
				let msg = e.type === 'liked' ? '赞':'踩'
				uni.showToast({
					title:msg+'成功',
					icon:'none'
				});
			},
			// 获取文章列表
			getList(){
				let index = this.tabIndex
				let page = this.tabBars[index].page
				let isrefresh = page === 1
				this.$H.get('/user/'+this.user_id+'/post/'+page).then(res=>{
					let list = res.data.data.list.map(v=>{
						return this.$U.formatCommonList(v)
					})
					this.tabBars[index].list = isrefresh ? [...list] : [...this.tabBars[index].list,
					...list],
					this.tabBars[index].loadmore = list.length < 10 ?'没有更多了' : '上拉加载更多'
				}).catch(err=>{
					if (!isrefresh) {
						this.newList[index].page--
					}
				})
			},
			// 关注/取消关注
			doFollow(){
				this.checkAuth(()=>{
					let url = this.userinfo.isFollow ? '/unfollow' : '/follow'
					let msg = this.userinfo.isFollow ? '取消关注' : '关注'
					this.$H.post(url,{
						follow_id:this.user_id
					},{
						token:true
					}).then(res=>{
						this.userinfo.isFollow = !this.userinfo.isFollow
						uni.showToast({
							title: msg+'成功',
							icon:'none'
						});
						uni.$emit('updateIndex')
						this.getList()
					})
				})
			},
			// 进入编辑资料
			openUserInfo(){
				uni.navigateTo({
					url:'/pages/user-ownerinfo/user-ownerinfo'
				})
			},
			// 加入或移出黑名单
			doBlack(){
				this.checkAuth(()=>{
					let url = this.userinfo.isblack ? '/moveoutblack' : '/addblack'
					let msg = this.userinfo.isblack ? '移出黑名单' : '加入黑名单'
					uni.showModal({
						content: '是否要'+msg,
						success: res => {
							this.$H.post(url,{
								id:this.user_id
							},{
								token:true
							}).then(res=>{
								this.userinfo.isblack = !this.userinfo.isblack
								uni.showToast({
									title: msg+'成功',
									icon:'none'
								});
							})
						},
					});
				})
			},
		}
	}
</script>

<style>

</style>
