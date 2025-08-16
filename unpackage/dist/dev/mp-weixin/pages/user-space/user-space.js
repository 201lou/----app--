"use strict";
const common_vendor = require("../../common/vendor.js");
const common_time = require("../../common/time.js");
const relationArray = ["保密", "未婚", "已婚"];
const commonList = () => "../../components/common/common-list.js";
const loadMore = () => "../../components/common/load-more.js";
const uniPopup = () => "../../components/uni-uni/uni-popup/uni-popup.js";
const uniNavBar = () => "../../components/uni-uni/uni-nav-bar/uni-nav-bar.js";
const _sfc_main = {
  components: {
    commonList,
    loadMore,
    uniPopup,
    uniNavBar
  },
  data() {
    return {
      user_id: 0,
      userinfo: {
        userpic: "/static/common/demo5.jpg",
        username: "",
        sex: 0,
        age: 20,
        isFollow: false,
        regtime: "",
        birthday: "",
        job: "",
        path: "",
        qg: ""
      },
      counts: [{
        name: "帖子",
        num: 0
      }, {
        name: "关注",
        num: 0
      }, {
        name: "粉丝",
        num: 0
      }],
      tabIndex: 0,
      tabBars: [{
        name: "首页"
      }, {
        name: "帖子",
        list: [],
        //1.上拉加载更多 2.加载中 3...没有更多了
        loadmore: "上拉加载更多",
        page: 1
      }, {
        name: "动态",
        list: [],
        //1.上拉加载更多 2.加载中 3...没有更多了
        loadmore: "上拉加载更多",
        page: 1
      }]
    };
  },
  onNavigationBarButtonTap() {
    this.clickNavigationButton();
  },
  onLoad(e) {
    if (!e.user_id) {
      return common_vendor.index.showToast({
        title: "非法参数",
        icon: "none"
      });
    }
    this.user_id = e.user_id;
    this.getUserInfo();
    this.getCounts();
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
    common_vendor.index.$on("updateCommentsCount", ({ id, count }) => {
      this.tabBars.forEach((tab) => {
        if (tab.list) {
          tab.list.forEach((item) => {
            if (item.id === id) {
              item.comment_count = count;
            }
          });
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
  computed: {
    ...common_vendor.mapState({
      user: (state) => state.user
    }),
    list() {
      return this.tabBars[this.tabIndex].list;
    },
    loadmore() {
      return this.tabBars[this.tabIndex].loadmore;
    }
  },
  methods: {
    clickNavigationButton() {
      if (this.user_id == this.user.id) {
        return common_vendor.index.navigateTo({
          url: "../user-set/user-set"
        });
      }
      this.$refs.popup.open();
    },
    // 获取用户相关统计数据
    getCounts() {
      this.$H.get("/user/getcounts/" + this.user_id).then((res) => {
        this.counts[0].num = res.data.data.post_count;
        this.counts[1].num = res.data.data.withfollow_count;
        this.counts[2].num = res.data.data.withfen_count;
      });
    },
    // 获取用户个人信息
    getUserInfo() {
      this.$H.post("/getuserinfo", {
        user_id: this.user_id
      }, {
        token: true,
        notoast: true
      }).then((res) => {
        this.userinfo = {
          userpic: res.data.data.userpic,
          username: res.data.data.username,
          sex: res.data.data.userinfo.sex,
          age: res.data.data.userinfo.age,
          isFollow: res.data.data.fens.length > 0,
          isblack: res.data.data.blacklist.length > 0,
          regtime: common_time.$T.getAgeByBirthday(res.data.data.create_time),
          birthday: common_time.$T.getHoroscope(res.data.data.userinfo.birthday),
          job: res.data.data.userinfo.job ? res.data.data.userinfo.job : "无",
          path: res.data.data.userinfo.path ? res.data.data.userinfo.path : "无",
          qg: relationArray[res.data.data.userinfo.qg]
        };
        common_vendor.index.setNavigationBarTitle({
          title: this.userinfo.username
        });
      });
    },
    changeTab(index) {
      this.tabIndex = index;
      this.getList();
    },
    //关注
    follow(user_id) {
      this.tabBars.forEach((tab) => {
        if (tab.list) {
          tab.list.forEach((item) => {
            if (item.user_id === user_id) {
              item.isFollow = true;
            }
          });
        }
      });
      common_vendor.index.showToast({
        title: "关注成功",
        icon: "none"
      });
    },
    //顶踩
    liked(e) {
      this.tabBars[this.tabIndex].list.forEach((item) => {
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
    },
    // 获取文章列表
    getList() {
      let index = this.tabIndex;
      let page = this.tabBars[index].page;
      let isrefresh = page === 1;
      this.$H.get("/user/" + this.user_id + "/post/" + page).then((res) => {
        let list = res.data.data.list.map((v) => {
          return this.$U.formatCommonList(v);
        });
        this.tabBars[index].list = isrefresh ? [...list] : [
          ...this.tabBars[index].list,
          ...list
        ], this.tabBars[index].loadmore = list.length < 10 ? "没有更多了" : "上拉加载更多";
      }).catch((err) => {
        if (!isrefresh) {
          this.newList[index].page--;
        }
      });
    },
    // 关注/取消关注
    doFollow() {
      this.checkAuth(() => {
        let url = this.userinfo.isFollow ? "/unfollow" : "/follow";
        let msg = this.userinfo.isFollow ? "取消关注" : "关注";
        this.$H.post(url, {
          follow_id: this.user_id
        }, {
          token: true
        }).then((res) => {
          this.userinfo.isFollow = !this.userinfo.isFollow;
          common_vendor.index.showToast({
            title: msg + "成功",
            icon: "none"
          });
          common_vendor.index.$emit("updateIndex");
          this.getList();
        });
      });
    },
    // 进入编辑资料
    openUserInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/user-ownerinfo/user-ownerinfo"
      });
    },
    // 加入或移出黑名单
    doBlack() {
      this.checkAuth(() => {
        let url = this.userinfo.isblack ? "/moveoutblack" : "/addblack";
        let msg = this.userinfo.isblack ? "移出黑名单" : "加入黑名单";
        common_vendor.index.showModal({
          content: "是否要" + msg,
          success: (res) => {
            this.$H.post(url, {
              id: this.user_id
            }, {
              token: true
            }).then((res2) => {
              this.userinfo.isblack = !this.userinfo.isblack;
              common_vendor.index.showToast({
                title: msg + "成功",
                icon: "none"
              });
            });
          }
        });
      });
    },
    // 打开聊天页
    openChat() {
      let user = {
        user_id: this.user_id,
        username: this.userinfo.username,
        userpic: this.userinfo.userpic
      };
      this.navigateTo({
        url: "/pages/users-chat/users-chat?user=" + JSON.stringify(user)
      });
    }
  }
};
if (!Array) {
  const _component_uni_nav_bar = common_vendor.resolveComponent("uni-nav-bar");
  const _component_common_list = common_vendor.resolveComponent("common-list");
  const _component_load_more = common_vendor.resolveComponent("load-more");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_component_uni_nav_bar + _component_common_list + _component_load_more + _component_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.clickNavigationButton),
    b: common_vendor.p({
      shadow: false,
      fixed: true,
      border: false,
      ["right-text"]: "菜单"
    }),
    c: $data.userinfo.userpic,
    d: common_vendor.f($data.counts, (item, index, i0) => {
      return {
        a: common_vendor.t(item.num),
        b: common_vendor.t(item.name),
        c: index
      };
    }),
    e: $data.user_id == _ctx.user.id
  }, $data.user_id == _ctx.user.id ? {
    f: common_vendor.o((...args) => $options.openUserInfo && $options.openUserInfo(...args))
  } : {
    g: common_vendor.t($data.userinfo.isFollow ? "已关注" : "关注"),
    h: common_vendor.n($data.userinfo.isFollow ? "bg-light text-dark" : "bg-color"),
    i: common_vendor.o((...args) => $options.doFollow && $options.doFollow(...args))
  }, {
    j: common_vendor.f($data.tabBars, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.n(index === $data.tabIndex ? "font-lg font-weight-bold color-global" : "font-md"),
        d: common_vendor.o(($event) => $options.changeTab(index), index)
      };
    }),
    k: $data.tabIndex === 0
  }, $data.tabIndex === 0 ? {
    l: common_vendor.t($data.userinfo.regtime),
    m: common_vendor.t($data.user_id),
    n: common_vendor.t($data.userinfo.birthday),
    o: common_vendor.t($data.userinfo.job),
    p: common_vendor.t($data.userinfo.path),
    q: common_vendor.t($data.userinfo.qg)
  } : {
    r: common_vendor.f($options.list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.follow, index),
        c: common_vendor.o($options.liked, index),
        d: "fc6a3c6a-1-" + i0,
        e: common_vendor.p({
          item,
          index
        })
      };
    }),
    s: common_vendor.p({
      loadmore: $options.loadmore
    })
  }, {
    t: common_vendor.t($data.userinfo.isblack ? "移出黑名单" : "加入黑名单"),
    v: common_vendor.o((...args) => $options.doBlack && $options.doBlack(...args)),
    w: !$data.userinfo.isblack
  }, !$data.userinfo.isblack ? {
    x: common_vendor.o((...args) => $options.openChat && $options.openChat(...args))
  } : {}, {
    y: common_vendor.sr("popup", "fc6a3c6a-3"),
    z: common_vendor.p({
      type: "top"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-space/user-space.js.map
