"use strict";
const common_vendor = require("../../common/vendor.js");
const userChatPage = () => "../../components/users-chat/user-chat-page.js";
const bottomInput = () => "../../components/common/bottom-input.js";
const _sfc_main = {
  components: {
    userChatPage,
    bottomInput
  },
  data() {
    return {
      scrollInto: "",
      content2: "",
      scrollH: 500,
      list: []
    };
  },
  // 页面加载完成的时候滚动到底部
  onReady() {
    this.toBottom();
  },
  onLoad(e) {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.scrollH = res.windowHeight - common_vendor.index.upx2px(101);
      }
    });
    if (!e.user) {
      common_vendor.index.navigateBack({
        delta: 1
      });
      return common_vendor.index.showToast({
        title: "聊天对象不存在",
        icon: "none"
      });
    }
    let ToUser = JSON.parse(e.user);
    this.$store.commit("createToUser", ToUser);
    this.$store.dispatch("getChatDetailToUser").then((list) => {
      this.list = list;
    });
    common_vendor.index.$on("UserChat", (res) => {
      common_vendor.index.__f__("log", "at pages/users-chat/users-chat.vue:70", "[user-chat]chatmsg", res);
      if (res.form_id === ToUser.user_id) {
        this.randerPage({
          data: res,
          send: false
        });
      }
    });
  },
  // 页面销毁之前
  beforeDestroy() {
    this.$store.commit("closeToUser");
    common_vendor.index.$off("UserChat", () => {
    });
  },
  methods: {
    // 渲染到页面
    randerPage(e) {
      this.$store.dispatch("formatChatDetailObject", e).then((msg) => {
        this.list.push(msg);
        this.toBottom();
      });
    },
    // 发送
    async submit(data) {
      let result = await this.$store.dispatch("sendChatMessage", {
        data,
        type: "text"
      });
      this.$H.post("/chat/send", result, {
        token: true
      }).then((res) => {
        this.randerPage({
          data: result,
          send: true
        });
      });
    },
    // 滚动到底部
    toBottom() {
      let lastIndex = this.list.length - 1;
      if (lastIndex < 0)
        return;
      this.scrollInto = "chat" + lastIndex;
    }
  }
};
if (!Array) {
  const _component_user_chat_page = common_vendor.resolveComponent("user-chat-page");
  const _component_bottom_input = common_vendor.resolveComponent("bottom-input");
  (_component_user_chat_page + _component_bottom_input)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: "e6df07aa-0-" + i0,
        b: common_vendor.p({
          item,
          index,
          pretime: index > 0 ? $data.list[index - 1].create_time : 0
        }),
        c: "chat" + index,
        d: index
      };
    }),
    b: common_vendor.s("height:" + $data.scrollH + "px;"),
    c: $data.scrollInto,
    d: common_vendor.o($options.submit)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/users-chat/users-chat.js.map
