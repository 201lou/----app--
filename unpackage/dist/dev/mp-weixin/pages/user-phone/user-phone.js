"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      phone: "",
      code: "",
      codeTime: 0
    };
  },
  computed: {
    disabled() {
      return this.phone === "" || this.code === "";
    }
  },
  methods: {
    // 验证密码
    check() {
      var rule = /^1[3-9]\d{9}$/;
      if (!rule.test(this.phone)) {
        common_vendor.index.showToast({
          title: "手机号格式不正确",
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
      this.$H.post("/user/bindphone", {
        phone: this.phone,
        code: this.code
      }, {
        token: true
      }).then((res) => {
        this.$store.commit("ediUserInfo", {
          key: "phone",
          value: this.phone
        });
        common_vendor.index.navigateBack({
          delta: 1
        });
        common_vendor.index.showToast({
          title: "修改成功",
          icon: "none"
        });
      });
    },
    // 获取验证码
    getCode() {
      if (this.codeTime > 0) {
        return;
      }
      if (!this.check())
        return;
      this.codeTime = 60;
      let timer = setInterval(() => {
        if (this.codeTime >= 1) {
          this.codeTime--;
        } else {
          this.codeTime = 0;
          clearInterval(timer);
        }
      }, 1e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.phone,
    b: common_vendor.o(($event) => $data.phone = $event.detail.value),
    c: $data.code,
    d: common_vendor.o(($event) => $data.code = $event.detail.value),
    e: common_vendor.t($data.codeTime > 0 ? $data.codeTime + "s" : "获取验证码"),
    f: common_vendor.n($data.codeTime > 0 ? "bg-color-disabled" : "bg-color"),
    g: common_vendor.o((...args) => $options.getCode && $options.getCode(...args)),
    h: $options.disabled,
    i: common_vendor.n($options.disabled ? "bg-color-disabled" : ""),
    j: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-phone/user-phone.js.map
