"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const common_config = require("./common/config.js");
const common_utill = require("./common/utill.js");
const common_request = require("./common/request.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/msg/msg.js";
  "./pages/owner/owner.js";
  "./pages/find/find.js";
  "./pages/search/search.js";
  "./pages/add-input/add-input.js";
  "./pages/topic-nav/topic-nav.js";
  "./pages/topic-detail/topic-detail.js";
  "./pages/friend-list/friend-list.js";
  "./pages/users-chat/users-chat.js";
  "./pages/post-detail/post-detail.js";
  "./pages/user-setting/user-setting.js";
  "./pages/user-password/user-password.js";
  "./pages/user-email/user-email.js";
  "./pages/user-ownerinfo/user-ownerinfo.js";
  "./pages/user-feedback/user-feedback.js";
  "./pages/about/about.js";
  "./pages/login/login.js";
  "./pages/user-space/user-space.js";
  "./pages/user-safe/user-safe.js";
  "./pages/user-phone/user-phone.js";
  "./pages/history/history.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
    this.$U.update();
    this.$U.onNetwork();
    this.$store.dispatch("initUser");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:14", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:17", "App Hide");
  }
};
const noThing = () => "./components/common/no-thing.js";
const checkAuth = (callback, checkPhone = true) => {
  if (!store_index.store.state.loginStatus) {
    common_vendor.index.showToast({
      title: "请先登录",
      icon: "none"
    });
    return common_vendor.index.navigateTo({
      url: "/pages/login/login"
    });
  }
  if (checkPhone && !store_index.store.state.user.phone) {
    common_vendor.index.showToast({
      title: "请先登录",
      icon: "none"
    });
    return common_vendor.index.navigateTo({
      url: "/pages/user-phone/user-phone"
    });
  }
  callback();
};
const navigateTo = (options, checkPhone = true) => {
  if (!store_index.store.state.loginStatus) {
    common_vendor.index.showToast({
      title: "请先登录",
      icon: "none"
    });
    return common_vendor.index.navigateTo({
      url: "/pages/login/login"
    });
  }
  if (checkPhone && !store_index.store.state.user.phone) {
    common_vendor.index.showToast({
      title: "请先登录",
      icon: "none"
    });
    return common_vendor.index.navigateTo({
      url: "/pages/user-phone/user-phone"
    });
  }
  common_vendor.index.navigateTo(options);
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.component("no-thing", noThing);
  app.config.globalProperties.$C = common_config.$C;
  app.config.globalProperties.$U = common_utill.$U;
  app.config.globalProperties.$H = common_request.$H;
  app.config.globalProperties.$store = store_index.store;
  app.config.globalProperties.checkAuth = checkAuth;
  app.config.globalProperties.navigateTo = navigateTo;
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
