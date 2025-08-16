"use strict";
const common_vendor = require("../../common/vendor.js");
const topicList = () => "../../components/find/topic-list.js";
const loadMore = () => "../../components/common/load-more.js";
const _sfc_main = {
  components: {
    topicList,
    loadMore
  },
  data() {
    return {
      //列表高度
      scrollH: 600,
      // 顶部选项卡
      scrollInto: "",
      tabIndex: 0,
      tabBars: [],
      newList: [],
      choose: false
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
    common_vendor.index.navigateTo({
      url: "/pages/add-input/add-input"
    });
  },
  onLoad(e) {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.scrollH = res.windowHeight - common_vendor.index.upx2px(100);
      }
    });
    this.getData();
    if (e.choose) {
      common_vendor.index.setNavigationBarTitle({
        title: "选择话题"
      });
      this.choose = true;
    }
  },
  methods: {
    //获取数据
    getData() {
      this.$H.get("/postclass").then((res) => {
        this.tabBars = res.data.data.list;
        var arr = [];
        for (let i = 0; i < this.tabBars.length; i++) {
          let obj = {
            //1.上拉加载更多 2.加载中 3...没有更多了
            loadmore: "上拉加载更多",
            list: [],
            page: 1,
            firstLoad: false
          };
          arr.push(obj);
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
      this.$H.get("/topicclass/" + id + "/topic/" + page).then((res2) => {
        let list = res2.data.data.list.map((item) => {
          return {
            id: item.id,
            cover: item.titlepic,
            title: item.title,
            desc: item.desc,
            today_count: item.today_count,
            news_count: item.post_count
          };
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
  const _component_topic_list = common_vendor.resolveComponent("topic-list");
  const _component_load_more = common_vendor.resolveComponent("load-more");
  const _component_no_thing = common_vendor.resolveComponent("no-thing");
  (_component_topic_list + _component_load_more + _component_no_thing)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabBars, (item, index, i0) => {
      return {
        a: common_vendor.t(item.classname),
        b: index,
        c: "tab" + index,
        d: common_vendor.n($data.tabIndex === index ? "color-global font-lg font-weight-bold" : ""),
        e: common_vendor.o(($event) => $options.changeTab(index), index)
      };
    }),
    b: $data.scrollInto,
    c: common_vendor.f($data.newList, (item, index, i0) => {
      return common_vendor.e({
        a: item.list.length > 0
      }, item.list.length > 0 ? {
        b: common_vendor.f(item.list, (item2, index2, i1) => {
          return {
            a: "ee98c152-0-" + i0 + "-" + i1,
            b: common_vendor.p({
              choose: $data.choose,
              item: item2,
              index: index2
            }),
            c: index2
          };
        }),
        c: "ee98c152-1-" + i0,
        d: common_vendor.p({
          loadmore: item.loadmore
        })
      } : !item.firstLoad ? {} : {
        f: "ee98c152-2-" + i0
      }, {
        e: !item.firstLoad,
        g: common_vendor.o(($event) => $options.loadmore(index), index),
        h: index
      });
    }),
    d: common_vendor.s("height:" + $data.scrollH + "px;"),
    e: $data.tabIndex,
    f: common_vendor.o((...args) => $options.onChangeTab && $options.onChangeTab(...args)),
    g: common_vendor.s("height:" + $data.scrollH + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/topic-nav/topic-nav.js.map
