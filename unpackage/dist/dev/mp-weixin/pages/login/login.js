"use strict";
const common_vendor = require("../../common/vendor.js");
const otherLogin = () => "../../components/common/other-login.js";
const uniStatusBar = () => "../../components/uni-uni/uni-status-bar/uni-status-bar.js";
const _sfc_main = {
  components: {
    uniStatusBar,
    otherLogin
  },
  data() {
    return {
      status: false,
      username: "",
      password: "",
      phone: "",
      pincode: "",
      codeTime: 0
    };
  },
  onLoad() {
  },
  computed: {
    disabled() {
      if (this.status) {
        return this.phone === "" || this.pincode === "";
      } else {
        return this.username === "" || this.password === "";
      }
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    // 初始化表单
    initForm() {
      this.username = "";
      this.password = "";
      this.phone = "";
      this.pincode = "";
    },
    // 切换登录方式
    changeStatus() {
      this.initForm();
      this.status = !this.status;
    },
    // 获取验证码
    getCode() {
      if (this.codeTime > 0) {
        return;
      }
      if (!this.validata())
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
    },
    // 表单验证
    validata() {
      var mpattern = /^1[3-9]\d{9}$/;
      if (!mpattern.test(this.phone)) {
        common_vendor.index.showToast({
          title: "手机号格式不正确",
          icon: "none"
        });
        return false;
      }
      return true;
    },
    // 提交
    submit() {
      if (this.staus) {
        if (!this.validata())
          return;
      }
      this.$H.post("/user/login", {
        username: this.username,
        password: this.password
      }).then((res) => {
        this.$store.commit("login", res.data.data);
        this.$store.dispatch("openSocket");
        common_vendor.index.navigateBack({
          delta: 1
        });
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "none"
        });
      });
    }
  }
};
if (!Array) {
  const _component_uni_status_bar = common_vendor.resolveComponent("uni-status-bar");
  const _component_other_login = common_vendor.resolveComponent("other-login");
  (_component_uni_status_bar + _component_other_login)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.back && $options.back(...args)),
    b: common_vendor.t($data.status ? "手机验证码登录" : "账号密码登录"),
    c: !$data.status
  }, !$data.status ? {
    d: $data.username,
    e: common_vendor.o(($event) => $data.username = $event.detail.value),
    f: $data.password,
    g: common_vendor.o(($event) => $data.password = $event.detail.value)
  } : {
    h: $data.phone,
    i: common_vendor.o(($event) => $data.phone = $event.detail.value),
    j: $data.pincode,
    k: common_vendor.o(($event) => $data.pincode = $event.detail.value),
    l: common_vendor.t($data.codeTime > 0 ? $data.codeTime + "s" : "获取验证码"),
    m: common_vendor.n($data.codeTime > 0 ? "bg-color-disabled" : "bg-color"),
    n: common_vendor.o((...args) => $options.getCode && $options.getCode(...args))
  }, {
    o: $options.disabled,
    p: common_vendor.n($options.disabled ? "bg-color-disabled" : "bg-color"),
    q: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    r: common_vendor.t($data.status ? "账号密码登录" : "验证码登录"),
    s: common_vendor.o((...args) => $options.changeStatus && $options.changeStatus(...args)),
    t: common_vendor.p({
      back: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
