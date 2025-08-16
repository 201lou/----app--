"use strict";
const common_vendor = require("../../common/vendor.js");
const msgList = () => "../../components/msg/msg-list.js";
const noThing = () => "../../components/common/no-thing.js";
const uniPopup = () => "../../components/uni-uni/uni-popup/uni-popup.js";
const _sfc_main = {
  components: {
    msgList,
    noThing,
    uniPopup
  },
  data() {
    return {};
  },
  // 页面加载
  onLoad() {
  },
  computed: {
    ...common_vendor.mapState({
      list: (state) => state.chatList
    })
  },
  // 监听原生导航栏按钮事件
  onNavigationBarButtonTap(e) {
    switch (e.index) {
      case 0:
        common_vendor.index.navigateTo({
          url: "/pages/friend-list/friend-list"
        });
        this.$refs.popup.close();
        break;
      case 1:
        this.$refs.popup.open();
        break;
    }
  },
  // 监听下拉刷新
  onPullDownRefresh() {
    this.refresh();
  },
  methods: {
    clickLeft() {
      common_vendor.index.navigateTo({
        url: "/pages/friend-list/friend-list"
      });
      this.$refs.popup && this.$refs.popup.close();
    },
    clickRight() {
      this.$refs.popup && this.$refs.popup.open();
    },
    //下拉刷新
    refresh() {
      setTimeout(() => {
        this.list = demo;
        common_vendor.index.stopPullDownRefresh();
      }, 2e3);
    },
    // 弹出层选项点击事件
    popupEvent(e) {
      switch (e) {
        case "friend":
          common_vendor.index.navigateTo({
            url: "/pages/search/search?type=user"
          });
          break;
        case "clear":
          common_vendor.index.__f__("log", "at pages/msg/msg.vue:118", "clear");
          break;
      }
      this.$refs.popup.close();
    }
  }
};
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  const _component_uni_nav_bar = common_vendor.resolveComponent("uni-nav-bar");
  const _component_msg_list = common_vendor.resolveComponent("msg-list");
  const _component_no_thing = common_vendor.resolveComponent("no-thing");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_component_template + _component_uni_nav_bar + _component_msg_list + _component_no_thing + _component_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.clickLeft),
    b: common_vendor.o($options.clickRight),
    c: common_vendor.p({
      shadow: false,
      border: false,
      title: "消息"
    }),
    d: _ctx.list.length > 0
  }, _ctx.list.length > 0 ? {
    e: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: "fa475862-1-" + i0,
        b: common_vendor.p({
          item,
          index
        }),
        c: index
      };
    })
  } : {}, {
    f: common_vendor.o(($event) => $options.popupEvent("friend")),
    g: common_vendor.o(($event) => $options.popupEvent("clear")),
    h: common_vendor.sr("popup", "fa475862-3"),
    i: common_vendor.p({
      type: "top"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/msg/msg.js.map
