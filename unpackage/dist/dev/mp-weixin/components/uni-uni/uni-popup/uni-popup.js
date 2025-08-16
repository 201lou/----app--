"use strict";
const common_vendor = require("../../../common/vendor.js");
const uniTransition = () => "../uni-transition/uni-transition.js";
const _sfc_main = {
  name: "UniPopup",
  components: {
    uniTransition
  },
  props: {
    // 开启动画
    animation: {
      type: Boolean,
      default: true
    },
    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
    type: {
      type: String,
      default: "center"
    },
    // maskClick
    maskClick: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ani: [],
      showPopup: false,
      showTrans: false,
      maskClass: {
        "position": "fixed",
        "bottom": 0,
        "top": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "rgba(0,0,0,0.4)"
      },
      transClass: {
        "position": "fixed",
        "left": 0,
        "right": 0
      }
    };
  },
  watch: {
    type: {
      handler: function(newVal) {
        switch (this.type) {
          case "top":
            this.ani = ["slide-top"];
            this.transClass = {
              "position": "fixed",
              "left": 0,
              "right": 0
            };
            break;
          case "bottom":
            this.ani = ["slide-bottom"];
            this.transClass = {
              "position": "fixed",
              "left": 0,
              "right": 0,
              "bottom": 0
            };
            break;
          case "center":
            this.ani = ["zoom-out", "fade"];
            this.transClass = {
              "position": "fixed",
              "display": "flex",
              "flexDirection": "column",
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0,
              "justifyContent": "center",
              "alignItems": "center"
            };
            break;
        }
      },
      immediate: true
    }
  },
  created() {
  },
  methods: {
    clear(e) {
      e.stopPropagation();
    },
    open() {
      this.showPopup = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.showTrans = true;
        }, 50);
      });
      this.$emit("change", {
        show: true
      });
    },
    close(type) {
      this.showTrans = false;
      this.$nextTick(() => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.$emit("change", {
            show: false
          });
          this.showPopup = false;
        }, 300);
      });
    },
    onTap() {
      if (!this.maskClick)
        return;
      this.close();
    }
  }
};
if (!Array) {
  const _component_uni_transition = common_vendor.resolveComponent("uni-transition");
  _component_uni_transition();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showPopup
  }, $data.showPopup ? {
    b: common_vendor.o($options.onTap),
    c: common_vendor.p({
      ["mode-class"]: ["fade"],
      styles: $data.maskClass,
      show: $data.showTrans
    }),
    d: common_vendor.o((...args) => $options.clear && $options.clear(...args)),
    e: common_vendor.o($options.onTap),
    f: common_vendor.p({
      ["mode-class"]: $data.ani,
      styles: $data.transClass,
      show: $data.showTrans
    }),
    g: common_vendor.o((...args) => $options.clear && $options.clear(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fda68b36"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/uni-popup/uni-popup.js.map
