"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    item: Object,
    index: Number,
    choose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openDetail() {
      if (this.choose) {
        common_vendor.index.$emit("chooseTopic", {
          id: this.item.id,
          title: this.item.title
        });
        return common_vendor.index.navigateBack({
          delta: 1
        });
      }
      common_vendor.index.navigateTo({
        url: "/pages/topic-detail/topic-detail?detail=" + JSON.stringify(this.item)
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.item.cover,
    b: common_vendor.t($props.item.title),
    c: common_vendor.o((...args) => $options.openDetail && $options.openDetail(...args)),
    d: common_vendor.t($props.item.desc),
    e: common_vendor.t($props.item.news_count),
    f: common_vendor.t($props.item.today_count)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/find/topic-list.js.map
