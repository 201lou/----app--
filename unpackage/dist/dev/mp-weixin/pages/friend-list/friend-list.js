"use strict";
const common_vendor = require("../../common/vendor.js");
const uniNavBar = () => "../../components/uni-uni/uni-nav-bar/uni-nav-bar.js";
const loadMore = () => "../../components/common/load-more.js";
const noThing = () => "../../components/common/no-thing.js";
const userList = () => "../../components/user-list/user-list.js";
const _sfc_main = {
  components: {
    loadMore,
    noThing,
    userList,
    uniNavBar
  },
  data() {
    return {
      //列表高度
      scrollH: 600,
      tabIndex: 0,
      tabBars: [{
        name: "互关",
        num: 0,
        key: "friends"
      }, {
        name: "关注",
        num: 0,
        key: "follows"
      }, {
        name: "粉丝",
        num: 0,
        key: "fens"
      }],
      newList: []
    };
  },
  onLoad() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.scrollH = res.windowHeight - common_vendor.index.upx2px(100);
      }
    });
    this.getData();
  },
  // 监听点击输入框事件
  onNavigationBarSearchInputClicked() {
    common_vendor.index.navigateTo({
      url: "/pages/search/search?type=user"
    });
  },
  onNavigationBarButtonTap() {
    common_vendor.index.navigateBack({
      delta: 1
    });
  },
  filters: {
    formatNum(value) {
      return value > 99 ? "99+" : value;
    }
  },
  methods: {
    // 获取用户相关统计数据
    getCounts() {
      this.$H.get("/user/getcounts/" + this.user.id, {}, {
        token: true,
        notoast: true
      }).then((res) => {
        this.tabBars[0].num = res.data.data.friend_count;
        this.tabBars[1].num = res.data.data.withfollow_count;
        this.tabBars[2].num = res.data.data.withfen_count;
      });
    },
    //获取数据
    getData() {
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
      this.getList();
    },
    // 获取指定分类下的列表数据
    getList() {
      let index = this.tabIndex;
      this.tabBars[index].id;
      let page = this.newList[index].page;
      let isrefresh = page === 1;
      this.$H.get("/" + this.tabBars[index].key + "/" + page, {}, {
        token: true,
        noCheck: true
      }).then((res2) => {
        let list = res2.data.data.list.map((v) => {
          return {
            id: v.id,
            headshot: v.userpic,
            username: v.username,
            gender: v.userinfo.sex,
            age: v.userinfo.age,
            isFollow: index !== 2
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
    // tab切换
    changeTab(index) {
      this.tabIndex = index;
    },
    //监听滑动
    onChangeTab(e) {
      this.changeTab(e.detail.current);
      if (!this.newList[e.detail.current].firstLoad) {
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
  const _component_template = common_vendor.resolveComponent("template");
  const _component_uni_nav_bar = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_user_list2 = common_vendor.resolveComponent("user-list");
  const _component_load_more = common_vendor.resolveComponent("load-more");
  const _component_no_thing = common_vendor.resolveComponent("no-thing");
  (_component_template + _component_uni_nav_bar + _easycom_user_list2 + _component_load_more + _component_no_thing)();
}
const _easycom_user_list = () => "../../components/user-list/user-list.js";
if (!Math) {
  _easycom_user_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.openSearch && _ctx.openSearch(...args)),
    b: common_vendor.o(_ctx.goBack),
    c: common_vendor.p({
      shadow: false,
      border: false
    }),
    d: common_vendor.f($data.tabBars, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.num > 0
      }, item.num > 0 ? {
        c: common_vendor.t(item.num | _ctx.formatNum)
      } : {}, {
        d: index,
        e: common_vendor.n(index === $data.tabIndex ? "font-lg font-weight-bold color-global" : "font-md"),
        f: common_vendor.o(($event) => $options.changeTab(index), index)
      });
    }),
    e: common_vendor.f($data.newList, (item, index, i0) => {
      return common_vendor.e({
        a: item.list.length > 0
      }, item.list.length > 0 ? common_vendor.e({
        b: common_vendor.f(item.list, (item2, index2, i1) => {
          return {
            a: "0ad031a7-1-" + i0 + "-" + i1,
            b: common_vendor.p({
              item: item2,
              index
            }),
            c: index2
          };
        }),
        c: item.list.length > 10
      }, item.list.length > 10 ? {
        d: "0ad031a7-2-" + i0,
        e: common_vendor.p({
          loadmore: item.loadmore
        })
      } : {}) : {
        f: "0ad031a7-3-" + i0
      }, {
        g: common_vendor.o(($event) => $options.loadmore(index), index),
        h: index
      });
    }),
    f: common_vendor.s("height:" + $data.scrollH + "px;"),
    g: $data.tabIndex,
    h: common_vendor.o((...args) => $options.onChangeTab && $options.onChangeTab(...args)),
    i: common_vendor.s("height:" + $data.scrollH + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/friend-list/friend-list.js.map
