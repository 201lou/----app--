"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    focus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    submit() {
      if (this.content === "") {
        return common_vendor.index.showToast({
          title: "消息不能为空",
          icon: "none"
        });
      }
      this.$emit("submit", this.content);
      this.content = "";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.focus,
    b: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    c: common_vendor.o(($event) => _ctx.$emit("blur")),
    d: $data.content,
    e: common_vendor.o(($event) => $data.content = $event.detail.value),
    f: common_vendor.o(($event) => $options.submit())
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/bottom-input.js.map
