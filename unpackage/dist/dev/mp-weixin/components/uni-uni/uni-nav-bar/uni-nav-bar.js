"use strict";
const common_vendor = require("../../../common/vendor.js");
const uniStatusBar = () => "../uni-status-bar/uni-status-bar.js";
const uniIcons = () => "../uni-icons/uni-icons.js";
const _sfc_main = {
  name: "UniNavBar",
  components: {
    uniStatusBar,
    uniIcons
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    fixed: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: "#000000"
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    statusBar: {
      type: [Boolean, String],
      default: false
    },
    shadow: {
      type: [String, Boolean],
      default: true
    },
    border: {
      type: [String, Boolean],
      default: true
    }
  },
  mounted() {
    if (common_vendor.index.report && this.title !== "") {
      common_vendor.index.report("title", this.title);
    }
  },
  methods: {
    onClickLeft() {
      this.$emit("clickLeft");
    },
    onClickRight() {
      this.$emit("clickRight");
    }
  }
};
if (!Array) {
  const _component_uni_status_bar = common_vendor.resolveComponent("uni-status-bar");
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  (_component_uni_status_bar + _component_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.statusBar
  }, $props.statusBar ? {} : {}, {
    b: $props.leftIcon.length
  }, $props.leftIcon.length ? {
    c: common_vendor.p({
      color: $props.color,
      type: $props.leftIcon,
      size: "24"
    })
  } : {}, {
    d: $props.leftText.length
  }, $props.leftText.length ? {
    e: common_vendor.t($props.leftText),
    f: $props.color,
    g: !$props.leftIcon.length ? 1 : ""
  } : {}, {
    h: common_vendor.o((...args) => $options.onClickLeft && $options.onClickLeft(...args)),
    i: $props.title.length
  }, $props.title.length ? {
    j: common_vendor.t($props.title),
    k: $props.color
  } : {}, {
    l: $props.rightIcon.length
  }, $props.rightIcon.length ? {
    m: common_vendor.p({
      color: $props.color,
      type: $props.rightIcon,
      size: "24"
    })
  } : {}, {
    n: $props.rightText.length && !$props.rightIcon.length
  }, $props.rightText.length && !$props.rightIcon.length ? {
    o: common_vendor.t($props.rightText)
  } : {}, {
    p: common_vendor.n($props.title.length ? "uni-navbar__header-btns-right" : ""),
    q: common_vendor.o((...args) => $options.onClickRight && $options.onClickRight(...args)),
    r: $props.color,
    s: $props.backgroundColor,
    t: $props.fixed ? 1 : "",
    v: $props.border ? 1 : "",
    w: $props.border ? 1 : "",
    x: $props.backgroundColor,
    y: $props.fixed
  }, $props.fixed ? common_vendor.e({
    z: $props.statusBar
  }, $props.statusBar ? {} : {}) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-49ede2a5"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-nav-bar/uni-nav-bar.js.map
