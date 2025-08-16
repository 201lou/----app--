"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["info"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.info.cover,
    b: $props.info.cover,
    c: common_vendor.t($props.info.title),
    d: common_vendor.t($props.info.news_count),
    e: common_vendor.t($props.info.today_count),
    f: common_vendor.t($props.info.desc)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/topic-detail/topic-info.js.map
