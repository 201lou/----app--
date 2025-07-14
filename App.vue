<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 官方css库*/
	@import "./common/uni.css";
	/* 自定义图标库*/
	@import "./common/icon.css";
	/* 动画库 */
	@import "./common/animate.css";
	/* 自定义样式库 */
	@import "./common/style_owner.css";
	/* 本项目样式库 */
	@import "./common/global.css";
</style>
