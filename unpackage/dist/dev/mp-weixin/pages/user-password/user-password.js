"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      oldpassword: "",
      newpassword: "",
      renewpassword: ""
    };
  },
  computed: {
    ...common_vendor.mapState({
      user: (state) => state.user
    }),
    disabled() {
      if (this.user.password) {
        return this.oldpassword == "" || this.newpassword == "" || this.renewpassword == "";
      }
      return this.newpassword == "" || this.renewpassword == "";
    }
  },
  methods: {
    // 验证密码
    check() {
      if (this.newpassword !== this.renewpassword) {
        common_vendor.index.showToast({
          title: "两次密码不一样",
          icon: "none"
        });
        return;
      }
      return true;
    },
    submit() {
      if (!this.check()) {
        return;
      }
      this.$H.post("/repassword", {
        oldpassword: this.oldpassword,
        newpassword: this.newpassword,
        renewpassword: this.renewpassword
      }, {
        token: true
      }).then((res) => {
        this.$store.commit("editUserInfo", {
          key: "password",
          value: true
        });
        common_vendor.index.navigateBack({
          delta: 1
        });
        common_vendor.index.showToast({
          title: "修改密码成功",
          icon: "none"
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.user.password
  }, _ctx.user.password ? {
    b: $data.oldpassword,
    c: common_vendor.o(($event) => $data.oldpassword = $event.detail.value)
  } : {}, {
    d: $data.newpassword,
    e: common_vendor.o(($event) => $data.newpassword = $event.detail.value),
    f: $data.renewpassword,
    g: common_vendor.o(($event) => $data.renewpassword = $event.detail.value),
    h: $options.disabled,
    i: common_vendor.n($options.disabled ? "bg-color-disabled" : ""),
    j: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-password/user-password.js.map
