"use strict";
const common_vendor = require("../../common/vendor.js");
const uniListItem = () => "../../components/uni-uni/uni-list-item/uni-list-item.js";
const uniList = () => "../../components/uni-uni/uni-list/uni-list.js";
const _sfc_main = {
  components: {
    uniList,
    uniListItem
  },
  data() {
    return {
      currentSize: 0
    };
  },
  onLoad() {
    this.getStorageInfo();
  },
  computed: {
    ...common_vendor.mapState({
      loginStatus: (state) => state.loginStatus
    })
  },
  methods: {
    getStorageInfo() {
      let res = common_vendor.index.getStorageInfoSync();
      this.currentSize = (res.currentSize / 1024).toFixed(2) + "KB";
    },
    open(path) {
      common_vendor.index.navigateTo({
        url: `/pages/${path}/${path}`
      });
    },
    // 清除缓存
    clear() {
      common_vendor.index.showModal({
        title: "提示",
        content: "是否要清除缓存",
        cancelText: "不清除",
        confirmText: "清除",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.clearStorageSync();
            this.getStorageInfo();
            common_vendor.index.showToast({
              title: "清除成功"
            });
          }
        }
      });
    },
    // 退出登录
    logout() {
      common_vendor.index.showModal({
        content: "是否要退出登录",
        success: (res) => {
          if (res.confirm) {
            this.$store.commit("logout");
            this.$store.dispatch("closeSocket");
            common_vendor.index.navigateBack({
              delta: 1
            });
            common_vendor.index.showToast({
              title: "退出登录成功",
              icon: "none"
            });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_uni_list_item + _component_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.loginStatus
  }, _ctx.loginStatus ? {
    b: common_vendor.o(($event) => $options.open("user-safe")),
    c: common_vendor.p({
      title: "账号与安全"
    }),
    d: common_vendor.o(($event) => $options.open("user-ownerinfo")),
    e: common_vendor.p({
      title: "资料编辑"
    })
  } : {}, {
    f: common_vendor.t($data.currentSize),
    g: common_vendor.o($options.clear),
    h: common_vendor.p({
      title: "清除缓存"
    }),
    i: _ctx.loginStatus
  }, _ctx.loginStatus ? {
    j: common_vendor.o(($event) => $options.open("user-feedback")),
    k: common_vendor.p({
      title: "意见反馈"
    })
  } : {}, {
    l: common_vendor.o(($event) => $options.open("about")),
    m: common_vendor.p({
      title: "关于社区"
    }),
    n: _ctx.loginStatus
  }, _ctx.loginStatus ? {
    o: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-setting/user-setting.js.map
