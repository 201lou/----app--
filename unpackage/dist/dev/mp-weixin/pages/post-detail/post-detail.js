"use strict";
const common_vendor = require("../../common/vendor.js");
const commonList = () => "../../components/common/common-list.js";
const bottomInput = () => "../../components/common/bottom-input.js";
const shareTo = () => "../../components/common/share-to.js";
const _sfc_main = {
  components: {
    commonList,
    bottomInput,
    shareTo
  },
  data() {
    return {
      // 当前帖子信息
      info: {
        id: 0,
        user_id: 0,
        username: "昵称",
        userpic: "/static/common/demo5.jpg",
        nowstime: "2019-10-20 下午04:30",
        isFollow: false,
        title: "我是标题",
        titlepic: "/static/common/demo2.jpg",
        liked: {
          type: "liked",
          liked_count: 1,
          disliked_count: 2
        },
        comment_count: 2,
        share_count: 2,
        content: "地煞编程学院:多热烈的白羊,热烈得好抽象,抽象掩盖欲望,却又欲盖弥彰"
      },
      images: [],
      comments: [],
      focus: false,
      reply_id: 0,
      temp_reply_id: 0
      // 新增临时存储
    };
  },
  onLoad(e) {
    if (e.detail) {
      this.__init(JSON.parse(e.detail));
    }
    common_vendor.index.$on("updateFollowOrLiked", (e2) => {
      switch (e2.type) {
        case "follow":
          this.follow(e2.data.user_id);
          break;
        case "liked":
          this.liked(e2.data);
          break;
      }
    });
  },
  onUnload() {
    common_vendor.index.$off("updateFollowOrLiked", (e) => {
    });
  },
  computed: {
    imagesList() {
      return this.images.map((item) => item.url);
    }
  },
  onNavigationBarButtonTap() {
    this.$refs.share.open({
      title: this.info.title,
      shareText: this.info.title,
      href: "https://www.dishaxy.com",
      image: this.info.titlepic
    });
  },
  onBackPress() {
    this.$refs.share.close();
  },
  // 微信小程序分享
  onShareAppMessage(res) {
    return {
      title: this.info.title,
      path: "/pages/post-detail/post-detail?detail=" + JSON.stringify(this.info)
    };
  },
  methods: {
    __init(data) {
      common_vendor.index.setNavigationBarTitle({
        title: data.title
      });
      this.info = data;
      this.info.content = "";
      this.$H.get("/post/" + this.info.id).then((res) => {
        this.info.content = res.data.data.detail.content;
        this.images = res.data.data.detail.images;
      });
      this.getComment();
    },
    // 点击评论
    doComment() {
    },
    // 点击分享
    shared() {
    },
    // 关注
    follow() {
      this.info.isFollow = true;
      common_vendor.index.showToast({
        title: "关注成功"
      });
    },
    // 顶踩操作
    liked(e) {
      if (this.info.liked.type === e.type) {
        return common_vendor.index.showToast({
          title: "你已经操作过了",
          icon: "none"
        });
      }
      let msg = e.type === "liked" ? "顶" : "踩";
      if (this.info.liked === "") {
        this.info.liked[e.type + "_count"]++;
      } else if (this.info.liked.type === "liked" && e.type === "disliked") {
        this.info.liked.liked_count--;
        this.info.liked.disliked_count++;
      } else if (this.info.liked.type === "disliked" && e.type === "liked") {
        this.info.liked.liked_count++;
        this.info.liked.disliked_count--;
      }
      this.info.liked.type = e.type;
      common_vendor.index.showToast({
        title: msg
      });
    },
    // 预览图片
    preview(index) {
      common_vendor.index.previewImage({
        current: index,
        urls: this.imagesList
      });
    },
    // 提交评论
    submit(data) {
      if (data === "") {
        return common_vendor.index.showToast({
          title: "评论不能为空",
          icon: "none"
        });
      }
      common_vendor.index.showLoading({
        title: "评论中...",
        mask: false
      });
      this.$H.post("/post/comment", {
        fid: this.temp_reply_id,
        data,
        post_id: this.info.id
      }, {
        token: true
      }).then((res) => {
        common_vendor.index.hideLoading();
        this.temp_reply_id = 0;
        this.getComment();
      }).catch((err) => {
        common_vendor.index.hideLoading();
        this.temp_reply_id = 0;
      });
    },
    // 获取评论
    getComment() {
      this.$H.get("/post/" + this.info.id + "/comment").then((res) => {
        this.comments = this.__ArrSort(res.data.data.list);
        this.info.comment_count = this.comments.length;
        common_vendor.index.$emit("updateCommentsCount", {
          id: this.info.id,
          count: this.info.comment_count
        });
      });
    },
    // 重新整理评论格式
    __ArrSort(arr, id = 0) {
      var temp = [], lev = 0;
      var forFn = function(arr2, id2, lev2) {
        for (var i = 0; i < arr2.length; i++) {
          var item = arr2[i];
          if (item.fid == id2) {
            item.lev = lev2;
            temp.push({
              id: item.id,
              fid: item.fid,
              userid: item.user.id,
              userpic: item.user.userpic,
              username: item.user.username,
              time: item.create_time,
              // time:$T.gettime(item.create_time),
              data: item.data
            });
            forFn(arr2, item.id, lev2 + 1);
          }
        }
      };
      forFn(arr, id, lev);
      return temp;
    },
    // 回复评论
    reply(id) {
      this.temp_reply_id = id;
      this.reply_id = id;
      this.focus = true;
    },
    // 输入框失去焦点
    blur() {
      this.reply_id = 0;
      this.focus = false;
    }
  }
};
if (!Array) {
  const _component_common_list = common_vendor.resolveComponent("common-list");
  const _component_share_to = common_vendor.resolveComponent("share-to");
  const _component_bottom_input = common_vendor.resolveComponent("bottom-input");
  (_component_common_list + _component_share_to + _component_bottom_input)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.info.content),
    b: common_vendor.f($data.images, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.o(($event) => $options.preview(index))
      };
    }),
    c: common_vendor.o($options.doComment),
    d: common_vendor.o($options.shared),
    e: common_vendor.o($options.follow),
    f: common_vendor.o($options.liked),
    g: common_vendor.p({
      item: $data.info,
      isdetail: true
    }),
    h: common_vendor.t($data.comments.length),
    i: common_vendor.f($data.comments, (item, index, i0) => {
      return common_vendor.e({
        a: item.fid
      }, item.fid ? {} : {}, {
        b: item.userpic,
        c: common_vendor.t(item.username),
        d: common_vendor.t(item.data),
        e: common_vendor.o(($event) => $options.reply(item.id), index),
        f: common_vendor.t(item.time),
        g: common_vendor.n(item.fid ? "bg-light rounded p-2" : ""),
        h: index
      });
    }),
    j: common_vendor.sr("share", "fe8432ee-1"),
    k: common_vendor.o($options.blur),
    l: common_vendor.o($options.submit),
    m: common_vendor.p({
      focus: $data.focus
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/post-detail/post-detail.js.map
