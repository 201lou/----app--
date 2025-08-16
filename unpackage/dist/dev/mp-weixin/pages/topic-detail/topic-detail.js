"use strict";
const common_vendor = require("../../common/vendor.js");
const topicInfo = () => "../../components/topic-detail/topic-info.js";
const commonList = () => "../../components/common/common-list.js";
const noThing = () => "../../components/common/no-thing.js";
const loadMore = () => "../../components/common/load-more.js";
const _sfc_main = {
  components: {
    topicInfo,
    commonList,
    noThing,
    loadMore
  },
  data() {
    return {
      info: {
        cover: "/static/common/banner2.jpg",
        title: "话题名称",
        desc: "话题描述",
        today_count: 0,
        news_count: 10
      },
      hotpost: [{
        title: "【新人必读】 uni-app实战第二季商城类项目开发"
      }, {
        title: "【新人必读】 uni-app实战第三季仿微信类项目开发"
      }],
      tabIndex: 0,
      tabBars: [{
        name: "热门"
      }, {
        name: "最新"
      }],
      // 热门
      list1: [],
      loadtext1: "上拉加载更多",
      page1: 1,
      firstLoad1: false,
      // 最新
      list2: [],
      loadtext2: "上拉加载更多",
      page2: 1,
      firstLoad2: false
    };
  },
  computed: {
    // 当前列表数据
    listData() {
      if (this.tabIndex === 0) {
        return this.list1;
      }
      return this.list2;
    },
    // 当前上拉加载
    loadtext() {
      if (this.tabIndex === 0) {
        return this.loadtext1;
      }
      return this.loadtext2;
    }
  },
  onLoad(e) {
    if (e.detail) {
      this.info = JSON.parse(e.detail);
      common_vendor.index.setNavigationBarTitle({
        title: this.info.title
      });
    }
    this.getData();
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
  // 触底事件
  onReachBottom() {
    this.loadmore();
  },
  onUnload() {
    common_vendor.index.$off("updateFollowOrLiked", (e) => {
    });
  },
  methods: {
    //关注
    follow(user_id) {
      this.list1.forEach((item) => {
        if (item.user_id === user_id) {
          item.isFollow = true;
        }
      });
      this.list2.forEach((item) => {
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
      let no = this.tabIndex + 1;
      this["list" + no].forEach((item) => {
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
    // tab切换
    changeTab(index) {
      this.tabIndex = index;
      if (!this["firstLoad" + (index + 1)]) {
        this.getData();
      }
    },
    // 加载数据
    getData() {
      let no = this.tabIndex + 1;
      let page = this["page" + no];
      let isrefresh = page === 1;
      this.$H.get("/topic/" + this.info.id + "/post/" + page).then((res) => {
        let list = res.data.data.list.map((v) => {
          return this.$U.formatCommonList(v);
        });
        this["list" + no] = isrefresh ? list : [...this["list" + no], ...list], this["loadtext" + no] = list.length < 10 ? "没有更多了" : "上拉加载更多";
        if (isrefresh) {
          this["firstLoad" + no] = true;
        }
      }).catch((err) => {
        if (!isrefresh) {
          page--;
        }
      });
    },
    // 上拉加载更多
    loadmore() {
      let index = this.tabIndex;
      if (this.loadtext !== "上拉加载更多")
        return;
      this["loadtext" + (index + 1)] = "加载中...";
      this["page" + (index + 1)]++;
      this.getData();
    }
  }
};
if (!Array) {
  const _component_topic_info = common_vendor.resolveComponent("topic-info");
  const _component_common_list = common_vendor.resolveComponent("common-list");
  const _component_no_thing = common_vendor.resolveComponent("no-thing");
  const _component_load_more = common_vendor.resolveComponent("load-more");
  (_component_topic_info + _component_common_list + _component_no_thing + _component_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      info: $data.info
    }),
    b: common_vendor.f($data.hotpost, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index
      };
    }),
    c: common_vendor.f($data.tabBars, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.n(index === $data.tabIndex ? "font-lg font-weight-bold color-global" : "font-md"),
        d: common_vendor.o(($event) => $options.changeTab(index), index)
      };
    }),
    d: $options.listData.length > 0
  }, $options.listData.length > 0 ? {
    e: common_vendor.f($options.listData, (item, index, i0) => {
      return {
        a: "686b022a-1-" + i0,
        b: common_vendor.p({
          item,
          index
        }),
        c: index
      };
    })
  } : {}, {
    f: common_vendor.p({
      loadmore: $options.loadtext
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/topic-detail/topic-detail.js.map
