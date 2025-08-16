"use strict";
const common_vendor = require("../../common/vendor.js");
const uniCollapse = () => "../../components/uni-uni/uni-collapse/uni-collapse.js";
const uniCollapseItem = () => "../../components/uni-uni/uni-collapse-item/uni-collapse-item.js";
const _sfc_main = {
  components: {
    uniCollapse,
    uniCollapseItem
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_uni_collapse_item = common_vendor.resolveComponent("uni-collapse-item");
  const _component_uni_collapse = common_vendor.resolveComponent("uni-collapse");
  (_component_uni_collapse_item + _component_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "标题文字",
      showAnimation: true
    }),
    b: common_vendor.p({
      title: "标题文字",
      showAnimation: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-feedback/user-feedback.js.map
