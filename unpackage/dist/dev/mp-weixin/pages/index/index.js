"use strict";
const common_vendor = require("../../common/vendor.js");
const uniNavBar = () => "../../components/uni-uni/uni-nav-bar/uni-nav-bar.js";
const commonList = () => "../../components/common/common-list.js";
const loadMore = () => "../../components/common/load-more.js";
const _sfc_main = {
  components: {
    commonList,
    loadMore,
    uniNavBar
  },
  data() {
    return {
      //列表高度
      scrollH: 600,
      // 顶部选项卡
      scrollInto: "",
      tabIndex: 0,
      tabBars: [],
      newList: []
    };
  },
  //监听点击导航栏搜索框
  onNavigationBarSearchInputClicked() {
    common_vendor.index.navigateTo({
      url: "/pages/search/search?type=post"
    });
  },
  //监听导航按钮点击事件
  onNavigationBarButtonTap() {
    this.navigateTo({
      url: "/pages/add-input/add-input"
    });
  },
  onLoad() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.scrollH = res.windowHeight - common_vendor.index.upx2px(100);
      }
    });
    common_vendor.index.$on("updateIndex", () => {
      this.getData();
    });
    this.getData();
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
      this.newList.forEach((tab) => {
        tab.list.forEach((item) => {
          if (item.id === id) {
            item.comment_count = count;
          }
        });
      });
    });
  },
  onUnload() {
    common_vendor.index.$off("updateFollowOrLiked", (e) => {
    });
    common_vendor.index.$off("updateIndex", (e) => {
    });
    common_vendor.index.$off("updateCommentsCount", (e) => {
    });
  },
  methods: {
    clickLeft() {
    },
    clickRight() {
      this.navigateTo({
        url: "../add-input/add-input"
      });
    },
    openSearch() {
      common_vendor.index.navigateTo({
        url: "../search/search"
      });
    },
    //获取数据
    getData() {
      this.$H.get("/postclass").then((res) => {
        this.tabBars = res.data.data.list;
        var arr = [];
        for (let i = 0; i < this.tabBars.length; i++) {
          arr.push({
            //1.上拉加载更多 2.加载中 3...没有更多了
            loadmore: "上拉加载更多",
            list: [],
            page: 1,
            firstLoad: false
          });
        }
        this.newList = arr;
        if (this.tabBars.length) {
          this.getList();
        }
      });
    },
    // 获取指定分类下的列表数据
    getList() {
      let index = this.tabIndex;
      let id = this.tabBars[index].id;
      let page = this.newList[index].page;
      let isrefresh = page === 1;
      this.$H.get("/postclass/" + id + "/post/" + page, {}, {
        token: true,
        noCheck: true
      }).then((res2) => {
        let list = res2.data.data.list.map((v) => {
          return this.$U.formatCommonList(v);
        });
        this.newList[index].list = isrefresh ? list : [
          ...this.newList[index].list,
          ...list
        ], this.newList[index].loadmore = list.length < 10 ? "没有更多了" : "上拉加载更多";
        if (isrefresh) {
          this.newList[index].firstLoad = true;
        }
      }).catch((err) => {
        if (!isrefresh) {
          this.newList[index].page--;
        }
      });
    },
    //监听滑动
    onChangeTab(e) {
      this.changeTab(e.detail.current);
    },
    //切换选项卡
    changeTab(index) {
      if (this.tabIndex === index) {
        return;
      }
      this.tabIndex = index;
      this.scrollInto = "tab" + index;
      if (!this.newList[this.tabIndex].firstLoad) {
        this.getList();
      }
    },
    //关注
    follow(user_id) {
      this.newList.forEach((tab) => {
        tab.list.forEach((item) => {
          if (item.user_id === user_id) {
            item.isFollow = true;
          }
        });
      });
      common_vendor.index.showToast({
        title: "关注成功",
        icon: "none"
      });
    },
    //顶踩
    liked(e) {
      this.newList[this.tabIndex].list.forEach((item) => {
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
    //上拉加载更多
    loadmore(index) {
      let item = this.newList[index];
      if (item.loadmore !== "上拉加载更多")
        return;
      item.loadmore = "加载中...";
      item.page++;
      this.getList();
    }
  }
};
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  const _component_uni_nav_bar = common_vendor.resolveComponent("uni-nav-bar");
  const _component_common_list = common_vendor.resolveComponent("common-list");
  const _component_load_more = common_vendor.resolveComponent("load-more");
  const _component_no_thing = common_vendor.resolveComponent("no-thing");
  (_component_template + _component_uni_nav_bar + _component_common_list + _component_load_more + _component_no_thing)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.openSearch && $options.openSearch(...args)),
    b: common_vendor.o($options.clickLeft),
    c: common_vendor.o($options.clickRight),
    d: common_vendor.p({
      shadow: false,
      border: false
    }),
    e: common_vendor.f($data.tabBars, (item, index, i0) => {
      return {
        a: common_vendor.t(item.classname),
        b: index,
        c: "tab" + index,
        d: common_vendor.n($data.tabIndex === index ? "color-global font-lg font-weight-bold" : ""),
        e: common_vendor.o(($event) => $options.changeTab(index), index)
      };
    }),
    f: $data.scrollInto,
    g: common_vendor.f($data.newList, (item, index, i0) => {
      return common_vendor.e({
        a: item.list.length > 0
      }, item.list.length > 0 ? {
        b: common_vendor.f(item.list, (item2, index2, i1) => {
          return {
            a: common_vendor.o($options.follow, index2),
            b: common_vendor.o($options.liked, index2),
            c: "25d77e31-1-" + i0 + "-" + i1,
            d: common_vendor.p({
              item: item2,
              index: index2
            }),
            e: index2
          };
        }),
        c: "25d77e31-2-" + i0,
        d: common_vendor.p({
          loadmore: item.loadmore
        })
      } : !item.firstload ? {} : {
        f: "25d77e31-3-" + i0
      }, {
        e: !item.firstload,
        g: common_vendor.o(($event) => $options.loadmore(index), index),
        h: index
      });
    }),
    h: common_vendor.s("height:" + $data.scrollH + "px;"),
    i: $data.tabIndex,
    j: common_vendor.o((...args) => $options.onChangeTab && $options.onChangeTab(...args)),
    k: common_vendor.s("height:" + $data.scrollH + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
