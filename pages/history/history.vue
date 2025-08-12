<template>
	<view>
		<common-list v-for="(item,index) in list" :key="index" :item="item" :index="index"></common-list>
		<no-thing v-if="list.length === 0"></no-thing>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	import noThing from '@/components/common/no-thing.vue';
	export default {
		components:{
			commonList,
			noThing
		},
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			// 取出历史记录
			let list = uni.getStorageSync('history')
			if(list){
				this.list = JSON.parse(list)
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
			// 监听评论数变化
			uni.$on('updateCommentsCount',({id,count})=>{
				this.list.forEach(item=>{
					if(item.id === id) {
						item.comment_count = count
					}
				})
			})
		},
		onUnload() {
			uni.$off('updateFollowOrLiked',(e)=>{})
			uni.$off('updateCommentsCount',(e)=>{})
		},
		onNavigationBarButtonTap() {
			uni.showModal({
				content:'是否要清除历史记录',
				success: (res) => {
					if(res.confirm){
						uni.removeStorageSync('history')
						this.list = []
					}
				}
			})
		},
		methods: {
			//关注
			follow(user_id){
				// 找到当前作者的所有列表
				this.list.forEach((item)=>{
					if(item.user_id === user_id){
						item.isFollow = true
					}
				})
				uni.showToast({
					title:'关注成功',
					icon:'none'
				})
			},
			//顶踩
			liked(e){
				this.list.forEach(item=>{
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
		}
	}
</script>

<style>

</style>
