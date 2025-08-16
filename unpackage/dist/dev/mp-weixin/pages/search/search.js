"use strict";
const common_vendor = require("../../common/vendor.js");
const commonList = () => "../../components/common/common-list.js";
const topicList = () => "../../components/find/topic-list.js";
const userList = () => "../../components/user-list/user-list.js";
const loadMore = () => "../../components/common/load-more.js";
const _sfc_main = {
  components: {
    commonList,
    topicList,
    userList,
    loadMore
  },
  data() {
    return {
      searchText: "",
      list: [],
      // 搜索结果
      searchList: [],
      // 当前搜索类型
      type: "post",
      loadmore: "上拉加载更多",
      page: 1
    };
  },
  // 监听导航搜入
  onNavigationBarSearchInputChanged(e) {
    this.searchText = e.text;
  },
  // 监听点击导航搜索按钮
  onNavigationBarButtonTap(e) {
    if (e.index === 0) {
      this.searchEvent();
    }
  },
  onLoad(e) {
    if (e.type) {
      this.type = e.type;
    }
    this.updateSearchPlaceholder();
    switch (this.type) {
      case "post":
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
        break;
    }
    let list = common_vendor.index.getStorageSync("historySearchText");
    if (list) {
      this.list = JSON.parse(list);
    }
  },
  onUnload() {
    if (this.type === "post") {
      common_vendor.index.$off("updateFollowOrLiked", (e) => {
      });
    }
  },
  // 监听下拉刷新
  onPullDownRefresh() {
    if (this.searchText === "") {
      return common_vendor.index.stopPullDownRefresh();
    }
    this.getDate(true, () => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  // 监听上拉加载
  onReachBottom() {
    if (this.loadmore !== "上拉加载更多") {
      return;
    }
    this.loadmore = "加载中...";
    this.getData(false);
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    //顶踩
    liked(e) {
      this.searchList.forEach((item) => {
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
    //关注
    follow(user_id) {
      this.searchList.forEach((item) => {
        if (item.id === user_id) {
          item.isFollow = true;
        }
      });
      common_vendor.index.showToast({
        title: "关注成功",
        icon: "none"
      });
    },
    // 点击搜索历史
    clickSearchHistory(text) {
      this.searchText = text;
      this.searchEvent();
    },
    //搜索事件
    searchEvent() {
      common_vendor.index.hideKeyboard();
      let index = this.list.findIndex((v) => v === this.searchText);
      if (index !== -1) {
        this.$U.__toFirst(this.list, index);
      } else {
        this.list.unshift(this.searchText);
      }
      common_vendor.index.setStorageSync("historySearchText", JSON.stringify(this.list));
      this.getData();
    },
    getData(isrefresh = true, callback = false) {
      common_vendor.index.showLoading({
        title: "加载中...",
        mask: false
      });
      this.page = isrefresh ? 1 : this.page + 1;
      this.$H.post("/search/" + this.type, {
        keyword: this.searchText,
        page: this.page
      }).then((res) => {
        let list = [];
        switch (this.type) {
          case "post":
            list = res.data.data.list.map((v) => {
              return this.$U.formatCommonList(v);
            });
            break;
          case "topic":
            list = res.data.data.list.map((v) => {
              return {
                id: v.id,
                cover: v.titlepic,
                title: v.title,
                desc: v.desc,
                today_count: v.today_count,
                news_count: v.news_count
              };
            });
            break;
          case "user":
            list = res.data.data.list.map((v) => {
              return {
                id: v.id,
                headshot: v.userpic,
                username: v.username,
                gender: v.userinfo.sex,
                age: v.userinfo.age,
                isFollow: false
              };
            });
            break;
        }
        this.searchList = isrefresh ? [...list] : [...this.searchList, ...list];
        this.loadmore = list.length < 10 ? "没有更多了" : "上拉加载更多";
        common_vendor.index.hideLoading();
        if (typeof callback === "function") {
          callback();
        }
      }).catch((err) => {
        this.page--;
        common_vendor.index.hideLoading();
        if (typeof callback === "function") {
          callback();
        }
      });
    },
    // 更新搜索占位符
    updateSearchPlaceholder() {
      let placeholder = "搜索帖子";
      switch (this.type) {
        case "post":
          placeholder = "搜索帖子";
          break;
        case "topic":
          placeholder = "搜索话题";
          break;
        case "user":
          placeholder = "搜索用户";
          break;
      }
      common_vendor.index.setNavigationBarTitle({
        title: placeholder.replace("搜索", "")
      });
    }
  }
};
if (!Array) {
  const _component_common_list = common_vendor.resolveComponent("common-list");
  const _component_topic_list = common_vendor.resolveComponent("topic-list");
  const _easycom_user_list2 = common_vendor.resolveComponent("user-list");
  const _component_load_more = common_vendor.resolveComponent("load-more");
  (_component_common_list + _component_topic_list + _easycom_user_list2 + _component_load_more)();
}
const _easycom_user_list = () => "../../components/user-list/user-list.js";
if (!Math) {
  _easycom_user_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.searchEvent && $options.searchEvent(...args)),
    b: $data.searchText,
    c: common_vendor.o(($event) => $data.searchText = $event.detail.value),
    d: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    e: $data.searchList.length === 0
  }, $data.searchList.length === 0 ? {
    f: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.clickSearchHistory(item), index)
      };
    })
  } : {
    g: common_vendor.f($data.searchList, (item, index, i0) => {
      return common_vendor.e($data.type === "post" ? {
        a: "1d12fa6a-0-" + i0,
        b: common_vendor.p({
          item,
          index
        })
      } : $data.type === "topic" ? {
        c: "1d12fa6a-1-" + i0,
        d: common_vendor.p({
          item,
          index
        })
      } : {
        e: "1d12fa6a-2-" + i0,
        f: common_vendor.p({
          item,
          index
        })
      }, {
        g: index
      });
    }),
    h: $data.type === "post",
    i: $data.type === "topic",
    j: common_vendor.p({
      loadmore: $data.loadmore
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map
