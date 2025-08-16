"use strict";
const common_vendor = require("../../common/vendor.js");
const commonList = () => "../../components/common/common-list.js";
const noThing = () => "../../components/common/no-thing.js";
const _sfc_main = {
  components: {
    commonList,
    noThing
  },
  data() {
    return {
      list: []
    };
  },
  onLoad() {
    let list = common_vendor.index.getStorageSync("history");
    if (list) {
      this.list = JSON.parse(list);
    }
    common_vendor.index.$on("updateFollowOrLiked", (e) => {
      switch (e.type) {
        case "follow":
          this.follow(e.data.user_id);
          break;
        case "liked":
          this.liked(e.data);
          break;
      }
    });
    common_vendor.index.$on("updateCommentsCount", ({ id, count }) => {
      this.list.forEach((item) => {
        if (item.id === id) {
          item.comment_count = count;
        }
      });
    });
  },
  onUnload() {
    common_vendor.index.$off("updateFollowOrLiked", (e) => {
    });
    common_vendor.index.$off("updateCommentsCount", (e) => {
    });
  },
  onNavigationBarButtonTap() {
    common_vendor.index.showModal({
      content: "是否要清除历史记录",
      success: (res) => {
        if (res.confirm) {
          common_vendor.index.removeStorageSync("history");
          this.list = [];
        }
      }
    });
  },
  methods: {
    //关注
    follow(user_id) {
      this.list.forEach((item) => {
        if (item.user_id === user_id) {
          item.isFollow = true;
        }
      });
      common_vendor.index.showToast({
        title: "关注成功",
        icon: "none"
      });
    },
    //顶踩
    liked(e) {
      this.list.forEach((item) => {
        if (item.id === e.id) {
          if (item.liked.type === "") {
            item.liked[e.type + "_count"]++;
          } else if (item.liked.type === "liked" && e.type === "disliked") {
            item.liked.liked_count--;
            item.liked.disliked_count++;
          } else if (item.liked.type === "disliked" && e.type === "liked") {
            item.liked.liked_count++;
            item.liked.disliked_count--;
          }
          item.liked.type = e.type;
        }
      });
      let msg = e.type === "liked" ? "赞" : "踩";
      common_vendor.index.showToast({
        title: msg + "成功",
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _component_common_list = common_vendor.resolveComponent("common-list");
  const _component_no_thing = common_vendor.resolveComponent("no-thing");
  (_component_common_list + _component_no_thing)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: index,
        b: "6bc00a16-0-" + i0,
        c: common_vendor.p({
          item,
          index
        })
      };
    }),
    b: $data.list.length === 0
  }, $data.list.length === 0 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/history/history.js.map
