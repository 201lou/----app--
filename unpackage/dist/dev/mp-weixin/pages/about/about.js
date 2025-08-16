"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const uniListItem = () => "../../components/uni-uni/uni-list-item/uni-list-item.js";
const uniList = () => "../../components/uni-uni/uni-list/uni-list.js";
const _sfc_main = {
  components: {
    uniList,
    uniListItem
  },
  data() {
    return {
      version: ""
    };
  },
  onLoad() {
  },
  methods: {
    update() {
      this.$U.update(true);
    }
  }
};
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_uni_list_item + _component_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$2,
    b: common_vendor.t($data.version),
    c: common_vendor.p({
      title: "社区用户协议"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/about/about.js.map
