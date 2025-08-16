"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      email: ""
    };
  },
  computed: {
    ...common_vendor.mapState({
      user: (state) => state.user
    }),
    disabled() {
      return this.email === "";
    }
  },
  onLoad() {
    if (this.user.email) {
      this.email = this.user.email;
    }
  },
  methods: {
    // 验证密码
    check() {
      let rule = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!rule.test(this.email)) {
        common_vendor.index.showToast({
          title: "邮箱格式不正确",
          icon: "none"
        });
        return false;
      }
      return true;
    },
    submit() {
      if (!this.check()) {
        return;
      }
      this.$H.post("/user/bindemail", {
        email: this.email
      }, {
        token: true
      }).then((res) => {
        this.$store.commit("editUserInfo", {
          key: "email",
          value: this.email
        });
        common_vendor.index.navigateBack({
          delta: 1
        });
        common_vendor.index.showToast({
          title: "修改邮箱成功",
          icon: "none"
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: this.user.email,
    b: $data.email,
    c: common_vendor.o(($event) => $data.email = $event.detail.value),
    d: $options.disabled || this.user.email,
    e: common_vendor.n($options.disabled ? "bg-color-disabled" : ""),
    f: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-email/user-email.js.map
