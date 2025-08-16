"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "UniBadge",
  props: {
    type: {
      type: String,
      // success绿色 primary蓝色 error红色 warning黄色
      default: "default"
    },
    inverted: {
      type: Boolean,
      default: false
    },
    text: {
      type: [String, Number],
      default: ""
    },
    size: {
      // small.normal
      type: String,
      default: "normal"
    }
  },
  data() {
    return {
      // width: `display: inline-block;width: ${String(this.text).length * 15 + 25}rpx`
    };
  },
  computed: {
    widthStyle() {
      const baseWidth = 25;
      const charWidth = 15;
      const extraSpace = 15;
      return `display: inline-block; width: ${String(this.text).length * charWidth + baseWidth + extraSpace}rpx`;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.text
  }, $props.text ? {
    b: common_vendor.t($props.text),
    c: common_vendor.n($props.inverted ? "uni-badge--" + $props.type + " uni-badge--" + $props.size + " uni-badge--" + $props.type + "-inverted" : "uni-badge--" + $props.type + " uni-badge--" + $props.size),
    d: common_vendor.s($options.widthStyle),
    e: common_vendor.o(($event) => $options.onClick())
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e50d0de7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-badge/uni-badge.js.map
