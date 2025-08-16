"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "UniList",
  "mp-weixin": {
    options: {
      multipleSlots: false
    }
  },
  props: {
    enableBackToTop: {
      type: [Boolean, String],
      default: false
    },
    scrollY: {
      type: [Boolean, String],
      default: false
    }
  },
  provide() {
    return {
      list: this
    };
  },
  created() {
    this.firstChildAppend = false;
  },
  methods: {
    loadMore(e) {
      this.$emit("scrolltolower");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3751c120"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-list/uni-list.js.map
