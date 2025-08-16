"use strict";
const common_vendor = require("../../common/vendor.js");
const common_time = require("../../common/time.js");
const uniBadge = () => "../uni-uni/uni-badge/uni-badge.js";
const _sfc_main = {
  components: {
    uniBadge
  },
  props: {
    item: Object,
    index: Number
  },
  methods: {
    formaTime(value) {
      return common_time.$T.gettime(value);
    },
    openChat() {
      let user = {
        user_id: this.item.user_id,
        username: this.item.username,
        userpic: this.item.avatar
      };
      common_vendor.index.navigateTo({
        url: "/pages/users-chat/users-chat?user=" + JSON.stringify(user),
        success: () => {
          this.$store.dispatch("readChatMessage", this.item);
        }
      });
    }
  }
};
if (!Array) {
  const _component_uni_badge = common_vendor.resolveComponent("uni-badge");
  _component_uni_badge();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.item.headshot ? $props.item.headshot : "/static/common/demo6.jpg",
    b: common_vendor.t($props.item.username),
    c: common_vendor.t($options.formaTime($props.item.update_time)),
    d: common_vendor.t($props.item.data),
    e: common_vendor.p({
      text: $props.item.notread,
      type: "error"
    }),
    f: common_vendor.o((...args) => $options.openChat && $options.openChat(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/msg/msg-list.js.map
