"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      providerList: []
    };
  },
  mounted() {
    common_vendor.index.getProvider({
      service: "oauth",
      success: (result) => {
        this.providerList = result.provider.map((value) => {
          let providerName = "";
          let icon = "";
          let bgColor = "";
          switch (value) {
            case "weixin":
              providerName = "微信登录";
              icon = "icon-weixin";
              bgColor = "bg-success";
              break;
            case "qq":
              providerName = "QQ登录";
              icon = "icon-qq";
              bgColor = "bg-primary";
              break;
            case "sinaweibo":
              providerName = "新浪微博登录";
              icon = "icon-weibo";
              bgColor = "bg-warning";
              break;
          }
          return {
            name: providerName,
            icon,
            bgColor,
            id: value
          };
        }).filter((item) => item.name);
      },
      fail: (error) => {
        common_vendor.index.__f__("log", "at components/common/other-login.vue:73", "获取登录通道失败", error);
      }
    });
  },
  methods: {
    // 登录
    login(item) {
      common_vendor.index.login({
        provider: item.id,
        success: (res) => {
          common_vendor.index.getUserInfo({
            provider: item.id,
            success: (infoRes) => {
              let obj = {
                provider: item.id,
                openid: infoRes.userInfo.openId,
                expires_in: 0,
                nickName: infoRes.userInfo.nickName,
                avatarUrl: infoRes.userInfo.avatarUrl
              };
              this.loginEvent(obj);
            }
          });
        },
        fail: () => {
          common_vendor.index.showToast({
            title: "登录失败",
            icon: "none"
          });
        }
      });
    },
    // 登录事件
    loginEvent(data) {
      this.$H.post("/user/otherlogin", data).then((res) => {
        this.$store.commit("login", this.$U.formatUserinfo(res.data.data));
        if (this.back) {
          common_vendor.index.navigateBack({
            delta: 1
          });
        }
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "none"
        });
      });
    },
    mpGetUserInfo(result) {
      common_vendor.index.showLoading({ title: "登录中...", mask: true });
      if (result.detail.errMsg !== "getUserInfo:ok") {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          title: "获取用户信息失败",
          content: "错误原因" + result.detail.errMsg,
          showCancel: false
        });
        return;
      }
      let userinfo = result.detail.userInfo;
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          this.MpLogin({
            url: "/wxlogin",
            code: res.code,
            nickName: userinfo.nickName,
            avatarUrl: userinfo.avatarUrl
          });
        },
        complete: () => {
          common_vendor.index.hideLoading();
        }
      });
    },
    MpLogin(options) {
      this.$H.post(options.url, {
        code: options.code,
        nickName: options.nickName,
        avatarUrl: options.avatarUrl
      }).then((data) => {
        this.$store.commit("login", this.$U.formatUserinfo(data));
        if (this.back) {
          common_vendor.index.navigateBack({
            delta: 1
          });
        }
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "none"
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.mpGetUserInfo && $options.mpGetUserInfo(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/other-login.js.map
