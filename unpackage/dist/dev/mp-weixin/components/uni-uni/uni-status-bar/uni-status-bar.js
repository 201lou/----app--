"use strict";
const common_vendor = require("../../../common/vendor.js");
var statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight + "px";
const _sfc_main = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-25810fe1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-status-bar/uni-status-bar.js.map
