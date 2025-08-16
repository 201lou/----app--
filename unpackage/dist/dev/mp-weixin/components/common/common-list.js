"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    item: Object,
    index: {
      type: Number,
      default: -1
    },
    isdetail: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...common_vendor.mapState({
      user: (state) => state.user
    })
  },
  methods: {
    //打开个人空间
    openSpace(user_id) {
      common_vendor.index.navigateTo({
        url: "/pages/user-space/user-space?user_id=" + user_id
      });
    },
    //打开详情页
    openDetail() {
      if (this.isdetail)
        return;
      common_vendor.index.navigateTo({
        url: "/pages/post-detail/post-detail?detail=" + JSON.stringify(this.item)
      });
      let list = common_vendor.index.getStorageSync("history");
      list = list ? JSON.parse(list) : [];
      let index = list.findIndex((v) => v.id === this.item.id);
      if (index === -1) {
        list.unshift(this.item);
        common_vendor.index.setStorageSync("history", JSON.stringify(list));
      }
    },
    //关注操作
    follow() {
      this.checkAuth(() => {
        this.$H.post("/follow", {
          follow_id: this.item.user_id
        }, {
          token: true
        }).then((res) => {
          common_vendor.index.$emit("updateFollowOrLiked", {
            type: "follow",
            data: {
              user_id: this.item.user_id
            }
          });
        }).catch((err) => {
          common_vendor.index.showToast({
            title: "关注失败",
            icon: "none"
          });
        });
      });
    },
    //顶踩操作
    liked(type) {
      this.checkAuth(() => {
        this.$H.post("/liked", {
          post_id: this.item.id,
          type: type === "liked" ? 0 : 1
        }, {
          token: true
        }).then((res) => {
          if (res.data.errorCode) {
            return common_vendor.index.showToast({
              title: res.data.msg,
              icon: "none"
            });
          }
          common_vendor.index.$emit("updateFollowOrLiked", {
            type: "liked",
            data: {
              type,
              id: this.item.id
            }
          });
        });
      });
    },
    // 评论
    doComment() {
      this.checkAuth(() => {
        if (this.isdetail) {
          return this.openDetail();
        }
        this.$emit("doComment");
      });
    },
    //分享操作
    shared() {
      if (this.isdetail) {
        return this.openDetail();
      }
      this.$emit("shared");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.item.userpic,
    b: common_vendor.o(($event) => $options.openSpace($props.item.user_id)),
    c: common_vendor.t($props.item.username),
    d: common_vendor.o(($event) => $options.openSpace($props.item.user_id)),
    e: common_vendor.t($props.item.nowstime),
    f: !$props.item.isFollow && _ctx.user.id !== $props.item.user_id
  }, !$props.item.isFollow && _ctx.user.id !== $props.item.user_id ? {
    g: common_vendor.o((...args) => $options.follow && $options.follow(...args))
  } : {}, {
    h: common_vendor.t($props.item.title),
    i: common_vendor.o((...args) => $options.openDetail && $options.openDetail(...args)),
    j: $props.item.titlepic
  }, $props.item.titlepic ? {
    k: $props.item.titlepic,
    l: common_vendor.o((...args) => $options.openDetail && $options.openDetail(...args))
  } : {}, {
    m: common_vendor.t($props.item.liked.liked_count > 0 ? $props.item.liked.liked_count : "赞"),
    n: common_vendor.o(($event) => $options.liked("liked")),
    o: common_vendor.n($props.item.liked.type === "liked" ? "liked-active" : ""),
    p: common_vendor.t($props.item.liked.disliked_count > 0 ? $props.item.liked.disliked_count : "踩"),
    q: common_vendor.o(($event) => $options.liked("disliked")),
    r: common_vendor.n($props.item.liked.type === "disliked" ? "liked-active" : ""),
    s: common_vendor.t($props.item.comment_count > 0 ? $props.item.comment_count : "评论"),
    t: common_vendor.o((...args) => $options.doComment && $options.doComment(...args)),
    v: common_vendor.t($props.item.share_count > 0 ? $props.item.share_count : "分享"),
    w: common_vendor.o((...args) => $options.shared && $options.shared(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/common-list.js.map
