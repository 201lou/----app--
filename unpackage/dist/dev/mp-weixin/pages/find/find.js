"use strict";
const common_vendor = require("../../common/vendor.js");
const uniNavBar = () => "../../components/uni-uni/uni-nav-bar/uni-nav-bar.js";
const commonList = () => "../../components/common/common-list.js";
const loadMore = () => "../../components/common/load-more.js";
const hotClick = () => "../../components/find/hot-click.js";
const topicList = () => "../../components/find/topic-list.js";
const noThing = () => "../../components/common/no-thing.js";
const _sfc_main = {
  components: {
    uniNavBar,
    commonList,
    loadMore,
    hotClick,
    topicList,
    noThing
  },
  data() {
    return {
      scrollH: 500,
      tabIndex: 0,
      tabBar: [
        {
          name: "关注"
        },
        {
          name: "话题"
        }
      ],
      list: [],
      loadmore: "上拉加载更多",
      page: 1,
      hotClick: [],
      topicList: [],
      swiperList: []
    };
  },
  onLoad() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.scrollH = res.windowHeight - res.statusBarHeight - 44;
      }
    });
    this.getTopicNav();
    this.getHotTopic();
    this.getSwipers();
  },
  onShow() {
    this.page = 1;
    this.getList();
  },
  methods: {
    // 获取关注好友文章列表
    getList() {
      let isrefresh = this.page === 1;
      this.$H.get("/followpost/" + this.page, {}, {
        token: true,
        notoast: true
      }).then((res) => {
        let list = res.data.data.list.map((v) => {
          return this.$U.formatCommonList(v);
        });
        this.list = isrefresh ? list : [...this.list, ...list], this.loadmore = list.length < 10 ? "没有更多了" : "上拉加载更多";
      }).catch((err) => {
        if (!isrefresh) {
          this.page--;
        }
      });
    },
    // 获取热门分类
    getTopicNav() {
      this.$H.get("/topicclass").then((res) => {
        this.hotClick = res.data.data.list.map((item) => {
          return {
            id: item.id,
            name: item.classname
          };
        });
      });
    },
    // 获取热门话题
    getHotTopic() {
      this.$H.get("/hottopic").then((res) => {
        this.topicList = res.data.data.list.map((item) => {
          return {
            id: item.id,
            cover: item.titlepic,
            title: item.title,
            desc: item.desc,
            today_count: item.today_count,
            news_count: item.post_count
          };
        });
      });
    },
    // 获取轮播图
    getSwipers() {
      this.$H.get("/adsense/0").then((res) => {
        this.swiperList = res.data.data.list;
      });
    },
    // 打开发布页
    openInput() {
      common_vendor.index.navigateTo({
        url: "/pages/add-input/add-input"
      });
    },
    //切换选项
    changeTab(index) {
      this.tabIndex = index;
    },
    // 滑动切换
    onChangeTab(e) {
      this.tabIndex = e.detail.current;
    },
    // 赞踩事件
    liked(e) {
      let item = this.list[e.index];
      let msg = e.type === "liked" ? "赞" : "踩";
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
      common_vendor.index.showToast({
        title: msg + "成功"
      });
    },
    // 上拉加载
    loadmoreEvent() {
      if (this.loadmore !== "上拉加载更多")
        return;
      this.loadmore = "加载中";
      this.page++;
      this.getList();
    },
    // 打开搜索页
    openSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search?type=topic"
      });
    }
  }
};
if (!Array) {
  const _component_uni_nav_bar = common_vendor.resolveComponent("uni-nav-bar");
  const _component_common_list = common_vendor.resolveComponent("common-list");
  const _component_load_more = common_vendor.resolveComponent("load-more");
  const _component_no_thing = common_vendor.resolveComponent("no-thing");
  const _component_hot_click = common_vendor.resolveComponent("hot-click");
  const _component_topic_list = common_vendor.resolveComponent("topic-list");
  (_component_uni_nav_bar + _component_common_list + _component_load_more + _component_no_thing + _component_hot_click + _component_topic_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.tabBar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.o(($event) => $options.changeTab(index), index),
        c: index,
        d: common_vendor.n($data.tabIndex === index ? "font-lg color-global" : "font-md text-light-muted")
      };
    }),
    b: common_vendor.o($options.openInput),
    c: common_vendor.p({
      border: false,
      fixed: true,
      statusBar: "true"
    }),
    d: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.o($options.liked, index),
        b: "922dc5aa-1-" + i0,
        c: common_vendor.p({
          item,
          index
        }),
        d: index
      };
    }),
    e: $data.list.length
  }, $data.list.length ? {
    f: common_vendor.p({
      loadmore: $data.loadmore
    })
  } : {}, {
    g: common_vendor.s("height:" + $data.scrollH + "px;"),
    h: common_vendor.o((...args) => $options.loadmoreEvent && $options.loadmoreEvent(...args)),
    i: common_vendor.p({
      hotClick: $data.hotClick
    }),
    j: common_vendor.o(($event) => $options.openSearch()),
    k: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item.src,
        b: index
      };
    }),
    l: common_vendor.f($data.topicList, (item, index, i0) => {
      return {
        a: "922dc5aa-5-" + i0,
        b: common_vendor.p({
          item,
          index
        }),
        c: index
      };
    }),
    m: common_vendor.s("height:" + $data.scrollH + "px;"),
    n: $data.tabIndex,
    o: common_vendor.o((...args) => $options.onChangeTab && $options.onChangeTab(...args)),
    p: common_vendor.s("height:" + $data.scrollH + "px;")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/find/find.js.map
