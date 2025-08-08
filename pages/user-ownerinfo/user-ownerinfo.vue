<template>
	<view>
		<uni-list>
			<uni-list-item title="头像" @click="changeUserpic">
				<template v-slot:right>
					<image :src="userpic" 
					style="width: 100rpx;height: 100rpx;"
					class="rounded-circle"></image>
					<text class="iconfont icon-bianji1 ml-2"></text>
				</template>
			</uni-list-item>
			<uni-list-item title="昵称">
				<template v-slot:right>
					<input class="uni-input text-right" v-model="username" />
					<text class="iconfont icon-bianji1 ml-2"></text>
				</template>
			</uni-list-item>
			<uni-list-item title="性别" @click="changeGender">
				<template v-slot:right>
					<text>{{genderText}}</text>
					<text class="iconfont icon-bianji1 ml-2"></text>
				</template>
			</uni-list-item>
			<picker mode="date" :value="birthday" @change="onDateChange">
				<uni-list-item title="生日">
					<template v-slot:right>
						<text>{{birthday}}</text>
						<text class="iconfont icon-bianji1 ml-2"></text>
					</template>
				</uni-list-item>
			</picker>			
			<uni-list-item title="情感" @click="changeRelation">
				<template v-slot:right>
					<text>{{relationText}}</text>
					<text class="iconfont icon-bianji1 ml-2"></text>
				</template>
			</uni-list-item>
			<uni-list-item title="职业" @click="changeJob">
				<template v-slot:right>
					<text>{{job}}</text>
					<text class="iconfont icon-bianji1 ml-2"></text>
				</template>
			</uni-list-item>
			<uni-list-item title="家乡" @click="showCityPicker">
				<template v-slot:right>
					<text>{{pickerText}}</text>
					<text class="iconfont icon-bianji1 ml-2"></text>
				</template>
			</uni-list-item>
		</uni-list>
		<view class="py-2 px-3">
			<button class="bg-color text-white" style="border-radius: 50rpx;border: 0;"
			type="primary" @click="submit">完成</button>
		</view>
		
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" 
		:pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
		
	</view>
</template>

<script>
	const genderArray = ['男','女','保密']
	const relationArray = ['保密','未婚','已婚']
	import uniListItem from '@/components/uni-uni/uni-list-item/uni-list-item.vue';
	import uniList from '@/components/uni-uni/uni-list/uni-list.vue';
	import mpvueCityPicker from '@/components/uni-uni/mpvue-citypicker/mpvueCityPicker.vue';
	import { mapState } from 'vuex'
	
	export default {
		components: {
			uniList,
			uniListItem,
			mpvueCityPicker
		},
		data() {
			return {
				userpic:"/static/common/demo6.jpg",
				username:"",
				gender:2,
				relation:0,
				job:"保密",
				birthday:"",
				pickerText:"",
				themeColor:'#007AFF',
				cityPickerValueDefault:[0,0,1],
				
			}
		},
		onLoad() {
			let userinfo = this.user.userinfo
			if(userinfo){
				this.pickerText = userinfo.path
				this.username = this.user.username
				this.gender =  userinfo.sex
				this.relation = userinfo.qg
				this.job  = userinfo.job
				this.birthday  = userinfo.birthday
			}
		},
		computed: {
			...mapState({
				user:state=>state.user
			}),
			genderText() {
				return genderArray[this.gender] 
			},
			relationText() {
				return relationArray[this.relation]
			}
		},
		methods: {
			showCityPicker() {
				this.$refs.mpvueCityPicker.show()
			},
			// 三级联动提交事件
			onConfirm(e) {
				this.pickerText = e.label
			},
			// 修改生日
			onDateChange(e) {
				this.birthday = e.detail.value
			},
			// 修改头像
			changeUserpic() {
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					sourceType:["album","camera"],
					success: (res) => {
						this.userpic = res.tempFilePaths[0]
					}
				})
			},
			// 修改性别
			changeGender() {
				uni.showActionSheet({
					itemList: genderArray,
					success: (res) => {
						this.gender = res.tapIndex
					}
				})
			},
			// 修改情感状态
			changeRelation() {
				uni.showActionSheet({
					itemList:relationArray,
					success: (res) => {
						this.relation = res.tapIndex
					}
				})
			},
			// 修改职业
			changeJob() {
				let jobArray = ['IT','教师','学生']
				uni.showActionSheet({
					itemList:jobArray,
					success: (res) => {
						this.job = jobArray[res.tapIndex]
					}
				})
			},
			// 提交
			submit() {
				let obj = {
					name:this.username,
					sex:this.gender,
					qg:this.relation,
					job:this.job,
					birthday:this.birthday,
					path:this.pickerText
				}
				this.$H.post('/edituserinfo',obj,{
					token:true
				}).then(res=>{
					this.$store.commit('editUserInfo',{
						key:"username",
						value:this.username
					})
					this.$store.commit('editUserUserInfo',obj)
					uni.navigateBack({
						delta:1
					})
					uni.showToast({
						title:'修改资料成功',
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style>

</style>
