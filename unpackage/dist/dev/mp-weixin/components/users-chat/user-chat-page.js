"use strict";
const common_time = require("../../common/time.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    item: Object,
    index: Number,
    pretime: [Number, String]
  },
  computed: {
    // 是否是登录用户本人
    isSelf() {
      let myId = this.$store.state.user.id;
      return myId === this.item.user_id;
    },
    // 转换时间
    shortTime() {
      return common_time.$T.getChatTime(this.item.create_time, this.pretime);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.shortTime
  }, $options.shortTime ? {
    b: common_vendor.t($options.shortTime)
  } : {}, {
    c: $props.item.headshot ? $props.item.headshot : "/static/common/demo6.jpg",
    d: common_vendor.t($props.item.content),
    e: common_vendor.s($options.isSelf ? "flex-direction: row-reverse" : "")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/users-chat/user-chat-page.js.map
