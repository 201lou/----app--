"use strict";
const common_vendor = require("../../common/vendor.js");
const uniListItem = () => "../../components/uni-uni/uni-list-item/uni-list-item.js";
const uniList = () => "../../components/uni-uni/uni-list/uni-list.js";
const _sfc_main = {
  components: {
    uniList,
    uniListItem
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...common_vendor.mapState({
      user: (state) => state.user
    })
  },
  onShow() {
    this.__init();
  },
  methods: {
    __init() {
      let list = [{
        name: "手机号",
        data: this.user.phone ? this.user.phone : "未绑定",
        type: "navigateTo",
        url: "/pages/user-phone/user-phone"
      }, {
        name: "登录密码",
        data: this.user.password ? "修改密码" : "未设置",
        type: "navigateTo",
        url: "/pages/user-password/user-password"
      }, {
        name: "绑定邮箱",
        data: this.user.email ? this.user.email : "未绑定",
        type: "navigateTo",
        url: "/pages/user-email/user-email"
      }];
      this.list = [...list];
      this.$H.get("/user/getuserbind", {}, {
        token: true
      }).then((res) => {
        this.$store.commit("editUserInfo", {
          key: "user_bind",
          value: res
        });
        let other = [{
          name: "微信绑定",
          data: this.user.user_bind.data.data.weixin ? this.user.user_bind.data.data.weixin.nickname : "未绑定",
          type: "bind",
          provider: "weixin"
        }, {
          name: "微博绑定",
          data: this.user.user_bind.data.data.sinaweibo ? this.user.user_bind.data.data.sinaweibo.nickname : "未绑定",
          type: "bind",
          provider: "sinaweibo"
        }, {
          name: "qq绑定",
          data: this.user.user_bind.data.data.qq ? this.user.user_bind.data.data.qq.nickname : "未绑定",
          type: "bind",
          provider: "qq"
        }];
        this.list = [...this.list, ...other];
      });
    },
    handleEvent(item) {
      if (item.type === "")
        return;
      switch (item.type) {
        case "navigateTo":
          common_vendor.index.navigateTo({
            url: item.url
          });
          break;
        case "bind":
          if (item.data !== "未绑定") {
            return common_vendor.index.showToast({
              title: "你已经绑定过了",
              icon: "none"
            });
          }
          this.bind(item.provider);
          break;
      }
    },
    // 绑定第三方登录
    bind(provider) {
      common_vendor.index.login({
        provider,
        success: (r) => {
          common_vendor.index.getUserInfo({
            provider,
            success: (res) => {
              let obj = {
                provider,
                openid: res.userInfo.openId,
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl
              };
              this.$H.post("user/bindother", obj, {
                token: true
              }).then((res2) => {
                this.__init();
                common_vendor.index.showToast({
                  title: "绑定成功",
                  icon: "none"
                });
              });
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_uni_list_item + _component_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.data),
        b: index,
        c: common_vendor.o(($event) => $options.handleEvent(item), index),
        d: "186c7b2a-1-" + i0 + ",186c7b2a-0",
        e: common_vendor.p({
          title: item.name
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-safe/user-safe.js.map
