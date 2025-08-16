"use strict";
const components_uniUni_uniIcons_icons = require("./icons.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "UniIcons",
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 16
    }
  },
  data() {
    return {
      icons: components_uniUni_uniIcons_icons.icons
    };
  },
  methods: {
    _onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.icons[$props.type]),
    b: $props.color,
    c: $props.size + "px",
    d: common_vendor.o((...args) => $options._onClick && $options._onClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d3aa67ff"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-icons/uni-icons.js.map
