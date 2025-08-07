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
				list:[
				// 	{
				// 	name:"微信绑定",
				// 	data:"未绑定"
				// },{
				// 	name:"qq绑定",
				// 	data:"未绑定"
				// },
				]
			}
		},
		computed: {
			...mapState({
				user:state=>state.user
			})
		},
		onLoad() {
			let list = [{
				name:"手机号",
				data:this.user.phone ? this.user.phone : "未绑定",
				type:"navigateTo",
				url:"/pages/user-phone/user-phone"
			},{
				name:"登录密码",
				data:this.user.password ? "修改密码" : "未设置",
			},{
				name:"绑定邮箱",
				data:this.user.email ? this.user.email : "未绑定",
			},]
			this.list = [...list]
		},
		methods: {
			handleEvent(item) {
				if(item.type === '') return
				switch (item.type){
					case 'navigateTo':
					uni.navigateTo({
						url:item.url
					})
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>

</style>
