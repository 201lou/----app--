if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {
    props: {
      item: Object,
      index: Number
    },
    methods: {
      //打开个人空间
      openSpace() {
        formatAppLog("log", "at components/common/common-list.vue:66", "打开个人空间");
      },
      //打开详情页
      openDetail() {
        formatAppLog("log", "at components/common/common-list.vue:70", "打开详情页");
      },
      //关注操作
      follow() {
        this.$emit("follow", this.index);
      },
      //顶踩操作
      liked(type) {
        this.$emit("liked", {
          type,
          index: this.index
        });
      },
      //分享操作
      shared() {
        formatAppLog("log", "at components/common/common-list.vue:86", "分享到");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "p-2" }, [
      vue.createCommentVNode(" 头像 昵称 | 关注按钮 "),
      vue.createElementVNode("view", { class: "flex align-center justify-between" }, [
        vue.createElementVNode("view", { class: "flex align-center" }, [
          vue.createCommentVNode(" 头像 "),
          vue.createElementVNode("image", {
            class: "mr-2 rounded-circle",
            src: $props.item.userpic,
            style: { "width": "65rpx", "height": "65rpx" },
            "lazy-load": "",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.openSpace && $options.openSpace(...args))
          }, null, 8, ["src"]),
          vue.createCommentVNode(" 昵称发布时间 "),
          vue.createElementVNode("view", null, [
            vue.createElementVNode(
              "view",
              {
                class: "font",
                style: { "line-height": "25rpx" },
                onClick: _cache[1] || (_cache[1] = (...args) => $options.openSpace && $options.openSpace(...args))
              },
              vue.toDisplayString($props.item.username),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              {
                class: "font-sm text-light-muted",
                style: { "line-height": "25rpx" }
              },
              vue.toDisplayString($props.item.nowstime),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createCommentVNode(" 按钮 "),
        !$props.item.isFollow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "flex align-center justify-center rounded text-white bg-color animated faster",
          style: { "width": "90rpx", "height": "50rpx" },
          "hover-class": "rubberBand",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.follow && $options.follow(...args))
        }, " 关注 ")) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createCommentVNode(" 标题 "),
      vue.createElementVNode(
        "view",
        {
          class: "font my-2",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.openDetail && $options.openDetail(...args))
        },
        vue.toDisplayString($props.item.title),
        1
        /* TEXT */
      ),
      vue.createCommentVNode(" 图片 "),
      $props.item.titlepic ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        calss: "rounded",
        src: $props.item.titlepic,
        style: { "height": "350rpx", "width": "100%" },
        onClick: _cache[4] || (_cache[4] = (...args) => $options.openDetail && $options.openDetail(...args))
      }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 图标按钮 "),
      vue.createElementVNode("view", { class: "flex align-center" }, [
        vue.createCommentVNode(" 顶 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["flex align-center justify-center flex-1 animated faster", $props.item.liked.type === "liked" ? "liked-active" : ""]),
            "hover-class": "jello color-global",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.liked("liked"))
          },
          [
            vue.createElementVNode("text", { class: "iconfont icon-icon mr-1" }),
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString($props.item.liked.liked_count > 0 ? $props.item.liked.liked_count : "赞"),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        ),
        vue.createCommentVNode(" 踩 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["flex align-center justify-center flex-1 animated faster", $props.item.liked.type === "disliked" ? "liked-active" : ""]),
            "hover-class": "jello color-global",
            onClick: _cache[6] || (_cache[6] = ($event) => $options.liked("disliked"))
          },
          [
            vue.createElementVNode("text", { class: "iconfont icon-anniucai mr-1" }),
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString($props.item.liked.disliked_count > 0 ? $props.item.liked.disliked_count : "踩"),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        ),
        vue.createCommentVNode(" 评论 "),
        vue.createElementVNode("view", {
          class: "flex align-center justify-center flex-1 animated faster",
          "hover-class": "jello color-global",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.openDetail && $options.openDetail(...args))
        }, [
          vue.createElementVNode("text", { class: "iconfont icon-pinglun2 mr-1" }),
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($props.item.comment_count > 0 ? $props.item.commont : "评论"),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 分享 "),
        vue.createElementVNode("view", {
          class: "flex align-center justify-center flex-1 animated faster",
          "hover-class": "jello color-global",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.shared && $options.shared(...args))
        }, [
          vue.createElementVNode("text", { class: "iconfont icon-zhuanfa1 mr-1" }),
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($props.item.share_count > 0 ? $props.item.share_count : "分享"),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const commonList = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-047d201c"], ["__file", "F:/project/社区交友/components/common/common-list.vue"]]);
  const _sfc_main$4 = {
    components: {
      commonList
    },
    data() {
      return {
        // 顶部选项卡
        scrollInto: "",
        tabIndex: 0,
        tabBars: [
          {
            name: "关注"
          },
          {
            name: "推荐"
          },
          {
            name: "热点"
          },
          {
            name: "新闻"
          },
          {
            name: "财经"
          },
          {
            name: "娱乐"
          },
          {
            name: "军事"
          },
          {
            name: "体育"
          }
        ],
        list: [
          {
            username: "昵称",
            userpic: "/static/tabber/msg2.png",
            nowstime: "2019-10-20 下午04:30",
            isFollow: false,
            title: "我是标题",
            titlepic: "/static/demo/屏幕截图 2025-07-14 081555.png",
            liked: {
              type: "liked",
              liked_count: 1,
              disliked_count: 2
            },
            comment_count: 2,
            share_count: 2
          },
          {
            username: "昵称",
            userpic: "/static/tabber/msg2.png",
            nowstime: "2019-10-20 下午04:30",
            isFollow: false,
            title: "我是标题",
            titlepic: "",
            liked: {
              type: "disliked",
              liked_count: 1,
              disliked_count: 2
            },
            comment_count: 2,
            share_count: 2
          },
          {
            username: "昵称",
            userpic: "/static/tabber/msg2.png",
            nowstime: "2019-10-20 下午04:30",
            isFollow: false,
            title: "我是标题",
            titlepic: "",
            liked: {
              type: "",
              liked_count: 1,
              disliked_count: 2
            },
            comment_count: 2,
            share_count: 2
          }
        ]
      };
    },
    onLoad() {
    },
    methods: {
      //切换选项卡
      changeTab(index) {
        if (this.tabIndex === index) {
          return;
        }
        this.tabIndex = index;
        this.scrollInto = "tab" + index;
      },
      //关注
      follow(e) {
        this.list[e].isFollow = true;
        uni.showToast({
          title: "关注成功"
        });
      },
      //顶踩
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
        uni.showToast({
          title: msg + "成功"
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 顶部选项卡 "),
      vue.createElementVNode("scroll-view", {
        "scroll-x": "",
        "scroll-into-view": $data.scrollInto,
        "scroll-with-animation": "",
        class: "scroll-row"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.tabBars, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass(["scroll-row-item px-3 py-2", $data.tabIndex === index ? "color-global font-lg font-weight-bold" : ""]),
              id: "tab" + index,
              onClick: ($event) => $options.changeTab(index)
            }, vue.toDisplayString(item.name), 11, ["id", "onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 8, ["scroll-into-view"]),
      vue.createCommentVNode(' <block v-for="(item,index) in list" :key="index"> '),
      vue.createCommentVNode(" 列表样式 "),
      vue.createCommentVNode(' <common-list :item="item" :index="index" @follow="follow" @liked="liked"></common-list> '),
      vue.createCommentVNode(" 全局分割线 "),
      vue.createCommentVNode(' <view class="divider"></view> '),
      vue.createCommentVNode(" </block> ")
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "F:/project/社区交友/pages/index/index.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 消息页 ");
  }
  const PagesMsgMsg = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "F:/project/社区交友/pages/msg/msg.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 我的 ");
  }
  const PagesOwnerOwner = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/project/社区交友/pages/owner/owner.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 发现页 ");
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/project/社区交友/pages/find/find.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/msg/msg", PagesMsgMsg);
  __definePage("pages/owner/owner", PagesOwnerOwner);
  __definePage("pages/find/find", PagesFindFind);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/project/社区交友/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
