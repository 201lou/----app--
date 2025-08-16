"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["hotClick"],
  methods: {
    openMore() {
      common_vendor.index.navigateTo({
        url: "/pages/topic-nav/topic-nav"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.openMore && $options.openMore(...args)),
    b: common_vendor.f($props.hotClick, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o((...args) => $options.openMore && $options.openMore(...args), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/find/hot-click.js.map
