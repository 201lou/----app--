"use strict";
const common_vendor = require("../../../common/vendor.js");
const uniIcons = () => "../uni-icons/uni-icons.js";
const uniBadge = () => "../uni-badge/uni-badge.js";
const _sfc_main = {
  name: "UniListItem",
  components: {
    uniIcons,
    uniBadge
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    // 列表标题
    note: {
      type: String,
      default: ""
    },
    // 列表描述
    disabled: {
      // 是否禁用
      type: [Boolean, String],
      default: false
    },
    showArrow: {
      // 是否显示箭头
      type: [Boolean, String],
      default: true
    },
    showBadge: {
      // 是否显示数字角标
      type: [Boolean, String],
      default: false
    },
    showSwitch: {
      // 是否显示Switch
      type: [Boolean, String],
      default: false
    },
    switchChecked: {
      // Switch是否被选中
      type: [Boolean, String],
      default: false
    },
    badgeText: {
      // badge内容
      type: String,
      default: ""
    },
    badgeType: {
      // badge类型
      type: String,
      default: "success"
    },
    thumb: {
      // 缩略图
      type: String,
      default: ""
    },
    showExtraIcon: {
      // 是否显示扩展图标
      type: [Boolean, String],
      default: false
    },
    extraIcon: {
      type: Object,
      default() {
        return {
          type: "contact",
          color: "#000000",
          size: 20
        };
      }
    }
  },
  inject: ["list"],
  data() {
    return {
      isFirstChild: false
    };
  },
  mounted() {
    if (!this.list.firstChildAppend) {
      this.list.firstChildAppend = true;
      this.isFirstChild = true;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
    onSwitchChange(e) {
      this.$emit("switchChange", e.detail);
    }
  }
};
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  const _component_uni_badge = common_vendor.resolveComponent("uni-badge");
  (_component_uni_icons + _component_uni_badge)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.thumb
  }, $props.thumb ? {
    b: $props.thumb
  } : $props.showExtraIcon ? {
    d: common_vendor.p({
      color: $props.extraIcon.color,
      size: $props.extraIcon.size,
      type: $props.extraIcon.type
    })
  } : {}, {
    c: $props.showExtraIcon,
    e: common_vendor.t($props.title),
    f: $props.note
  }, $props.note ? {
    g: common_vendor.t($props.note)
  } : {}, {
    h: $props.showBadge || $props.showArrow || $props.showSwitch
  }, $props.showBadge || $props.showArrow || $props.showSwitch ? common_vendor.e({
    i: $props.showBadge
  }, $props.showBadge ? {
    j: common_vendor.p({
      type: $props.badgeType,
      text: $props.badgeText
    })
  } : {}, {
    k: $props.showSwitch
  }, $props.showSwitch ? {
    l: $props.disabled,
    m: $props.switchChecked,
    n: common_vendor.o((...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
  } : {}, {
    o: $props.showArrow
  }, $props.showArrow ? {
    p: common_vendor.p({
      size: 20,
      color: "#bbb",
      type: "arrowright"
    })
  } : {}) : {}, {
    q: $data.isFirstChild ? 1 : "",
    r: common_vendor.n($props.disabled ? "uni-list-item--disabled" : ""),
    s: $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
    t: common_vendor.o((...args) => $options.onClick && $options.onClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-83bcf706"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-list-item/uni-list-item.js.map
