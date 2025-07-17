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
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$o = {
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
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
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
  const commonList = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-047d201c"], ["__file", "F:/project/社区交友/components/common/common-list.vue"]]);
  const _sfc_main$n = {
    props: ["loadmore"]
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex align-center justify-center py-3" }, [
      vue.createElementVNode(
        "text",
        { class: "font text-light-muted" },
        vue.toDisplayString($props.loadmore),
        1
        /* TEXT */
      )
    ]);
  }
  const loadMore = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__file", "F:/project/社区交友/components/common/load-more.vue"]]);
  const demo$6 = [
    {
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
      share_count: 2
    },
    {
      username: "昵称",
      userpic: "/static/common/demo5.jpg",
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
      userpic: "/static/common/demo5.jpg",
      nowstime: "2019-10-20 下午04:30",
      isFollow: false,
      title: "我是标题",
      titlepic: "/static/common/demo2.jpg",
      liked: {
        type: "",
        liked_count: 1,
        disliked_count: 2
      },
      comment_count: 2,
      share_count: 2
    }
  ];
  const _sfc_main$m = {
    components: {
      commonList,
      loadMore
    },
    data() {
      return {
        //列表高度
        scrollH: 600,
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
        newList: []
      };
    },
    //监听点击导航栏搜索框
    onNavigationBarSearchInputClicked() {
      uni.navigateTo({
        url: "/pages/search/search"
      });
    },
    //监听导航按钮点击事件
    onNavigationBarButtonTap() {
      uni.navigateTo({
        url: "/pages/add-input/add-input"
      });
    },
    onLoad() {
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - uni.upx2px(100);
        }
      });
      this.getData();
    },
    methods: {
      //获取数据
      getData() {
        var arr = [];
        for (let i = 0; i < this.tabBars.length; i++) {
          let obj = {
            //1.上拉加载更多 2.加载中 3...没有更多了
            loadmore: "上拉加载更多",
            list: []
          };
          if (i < 3) {
            obj.list = demo$6;
          }
          arr.push(obj);
        }
        this.newList = arr;
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
      },
      //上拉加载更多
      loadmore(index) {
        let item = this.newList[index];
        if (item.loadmore !== "上拉加载更多")
          return;
        item.loadmore = "加载中...";
        setTimeout(() => {
          item.list = [...item.list, ...item.list];
          item.loadmore = "上拉加载更多";
        }, 2e3);
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_load_more = vue.resolveComponent("load-more");
    const _component_no_thing = vue.resolveComponent("no-thing");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 顶部选项卡 "),
      vue.createElementVNode("scroll-view", {
        "scroll-x": "",
        "scroll-into-view": $data.scrollInto,
        "scroll-with-animation": "",
        class: "scroll-row",
        style: { "height": "100rpx" }
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
      vue.createCommentVNode(" 滑动列表 "),
      vue.createElementVNode("swiper", {
        duration: 150,
        current: $data.tabIndex,
        onChange: _cache[0] || (_cache[0] = (...args) => $options.onChangeTab && $options.onChangeTab(...args)),
        style: vue.normalizeStyle("height:" + $data.scrollH + "px;")
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.newList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
              vue.createElementVNode("scroll-view", {
                "scroll-y": "true",
                style: vue.normalizeStyle("height:" + $data.scrollH + "px;"),
                onScrolltolower: ($event) => $options.loadmore(index)
              }, [
                item.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createCommentVNode(" 列表 "),
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item.list, (item2, index2) => {
                        return vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: index2 },
                          [
                            vue.createCommentVNode(" 列表样式 "),
                            vue.createVNode(_component_common_list, {
                              item: item2,
                              index: index2,
                              onFollow: $options.follow,
                              onLiked: $options.liked
                            }, null, 8, ["item", "index", "onFollow", "onLiked"]),
                            vue.createCommentVNode(" 全局分割线 "),
                            vue.createElementVNode("view", { class: "divider" })
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    vue.createCommentVNode(" 上拉加载 "),
                    vue.createVNode(_component_load_more, {
                      loadmore: item.loadmore
                    }, null, 8, ["loadmore"])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 没有数据 "),
                    vue.createVNode(_component_no_thing)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ], 44, ["onScrolltolower"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 44, ["current"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "F:/project/社区交友/pages/index/index.vue"]]);
  const $T = {
    // 计算当前日期星座
    getHoroscope(date) {
      let c = ["摩羯", "水瓶", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯"];
      date = new Date(date);
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let startMonth = month - (day - 14 < "865778999988".charAt(month));
      return c[startMonth] + "座";
    },
    // 计算指定时间与当前的时间差
    sumAge(data) {
      let dateBegin = new Date(data.replace(/-/g, "/"));
      let dateEnd = /* @__PURE__ */ new Date();
      let dateDiff = dateEnd.getTime() - dateBegin.getTime();
      let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1e3));
      let leave1 = dateDiff % (24 * 3600 * 1e3);
      let hours = Math.floor(leave1 / (3600 * 1e3));
      return dayDiff + "天 " + hours + "小时 ";
    },
    // 获取聊天时间（相差300s内的信息不会显示时间）
    getChatTime(v1, v2) {
      v1 = v1.toString().length < 13 ? v1 * 1e3 : v1;
      v2 = v2.toString().length < 13 ? v2 * 1e3 : v2;
      if ((parseInt(v1) - parseInt(v2)) / 1e3 > 300) {
        return this.gettime(v1);
      }
    },
    // 人性化时间格式
    gettime(shorttime) {
      shorttime = shorttime.toString().length < 13 ? shorttime * 1e3 : shorttime;
      let now = (/* @__PURE__ */ new Date()).getTime();
      let cha = (now - parseInt(shorttime)) / 1e3;
      if (cha < 43200) {
        return this.dateFormat(new Date(shorttime), "{A} {t}:{ii}");
      } else if (cha < 518400) {
        return this.dateFormat(new Date(shorttime), "{Mon}月{DD}日 {A} {t}:{ii}");
      } else {
        return this.dateFormat(new Date(shorttime), "{Y}-{MM}-{DD} {A} {t}:{ii}");
      }
    },
    parseNumber(num) {
      return num < 10 ? "0" + num : num;
    },
    dateFormat(date, formatStr) {
      let dateObj = {}, rStr = /\{([^}]+)\}/, mons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      dateObj["Y"] = date.getFullYear();
      dateObj["M"] = date.getMonth() + 1;
      dateObj["MM"] = this.parseNumber(dateObj["M"]);
      dateObj["Mon"] = mons[dateObj["M"] - 1];
      dateObj["D"] = date.getDate();
      dateObj["DD"] = this.parseNumber(dateObj["D"]);
      dateObj["h"] = date.getHours();
      dateObj["hh"] = this.parseNumber(dateObj["h"]);
      dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
      dateObj["tt"] = this.parseNumber(dateObj["t"]);
      dateObj["A"] = dateObj["h"] > 12 ? "下午" : "上午";
      dateObj["i"] = date.getMinutes();
      dateObj["ii"] = this.parseNumber(dateObj["i"]);
      dateObj["s"] = date.getSeconds();
      dateObj["ss"] = this.parseNumber(dateObj["s"]);
      while (rStr.test(formatStr)) {
        formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
      }
      return formatStr;
    },
    // 获取年龄
    getAgeByBirthday(data) {
      let birthday = new Date(data.replace(/-/g, "/"));
      let d = /* @__PURE__ */ new Date();
      return d.getFullYear() - birthday.getFullYear() - (d.getMonth() < birthday.getMonth() || d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate() ? 1 : 0);
    }
  };
  const _sfc_main$l = {
    name: "UniBadge",
    props: {
      type: {
        type: String,
        // success绿色 primary蓝色 error红色 warning黄色
        default: "default"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        // small.normal
        type: String,
        default: "normal"
      }
    },
    data() {
      return {
        // width: `display: inline-block;width: ${String(this.text).length * 15 + 25}rpx`
      };
    },
    computed: {
      widthStyle() {
        const baseWidth = 25;
        const charWidth = 15;
        const extraSpace = 15;
        return `display: inline-block; width: ${String(this.text).length * charWidth + baseWidth + extraSpace}rpx`;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(` <view v-if="text" :class="inverted ? 'uni-badge--' + type + ' uni-badge--' + size + ' uni-badge--' + type + '-inverted' : 'uni-badge--' + type + ' uni-badge--' + size" \r
	class="uni-badge" :style="width" @click="onClick()"><slot></slot>{{ text }}</view> `),
        $props.text ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass([$props.inverted ? "uni-badge--" + $props.type + " uni-badge--" + $props.size + " uni-badge--" + $props.type + "-inverted" : "uni-badge--" + $props.type + " uni-badge--" + $props.size, "uni-badge"]),
            style: vue.normalizeStyle($options.widthStyle),
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
            vue.createTextVNode(
              vue.toDisplayString($props.text),
              1
              /* TEXT */
            )
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const uniBadge = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-e50d0de7"], ["__file", "F:/project/社区交友/components/uni-uni/uni-badge/uni-badge.vue"]]);
  const _sfc_main$k = {
    components: {
      uniBadge
    },
    props: {
      item: Object,
      index: Number
    },
    methods: {
      formaTime(value) {
        return $T.gettime(value);
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_badge = vue.resolveComponent("uni-badge");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "flex align-center p-2 border-bottom border-light-secondary",
      "hover-class": "bg-light"
    }, [
      vue.createElementVNode("image", {
        class: "rounded-circle mr-2",
        src: $props.item.headshot,
        style: { "width": "80rpx", "height": "80rpx" }
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "flex flex-column flex-1" }, [
        vue.createElementVNode("view", { class: "flex align-center justify-between" }, [
          vue.createElementVNode(
            "text",
            { class: "font-md" },
            vue.toDisplayString($props.item.username),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "font-sm text-secondary" },
            vue.toDisplayString($options.formaTime($props.item.update_time)),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "flex align-center justify-between" }, [
          vue.createElementVNode(
            "text",
            {
              class: "text-secondary text-ellipsis",
              style: { "max-width": "500rpx" }
            },
            vue.toDisplayString($props.item.data),
            1
            /* TEXT */
          ),
          vue.createVNode(_component_uni_badge, {
            text: $props.item.notread,
            type: "error"
          }, null, 8, ["text"])
        ])
      ])
    ]);
  }
  const msgList = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "F:/project/社区交友/components/msg/msg-list.vue"]]);
  const _imports_0$1 = "/static/common/nothing.png";
  const _sfc_main$j = {};
  function _sfc_render$i(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex flex-column align-center justify-center pt-5" }, [
      vue.createElementVNode("image", {
        src: _imports_0$1,
        style: { "width": "300rpx", "height": "300rpx" }
      }),
      vue.createElementVNode("text", { class: "font-md" }, "什么都没有")
    ]);
  }
  const noThing = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "F:/project/社区交友/components/common/no-thing.vue"]]);
  const _sfc_main$i = {
    name: "uniTransition",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: Array,
        default() {
          return [];
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        ani: {
          in: "",
          active: ""
        }
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            this.close();
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transfrom = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transfrom += line + ":" + styles[i] + ";";
        }
        return transfrom;
      }
    },
    created() {
    },
    methods: {
      change() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      open() {
        this.isShow = true;
        this.transform = "";
        this.ani.in = "";
        for (let i in this.getTranfrom(false)) {
          if (i === "opacity") {
            this.ani.in = "fade-in";
          } else {
            this.transform += `${this.getTranfrom(false)[i]} `;
          }
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this._animation(true);
          }, 50);
        });
      },
      close(type) {
        this._animation(false);
      },
      _animation(type) {
        let styles = this.getTranfrom(type);
        this.transform = "";
        for (let i in styles) {
          if (i === "opacity") {
            this.ani.in = `fade-${type ? "out" : "in"}`;
          } else {
            this.transform += `${styles[i]} `;
          }
        }
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          if (!type) {
            this.isShow = false;
          }
          this.$emit("change", {
            detail: this.isShow
          });
        }, this.duration);
      },
      getTranfrom(type) {
        let styles = {
          transform: ""
        };
        this.modeClass.forEach((mode) => {
          switch (mode) {
            case "fade":
              styles.opacity = type ? 1 : 0;
              break;
            case "slide-top":
              styles.transform += `translateY(${type ? "0" : "-100%"}) `;
              break;
            case "slide-right":
              styles.transform += `translateX(${type ? "0" : "100%"}) `;
              break;
            case "slide-bottom":
              styles.transform += `translateY(${type ? "0" : "100%"}) `;
              break;
            case "slide-left":
              styles.transform += `translateX(${type ? "0" : "-100%"}) `;
              break;
            case "zoom-in":
              styles.transform += `scale(${type ? 1 : 0.8}) `;
              break;
            case "zoom-out":
              styles.transform += `scale(${type ? 1 : 1.2}) `;
              break;
          }
        });
        return styles;
      },
      _modeClassArr(type) {
        let mode = this.modeClass;
        if (typeof mode !== "string") {
          let modestr = "";
          mode.forEach((item) => {
            modestr += item + "-" + type + ",";
          });
          return modestr.substr(0, modestr.length - 1);
        } else {
          return mode + "-" + type;
        }
      },
      // getEl(el) {
      // 	__f__('log','at components/uni-uni/uni-transition/uni-transition.vue:191',el || el.ref || null);
      // 	return el || el.ref || null
      // },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        ref: "ani",
        class: vue.normalizeClass(["uni-transition", [$data.ani.in]]),
        style: vue.normalizeStyle("transform:" + $data.transform + ";" + $options.stylesObject),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const uniTransition = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-fbf5fe9e"], ["__file", "F:/project/社区交友/components/uni-uni/uni-transition/uni-transition.vue"]]);
  const _sfc_main$h = {
    name: "UniPopup",
    components: {
      uniTransition
    },
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      maskClick: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        ani: [],
        showPopup: false,
        showTrans: false,
        maskClass: {
          "position": "fixed",
          "bottom": 0,
          "top": 0,
          "left": 0,
          "right": 0,
          "backgroundColor": "rgba(0,0,0,0.4)"
        },
        transClass: {
          "position": "fixed",
          "left": 0,
          "right": 0
        }
      };
    },
    watch: {
      type: {
        handler: function(newVal) {
          switch (this.type) {
            case "top":
              this.ani = ["slide-top"];
              this.transClass = {
                "position": "fixed",
                "left": 0,
                "right": 0
              };
              break;
            case "bottom":
              this.ani = ["slide-bottom"];
              this.transClass = {
                "position": "fixed",
                "left": 0,
                "right": 0,
                "bottom": 0
              };
              break;
            case "center":
              this.ani = ["zoom-out", "fade"];
              this.transClass = {
                "position": "fixed",
                "display": "flex",
                "flexDirection": "column",
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0,
                "justifyContent": "center",
                "alignItems": "center"
              };
              break;
          }
        },
        immediate: true
      }
    },
    created() {
    },
    methods: {
      clear(e) {
        e.stopPropagation();
      },
      open() {
        this.showPopup = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.showTrans = true;
          }, 50);
        });
        this.$emit("change", {
          show: true
        });
      },
      close(type) {
        this.showTrans = false;
        this.$nextTick(() => {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.$emit("change", {
              show: false
            });
            this.showPopup = false;
          }, 300);
        });
      },
      onTap() {
        if (!this.maskClick)
          return;
        this.close();
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = vue.resolveComponent("uni-transition");
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "uni-popup",
        onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop", "prevent"]))
      },
      [
        vue.createVNode(_component_uni_transition, {
          "mode-class": ["fade"],
          styles: $data.maskClass,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "show", "onClick"]),
        vue.createVNode(_component_uni_transition, {
          "mode-class": $data.ani,
          styles: $data.transClass,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: "uni-popup__wrapper-box",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["mode-class", "styles", "show", "onClick"])
      ],
      32
      /* NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const uniPopup = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-fda68b36"], ["__file", "F:/project/社区交友/components/uni-uni/uni-popup/uni-popup.vue"]]);
  const demo$5 = [{
    headshot: "/static/common/demo6.jpg",
    username: "星期四的微信",
    update_time: 1752722735,
    data: "nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
    notread: 2
  }, {
    headshot: "/static/common/demo6.jpg",
    username: "星期四的微信",
    update_time: 1752722735,
    data: "nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
    notread: 2
  }, {
    headshot: "/static/common/demo6.jpg",
    username: "星期四的微信",
    update_time: 1752722735,
    data: "nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
    notread: 2
  }, {
    headshot: "/static/common/demo6.jpg",
    username: "星期四的微信",
    update_time: 1752722735,
    data: "nrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn内容 ",
    notread: 2
  }];
  const _sfc_main$g = {
    components: {
      msgList,
      noThing,
      uniPopup
    },
    data() {
      return {
        list: []
      };
    },
    // 页面加载
    onLoad() {
      this.list = demo$5;
    },
    // 监听原生导航栏按钮事件
    onNavigationBarButtonTap(e) {
      switch (e.index) {
        case 0:
          uni.navigateTo({
            url: "/pages/friend-list/friend-list"
          });
          this.$refs.popup.close();
          break;
        case 1:
          this.$refs.popup.open();
          break;
      }
    },
    // 过滤器
    // filters: {
    // 	formaTime(value) {
    // 		return $T.gettime(Number(value));
    // 	}
    // },
    // 监听下拉刷新
    onPullDownRefresh() {
      this.refresh();
    },
    methods: {
      //下拉刷新
      refresh() {
        setTimeout(() => {
          this.list = demo$5;
          uni.stopPullDownRefresh();
        }, 2e3);
      },
      // 弹出层选项点击事件
      popupEvent(e) {
        switch (e) {
          case "friend":
            formatAppLog("log", "at pages/msg/msg.vue:108", "agree");
            break;
          case "clear":
            formatAppLog("log", "at pages/msg/msg.vue:111", "clear");
            break;
        }
        this.$refs.popup.close();
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_msg_list = vue.resolveComponent("msg-list");
    const _component_no_thing = vue.resolveComponent("no-thing");
    const _component_uni_popup = vue.resolveComponent("uni-popup");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createCommentVNode(" 消息列表 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.list, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_msg_list, {
                key: index,
                item,
                index
              }, null, 8, ["item", "index"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createBlock(_component_no_thing, { key: 1 })),
      vue.createCommentVNode(" 弹出层 "),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup",
          type: "top"
        },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: "flex align-center justify-center color-aliceblue w-100 font-md border-bottom py-1",
              style: { "height": "100rpx" },
              "hover-class": "color-global",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.popupEvent(_ctx.friend))
            }, [
              vue.createElementVNode("text", { class: "iconfont icon-icon-1 mr-2" }),
              vue.createTextVNode(" 添加好友 ")
            ]),
            vue.createElementVNode("view", {
              class: "flex align-center justify-center color-aliceblue w-100 font-md py-1",
              style: { "height": "100rpx" },
              "hover-class": "color-global",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.popupEvent(_ctx.clear))
            }, [
              vue.createElementVNode("text", { class: "iconfont icon-qingchu mr-2" }),
              vue.createTextVNode(" 清除列表 ")
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesMsgMsg = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "F:/project/社区交友/pages/msg/msg.vue"]]);
  const _sfc_main$f = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 我的 ");
  }
  const PagesOwnerOwner = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "F:/project/社区交友/pages/owner/owner.vue"]]);
  var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
  const _sfc_main$e = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight
      };
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const uniStatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-25810fe1"], ["__file", "F:/project/社区交友/components/uni-uni/uni-status-bar/uni-status-bar.vue"]]);
  const icons = {
    "contact": "",
    "person": "",
    "personadd": "",
    "contact-filled": "",
    "person-filled": "",
    "personadd-filled": "",
    "phone": "",
    "email": "",
    "chatbubble": "",
    "chatboxes": "",
    "phone-filled": "",
    "email-filled": "",
    "chatbubble-filled": "",
    "chatboxes-filled": "",
    "weibo": "",
    "weixin": "",
    "pengyouquan": "",
    "chat": "",
    "qq": "",
    "videocam": "",
    "camera": "",
    "mic": "",
    "location": "",
    "mic-filled": "",
    "speech": "",
    "location-filled": "",
    "micoff": "",
    "image": "",
    "map": "",
    "compose": "",
    "trash": "",
    "upload": "",
    "download": "",
    "close": "",
    "redo": "",
    "undo": "",
    "refresh": "",
    "star": "",
    "plus": "",
    "minus": "",
    "circle": "",
    "checkbox": "",
    "close-filled": "",
    "clear": "",
    "refresh-filled": "",
    "star-filled": "",
    "plus-filled": "",
    "minus-filled": "",
    "circle-filled": "",
    "checkbox-filled": "",
    "closeempty": "",
    "refreshempty": "",
    "reload": "",
    "starhalf": "",
    "spinner": "",
    "spinner-cycle": "",
    "search": "",
    "plusempty": "",
    "forward": "",
    "back": "",
    "left-nav": "",
    "checkmarkempty": "",
    "home": "",
    "navigate": "",
    "gear": "",
    "paperplane": "",
    "info": "",
    "help": "",
    "locked": "",
    "more": "",
    "flag": "",
    "home-filled": "",
    "gear-filled": "",
    "info-filled": "",
    "help-filled": "",
    "more-filled": "",
    "settings": "",
    "list": "",
    "bars": "",
    "loop": "",
    "paperclip": "",
    "eye": "",
    "arrowup": "",
    "arrowdown": "",
    "arrowleft": "",
    "arrowright": "",
    "arrowthinup": "",
    "arrowthindown": "",
    "arrowthinleft": "",
    "arrowthinright": "",
    "pulldown": "",
    "closefill": "",
    "sound": "",
    "scan": ""
  };
  const _sfc_main$d = {
    name: "UniIcons",
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      }
    },
    data() {
      return {
        icons
      };
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $props.size + "px" }),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      vue.toDisplayString($data.icons[$props.type]),
      5
      /* TEXT, STYLE */
    );
  }
  const uniIcons = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-d3aa67ff"], ["__file", "F:/project/社区交友/components/uni-uni/uni-icons/uni-icons.vue"]]);
  const _sfc_main$c = {
    name: "UniNavBar",
    components: {
      uniStatusBar,
      uniIcons
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: "#000000"
      },
      backgroundColor: {
        type: String,
        default: "#FFFFFF"
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [String, Boolean],
        default: true
      },
      border: {
        type: [String, Boolean],
        default: true
      }
    },
    mounted() {
      if (uni.report && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = vue.resolveComponent("uni-status-bar");
    const _component_uni_icons = vue.resolveComponent("uni-icons");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-navbar" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.border, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
          style: vue.normalizeStyle({ "background-color": $props.backgroundColor })
        },
        [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_uni_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle({ color: $props.color, backgroundColor: $props.backgroundColor }),
              class: "uni-navbar__header uni-navbar__content_view"
            },
            [
              vue.createElementVNode("view", {
                onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                class: "uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view"
              }, [
                $props.leftIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "uni-navbar__content_view"
                }, [
                  vue.createVNode(_component_uni_icons, {
                    color: $props.color,
                    type: $props.leftIcon,
                    size: "24"
                  }, null, 8, ["color", "type"])
                ])) : vue.createCommentVNode("v-if", true),
                $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length }, "uni-navbar-btn-text uni-navbar__content_view"])
                  },
                  [
                    vue.createElementVNode(
                      "text",
                      {
                        style: vue.normalizeStyle({ color: $props.color, fontSize: "14px" })
                      },
                      vue.toDisplayString($props.leftText),
                      5
                      /* TEXT, STYLE */
                    )
                  ],
                  2
                  /* CLASS */
                )) : vue.createCommentVNode("v-if", true),
                vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
              ]),
              vue.createElementVNode("view", { class: "uni-navbar__header-container uni-navbar__content_view" }, [
                $props.title.length ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "uni-navbar__header-container-inner uni-navbar__content_view"
                }, [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "uni-nav-bar-text",
                      style: vue.normalizeStyle({ color: $props.color })
                    },
                    vue.toDisplayString($props.title),
                    5
                    /* TEXT, STYLE */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" 标题插槽 "),
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass([$props.title.length ? "uni-navbar__header-btns-right" : "", "uni-navbar__header-btns uni-navbar__content_view"]),
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickRight && $options.onClickRight(...args))
                },
                [
                  $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "uni-navbar__content_view"
                  }, [
                    vue.createVNode(_component_uni_icons, {
                      color: $props.color,
                      type: $props.rightIcon,
                      size: "24"
                    }, null, 8, ["color", "type"])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode(" 优先显示图标 "),
                  $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "uni-navbar-btn-text uni-navbar__content_view"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "uni-nav-bar-right-text" },
                      vue.toDisplayString($props.rightText),
                      1
                      /* TEXT */
                    )
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
                ],
                2
                /* CLASS */
              )
            ],
            4
            /* STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-navbar__placeholder"
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_uni_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "uni-navbar__placeholder-view" })
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uniNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-49ede2a5"], ["__file", "F:/project/社区交友/components/uni-uni/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$b = {
    props: ["hotClick"],
    methods: {
      openMore() {
        uni.navigateTo({
          url: "/pages/topic-nav/topic-nav"
        });
      },
      openDetail() {
        formatAppLog("log", "at components/find/hot-click.vue:29", "打开话题详情页");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "flex align-center justify-between px-2" }, [
        vue.createElementVNode("text", { class: "font-md" }, "热门分类"),
        vue.createElementVNode("view", {
          class: "felx align-center font text-secondary animated",
          "hover-class": "rubberBand",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.openMore && $options.openMore(...args))
        }, [
          vue.createTextVNode(" 更多 "),
          vue.createElementVNode("text", { class: "iconfont icon-xiangyou1" })
        ])
      ]),
      vue.createElementVNode("view", { class: "flex align-center py-3 px-2 border-bottom" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.hotClick, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "border rounded bg-light mx-1 px-2 animated",
              "hover-class": "rubberBand",
              key: index,
              onClick: ($event) => $options.openDetail(item)
            }, vue.toDisplayString(item.name), 9, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const hotClick = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "F:/project/社区交友/components/find/hot-click.vue"]]);
  const _sfc_main$a = {
    props: {
      item: Object,
      index: Number
    },
    methods: {
      openDetail() {
        uni.navigateTo({
          url: "/pages/topic-detail/topic-detail?detail=" + JSON.stringify(this.item)
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex align-center p-2" }, [
      vue.createElementVNode("image", {
        src: $props.item.cover,
        style: { "height": "150rpx", "width": "150rpx" },
        class: "rounded mr-2"
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "flex flex-column flex-1" }, [
        vue.createElementVNode(
          "text",
          {
            class: "font-md text-dark",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.openDetail && $options.openDetail(...args))
          },
          "#" + vue.toDisplayString($props.item.title) + "#",
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { class: "font text-secondary" },
          vue.toDisplayString($props.item.desc),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "flex align-center font text-secondary" }, [
          vue.createElementVNode(
            "text",
            { class: "mr-2" },
            "动态:" + vue.toDisplayString($props.item.news_count),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            null,
            "今日: " + vue.toDisplayString($props.item.today_count),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const topicList = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "F:/project/社区交友/components/find/topic-list.vue"]]);
  const _imports_0 = "/static/common/demo2.jpg";
  const demo$4 = [
    {
      username: "昵称",
      userpic: "/static/tabber/msg2.png",
      nowstime: "2019-10-20 下午04:30",
      isFollow: true,
      title: "我是标题",
      titlepic: "/static/common/demo2.jpg",
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
      isFollow: true,
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
      isFollow: true,
      title: "我是标题",
      titlepic: "/static/common/demo2.jpg",
      liked: {
        type: "",
        liked_count: 1,
        disliked_count: 2
      },
      comment_count: 2,
      share_count: 2
    }
  ];
  const _sfc_main$9 = {
    components: {
      uniNavBar,
      commonList,
      loadMore,
      hotClick,
      topicList
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
        hotClick: [{
          name: "关注"
        }, {
          name: "推荐"
        }, {
          name: "体育"
        }, {
          name: "热点"
        }, {
          name: "财经"
        }, {
          name: "娱乐"
        }],
        topicList: [{
          cover: "/static/common/demo10.jpg",
          title: "话题名称",
          desc: "话题描述",
          today_count: 0,
          news_count: 10
        }, {
          cover: "/static/common/demo10.jpg",
          title: "话题名称",
          desc: "话题描述",
          today_count: 0,
          news_count: 10
        }, {
          cover: "/static/common/demo10.jpg",
          title: "话题名称",
          desc: "话题描述",
          today_count: 0,
          news_count: 10
        }, {
          cover: "/static/common/demo10.jpg",
          title: "话题名称",
          desc: "话题描述",
          today_count: 0,
          news_count: 10
        }]
      };
    },
    onLoad() {
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - res.statusBarHeight - 44;
        }
      });
      this.list = demo$4;
    },
    methods: {
      // 打开发布页
      openInput() {
        uni.navigateTo({
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
        uni.showToast({
          title: msg + "成功"
        });
      },
      // 上拉加载
      loadmoreEvent() {
        if (this.loadmore !== "上拉加载更多")
          return;
        this.loadmore = "加载中";
        setTimeout(() => {
          this.list = [...this.list, ...this.list];
          this.loadmore = "上拉加载更多";
        }, 2e3);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = vue.resolveComponent("uni-nav-bar");
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_load_more = vue.resolveComponent("load-more");
    const _component_hot_click = vue.resolveComponent("hot-click");
    const _component_topic_list = vue.resolveComponent("topic-list");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 导航 "),
      vue.createVNode(_component_uni_nav_bar, {
        border: false,
        fixed: true,
        statusBar: "true",
        onClickRight: $options.openInput
      }, {
        right: vue.withCtx(() => [
          vue.createElementVNode("text", { class: "iconfont icon-fabu1" })
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "flex align-center justify-center font-weight-bold w-100" }, [
            vue.createCommentVNode(' <view class="font-lg color-global mx-1">关注</view> '),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.tabBar, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["font-md text-light-muted mx-1", $data.tabIndex === index ? "font-lg color-global" : "font-md text-light-muted"]),
                  onClick: ($event) => $options.changeTab(index),
                  key: index
                }, vue.toDisplayString(item.name), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClickRight"]),
      vue.createCommentVNode(" 划动界面 "),
      vue.createElementVNode("swiper", {
        current: $data.tabIndex,
        duration: 150,
        onChange: _cache[1] || (_cache[1] = (...args) => $options.onChangeTab && $options.onChangeTab(...args)),
        style: vue.normalizeStyle("height:" + $data.scrollH + "px;")
      }, [
        vue.createCommentVNode(" 关注 "),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode(
            "scroll-view",
            {
              "scroll-y": "true",
              style: vue.normalizeStyle("height:" + $data.scrollH + "px;"),
              onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.loadmoreEvent && $options.loadmoreEvent(...args))
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: index },
                    [
                      vue.createVNode(_component_common_list, {
                        item,
                        index,
                        onLiked: $options.liked
                      }, null, 8, ["item", "index", "onLiked"]),
                      vue.createElementVNode("view", { class: "divider" })
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              vue.createVNode(_component_load_more, { loadmore: $data.loadmore }, null, 8, ["loadmore"])
            ],
            36
            /* STYLE, NEED_HYDRATION */
          )
        ]),
        vue.createCommentVNode(" 话题 "),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode(
            "scroll-view",
            {
              "scroll-y": "true",
              style: vue.normalizeStyle("height:" + $data.scrollH + "px;")
            },
            [
              vue.createCommentVNode(" 热门分类 "),
              vue.createVNode(_component_hot_click, { hotClick: $data.hotClick }, null, 8, ["hotClick"]),
              vue.createCommentVNode(" 搜索框 "),
              vue.createElementVNode("view", { class: "p-2" }, [
                vue.createElementVNode("view", { class: "color-aliceblue rounded flex align-center justify-center py-2 text-secondary" }, [
                  vue.createElementVNode("text", { class: "iconfont icon-sousuo mr-2" }),
                  vue.createTextVNode(" 搜索话题 ")
                ])
              ]),
              vue.createCommentVNode(" 轮播图 "),
              vue.createElementVNode("swiper", {
                class: "px-2 pb-2",
                "indicator-dots": true,
                autoplay: true,
                interval: 3e3,
                duration: 1e3
              }, [
                vue.createElementVNode("swiper-item", null, [
                  vue.createElementVNode("image", {
                    src: _imports_0,
                    style: { "height": "300rpx" },
                    class: "w-100 rounded"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "divider" }),
              vue.createCommentVNode(" 最近更新 "),
              vue.createElementVNode("view", { class: "p-2 font-md" }, "最近更新"),
              vue.createCommentVNode(" 话题列表组件 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.topicList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_topic_list, {
                    key: index,
                    item,
                    index
                  }, null, 8, ["item", "index"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          )
        ])
      ], 44, ["current"])
    ]);
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "F:/project/社区交友/pages/find/find.vue"]]);
  const demo$3 = [
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
      titlepic: "/static/demo/屏幕截图 2025-07-14 081555.png",
      liked: {
        type: "",
        liked_count: 1,
        disliked_count: 2
      },
      comment_count: 2,
      share_count: 2
    }
  ];
  const _sfc_main$8 = {
    components: {
      commonList
    },
    data() {
      return {
        searchText: "",
        list: ["uni-app第二季商城类实战开发", "uni-app第三季仿微信实战开发", "实战教程", "系列教程"],
        searchList: []
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
    methods: {
      // 点击搜索历史
      clickSearchHistory(text) {
        this.searchtext = text;
        this.searchEvent();
      },
      //搜索事件
      searchEvent() {
        uni.hideKeyboard();
        uni.showLoading({
          title: "加载中...",
          mask: false
        });
        setTimeout(() => {
          this.searchList = demo$3;
          uni.hideLoading();
        }, 3e3);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_common_list = vue.resolveComponent("common-list");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.searchList.length === 0 ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createCommentVNode(" 搜索历史 "),
          vue.createElementVNode("view", { class: "py-2 font-md px-2" }, "搜索历史"),
          vue.createElementVNode("view", { class: "flex flex-wrap" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.list, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "border rounded font mx-2 my-1 px-2",
                  key: index,
                  "hover-class": "color-aliceblue",
                  onClick: ($event) => $options.clickSearchHistory(item)
                }, vue.toDisplayString(item), 9, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          vue.createCommentVNode(" 数据列表 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.searchList, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_common_list, {
                key: index,
                item,
                index
              }, null, 8, ["item", "index"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "F:/project/社区交友/pages/search/search.vue"]]);
  var isIOS;
  function album() {
    var result = 0;
    var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
    var authStatus = PHPhotoLibrary.authorizationStatus();
    if (authStatus === 0) {
      result = null;
    } else if (authStatus == 3) {
      result = 1;
    } else {
      result = 0;
    }
    plus.ios.deleteObject(PHPhotoLibrary);
    return result;
  }
  function camera() {
    var result = 0;
    var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
    var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
    if (authStatus === 0) {
      result = null;
    } else if (authStatus == 3) {
      result = 1;
    } else {
      result = 0;
    }
    plus.ios.deleteObject(AVCaptureDevice);
    return result;
  }
  function location() {
    var result = 0;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var enable = cllocationManger.locationServicesEnabled();
    var status = cllocationManger.authorizationStatus();
    if (!enable) {
      result = 2;
    } else if (status === 0) {
      result = null;
    } else if (status === 3 || status === 4) {
      result = 1;
    } else {
      result = 0;
    }
    plus.ios.deleteObject(cllocationManger);
    return result;
  }
  function push() {
    var result = 0;
    var UIApplication = plus.ios.import("UIApplication");
    var app = UIApplication.sharedApplication();
    var enabledTypes = 0;
    if (app.currentUserNotificationSettings) {
      var settings = app.currentUserNotificationSettings();
      enabledTypes = settings.plusGetAttribute("types");
      if (enabledTypes == 0) {
        result = 0;
        formatAppLog("log", "at common/permission.js:63", "推送权限没有开启");
      } else {
        result = 1;
        formatAppLog("log", "at common/permission.js:66", "已经开启推送功能!");
      }
      plus.ios.deleteObject(settings);
    } else {
      enabledTypes = app.enabledRemoteNotificationTypes();
      if (enabledTypes == 0) {
        result = 3;
        formatAppLog("log", "at common/permission.js:73", "推送权限没有开启!");
      } else {
        result = 4;
        formatAppLog("log", "at common/permission.js:76", "已经开启推送功能!");
      }
    }
    plus.ios.deleteObject(app);
    plus.ios.deleteObject(UIApplication);
    return result;
  }
  function contact() {
    var result = 0;
    var CNContactStore = plus.ios.import("CNContactStore");
    var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
    if (cnAuthStatus === 0) {
      result = null;
    } else if (cnAuthStatus == 3) {
      result = 1;
    } else {
      result = 0;
    }
    plus.ios.deleteObject(CNContactStore);
    return result;
  }
  function record() {
    var result = null;
    var avaudiosession = plus.ios.import("AVAudioSession");
    var avaudio = avaudiosession.sharedInstance();
    var status = avaudio.recordPermission();
    formatAppLog("log", "at common/permission.js:104", "permissionStatus:" + status);
    if (status === 1970168948) {
      result = null;
    } else if (status === 1735552628) {
      result = 1;
    } else {
      result = 0;
    }
    plus.ios.deleteObject(avaudiosession);
    return result;
  }
  function calendar() {
    var result = null;
    var EKEventStore = plus.ios.import("EKEventStore");
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
    if (ekAuthStatus == 3) {
      result = 1;
      formatAppLog("log", "at common/permission.js:122", "日历权限已经开启");
    } else {
      formatAppLog("log", "at common/permission.js:124", "日历权限没有开启");
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
  }
  function memo() {
    var result = null;
    var EKEventStore = plus.ios.import("EKEventStore");
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
    if (ekAuthStatus == 3) {
      result = 1;
      formatAppLog("log", "at common/permission.js:136", "备忘录权限已经开启");
    } else {
      formatAppLog("log", "at common/permission.js:138", "备忘录权限没有开启");
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
  }
  function requestIOS(permissionID) {
    return new Promise((resolve, reject) => {
      switch (permissionID) {
        case "push":
          resolve(push());
          break;
        case "location":
          resolve(location());
          break;
        case "record":
          resolve(record());
          break;
        case "camera":
          resolve(camera());
          break;
        case "album":
          resolve(album());
          break;
        case "contact":
          resolve(contact());
          break;
        case "calendar":
          resolve(calendar());
          break;
        case "memo":
          resolve(memo());
          break;
        default:
          resolve(0);
          break;
      }
    });
  }
  function requestAndroid(permissionID) {
    return new Promise((resolve, reject) => {
      plus.android.requestPermissions(
        [permissionID],
        function(resultObj) {
          var result = 0;
          for (var i = 0; i < resultObj.granted.length; i++) {
            var grantedPermission = resultObj.granted[i];
            formatAppLog("log", "at common/permission.js:187", "已获取的权限：" + grantedPermission);
            result = 1;
          }
          for (var i = 0; i < resultObj.deniedPresent.length; i++) {
            var deniedPresentPermission = resultObj.deniedPresent[i];
            formatAppLog("log", "at common/permission.js:192", "拒绝本次申请的权限：" + deniedPresentPermission);
            result = 0;
          }
          for (var i = 0; i < resultObj.deniedAlways.length; i++) {
            var deniedAlwaysPermission = resultObj.deniedAlways[i];
            formatAppLog("log", "at common/permission.js:197", "永久拒绝申请的权限：" + deniedAlwaysPermission);
            result = -1;
          }
          resolve(result);
        },
        function(error) {
          formatAppLog("log", "at common/permission.js:203", "result error: " + error.message);
          resolve({
            code: error.code,
            message: error.message
          });
        }
      );
    });
  }
  function gotoAppPermissionSetting() {
    if (permission.isIOS) {
      var UIApplication = plus.ios.import("UIApplication");
      var application2 = UIApplication.sharedApplication();
      var NSURL2 = plus.ios.import("NSURL");
      var setting2 = NSURL2.URLWithString("app-settings:");
      application2.openURL(setting2);
      plus.ios.deleteObject(setting2);
      plus.ios.deleteObject(NSURL2);
      plus.ios.deleteObject(application2);
    } else {
      var Intent = plus.android.importClass("android.content.Intent");
      var Settings = plus.android.importClass("android.provider.Settings");
      var Uri = plus.android.importClass("android.net.Uri");
      var mainActivity = plus.android.runtimeMainActivity();
      var intent = new Intent();
      intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
      var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
      intent.setData(uri);
      mainActivity.startActivity(intent);
    }
  }
  const permission = {
    get isIOS() {
      return typeof isIOS === "boolean" ? isIOS : isIOS = uni.getSystemInfoSync().platform === "ios";
    },
    requestIOS,
    requestAndroid,
    gotoAppSetting: gotoAppPermissionSetting
  };
  var sourceType = [
    ["camera"],
    ["album"],
    ["camera", "album"]
  ];
  var sizeType = [
    ["compressed"],
    ["original"],
    ["compressed", "original"]
  ];
  const _sfc_main$7 = {
    props: {
      list: Array,
      show: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        title: "choose/previewImage",
        imageList: [],
        sourceTypeIndex: 2,
        sourceType: ["拍照", "相册", "拍照或相册"],
        sizeTypeIndex: 2,
        sizeType: ["压缩", "原图", "压缩或原图"],
        countIndex: 8,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      };
    },
    watch: {
      list: {
        immediate: true,
        // 立即执行一次
        handler(newVal) {
          this.imageList = newVal;
        }
      }
    },
    onUnload() {
      this.sourceTypeIndex = 2, this.sourceType = ["拍照", "相册", "拍照或相册"], this.sizeTypeIndex = 2, this.sizeType = ["压缩", "原图", "压缩或原图"], this.countIndex = 8;
    },
    methods: {
      //删除图片
      deleteImage(index) {
        uni.showModal({
          title: "提示",
          content: "是否要删除该图片",
          showCancel: true,
          cancelText: "不删除",
          confirmText: "删除",
          success: (res) => {
            if (res.confirm) {
              this.imageList.splice(index, 1), this.$emit("change", this.imageList);
            }
          }
        });
      },
      chooseImage: async function() {
        if (this.sourceTypeIndex !== 2) {
          let status = await this.checkPermission();
          if (status !== 1) {
            return;
          }
        }
        if (this.imageList.length === 9) {
          let isContinue = await this.isFullImg();
          formatAppLog("log", "at components/common/upload-image.vue:106", "是否继续?", isContinue);
          if (!isContinue) {
            return;
          }
        }
        uni.chooseImage({
          sourceType: sourceType[this.sourceTypeIndex],
          sizeType: sizeType[this.sizeTypeIndex],
          count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
          success: (res) => {
            this.imageList = this.imageList.concat(res.tempFilePaths);
            this.$emit("change", this.imageList);
          },
          fail: (err) => {
            if (err["code"] && err.code !== 0 && this.sourceTypeIndex === 2) {
              this.checkPermission(err.code);
            }
          }
        });
      },
      isFullImg: function() {
        return new Promise((res) => {
          uni.showModal({
            content: "已经有9张图片了,是否清空现有图片？",
            success: (e) => {
              if (e.confirm) {
                this.imageList = [];
                res(true);
              } else {
                res(false);
              }
            },
            fail: () => {
              res(false);
            }
          });
        });
      },
      previewImage: function(e) {
        var current = e.target.dataset.src;
        uni.previewImage({
          current,
          urls: this.imageList
        });
      },
      async checkPermission(code) {
        let type = code ? code - 1 : this.sourceTypeIndex;
        let status = permission.isIOS ? await permission.requestIOS(sourceType[type][0]) : await permission.requestAndroid(type === 0 ? "android.permission.CAMERA" : "android.permission.READ_EXTERNAL_STORAGE");
        if (status === null || status === 1) {
          status = 1;
        } else {
          uni.showModal({
            content: "没有开启权限",
            confirmText: "设置",
            success: function(res) {
              if (res.confirm) {
                permission.gotoAppSetting();
              }
            }
          });
        }
        return status;
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "px-2" }, [
      $props.show ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-uploader"
      }, [
        vue.createElementVNode("view", { class: "uni-uploader-head" }, [
          vue.createElementVNode("view", { class: "uni-uploader-title" }, "点击可预览选好的图片"),
          vue.createElementVNode(
            "view",
            { class: "uni-uploader-info" },
            vue.toDisplayString($data.imageList.length) + "/9",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "uni-uploader-body" }, [
          vue.createElementVNode("view", { class: "uni-uploader__files" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.imageList, (image, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "uni-uploader__file position-relative"
                }, [
                  vue.createElementVNode("image", {
                    class: "uni-uploader__img rounded",
                    src: image,
                    "data-src": image,
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.previewImage && $options.previewImage(...args)),
                    mode: "aspectFill"
                  }, null, 8, ["src", "data-src"]),
                  vue.createElementVNode("view", {
                    class: "position-absolute top-0 right-0 px-1 rounded",
                    style: { "background-color": "rgba(0, 0, 0, 0.3)" },
                    onClick: vue.withModifiers(($event) => $options.deleteImage(index), ["stop"])
                  }, [
                    vue.createElementVNode("text", { class: "iconfont icon-guanbi1 text-white" })
                  ], 8, ["onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createElementVNode("view", { class: "uni-uploader__input-box rounded" }, [
              vue.createElementVNode("view", {
                class: "uni-uploader__input",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.chooseImage && $options.chooseImage(...args))
              })
            ])
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-ac335ed3"], ["__file", "F:/project/社区交友/components/common/upload-image.vue"]]);
  const _sfc_main$6 = {
    components: {
      uniNavBar,
      uploadImage
    },
    data() {
      return {
        content: "",
        imageList: [],
        showBack: false
      };
    },
    computed: {
      show() {
        return this.imageList.length > 0;
      }
    },
    // 监听返回
    onBackPress() {
      if ((this.content !== "" || this.imageList.length > 0) && !this.showBack) {
        uni.showModal({
          content: "是否要保存为草稿?",
          showCancel: true,
          cancelText: "不保存",
          confirmText: "保存",
          success: (res) => {
            if (res.confirm) {
              this.store();
            } else {
              uni.removeStorage({
                key: "add-input"
              });
            }
            uni.navigateBack({ delta: 1 });
          }
        });
        this.showBack = true;
        return true;
      }
    },
    //页面加载
    onLoad() {
      uni.getStorage({
        key: "add-input",
        success: (res) => {
          if (res.data) {
            let result = JSON.parse(res.data);
            this.content = result.content, this.imageList = result.imageList;
          }
        }
      });
    },
    methods: {
      // 选中图片
      changeImage(e) {
        this.imageList = e;
      },
      //保存操作
      store() {
        uni.setStorage({
          key: "add-input",
          data: JSON.stringify({
            content: this.content,
            imageList: this.imageList
          })
        });
      },
      // 返回上一步
      back() {
        uni.navigateBack();
      },
      // 底部图片图标点击
      iconclick(e) {
        switch (e) {
          case "uploadImage":
            this.$refs.uploadImage.chooseImage();
            break;
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = vue.resolveComponent("uni-nav-bar");
    const _component_upload_image = vue.resolveComponent("upload-image");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义导航 "),
      vue.createVNode(_component_uni_nav_bar, {
        "left-icon": "back",
        statusBar: "",
        border: false,
        onClick: $options.back
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "flex align-center justify-center w-100" }, [
            vue.createTextVNode(" 所有人可见"),
            vue.createElementVNode("text", { class: "iconfont icon-shezhi1" })
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      vue.createCommentVNode(" 文本域组件 "),
      vue.withDirectives(vue.createElementVNode(
        "textarea",
        {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.content = $event),
          placeholder: "说一句话吧~",
          class: "w-100 px-2"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vModelText, $data.content]
      ]),
      vue.createCommentVNode(" 上传多图 "),
      vue.createVNode(_component_upload_image, {
        show: $options.show,
        ref: "uploadImage",
        list: $data.imageList,
        onChange: $options.changeImage
      }, null, 8, ["show", "list", "onChange"]),
      vue.createCommentVNode(" 底部操作条 "),
      vue.createElementVNode("view", {
        class: "fixed-bottom bg-white flex align-center justify-center",
        style: { "height": "85rpx" }
      }, [
        vue.createElementVNode("view", {
          class: "footer-btn iconfont icon-caidan animated faster",
          "hover-calss": "jello"
        }),
        vue.createElementVNode("view", {
          class: "footer-btn iconfont icon-huatifuhao animated faster",
          "hover-calss": "jello"
        }),
        vue.createElementVNode("view", {
          class: "footer-btn iconfont icon-tupian animated faster",
          "hover-calss": "jello",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.iconclick("uploadImage"))
        }),
        vue.createElementVNode("view", {
          class: "bg-color text-white ml-auto flex justify-center align-center rounded mr-3 animated faster",
          style: { "width": "140rpx", "height": "60rpx" },
          "hover-class": "bounce"
        }, "发送")
      ])
    ]);
  }
  const PagesAddInputAddInput = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "F:/project/社区交友/pages/add-input/add-input.vue"]]);
  const demo$2 = [{
    cover: "/static/common/banner2.jpg",
    title: "话题名称",
    desc: "话题描述",
    today_count: 0,
    news_count: 10
  }, {
    cover: "/static/common/banner2.jpg",
    title: "话题名称",
    desc: "话题描述",
    today_count: 0,
    news_count: 10
  }, {
    cover: "/static/common/banner2.jpg",
    title: "话题名称",
    desc: "话题描述",
    today_count: 0,
    news_count: 10
  }, {
    cover: "/static/common/banner2.jpg",
    title: "话题名称",
    desc: "话题描述",
    today_count: 0,
    news_count: 10
  }];
  const _sfc_main$5 = {
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
        newList: []
      };
    },
    //监听点击导航栏搜索框
    onNavigationBarSearchInputClicked() {
      uni.navigateTo({
        url: "/pages/search/search"
      });
    },
    //监听导航按钮点击事件
    onNavigationBarButtonTap() {
      uni.navigateTo({
        url: "/pages/add-input/add-input"
      });
    },
    onLoad() {
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - uni.upx2px(100);
        }
      });
      this.getData();
    },
    methods: {
      //获取数据
      getData() {
        var arr = [];
        for (let i = 0; i < this.tabBars.length; i++) {
          let obj = {
            //1.上拉加载更多 2.加载中 3...没有更多了
            loadmore: "上拉加载更多",
            list: []
          };
          if (i < 3) {
            obj.list = demo$2;
          }
          arr.push(obj);
        }
        this.newList = arr;
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
      },
      //上拉加载更多
      loadmore(index) {
        let item = this.newList[index];
        if (item.loadmore !== "上拉加载更多")
          return;
        item.loadmore = "加载中...";
        setTimeout(() => {
          item.list = [...item.list, ...item.list];
          item.loadmore = "上拉加载更多";
        }, 2e3);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_topic_list = vue.resolveComponent("topic-list");
    const _component_load_more = vue.resolveComponent("load-more");
    const _component_no_thing = vue.resolveComponent("no-thing");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 顶部选项卡 "),
      vue.createElementVNode("scroll-view", {
        "scroll-x": "",
        "scroll-into-view": $data.scrollInto,
        "scroll-with-animation": "",
        class: "scroll-row",
        style: { "height": "100rpx" }
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
      vue.createCommentVNode(" 滑动列表 "),
      vue.createElementVNode("swiper", {
        duration: 150,
        current: $data.tabIndex,
        onChange: _cache[0] || (_cache[0] = (...args) => $options.onChangeTab && $options.onChangeTab(...args)),
        style: vue.normalizeStyle("height:" + $data.scrollH + "px;")
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.newList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
              vue.createElementVNode("scroll-view", {
                "scroll-y": "true",
                style: vue.normalizeStyle("height:" + $data.scrollH + "px;"),
                onScrolltolower: ($event) => $options.loadmore(index)
              }, [
                item.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createCommentVNode(" 列表 "),
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item.list, (item2, index2) => {
                        return vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: index2 },
                          [
                            vue.createCommentVNode(" 列表样式 "),
                            vue.createVNode(_component_topic_list, {
                              item: item2,
                              index: index2
                            }, null, 8, ["item", "index"]),
                            vue.createCommentVNode(" 全局分割线 "),
                            vue.createElementVNode("view", { class: "divider" })
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    vue.createCommentVNode(" 上拉加载 "),
                    vue.createVNode(_component_load_more, {
                      loadmore: item.loadmore
                    }, null, 8, ["loadmore"])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 没有数据 "),
                    vue.createVNode(_component_no_thing)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ], 44, ["onScrolltolower"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 44, ["current"])
    ]);
  }
  const PagesTopicNavTopicNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "F:/project/社区交友/pages/topic-nav/topic-nav.vue"]]);
  const _sfc_main$4 = {
    props: ["info"]
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "position-relative" }, [
        vue.createElementVNode("image", {
          src: $props.info.cover,
          mode: "aspectFill",
          style: { "height": "300rpx" },
          class: "w-100 filter"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", {
        class: "position-relative bg-white px-2 pb-2",
        style: { "z-index": "10" }
      }, [
        vue.createElementVNode("view", { class: "flex" }, [
          vue.createElementVNode("image", {
            src: $props.info.cover,
            class: "rounded mr-2",
            style: { "width": "150rpx", "height": "150rpx", "margin-top": "-75rpx" }
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "font-md" },
            "#" + vue.toDisplayString($props.info.title) + "#",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "flex align-center font text-secondary mt-1" }, [
          vue.createElementVNode(
            "text",
            { class: "mr-2" },
            " 动态: " + vue.toDisplayString($props.info.news_count),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            null,
            " 今日: " + vue.toDisplayString($props.info.today_count),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode(
          "view",
          { class: "text-secondary font-md" },
          vue.toDisplayString($props.info.desc),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const topicInfo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "F:/project/社区交友/components/topic-detail/topic-info.vue"]]);
  const demo$1 = [
    {
      username: "昵称",
      userpic: "/static/tabber/msg2.png",
      nowstime: "2019-10-20 下午04:30",
      isFollow: false,
      title: "我是标题",
      titlepic: "/static/common/banner2.jpg",
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
      titlepic: "/static/common/banner2.jpg",
      liked: {
        type: "",
        liked_count: 1,
        disliked_count: 2
      },
      comment_count: 2,
      share_count: 2
    }
  ];
  const _sfc_main$3 = {
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
        // 最新
        list2: [],
        loadtext2: "上拉加载更多"
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
        JSON.parse(e.detail);
      }
      this.list1 = demo$1;
    },
    // 触底事件
    onReachBottom() {
      this.loadmore();
    },
    methods: {
      // tab切换
      changeTab(index) {
        this.tabIndex = index;
      },
      // 上拉加载更多
      loadmore() {
        let index = this.tabIndex;
        if (this.loadtext !== "上拉加载更多")
          return;
        this["loadtext" + (index + 1)] = "加载中...";
        setTimeout(() => {
          this["list" + (index + 1)] = [...this["list" + (index + 1)], ...this["list" + (index + 1)]];
          this["loadtext" + index + 1] = "上拉加载更多";
        }, 2e3);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_topic_info = vue.resolveComponent("topic-info");
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_no_thing = vue.resolveComponent("no-thing");
    const _component_load_more = vue.resolveComponent("load-more");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_topic_info, { info: $data.info }, null, 8, ["info"]),
      vue.createElementVNode("view", { class: "divider" }),
      vue.createCommentVNode(" 置顶帖子 "),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.hotpost, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "p-2 flex align-center border-bottom",
            "hover-class": "bg-light",
            key: index
          }, [
            vue.createElementVNode("text", { class: "iconfont icon-xihuan color-global" }),
            vue.createElementVNode(
              "text",
              { class: "font text-dark text-ellipsis" },
              vue.toDisplayString(item.title),
              1
              /* TEXT */
            )
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createElementVNode("view", { class: "divider" }),
      vue.createCommentVNode(" tab "),
      vue.createElementVNode("view", { class: "flex align-center py-2" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.tabBars, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["flex-1 flex align-center justify-center", index === $data.tabIndex ? "font-lg font-weight-bold color-global" : "font-md"]),
              key: index,
              onClick: ($event) => $options.changeTab(index)
            }, vue.toDisplayString(item.name), 11, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 列表 "),
      $options.listData.length > 0 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($options.listData, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: index },
            [
              vue.createVNode(_component_common_list, {
                item,
                index
              }, null, 8, ["item", "index"]),
              vue.createElementVNode("view", { class: "divider" })
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )) : (vue.openBlock(), vue.createBlock(_component_no_thing, { key: 1 })),
      vue.createCommentVNode(" 上拉加载 "),
      vue.createVNode(_component_load_more, { loadmore: $options.loadtext }, null, 8, ["loadmore"])
    ]);
  }
  const PagesTopicDetailTopicDetail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "F:/project/社区交友/pages/topic-detail/topic-detail.vue"]]);
  const _sfc_main$2 = {
    components: {
      uniBadge
    },
    props: {
      item: Object,
      indexe: Number
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_badge = vue.resolveComponent("uni-badge");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "flex align-center p-2 border-bottom border-light-secondary",
      "hover-class": "bg-light"
    }, [
      vue.createElementVNode("image", {
        src: $props.item.headshot,
        style: { "width": "100rpx", "height": "100rpx" },
        class: "rounded-circle mr-2"
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "flex flex-column flex-1" }, [
        vue.createElementVNode(
          "text",
          { class: "font-md text-dark" },
          vue.toDisplayString($props.item.username),
          1
          /* TEXT */
        ),
        vue.createVNode(_component_uni_badge, {
          text: $props.item.age,
          type: $props.item.gender === 1 ? "error" : "primary",
          size: "small"
        }, {
          default: vue.withCtx(() => [
            $props.item.gender > 0 ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["iconfont font-sm", $props.item.gender === 1 ? "icon-nv" : "icon-nan"]),
                style: { "margin-right": "5rpx" }
              },
              null,
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["text", "type"])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["iconfont icon-xuanze font-md", $props.item.isFollow ? "text-light-muted" : "color-global"])
        },
        null,
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/project/社区交友/components/user-list/user-list.vue"]]);
  const demo = [{
    headshot: "/static/common/demo6.jpg",
    username: "烦躁杏鲍菇",
    gender: 1,
    //0未知 1女性 2男性
    age: 24,
    isFollow: true
  }, {
    headshot: "/static/common/demo6.jpg",
    username: "烦躁杏鲍菇",
    gender: 0,
    //0未知 1女性 2男性
    age: 24,
    isFollow: true
  }, {
    headshot: "/static/common/demo6.jpg",
    username: "烦躁杏鲍菇",
    gender: 2,
    //0未知 1女性 2男性
    age: 24,
    isFollow: true
  }, {
    headshot: "/static/common/demo6.jpg",
    username: "烦躁杏鲍菇",
    gender: 1,
    //0未知 1女性 2男性
    age: 24,
    isFollow: false
  }];
  const _sfc_main$1 = {
    components: {
      loadMore,
      noThing,
      userList: __easycom_0
    },
    data() {
      return {
        //列表高度
        scrollH: 600,
        tabIndex: 0,
        tabBars: [{
          name: "互关",
          num: 0
        }, {
          name: "关注",
          num: 3
        }, {
          name: "粉丝",
          num: 2
        }],
        newsList: []
      };
    },
    onLoad() {
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - uni.upx2px(100);
        }
      });
      this.getData();
    },
    // 监听点击输入框事件
    onNavigationBarSearchInputClicked() {
      uni.navigateTo({
        url: "/pages/search/search"
      });
    },
    onNavigationBarButtonTap() {
      uni.navigateBack({
        delta: 1
      });
    },
    methods: {
      //获取数据
      getData() {
        var arr = [];
        for (let i = 0; i < this.tabBars.length; i++) {
          let obj = {
            //1.上拉加载更多 2.加载中 3...没有更多了
            loadmore: "上拉加载更多",
            list: []
          };
          if (i < 2) {
            obj.list = demo;
          }
          arr.push(obj);
        }
        this.newList = arr;
      },
      // tab切换
      changeTab(index) {
        this.tabIndex = index;
      },
      //监听滑动
      onChangeTab(e) {
        this.changeTab(e.detail.current);
      },
      //上拉加载更多
      loadmore(index) {
        let item = this.newList[index];
        if (item.loadmore !== "上拉加载更多")
          return;
        item.loadmore = "加载中...";
        setTimeout(() => {
          item.list = [...item.list, ...item.list];
          item.loadmore = "上拉加载更多";
        }, 2e3);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_user_list = resolveEasycom(vue.resolveDynamicComponent("user-list"), __easycom_0);
    const _component_load_more = vue.resolveComponent("load-more");
    const _component_no_thing = vue.resolveComponent("no-thing");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" tab "),
      vue.createElementVNode("view", {
        class: "flex align-center py-2",
        style: { "height": "100rpx" }
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.tabBars, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["flex-1 flex align-center justify-center", index === $data.tabIndex ? "font-lg font-weight-bold color-global" : "font-md"]),
              key: index,
              onClick: ($event) => $options.changeTab(index)
            }, [
              vue.createTextVNode(
                vue.toDisplayString(item.name) + " ",
                1
                /* TEXT */
              ),
              item.num > 0 ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "ml-2"
                },
                vue.toDisplayString(item.num),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 滑动列表 "),
      vue.createElementVNode("swiper", {
        duration: 150,
        current: $data.tabIndex,
        onChange: _cache[0] || (_cache[0] = (...args) => $options.onChangeTab && $options.onChangeTab(...args)),
        style: vue.normalizeStyle("height:" + $data.scrollH + "px;")
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.newList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
              vue.createElementVNode("scroll-view", {
                "scroll-y": "true",
                style: vue.normalizeStyle("height:" + $data.scrollH + "px;"),
                onScrolltolower: ($event) => $options.loadmore(index)
              }, [
                item.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createCommentVNode(" 列表 "),
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item.list, (item2, index2) => {
                        return vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: index2 },
                          [
                            vue.createCommentVNode(" 列表样式 "),
                            vue.createVNode(_component_user_list, {
                              item: item2,
                              index
                            }, null, 8, ["item", "index"])
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    vue.createCommentVNode(" 上拉加载 "),
                    item.list.length > 10 ? (vue.openBlock(), vue.createBlock(_component_load_more, {
                      key: 0,
                      loadmore: item.loadmore
                    }, null, 8, ["loadmore"])) : vue.createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 没有数据 "),
                    vue.createVNode(_component_no_thing)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ], 44, ["onScrolltolower"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 44, ["current"])
    ]);
  }
  const PagesFriendListFriendList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/project/社区交友/pages/friend-list/friend-list.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/msg/msg", PagesMsgMsg);
  __definePage("pages/owner/owner", PagesOwnerOwner);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/add-input/add-input", PagesAddInputAddInput);
  __definePage("pages/topic-nav/topic-nav", PagesTopicNavTopicNav);
  __definePage("pages/topic-detail/topic-detail", PagesTopicDetailTopicDetail);
  __definePage("pages/friend-list/friend-list", PagesFriendListFriendList);
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
    app.component("no-thing", noThing);
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
