"use strict";
const common_vendor = require("../../common/vendor.js");
const uniBadge = () => "../uni-uni/uni-badge/uni-badge.js";
const _sfc_main = {
  components: {
    uniBadge
  },
  props: {
    item: Object,
    indexe: Number
  }
};
if (!Array) {
  const _component_uni_badge = common_vendor.resolveComponent("uni-badge");
  _component_uni_badge();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.item.headshot,
    b: common_vendor.t($props.item.username),
    c: $props.item.gender > 0
  }, $props.item.gender > 0 ? {
    d: common_vendor.n($props.item.gender === 1 ? "icon-nv" : "icon-nan")
  } : {}, {
    e: common_vendor.p({
      text: $props.item.age,
      type: $props.item.gender === 1 ? "error" : "primary",
      size: "small"
    }),
    f: common_vendor.n($props.item.isFollow ? "text-light-muted" : "color-global")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/user-list/user-list.js.map
