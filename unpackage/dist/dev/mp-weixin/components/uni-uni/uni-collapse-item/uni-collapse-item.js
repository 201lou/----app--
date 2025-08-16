"use strict";
const common_vendor = require("../../../common/vendor.js");
const uniIcons = () => "../uni-icons/uni-icons.js";
const _sfc_main = {
  name: "UniCollapseItem",
  components: {
    uniIcons
  },
  props: {
    title: {
      // 列表标题
      type: String,
      default: ""
    },
    name: {
      // 唯一标识符
      type: [Number, String],
      default: 0
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    },
    showAnimation: {
      // 是否显示动画
      type: Boolean,
      default: false
    },
    open: {
      // 是否展开
      type: Boolean,
      default: false
    },
    thumb: {
      // 缩略图
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  watch: {
    open(val) {
      this.isOpen = val;
    }
  },
  inject: ["collapse"],
  created() {
    this.isOpen = this.open;
    this.nameSync = this.name ? this.name : this.collapse.childrens.length;
    this.collapse.childrens.push(this);
    if (String(this.collapse.accordion) === "true") {
      if (this.isOpen) {
        let lastEl = this.collapse.childrens[this.collapse.childrens.length - 2];
        if (lastEl) {
          this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = false;
        }
      }
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      if (String(this.collapse.accordion) === "true") {
        this.collapse.childrens.forEach((vm) => {
          if (vm === this) {
            return;
          }
          vm.isOpen = false;
        });
      }
      this.isOpen = !this.isOpen;
      this.collapse.onChange && this.collapse.onChange();
      this.$forceUpdate();
    }
  }
};
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  _component_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.thumb
  }, $props.thumb ? {
    b: $props.thumb
  } : {}, {
    c: common_vendor.t($props.title),
    d: $data.isOpen ? 1 : "",
    e: $props.showAnimation === true ? 1 : "",
    f: common_vendor.p({
      color: "#bbb",
      size: "20",
      type: "arrowdown"
    }),
    g: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    h: $props.showAnimation === true ? 1 : "",
    i: $data.isOpen ? "translateY(0)" : "translateY(-50%)",
    j: $data.isOpen ? "translateY(0)" : "translateY(-50%)",
    k: !$data.isOpen ? 1 : "",
    l: $props.disabled ? 1 : "",
    m: !$props.disabled ? 1 : "",
    n: $data.isOpen ? 1 : "",
    o: !$data.isOpen ? 1 : ""
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e56371b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-collapse-item/uni-collapse-item.js.map
