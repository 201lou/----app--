"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const uniListItem = () => "../../components/uni-uni/uni-list-item/uni-list-item.js";
const uniList = () => "../../components/uni-uni/uni-list/uni-list.js";
const otherLogin = () => "../../components/common/other-login.js";
const _sfc_main = {
  components: {
    uniListItem,
    uniList,
    otherLogin
  },
  data() {
    return {
      myData: [{
        name: "帖子",
        num: 0
      }, {
        name: "动态",
        num: 0
      }, {
        name: "关注",
        num: 0
      }, {
        name: "粉丝",
        num: 0
      }]
    };
  },
  onNavigationBarButtonTap() {
    common_vendor.index.navigateTo({
      url: "/pages/user-setting/user-setting"
    });
  },
  computed: {
    ...common_vendor.mapState({
      loginStatus: (state) => state.loginStatus,
      user: (state) => state.user
    }),
    // 用户头像
    avatar() {
      return this.user.userpic && this.user ? this.user.userpic : "/static/common/demo6.jpg";
    }
  },
  mounted() {
  },
  onShow() {
    if (this.loginStatus) {
      this.getCounts();
    }
  },
  watch: {
    loginStatus(newValue, oldValue) {
      if (newValue) {
        this.getCounts();
      } else {
        this.myData.forEach((item) => {
          item.num = 0;
        });
      }
    }
  },
  methods: {
    // 获取用户相关统计数据
    getCounts() {
      this.$H.get("/user/getcounts/" + this.user.id, {}, {
        token: true,
        notoast: true
      }).then((res) => {
        this.myData[0].num = res.data.data.post_count;
        this.myData[1].num = res.data.data.today_posts_count;
        this.myData[2].num = res.data.data.withfollow_count;
        this.myData[3].num = res.data.data.withfen_count;
      });
    },
    // 打开登录页
    openLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    openHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/history/history"
      });
    }
  }
};
if (!Array) {
  const _component_other_login = common_vendor.resolveComponent("other-login");
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_other_login + _component_uni_list_item + _component_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !_ctx.loginStatus
  }, !_ctx.loginStatus ? {
    b: common_vendor.o((...args) => $options.openLogin && $options.openLogin(...args))
  } : {
    c: $options.avatar,
    d: common_vendor.t(_ctx.user.username),
    e: common_vendor.t($data.myData[0].num),
    f: common_vendor.t($data.myData[1].num)
  }, {
    g: common_vendor.f($data.myData, (item, index, i0) => {
      return {
        a: common_vendor.t(item.num),
        b: common_vendor.t(item.name),
        c: index
      };
    }),
    h: common_assets._imports_0$1,
    i: common_vendor.o($options.openHistory),
    j: common_vendor.p({
      title: "浏览历史",
      showExtraIcon: true
    }),
    k: common_vendor.p({
      title: "社区认证",
      showExtraIcon: true
    }),
    l: common_vendor.p({
      title: "审核帖子",
      showExtraIcon: true
    }),
    m: common_vendor.p({
      title: "我的设置",
      showExtraIcon: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/owner/owner.js.map
