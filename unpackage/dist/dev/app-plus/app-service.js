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
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
  const _sfc_main$K = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight
      };
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
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
  const uniStatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__scopeId", "data-v-25810fe1"], ["__file", "F:/project/社区交友/components/uni-uni/uni-status-bar/uni-status-bar.vue"]]);
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
  const _sfc_main$J = {
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
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
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
  const uniIcons = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-d3aa67ff"], ["__file", "F:/project/社区交友/components/uni-uni/uni-icons/uni-icons.vue"]]);
  const _sfc_main$I = {
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
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
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
  const uniNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-49ede2a5"], ["__file", "F:/project/社区交友/components/uni-uni/uni-nav-bar/uni-nav-bar.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store22) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store22.state,
        // root state
        store22.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update2([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update2(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update2(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch2 = ref.dispatch;
    var commit2 = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch2.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit2.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    if (!isValidMap(states)) {
      console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(states).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedState() {
        var state = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module) {
            return;
          }
          state = module.context.state;
          getters = module.context.getters;
        }
        return typeof val === "function" ? val.call(this, state, getters) : state[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module = store2._modulesNamespaceMap[namespace];
    if (!module) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module;
  }
  const _sfc_main$H = {
    props: {
      item: Object,
      index: {
        type: Number,
        default: -1
      },
      isdetail: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapState({
        user: (state) => state.user
      })
    },
    methods: {
      //打开个人空间
      openSpace(user_id) {
        uni.navigateTo({
          url: "/pages/user-space/user-space?user_id=" + user_id
        });
      },
      //打开详情页
      openDetail() {
        if (this.isdetail)
          return;
        uni.navigateTo({
          url: "/pages/post-detail/post-detail?detail=" + JSON.stringify(this.item)
        });
        let list = uni.getStorageSync("history");
        list = list ? JSON.parse(list) : [];
        let index = list.findIndex((v) => v.id === this.item.id);
        if (index === -1) {
          list.unshift(this.item);
          uni.setStorageSync("history", JSON.stringify(list));
        }
      },
      //关注操作
      follow() {
        this.checkAuth(() => {
          this.$H.post("/follow", {
            follow_id: this.item.user_id
          }, {
            token: true
          }).then((res) => {
            uni.$emit("updateFollowOrLiked", {
              type: "follow",
              data: {
                user_id: this.item.user_id
              }
            });
          }).catch((err) => {
            uni.showToast({
              title: "关注失败",
              icon: "none"
            });
          });
        });
      },
      //顶踩操作
      liked(type) {
        this.checkAuth(() => {
          this.$H.post("/liked", {
            post_id: this.item.id,
            type: type === "liked" ? 0 : 1
          }, {
            token: true
          }).then((res) => {
            if (res.data.errorCode) {
              return uni.showToast({
                title: res.data.msg,
                icon: "none"
              });
            }
            uni.$emit("updateFollowOrLiked", {
              type: "liked",
              data: {
                type,
                id: this.item.id
              }
            });
          });
        });
      },
      // 评论
      doComment() {
        this.checkAuth(() => {
          if (this.isdetail) {
            return this.openDetail();
          }
          this.$emit("doComment");
        });
      },
      //分享操作
      shared() {
        if (this.isdetail) {
          return this.openDetail();
        }
        this.$emit("shared");
      }
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
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
            onClick: _cache[0] || (_cache[0] = ($event) => $options.openSpace($props.item.user_id))
          }, null, 8, ["src"]),
          vue.createCommentVNode(" 昵称发布时间 "),
          vue.createElementVNode("view", null, [
            vue.createElementVNode(
              "view",
              {
                class: "font",
                style: { "line-height": "25rpx" },
                onClick: _cache[1] || (_cache[1] = ($event) => $options.openSpace($props.item.user_id))
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
        !$props.item.isFollow && _ctx.user.id !== $props.item.user_id ? (vue.openBlock(), vue.createElementBlock("view", {
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
      vue.createCommentVNode(" 帖子详情 "),
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createCommentVNode(" 图片 "),
        $props.item.titlepic ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          calss: "rounded",
          src: $props.item.titlepic,
          style: { "height": "350rpx", "width": "100%" },
          onClick: _cache[4] || (_cache[4] = (...args) => $options.openDetail && $options.openDetail(...args)),
          mode: "widthFix"
        }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
      ], true),
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
          onClick: _cache[7] || (_cache[7] = (...args) => $options.doComment && $options.doComment(...args))
        }, [
          vue.createElementVNode("text", { class: "iconfont icon-pinglun2 mr-1" }),
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($props.item.comment_count > 0 ? $props.item.comment_count : "评论"),
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
  const commonList = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-047d201c"], ["__file", "F:/project/社区交友/components/common/common-list.vue"]]);
  const _sfc_main$G = {
    props: ["loadmore"]
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
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
  const loadMore = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__file", "F:/project/社区交友/components/common/load-more.vue"]]);
  const _sfc_main$F = {
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
      uni.navigateTo({
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
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - uni.upx2px(100);
        }
      });
      uni.$on("updateIndex", () => {
        this.getData();
      });
      this.getData();
      uni.$on("updateFollowOrLiked", (e) => {
        switch (e.type) {
          case "follow":
            this.follow(e.data.user_id);
            break;
          case "liked":
            this.liked(e.data);
            break;
        }
      });
      uni.$on("updateCommentsCount", ({ id, count }) => {
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
      uni.$off("updateFollowOrLiked", (e) => {
      });
      uni.$off("updateIndex", (e) => {
      });
      uni.$off("updateCommentsCount", (e) => {
      });
    },
    methods: {
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
        uni.showToast({
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
        uni.showToast({
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
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_load_more = vue.resolveComponent("load-more");
    const _component_no_thing = vue.resolveComponent("no-thing");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 导航栏 "),
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
            }, vue.toDisplayString(item.classname), 11, ["id", "onClick"]);
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
                )) : !item.firstload ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 加载中 "),
                    vue.createElementVNode("view", {
                      class: "text-light-muted flex align-center justify-center font-md",
                      style: { "height": "200rpx" }
                    }, "加载中")
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 2 },
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__file", "F:/project/社区交友/pages/index/index.vue"]]);
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
  const _sfc_main$E = {
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
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
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
  const uniBadge = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-e50d0de7"], ["__file", "F:/project/社区交友/components/uni-uni/uni-badge/uni-badge.vue"]]);
  const _sfc_main$D = {
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
      },
      openChat() {
        let user = {
          user_id: this.item.user_id,
          username: this.item.username,
          userpic: this.item.avatar
        };
        uni.navigateTo({
          url: "/pages/users-chat/users-chat?user=" + JSON.stringify(user),
          success: () => {
            this.$store.dispatch("readChatMessage", this.item);
          }
        });
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_badge = vue.resolveComponent("uni-badge");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "flex align-center p-2 border-bottom border-light-secondary",
      "hover-class": "bg-light",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.openChat && $options.openChat(...args))
    }, [
      vue.createElementVNode("image", {
        class: "rounded-circle mr-2",
        src: $props.item.headshot ? $props.item.headshot : "/static/common/demo6.jpg",
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
  const msgList = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__file", "F:/project/社区交友/components/msg/msg-list.vue"]]);
  const _imports_0$2 = "/static/common/nothing.png";
  const _sfc_main$C = {};
  function _sfc_render$B(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex flex-column align-center justify-center pt-5" }, [
      vue.createElementVNode("image", {
        src: _imports_0$2,
        style: { "width": "300rpx", "height": "300rpx" }
      }),
      vue.createElementVNode("text", { class: "font-md" }, "什么都没有")
    ]);
  }
  const noThing = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__file", "F:/project/社区交友/components/common/no-thing.vue"]]);
  const _sfc_main$B = {
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
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
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
  const uniTransition = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-fbf5fe9e"], ["__file", "F:/project/社区交友/components/uni-uni/uni-transition/uni-transition.vue"]]);
  const _sfc_main$A = {
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
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
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
  const uniPopup = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-fda68b36"], ["__file", "F:/project/社区交友/components/uni-uni/uni-popup/uni-popup.vue"]]);
  const _sfc_main$z = {
    components: {
      msgList,
      noThing,
      uniPopup
    },
    data() {
      return {};
    },
    // 页面加载
    onLoad() {
    },
    computed: {
      ...mapState({
        list: (state) => state.chatList
      })
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
          this.list = demo;
          uni.stopPullDownRefresh();
        }, 2e3);
      },
      // 弹出层选项点击事件
      popupEvent(e) {
        switch (e) {
          case "friend":
            uni.navigateTo({
              url: "/pages/search/search?type=user"
            });
            break;
          case "clear":
            formatAppLog("log", "at pages/msg/msg.vue:119", "clear");
            break;
        }
        this.$refs.popup.close();
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_msg_list = vue.resolveComponent("msg-list");
    const _component_no_thing = vue.resolveComponent("no-thing");
    const _component_uni_popup = vue.resolveComponent("uni-popup");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 导航 "),
      _ctx.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createCommentVNode(" 消息列表 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(_ctx.list, (item, index) => {
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
              onClick: _cache[0] || (_cache[0] = ($event) => $options.popupEvent("friend"))
            }, [
              vue.createElementVNode("text", { class: "iconfont icon-icon-1 mr-2" }),
              vue.createTextVNode(" 添加好友 ")
            ]),
            vue.createElementVNode("view", {
              class: "flex align-center justify-center color-aliceblue w-100 font-md py-1",
              style: { "height": "100rpx" },
              "hover-class": "color-global",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.popupEvent("clear"))
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
  const PagesMsgMsg = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__file", "F:/project/社区交友/pages/msg/msg.vue"]]);
  const _sfc_main$y = {
    name: "UniListItem",
    components: {
      uniIcons,
      uniBadge
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      // 列表标题
      note: {
        type: String,
        default: ""
      },
      // 列表描述
      disabled: {
        // 是否禁用
        type: [Boolean, String],
        default: false
      },
      showArrow: {
        // 是否显示箭头
        type: [Boolean, String],
        default: true
      },
      showBadge: {
        // 是否显示数字角标
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        // 是否显示Switch
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        // Switch是否被选中
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        // badge内容
        type: String,
        default: ""
      },
      badgeType: {
        // badge类型
        type: String,
        default: "success"
      },
      thumb: {
        // 缩略图
        type: String,
        default: ""
      },
      showExtraIcon: {
        // 是否显示扩展图标
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "contact",
            color: "#000000",
            size: 20
          };
        }
      }
    },
    inject: ["list"],
    data() {
      return {
        isFirstChild: false
      };
    },
    mounted() {
      if (!this.list.firstChildAppend) {
        this.list.firstChildAppend = true;
        this.isFirstChild = true;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = vue.resolveComponent("uni-icons");
    const _component_uni_badge = vue.resolveComponent("uni-badge");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([$props.disabled ? "uni-list-item--disabled" : "", "uni-list-item"]),
      "hover-class": $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-list-item__container", { "uni-list-item--first": $data.isFirstChild }])
        },
        [
          $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-list-item__icon"
          }, [
            vue.createElementVNode("image", {
              src: $props.thumb,
              class: "uni-list-item__icon-img"
            }, null, 8, ["src"])
          ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uni-list-item__icon"
          }, [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: $props.extraIcon.color,
                size: $props.extraIcon.size,
                type: $props.extraIcon.type,
                class: "uni-icon-wrapper"
              }, null, 8, ["color", "size", "type"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-list-item__content" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
            vue.createElementVNode(
              "text",
              { class: "uni-list-item__content-title" },
              vue.toDisplayString($props.title),
              1
              /* TEXT */
            ),
            $props.note ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: "uni-list-item__content-note"
              },
              vue.toDisplayString($props.note),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ]),
          $props.showBadge || $props.showArrow || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-list-item__extra"
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                key: 0,
                type: $props.badgeType,
                text: $props.badgeText
              }, null, 8, ["type", "text"])) : vue.createCommentVNode("v-if", true),
              $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
                key: 1,
                disabled: $props.disabled,
                checked: $props.switchChecked,
                onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
              }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true),
              $props.showArrow ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                key: 2,
                size: 20,
                class: "uni-icon-wrapper",
                color: "#bbb",
                type: "arrowright"
              })) : vue.createCommentVNode("v-if", true)
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      )
    ], 10, ["hover-class"]);
  }
  const uniListItem = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-83bcf706"], ["__file", "F:/project/社区交友/components/uni-uni/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$x = {
    name: "UniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      }
    },
    provide() {
      return {
        list: this
      };
    },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const uniList = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-3751c120"], ["__file", "F:/project/社区交友/components/uni-uni/uni-list/uni-list.vue"]]);
  const _sfc_main$w = {
    props: {
      back: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        providerList: []
      };
    },
    mounted() {
      uni.getProvider({
        service: "oauth",
        success: (result) => {
          this.providerList = result.provider.map((value) => {
            let providerName = "";
            let icon = "";
            let bgColor = "";
            switch (value) {
              case "weixin":
                providerName = "微信登录";
                icon = "icon-weixin";
                bgColor = "bg-success";
                break;
              case "qq":
                providerName = "QQ登录";
                icon = "icon-qq";
                bgColor = "bg-primary";
                break;
              case "sinaweibo":
                providerName = "新浪微博登录";
                icon = "icon-weibo";
                bgColor = "bg-warning";
                break;
            }
            return {
              name: providerName,
              icon,
              bgColor,
              id: value
            };
          }).filter((item) => item.name);
        },
        fail: (error) => {
          formatAppLog("log", "at components/common/other-login.vue:62", "获取登录通道失败", error);
        }
      });
    },
    methods: {
      // 登录
      login(item) {
        uni.login({
          provider: item.id,
          success: (res) => {
            uni.getUserInfo({
              provider: item.id,
              success: (infoRes) => {
                let obj = {
                  provider: item.id,
                  openid: infoRes.userInfo.openId,
                  expires_in: 0,
                  nickName: infoRes.userInfo.nickName,
                  avatarUrl: infoRes.userInfo.avatarUrl
                };
                this.loginEvent(obj);
              }
            });
          },
          fail: () => {
            uni.showToast({
              title: "登录失败",
              icon: "none"
            });
          }
        });
      },
      // 登录事件
      loginEvent(data) {
        this.$H.post("/user/otherlogin", data).then((res) => {
          this.$store.commit("login", this.$U.formatUserinfo(res.data.data));
          if (this.back) {
            uni.navigateBack({
              delta: 1
            });
          }
          uni.showToast({
            title: "登录成功",
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex align-center justify-center px-2 py-3" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.providerList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "flex-1 flex align-center justify-center",
            key: index,
            onClick: ($event) => $options.login(item)
          }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass([item.icon + " " + item.bgColor, "iconfont font-lg text-white flex align-center justify-center rounded-circle"]),
                style: { "width": "100rpx", "height": "100rpx" }
              },
              null,
              2
              /* CLASS */
            )
          ], 8, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const otherLogin = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__file", "F:/project/社区交友/components/common/other-login.vue"]]);
  const _imports_0$1 = "/static/common/banner2.jpg";
  const _sfc_main$v = {
    components: {
      uniListItem,
      uniList,
      otherLogin
    },
    data() {
      return {
        myData: [{
          name: "帖子",
          num: 0
        }, {
          name: "动态",
          num: 0
        }, {
          name: "关注",
          num: 0
        }, {
          name: "粉丝",
          num: 0
        }]
      };
    },
    onNavigationBarButtonTap() {
      uni.navigateTo({
        url: "/pages/user-setting/user-setting"
      });
    },
    computed: {
      ...mapState({
        loginStatus: (state) => state.loginStatus,
        user: (state) => state.user
      }),
      // 用户头像
      avatar() {
        return this.user.userpic && this.user ? this.user.userpic : "/static/common/demo6.jpg";
      }
    },
    mounted() {
    },
    onShow() {
      if (this.loginStatus) {
        this.getCounts();
      }
    },
    watch: {
      loginStatus(newValue, oldValue) {
        if (newValue) {
          this.getCounts();
        } else {
          this.myData.forEach((item) => {
            item.num = 0;
          });
        }
      }
    },
    methods: {
      // 获取用户相关统计数据
      getCounts() {
        this.$H.get("/user/getcounts/" + this.user.id, {}, {
          token: true,
          notoast: true
        }).then((res) => {
          this.myData[0].num = res.data.data.post_count;
          this.myData[1].num = res.data.data.today_posts_count;
          this.myData[2].num = res.data.data.withfollow_count;
          this.myData[3].num = res.data.data.withfen_count;
        });
      },
      // 打开登录页
      openLogin() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      },
      openHistory() {
        uni.navigateTo({
          url: "/pages/history/history"
        });
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_other_login = vue.resolveComponent("other-login");
    const _component_uni_list_item = vue.resolveComponent("uni-list-item");
    const _component_uni_list = vue.resolveComponent("uni-list");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 未登录 "),
      !_ctx.loginStatus ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createElementVNode("view", { class: "flex align-center justify-center py-2 font" }, " 登录社区，体验更多功能 "),
          vue.createVNode(_component_other_login),
          vue.createElementVNode("view", {
            class: "flex align-center justify-center py-2 font text-secondary",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.openLogin && $options.openLogin(...args))
          }, [
            vue.createTextVNode(" 账号/邮箱/手机登录"),
            vue.createElementVNode("text", { class: "ml-2 iconfont icon-xiangyou1" })
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          vue.createCommentVNode(" 已登录 "),
          vue.createElementVNode("view", {
            class: "flex align-center p-2",
            "hover-class": "bg-light"
          }, [
            vue.createElementVNode("image", {
              src: $options.avatar,
              style: { "width": "100rpx", "height": "100rpx" },
              class: "rounded-circle"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "flex flex-column flex-1 px-2" }, [
              vue.createElementVNode(
                "text",
                { class: "font-lg font-weight-bold" },
                vue.toDisplayString(_ctx.user.username),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "font text-muted" },
                "总帖子" + vue.toDisplayString($data.myData[0].num) + " 今日发帖" + vue.toDisplayString($data.myData[1].num),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("text", { class: "iconfont icon-xiangyou1" })
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )),
      vue.createElementVNode("view", { class: "flex align-center px-3 py-2" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.myData, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "flex-1 flex-column flex align-center justify-center"
            }, [
              vue.createElementVNode(
                "text",
                { class: "font-lg font-weight-bold" },
                vue.toDisplayString(item.num),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "font text-muted" },
                vue.toDisplayString(item.name),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "px-3 py-2" }, [
        vue.createElementVNode("image", {
          src: _imports_0$1,
          mode: "aspectFill",
          style: { "height": "170rpx" },
          class: "rounded w-100"
        })
      ]),
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_list_item, {
            title: "浏览历史",
            showExtraIcon: "",
            onClick: $options.openHistory
          }, {
            icon: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "iconfont icon-icon-" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          vue.createVNode(_component_uni_list_item, {
            title: "社区认证",
            showExtraIcon: ""
          }, {
            icon: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "iconfont icon-huiyuan" })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_list_item, {
            title: "审核帖子",
            showExtraIcon: ""
          }, {
            icon: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "iconfont icon-xiugai" })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesOwnerOwner = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__file", "F:/project/社区交友/pages/owner/owner.vue"]]);
  const _sfc_main$u = {
    props: ["hotClick"],
    methods: {
      openMore() {
        uni.navigateTo({
          url: "/pages/topic-nav/topic-nav"
        });
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
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
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                class: "border rounded bg-light mx-1 px-2 animated",
                "hover-class": "rubberBand",
                key: index,
                onClick: _cache[1] || (_cache[1] = (...args) => $options.openMore && $options.openMore(...args))
              },
              vue.toDisplayString(item.name),
              1
              /* TEXT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const hotClick = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "F:/project/社区交友/components/find/hot-click.vue"]]);
  const _sfc_main$t = {
    props: {
      item: Object,
      index: Number,
      choose: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      openDetail() {
        if (this.choose) {
          uni.$emit("chooseTopic", {
            id: this.item.id,
            title: this.item.title
          });
          return uni.navigateBack({
            delta: 1
          });
        }
        uni.navigateTo({
          url: "/pages/topic-detail/topic-detail?detail=" + JSON.stringify(this.item)
        });
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
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
  const topicList = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "F:/project/社区交友/components/find/topic-list.vue"]]);
  const _sfc_main$s = {
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
      uni.getSystemInfo({
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
        this.page++;
        this.getList();
      },
      // 打开搜索页
      openSearch() {
        uni.navigateTo({
          url: "/pages/search/search?type=topic"
        });
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = vue.resolveComponent("uni-nav-bar");
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_load_more = vue.resolveComponent("load-more");
    const _component_no_thing = vue.resolveComponent("no-thing");
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
        onChange: _cache[2] || (_cache[2] = (...args) => $options.onChangeTab && $options.onChangeTab(...args)),
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
              $data.list.length ? (vue.openBlock(), vue.createBlock(_component_load_more, {
                key: 0,
                loadmore: $data.loadmore
              }, null, 8, ["loadmore"])) : (vue.openBlock(), vue.createBlock(_component_no_thing, { key: 1 }))
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
                vue.createElementVNode("view", {
                  class: "color-aliceblue rounded flex align-center justify-center py-2 text-secondary",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.openSearch())
                }, [
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
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.swiperList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                      vue.createElementVNode("image", {
                        src: item.src,
                        style: { "height": "300rpx" },
                        class: "w-100 rounded"
                      }, null, 8, ["src"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
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
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__file", "F:/project/社区交友/pages/find/find.vue"]]);
  const _sfc_main$r = {
    components: {
      uniBadge
    },
    props: {
      item: Object,
      indexe: Number
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__file", "F:/project/社区交友/components/user-list/user-list.vue"]]);
  const _sfc_main$q = {
    components: {
      commonList,
      topicList,
      userList: __easycom_0,
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
          uni.$on("updateFollowOrLiked", (e2) => {
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
      let list = uni.getStorageSync("historySearchText");
      if (list) {
        this.list = JSON.parse(list);
      }
    },
    onUnload() {
      if (this.type === "post") {
        uni.$off("updateFollowOrLiked", (e) => {
        });
      }
    },
    // 监听下拉刷新
    onPullDownRefresh() {
      if (this.searchText === "") {
        return uni.stopPullDownRefresh();
      }
      this.getDate(true, () => {
        uni.stopPullDownRefresh();
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
        uni.showToast({
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
        uni.showToast({
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
        uni.hideKeyboard();
        let index = this.list.findIndex((v) => v === this.searchText);
        if (index !== -1) {
          this.$U.__toFirst(this.list, index);
        } else {
          this.list.unshift(this.searchText);
        }
        uni.setStorageSync("historySearchText", JSON.stringify(this.list));
        this.getData();
      },
      getData(isrefresh = true, callback = false) {
        uni.showLoading({
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
          uni.hideLoading();
          if (typeof callback === "function") {
            callback();
          }
        }).catch((err) => {
          this.page--;
          uni.hideLoading();
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
        uni.setNavigationBarTitle({
          title: placeholder.replace("搜索", "")
        });
        const currentWebview = plus.webview.currentWebview();
        if (currentWebview.setTitleNViewSearchInputText) {
          currentWebview.setTitleNViewSearchInputText({
            placeholder
          });
        }
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_topic_list = vue.resolveComponent("topic-list");
    const _component_user_list = resolveEasycom(vue.resolveDynamicComponent("user-list"), __easycom_0);
    const _component_load_more = vue.resolveComponent("load-more");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义导航 "),
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
              return vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: index },
                [
                  $data.type === "post" ? (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 0 },
                    [
                      vue.createCommentVNode(" 帖子 "),
                      vue.createVNode(_component_common_list, {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : $data.type === "topic" ? (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    [
                      vue.createCommentVNode(" 话题 "),
                      vue.createVNode(_component_topic_list, {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 2 },
                    [
                      vue.createCommentVNode(" 用户 "),
                      vue.createVNode(_component_user_list, {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createCommentVNode(" 上拉加载 "),
          vue.createVNode(_component_load_more, { loadmore: $data.loadmore }, null, 8, ["loadmore"])
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__file", "F:/project/社区交友/pages/search/search.vue"]]);
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
  const _sfc_main$p = {
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
            res.tempFilePaths.forEach((item) => {
              this.$H.upload("/image/uploadmore", {
                filePath: item,
                name: "imaglist[]",
                token: true
              }).then((result) => {
                this.imageList.push(result.data.list[0]);
                this.$emit("change", this.imageList);
              }).catch((err) => {
                formatAppLog("log", "at components/common/upload-image.vue:126", err);
              });
            });
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
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
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
                    src: image.url,
                    "data-src": image.url,
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
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-ac335ed3"], ["__file", "F:/project/社区交友/components/common/upload-image.vue"]]);
  const isOpenArray = ["仅自己可见", "所有人可见"];
  const _sfc_main$o = {
    components: {
      uniNavBar,
      uploadImage
    },
    data() {
      return {
        content: "",
        imageList: [],
        showBack: false,
        isOpen: 1,
        topic: {
          id: 0,
          title: ""
        },
        post_class_list: [],
        post_class_index: -1
      };
    },
    computed: {
      show() {
        return this.imageList.length > 0;
      },
      isOpenText() {
        return isOpenArray[this.isOpen];
      },
      // 文章分类可选项
      range() {
        return this.post_class_list.map((item) => {
          return item.classname;
        });
      },
      post_class_id() {
        if (this.post_class_index !== -1) {
          return this.post_class_list[this.post_class_index].id;
        }
      },
      post_class_name() {
        if (this.post_class_index !== -1) {
          return this.post_class_list[this.post_class_index].classname;
        }
      },
      imageListIds() {
        return this.imageList.map((item) => {
          return {
            id: item.id
          };
        });
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
      uni.$on("chooseTopic", (e) => {
        this.topic.id = e.id;
        this.topic.title = e.title;
      });
      this.getPostClass();
    },
    beforeDestroy() {
      uni.$off("chooseTopic", (e) => {
      });
    },
    methods: {
      // 发布文章
      submit() {
        if (this.topic.id == 0) {
          return uni.showToast({
            title: "请选择话题",
            icon: "none"
          });
        }
        if (this.post_class_id == -1) {
          return uni.showToast({
            title: "请选择分类",
            icon: "none"
          });
        }
        uni.showLoading({
          title: "发布中。。。",
          mask: false
        });
        this.$H.post("/post/create", {
          imaglist: JSON.stringify(this.imageListIds),
          text: this.content,
          isopen: this.isOpen,
          topic_id: this.topic.id,
          post_class_id: this.post_class_id
        }, {
          token: true
        }).then((res) => {
          formatAppLog("log", "at pages/add-input/add-input.vue:193", res);
          uni.hideLoading();
          uni.$emit("updateIndex");
          uni.showToast({
            title: "发布成功",
            icon: "none"
          });
          this.showBack = true;
          uni.navigateBack({
            delta: 1
          });
        }).catch((err) => {
          uni.hideLoading();
        });
      },
      // 获取所有文章分类
      getPostClass() {
        this.$H.get("/postclass").then((res) => {
          this.post_class_list = res.data.data.list;
        });
      },
      // 选择文章分类
      choosePostClass(e) {
        this.post_class_index = e.detail.value;
      },
      // 选择话题
      chooseTopic() {
        uni.navigateTo({
          url: "../topic-nav/topic-nav?choose=true"
        });
      },
      // 切换可见性
      changeOpen() {
        uni.showActionSheet({
          itemList: isOpenArray,
          success: (res) => {
            this.isOpen = res.tapIndex;
          }
        });
      },
      // 返回上一步
      goBack() {
        uni.navigateBack({ delta: 1 });
      },
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
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = vue.resolveComponent("uni-nav-bar");
    const _component_upload_image = vue.resolveComponent("upload-image");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义导航 "),
      vue.createVNode(_component_uni_nav_bar, {
        "left-icon": "back",
        statusBar: "",
        border: false,
        onClickLeft: $options.goBack
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "flex align-center justify-center w-100",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.changeOpen && $options.changeOpen(...args))
          }, [
            vue.createTextVNode(
              vue.toDisplayString($options.isOpenText),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "iconfont icon-shezhi1" })
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClickLeft"]),
      vue.createCommentVNode(" 自定义导航 "),
      vue.createCommentVNode(' <uni-nav-bar left-icon="back" statusBar :border="false" @click-left="back">\r\n			<view class="flex align-center justify-center w-100" @click="changeOpen">\r\n			{{isOpenText}}<text class="iconfont icon-shezhi1"></text>\r\n			</view>\r\n		</uni-nav-bar> '),
      vue.createCommentVNode(" 文本域组件 "),
      vue.withDirectives(vue.createElementVNode(
        "textarea",
        {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.content = $event),
          placeholder: "说一句话吧~",
          class: "w-100 px-2"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vModelText, $data.content]
      ]),
      vue.createCommentVNode(" 选中的分类 "),
      vue.createElementVNode("view", { class: "font-md px-2 py-1 flex" }, [
        vue.createElementVNode("view", {
          class: "border px-3 py text-dark flex align-center justify-center",
          style: { "border-radius": "50rpx" }
        }, [
          vue.createElementVNode("text", { class: "iconfont icon-huatifuhao mr-1" }),
          vue.createTextVNode(
            " " + vue.toDisplayString($options.post_class_name ? "所属分类：" + $options.post_class_name : "请选择分类"),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createCommentVNode(" 选中的话题 "),
      vue.createElementVNode("view", { class: "font-md px-2 py-1 flex" }, [
        vue.createElementVNode("view", {
          class: "border px-3 py text-dark flex align-center justify-center",
          style: { "border-radius": "50rpx" }
        }, [
          vue.createElementVNode("text", { class: "iconfont icon-huatifuhao mr-1" }),
          vue.createTextVNode(
            " " + vue.toDisplayString($data.topic.title ? "所属话题：" + $data.topic.title : "请选择话题"),
            1
            /* TEXT */
          )
        ])
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
        vue.createElementVNode("picker", {
          mode: "selector",
          range: $options.range,
          onChange: _cache[2] || (_cache[2] = (...args) => $options.choosePostClass && $options.choosePostClass(...args))
        }, [
          vue.createElementVNode("view", {
            class: "footer-btn iconfont icon-caidan animated faster",
            "hover-calss": "jello"
          })
        ], 40, ["range"]),
        vue.createElementVNode("view", {
          class: "footer-btn iconfont icon-huatifuhao animated faster",
          "hover-calss": "jello",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.chooseTopic && $options.chooseTopic(...args))
        }),
        vue.createElementVNode("view", {
          class: "footer-btn iconfont icon-tupian animated faster",
          "hover-calss": "jello",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.iconclick("uploadImage"))
        }),
        vue.createElementVNode("view", {
          class: "bg-color text-white ml-auto flex justify-center align-center rounded mr-3 animated faster",
          style: { "width": "140rpx", "height": "60rpx" },
          "hover-class": "bounce",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.submit && $options.submit(...args))
        }, "发送")
      ])
    ]);
  }
  const PagesAddInputAddInput = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__file", "F:/project/社区交友/pages/add-input/add-input.vue"]]);
  const _sfc_main$n = {
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
      uni.navigateTo({
        url: "/pages/search/search?type=post"
      });
    },
    //监听导航按钮点击事件
    onNavigationBarButtonTap() {
      uni.navigateTo({
        url: "/pages/add-input/add-input"
      });
    },
    onLoad(e) {
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - uni.upx2px(100);
        }
      });
      this.getData();
      if (e.choose) {
        uni.setNavigationBarTitle({
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
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
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
            }, vue.toDisplayString(item.classname), 11, ["id", "onClick"]);
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
                              choose: $data.choose,
                              item: item2,
                              index: index2
                            }, null, 8, ["choose", "item", "index"]),
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
                )) : !item.firstLoad ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 加载中 "),
                    vue.createElementVNode("view", {
                      class: "text-light-muted flex align-center justify-center font-md",
                      style: { "height": "200rpx" }
                    }, "加载中")
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 2 },
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
  const PagesTopicNavTopicNav = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__file", "F:/project/社区交友/pages/topic-nav/topic-nav.vue"]]);
  const _sfc_main$m = {
    props: ["info"]
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
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
  const topicInfo = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "F:/project/社区交友/components/topic-detail/topic-info.vue"]]);
  const _sfc_main$l = {
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
        uni.setNavigationBarTitle({
          title: this.info.title
        });
      }
      this.getData();
      uni.$on("updateFollowOrLiked", (e2) => {
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
      uni.$off("updateFollowOrLiked", (e) => {
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
        uni.showToast({
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
        uni.showToast({
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
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesTopicDetailTopicDetail = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "F:/project/社区交友/pages/topic-detail/topic-detail.vue"]]);
  const _sfc_main$k = {
    components: {
      loadMore,
      noThing,
      userList: __easycom_0,
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
        url: "/pages/search/search?type=user"
      });
    },
    onNavigationBarButtonTap() {
      uni.navigateBack({
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
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
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
                vue.toDisplayString(item.num | _ctx.formatNum),
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
  const PagesFriendListFriendList = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "F:/project/社区交友/pages/friend-list/friend-list.vue"]]);
  const _sfc_main$j = {
    props: {
      item: Object,
      index: Number,
      pretime: [Number, String]
    },
    computed: {
      // 是否是登录用户本人
      isSelf() {
        let myId = this.$store.state.user.id;
        return myId === this.item.user_id;
      },
      // 转换时间
      shortTime() {
        return $T.getChatTime(this.item.create_time, this.pretime);
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 时间 "),
      $options.shortTime ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "flex align-center justify-center font-sm text-light-muted"
        },
        vue.toDisplayString($options.shortTime),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 消息气泡 "),
      vue.createElementVNode(
        "view",
        {
          class: "flex align-center px-2 my-2",
          style: vue.normalizeStyle($options.isSelf ? "flex-direction: row-reverse" : "")
        },
        [
          vue.createElementVNode("image", {
            src: $props.item.headshot ? $props.item.headshot : "/static/common/demo6.jpg",
            class: "rounded-circle",
            style: { "width": "100rpx", "height": "100rpx" }
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "view",
            {
              class: "bg-light p-2 rounded mx-2",
              style: { "max-width": "400rpx" }
            },
            vue.toDisplayString($props.item.content),
            1
            /* TEXT */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const userChatPage = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "F:/project/社区交友/components/users-chat/user-chat-page.vue"]]);
  const _sfc_main$i = {
    props: {
      focus: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        content: ""
      };
    },
    methods: {
      submit() {
        if (this.content === "") {
          return uni.showToast({
            title: "消息不能为空",
            icon: "none"
          });
        }
        this.$emit("submit", this.content);
        this.content = "";
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "fixed-bottom flex align-center border-top bg-white",
      style: { "height": "100rpx" }
    }, [
      vue.withDirectives(vue.createElementVNode("input", {
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.content = $event),
        class: "flex-1 rounded bg-light ml-2",
        style: { "padding": "5rpx" },
        focus: $props.focus,
        placeholder: "文明发言",
        onConfirm: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args)),
        onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("blur"))
      }, null, 40, ["focus"]), [
        [vue.vModelText, $data.content]
      ]),
      vue.createElementVNode("view", {
        class: "iconfont icon-fabu flex align-center justify-center font-md animated",
        style: { "width": "100rpx" },
        "hover-class": "rubberBand color-global",
        onClick: _cache[3] || (_cache[3] = ($event) => $options.submit())
      })
    ]);
  }
  const bottomInput = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "F:/project/社区交友/components/common/bottom-input.vue"]]);
  const _sfc_main$h = {
    components: {
      userChatPage,
      bottomInput
    },
    data() {
      return {
        scrollInto: "",
        content2: "",
        scrollH: 500,
        list: []
      };
    },
    // 页面加载完成的时候滚动到底部
    onReady() {
      this.toBottom();
    },
    onLoad(e) {
      uni.getSystemInfo({
        success: (res) => {
          this.scrollH = res.windowHeight - uni.upx2px(101);
        }
      });
      if (!e.user) {
        uni.navigateBack({
          delta: 1
        });
        return uni.showToast({
          title: "聊天对象不存在",
          icon: "none"
        });
      }
      let ToUser = JSON.parse(e.user);
      this.$store.commit("createToUser", ToUser);
      this.$store.dispatch("getChatDetailToUser").then((list) => {
        this.list = list;
      });
      uni.$on("UserChat", (res) => {
        formatAppLog("log", "at pages/users-chat/users-chat.vue:70", "[user-chat]chatmsg", res);
        if (res.form_id === ToUser.user_id) {
          this.randerPage({
            data: res,
            send: false
          });
        }
      });
    },
    // 页面销毁之前
    beforeDestroy() {
      this.$store.commit("closeToUser");
      uni.$off("UserChat", () => {
      });
    },
    methods: {
      // 渲染到页面
      randerPage(e) {
        this.$store.dispatch("formatChatDetailObject", e).then((msg) => {
          this.list.push(msg);
          this.toBottom();
        });
      },
      // 发送
      async submit(data) {
        let result = await this.$store.dispatch("sendChatMessage", {
          data,
          type: "text"
        });
        this.$H.post("/chat/send", result, {
          token: true
        }).then((res) => {
          this.randerPage({
            data: result,
            send: true
          });
        });
      },
      // 滚动到底部
      toBottom() {
        let lastIndex = this.list.length - 1;
        if (lastIndex < 0)
          return;
        this.scrollInto = "chat" + lastIndex;
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_user_chat_page = vue.resolveComponent("user-chat-page");
    const _component_bottom_input = vue.resolveComponent("bottom-input");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 聊天列表 "),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        style: vue.normalizeStyle("height:" + $data.scrollH + "px;"),
        "scroll-into-view": $data.scrollInto,
        "scroll-with-animation": ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              id: "chat" + index
            }, [
              vue.createVNode(_component_user_chat_page, {
                item,
                index,
                pretime: index > 0 ? $data.list[index - 1].create_time : 0
              }, null, 8, ["item", "index", "pretime"])
            ], 8, ["id"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 12, ["scroll-into-view"]),
      vue.createCommentVNode(" 底部操作条 "),
      vue.createVNode(_component_bottom_input, { onSubmit: $options.submit }, null, 8, ["onSubmit"]),
      vue.createCommentVNode(' <view class="fixed-bottom flex align-center border-top bg-white" \r\n		style="height: 100rpx;">\r\n			<input type="text" v-model="content2" class="flex-1 rounded bg-light ml-2" \r\n			 style="padding: 5rpx; "placeholder="文明发言" @confirm="submit" />\r\n			<view class="iconfont icon-fabu flex align-center justify-center font-md animated" \r\n			style="width: 100rpx;" hover-class="rubberBand color-global" @click="submit()"></view>\r\n		</view> ')
    ]);
  }
  const PagesUsersChatUsersChat = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "F:/project/社区交友/pages/users-chat/users-chat.vue"]]);
  const _sfc_main$g = {
    components: {
      uniPopup
    },
    data() {
      return {
        title: "",
        shareText: "",
        href: "",
        image: "",
        shareType: 0,
        providerList: [
          {
            name: "微信好友",
            icon: "icon-weixin",
            color: "bg-success",
            id: "weixin"
          },
          {
            name: "新浪微博",
            icon: "icon-qq",
            color: "bg-danger",
            id: "weixin"
          },
          {
            name: "新浪微博",
            icon: "icon-qq",
            color: "bg-danger",
            id: "weixin"
          },
          {
            name: "新浪微博",
            icon: "icon-qq",
            color: "bg-danger",
            id: "weixin"
          }
        ]
      };
    },
    computed: {
      isDisableButton() {
        return function(item) {
          if (this.shareType === 0 && item.id === "qq") {
            return true;
          }
          if (this.shareType === 5 && item.name !== "分享到微信好友") {
            return true;
          }
          return false;
        };
      }
    },
    onShareAppMessage() {
      return {
        title: this.shareText ? this.shareText : "欢迎体验uni-app",
        path: "/pages/tabBar/component/component",
        imageUrl: this.image ? this.image : "https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"
      };
    },
    // 销毁之前
    beforeDestroy() {
      this.shareText = "uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！", this.href = "https://uniapp.dcloud.io", this.image = "";
    },
    onReady() {
      this.loadShareProviders();
    },
    methods: {
      async loadShareProviders() {
        try {
          const res = await uni.getProvider({ service: "share" });
          const providers = [];
          res.provider.forEach((service) => {
            switch (service) {
              case "weixin":
                providers.push({
                  name: "微信好友",
                  icon: "icon-weixin",
                  color: "bg-success",
                  id: "weixin"
                }, {
                  name: "朋友圈",
                  icon: "icon-weixincircle",
                  color: "bg-dark",
                  id: "weixin",
                  type: "WXSenceTimeline"
                });
                break;
              case "sinaweibo":
                providers.push({
                  name: "新浪微博",
                  icon: "icon-weibo",
                  color: "bg-danger",
                  id: "sinaweibo"
                });
                break;
              case "qq":
                providers.push({
                  name: "QQ好友",
                  icon: "icon-qq",
                  color: "bg-primary",
                  id: "qq"
                });
                break;
            }
          });
          this.providerList = providers;
        } catch (e) {
          formatAppLog("error", "at components/common/share-to.vue:129", "获取分享服务失败", e);
          uni.showToast({
            title: "分享功能初始化失败",
            icon: "none"
          });
        }
      },
      open(options) {
        this.title = options.title;
        this.shareText = options.shareText;
        this.href = options.href;
        this.image = options.image;
        formatAppLog("log", "at components/common/share-to.vue:141", options);
        this.$refs.popup.open();
      },
      close() {
        this.$refs.popup.close();
      },
      async share(e) {
        if (!e.id) {
          uni.showToast({
            title: "分享服务未就绪",
            icon: "none"
          });
          return;
        }
        formatAppLog("log", "at components/common/share-to.vue:156", "分享通道:" + e.id + "； 分享类型:" + this.shareType);
        if (!this.shareText && (this.shareType === 1 || this.shareType === 0)) {
          uni.showModal({
            content: "分享内容不能为空",
            showCancel: false
          });
          return;
        }
        if (!this.image && (this.shareType === 2 || this.shareType === 0)) {
          uni.showModal({
            content: "分享图片不能为空",
            showCancel: false
          });
          return;
        }
        let shareOPtions = {
          provider: e.id,
          scene: e.type && e.type === "WXSenceTimeline" ? "WXSenceTimeline" : "WXSceneSession",
          //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
          type: this.shareType,
          success: (e2) => {
            formatAppLog("log", "at components/common/share-to.vue:179", "success", e2);
            uni.showModal({
              content: "已分享",
              showCancel: false
            });
          },
          fail: (e2) => {
            formatAppLog("log", "at components/common/share-to.vue:186", "fail", e2);
            uni.showModal({
              content: e2.errMsg,
              showCancel: false
            });
          },
          complete: function() {
            formatAppLog("log", "at components/common/share-to.vue:193", "分享操作结束!");
          }
        };
        switch (this.shareType) {
          case 0:
            shareOPtions.summary = this.shareText;
            shareOPtions.imageUrl = this.image;
            shareOPtions.title = "欢迎体验uniapp";
            shareOPtions.href = "https://uniapp.dcloud.io";
            break;
          case 1:
            shareOPtions.summary = this.shareText;
            break;
          case 2:
            shareOPtions.imageUrl = this.image;
            break;
          case 5:
            shareOPtions.imageUrl = this.image ? this.image : "https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png";
            shareOPtions.title = "欢迎体验uniapp";
            shareOPtions.miniProgram = {
              id: "gh_33446d7f7a26",
              path: "/pages/tabBar/component/component",
              webUrl: "https://uniapp.dcloud.io",
              type: 0
            };
            break;
        }
        if (shareOPtions.type === 0 && plus.os.name === "iOS") {
          shareOPtions.imageUrl = await this.compress();
        }
        if (shareOPtions.type === 1 && shareOPtions.provider === "qq") {
          shareOPtions.href = "https://uniapp.dcloud.io";
          shareOPtions.title = "欢迎体验uniapp";
        }
        uni.share(shareOPtions);
      },
      compress() {
        formatAppLog("log", "at components/common/share-to.vue:234", "开始压缩");
        let img = this.image;
        return new Promise((res) => {
          var localPath = plus.io.convertAbsoluteFileSystem(img.replace("file://", ""));
          formatAppLog("log", "at components/common/share-to.vue:238", "after" + localPath);
          plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
            entry.file((file) => {
              formatAppLog("log", "at components/common/share-to.vue:242", "getFile:" + JSON.stringify(file));
              if (file.size > 20480) {
                plus.zip.compressImage({
                  src: img,
                  dst: img.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG"),
                  width: "10%",
                  height: "10%",
                  quality: 1,
                  overwrite: true
                }, (event) => {
                  formatAppLog("log", "at components/common/share-to.vue:252", "success zip****" + event.size);
                  let newImg = img.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG");
                  res(newImg);
                }, function(error) {
                  uni.showModal({
                    content: "分享图片太大,需要请重新选择图片!",
                    showCancel: false
                  });
                });
              }
            });
          }, (e) => {
            formatAppLog("log", "at components/common/share-to.vue:264", "Resolve file URL failed: " + e.message);
            uni.showModal({
              content: "分享图片太大,需要请重新选择图片!",
              showCancel: false
            });
          });
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = vue.resolveComponent("uni-popup");
    return vue.openBlock(), vue.createBlock(
      _component_uni_popup,
      {
        ref: "popup",
        type: "bottom"
      },
      {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "color-aliceblue" }, [
            vue.createElementVNode("view", { class: "text-center py-2 font-md border-bottom border-light-secondary" }, "分享到"),
            vue.createElementVNode("view", { class: "flex align-center" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.providerList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "flex-1 flex flex-column align-center justify-center py-2",
                    key: index,
                    "hover-class": "bg-light",
                    onClick: ($event) => $options.share(item)
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["iconfont text-white flex align-center justify-center font-lg rounded-circle", item.icon + " " + item.color]),
                        style: { "width": "100rpx", "height": "100rpx" }
                      },
                      null,
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "font mt-1 text-muted" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", {
              class: "text-center py-2 font-md border-top border-light-secondary",
              "hover-class": "bg-light",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.close())
            }, "取消")
          ])
        ]),
        _: 1
        /* STABLE */
      },
      512
      /* NEED_PATCH */
    );
  }
  const shareTo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "F:/project/社区交友/components/common/share-to.vue"]]);
  const _sfc_main$f = {
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
      uni.$on("updateFollowOrLiked", (e2) => {
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
      uni.$off("updateFollowOrLiked", (e) => {
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
    methods: {
      __init(data) {
        uni.setNavigationBarTitle({
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
        uni.showToast({
          title: "关注成功"
        });
      },
      // 顶踩操作
      liked(e) {
        if (this.info.liked.type === e.type) {
          return uni.showToast({
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
        uni.showToast({
          title: msg
        });
      },
      // 预览图片
      preview(index) {
        uni.previewImage({
          current: index,
          urls: this.imagesList
        });
      },
      // 提交评论
      submit(data) {
        if (data === "") {
          return uni.showToast({
            title: "评论不能为空",
            icon: "none"
          });
        }
        uni.showLoading({
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
          uni.hideLoading();
          this.temp_reply_id = 0;
          this.getComment();
        }).catch((err) => {
          uni.hideLoading();
          this.temp_reply_id = 0;
        });
      },
      // 获取评论
      getComment() {
        this.$H.get("/post/" + this.info.id + "/comment").then((res) => {
          this.comments = this.__ArrSort(res.data.data.list);
          this.info.comment_count = this.comments.length;
          uni.$emit("updateCommentsCount", {
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
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_share_to = vue.resolveComponent("share-to");
    const _component_bottom_input = vue.resolveComponent("bottom-input");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 帖子详情页详细信息 "),
      vue.createVNode(_component_common_list, {
        item: $data.info,
        isdetail: "",
        onDoComment: $options.doComment,
        onShared: $options.shared,
        onFollow: $options.follow,
        onLiked: $options.liked
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString($data.info.content),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.images, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("image", {
                  src: item.url,
                  class: "w-100",
                  mode: "widthFix",
                  onClick: ($event) => $options.preview(index)
                }, null, 8, ["src", "onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["item", "onDoComment", "onShared", "onFollow", "onLiked"]),
      vue.createElementVNode("view", { class: "divider" }),
      vue.createElementVNode(
        "view",
        { class: "p-2 font-md font-weight-bold" },
        " 最新评论 " + vue.toDisplayString($data.comments.length),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "px-2" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.comments, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "uni-comment-list",
              key: index
            }, [
              item.fid ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                style: { "width": "60rpx" }
              })) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["flex w-100", item.fid ? "bg-light rounded p-2" : ""])
                },
                [
                  vue.createElementVNode("view", { class: "uni-comment-face" }, [
                    vue.createElementVNode("image", {
                      src: item.userpic,
                      mode: "widthFix"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "uni-comment-body" }, [
                    vue.createElementVNode("view", { class: "uni-comment-top" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.username),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", {
                      class: "uni-comment-content",
                      onClick: ($event) => $options.reply(item.id)
                    }, vue.toDisplayString(item.data), 9, ["onClick"]),
                    vue.createElementVNode("view", { class: "uni-comment-date" }, [
                      vue.createElementVNode(
                        "view",
                        null,
                        vue.toDisplayString(item.time),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ],
                2
                /* CLASS */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 弹出分享 "),
      vue.createVNode(
        _component_share_to,
        { ref: "share" },
        null,
        512
        /* NEED_PATCH */
      ),
      vue.createCommentVNode(" 占位 "),
      vue.createElementVNode("view", { style: { "height": "100rpx" } }),
      vue.createCommentVNode(" 底部发送框 "),
      vue.createVNode(_component_bottom_input, {
        focus: $data.focus,
        onBlur: $options.blur,
        onSubmit: $options.submit
      }, null, 8, ["focus", "onBlur", "onSubmit"])
    ]);
  }
  const PagesPostDetailPostDetail = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "F:/project/社区交友/pages/post-detail/post-detail.vue"]]);
  const _sfc_main$e = {
    components: {
      uniList,
      uniListItem
    },
    data() {
      return {
        currentSize: 0
      };
    },
    onLoad() {
      this.getStorageInfo();
    },
    computed: {
      ...mapState({
        loginStatus: (state) => state.loginStatus
      })
    },
    methods: {
      getStorageInfo() {
        let res = uni.getStorageInfoSync();
        this.currentSize = (res.currentSize / 1024).toFixed(2) + "KB";
      },
      open(path) {
        uni.navigateTo({
          url: `/pages/${path}/${path}`
        });
      },
      // 清除缓存
      clear() {
        uni.showModal({
          title: "提示",
          content: "是否要清除缓存",
          cancelText: "不清除",
          confirmText: "清除",
          success: (res) => {
            if (res.confirm) {
              uni.clearStorageSync();
              this.getStorageInfo();
              uni.showToast({
                title: "清除成功"
              });
            }
          }
        });
      },
      // 退出登录
      logout() {
        uni.showModal({
          content: "是否要退出登录",
          success: (res) => {
            if (res.confirm) {
              this.$store.commit("logout");
              this.$store.dispatch("closeSocket");
              uni.navigateBack({
                delta: 1
              });
              uni.showToast({
                title: "退出登录成功",
                icon: "none"
              });
            }
          }
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list_item = vue.resolveComponent("uni-list-item");
    const _component_uni_list = vue.resolveComponent("uni-list");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          _ctx.loginStatus ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [
              vue.createVNode(_component_uni_list_item, {
                title: "账号与安全",
                onClick: _cache[0] || (_cache[0] = ($event) => $options.open("user-safe"))
              }),
              vue.createVNode(_component_uni_list_item, {
                title: "资料编辑",
                onClick: _cache[1] || (_cache[1] = ($event) => $options.open("user-ownerinfo"))
              })
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true),
          vue.createVNode(_component_uni_list_item, {
            title: "清除缓存",
            onClick: $options.clear
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode(
                "text",
                { slot: "right" },
                vue.toDisplayString($data.currentSize),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          _ctx.loginStatus ? (vue.openBlock(), vue.createBlock(_component_uni_list_item, {
            key: 1,
            title: "意见反馈",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.open("user-feedback"))
          })) : vue.createCommentVNode("v-if", true),
          vue.createVNode(_component_uni_list_item, {
            title: "关于社区",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.open("about"))
          }),
          _ctx.loginStatus ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "py-2 px-3"
          }, [
            vue.createElementVNode("button", {
              class: "bg-color text-white",
              style: { "border-radius": "50rpx", "border": "0" },
              type: "primary",
              onClick: _cache[4] || (_cache[4] = (...args) => $options.logout && $options.logout(...args))
            }, "退出登录")
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesUserSettingUserSetting = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "F:/project/社区交友/pages/user-setting/user-setting.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        oldpassword: "",
        newpassword: "",
        renewpassword: ""
      };
    },
    computed: {
      ...mapState({
        user: (state) => state.user
      }),
      disabled() {
        if (this.user.password) {
          return this.oldpassword == "" || this.newpassword == "" || this.renewpassword == "";
        }
        return this.newpassword == "" || this.renewpassword == "";
      }
    },
    methods: {
      // 验证密码
      check() {
        if (this.newpassword !== this.renewpassword) {
          uni.showToast({
            title: "两次密码不一样",
            icon: "none"
          });
          return;
        }
        return true;
      },
      submit() {
        if (!this.check()) {
          return;
        }
        this.$H.post("/repassword", {
          oldpassword: this.oldpassword,
          newpassword: this.newpassword,
          renewpassword: this.renewpassword
        }, {
          token: true
        }).then((res) => {
          this.$store.commit("editUserInfo", {
            key: "password",
            value: true
          });
          uni.navigateBack({
            delta: 1
          });
          uni.showToast({
            title: "修改密码成功",
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      _ctx.user.password ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
        "input",
        {
          key: 0,
          class: "uni-input",
          type: "text",
          placeholder: "输入旧密码",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.oldpassword = $event)
        },
        null,
        512
        /* NEED_PATCH */
      )), [
        [vue.vModelText, $data.oldpassword]
      ]) : vue.createCommentVNode("v-if", true),
      vue.withDirectives(vue.createElementVNode(
        "input",
        {
          class: "uni-input",
          ype: "text",
          placeholder: "输入新密码",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.newpassword = $event)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vModelText, $data.newpassword]
      ]),
      vue.withDirectives(vue.createElementVNode(
        "input",
        {
          class: "uni-input",
          type: "text",
          placeholder: "确认新密码",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.renewpassword = $event)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vModelText, $data.renewpassword]
      ]),
      vue.createElementVNode("view", { class: "py-2 px-3" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["bg-color text-white", $options.disabled ? "bg-color-disabled" : ""]),
          style: { "border-radius": "50rpx", "border": "0" },
          type: "primary",
          disabled: $options.disabled,
          onClick: _cache[3] || (_cache[3] = (...args) => $options.submit && $options.submit(...args))
        }, "设置", 10, ["disabled"])
      ])
    ]);
  }
  const PagesUserPasswordUserPassword = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "F:/project/社区交友/pages/user-password/user-password.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        email: ""
      };
    },
    computed: {
      ...mapState({
        user: (state) => state.user
      }),
      disabled() {
        return this.email === "";
      }
    },
    onLoad() {
      if (this.user.email) {
        this.email = this.user.email;
      }
    },
    methods: {
      // 验证密码
      check() {
        let rule = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!rule.test(this.email)) {
          uni.showToast({
            title: "邮箱格式不正确",
            icon: "none"
          });
          return false;
        }
        return true;
      },
      submit() {
        if (!this.check()) {
          return;
        }
        this.$H.post("/user/bindemail", {
          email: this.email
        }, {
          token: true
        }).then((res) => {
          this.$store.commit("editUserInfo", {
            key: "email",
            value: this.email
          });
          uni.navigateBack({
            delta: 1
          });
          uni.showToast({
            title: "修改邮箱成功",
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.withDirectives(vue.createElementVNode("input", {
        class: "uni-input",
        type: "text",
        placeholder: "请输入你想要绑定的邮箱",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.email = $event),
        disabled: this.user.email
      }, null, 8, ["disabled"]), [
        [vue.vModelText, $data.email]
      ]),
      vue.createElementVNode("view", { class: "py-2 px-3" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["bg-color text-white", $options.disabled ? "bg-color-disabled" : ""]),
          style: { "border-radius": "50rpx", "border": "0" },
          type: "primary",
          disabled: $options.disabled || this.user.email,
          onClick: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args))
        }, "绑定", 10, ["disabled"])
      ])
    ]);
  }
  const PagesUserEmailUserEmail = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "F:/project/社区交友/pages/user-email/user-email.vue"]]);
  var provinceData = [
    {
      "label": "北京市",
      "value": "11"
    },
    {
      "label": "天津市",
      "value": "12"
    },
    {
      "label": "河北省",
      "value": "13"
    },
    {
      "label": "山西省",
      "value": "14"
    },
    {
      "label": "内蒙古自治区",
      "value": "15"
    },
    {
      "label": "辽宁省",
      "value": "21"
    },
    {
      "label": "吉林省",
      "value": "22"
    },
    {
      "label": "黑龙江省",
      "value": "23"
    },
    {
      "label": "上海市",
      "value": "31"
    },
    {
      "label": "江苏省",
      "value": "32"
    },
    {
      "label": "浙江省",
      "value": "33"
    },
    {
      "label": "安徽省",
      "value": "34"
    },
    {
      "label": "福建省",
      "value": "35"
    },
    {
      "label": "江西省",
      "value": "36"
    },
    {
      "label": "山东省",
      "value": "37"
    },
    {
      "label": "河南省",
      "value": "41"
    },
    {
      "label": "湖北省",
      "value": "42"
    },
    {
      "label": "湖南省",
      "value": "43"
    },
    {
      "label": "广东省",
      "value": "44"
    },
    {
      "label": "广西壮族自治区",
      "value": "45"
    },
    {
      "label": "海南省",
      "value": "46"
    },
    {
      "label": "重庆市",
      "value": "50"
    },
    {
      "label": "四川省",
      "value": "51"
    },
    {
      "label": "贵州省",
      "value": "52"
    },
    {
      "label": "云南省",
      "value": "53"
    },
    {
      "label": "西藏自治区",
      "value": "54"
    },
    {
      "label": "陕西省",
      "value": "61"
    },
    {
      "label": "甘肃省",
      "value": "62"
    },
    {
      "label": "青海省",
      "value": "63"
    },
    {
      "label": "宁夏回族自治区",
      "value": "64"
    },
    {
      "label": "新疆维吾尔自治区",
      "value": "65"
    },
    {
      "label": "台湾",
      "value": "66"
    },
    {
      "label": "香港",
      "value": "67"
    },
    {
      "label": "澳门",
      "value": "68"
    }
  ];
  var cityData = [
    [{
      "label": "市辖区",
      "value": "1101"
    }],
    [{
      "label": "市辖区",
      "value": "1201"
    }],
    [
      {
        "label": "石家庄市",
        "value": "1301"
      },
      {
        "label": "唐山市",
        "value": "1302"
      },
      {
        "label": "秦皇岛市",
        "value": "1303"
      },
      {
        "label": "邯郸市",
        "value": "1304"
      },
      {
        "label": "邢台市",
        "value": "1305"
      },
      {
        "label": "保定市",
        "value": "1306"
      },
      {
        "label": "张家口市",
        "value": "1307"
      },
      {
        "label": "承德市",
        "value": "1308"
      },
      {
        "label": "沧州市",
        "value": "1309"
      },
      {
        "label": "廊坊市",
        "value": "1310"
      },
      {
        "label": "衡水市",
        "value": "1311"
      }
    ],
    [
      {
        "label": "太原市",
        "value": "1401"
      },
      {
        "label": "大同市",
        "value": "1402"
      },
      {
        "label": "阳泉市",
        "value": "1403"
      },
      {
        "label": "长治市",
        "value": "1404"
      },
      {
        "label": "晋城市",
        "value": "1405"
      },
      {
        "label": "朔州市",
        "value": "1406"
      },
      {
        "label": "晋中市",
        "value": "1407"
      },
      {
        "label": "运城市",
        "value": "1408"
      },
      {
        "label": "忻州市",
        "value": "1409"
      },
      {
        "label": "临汾市",
        "value": "1410"
      },
      {
        "label": "吕梁市",
        "value": "1411"
      }
    ],
    [
      {
        "label": "呼和浩特市",
        "value": "1501"
      },
      {
        "label": "包头市",
        "value": "1502"
      },
      {
        "label": "乌海市",
        "value": "1503"
      },
      {
        "label": "赤峰市",
        "value": "1504"
      },
      {
        "label": "通辽市",
        "value": "1505"
      },
      {
        "label": "鄂尔多斯市",
        "value": "1506"
      },
      {
        "label": "呼伦贝尔市",
        "value": "1507"
      },
      {
        "label": "巴彦淖尔市",
        "value": "1508"
      },
      {
        "label": "乌兰察布市",
        "value": "1509"
      },
      {
        "label": "兴安盟",
        "value": "1522"
      },
      {
        "label": "锡林郭勒盟",
        "value": "1525"
      },
      {
        "label": "阿拉善盟",
        "value": "1529"
      }
    ],
    [
      {
        "label": "沈阳市",
        "value": "2101"
      },
      {
        "label": "大连市",
        "value": "2102"
      },
      {
        "label": "鞍山市",
        "value": "2103"
      },
      {
        "label": "抚顺市",
        "value": "2104"
      },
      {
        "label": "本溪市",
        "value": "2105"
      },
      {
        "label": "丹东市",
        "value": "2106"
      },
      {
        "label": "锦州市",
        "value": "2107"
      },
      {
        "label": "营口市",
        "value": "2108"
      },
      {
        "label": "阜新市",
        "value": "2109"
      },
      {
        "label": "辽阳市",
        "value": "2110"
      },
      {
        "label": "盘锦市",
        "value": "2111"
      },
      {
        "label": "铁岭市",
        "value": "2112"
      },
      {
        "label": "朝阳市",
        "value": "2113"
      },
      {
        "label": "葫芦岛市",
        "value": "2114"
      }
    ],
    [
      {
        "label": "长春市",
        "value": "2201"
      },
      {
        "label": "吉林市",
        "value": "2202"
      },
      {
        "label": "四平市",
        "value": "2203"
      },
      {
        "label": "辽源市",
        "value": "2204"
      },
      {
        "label": "通化市",
        "value": "2205"
      },
      {
        "label": "白山市",
        "value": "2206"
      },
      {
        "label": "松原市",
        "value": "2207"
      },
      {
        "label": "白城市",
        "value": "2208"
      },
      {
        "label": "延边朝鲜族自治州",
        "value": "2224"
      }
    ],
    [
      {
        "label": "哈尔滨市",
        "value": "2301"
      },
      {
        "label": "齐齐哈尔市",
        "value": "2302"
      },
      {
        "label": "鸡西市",
        "value": "2303"
      },
      {
        "label": "鹤岗市",
        "value": "2304"
      },
      {
        "label": "双鸭山市",
        "value": "2305"
      },
      {
        "label": "大庆市",
        "value": "2306"
      },
      {
        "label": "伊春市",
        "value": "2307"
      },
      {
        "label": "佳木斯市",
        "value": "2308"
      },
      {
        "label": "七台河市",
        "value": "2309"
      },
      {
        "label": "牡丹江市",
        "value": "2310"
      },
      {
        "label": "黑河市",
        "value": "2311"
      },
      {
        "label": "绥化市",
        "value": "2312"
      },
      {
        "label": "大兴安岭地区",
        "value": "2327"
      }
    ],
    [{
      "label": "市辖区",
      "value": "3101"
    }],
    [
      {
        "label": "南京市",
        "value": "3201"
      },
      {
        "label": "无锡市",
        "value": "3202"
      },
      {
        "label": "徐州市",
        "value": "3203"
      },
      {
        "label": "常州市",
        "value": "3204"
      },
      {
        "label": "苏州市",
        "value": "3205"
      },
      {
        "label": "南通市",
        "value": "3206"
      },
      {
        "label": "连云港市",
        "value": "3207"
      },
      {
        "label": "淮安市",
        "value": "3208"
      },
      {
        "label": "盐城市",
        "value": "3209"
      },
      {
        "label": "扬州市",
        "value": "3210"
      },
      {
        "label": "镇江市",
        "value": "3211"
      },
      {
        "label": "泰州市",
        "value": "3212"
      },
      {
        "label": "宿迁市",
        "value": "3213"
      }
    ],
    [
      {
        "label": "杭州市",
        "value": "3301"
      },
      {
        "label": "宁波市",
        "value": "3302"
      },
      {
        "label": "温州市",
        "value": "3303"
      },
      {
        "label": "嘉兴市",
        "value": "3304"
      },
      {
        "label": "湖州市",
        "value": "3305"
      },
      {
        "label": "绍兴市",
        "value": "3306"
      },
      {
        "label": "金华市",
        "value": "3307"
      },
      {
        "label": "衢州市",
        "value": "3308"
      },
      {
        "label": "舟山市",
        "value": "3309"
      },
      {
        "label": "台州市",
        "value": "3310"
      },
      {
        "label": "丽水市",
        "value": "3311"
      }
    ],
    [
      {
        "label": "合肥市",
        "value": "3401"
      },
      {
        "label": "芜湖市",
        "value": "3402"
      },
      {
        "label": "蚌埠市",
        "value": "3403"
      },
      {
        "label": "淮南市",
        "value": "3404"
      },
      {
        "label": "马鞍山市",
        "value": "3405"
      },
      {
        "label": "淮北市",
        "value": "3406"
      },
      {
        "label": "铜陵市",
        "value": "3407"
      },
      {
        "label": "安庆市",
        "value": "3408"
      },
      {
        "label": "黄山市",
        "value": "3410"
      },
      {
        "label": "滁州市",
        "value": "3411"
      },
      {
        "label": "阜阳市",
        "value": "3412"
      },
      {
        "label": "宿州市",
        "value": "3413"
      },
      {
        "label": "六安市",
        "value": "3415"
      },
      {
        "label": "亳州市",
        "value": "3416"
      },
      {
        "label": "池州市",
        "value": "3417"
      },
      {
        "label": "宣城市",
        "value": "3418"
      }
    ],
    [
      {
        "label": "福州市",
        "value": "3501"
      },
      {
        "label": "厦门市",
        "value": "3502"
      },
      {
        "label": "莆田市",
        "value": "3503"
      },
      {
        "label": "三明市",
        "value": "3504"
      },
      {
        "label": "泉州市",
        "value": "3505"
      },
      {
        "label": "漳州市",
        "value": "3506"
      },
      {
        "label": "南平市",
        "value": "3507"
      },
      {
        "label": "龙岩市",
        "value": "3508"
      },
      {
        "label": "宁德市",
        "value": "3509"
      }
    ],
    [
      {
        "label": "南昌市",
        "value": "3601"
      },
      {
        "label": "景德镇市",
        "value": "3602"
      },
      {
        "label": "萍乡市",
        "value": "3603"
      },
      {
        "label": "九江市",
        "value": "3604"
      },
      {
        "label": "新余市",
        "value": "3605"
      },
      {
        "label": "鹰潭市",
        "value": "3606"
      },
      {
        "label": "赣州市",
        "value": "3607"
      },
      {
        "label": "吉安市",
        "value": "3608"
      },
      {
        "label": "宜春市",
        "value": "3609"
      },
      {
        "label": "抚州市",
        "value": "3610"
      },
      {
        "label": "上饶市",
        "value": "3611"
      }
    ],
    [
      {
        "label": "济南市",
        "value": "3701"
      },
      {
        "label": "青岛市",
        "value": "3702"
      },
      {
        "label": "淄博市",
        "value": "3703"
      },
      {
        "label": "枣庄市",
        "value": "3704"
      },
      {
        "label": "东营市",
        "value": "3705"
      },
      {
        "label": "烟台市",
        "value": "3706"
      },
      {
        "label": "潍坊市",
        "value": "3707"
      },
      {
        "label": "济宁市",
        "value": "3708"
      },
      {
        "label": "泰安市",
        "value": "3709"
      },
      {
        "label": "威海市",
        "value": "3710"
      },
      {
        "label": "日照市",
        "value": "3711"
      },
      {
        "label": "莱芜市",
        "value": "3712"
      },
      {
        "label": "临沂市",
        "value": "3713"
      },
      {
        "label": "德州市",
        "value": "3714"
      },
      {
        "label": "聊城市",
        "value": "3715"
      },
      {
        "label": "滨州市",
        "value": "3716"
      },
      {
        "label": "菏泽市",
        "value": "3717"
      }
    ],
    [
      {
        "label": "郑州市",
        "value": "4101"
      },
      {
        "label": "开封市",
        "value": "4102"
      },
      {
        "label": "洛阳市",
        "value": "4103"
      },
      {
        "label": "平顶山市",
        "value": "4104"
      },
      {
        "label": "安阳市",
        "value": "4105"
      },
      {
        "label": "鹤壁市",
        "value": "4106"
      },
      {
        "label": "新乡市",
        "value": "4107"
      },
      {
        "label": "焦作市",
        "value": "4108"
      },
      {
        "label": "濮阳市",
        "value": "4109"
      },
      {
        "label": "许昌市",
        "value": "4110"
      },
      {
        "label": "漯河市",
        "value": "4111"
      },
      {
        "label": "三门峡市",
        "value": "4112"
      },
      {
        "label": "南阳市",
        "value": "4113"
      },
      {
        "label": "商丘市",
        "value": "4114"
      },
      {
        "label": "信阳市",
        "value": "4115"
      },
      {
        "label": "周口市",
        "value": "4116"
      },
      {
        "label": "驻马店市",
        "value": "4117"
      },
      {
        "label": "省直辖县级行政区划",
        "value": "4190"
      }
    ],
    [
      {
        "label": "武汉市",
        "value": "4201"
      },
      {
        "label": "黄石市",
        "value": "4202"
      },
      {
        "label": "十堰市",
        "value": "4203"
      },
      {
        "label": "宜昌市",
        "value": "4205"
      },
      {
        "label": "襄阳市",
        "value": "4206"
      },
      {
        "label": "鄂州市",
        "value": "4207"
      },
      {
        "label": "荆门市",
        "value": "4208"
      },
      {
        "label": "孝感市",
        "value": "4209"
      },
      {
        "label": "荆州市",
        "value": "4210"
      },
      {
        "label": "黄冈市",
        "value": "4211"
      },
      {
        "label": "咸宁市",
        "value": "4212"
      },
      {
        "label": "随州市",
        "value": "4213"
      },
      {
        "label": "恩施土家族苗族自治州",
        "value": "4228"
      },
      {
        "label": "省直辖县级行政区划",
        "value": "4290"
      }
    ],
    [
      {
        "label": "长沙市",
        "value": "4301"
      },
      {
        "label": "株洲市",
        "value": "4302"
      },
      {
        "label": "湘潭市",
        "value": "4303"
      },
      {
        "label": "衡阳市",
        "value": "4304"
      },
      {
        "label": "邵阳市",
        "value": "4305"
      },
      {
        "label": "岳阳市",
        "value": "4306"
      },
      {
        "label": "常德市",
        "value": "4307"
      },
      {
        "label": "张家界市",
        "value": "4308"
      },
      {
        "label": "益阳市",
        "value": "4309"
      },
      {
        "label": "郴州市",
        "value": "4310"
      },
      {
        "label": "永州市",
        "value": "4311"
      },
      {
        "label": "怀化市",
        "value": "4312"
      },
      {
        "label": "娄底市",
        "value": "4313"
      },
      {
        "label": "湘西土家族苗族自治州",
        "value": "4331"
      }
    ],
    [
      {
        "label": "广州市",
        "value": "4401"
      },
      {
        "label": "韶关市",
        "value": "4402"
      },
      {
        "label": "深圳市",
        "value": "4403"
      },
      {
        "label": "珠海市",
        "value": "4404"
      },
      {
        "label": "汕头市",
        "value": "4405"
      },
      {
        "label": "佛山市",
        "value": "4406"
      },
      {
        "label": "江门市",
        "value": "4407"
      },
      {
        "label": "湛江市",
        "value": "4408"
      },
      {
        "label": "茂名市",
        "value": "4409"
      },
      {
        "label": "肇庆市",
        "value": "4412"
      },
      {
        "label": "惠州市",
        "value": "4413"
      },
      {
        "label": "梅州市",
        "value": "4414"
      },
      {
        "label": "汕尾市",
        "value": "4415"
      },
      {
        "label": "河源市",
        "value": "4416"
      },
      {
        "label": "阳江市",
        "value": "4417"
      },
      {
        "label": "清远市",
        "value": "4418"
      },
      {
        "label": "东莞市",
        "value": "4419"
      },
      {
        "label": "中山市",
        "value": "4420"
      },
      {
        "label": "潮州市",
        "value": "4451"
      },
      {
        "label": "揭阳市",
        "value": "4452"
      },
      {
        "label": "云浮市",
        "value": "4453"
      }
    ],
    [
      {
        "label": "南宁市",
        "value": "4501"
      },
      {
        "label": "柳州市",
        "value": "4502"
      },
      {
        "label": "桂林市",
        "value": "4503"
      },
      {
        "label": "梧州市",
        "value": "4504"
      },
      {
        "label": "北海市",
        "value": "4505"
      },
      {
        "label": "防城港市",
        "value": "4506"
      },
      {
        "label": "钦州市",
        "value": "4507"
      },
      {
        "label": "贵港市",
        "value": "4508"
      },
      {
        "label": "玉林市",
        "value": "4509"
      },
      {
        "label": "百色市",
        "value": "4510"
      },
      {
        "label": "贺州市",
        "value": "4511"
      },
      {
        "label": "河池市",
        "value": "4512"
      },
      {
        "label": "来宾市",
        "value": "4513"
      },
      {
        "label": "崇左市",
        "value": "4514"
      }
    ],
    [
      {
        "label": "海口市",
        "value": "4601"
      },
      {
        "label": "三亚市",
        "value": "4602"
      },
      {
        "label": "三沙市",
        "value": "4603"
      },
      {
        "label": "儋州市",
        "value": "4604"
      },
      {
        "label": "省直辖县级行政区划",
        "value": "4690"
      }
    ],
    [
      {
        "label": "市辖区",
        "value": "5001"
      },
      {
        "label": "县",
        "value": "5002"
      }
    ],
    [
      {
        "label": "成都市",
        "value": "5101"
      },
      {
        "label": "自贡市",
        "value": "5103"
      },
      {
        "label": "攀枝花市",
        "value": "5104"
      },
      {
        "label": "泸州市",
        "value": "5105"
      },
      {
        "label": "德阳市",
        "value": "5106"
      },
      {
        "label": "绵阳市",
        "value": "5107"
      },
      {
        "label": "广元市",
        "value": "5108"
      },
      {
        "label": "遂宁市",
        "value": "5109"
      },
      {
        "label": "内江市",
        "value": "5110"
      },
      {
        "label": "乐山市",
        "value": "5111"
      },
      {
        "label": "南充市",
        "value": "5113"
      },
      {
        "label": "眉山市",
        "value": "5114"
      },
      {
        "label": "宜宾市",
        "value": "5115"
      },
      {
        "label": "广安市",
        "value": "5116"
      },
      {
        "label": "达州市",
        "value": "5117"
      },
      {
        "label": "雅安市",
        "value": "5118"
      },
      {
        "label": "巴中市",
        "value": "5119"
      },
      {
        "label": "资阳市",
        "value": "5120"
      },
      {
        "label": "阿坝藏族羌族自治州",
        "value": "5132"
      },
      {
        "label": "甘孜藏族自治州",
        "value": "5133"
      },
      {
        "label": "凉山彝族自治州",
        "value": "5134"
      }
    ],
    [
      {
        "label": "贵阳市",
        "value": "5201"
      },
      {
        "label": "六盘水市",
        "value": "5202"
      },
      {
        "label": "遵义市",
        "value": "5203"
      },
      {
        "label": "安顺市",
        "value": "5204"
      },
      {
        "label": "毕节市",
        "value": "5205"
      },
      {
        "label": "铜仁市",
        "value": "5206"
      },
      {
        "label": "黔西南布依族苗族自治州",
        "value": "5223"
      },
      {
        "label": "黔东南苗族侗族自治州",
        "value": "5226"
      },
      {
        "label": "黔南布依族苗族自治州",
        "value": "5227"
      }
    ],
    [
      {
        "label": "昆明市",
        "value": "5301"
      },
      {
        "label": "曲靖市",
        "value": "5303"
      },
      {
        "label": "玉溪市",
        "value": "5304"
      },
      {
        "label": "保山市",
        "value": "5305"
      },
      {
        "label": "昭通市",
        "value": "5306"
      },
      {
        "label": "丽江市",
        "value": "5307"
      },
      {
        "label": "普洱市",
        "value": "5308"
      },
      {
        "label": "临沧市",
        "value": "5309"
      },
      {
        "label": "楚雄彝族自治州",
        "value": "5323"
      },
      {
        "label": "红河哈尼族彝族自治州",
        "value": "5325"
      },
      {
        "label": "文山壮族苗族自治州",
        "value": "5326"
      },
      {
        "label": "西双版纳傣族自治州",
        "value": "5328"
      },
      {
        "label": "大理白族自治州",
        "value": "5329"
      },
      {
        "label": "德宏傣族景颇族自治州",
        "value": "5331"
      },
      {
        "label": "怒江傈僳族自治州",
        "value": "5333"
      },
      {
        "label": "迪庆藏族自治州",
        "value": "5334"
      }
    ],
    [
      {
        "label": "拉萨市",
        "value": "5401"
      },
      {
        "label": "日喀则市",
        "value": "5402"
      },
      {
        "label": "昌都市",
        "value": "5403"
      },
      {
        "label": "林芝市",
        "value": "5404"
      },
      {
        "label": "山南市",
        "value": "5405"
      },
      {
        "label": "那曲地区",
        "value": "5424"
      },
      {
        "label": "阿里地区",
        "value": "5425"
      }
    ],
    [
      {
        "label": "西安市",
        "value": "6101"
      },
      {
        "label": "铜川市",
        "value": "6102"
      },
      {
        "label": "宝鸡市",
        "value": "6103"
      },
      {
        "label": "咸阳市",
        "value": "6104"
      },
      {
        "label": "渭南市",
        "value": "6105"
      },
      {
        "label": "延安市",
        "value": "6106"
      },
      {
        "label": "汉中市",
        "value": "6107"
      },
      {
        "label": "榆林市",
        "value": "6108"
      },
      {
        "label": "安康市",
        "value": "6109"
      },
      {
        "label": "商洛市",
        "value": "6110"
      }
    ],
    [
      {
        "label": "兰州市",
        "value": "6201"
      },
      {
        "label": "嘉峪关市",
        "value": "6202"
      },
      {
        "label": "金昌市",
        "value": "6203"
      },
      {
        "label": "白银市",
        "value": "6204"
      },
      {
        "label": "天水市",
        "value": "6205"
      },
      {
        "label": "武威市",
        "value": "6206"
      },
      {
        "label": "张掖市",
        "value": "6207"
      },
      {
        "label": "平凉市",
        "value": "6208"
      },
      {
        "label": "酒泉市",
        "value": "6209"
      },
      {
        "label": "庆阳市",
        "value": "6210"
      },
      {
        "label": "定西市",
        "value": "6211"
      },
      {
        "label": "陇南市",
        "value": "6212"
      },
      {
        "label": "临夏回族自治州",
        "value": "6229"
      },
      {
        "label": "甘南藏族自治州",
        "value": "6230"
      }
    ],
    [
      {
        "label": "西宁市",
        "value": "6301"
      },
      {
        "label": "海东市",
        "value": "6302"
      },
      {
        "label": "海北藏族自治州",
        "value": "6322"
      },
      {
        "label": "黄南藏族自治州",
        "value": "6323"
      },
      {
        "label": "海南藏族自治州",
        "value": "6325"
      },
      {
        "label": "果洛藏族自治州",
        "value": "6326"
      },
      {
        "label": "玉树藏族自治州",
        "value": "6327"
      },
      {
        "label": "海西蒙古族藏族自治州",
        "value": "6328"
      }
    ],
    [
      {
        "label": "银川市",
        "value": "6401"
      },
      {
        "label": "石嘴山市",
        "value": "6402"
      },
      {
        "label": "吴忠市",
        "value": "6403"
      },
      {
        "label": "固原市",
        "value": "6404"
      },
      {
        "label": "中卫市",
        "value": "6405"
      }
    ],
    [
      {
        "label": "乌鲁木齐市",
        "value": "6501"
      },
      {
        "label": "克拉玛依市",
        "value": "6502"
      },
      {
        "label": "吐鲁番市",
        "value": "6504"
      },
      {
        "label": "哈密市",
        "value": "6505"
      },
      {
        "label": "昌吉回族自治州",
        "value": "6523"
      },
      {
        "label": "博尔塔拉蒙古自治州",
        "value": "6527"
      },
      {
        "label": "巴音郭楞蒙古自治州",
        "value": "6528"
      },
      {
        "label": "阿克苏地区",
        "value": "6529"
      },
      {
        "label": "克孜勒苏柯尔克孜自治州",
        "value": "6530"
      },
      {
        "label": "喀什地区",
        "value": "6531"
      },
      {
        "label": "和田地区",
        "value": "6532"
      },
      {
        "label": "伊犁哈萨克自治州",
        "value": "6540"
      },
      {
        "label": "塔城地区",
        "value": "6542"
      },
      {
        "label": "阿勒泰地区",
        "value": "6543"
      },
      {
        "label": "自治区直辖县级行政区划",
        "value": "6590"
      }
    ],
    [
      {
        "label": "台北",
        "value": "6601"
      },
      {
        "label": "高雄",
        "value": "6602"
      },
      {
        "label": "基隆",
        "value": "6603"
      },
      {
        "label": "台中",
        "value": "6604"
      },
      {
        "label": "台南",
        "value": "6605"
      },
      {
        "label": "新竹",
        "value": "6606"
      },
      {
        "label": "嘉义",
        "value": "6607"
      },
      {
        "label": "宜兰",
        "value": "6608"
      },
      {
        "label": "桃园",
        "value": "6609"
      },
      {
        "label": "苗栗",
        "value": "6610"
      },
      {
        "label": "彰化",
        "value": "6611"
      },
      {
        "label": "南投",
        "value": "6612"
      },
      {
        "label": "云林",
        "value": "6613"
      },
      {
        "label": "屏东",
        "value": "6614"
      },
      {
        "label": "台东",
        "value": "6615"
      },
      {
        "label": "花莲",
        "value": "6616"
      },
      {
        "label": "澎湖",
        "value": "6617"
      }
    ],
    [
      {
        "label": "香港岛",
        "value": "6701"
      },
      {
        "label": "九龙",
        "value": "6702"
      },
      {
        "label": "新界",
        "value": "6703"
      }
    ],
    [
      {
        "label": "澳门半岛",
        "value": "6801"
      },
      {
        "label": "氹仔岛",
        "value": "6802"
      },
      {
        "label": "路环岛",
        "value": "6803"
      },
      {
        "label": "路氹城",
        "value": "6804"
      }
    ]
  ];
  var areaData = [
    [
      [
        {
          "label": "东城区",
          "value": "110101"
        },
        {
          "label": "西城区",
          "value": "110102"
        },
        {
          "label": "朝阳区",
          "value": "110105"
        },
        {
          "label": "丰台区",
          "value": "110106"
        },
        {
          "label": "石景山区",
          "value": "110107"
        },
        {
          "label": "海淀区",
          "value": "110108"
        },
        {
          "label": "门头沟区",
          "value": "110109"
        },
        {
          "label": "房山区",
          "value": "110111"
        },
        {
          "label": "通州区",
          "value": "110112"
        },
        {
          "label": "顺义区",
          "value": "110113"
        },
        {
          "label": "昌平区",
          "value": "110114"
        },
        {
          "label": "大兴区",
          "value": "110115"
        },
        {
          "label": "怀柔区",
          "value": "110116"
        },
        {
          "label": "平谷区",
          "value": "110117"
        },
        {
          "label": "密云区",
          "value": "110118"
        },
        {
          "label": "延庆区",
          "value": "110119"
        }
      ]
    ],
    [
      [
        {
          "label": "和平区",
          "value": "120101"
        },
        {
          "label": "河东区",
          "value": "120102"
        },
        {
          "label": "河西区",
          "value": "120103"
        },
        {
          "label": "南开区",
          "value": "120104"
        },
        {
          "label": "河北区",
          "value": "120105"
        },
        {
          "label": "红桥区",
          "value": "120106"
        },
        {
          "label": "东丽区",
          "value": "120110"
        },
        {
          "label": "西青区",
          "value": "120111"
        },
        {
          "label": "津南区",
          "value": "120112"
        },
        {
          "label": "北辰区",
          "value": "120113"
        },
        {
          "label": "武清区",
          "value": "120114"
        },
        {
          "label": "宝坻区",
          "value": "120115"
        },
        {
          "label": "滨海新区",
          "value": "120116"
        },
        {
          "label": "宁河区",
          "value": "120117"
        },
        {
          "label": "静海区",
          "value": "120118"
        },
        {
          "label": "蓟州区",
          "value": "120119"
        }
      ]
    ],
    [
      [
        {
          "label": "长安区",
          "value": "130102"
        },
        {
          "label": "桥西区",
          "value": "130104"
        },
        {
          "label": "新华区",
          "value": "130105"
        },
        {
          "label": "井陉矿区",
          "value": "130107"
        },
        {
          "label": "裕华区",
          "value": "130108"
        },
        {
          "label": "藁城区",
          "value": "130109"
        },
        {
          "label": "鹿泉区",
          "value": "130110"
        },
        {
          "label": "栾城区",
          "value": "130111"
        },
        {
          "label": "井陉县",
          "value": "130121"
        },
        {
          "label": "正定县",
          "value": "130123"
        },
        {
          "label": "行唐县",
          "value": "130125"
        },
        {
          "label": "灵寿县",
          "value": "130126"
        },
        {
          "label": "高邑县",
          "value": "130127"
        },
        {
          "label": "深泽县",
          "value": "130128"
        },
        {
          "label": "赞皇县",
          "value": "130129"
        },
        {
          "label": "无极县",
          "value": "130130"
        },
        {
          "label": "平山县",
          "value": "130131"
        },
        {
          "label": "元氏县",
          "value": "130132"
        },
        {
          "label": "赵县",
          "value": "130133"
        },
        {
          "label": "石家庄高新技术产业开发区",
          "value": "130171"
        },
        {
          "label": "石家庄循环化工园区",
          "value": "130172"
        },
        {
          "label": "辛集市",
          "value": "130181"
        },
        {
          "label": "晋州市",
          "value": "130183"
        },
        {
          "label": "新乐市",
          "value": "130184"
        }
      ],
      [
        {
          "label": "路南区",
          "value": "130202"
        },
        {
          "label": "路北区",
          "value": "130203"
        },
        {
          "label": "古冶区",
          "value": "130204"
        },
        {
          "label": "开平区",
          "value": "130205"
        },
        {
          "label": "丰南区",
          "value": "130207"
        },
        {
          "label": "丰润区",
          "value": "130208"
        },
        {
          "label": "曹妃甸区",
          "value": "130209"
        },
        {
          "label": "滦县",
          "value": "130223"
        },
        {
          "label": "滦南县",
          "value": "130224"
        },
        {
          "label": "乐亭县",
          "value": "130225"
        },
        {
          "label": "迁西县",
          "value": "130227"
        },
        {
          "label": "玉田县",
          "value": "130229"
        },
        {
          "label": "唐山市芦台经济技术开发区",
          "value": "130271"
        },
        {
          "label": "唐山市汉沽管理区",
          "value": "130272"
        },
        {
          "label": "唐山高新技术产业开发区",
          "value": "130273"
        },
        {
          "label": "河北唐山海港经济开发区",
          "value": "130274"
        },
        {
          "label": "遵化市",
          "value": "130281"
        },
        {
          "label": "迁安市",
          "value": "130283"
        }
      ],
      [
        {
          "label": "海港区",
          "value": "130302"
        },
        {
          "label": "山海关区",
          "value": "130303"
        },
        {
          "label": "北戴河区",
          "value": "130304"
        },
        {
          "label": "抚宁区",
          "value": "130306"
        },
        {
          "label": "青龙满族自治县",
          "value": "130321"
        },
        {
          "label": "昌黎县",
          "value": "130322"
        },
        {
          "label": "卢龙县",
          "value": "130324"
        },
        {
          "label": "秦皇岛市经济技术开发区",
          "value": "130371"
        },
        {
          "label": "北戴河新区",
          "value": "130372"
        }
      ],
      [
        {
          "label": "邯山区",
          "value": "130402"
        },
        {
          "label": "丛台区",
          "value": "130403"
        },
        {
          "label": "复兴区",
          "value": "130404"
        },
        {
          "label": "峰峰矿区",
          "value": "130406"
        },
        {
          "label": "肥乡区",
          "value": "130407"
        },
        {
          "label": "永年区",
          "value": "130408"
        },
        {
          "label": "临漳县",
          "value": "130423"
        },
        {
          "label": "成安县",
          "value": "130424"
        },
        {
          "label": "大名县",
          "value": "130425"
        },
        {
          "label": "涉县",
          "value": "130426"
        },
        {
          "label": "磁县",
          "value": "130427"
        },
        {
          "label": "邱县",
          "value": "130430"
        },
        {
          "label": "鸡泽县",
          "value": "130431"
        },
        {
          "label": "广平县",
          "value": "130432"
        },
        {
          "label": "馆陶县",
          "value": "130433"
        },
        {
          "label": "魏县",
          "value": "130434"
        },
        {
          "label": "曲周县",
          "value": "130435"
        },
        {
          "label": "邯郸经济技术开发区",
          "value": "130471"
        },
        {
          "label": "邯郸冀南新区",
          "value": "130473"
        },
        {
          "label": "武安市",
          "value": "130481"
        }
      ],
      [
        {
          "label": "桥东区",
          "value": "130502"
        },
        {
          "label": "桥西区",
          "value": "130503"
        },
        {
          "label": "邢台县",
          "value": "130521"
        },
        {
          "label": "临城县",
          "value": "130522"
        },
        {
          "label": "内丘县",
          "value": "130523"
        },
        {
          "label": "柏乡县",
          "value": "130524"
        },
        {
          "label": "隆尧县",
          "value": "130525"
        },
        {
          "label": "任县",
          "value": "130526"
        },
        {
          "label": "南和县",
          "value": "130527"
        },
        {
          "label": "宁晋县",
          "value": "130528"
        },
        {
          "label": "巨鹿县",
          "value": "130529"
        },
        {
          "label": "新河县",
          "value": "130530"
        },
        {
          "label": "广宗县",
          "value": "130531"
        },
        {
          "label": "平乡县",
          "value": "130532"
        },
        {
          "label": "威县",
          "value": "130533"
        },
        {
          "label": "清河县",
          "value": "130534"
        },
        {
          "label": "临西县",
          "value": "130535"
        },
        {
          "label": "河北邢台经济开发区",
          "value": "130571"
        },
        {
          "label": "南宫市",
          "value": "130581"
        },
        {
          "label": "沙河市",
          "value": "130582"
        }
      ],
      [
        {
          "label": "竞秀区",
          "value": "130602"
        },
        {
          "label": "莲池区",
          "value": "130606"
        },
        {
          "label": "满城区",
          "value": "130607"
        },
        {
          "label": "清苑区",
          "value": "130608"
        },
        {
          "label": "徐水区",
          "value": "130609"
        },
        {
          "label": "涞水县",
          "value": "130623"
        },
        {
          "label": "阜平县",
          "value": "130624"
        },
        {
          "label": "定兴县",
          "value": "130626"
        },
        {
          "label": "唐县",
          "value": "130627"
        },
        {
          "label": "高阳县",
          "value": "130628"
        },
        {
          "label": "容城县",
          "value": "130629"
        },
        {
          "label": "涞源县",
          "value": "130630"
        },
        {
          "label": "望都县",
          "value": "130631"
        },
        {
          "label": "安新县",
          "value": "130632"
        },
        {
          "label": "易县",
          "value": "130633"
        },
        {
          "label": "曲阳县",
          "value": "130634"
        },
        {
          "label": "蠡县",
          "value": "130635"
        },
        {
          "label": "顺平县",
          "value": "130636"
        },
        {
          "label": "博野县",
          "value": "130637"
        },
        {
          "label": "雄县",
          "value": "130638"
        },
        {
          "label": "保定高新技术产业开发区",
          "value": "130671"
        },
        {
          "label": "保定白沟新城",
          "value": "130672"
        },
        {
          "label": "涿州市",
          "value": "130681"
        },
        {
          "label": "定州市",
          "value": "130682"
        },
        {
          "label": "安国市",
          "value": "130683"
        },
        {
          "label": "高碑店市",
          "value": "130684"
        }
      ],
      [
        {
          "label": "桥东区",
          "value": "130702"
        },
        {
          "label": "桥西区",
          "value": "130703"
        },
        {
          "label": "宣化区",
          "value": "130705"
        },
        {
          "label": "下花园区",
          "value": "130706"
        },
        {
          "label": "万全区",
          "value": "130708"
        },
        {
          "label": "崇礼区",
          "value": "130709"
        },
        {
          "label": "张北县",
          "value": "130722"
        },
        {
          "label": "康保县",
          "value": "130723"
        },
        {
          "label": "沽源县",
          "value": "130724"
        },
        {
          "label": "尚义县",
          "value": "130725"
        },
        {
          "label": "蔚县",
          "value": "130726"
        },
        {
          "label": "阳原县",
          "value": "130727"
        },
        {
          "label": "怀安县",
          "value": "130728"
        },
        {
          "label": "怀来县",
          "value": "130730"
        },
        {
          "label": "涿鹿县",
          "value": "130731"
        },
        {
          "label": "赤城县",
          "value": "130732"
        },
        {
          "label": "张家口市高新技术产业开发区",
          "value": "130771"
        },
        {
          "label": "张家口市察北管理区",
          "value": "130772"
        },
        {
          "label": "张家口市塞北管理区",
          "value": "130773"
        }
      ],
      [
        {
          "label": "双桥区",
          "value": "130802"
        },
        {
          "label": "双滦区",
          "value": "130803"
        },
        {
          "label": "鹰手营子矿区",
          "value": "130804"
        },
        {
          "label": "承德县",
          "value": "130821"
        },
        {
          "label": "兴隆县",
          "value": "130822"
        },
        {
          "label": "滦平县",
          "value": "130824"
        },
        {
          "label": "隆化县",
          "value": "130825"
        },
        {
          "label": "丰宁满族自治县",
          "value": "130826"
        },
        {
          "label": "宽城满族自治县",
          "value": "130827"
        },
        {
          "label": "围场满族蒙古族自治县",
          "value": "130828"
        },
        {
          "label": "承德高新技术产业开发区",
          "value": "130871"
        },
        {
          "label": "平泉市",
          "value": "130881"
        }
      ],
      [
        {
          "label": "新华区",
          "value": "130902"
        },
        {
          "label": "运河区",
          "value": "130903"
        },
        {
          "label": "沧县",
          "value": "130921"
        },
        {
          "label": "青县",
          "value": "130922"
        },
        {
          "label": "东光县",
          "value": "130923"
        },
        {
          "label": "海兴县",
          "value": "130924"
        },
        {
          "label": "盐山县",
          "value": "130925"
        },
        {
          "label": "肃宁县",
          "value": "130926"
        },
        {
          "label": "南皮县",
          "value": "130927"
        },
        {
          "label": "吴桥县",
          "value": "130928"
        },
        {
          "label": "献县",
          "value": "130929"
        },
        {
          "label": "孟村回族自治县",
          "value": "130930"
        },
        {
          "label": "河北沧州经济开发区",
          "value": "130971"
        },
        {
          "label": "沧州高新技术产业开发区",
          "value": "130972"
        },
        {
          "label": "沧州渤海新区",
          "value": "130973"
        },
        {
          "label": "泊头市",
          "value": "130981"
        },
        {
          "label": "任丘市",
          "value": "130982"
        },
        {
          "label": "黄骅市",
          "value": "130983"
        },
        {
          "label": "河间市",
          "value": "130984"
        }
      ],
      [
        {
          "label": "安次区",
          "value": "131002"
        },
        {
          "label": "广阳区",
          "value": "131003"
        },
        {
          "label": "固安县",
          "value": "131022"
        },
        {
          "label": "永清县",
          "value": "131023"
        },
        {
          "label": "香河县",
          "value": "131024"
        },
        {
          "label": "大城县",
          "value": "131025"
        },
        {
          "label": "文安县",
          "value": "131026"
        },
        {
          "label": "大厂回族自治县",
          "value": "131028"
        },
        {
          "label": "廊坊经济技术开发区",
          "value": "131071"
        },
        {
          "label": "霸州市",
          "value": "131081"
        },
        {
          "label": "三河市",
          "value": "131082"
        }
      ],
      [
        {
          "label": "桃城区",
          "value": "131102"
        },
        {
          "label": "冀州区",
          "value": "131103"
        },
        {
          "label": "枣强县",
          "value": "131121"
        },
        {
          "label": "武邑县",
          "value": "131122"
        },
        {
          "label": "武强县",
          "value": "131123"
        },
        {
          "label": "饶阳县",
          "value": "131124"
        },
        {
          "label": "安平县",
          "value": "131125"
        },
        {
          "label": "故城县",
          "value": "131126"
        },
        {
          "label": "景县",
          "value": "131127"
        },
        {
          "label": "阜城县",
          "value": "131128"
        },
        {
          "label": "河北衡水经济开发区",
          "value": "131171"
        },
        {
          "label": "衡水滨湖新区",
          "value": "131172"
        },
        {
          "label": "深州市",
          "value": "131182"
        }
      ]
    ],
    [
      [
        {
          "label": "小店区",
          "value": "140105"
        },
        {
          "label": "迎泽区",
          "value": "140106"
        },
        {
          "label": "杏花岭区",
          "value": "140107"
        },
        {
          "label": "尖草坪区",
          "value": "140108"
        },
        {
          "label": "万柏林区",
          "value": "140109"
        },
        {
          "label": "晋源区",
          "value": "140110"
        },
        {
          "label": "清徐县",
          "value": "140121"
        },
        {
          "label": "阳曲县",
          "value": "140122"
        },
        {
          "label": "娄烦县",
          "value": "140123"
        },
        {
          "label": "山西转型综合改革示范区",
          "value": "140171"
        },
        {
          "label": "古交市",
          "value": "140181"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140202"
        },
        {
          "label": "矿区",
          "value": "140203"
        },
        {
          "label": "南郊区",
          "value": "140211"
        },
        {
          "label": "新荣区",
          "value": "140212"
        },
        {
          "label": "阳高县",
          "value": "140221"
        },
        {
          "label": "天镇县",
          "value": "140222"
        },
        {
          "label": "广灵县",
          "value": "140223"
        },
        {
          "label": "灵丘县",
          "value": "140224"
        },
        {
          "label": "浑源县",
          "value": "140225"
        },
        {
          "label": "左云县",
          "value": "140226"
        },
        {
          "label": "大同县",
          "value": "140227"
        },
        {
          "label": "山西大同经济开发区",
          "value": "140271"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140302"
        },
        {
          "label": "矿区",
          "value": "140303"
        },
        {
          "label": "郊区",
          "value": "140311"
        },
        {
          "label": "平定县",
          "value": "140321"
        },
        {
          "label": "盂县",
          "value": "140322"
        },
        {
          "label": "山西阳泉经济开发区",
          "value": "140371"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140402"
        },
        {
          "label": "郊区",
          "value": "140411"
        },
        {
          "label": "长治县",
          "value": "140421"
        },
        {
          "label": "襄垣县",
          "value": "140423"
        },
        {
          "label": "屯留县",
          "value": "140424"
        },
        {
          "label": "平顺县",
          "value": "140425"
        },
        {
          "label": "黎城县",
          "value": "140426"
        },
        {
          "label": "壶关县",
          "value": "140427"
        },
        {
          "label": "长子县",
          "value": "140428"
        },
        {
          "label": "武乡县",
          "value": "140429"
        },
        {
          "label": "沁县",
          "value": "140430"
        },
        {
          "label": "沁源县",
          "value": "140431"
        },
        {
          "label": "山西长治高新技术产业园区",
          "value": "140471"
        },
        {
          "label": "潞城市",
          "value": "140481"
        }
      ],
      [
        {
          "label": "城区",
          "value": "140502"
        },
        {
          "label": "沁水县",
          "value": "140521"
        },
        {
          "label": "阳城县",
          "value": "140522"
        },
        {
          "label": "陵川县",
          "value": "140524"
        },
        {
          "label": "泽州县",
          "value": "140525"
        },
        {
          "label": "高平市",
          "value": "140581"
        }
      ],
      [
        {
          "label": "朔城区",
          "value": "140602"
        },
        {
          "label": "平鲁区",
          "value": "140603"
        },
        {
          "label": "山阴县",
          "value": "140621"
        },
        {
          "label": "应县",
          "value": "140622"
        },
        {
          "label": "右玉县",
          "value": "140623"
        },
        {
          "label": "怀仁县",
          "value": "140624"
        },
        {
          "label": "山西朔州经济开发区",
          "value": "140671"
        }
      ],
      [
        {
          "label": "榆次区",
          "value": "140702"
        },
        {
          "label": "榆社县",
          "value": "140721"
        },
        {
          "label": "左权县",
          "value": "140722"
        },
        {
          "label": "和顺县",
          "value": "140723"
        },
        {
          "label": "昔阳县",
          "value": "140724"
        },
        {
          "label": "寿阳县",
          "value": "140725"
        },
        {
          "label": "太谷县",
          "value": "140726"
        },
        {
          "label": "祁县",
          "value": "140727"
        },
        {
          "label": "平遥县",
          "value": "140728"
        },
        {
          "label": "灵石县",
          "value": "140729"
        },
        {
          "label": "介休市",
          "value": "140781"
        }
      ],
      [
        {
          "label": "盐湖区",
          "value": "140802"
        },
        {
          "label": "临猗县",
          "value": "140821"
        },
        {
          "label": "万荣县",
          "value": "140822"
        },
        {
          "label": "闻喜县",
          "value": "140823"
        },
        {
          "label": "稷山县",
          "value": "140824"
        },
        {
          "label": "新绛县",
          "value": "140825"
        },
        {
          "label": "绛县",
          "value": "140826"
        },
        {
          "label": "垣曲县",
          "value": "140827"
        },
        {
          "label": "夏县",
          "value": "140828"
        },
        {
          "label": "平陆县",
          "value": "140829"
        },
        {
          "label": "芮城县",
          "value": "140830"
        },
        {
          "label": "永济市",
          "value": "140881"
        },
        {
          "label": "河津市",
          "value": "140882"
        }
      ],
      [
        {
          "label": "忻府区",
          "value": "140902"
        },
        {
          "label": "定襄县",
          "value": "140921"
        },
        {
          "label": "五台县",
          "value": "140922"
        },
        {
          "label": "代县",
          "value": "140923"
        },
        {
          "label": "繁峙县",
          "value": "140924"
        },
        {
          "label": "宁武县",
          "value": "140925"
        },
        {
          "label": "静乐县",
          "value": "140926"
        },
        {
          "label": "神池县",
          "value": "140927"
        },
        {
          "label": "五寨县",
          "value": "140928"
        },
        {
          "label": "岢岚县",
          "value": "140929"
        },
        {
          "label": "河曲县",
          "value": "140930"
        },
        {
          "label": "保德县",
          "value": "140931"
        },
        {
          "label": "偏关县",
          "value": "140932"
        },
        {
          "label": "五台山风景名胜区",
          "value": "140971"
        },
        {
          "label": "原平市",
          "value": "140981"
        }
      ],
      [
        {
          "label": "尧都区",
          "value": "141002"
        },
        {
          "label": "曲沃县",
          "value": "141021"
        },
        {
          "label": "翼城县",
          "value": "141022"
        },
        {
          "label": "襄汾县",
          "value": "141023"
        },
        {
          "label": "洪洞县",
          "value": "141024"
        },
        {
          "label": "古县",
          "value": "141025"
        },
        {
          "label": "安泽县",
          "value": "141026"
        },
        {
          "label": "浮山县",
          "value": "141027"
        },
        {
          "label": "吉县",
          "value": "141028"
        },
        {
          "label": "乡宁县",
          "value": "141029"
        },
        {
          "label": "大宁县",
          "value": "141030"
        },
        {
          "label": "隰县",
          "value": "141031"
        },
        {
          "label": "永和县",
          "value": "141032"
        },
        {
          "label": "蒲县",
          "value": "141033"
        },
        {
          "label": "汾西县",
          "value": "141034"
        },
        {
          "label": "侯马市",
          "value": "141081"
        },
        {
          "label": "霍州市",
          "value": "141082"
        }
      ],
      [
        {
          "label": "离石区",
          "value": "141102"
        },
        {
          "label": "文水县",
          "value": "141121"
        },
        {
          "label": "交城县",
          "value": "141122"
        },
        {
          "label": "兴县",
          "value": "141123"
        },
        {
          "label": "临县",
          "value": "141124"
        },
        {
          "label": "柳林县",
          "value": "141125"
        },
        {
          "label": "石楼县",
          "value": "141126"
        },
        {
          "label": "岚县",
          "value": "141127"
        },
        {
          "label": "方山县",
          "value": "141128"
        },
        {
          "label": "中阳县",
          "value": "141129"
        },
        {
          "label": "交口县",
          "value": "141130"
        },
        {
          "label": "孝义市",
          "value": "141181"
        },
        {
          "label": "汾阳市",
          "value": "141182"
        }
      ]
    ],
    [
      [
        {
          "label": "新城区",
          "value": "150102"
        },
        {
          "label": "回民区",
          "value": "150103"
        },
        {
          "label": "玉泉区",
          "value": "150104"
        },
        {
          "label": "赛罕区",
          "value": "150105"
        },
        {
          "label": "土默特左旗",
          "value": "150121"
        },
        {
          "label": "托克托县",
          "value": "150122"
        },
        {
          "label": "和林格尔县",
          "value": "150123"
        },
        {
          "label": "清水河县",
          "value": "150124"
        },
        {
          "label": "武川县",
          "value": "150125"
        },
        {
          "label": "呼和浩特金海工业园区",
          "value": "150171"
        },
        {
          "label": "呼和浩特经济技术开发区",
          "value": "150172"
        }
      ],
      [
        {
          "label": "东河区",
          "value": "150202"
        },
        {
          "label": "昆都仑区",
          "value": "150203"
        },
        {
          "label": "青山区",
          "value": "150204"
        },
        {
          "label": "石拐区",
          "value": "150205"
        },
        {
          "label": "白云鄂博矿区",
          "value": "150206"
        },
        {
          "label": "九原区",
          "value": "150207"
        },
        {
          "label": "土默特右旗",
          "value": "150221"
        },
        {
          "label": "固阳县",
          "value": "150222"
        },
        {
          "label": "达尔罕茂明安联合旗",
          "value": "150223"
        },
        {
          "label": "包头稀土高新技术产业开发区",
          "value": "150271"
        }
      ],
      [
        {
          "label": "海勃湾区",
          "value": "150302"
        },
        {
          "label": "海南区",
          "value": "150303"
        },
        {
          "label": "乌达区",
          "value": "150304"
        }
      ],
      [
        {
          "label": "红山区",
          "value": "150402"
        },
        {
          "label": "元宝山区",
          "value": "150403"
        },
        {
          "label": "松山区",
          "value": "150404"
        },
        {
          "label": "阿鲁科尔沁旗",
          "value": "150421"
        },
        {
          "label": "巴林左旗",
          "value": "150422"
        },
        {
          "label": "巴林右旗",
          "value": "150423"
        },
        {
          "label": "林西县",
          "value": "150424"
        },
        {
          "label": "克什克腾旗",
          "value": "150425"
        },
        {
          "label": "翁牛特旗",
          "value": "150426"
        },
        {
          "label": "喀喇沁旗",
          "value": "150428"
        },
        {
          "label": "宁城县",
          "value": "150429"
        },
        {
          "label": "敖汉旗",
          "value": "150430"
        }
      ],
      [
        {
          "label": "科尔沁区",
          "value": "150502"
        },
        {
          "label": "科尔沁左翼中旗",
          "value": "150521"
        },
        {
          "label": "科尔沁左翼后旗",
          "value": "150522"
        },
        {
          "label": "开鲁县",
          "value": "150523"
        },
        {
          "label": "库伦旗",
          "value": "150524"
        },
        {
          "label": "奈曼旗",
          "value": "150525"
        },
        {
          "label": "扎鲁特旗",
          "value": "150526"
        },
        {
          "label": "通辽经济技术开发区",
          "value": "150571"
        },
        {
          "label": "霍林郭勒市",
          "value": "150581"
        }
      ],
      [
        {
          "label": "东胜区",
          "value": "150602"
        },
        {
          "label": "康巴什区",
          "value": "150603"
        },
        {
          "label": "达拉特旗",
          "value": "150621"
        },
        {
          "label": "准格尔旗",
          "value": "150622"
        },
        {
          "label": "鄂托克前旗",
          "value": "150623"
        },
        {
          "label": "鄂托克旗",
          "value": "150624"
        },
        {
          "label": "杭锦旗",
          "value": "150625"
        },
        {
          "label": "乌审旗",
          "value": "150626"
        },
        {
          "label": "伊金霍洛旗",
          "value": "150627"
        }
      ],
      [
        {
          "label": "海拉尔区",
          "value": "150702"
        },
        {
          "label": "扎赉诺尔区",
          "value": "150703"
        },
        {
          "label": "阿荣旗",
          "value": "150721"
        },
        {
          "label": "莫力达瓦达斡尔族自治旗",
          "value": "150722"
        },
        {
          "label": "鄂伦春自治旗",
          "value": "150723"
        },
        {
          "label": "鄂温克族自治旗",
          "value": "150724"
        },
        {
          "label": "陈巴尔虎旗",
          "value": "150725"
        },
        {
          "label": "新巴尔虎左旗",
          "value": "150726"
        },
        {
          "label": "新巴尔虎右旗",
          "value": "150727"
        },
        {
          "label": "满洲里市",
          "value": "150781"
        },
        {
          "label": "牙克石市",
          "value": "150782"
        },
        {
          "label": "扎兰屯市",
          "value": "150783"
        },
        {
          "label": "额尔古纳市",
          "value": "150784"
        },
        {
          "label": "根河市",
          "value": "150785"
        }
      ],
      [
        {
          "label": "临河区",
          "value": "150802"
        },
        {
          "label": "五原县",
          "value": "150821"
        },
        {
          "label": "磴口县",
          "value": "150822"
        },
        {
          "label": "乌拉特前旗",
          "value": "150823"
        },
        {
          "label": "乌拉特中旗",
          "value": "150824"
        },
        {
          "label": "乌拉特后旗",
          "value": "150825"
        },
        {
          "label": "杭锦后旗",
          "value": "150826"
        }
      ],
      [
        {
          "label": "集宁区",
          "value": "150902"
        },
        {
          "label": "卓资县",
          "value": "150921"
        },
        {
          "label": "化德县",
          "value": "150922"
        },
        {
          "label": "商都县",
          "value": "150923"
        },
        {
          "label": "兴和县",
          "value": "150924"
        },
        {
          "label": "凉城县",
          "value": "150925"
        },
        {
          "label": "察哈尔右翼前旗",
          "value": "150926"
        },
        {
          "label": "察哈尔右翼中旗",
          "value": "150927"
        },
        {
          "label": "察哈尔右翼后旗",
          "value": "150928"
        },
        {
          "label": "四子王旗",
          "value": "150929"
        },
        {
          "label": "丰镇市",
          "value": "150981"
        }
      ],
      [
        {
          "label": "乌兰浩特市",
          "value": "152201"
        },
        {
          "label": "阿尔山市",
          "value": "152202"
        },
        {
          "label": "科尔沁右翼前旗",
          "value": "152221"
        },
        {
          "label": "科尔沁右翼中旗",
          "value": "152222"
        },
        {
          "label": "扎赉特旗",
          "value": "152223"
        },
        {
          "label": "突泉县",
          "value": "152224"
        }
      ],
      [
        {
          "label": "二连浩特市",
          "value": "152501"
        },
        {
          "label": "锡林浩特市",
          "value": "152502"
        },
        {
          "label": "阿巴嘎旗",
          "value": "152522"
        },
        {
          "label": "苏尼特左旗",
          "value": "152523"
        },
        {
          "label": "苏尼特右旗",
          "value": "152524"
        },
        {
          "label": "东乌珠穆沁旗",
          "value": "152525"
        },
        {
          "label": "西乌珠穆沁旗",
          "value": "152526"
        },
        {
          "label": "太仆寺旗",
          "value": "152527"
        },
        {
          "label": "镶黄旗",
          "value": "152528"
        },
        {
          "label": "正镶白旗",
          "value": "152529"
        },
        {
          "label": "正蓝旗",
          "value": "152530"
        },
        {
          "label": "多伦县",
          "value": "152531"
        },
        {
          "label": "乌拉盖管委会",
          "value": "152571"
        }
      ],
      [
        {
          "label": "阿拉善左旗",
          "value": "152921"
        },
        {
          "label": "阿拉善右旗",
          "value": "152922"
        },
        {
          "label": "额济纳旗",
          "value": "152923"
        },
        {
          "label": "内蒙古阿拉善经济开发区",
          "value": "152971"
        }
      ]
    ],
    [
      [
        {
          "label": "和平区",
          "value": "210102"
        },
        {
          "label": "沈河区",
          "value": "210103"
        },
        {
          "label": "大东区",
          "value": "210104"
        },
        {
          "label": "皇姑区",
          "value": "210105"
        },
        {
          "label": "铁西区",
          "value": "210106"
        },
        {
          "label": "苏家屯区",
          "value": "210111"
        },
        {
          "label": "浑南区",
          "value": "210112"
        },
        {
          "label": "沈北新区",
          "value": "210113"
        },
        {
          "label": "于洪区",
          "value": "210114"
        },
        {
          "label": "辽中区",
          "value": "210115"
        },
        {
          "label": "康平县",
          "value": "210123"
        },
        {
          "label": "法库县",
          "value": "210124"
        },
        {
          "label": "新民市",
          "value": "210181"
        }
      ],
      [
        {
          "label": "中山区",
          "value": "210202"
        },
        {
          "label": "西岗区",
          "value": "210203"
        },
        {
          "label": "沙河口区",
          "value": "210204"
        },
        {
          "label": "甘井子区",
          "value": "210211"
        },
        {
          "label": "旅顺口区",
          "value": "210212"
        },
        {
          "label": "金州区",
          "value": "210213"
        },
        {
          "label": "普兰店区",
          "value": "210214"
        },
        {
          "label": "长海县",
          "value": "210224"
        },
        {
          "label": "瓦房店市",
          "value": "210281"
        },
        {
          "label": "庄河市",
          "value": "210283"
        }
      ],
      [
        {
          "label": "铁东区",
          "value": "210302"
        },
        {
          "label": "铁西区",
          "value": "210303"
        },
        {
          "label": "立山区",
          "value": "210304"
        },
        {
          "label": "千山区",
          "value": "210311"
        },
        {
          "label": "台安县",
          "value": "210321"
        },
        {
          "label": "岫岩满族自治县",
          "value": "210323"
        },
        {
          "label": "海城市",
          "value": "210381"
        }
      ],
      [
        {
          "label": "新抚区",
          "value": "210402"
        },
        {
          "label": "东洲区",
          "value": "210403"
        },
        {
          "label": "望花区",
          "value": "210404"
        },
        {
          "label": "顺城区",
          "value": "210411"
        },
        {
          "label": "抚顺县",
          "value": "210421"
        },
        {
          "label": "新宾满族自治县",
          "value": "210422"
        },
        {
          "label": "清原满族自治县",
          "value": "210423"
        }
      ],
      [
        {
          "label": "平山区",
          "value": "210502"
        },
        {
          "label": "溪湖区",
          "value": "210503"
        },
        {
          "label": "明山区",
          "value": "210504"
        },
        {
          "label": "南芬区",
          "value": "210505"
        },
        {
          "label": "本溪满族自治县",
          "value": "210521"
        },
        {
          "label": "桓仁满族自治县",
          "value": "210522"
        }
      ],
      [
        {
          "label": "元宝区",
          "value": "210602"
        },
        {
          "label": "振兴区",
          "value": "210603"
        },
        {
          "label": "振安区",
          "value": "210604"
        },
        {
          "label": "宽甸满族自治县",
          "value": "210624"
        },
        {
          "label": "东港市",
          "value": "210681"
        },
        {
          "label": "凤城市",
          "value": "210682"
        }
      ],
      [
        {
          "label": "古塔区",
          "value": "210702"
        },
        {
          "label": "凌河区",
          "value": "210703"
        },
        {
          "label": "太和区",
          "value": "210711"
        },
        {
          "label": "黑山县",
          "value": "210726"
        },
        {
          "label": "义县",
          "value": "210727"
        },
        {
          "label": "凌海市",
          "value": "210781"
        },
        {
          "label": "北镇市",
          "value": "210782"
        }
      ],
      [
        {
          "label": "站前区",
          "value": "210802"
        },
        {
          "label": "西市区",
          "value": "210803"
        },
        {
          "label": "鲅鱼圈区",
          "value": "210804"
        },
        {
          "label": "老边区",
          "value": "210811"
        },
        {
          "label": "盖州市",
          "value": "210881"
        },
        {
          "label": "大石桥市",
          "value": "210882"
        }
      ],
      [
        {
          "label": "海州区",
          "value": "210902"
        },
        {
          "label": "新邱区",
          "value": "210903"
        },
        {
          "label": "太平区",
          "value": "210904"
        },
        {
          "label": "清河门区",
          "value": "210905"
        },
        {
          "label": "细河区",
          "value": "210911"
        },
        {
          "label": "阜新蒙古族自治县",
          "value": "210921"
        },
        {
          "label": "彰武县",
          "value": "210922"
        }
      ],
      [
        {
          "label": "白塔区",
          "value": "211002"
        },
        {
          "label": "文圣区",
          "value": "211003"
        },
        {
          "label": "宏伟区",
          "value": "211004"
        },
        {
          "label": "弓长岭区",
          "value": "211005"
        },
        {
          "label": "太子河区",
          "value": "211011"
        },
        {
          "label": "辽阳县",
          "value": "211021"
        },
        {
          "label": "灯塔市",
          "value": "211081"
        }
      ],
      [
        {
          "label": "双台子区",
          "value": "211102"
        },
        {
          "label": "兴隆台区",
          "value": "211103"
        },
        {
          "label": "大洼区",
          "value": "211104"
        },
        {
          "label": "盘山县",
          "value": "211122"
        }
      ],
      [
        {
          "label": "银州区",
          "value": "211202"
        },
        {
          "label": "清河区",
          "value": "211204"
        },
        {
          "label": "铁岭县",
          "value": "211221"
        },
        {
          "label": "西丰县",
          "value": "211223"
        },
        {
          "label": "昌图县",
          "value": "211224"
        },
        {
          "label": "调兵山市",
          "value": "211281"
        },
        {
          "label": "开原市",
          "value": "211282"
        }
      ],
      [
        {
          "label": "双塔区",
          "value": "211302"
        },
        {
          "label": "龙城区",
          "value": "211303"
        },
        {
          "label": "朝阳县",
          "value": "211321"
        },
        {
          "label": "建平县",
          "value": "211322"
        },
        {
          "label": "喀喇沁左翼蒙古族自治县",
          "value": "211324"
        },
        {
          "label": "北票市",
          "value": "211381"
        },
        {
          "label": "凌源市",
          "value": "211382"
        }
      ],
      [
        {
          "label": "连山区",
          "value": "211402"
        },
        {
          "label": "龙港区",
          "value": "211403"
        },
        {
          "label": "南票区",
          "value": "211404"
        },
        {
          "label": "绥中县",
          "value": "211421"
        },
        {
          "label": "建昌县",
          "value": "211422"
        },
        {
          "label": "兴城市",
          "value": "211481"
        }
      ]
    ],
    [
      [
        {
          "label": "南关区",
          "value": "220102"
        },
        {
          "label": "宽城区",
          "value": "220103"
        },
        {
          "label": "朝阳区",
          "value": "220104"
        },
        {
          "label": "二道区",
          "value": "220105"
        },
        {
          "label": "绿园区",
          "value": "220106"
        },
        {
          "label": "双阳区",
          "value": "220112"
        },
        {
          "label": "九台区",
          "value": "220113"
        },
        {
          "label": "农安县",
          "value": "220122"
        },
        {
          "label": "长春经济技术开发区",
          "value": "220171"
        },
        {
          "label": "长春净月高新技术产业开发区",
          "value": "220172"
        },
        {
          "label": "长春高新技术产业开发区",
          "value": "220173"
        },
        {
          "label": "长春汽车经济技术开发区",
          "value": "220174"
        },
        {
          "label": "榆树市",
          "value": "220182"
        },
        {
          "label": "德惠市",
          "value": "220183"
        }
      ],
      [
        {
          "label": "昌邑区",
          "value": "220202"
        },
        {
          "label": "龙潭区",
          "value": "220203"
        },
        {
          "label": "船营区",
          "value": "220204"
        },
        {
          "label": "丰满区",
          "value": "220211"
        },
        {
          "label": "永吉县",
          "value": "220221"
        },
        {
          "label": "吉林经济开发区",
          "value": "220271"
        },
        {
          "label": "吉林高新技术产业开发区",
          "value": "220272"
        },
        {
          "label": "吉林中国新加坡食品区",
          "value": "220273"
        },
        {
          "label": "蛟河市",
          "value": "220281"
        },
        {
          "label": "桦甸市",
          "value": "220282"
        },
        {
          "label": "舒兰市",
          "value": "220283"
        },
        {
          "label": "磐石市",
          "value": "220284"
        }
      ],
      [
        {
          "label": "铁西区",
          "value": "220302"
        },
        {
          "label": "铁东区",
          "value": "220303"
        },
        {
          "label": "梨树县",
          "value": "220322"
        },
        {
          "label": "伊通满族自治县",
          "value": "220323"
        },
        {
          "label": "公主岭市",
          "value": "220381"
        },
        {
          "label": "双辽市",
          "value": "220382"
        }
      ],
      [
        {
          "label": "龙山区",
          "value": "220402"
        },
        {
          "label": "西安区",
          "value": "220403"
        },
        {
          "label": "东丰县",
          "value": "220421"
        },
        {
          "label": "东辽县",
          "value": "220422"
        }
      ],
      [
        {
          "label": "东昌区",
          "value": "220502"
        },
        {
          "label": "二道江区",
          "value": "220503"
        },
        {
          "label": "通化县",
          "value": "220521"
        },
        {
          "label": "辉南县",
          "value": "220523"
        },
        {
          "label": "柳河县",
          "value": "220524"
        },
        {
          "label": "梅河口市",
          "value": "220581"
        },
        {
          "label": "集安市",
          "value": "220582"
        }
      ],
      [
        {
          "label": "浑江区",
          "value": "220602"
        },
        {
          "label": "江源区",
          "value": "220605"
        },
        {
          "label": "抚松县",
          "value": "220621"
        },
        {
          "label": "靖宇县",
          "value": "220622"
        },
        {
          "label": "长白朝鲜族自治县",
          "value": "220623"
        },
        {
          "label": "临江市",
          "value": "220681"
        }
      ],
      [
        {
          "label": "宁江区",
          "value": "220702"
        },
        {
          "label": "前郭尔罗斯蒙古族自治县",
          "value": "220721"
        },
        {
          "label": "长岭县",
          "value": "220722"
        },
        {
          "label": "乾安县",
          "value": "220723"
        },
        {
          "label": "吉林松原经济开发区",
          "value": "220771"
        },
        {
          "label": "扶余市",
          "value": "220781"
        }
      ],
      [
        {
          "label": "洮北区",
          "value": "220802"
        },
        {
          "label": "镇赉县",
          "value": "220821"
        },
        {
          "label": "通榆县",
          "value": "220822"
        },
        {
          "label": "吉林白城经济开发区",
          "value": "220871"
        },
        {
          "label": "洮南市",
          "value": "220881"
        },
        {
          "label": "大安市",
          "value": "220882"
        }
      ],
      [
        {
          "label": "延吉市",
          "value": "222401"
        },
        {
          "label": "图们市",
          "value": "222402"
        },
        {
          "label": "敦化市",
          "value": "222403"
        },
        {
          "label": "珲春市",
          "value": "222404"
        },
        {
          "label": "龙井市",
          "value": "222405"
        },
        {
          "label": "和龙市",
          "value": "222406"
        },
        {
          "label": "汪清县",
          "value": "222424"
        },
        {
          "label": "安图县",
          "value": "222426"
        }
      ]
    ],
    [
      [
        {
          "label": "道里区",
          "value": "230102"
        },
        {
          "label": "南岗区",
          "value": "230103"
        },
        {
          "label": "道外区",
          "value": "230104"
        },
        {
          "label": "平房区",
          "value": "230108"
        },
        {
          "label": "松北区",
          "value": "230109"
        },
        {
          "label": "香坊区",
          "value": "230110"
        },
        {
          "label": "呼兰区",
          "value": "230111"
        },
        {
          "label": "阿城区",
          "value": "230112"
        },
        {
          "label": "双城区",
          "value": "230113"
        },
        {
          "label": "依兰县",
          "value": "230123"
        },
        {
          "label": "方正县",
          "value": "230124"
        },
        {
          "label": "宾县",
          "value": "230125"
        },
        {
          "label": "巴彦县",
          "value": "230126"
        },
        {
          "label": "木兰县",
          "value": "230127"
        },
        {
          "label": "通河县",
          "value": "230128"
        },
        {
          "label": "延寿县",
          "value": "230129"
        },
        {
          "label": "尚志市",
          "value": "230183"
        },
        {
          "label": "五常市",
          "value": "230184"
        }
      ],
      [
        {
          "label": "龙沙区",
          "value": "230202"
        },
        {
          "label": "建华区",
          "value": "230203"
        },
        {
          "label": "铁锋区",
          "value": "230204"
        },
        {
          "label": "昂昂溪区",
          "value": "230205"
        },
        {
          "label": "富拉尔基区",
          "value": "230206"
        },
        {
          "label": "碾子山区",
          "value": "230207"
        },
        {
          "label": "梅里斯达斡尔族区",
          "value": "230208"
        },
        {
          "label": "龙江县",
          "value": "230221"
        },
        {
          "label": "依安县",
          "value": "230223"
        },
        {
          "label": "泰来县",
          "value": "230224"
        },
        {
          "label": "甘南县",
          "value": "230225"
        },
        {
          "label": "富裕县",
          "value": "230227"
        },
        {
          "label": "克山县",
          "value": "230229"
        },
        {
          "label": "克东县",
          "value": "230230"
        },
        {
          "label": "拜泉县",
          "value": "230231"
        },
        {
          "label": "讷河市",
          "value": "230281"
        }
      ],
      [
        {
          "label": "鸡冠区",
          "value": "230302"
        },
        {
          "label": "恒山区",
          "value": "230303"
        },
        {
          "label": "滴道区",
          "value": "230304"
        },
        {
          "label": "梨树区",
          "value": "230305"
        },
        {
          "label": "城子河区",
          "value": "230306"
        },
        {
          "label": "麻山区",
          "value": "230307"
        },
        {
          "label": "鸡东县",
          "value": "230321"
        },
        {
          "label": "虎林市",
          "value": "230381"
        },
        {
          "label": "密山市",
          "value": "230382"
        }
      ],
      [
        {
          "label": "向阳区",
          "value": "230402"
        },
        {
          "label": "工农区",
          "value": "230403"
        },
        {
          "label": "南山区",
          "value": "230404"
        },
        {
          "label": "兴安区",
          "value": "230405"
        },
        {
          "label": "东山区",
          "value": "230406"
        },
        {
          "label": "兴山区",
          "value": "230407"
        },
        {
          "label": "萝北县",
          "value": "230421"
        },
        {
          "label": "绥滨县",
          "value": "230422"
        }
      ],
      [
        {
          "label": "尖山区",
          "value": "230502"
        },
        {
          "label": "岭东区",
          "value": "230503"
        },
        {
          "label": "四方台区",
          "value": "230505"
        },
        {
          "label": "宝山区",
          "value": "230506"
        },
        {
          "label": "集贤县",
          "value": "230521"
        },
        {
          "label": "友谊县",
          "value": "230522"
        },
        {
          "label": "宝清县",
          "value": "230523"
        },
        {
          "label": "饶河县",
          "value": "230524"
        }
      ],
      [
        {
          "label": "萨尔图区",
          "value": "230602"
        },
        {
          "label": "龙凤区",
          "value": "230603"
        },
        {
          "label": "让胡路区",
          "value": "230604"
        },
        {
          "label": "红岗区",
          "value": "230605"
        },
        {
          "label": "大同区",
          "value": "230606"
        },
        {
          "label": "肇州县",
          "value": "230621"
        },
        {
          "label": "肇源县",
          "value": "230622"
        },
        {
          "label": "林甸县",
          "value": "230623"
        },
        {
          "label": "杜尔伯特蒙古族自治县",
          "value": "230624"
        },
        {
          "label": "大庆高新技术产业开发区",
          "value": "230671"
        }
      ],
      [
        {
          "label": "伊春区",
          "value": "230702"
        },
        {
          "label": "南岔区",
          "value": "230703"
        },
        {
          "label": "友好区",
          "value": "230704"
        },
        {
          "label": "西林区",
          "value": "230705"
        },
        {
          "label": "翠峦区",
          "value": "230706"
        },
        {
          "label": "新青区",
          "value": "230707"
        },
        {
          "label": "美溪区",
          "value": "230708"
        },
        {
          "label": "金山屯区",
          "value": "230709"
        },
        {
          "label": "五营区",
          "value": "230710"
        },
        {
          "label": "乌马河区",
          "value": "230711"
        },
        {
          "label": "汤旺河区",
          "value": "230712"
        },
        {
          "label": "带岭区",
          "value": "230713"
        },
        {
          "label": "乌伊岭区",
          "value": "230714"
        },
        {
          "label": "红星区",
          "value": "230715"
        },
        {
          "label": "上甘岭区",
          "value": "230716"
        },
        {
          "label": "嘉荫县",
          "value": "230722"
        },
        {
          "label": "铁力市",
          "value": "230781"
        }
      ],
      [
        {
          "label": "向阳区",
          "value": "230803"
        },
        {
          "label": "前进区",
          "value": "230804"
        },
        {
          "label": "东风区",
          "value": "230805"
        },
        {
          "label": "郊区",
          "value": "230811"
        },
        {
          "label": "桦南县",
          "value": "230822"
        },
        {
          "label": "桦川县",
          "value": "230826"
        },
        {
          "label": "汤原县",
          "value": "230828"
        },
        {
          "label": "同江市",
          "value": "230881"
        },
        {
          "label": "富锦市",
          "value": "230882"
        },
        {
          "label": "抚远市",
          "value": "230883"
        }
      ],
      [
        {
          "label": "新兴区",
          "value": "230902"
        },
        {
          "label": "桃山区",
          "value": "230903"
        },
        {
          "label": "茄子河区",
          "value": "230904"
        },
        {
          "label": "勃利县",
          "value": "230921"
        }
      ],
      [
        {
          "label": "东安区",
          "value": "231002"
        },
        {
          "label": "阳明区",
          "value": "231003"
        },
        {
          "label": "爱民区",
          "value": "231004"
        },
        {
          "label": "西安区",
          "value": "231005"
        },
        {
          "label": "林口县",
          "value": "231025"
        },
        {
          "label": "牡丹江经济技术开发区",
          "value": "231071"
        },
        {
          "label": "绥芬河市",
          "value": "231081"
        },
        {
          "label": "海林市",
          "value": "231083"
        },
        {
          "label": "宁安市",
          "value": "231084"
        },
        {
          "label": "穆棱市",
          "value": "231085"
        },
        {
          "label": "东宁市",
          "value": "231086"
        }
      ],
      [
        {
          "label": "爱辉区",
          "value": "231102"
        },
        {
          "label": "嫩江县",
          "value": "231121"
        },
        {
          "label": "逊克县",
          "value": "231123"
        },
        {
          "label": "孙吴县",
          "value": "231124"
        },
        {
          "label": "北安市",
          "value": "231181"
        },
        {
          "label": "五大连池市",
          "value": "231182"
        }
      ],
      [
        {
          "label": "北林区",
          "value": "231202"
        },
        {
          "label": "望奎县",
          "value": "231221"
        },
        {
          "label": "兰西县",
          "value": "231222"
        },
        {
          "label": "青冈县",
          "value": "231223"
        },
        {
          "label": "庆安县",
          "value": "231224"
        },
        {
          "label": "明水县",
          "value": "231225"
        },
        {
          "label": "绥棱县",
          "value": "231226"
        },
        {
          "label": "安达市",
          "value": "231281"
        },
        {
          "label": "肇东市",
          "value": "231282"
        },
        {
          "label": "海伦市",
          "value": "231283"
        }
      ],
      [
        {
          "label": "加格达奇区",
          "value": "232701"
        },
        {
          "label": "松岭区",
          "value": "232702"
        },
        {
          "label": "新林区",
          "value": "232703"
        },
        {
          "label": "呼中区",
          "value": "232704"
        },
        {
          "label": "呼玛县",
          "value": "232721"
        },
        {
          "label": "塔河县",
          "value": "232722"
        },
        {
          "label": "漠河县",
          "value": "232723"
        }
      ]
    ],
    [
      [
        {
          "label": "黄浦区",
          "value": "310101"
        },
        {
          "label": "徐汇区",
          "value": "310104"
        },
        {
          "label": "长宁区",
          "value": "310105"
        },
        {
          "label": "静安区",
          "value": "310106"
        },
        {
          "label": "普陀区",
          "value": "310107"
        },
        {
          "label": "虹口区",
          "value": "310109"
        },
        {
          "label": "杨浦区",
          "value": "310110"
        },
        {
          "label": "闵行区",
          "value": "310112"
        },
        {
          "label": "宝山区",
          "value": "310113"
        },
        {
          "label": "嘉定区",
          "value": "310114"
        },
        {
          "label": "浦东新区",
          "value": "310115"
        },
        {
          "label": "金山区",
          "value": "310116"
        },
        {
          "label": "松江区",
          "value": "310117"
        },
        {
          "label": "青浦区",
          "value": "310118"
        },
        {
          "label": "奉贤区",
          "value": "310120"
        },
        {
          "label": "崇明区",
          "value": "310151"
        }
      ]
    ],
    [
      [
        {
          "label": "玄武区",
          "value": "320102"
        },
        {
          "label": "秦淮区",
          "value": "320104"
        },
        {
          "label": "建邺区",
          "value": "320105"
        },
        {
          "label": "鼓楼区",
          "value": "320106"
        },
        {
          "label": "浦口区",
          "value": "320111"
        },
        {
          "label": "栖霞区",
          "value": "320113"
        },
        {
          "label": "雨花台区",
          "value": "320114"
        },
        {
          "label": "江宁区",
          "value": "320115"
        },
        {
          "label": "六合区",
          "value": "320116"
        },
        {
          "label": "溧水区",
          "value": "320117"
        },
        {
          "label": "高淳区",
          "value": "320118"
        }
      ],
      [
        {
          "label": "锡山区",
          "value": "320205"
        },
        {
          "label": "惠山区",
          "value": "320206"
        },
        {
          "label": "滨湖区",
          "value": "320211"
        },
        {
          "label": "梁溪区",
          "value": "320213"
        },
        {
          "label": "新吴区",
          "value": "320214"
        },
        {
          "label": "江阴市",
          "value": "320281"
        },
        {
          "label": "宜兴市",
          "value": "320282"
        }
      ],
      [
        {
          "label": "鼓楼区",
          "value": "320302"
        },
        {
          "label": "云龙区",
          "value": "320303"
        },
        {
          "label": "贾汪区",
          "value": "320305"
        },
        {
          "label": "泉山区",
          "value": "320311"
        },
        {
          "label": "铜山区",
          "value": "320312"
        },
        {
          "label": "丰县",
          "value": "320321"
        },
        {
          "label": "沛县",
          "value": "320322"
        },
        {
          "label": "睢宁县",
          "value": "320324"
        },
        {
          "label": "徐州经济技术开发区",
          "value": "320371"
        },
        {
          "label": "新沂市",
          "value": "320381"
        },
        {
          "label": "邳州市",
          "value": "320382"
        }
      ],
      [
        {
          "label": "天宁区",
          "value": "320402"
        },
        {
          "label": "钟楼区",
          "value": "320404"
        },
        {
          "label": "新北区",
          "value": "320411"
        },
        {
          "label": "武进区",
          "value": "320412"
        },
        {
          "label": "金坛区",
          "value": "320413"
        },
        {
          "label": "溧阳市",
          "value": "320481"
        }
      ],
      [
        {
          "label": "虎丘区",
          "value": "320505"
        },
        {
          "label": "吴中区",
          "value": "320506"
        },
        {
          "label": "相城区",
          "value": "320507"
        },
        {
          "label": "姑苏区",
          "value": "320508"
        },
        {
          "label": "吴江区",
          "value": "320509"
        },
        {
          "label": "苏州工业园区",
          "value": "320571"
        },
        {
          "label": "常熟市",
          "value": "320581"
        },
        {
          "label": "张家港市",
          "value": "320582"
        },
        {
          "label": "昆山市",
          "value": "320583"
        },
        {
          "label": "太仓市",
          "value": "320585"
        }
      ],
      [
        {
          "label": "崇川区",
          "value": "320602"
        },
        {
          "label": "港闸区",
          "value": "320611"
        },
        {
          "label": "通州区",
          "value": "320612"
        },
        {
          "label": "海安县",
          "value": "320621"
        },
        {
          "label": "如东县",
          "value": "320623"
        },
        {
          "label": "南通经济技术开发区",
          "value": "320671"
        },
        {
          "label": "启东市",
          "value": "320681"
        },
        {
          "label": "如皋市",
          "value": "320682"
        },
        {
          "label": "海门市",
          "value": "320684"
        }
      ],
      [
        {
          "label": "连云区",
          "value": "320703"
        },
        {
          "label": "海州区",
          "value": "320706"
        },
        {
          "label": "赣榆区",
          "value": "320707"
        },
        {
          "label": "东海县",
          "value": "320722"
        },
        {
          "label": "灌云县",
          "value": "320723"
        },
        {
          "label": "灌南县",
          "value": "320724"
        },
        {
          "label": "连云港经济技术开发区",
          "value": "320771"
        },
        {
          "label": "连云港高新技术产业开发区",
          "value": "320772"
        }
      ],
      [
        {
          "label": "淮安区",
          "value": "320803"
        },
        {
          "label": "淮阴区",
          "value": "320804"
        },
        {
          "label": "清江浦区",
          "value": "320812"
        },
        {
          "label": "洪泽区",
          "value": "320813"
        },
        {
          "label": "涟水县",
          "value": "320826"
        },
        {
          "label": "盱眙县",
          "value": "320830"
        },
        {
          "label": "金湖县",
          "value": "320831"
        },
        {
          "label": "淮安经济技术开发区",
          "value": "320871"
        }
      ],
      [
        {
          "label": "亭湖区",
          "value": "320902"
        },
        {
          "label": "盐都区",
          "value": "320903"
        },
        {
          "label": "大丰区",
          "value": "320904"
        },
        {
          "label": "响水县",
          "value": "320921"
        },
        {
          "label": "滨海县",
          "value": "320922"
        },
        {
          "label": "阜宁县",
          "value": "320923"
        },
        {
          "label": "射阳县",
          "value": "320924"
        },
        {
          "label": "建湖县",
          "value": "320925"
        },
        {
          "label": "盐城经济技术开发区",
          "value": "320971"
        },
        {
          "label": "东台市",
          "value": "320981"
        }
      ],
      [
        {
          "label": "广陵区",
          "value": "321002"
        },
        {
          "label": "邗江区",
          "value": "321003"
        },
        {
          "label": "江都区",
          "value": "321012"
        },
        {
          "label": "宝应县",
          "value": "321023"
        },
        {
          "label": "扬州经济技术开发区",
          "value": "321071"
        },
        {
          "label": "仪征市",
          "value": "321081"
        },
        {
          "label": "高邮市",
          "value": "321084"
        }
      ],
      [
        {
          "label": "京口区",
          "value": "321102"
        },
        {
          "label": "润州区",
          "value": "321111"
        },
        {
          "label": "丹徒区",
          "value": "321112"
        },
        {
          "label": "镇江新区",
          "value": "321171"
        },
        {
          "label": "丹阳市",
          "value": "321181"
        },
        {
          "label": "扬中市",
          "value": "321182"
        },
        {
          "label": "句容市",
          "value": "321183"
        }
      ],
      [
        {
          "label": "海陵区",
          "value": "321202"
        },
        {
          "label": "高港区",
          "value": "321203"
        },
        {
          "label": "姜堰区",
          "value": "321204"
        },
        {
          "label": "泰州医药高新技术产业开发区",
          "value": "321271"
        },
        {
          "label": "兴化市",
          "value": "321281"
        },
        {
          "label": "靖江市",
          "value": "321282"
        },
        {
          "label": "泰兴市",
          "value": "321283"
        }
      ],
      [
        {
          "label": "宿城区",
          "value": "321302"
        },
        {
          "label": "宿豫区",
          "value": "321311"
        },
        {
          "label": "沭阳县",
          "value": "321322"
        },
        {
          "label": "泗阳县",
          "value": "321323"
        },
        {
          "label": "泗洪县",
          "value": "321324"
        },
        {
          "label": "宿迁经济技术开发区",
          "value": "321371"
        }
      ]
    ],
    [
      [
        {
          "label": "上城区",
          "value": "330102"
        },
        {
          "label": "下城区",
          "value": "330103"
        },
        {
          "label": "江干区",
          "value": "330104"
        },
        {
          "label": "拱墅区",
          "value": "330105"
        },
        {
          "label": "西湖区",
          "value": "330106"
        },
        {
          "label": "滨江区",
          "value": "330108"
        },
        {
          "label": "萧山区",
          "value": "330109"
        },
        {
          "label": "余杭区",
          "value": "330110"
        },
        {
          "label": "富阳区",
          "value": "330111"
        },
        {
          "label": "临安区",
          "value": "330112"
        },
        {
          "label": "桐庐县",
          "value": "330122"
        },
        {
          "label": "淳安县",
          "value": "330127"
        },
        {
          "label": "建德市",
          "value": "330182"
        }
      ],
      [
        {
          "label": "海曙区",
          "value": "330203"
        },
        {
          "label": "江北区",
          "value": "330205"
        },
        {
          "label": "北仑区",
          "value": "330206"
        },
        {
          "label": "镇海区",
          "value": "330211"
        },
        {
          "label": "鄞州区",
          "value": "330212"
        },
        {
          "label": "奉化区",
          "value": "330213"
        },
        {
          "label": "象山县",
          "value": "330225"
        },
        {
          "label": "宁海县",
          "value": "330226"
        },
        {
          "label": "余姚市",
          "value": "330281"
        },
        {
          "label": "慈溪市",
          "value": "330282"
        }
      ],
      [
        {
          "label": "鹿城区",
          "value": "330302"
        },
        {
          "label": "龙湾区",
          "value": "330303"
        },
        {
          "label": "瓯海区",
          "value": "330304"
        },
        {
          "label": "洞头区",
          "value": "330305"
        },
        {
          "label": "永嘉县",
          "value": "330324"
        },
        {
          "label": "平阳县",
          "value": "330326"
        },
        {
          "label": "苍南县",
          "value": "330327"
        },
        {
          "label": "文成县",
          "value": "330328"
        },
        {
          "label": "泰顺县",
          "value": "330329"
        },
        {
          "label": "温州经济技术开发区",
          "value": "330371"
        },
        {
          "label": "瑞安市",
          "value": "330381"
        },
        {
          "label": "乐清市",
          "value": "330382"
        }
      ],
      [
        {
          "label": "南湖区",
          "value": "330402"
        },
        {
          "label": "秀洲区",
          "value": "330411"
        },
        {
          "label": "嘉善县",
          "value": "330421"
        },
        {
          "label": "海盐县",
          "value": "330424"
        },
        {
          "label": "海宁市",
          "value": "330481"
        },
        {
          "label": "平湖市",
          "value": "330482"
        },
        {
          "label": "桐乡市",
          "value": "330483"
        }
      ],
      [
        {
          "label": "吴兴区",
          "value": "330502"
        },
        {
          "label": "南浔区",
          "value": "330503"
        },
        {
          "label": "德清县",
          "value": "330521"
        },
        {
          "label": "长兴县",
          "value": "330522"
        },
        {
          "label": "安吉县",
          "value": "330523"
        }
      ],
      [
        {
          "label": "越城区",
          "value": "330602"
        },
        {
          "label": "柯桥区",
          "value": "330603"
        },
        {
          "label": "上虞区",
          "value": "330604"
        },
        {
          "label": "新昌县",
          "value": "330624"
        },
        {
          "label": "诸暨市",
          "value": "330681"
        },
        {
          "label": "嵊州市",
          "value": "330683"
        }
      ],
      [
        {
          "label": "婺城区",
          "value": "330702"
        },
        {
          "label": "金东区",
          "value": "330703"
        },
        {
          "label": "武义县",
          "value": "330723"
        },
        {
          "label": "浦江县",
          "value": "330726"
        },
        {
          "label": "磐安县",
          "value": "330727"
        },
        {
          "label": "兰溪市",
          "value": "330781"
        },
        {
          "label": "义乌市",
          "value": "330782"
        },
        {
          "label": "东阳市",
          "value": "330783"
        },
        {
          "label": "永康市",
          "value": "330784"
        }
      ],
      [
        {
          "label": "柯城区",
          "value": "330802"
        },
        {
          "label": "衢江区",
          "value": "330803"
        },
        {
          "label": "常山县",
          "value": "330822"
        },
        {
          "label": "开化县",
          "value": "330824"
        },
        {
          "label": "龙游县",
          "value": "330825"
        },
        {
          "label": "江山市",
          "value": "330881"
        }
      ],
      [
        {
          "label": "定海区",
          "value": "330902"
        },
        {
          "label": "普陀区",
          "value": "330903"
        },
        {
          "label": "岱山县",
          "value": "330921"
        },
        {
          "label": "嵊泗县",
          "value": "330922"
        }
      ],
      [
        {
          "label": "椒江区",
          "value": "331002"
        },
        {
          "label": "黄岩区",
          "value": "331003"
        },
        {
          "label": "路桥区",
          "value": "331004"
        },
        {
          "label": "三门县",
          "value": "331022"
        },
        {
          "label": "天台县",
          "value": "331023"
        },
        {
          "label": "仙居县",
          "value": "331024"
        },
        {
          "label": "温岭市",
          "value": "331081"
        },
        {
          "label": "临海市",
          "value": "331082"
        },
        {
          "label": "玉环市",
          "value": "331083"
        }
      ],
      [
        {
          "label": "莲都区",
          "value": "331102"
        },
        {
          "label": "青田县",
          "value": "331121"
        },
        {
          "label": "缙云县",
          "value": "331122"
        },
        {
          "label": "遂昌县",
          "value": "331123"
        },
        {
          "label": "松阳县",
          "value": "331124"
        },
        {
          "label": "云和县",
          "value": "331125"
        },
        {
          "label": "庆元县",
          "value": "331126"
        },
        {
          "label": "景宁畲族自治县",
          "value": "331127"
        },
        {
          "label": "龙泉市",
          "value": "331181"
        }
      ]
    ],
    [
      [
        {
          "label": "瑶海区",
          "value": "340102"
        },
        {
          "label": "庐阳区",
          "value": "340103"
        },
        {
          "label": "蜀山区",
          "value": "340104"
        },
        {
          "label": "包河区",
          "value": "340111"
        },
        {
          "label": "长丰县",
          "value": "340121"
        },
        {
          "label": "肥东县",
          "value": "340122"
        },
        {
          "label": "肥西县",
          "value": "340123"
        },
        {
          "label": "庐江县",
          "value": "340124"
        },
        {
          "label": "合肥高新技术产业开发区",
          "value": "340171"
        },
        {
          "label": "合肥经济技术开发区",
          "value": "340172"
        },
        {
          "label": "合肥新站高新技术产业开发区",
          "value": "340173"
        },
        {
          "label": "巢湖市",
          "value": "340181"
        }
      ],
      [
        {
          "label": "镜湖区",
          "value": "340202"
        },
        {
          "label": "弋江区",
          "value": "340203"
        },
        {
          "label": "鸠江区",
          "value": "340207"
        },
        {
          "label": "三山区",
          "value": "340208"
        },
        {
          "label": "芜湖县",
          "value": "340221"
        },
        {
          "label": "繁昌县",
          "value": "340222"
        },
        {
          "label": "南陵县",
          "value": "340223"
        },
        {
          "label": "无为县",
          "value": "340225"
        },
        {
          "label": "芜湖经济技术开发区",
          "value": "340271"
        },
        {
          "label": "安徽芜湖长江大桥经济开发区",
          "value": "340272"
        }
      ],
      [
        {
          "label": "龙子湖区",
          "value": "340302"
        },
        {
          "label": "蚌山区",
          "value": "340303"
        },
        {
          "label": "禹会区",
          "value": "340304"
        },
        {
          "label": "淮上区",
          "value": "340311"
        },
        {
          "label": "怀远县",
          "value": "340321"
        },
        {
          "label": "五河县",
          "value": "340322"
        },
        {
          "label": "固镇县",
          "value": "340323"
        },
        {
          "label": "蚌埠市高新技术开发区",
          "value": "340371"
        },
        {
          "label": "蚌埠市经济开发区",
          "value": "340372"
        }
      ],
      [
        {
          "label": "大通区",
          "value": "340402"
        },
        {
          "label": "田家庵区",
          "value": "340403"
        },
        {
          "label": "谢家集区",
          "value": "340404"
        },
        {
          "label": "八公山区",
          "value": "340405"
        },
        {
          "label": "潘集区",
          "value": "340406"
        },
        {
          "label": "凤台县",
          "value": "340421"
        },
        {
          "label": "寿县",
          "value": "340422"
        }
      ],
      [
        {
          "label": "花山区",
          "value": "340503"
        },
        {
          "label": "雨山区",
          "value": "340504"
        },
        {
          "label": "博望区",
          "value": "340506"
        },
        {
          "label": "当涂县",
          "value": "340521"
        },
        {
          "label": "含山县",
          "value": "340522"
        },
        {
          "label": "和县",
          "value": "340523"
        }
      ],
      [
        {
          "label": "杜集区",
          "value": "340602"
        },
        {
          "label": "相山区",
          "value": "340603"
        },
        {
          "label": "烈山区",
          "value": "340604"
        },
        {
          "label": "濉溪县",
          "value": "340621"
        }
      ],
      [
        {
          "label": "铜官区",
          "value": "340705"
        },
        {
          "label": "义安区",
          "value": "340706"
        },
        {
          "label": "郊区",
          "value": "340711"
        },
        {
          "label": "枞阳县",
          "value": "340722"
        }
      ],
      [
        {
          "label": "迎江区",
          "value": "340802"
        },
        {
          "label": "大观区",
          "value": "340803"
        },
        {
          "label": "宜秀区",
          "value": "340811"
        },
        {
          "label": "怀宁县",
          "value": "340822"
        },
        {
          "label": "潜山县",
          "value": "340824"
        },
        {
          "label": "太湖县",
          "value": "340825"
        },
        {
          "label": "宿松县",
          "value": "340826"
        },
        {
          "label": "望江县",
          "value": "340827"
        },
        {
          "label": "岳西县",
          "value": "340828"
        },
        {
          "label": "安徽安庆经济开发区",
          "value": "340871"
        },
        {
          "label": "桐城市",
          "value": "340881"
        }
      ],
      [
        {
          "label": "屯溪区",
          "value": "341002"
        },
        {
          "label": "黄山区",
          "value": "341003"
        },
        {
          "label": "徽州区",
          "value": "341004"
        },
        {
          "label": "歙县",
          "value": "341021"
        },
        {
          "label": "休宁县",
          "value": "341022"
        },
        {
          "label": "黟县",
          "value": "341023"
        },
        {
          "label": "祁门县",
          "value": "341024"
        }
      ],
      [
        {
          "label": "琅琊区",
          "value": "341102"
        },
        {
          "label": "南谯区",
          "value": "341103"
        },
        {
          "label": "来安县",
          "value": "341122"
        },
        {
          "label": "全椒县",
          "value": "341124"
        },
        {
          "label": "定远县",
          "value": "341125"
        },
        {
          "label": "凤阳县",
          "value": "341126"
        },
        {
          "label": "苏滁现代产业园",
          "value": "341171"
        },
        {
          "label": "滁州经济技术开发区",
          "value": "341172"
        },
        {
          "label": "天长市",
          "value": "341181"
        },
        {
          "label": "明光市",
          "value": "341182"
        }
      ],
      [
        {
          "label": "颍州区",
          "value": "341202"
        },
        {
          "label": "颍东区",
          "value": "341203"
        },
        {
          "label": "颍泉区",
          "value": "341204"
        },
        {
          "label": "临泉县",
          "value": "341221"
        },
        {
          "label": "太和县",
          "value": "341222"
        },
        {
          "label": "阜南县",
          "value": "341225"
        },
        {
          "label": "颍上县",
          "value": "341226"
        },
        {
          "label": "阜阳合肥现代产业园区",
          "value": "341271"
        },
        {
          "label": "阜阳经济技术开发区",
          "value": "341272"
        },
        {
          "label": "界首市",
          "value": "341282"
        }
      ],
      [
        {
          "label": "埇桥区",
          "value": "341302"
        },
        {
          "label": "砀山县",
          "value": "341321"
        },
        {
          "label": "萧县",
          "value": "341322"
        },
        {
          "label": "灵璧县",
          "value": "341323"
        },
        {
          "label": "泗县",
          "value": "341324"
        },
        {
          "label": "宿州马鞍山现代产业园区",
          "value": "341371"
        },
        {
          "label": "宿州经济技术开发区",
          "value": "341372"
        }
      ],
      [
        {
          "label": "金安区",
          "value": "341502"
        },
        {
          "label": "裕安区",
          "value": "341503"
        },
        {
          "label": "叶集区",
          "value": "341504"
        },
        {
          "label": "霍邱县",
          "value": "341522"
        },
        {
          "label": "舒城县",
          "value": "341523"
        },
        {
          "label": "金寨县",
          "value": "341524"
        },
        {
          "label": "霍山县",
          "value": "341525"
        }
      ],
      [
        {
          "label": "谯城区",
          "value": "341602"
        },
        {
          "label": "涡阳县",
          "value": "341621"
        },
        {
          "label": "蒙城县",
          "value": "341622"
        },
        {
          "label": "利辛县",
          "value": "341623"
        }
      ],
      [
        {
          "label": "贵池区",
          "value": "341702"
        },
        {
          "label": "东至县",
          "value": "341721"
        },
        {
          "label": "石台县",
          "value": "341722"
        },
        {
          "label": "青阳县",
          "value": "341723"
        }
      ],
      [
        {
          "label": "宣州区",
          "value": "341802"
        },
        {
          "label": "郎溪县",
          "value": "341821"
        },
        {
          "label": "广德县",
          "value": "341822"
        },
        {
          "label": "泾县",
          "value": "341823"
        },
        {
          "label": "绩溪县",
          "value": "341824"
        },
        {
          "label": "旌德县",
          "value": "341825"
        },
        {
          "label": "宣城市经济开发区",
          "value": "341871"
        },
        {
          "label": "宁国市",
          "value": "341881"
        }
      ]
    ],
    [
      [
        {
          "label": "鼓楼区",
          "value": "350102"
        },
        {
          "label": "台江区",
          "value": "350103"
        },
        {
          "label": "仓山区",
          "value": "350104"
        },
        {
          "label": "马尾区",
          "value": "350105"
        },
        {
          "label": "晋安区",
          "value": "350111"
        },
        {
          "label": "闽侯县",
          "value": "350121"
        },
        {
          "label": "连江县",
          "value": "350122"
        },
        {
          "label": "罗源县",
          "value": "350123"
        },
        {
          "label": "闽清县",
          "value": "350124"
        },
        {
          "label": "永泰县",
          "value": "350125"
        },
        {
          "label": "平潭县",
          "value": "350128"
        },
        {
          "label": "福清市",
          "value": "350181"
        },
        {
          "label": "长乐市",
          "value": "350182"
        }
      ],
      [
        {
          "label": "思明区",
          "value": "350203"
        },
        {
          "label": "海沧区",
          "value": "350205"
        },
        {
          "label": "湖里区",
          "value": "350206"
        },
        {
          "label": "集美区",
          "value": "350211"
        },
        {
          "label": "同安区",
          "value": "350212"
        },
        {
          "label": "翔安区",
          "value": "350213"
        }
      ],
      [
        {
          "label": "城厢区",
          "value": "350302"
        },
        {
          "label": "涵江区",
          "value": "350303"
        },
        {
          "label": "荔城区",
          "value": "350304"
        },
        {
          "label": "秀屿区",
          "value": "350305"
        },
        {
          "label": "仙游县",
          "value": "350322"
        }
      ],
      [
        {
          "label": "梅列区",
          "value": "350402"
        },
        {
          "label": "三元区",
          "value": "350403"
        },
        {
          "label": "明溪县",
          "value": "350421"
        },
        {
          "label": "清流县",
          "value": "350423"
        },
        {
          "label": "宁化县",
          "value": "350424"
        },
        {
          "label": "大田县",
          "value": "350425"
        },
        {
          "label": "尤溪县",
          "value": "350426"
        },
        {
          "label": "沙县",
          "value": "350427"
        },
        {
          "label": "将乐县",
          "value": "350428"
        },
        {
          "label": "泰宁县",
          "value": "350429"
        },
        {
          "label": "建宁县",
          "value": "350430"
        },
        {
          "label": "永安市",
          "value": "350481"
        }
      ],
      [
        {
          "label": "鲤城区",
          "value": "350502"
        },
        {
          "label": "丰泽区",
          "value": "350503"
        },
        {
          "label": "洛江区",
          "value": "350504"
        },
        {
          "label": "泉港区",
          "value": "350505"
        },
        {
          "label": "惠安县",
          "value": "350521"
        },
        {
          "label": "安溪县",
          "value": "350524"
        },
        {
          "label": "永春县",
          "value": "350525"
        },
        {
          "label": "德化县",
          "value": "350526"
        },
        {
          "label": "金门县",
          "value": "350527"
        },
        {
          "label": "石狮市",
          "value": "350581"
        },
        {
          "label": "晋江市",
          "value": "350582"
        },
        {
          "label": "南安市",
          "value": "350583"
        }
      ],
      [
        {
          "label": "芗城区",
          "value": "350602"
        },
        {
          "label": "龙文区",
          "value": "350603"
        },
        {
          "label": "云霄县",
          "value": "350622"
        },
        {
          "label": "漳浦县",
          "value": "350623"
        },
        {
          "label": "诏安县",
          "value": "350624"
        },
        {
          "label": "长泰县",
          "value": "350625"
        },
        {
          "label": "东山县",
          "value": "350626"
        },
        {
          "label": "南靖县",
          "value": "350627"
        },
        {
          "label": "平和县",
          "value": "350628"
        },
        {
          "label": "华安县",
          "value": "350629"
        },
        {
          "label": "龙海市",
          "value": "350681"
        }
      ],
      [
        {
          "label": "延平区",
          "value": "350702"
        },
        {
          "label": "建阳区",
          "value": "350703"
        },
        {
          "label": "顺昌县",
          "value": "350721"
        },
        {
          "label": "浦城县",
          "value": "350722"
        },
        {
          "label": "光泽县",
          "value": "350723"
        },
        {
          "label": "松溪县",
          "value": "350724"
        },
        {
          "label": "政和县",
          "value": "350725"
        },
        {
          "label": "邵武市",
          "value": "350781"
        },
        {
          "label": "武夷山市",
          "value": "350782"
        },
        {
          "label": "建瓯市",
          "value": "350783"
        }
      ],
      [
        {
          "label": "新罗区",
          "value": "350802"
        },
        {
          "label": "永定区",
          "value": "350803"
        },
        {
          "label": "长汀县",
          "value": "350821"
        },
        {
          "label": "上杭县",
          "value": "350823"
        },
        {
          "label": "武平县",
          "value": "350824"
        },
        {
          "label": "连城县",
          "value": "350825"
        },
        {
          "label": "漳平市",
          "value": "350881"
        }
      ],
      [
        {
          "label": "蕉城区",
          "value": "350902"
        },
        {
          "label": "霞浦县",
          "value": "350921"
        },
        {
          "label": "古田县",
          "value": "350922"
        },
        {
          "label": "屏南县",
          "value": "350923"
        },
        {
          "label": "寿宁县",
          "value": "350924"
        },
        {
          "label": "周宁县",
          "value": "350925"
        },
        {
          "label": "柘荣县",
          "value": "350926"
        },
        {
          "label": "福安市",
          "value": "350981"
        },
        {
          "label": "福鼎市",
          "value": "350982"
        }
      ]
    ],
    [
      [
        {
          "label": "东湖区",
          "value": "360102"
        },
        {
          "label": "西湖区",
          "value": "360103"
        },
        {
          "label": "青云谱区",
          "value": "360104"
        },
        {
          "label": "湾里区",
          "value": "360105"
        },
        {
          "label": "青山湖区",
          "value": "360111"
        },
        {
          "label": "新建区",
          "value": "360112"
        },
        {
          "label": "南昌县",
          "value": "360121"
        },
        {
          "label": "安义县",
          "value": "360123"
        },
        {
          "label": "进贤县",
          "value": "360124"
        }
      ],
      [
        {
          "label": "昌江区",
          "value": "360202"
        },
        {
          "label": "珠山区",
          "value": "360203"
        },
        {
          "label": "浮梁县",
          "value": "360222"
        },
        {
          "label": "乐平市",
          "value": "360281"
        }
      ],
      [
        {
          "label": "安源区",
          "value": "360302"
        },
        {
          "label": "湘东区",
          "value": "360313"
        },
        {
          "label": "莲花县",
          "value": "360321"
        },
        {
          "label": "上栗县",
          "value": "360322"
        },
        {
          "label": "芦溪县",
          "value": "360323"
        }
      ],
      [
        {
          "label": "濂溪区",
          "value": "360402"
        },
        {
          "label": "浔阳区",
          "value": "360403"
        },
        {
          "label": "柴桑区",
          "value": "360404"
        },
        {
          "label": "武宁县",
          "value": "360423"
        },
        {
          "label": "修水县",
          "value": "360424"
        },
        {
          "label": "永修县",
          "value": "360425"
        },
        {
          "label": "德安县",
          "value": "360426"
        },
        {
          "label": "都昌县",
          "value": "360428"
        },
        {
          "label": "湖口县",
          "value": "360429"
        },
        {
          "label": "彭泽县",
          "value": "360430"
        },
        {
          "label": "瑞昌市",
          "value": "360481"
        },
        {
          "label": "共青城市",
          "value": "360482"
        },
        {
          "label": "庐山市",
          "value": "360483"
        }
      ],
      [
        {
          "label": "渝水区",
          "value": "360502"
        },
        {
          "label": "分宜县",
          "value": "360521"
        }
      ],
      [
        {
          "label": "月湖区",
          "value": "360602"
        },
        {
          "label": "余江县",
          "value": "360622"
        },
        {
          "label": "贵溪市",
          "value": "360681"
        }
      ],
      [
        {
          "label": "章贡区",
          "value": "360702"
        },
        {
          "label": "南康区",
          "value": "360703"
        },
        {
          "label": "赣县区",
          "value": "360704"
        },
        {
          "label": "信丰县",
          "value": "360722"
        },
        {
          "label": "大余县",
          "value": "360723"
        },
        {
          "label": "上犹县",
          "value": "360724"
        },
        {
          "label": "崇义县",
          "value": "360725"
        },
        {
          "label": "安远县",
          "value": "360726"
        },
        {
          "label": "龙南县",
          "value": "360727"
        },
        {
          "label": "定南县",
          "value": "360728"
        },
        {
          "label": "全南县",
          "value": "360729"
        },
        {
          "label": "宁都县",
          "value": "360730"
        },
        {
          "label": "于都县",
          "value": "360731"
        },
        {
          "label": "兴国县",
          "value": "360732"
        },
        {
          "label": "会昌县",
          "value": "360733"
        },
        {
          "label": "寻乌县",
          "value": "360734"
        },
        {
          "label": "石城县",
          "value": "360735"
        },
        {
          "label": "瑞金市",
          "value": "360781"
        }
      ],
      [
        {
          "label": "吉州区",
          "value": "360802"
        },
        {
          "label": "青原区",
          "value": "360803"
        },
        {
          "label": "吉安县",
          "value": "360821"
        },
        {
          "label": "吉水县",
          "value": "360822"
        },
        {
          "label": "峡江县",
          "value": "360823"
        },
        {
          "label": "新干县",
          "value": "360824"
        },
        {
          "label": "永丰县",
          "value": "360825"
        },
        {
          "label": "泰和县",
          "value": "360826"
        },
        {
          "label": "遂川县",
          "value": "360827"
        },
        {
          "label": "万安县",
          "value": "360828"
        },
        {
          "label": "安福县",
          "value": "360829"
        },
        {
          "label": "永新县",
          "value": "360830"
        },
        {
          "label": "井冈山市",
          "value": "360881"
        }
      ],
      [
        {
          "label": "袁州区",
          "value": "360902"
        },
        {
          "label": "奉新县",
          "value": "360921"
        },
        {
          "label": "万载县",
          "value": "360922"
        },
        {
          "label": "上高县",
          "value": "360923"
        },
        {
          "label": "宜丰县",
          "value": "360924"
        },
        {
          "label": "靖安县",
          "value": "360925"
        },
        {
          "label": "铜鼓县",
          "value": "360926"
        },
        {
          "label": "丰城市",
          "value": "360981"
        },
        {
          "label": "樟树市",
          "value": "360982"
        },
        {
          "label": "高安市",
          "value": "360983"
        }
      ],
      [
        {
          "label": "临川区",
          "value": "361002"
        },
        {
          "label": "东乡区",
          "value": "361003"
        },
        {
          "label": "南城县",
          "value": "361021"
        },
        {
          "label": "黎川县",
          "value": "361022"
        },
        {
          "label": "南丰县",
          "value": "361023"
        },
        {
          "label": "崇仁县",
          "value": "361024"
        },
        {
          "label": "乐安县",
          "value": "361025"
        },
        {
          "label": "宜黄县",
          "value": "361026"
        },
        {
          "label": "金溪县",
          "value": "361027"
        },
        {
          "label": "资溪县",
          "value": "361028"
        },
        {
          "label": "广昌县",
          "value": "361030"
        }
      ],
      [
        {
          "label": "信州区",
          "value": "361102"
        },
        {
          "label": "广丰区",
          "value": "361103"
        },
        {
          "label": "上饶县",
          "value": "361121"
        },
        {
          "label": "玉山县",
          "value": "361123"
        },
        {
          "label": "铅山县",
          "value": "361124"
        },
        {
          "label": "横峰县",
          "value": "361125"
        },
        {
          "label": "弋阳县",
          "value": "361126"
        },
        {
          "label": "余干县",
          "value": "361127"
        },
        {
          "label": "鄱阳县",
          "value": "361128"
        },
        {
          "label": "万年县",
          "value": "361129"
        },
        {
          "label": "婺源县",
          "value": "361130"
        },
        {
          "label": "德兴市",
          "value": "361181"
        }
      ]
    ],
    [
      [
        {
          "label": "历下区",
          "value": "370102"
        },
        {
          "label": "市中区",
          "value": "370103"
        },
        {
          "label": "槐荫区",
          "value": "370104"
        },
        {
          "label": "天桥区",
          "value": "370105"
        },
        {
          "label": "历城区",
          "value": "370112"
        },
        {
          "label": "长清区",
          "value": "370113"
        },
        {
          "label": "章丘区",
          "value": "370114"
        },
        {
          "label": "平阴县",
          "value": "370124"
        },
        {
          "label": "济阳县",
          "value": "370125"
        },
        {
          "label": "商河县",
          "value": "370126"
        },
        {
          "label": "济南高新技术产业开发区",
          "value": "370171"
        }
      ],
      [
        {
          "label": "市南区",
          "value": "370202"
        },
        {
          "label": "市北区",
          "value": "370203"
        },
        {
          "label": "黄岛区",
          "value": "370211"
        },
        {
          "label": "崂山区",
          "value": "370212"
        },
        {
          "label": "李沧区",
          "value": "370213"
        },
        {
          "label": "城阳区",
          "value": "370214"
        },
        {
          "label": "即墨区",
          "value": "370215"
        },
        {
          "label": "青岛高新技术产业开发区",
          "value": "370271"
        },
        {
          "label": "胶州市",
          "value": "370281"
        },
        {
          "label": "平度市",
          "value": "370283"
        },
        {
          "label": "莱西市",
          "value": "370285"
        }
      ],
      [
        {
          "label": "淄川区",
          "value": "370302"
        },
        {
          "label": "张店区",
          "value": "370303"
        },
        {
          "label": "博山区",
          "value": "370304"
        },
        {
          "label": "临淄区",
          "value": "370305"
        },
        {
          "label": "周村区",
          "value": "370306"
        },
        {
          "label": "桓台县",
          "value": "370321"
        },
        {
          "label": "高青县",
          "value": "370322"
        },
        {
          "label": "沂源县",
          "value": "370323"
        }
      ],
      [
        {
          "label": "市中区",
          "value": "370402"
        },
        {
          "label": "薛城区",
          "value": "370403"
        },
        {
          "label": "峄城区",
          "value": "370404"
        },
        {
          "label": "台儿庄区",
          "value": "370405"
        },
        {
          "label": "山亭区",
          "value": "370406"
        },
        {
          "label": "滕州市",
          "value": "370481"
        }
      ],
      [
        {
          "label": "东营区",
          "value": "370502"
        },
        {
          "label": "河口区",
          "value": "370503"
        },
        {
          "label": "垦利区",
          "value": "370505"
        },
        {
          "label": "利津县",
          "value": "370522"
        },
        {
          "label": "广饶县",
          "value": "370523"
        },
        {
          "label": "东营经济技术开发区",
          "value": "370571"
        },
        {
          "label": "东营港经济开发区",
          "value": "370572"
        }
      ],
      [
        {
          "label": "芝罘区",
          "value": "370602"
        },
        {
          "label": "福山区",
          "value": "370611"
        },
        {
          "label": "牟平区",
          "value": "370612"
        },
        {
          "label": "莱山区",
          "value": "370613"
        },
        {
          "label": "长岛县",
          "value": "370634"
        },
        {
          "label": "烟台高新技术产业开发区",
          "value": "370671"
        },
        {
          "label": "烟台经济技术开发区",
          "value": "370672"
        },
        {
          "label": "龙口市",
          "value": "370681"
        },
        {
          "label": "莱阳市",
          "value": "370682"
        },
        {
          "label": "莱州市",
          "value": "370683"
        },
        {
          "label": "蓬莱市",
          "value": "370684"
        },
        {
          "label": "招远市",
          "value": "370685"
        },
        {
          "label": "栖霞市",
          "value": "370686"
        },
        {
          "label": "海阳市",
          "value": "370687"
        }
      ],
      [
        {
          "label": "潍城区",
          "value": "370702"
        },
        {
          "label": "寒亭区",
          "value": "370703"
        },
        {
          "label": "坊子区",
          "value": "370704"
        },
        {
          "label": "奎文区",
          "value": "370705"
        },
        {
          "label": "临朐县",
          "value": "370724"
        },
        {
          "label": "昌乐县",
          "value": "370725"
        },
        {
          "label": "潍坊滨海经济技术开发区",
          "value": "370772"
        },
        {
          "label": "青州市",
          "value": "370781"
        },
        {
          "label": "诸城市",
          "value": "370782"
        },
        {
          "label": "寿光市",
          "value": "370783"
        },
        {
          "label": "安丘市",
          "value": "370784"
        },
        {
          "label": "高密市",
          "value": "370785"
        },
        {
          "label": "昌邑市",
          "value": "370786"
        }
      ],
      [
        {
          "label": "任城区",
          "value": "370811"
        },
        {
          "label": "兖州区",
          "value": "370812"
        },
        {
          "label": "微山县",
          "value": "370826"
        },
        {
          "label": "鱼台县",
          "value": "370827"
        },
        {
          "label": "金乡县",
          "value": "370828"
        },
        {
          "label": "嘉祥县",
          "value": "370829"
        },
        {
          "label": "汶上县",
          "value": "370830"
        },
        {
          "label": "泗水县",
          "value": "370831"
        },
        {
          "label": "梁山县",
          "value": "370832"
        },
        {
          "label": "济宁高新技术产业开发区",
          "value": "370871"
        },
        {
          "label": "曲阜市",
          "value": "370881"
        },
        {
          "label": "邹城市",
          "value": "370883"
        }
      ],
      [
        {
          "label": "泰山区",
          "value": "370902"
        },
        {
          "label": "岱岳区",
          "value": "370911"
        },
        {
          "label": "宁阳县",
          "value": "370921"
        },
        {
          "label": "东平县",
          "value": "370923"
        },
        {
          "label": "新泰市",
          "value": "370982"
        },
        {
          "label": "肥城市",
          "value": "370983"
        }
      ],
      [
        {
          "label": "环翠区",
          "value": "371002"
        },
        {
          "label": "文登区",
          "value": "371003"
        },
        {
          "label": "威海火炬高技术产业开发区",
          "value": "371071"
        },
        {
          "label": "威海经济技术开发区",
          "value": "371072"
        },
        {
          "label": "威海临港经济技术开发区",
          "value": "371073"
        },
        {
          "label": "荣成市",
          "value": "371082"
        },
        {
          "label": "乳山市",
          "value": "371083"
        }
      ],
      [
        {
          "label": "东港区",
          "value": "371102"
        },
        {
          "label": "岚山区",
          "value": "371103"
        },
        {
          "label": "五莲县",
          "value": "371121"
        },
        {
          "label": "莒县",
          "value": "371122"
        },
        {
          "label": "日照经济技术开发区",
          "value": "371171"
        },
        {
          "label": "日照国际海洋城",
          "value": "371172"
        }
      ],
      [
        {
          "label": "莱城区",
          "value": "371202"
        },
        {
          "label": "钢城区",
          "value": "371203"
        }
      ],
      [
        {
          "label": "兰山区",
          "value": "371302"
        },
        {
          "label": "罗庄区",
          "value": "371311"
        },
        {
          "label": "河东区",
          "value": "371312"
        },
        {
          "label": "沂南县",
          "value": "371321"
        },
        {
          "label": "郯城县",
          "value": "371322"
        },
        {
          "label": "沂水县",
          "value": "371323"
        },
        {
          "label": "兰陵县",
          "value": "371324"
        },
        {
          "label": "费县",
          "value": "371325"
        },
        {
          "label": "平邑县",
          "value": "371326"
        },
        {
          "label": "莒南县",
          "value": "371327"
        },
        {
          "label": "蒙阴县",
          "value": "371328"
        },
        {
          "label": "临沭县",
          "value": "371329"
        },
        {
          "label": "临沂高新技术产业开发区",
          "value": "371371"
        },
        {
          "label": "临沂经济技术开发区",
          "value": "371372"
        },
        {
          "label": "临沂临港经济开发区",
          "value": "371373"
        }
      ],
      [
        {
          "label": "德城区",
          "value": "371402"
        },
        {
          "label": "陵城区",
          "value": "371403"
        },
        {
          "label": "宁津县",
          "value": "371422"
        },
        {
          "label": "庆云县",
          "value": "371423"
        },
        {
          "label": "临邑县",
          "value": "371424"
        },
        {
          "label": "齐河县",
          "value": "371425"
        },
        {
          "label": "平原县",
          "value": "371426"
        },
        {
          "label": "夏津县",
          "value": "371427"
        },
        {
          "label": "武城县",
          "value": "371428"
        },
        {
          "label": "德州经济技术开发区",
          "value": "371471"
        },
        {
          "label": "德州运河经济开发区",
          "value": "371472"
        },
        {
          "label": "乐陵市",
          "value": "371481"
        },
        {
          "label": "禹城市",
          "value": "371482"
        }
      ],
      [
        {
          "label": "东昌府区",
          "value": "371502"
        },
        {
          "label": "阳谷县",
          "value": "371521"
        },
        {
          "label": "莘县",
          "value": "371522"
        },
        {
          "label": "茌平县",
          "value": "371523"
        },
        {
          "label": "东阿县",
          "value": "371524"
        },
        {
          "label": "冠县",
          "value": "371525"
        },
        {
          "label": "高唐县",
          "value": "371526"
        },
        {
          "label": "临清市",
          "value": "371581"
        }
      ],
      [
        {
          "label": "滨城区",
          "value": "371602"
        },
        {
          "label": "沾化区",
          "value": "371603"
        },
        {
          "label": "惠民县",
          "value": "371621"
        },
        {
          "label": "阳信县",
          "value": "371622"
        },
        {
          "label": "无棣县",
          "value": "371623"
        },
        {
          "label": "博兴县",
          "value": "371625"
        },
        {
          "label": "邹平县",
          "value": "371626"
        }
      ],
      [
        {
          "label": "牡丹区",
          "value": "371702"
        },
        {
          "label": "定陶区",
          "value": "371703"
        },
        {
          "label": "曹县",
          "value": "371721"
        },
        {
          "label": "单县",
          "value": "371722"
        },
        {
          "label": "成武县",
          "value": "371723"
        },
        {
          "label": "巨野县",
          "value": "371724"
        },
        {
          "label": "郓城县",
          "value": "371725"
        },
        {
          "label": "鄄城县",
          "value": "371726"
        },
        {
          "label": "东明县",
          "value": "371728"
        },
        {
          "label": "菏泽经济技术开发区",
          "value": "371771"
        },
        {
          "label": "菏泽高新技术开发区",
          "value": "371772"
        }
      ]
    ],
    [
      [
        {
          "label": "中原区",
          "value": "410102"
        },
        {
          "label": "二七区",
          "value": "410103"
        },
        {
          "label": "管城回族区",
          "value": "410104"
        },
        {
          "label": "金水区",
          "value": "410105"
        },
        {
          "label": "上街区",
          "value": "410106"
        },
        {
          "label": "惠济区",
          "value": "410108"
        },
        {
          "label": "中牟县",
          "value": "410122"
        },
        {
          "label": "郑州经济技术开发区",
          "value": "410171"
        },
        {
          "label": "郑州高新技术产业开发区",
          "value": "410172"
        },
        {
          "label": "郑州航空港经济综合实验区",
          "value": "410173"
        },
        {
          "label": "巩义市",
          "value": "410181"
        },
        {
          "label": "荥阳市",
          "value": "410182"
        },
        {
          "label": "新密市",
          "value": "410183"
        },
        {
          "label": "新郑市",
          "value": "410184"
        },
        {
          "label": "登封市",
          "value": "410185"
        }
      ],
      [
        {
          "label": "龙亭区",
          "value": "410202"
        },
        {
          "label": "顺河回族区",
          "value": "410203"
        },
        {
          "label": "鼓楼区",
          "value": "410204"
        },
        {
          "label": "禹王台区",
          "value": "410205"
        },
        {
          "label": "祥符区",
          "value": "410212"
        },
        {
          "label": "杞县",
          "value": "410221"
        },
        {
          "label": "通许县",
          "value": "410222"
        },
        {
          "label": "尉氏县",
          "value": "410223"
        },
        {
          "label": "兰考县",
          "value": "410225"
        }
      ],
      [
        {
          "label": "老城区",
          "value": "410302"
        },
        {
          "label": "西工区",
          "value": "410303"
        },
        {
          "label": "瀍河回族区",
          "value": "410304"
        },
        {
          "label": "涧西区",
          "value": "410305"
        },
        {
          "label": "吉利区",
          "value": "410306"
        },
        {
          "label": "洛龙区",
          "value": "410311"
        },
        {
          "label": "孟津县",
          "value": "410322"
        },
        {
          "label": "新安县",
          "value": "410323"
        },
        {
          "label": "栾川县",
          "value": "410324"
        },
        {
          "label": "嵩县",
          "value": "410325"
        },
        {
          "label": "汝阳县",
          "value": "410326"
        },
        {
          "label": "宜阳县",
          "value": "410327"
        },
        {
          "label": "洛宁县",
          "value": "410328"
        },
        {
          "label": "伊川县",
          "value": "410329"
        },
        {
          "label": "洛阳高新技术产业开发区",
          "value": "410371"
        },
        {
          "label": "偃师市",
          "value": "410381"
        }
      ],
      [
        {
          "label": "新华区",
          "value": "410402"
        },
        {
          "label": "卫东区",
          "value": "410403"
        },
        {
          "label": "石龙区",
          "value": "410404"
        },
        {
          "label": "湛河区",
          "value": "410411"
        },
        {
          "label": "宝丰县",
          "value": "410421"
        },
        {
          "label": "叶县",
          "value": "410422"
        },
        {
          "label": "鲁山县",
          "value": "410423"
        },
        {
          "label": "郏县",
          "value": "410425"
        },
        {
          "label": "平顶山高新技术产业开发区",
          "value": "410471"
        },
        {
          "label": "平顶山市新城区",
          "value": "410472"
        },
        {
          "label": "舞钢市",
          "value": "410481"
        },
        {
          "label": "汝州市",
          "value": "410482"
        }
      ],
      [
        {
          "label": "文峰区",
          "value": "410502"
        },
        {
          "label": "北关区",
          "value": "410503"
        },
        {
          "label": "殷都区",
          "value": "410505"
        },
        {
          "label": "龙安区",
          "value": "410506"
        },
        {
          "label": "安阳县",
          "value": "410522"
        },
        {
          "label": "汤阴县",
          "value": "410523"
        },
        {
          "label": "滑县",
          "value": "410526"
        },
        {
          "label": "内黄县",
          "value": "410527"
        },
        {
          "label": "安阳高新技术产业开发区",
          "value": "410571"
        },
        {
          "label": "林州市",
          "value": "410581"
        }
      ],
      [
        {
          "label": "鹤山区",
          "value": "410602"
        },
        {
          "label": "山城区",
          "value": "410603"
        },
        {
          "label": "淇滨区",
          "value": "410611"
        },
        {
          "label": "浚县",
          "value": "410621"
        },
        {
          "label": "淇县",
          "value": "410622"
        },
        {
          "label": "鹤壁经济技术开发区",
          "value": "410671"
        }
      ],
      [
        {
          "label": "红旗区",
          "value": "410702"
        },
        {
          "label": "卫滨区",
          "value": "410703"
        },
        {
          "label": "凤泉区",
          "value": "410704"
        },
        {
          "label": "牧野区",
          "value": "410711"
        },
        {
          "label": "新乡县",
          "value": "410721"
        },
        {
          "label": "获嘉县",
          "value": "410724"
        },
        {
          "label": "原阳县",
          "value": "410725"
        },
        {
          "label": "延津县",
          "value": "410726"
        },
        {
          "label": "封丘县",
          "value": "410727"
        },
        {
          "label": "长垣县",
          "value": "410728"
        },
        {
          "label": "新乡高新技术产业开发区",
          "value": "410771"
        },
        {
          "label": "新乡经济技术开发区",
          "value": "410772"
        },
        {
          "label": "新乡市平原城乡一体化示范区",
          "value": "410773"
        },
        {
          "label": "卫辉市",
          "value": "410781"
        },
        {
          "label": "辉县市",
          "value": "410782"
        }
      ],
      [
        {
          "label": "解放区",
          "value": "410802"
        },
        {
          "label": "中站区",
          "value": "410803"
        },
        {
          "label": "马村区",
          "value": "410804"
        },
        {
          "label": "山阳区",
          "value": "410811"
        },
        {
          "label": "修武县",
          "value": "410821"
        },
        {
          "label": "博爱县",
          "value": "410822"
        },
        {
          "label": "武陟县",
          "value": "410823"
        },
        {
          "label": "温县",
          "value": "410825"
        },
        {
          "label": "焦作城乡一体化示范区",
          "value": "410871"
        },
        {
          "label": "沁阳市",
          "value": "410882"
        },
        {
          "label": "孟州市",
          "value": "410883"
        }
      ],
      [
        {
          "label": "华龙区",
          "value": "410902"
        },
        {
          "label": "清丰县",
          "value": "410922"
        },
        {
          "label": "南乐县",
          "value": "410923"
        },
        {
          "label": "范县",
          "value": "410926"
        },
        {
          "label": "台前县",
          "value": "410927"
        },
        {
          "label": "濮阳县",
          "value": "410928"
        },
        {
          "label": "河南濮阳工业园区",
          "value": "410971"
        },
        {
          "label": "濮阳经济技术开发区",
          "value": "410972"
        }
      ],
      [
        {
          "label": "魏都区",
          "value": "411002"
        },
        {
          "label": "建安区",
          "value": "411003"
        },
        {
          "label": "鄢陵县",
          "value": "411024"
        },
        {
          "label": "襄城县",
          "value": "411025"
        },
        {
          "label": "许昌经济技术开发区",
          "value": "411071"
        },
        {
          "label": "禹州市",
          "value": "411081"
        },
        {
          "label": "长葛市",
          "value": "411082"
        }
      ],
      [
        {
          "label": "源汇区",
          "value": "411102"
        },
        {
          "label": "郾城区",
          "value": "411103"
        },
        {
          "label": "召陵区",
          "value": "411104"
        },
        {
          "label": "舞阳县",
          "value": "411121"
        },
        {
          "label": "临颍县",
          "value": "411122"
        },
        {
          "label": "漯河经济技术开发区",
          "value": "411171"
        }
      ],
      [
        {
          "label": "湖滨区",
          "value": "411202"
        },
        {
          "label": "陕州区",
          "value": "411203"
        },
        {
          "label": "渑池县",
          "value": "411221"
        },
        {
          "label": "卢氏县",
          "value": "411224"
        },
        {
          "label": "河南三门峡经济开发区",
          "value": "411271"
        },
        {
          "label": "义马市",
          "value": "411281"
        },
        {
          "label": "灵宝市",
          "value": "411282"
        }
      ],
      [
        {
          "label": "宛城区",
          "value": "411302"
        },
        {
          "label": "卧龙区",
          "value": "411303"
        },
        {
          "label": "南召县",
          "value": "411321"
        },
        {
          "label": "方城县",
          "value": "411322"
        },
        {
          "label": "西峡县",
          "value": "411323"
        },
        {
          "label": "镇平县",
          "value": "411324"
        },
        {
          "label": "内乡县",
          "value": "411325"
        },
        {
          "label": "淅川县",
          "value": "411326"
        },
        {
          "label": "社旗县",
          "value": "411327"
        },
        {
          "label": "唐河县",
          "value": "411328"
        },
        {
          "label": "新野县",
          "value": "411329"
        },
        {
          "label": "桐柏县",
          "value": "411330"
        },
        {
          "label": "南阳高新技术产业开发区",
          "value": "411371"
        },
        {
          "label": "南阳市城乡一体化示范区",
          "value": "411372"
        },
        {
          "label": "邓州市",
          "value": "411381"
        }
      ],
      [
        {
          "label": "梁园区",
          "value": "411402"
        },
        {
          "label": "睢阳区",
          "value": "411403"
        },
        {
          "label": "民权县",
          "value": "411421"
        },
        {
          "label": "睢县",
          "value": "411422"
        },
        {
          "label": "宁陵县",
          "value": "411423"
        },
        {
          "label": "柘城县",
          "value": "411424"
        },
        {
          "label": "虞城县",
          "value": "411425"
        },
        {
          "label": "夏邑县",
          "value": "411426"
        },
        {
          "label": "豫东综合物流产业聚集区",
          "value": "411471"
        },
        {
          "label": "河南商丘经济开发区",
          "value": "411472"
        },
        {
          "label": "永城市",
          "value": "411481"
        }
      ],
      [
        {
          "label": "浉河区",
          "value": "411502"
        },
        {
          "label": "平桥区",
          "value": "411503"
        },
        {
          "label": "罗山县",
          "value": "411521"
        },
        {
          "label": "光山县",
          "value": "411522"
        },
        {
          "label": "新县",
          "value": "411523"
        },
        {
          "label": "商城县",
          "value": "411524"
        },
        {
          "label": "固始县",
          "value": "411525"
        },
        {
          "label": "潢川县",
          "value": "411526"
        },
        {
          "label": "淮滨县",
          "value": "411527"
        },
        {
          "label": "息县",
          "value": "411528"
        },
        {
          "label": "信阳高新技术产业开发区",
          "value": "411571"
        }
      ],
      [
        {
          "label": "川汇区",
          "value": "411602"
        },
        {
          "label": "扶沟县",
          "value": "411621"
        },
        {
          "label": "西华县",
          "value": "411622"
        },
        {
          "label": "商水县",
          "value": "411623"
        },
        {
          "label": "沈丘县",
          "value": "411624"
        },
        {
          "label": "郸城县",
          "value": "411625"
        },
        {
          "label": "淮阳县",
          "value": "411626"
        },
        {
          "label": "太康县",
          "value": "411627"
        },
        {
          "label": "鹿邑县",
          "value": "411628"
        },
        {
          "label": "河南周口经济开发区",
          "value": "411671"
        },
        {
          "label": "项城市",
          "value": "411681"
        }
      ],
      [
        {
          "label": "驿城区",
          "value": "411702"
        },
        {
          "label": "西平县",
          "value": "411721"
        },
        {
          "label": "上蔡县",
          "value": "411722"
        },
        {
          "label": "平舆县",
          "value": "411723"
        },
        {
          "label": "正阳县",
          "value": "411724"
        },
        {
          "label": "确山县",
          "value": "411725"
        },
        {
          "label": "泌阳县",
          "value": "411726"
        },
        {
          "label": "汝南县",
          "value": "411727"
        },
        {
          "label": "遂平县",
          "value": "411728"
        },
        {
          "label": "新蔡县",
          "value": "411729"
        },
        {
          "label": "河南驻马店经济开发区",
          "value": "411771"
        }
      ],
      [{
        "label": "济源市",
        "value": "419001"
      }]
    ],
    [
      [
        {
          "label": "江岸区",
          "value": "420102"
        },
        {
          "label": "江汉区",
          "value": "420103"
        },
        {
          "label": "硚口区",
          "value": "420104"
        },
        {
          "label": "汉阳区",
          "value": "420105"
        },
        {
          "label": "武昌区",
          "value": "420106"
        },
        {
          "label": "青山区",
          "value": "420107"
        },
        {
          "label": "洪山区",
          "value": "420111"
        },
        {
          "label": "东西湖区",
          "value": "420112"
        },
        {
          "label": "汉南区",
          "value": "420113"
        },
        {
          "label": "蔡甸区",
          "value": "420114"
        },
        {
          "label": "江夏区",
          "value": "420115"
        },
        {
          "label": "黄陂区",
          "value": "420116"
        },
        {
          "label": "新洲区",
          "value": "420117"
        }
      ],
      [
        {
          "label": "黄石港区",
          "value": "420202"
        },
        {
          "label": "西塞山区",
          "value": "420203"
        },
        {
          "label": "下陆区",
          "value": "420204"
        },
        {
          "label": "铁山区",
          "value": "420205"
        },
        {
          "label": "阳新县",
          "value": "420222"
        },
        {
          "label": "大冶市",
          "value": "420281"
        }
      ],
      [
        {
          "label": "茅箭区",
          "value": "420302"
        },
        {
          "label": "张湾区",
          "value": "420303"
        },
        {
          "label": "郧阳区",
          "value": "420304"
        },
        {
          "label": "郧西县",
          "value": "420322"
        },
        {
          "label": "竹山县",
          "value": "420323"
        },
        {
          "label": "竹溪县",
          "value": "420324"
        },
        {
          "label": "房县",
          "value": "420325"
        },
        {
          "label": "丹江口市",
          "value": "420381"
        }
      ],
      [
        {
          "label": "西陵区",
          "value": "420502"
        },
        {
          "label": "伍家岗区",
          "value": "420503"
        },
        {
          "label": "点军区",
          "value": "420504"
        },
        {
          "label": "猇亭区",
          "value": "420505"
        },
        {
          "label": "夷陵区",
          "value": "420506"
        },
        {
          "label": "远安县",
          "value": "420525"
        },
        {
          "label": "兴山县",
          "value": "420526"
        },
        {
          "label": "秭归县",
          "value": "420527"
        },
        {
          "label": "长阳土家族自治县",
          "value": "420528"
        },
        {
          "label": "五峰土家族自治县",
          "value": "420529"
        },
        {
          "label": "宜都市",
          "value": "420581"
        },
        {
          "label": "当阳市",
          "value": "420582"
        },
        {
          "label": "枝江市",
          "value": "420583"
        }
      ],
      [
        {
          "label": "襄城区",
          "value": "420602"
        },
        {
          "label": "樊城区",
          "value": "420606"
        },
        {
          "label": "襄州区",
          "value": "420607"
        },
        {
          "label": "南漳县",
          "value": "420624"
        },
        {
          "label": "谷城县",
          "value": "420625"
        },
        {
          "label": "保康县",
          "value": "420626"
        },
        {
          "label": "老河口市",
          "value": "420682"
        },
        {
          "label": "枣阳市",
          "value": "420683"
        },
        {
          "label": "宜城市",
          "value": "420684"
        }
      ],
      [
        {
          "label": "梁子湖区",
          "value": "420702"
        },
        {
          "label": "华容区",
          "value": "420703"
        },
        {
          "label": "鄂城区",
          "value": "420704"
        }
      ],
      [
        {
          "label": "东宝区",
          "value": "420802"
        },
        {
          "label": "掇刀区",
          "value": "420804"
        },
        {
          "label": "京山县",
          "value": "420821"
        },
        {
          "label": "沙洋县",
          "value": "420822"
        },
        {
          "label": "钟祥市",
          "value": "420881"
        }
      ],
      [
        {
          "label": "孝南区",
          "value": "420902"
        },
        {
          "label": "孝昌县",
          "value": "420921"
        },
        {
          "label": "大悟县",
          "value": "420922"
        },
        {
          "label": "云梦县",
          "value": "420923"
        },
        {
          "label": "应城市",
          "value": "420981"
        },
        {
          "label": "安陆市",
          "value": "420982"
        },
        {
          "label": "汉川市",
          "value": "420984"
        }
      ],
      [
        {
          "label": "沙市区",
          "value": "421002"
        },
        {
          "label": "荆州区",
          "value": "421003"
        },
        {
          "label": "公安县",
          "value": "421022"
        },
        {
          "label": "监利县",
          "value": "421023"
        },
        {
          "label": "江陵县",
          "value": "421024"
        },
        {
          "label": "荆州经济技术开发区",
          "value": "421071"
        },
        {
          "label": "石首市",
          "value": "421081"
        },
        {
          "label": "洪湖市",
          "value": "421083"
        },
        {
          "label": "松滋市",
          "value": "421087"
        }
      ],
      [
        {
          "label": "黄州区",
          "value": "421102"
        },
        {
          "label": "团风县",
          "value": "421121"
        },
        {
          "label": "红安县",
          "value": "421122"
        },
        {
          "label": "罗田县",
          "value": "421123"
        },
        {
          "label": "英山县",
          "value": "421124"
        },
        {
          "label": "浠水县",
          "value": "421125"
        },
        {
          "label": "蕲春县",
          "value": "421126"
        },
        {
          "label": "黄梅县",
          "value": "421127"
        },
        {
          "label": "龙感湖管理区",
          "value": "421171"
        },
        {
          "label": "麻城市",
          "value": "421181"
        },
        {
          "label": "武穴市",
          "value": "421182"
        }
      ],
      [
        {
          "label": "咸安区",
          "value": "421202"
        },
        {
          "label": "嘉鱼县",
          "value": "421221"
        },
        {
          "label": "通城县",
          "value": "421222"
        },
        {
          "label": "崇阳县",
          "value": "421223"
        },
        {
          "label": "通山县",
          "value": "421224"
        },
        {
          "label": "赤壁市",
          "value": "421281"
        }
      ],
      [
        {
          "label": "曾都区",
          "value": "421303"
        },
        {
          "label": "随县",
          "value": "421321"
        },
        {
          "label": "广水市",
          "value": "421381"
        }
      ],
      [
        {
          "label": "恩施市",
          "value": "422801"
        },
        {
          "label": "利川市",
          "value": "422802"
        },
        {
          "label": "建始县",
          "value": "422822"
        },
        {
          "label": "巴东县",
          "value": "422823"
        },
        {
          "label": "宣恩县",
          "value": "422825"
        },
        {
          "label": "咸丰县",
          "value": "422826"
        },
        {
          "label": "来凤县",
          "value": "422827"
        },
        {
          "label": "鹤峰县",
          "value": "422828"
        }
      ],
      [
        {
          "label": "仙桃市",
          "value": "429004"
        },
        {
          "label": "潜江市",
          "value": "429005"
        },
        {
          "label": "天门市",
          "value": "429006"
        },
        {
          "label": "神农架林区",
          "value": "429021"
        }
      ]
    ],
    [
      [
        {
          "label": "芙蓉区",
          "value": "430102"
        },
        {
          "label": "天心区",
          "value": "430103"
        },
        {
          "label": "岳麓区",
          "value": "430104"
        },
        {
          "label": "开福区",
          "value": "430105"
        },
        {
          "label": "雨花区",
          "value": "430111"
        },
        {
          "label": "望城区",
          "value": "430112"
        },
        {
          "label": "长沙县",
          "value": "430121"
        },
        {
          "label": "浏阳市",
          "value": "430181"
        },
        {
          "label": "宁乡市",
          "value": "430182"
        }
      ],
      [
        {
          "label": "荷塘区",
          "value": "430202"
        },
        {
          "label": "芦淞区",
          "value": "430203"
        },
        {
          "label": "石峰区",
          "value": "430204"
        },
        {
          "label": "天元区",
          "value": "430211"
        },
        {
          "label": "株洲县",
          "value": "430221"
        },
        {
          "label": "攸县",
          "value": "430223"
        },
        {
          "label": "茶陵县",
          "value": "430224"
        },
        {
          "label": "炎陵县",
          "value": "430225"
        },
        {
          "label": "云龙示范区",
          "value": "430271"
        },
        {
          "label": "醴陵市",
          "value": "430281"
        }
      ],
      [
        {
          "label": "雨湖区",
          "value": "430302"
        },
        {
          "label": "岳塘区",
          "value": "430304"
        },
        {
          "label": "湘潭县",
          "value": "430321"
        },
        {
          "label": "湖南湘潭高新技术产业园区",
          "value": "430371"
        },
        {
          "label": "湘潭昭山示范区",
          "value": "430372"
        },
        {
          "label": "湘潭九华示范区",
          "value": "430373"
        },
        {
          "label": "湘乡市",
          "value": "430381"
        },
        {
          "label": "韶山市",
          "value": "430382"
        }
      ],
      [
        {
          "label": "珠晖区",
          "value": "430405"
        },
        {
          "label": "雁峰区",
          "value": "430406"
        },
        {
          "label": "石鼓区",
          "value": "430407"
        },
        {
          "label": "蒸湘区",
          "value": "430408"
        },
        {
          "label": "南岳区",
          "value": "430412"
        },
        {
          "label": "衡阳县",
          "value": "430421"
        },
        {
          "label": "衡南县",
          "value": "430422"
        },
        {
          "label": "衡山县",
          "value": "430423"
        },
        {
          "label": "衡东县",
          "value": "430424"
        },
        {
          "label": "祁东县",
          "value": "430426"
        },
        {
          "label": "衡阳综合保税区",
          "value": "430471"
        },
        {
          "label": "湖南衡阳高新技术产业园区",
          "value": "430472"
        },
        {
          "label": "湖南衡阳松木经济开发区",
          "value": "430473"
        },
        {
          "label": "耒阳市",
          "value": "430481"
        },
        {
          "label": "常宁市",
          "value": "430482"
        }
      ],
      [
        {
          "label": "双清区",
          "value": "430502"
        },
        {
          "label": "大祥区",
          "value": "430503"
        },
        {
          "label": "北塔区",
          "value": "430511"
        },
        {
          "label": "邵东县",
          "value": "430521"
        },
        {
          "label": "新邵县",
          "value": "430522"
        },
        {
          "label": "邵阳县",
          "value": "430523"
        },
        {
          "label": "隆回县",
          "value": "430524"
        },
        {
          "label": "洞口县",
          "value": "430525"
        },
        {
          "label": "绥宁县",
          "value": "430527"
        },
        {
          "label": "新宁县",
          "value": "430528"
        },
        {
          "label": "城步苗族自治县",
          "value": "430529"
        },
        {
          "label": "武冈市",
          "value": "430581"
        }
      ],
      [
        {
          "label": "岳阳楼区",
          "value": "430602"
        },
        {
          "label": "云溪区",
          "value": "430603"
        },
        {
          "label": "君山区",
          "value": "430611"
        },
        {
          "label": "岳阳县",
          "value": "430621"
        },
        {
          "label": "华容县",
          "value": "430623"
        },
        {
          "label": "湘阴县",
          "value": "430624"
        },
        {
          "label": "平江县",
          "value": "430626"
        },
        {
          "label": "岳阳市屈原管理区",
          "value": "430671"
        },
        {
          "label": "汨罗市",
          "value": "430681"
        },
        {
          "label": "临湘市",
          "value": "430682"
        }
      ],
      [
        {
          "label": "武陵区",
          "value": "430702"
        },
        {
          "label": "鼎城区",
          "value": "430703"
        },
        {
          "label": "安乡县",
          "value": "430721"
        },
        {
          "label": "汉寿县",
          "value": "430722"
        },
        {
          "label": "澧县",
          "value": "430723"
        },
        {
          "label": "临澧县",
          "value": "430724"
        },
        {
          "label": "桃源县",
          "value": "430725"
        },
        {
          "label": "石门县",
          "value": "430726"
        },
        {
          "label": "常德市西洞庭管理区",
          "value": "430771"
        },
        {
          "label": "津市市",
          "value": "430781"
        }
      ],
      [
        {
          "label": "永定区",
          "value": "430802"
        },
        {
          "label": "武陵源区",
          "value": "430811"
        },
        {
          "label": "慈利县",
          "value": "430821"
        },
        {
          "label": "桑植县",
          "value": "430822"
        }
      ],
      [
        {
          "label": "资阳区",
          "value": "430902"
        },
        {
          "label": "赫山区",
          "value": "430903"
        },
        {
          "label": "南县",
          "value": "430921"
        },
        {
          "label": "桃江县",
          "value": "430922"
        },
        {
          "label": "安化县",
          "value": "430923"
        },
        {
          "label": "益阳市大通湖管理区",
          "value": "430971"
        },
        {
          "label": "湖南益阳高新技术产业园区",
          "value": "430972"
        },
        {
          "label": "沅江市",
          "value": "430981"
        }
      ],
      [
        {
          "label": "北湖区",
          "value": "431002"
        },
        {
          "label": "苏仙区",
          "value": "431003"
        },
        {
          "label": "桂阳县",
          "value": "431021"
        },
        {
          "label": "宜章县",
          "value": "431022"
        },
        {
          "label": "永兴县",
          "value": "431023"
        },
        {
          "label": "嘉禾县",
          "value": "431024"
        },
        {
          "label": "临武县",
          "value": "431025"
        },
        {
          "label": "汝城县",
          "value": "431026"
        },
        {
          "label": "桂东县",
          "value": "431027"
        },
        {
          "label": "安仁县",
          "value": "431028"
        },
        {
          "label": "资兴市",
          "value": "431081"
        }
      ],
      [
        {
          "label": "零陵区",
          "value": "431102"
        },
        {
          "label": "冷水滩区",
          "value": "431103"
        },
        {
          "label": "祁阳县",
          "value": "431121"
        },
        {
          "label": "东安县",
          "value": "431122"
        },
        {
          "label": "双牌县",
          "value": "431123"
        },
        {
          "label": "道县",
          "value": "431124"
        },
        {
          "label": "江永县",
          "value": "431125"
        },
        {
          "label": "宁远县",
          "value": "431126"
        },
        {
          "label": "蓝山县",
          "value": "431127"
        },
        {
          "label": "新田县",
          "value": "431128"
        },
        {
          "label": "江华瑶族自治县",
          "value": "431129"
        },
        {
          "label": "永州经济技术开发区",
          "value": "431171"
        },
        {
          "label": "永州市金洞管理区",
          "value": "431172"
        },
        {
          "label": "永州市回龙圩管理区",
          "value": "431173"
        }
      ],
      [
        {
          "label": "鹤城区",
          "value": "431202"
        },
        {
          "label": "中方县",
          "value": "431221"
        },
        {
          "label": "沅陵县",
          "value": "431222"
        },
        {
          "label": "辰溪县",
          "value": "431223"
        },
        {
          "label": "溆浦县",
          "value": "431224"
        },
        {
          "label": "会同县",
          "value": "431225"
        },
        {
          "label": "麻阳苗族自治县",
          "value": "431226"
        },
        {
          "label": "新晃侗族自治县",
          "value": "431227"
        },
        {
          "label": "芷江侗族自治县",
          "value": "431228"
        },
        {
          "label": "靖州苗族侗族自治县",
          "value": "431229"
        },
        {
          "label": "通道侗族自治县",
          "value": "431230"
        },
        {
          "label": "怀化市洪江管理区",
          "value": "431271"
        },
        {
          "label": "洪江市",
          "value": "431281"
        }
      ],
      [
        {
          "label": "娄星区",
          "value": "431302"
        },
        {
          "label": "双峰县",
          "value": "431321"
        },
        {
          "label": "新化县",
          "value": "431322"
        },
        {
          "label": "冷水江市",
          "value": "431381"
        },
        {
          "label": "涟源市",
          "value": "431382"
        }
      ],
      [
        {
          "label": "吉首市",
          "value": "433101"
        },
        {
          "label": "泸溪县",
          "value": "433122"
        },
        {
          "label": "凤凰县",
          "value": "433123"
        },
        {
          "label": "花垣县",
          "value": "433124"
        },
        {
          "label": "保靖县",
          "value": "433125"
        },
        {
          "label": "古丈县",
          "value": "433126"
        },
        {
          "label": "永顺县",
          "value": "433127"
        },
        {
          "label": "龙山县",
          "value": "433130"
        },
        {
          "label": "湖南吉首经济开发区",
          "value": "433172"
        },
        {
          "label": "湖南永顺经济开发区",
          "value": "433173"
        }
      ]
    ],
    [
      [
        {
          "label": "荔湾区",
          "value": "440103"
        },
        {
          "label": "越秀区",
          "value": "440104"
        },
        {
          "label": "海珠区",
          "value": "440105"
        },
        {
          "label": "天河区",
          "value": "440106"
        },
        {
          "label": "白云区",
          "value": "440111"
        },
        {
          "label": "黄埔区",
          "value": "440112"
        },
        {
          "label": "番禺区",
          "value": "440113"
        },
        {
          "label": "花都区",
          "value": "440114"
        },
        {
          "label": "南沙区",
          "value": "440115"
        },
        {
          "label": "从化区",
          "value": "440117"
        },
        {
          "label": "增城区",
          "value": "440118"
        }
      ],
      [
        {
          "label": "武江区",
          "value": "440203"
        },
        {
          "label": "浈江区",
          "value": "440204"
        },
        {
          "label": "曲江区",
          "value": "440205"
        },
        {
          "label": "始兴县",
          "value": "440222"
        },
        {
          "label": "仁化县",
          "value": "440224"
        },
        {
          "label": "翁源县",
          "value": "440229"
        },
        {
          "label": "乳源瑶族自治县",
          "value": "440232"
        },
        {
          "label": "新丰县",
          "value": "440233"
        },
        {
          "label": "乐昌市",
          "value": "440281"
        },
        {
          "label": "南雄市",
          "value": "440282"
        }
      ],
      [
        {
          "label": "罗湖区",
          "value": "440303"
        },
        {
          "label": "福田区",
          "value": "440304"
        },
        {
          "label": "南山区",
          "value": "440305"
        },
        {
          "label": "宝安区",
          "value": "440306"
        },
        {
          "label": "龙岗区",
          "value": "440307"
        },
        {
          "label": "盐田区",
          "value": "440308"
        },
        {
          "label": "龙华区",
          "value": "440309"
        },
        {
          "label": "坪山区",
          "value": "440310"
        }
      ],
      [
        {
          "label": "香洲区",
          "value": "440402"
        },
        {
          "label": "斗门区",
          "value": "440403"
        },
        {
          "label": "金湾区",
          "value": "440404"
        }
      ],
      [
        {
          "label": "龙湖区",
          "value": "440507"
        },
        {
          "label": "金平区",
          "value": "440511"
        },
        {
          "label": "濠江区",
          "value": "440512"
        },
        {
          "label": "潮阳区",
          "value": "440513"
        },
        {
          "label": "潮南区",
          "value": "440514"
        },
        {
          "label": "澄海区",
          "value": "440515"
        },
        {
          "label": "南澳县",
          "value": "440523"
        }
      ],
      [
        {
          "label": "禅城区",
          "value": "440604"
        },
        {
          "label": "南海区",
          "value": "440605"
        },
        {
          "label": "顺德区",
          "value": "440606"
        },
        {
          "label": "三水区",
          "value": "440607"
        },
        {
          "label": "高明区",
          "value": "440608"
        }
      ],
      [
        {
          "label": "蓬江区",
          "value": "440703"
        },
        {
          "label": "江海区",
          "value": "440704"
        },
        {
          "label": "新会区",
          "value": "440705"
        },
        {
          "label": "台山市",
          "value": "440781"
        },
        {
          "label": "开平市",
          "value": "440783"
        },
        {
          "label": "鹤山市",
          "value": "440784"
        },
        {
          "label": "恩平市",
          "value": "440785"
        }
      ],
      [
        {
          "label": "赤坎区",
          "value": "440802"
        },
        {
          "label": "霞山区",
          "value": "440803"
        },
        {
          "label": "坡头区",
          "value": "440804"
        },
        {
          "label": "麻章区",
          "value": "440811"
        },
        {
          "label": "遂溪县",
          "value": "440823"
        },
        {
          "label": "徐闻县",
          "value": "440825"
        },
        {
          "label": "廉江市",
          "value": "440881"
        },
        {
          "label": "雷州市",
          "value": "440882"
        },
        {
          "label": "吴川市",
          "value": "440883"
        }
      ],
      [
        {
          "label": "茂南区",
          "value": "440902"
        },
        {
          "label": "电白区",
          "value": "440904"
        },
        {
          "label": "高州市",
          "value": "440981"
        },
        {
          "label": "化州市",
          "value": "440982"
        },
        {
          "label": "信宜市",
          "value": "440983"
        }
      ],
      [
        {
          "label": "端州区",
          "value": "441202"
        },
        {
          "label": "鼎湖区",
          "value": "441203"
        },
        {
          "label": "高要区",
          "value": "441204"
        },
        {
          "label": "广宁县",
          "value": "441223"
        },
        {
          "label": "怀集县",
          "value": "441224"
        },
        {
          "label": "封开县",
          "value": "441225"
        },
        {
          "label": "德庆县",
          "value": "441226"
        },
        {
          "label": "四会市",
          "value": "441284"
        }
      ],
      [
        {
          "label": "惠城区",
          "value": "441302"
        },
        {
          "label": "惠阳区",
          "value": "441303"
        },
        {
          "label": "博罗县",
          "value": "441322"
        },
        {
          "label": "惠东县",
          "value": "441323"
        },
        {
          "label": "龙门县",
          "value": "441324"
        }
      ],
      [
        {
          "label": "梅江区",
          "value": "441402"
        },
        {
          "label": "梅县区",
          "value": "441403"
        },
        {
          "label": "大埔县",
          "value": "441422"
        },
        {
          "label": "丰顺县",
          "value": "441423"
        },
        {
          "label": "五华县",
          "value": "441424"
        },
        {
          "label": "平远县",
          "value": "441426"
        },
        {
          "label": "蕉岭县",
          "value": "441427"
        },
        {
          "label": "兴宁市",
          "value": "441481"
        }
      ],
      [
        {
          "label": "城区",
          "value": "441502"
        },
        {
          "label": "海丰县",
          "value": "441521"
        },
        {
          "label": "陆河县",
          "value": "441523"
        },
        {
          "label": "陆丰市",
          "value": "441581"
        }
      ],
      [
        {
          "label": "源城区",
          "value": "441602"
        },
        {
          "label": "紫金县",
          "value": "441621"
        },
        {
          "label": "龙川县",
          "value": "441622"
        },
        {
          "label": "连平县",
          "value": "441623"
        },
        {
          "label": "和平县",
          "value": "441624"
        },
        {
          "label": "东源县",
          "value": "441625"
        }
      ],
      [
        {
          "label": "江城区",
          "value": "441702"
        },
        {
          "label": "阳东区",
          "value": "441704"
        },
        {
          "label": "阳西县",
          "value": "441721"
        },
        {
          "label": "阳春市",
          "value": "441781"
        }
      ],
      [
        {
          "label": "清城区",
          "value": "441802"
        },
        {
          "label": "清新区",
          "value": "441803"
        },
        {
          "label": "佛冈县",
          "value": "441821"
        },
        {
          "label": "阳山县",
          "value": "441823"
        },
        {
          "label": "连山壮族瑶族自治县",
          "value": "441825"
        },
        {
          "label": "连南瑶族自治县",
          "value": "441826"
        },
        {
          "label": "英德市",
          "value": "441881"
        },
        {
          "label": "连州市",
          "value": "441882"
        }
      ],
      [{
        "label": "东莞市",
        "value": "441900"
      }],
      [{
        "label": "中山市",
        "value": "442000"
      }],
      [
        {
          "label": "湘桥区",
          "value": "445102"
        },
        {
          "label": "潮安区",
          "value": "445103"
        },
        {
          "label": "饶平县",
          "value": "445122"
        }
      ],
      [
        {
          "label": "榕城区",
          "value": "445202"
        },
        {
          "label": "揭东区",
          "value": "445203"
        },
        {
          "label": "揭西县",
          "value": "445222"
        },
        {
          "label": "惠来县",
          "value": "445224"
        },
        {
          "label": "普宁市",
          "value": "445281"
        }
      ],
      [
        {
          "label": "云城区",
          "value": "445302"
        },
        {
          "label": "云安区",
          "value": "445303"
        },
        {
          "label": "新兴县",
          "value": "445321"
        },
        {
          "label": "郁南县",
          "value": "445322"
        },
        {
          "label": "罗定市",
          "value": "445381"
        }
      ]
    ],
    [
      [
        {
          "label": "兴宁区",
          "value": "450102"
        },
        {
          "label": "青秀区",
          "value": "450103"
        },
        {
          "label": "江南区",
          "value": "450105"
        },
        {
          "label": "西乡塘区",
          "value": "450107"
        },
        {
          "label": "良庆区",
          "value": "450108"
        },
        {
          "label": "邕宁区",
          "value": "450109"
        },
        {
          "label": "武鸣区",
          "value": "450110"
        },
        {
          "label": "隆安县",
          "value": "450123"
        },
        {
          "label": "马山县",
          "value": "450124"
        },
        {
          "label": "上林县",
          "value": "450125"
        },
        {
          "label": "宾阳县",
          "value": "450126"
        },
        {
          "label": "横县",
          "value": "450127"
        }
      ],
      [
        {
          "label": "城中区",
          "value": "450202"
        },
        {
          "label": "鱼峰区",
          "value": "450203"
        },
        {
          "label": "柳南区",
          "value": "450204"
        },
        {
          "label": "柳北区",
          "value": "450205"
        },
        {
          "label": "柳江区",
          "value": "450206"
        },
        {
          "label": "柳城县",
          "value": "450222"
        },
        {
          "label": "鹿寨县",
          "value": "450223"
        },
        {
          "label": "融安县",
          "value": "450224"
        },
        {
          "label": "融水苗族自治县",
          "value": "450225"
        },
        {
          "label": "三江侗族自治县",
          "value": "450226"
        }
      ],
      [
        {
          "label": "秀峰区",
          "value": "450302"
        },
        {
          "label": "叠彩区",
          "value": "450303"
        },
        {
          "label": "象山区",
          "value": "450304"
        },
        {
          "label": "七星区",
          "value": "450305"
        },
        {
          "label": "雁山区",
          "value": "450311"
        },
        {
          "label": "临桂区",
          "value": "450312"
        },
        {
          "label": "阳朔县",
          "value": "450321"
        },
        {
          "label": "灵川县",
          "value": "450323"
        },
        {
          "label": "全州县",
          "value": "450324"
        },
        {
          "label": "兴安县",
          "value": "450325"
        },
        {
          "label": "永福县",
          "value": "450326"
        },
        {
          "label": "灌阳县",
          "value": "450327"
        },
        {
          "label": "龙胜各族自治县",
          "value": "450328"
        },
        {
          "label": "资源县",
          "value": "450329"
        },
        {
          "label": "平乐县",
          "value": "450330"
        },
        {
          "label": "荔浦县",
          "value": "450331"
        },
        {
          "label": "恭城瑶族自治县",
          "value": "450332"
        }
      ],
      [
        {
          "label": "万秀区",
          "value": "450403"
        },
        {
          "label": "长洲区",
          "value": "450405"
        },
        {
          "label": "龙圩区",
          "value": "450406"
        },
        {
          "label": "苍梧县",
          "value": "450421"
        },
        {
          "label": "藤县",
          "value": "450422"
        },
        {
          "label": "蒙山县",
          "value": "450423"
        },
        {
          "label": "岑溪市",
          "value": "450481"
        }
      ],
      [
        {
          "label": "海城区",
          "value": "450502"
        },
        {
          "label": "银海区",
          "value": "450503"
        },
        {
          "label": "铁山港区",
          "value": "450512"
        },
        {
          "label": "合浦县",
          "value": "450521"
        }
      ],
      [
        {
          "label": "港口区",
          "value": "450602"
        },
        {
          "label": "防城区",
          "value": "450603"
        },
        {
          "label": "上思县",
          "value": "450621"
        },
        {
          "label": "东兴市",
          "value": "450681"
        }
      ],
      [
        {
          "label": "钦南区",
          "value": "450702"
        },
        {
          "label": "钦北区",
          "value": "450703"
        },
        {
          "label": "灵山县",
          "value": "450721"
        },
        {
          "label": "浦北县",
          "value": "450722"
        }
      ],
      [
        {
          "label": "港北区",
          "value": "450802"
        },
        {
          "label": "港南区",
          "value": "450803"
        },
        {
          "label": "覃塘区",
          "value": "450804"
        },
        {
          "label": "平南县",
          "value": "450821"
        },
        {
          "label": "桂平市",
          "value": "450881"
        }
      ],
      [
        {
          "label": "玉州区",
          "value": "450902"
        },
        {
          "label": "福绵区",
          "value": "450903"
        },
        {
          "label": "容县",
          "value": "450921"
        },
        {
          "label": "陆川县",
          "value": "450922"
        },
        {
          "label": "博白县",
          "value": "450923"
        },
        {
          "label": "兴业县",
          "value": "450924"
        },
        {
          "label": "北流市",
          "value": "450981"
        }
      ],
      [
        {
          "label": "右江区",
          "value": "451002"
        },
        {
          "label": "田阳县",
          "value": "451021"
        },
        {
          "label": "田东县",
          "value": "451022"
        },
        {
          "label": "平果县",
          "value": "451023"
        },
        {
          "label": "德保县",
          "value": "451024"
        },
        {
          "label": "那坡县",
          "value": "451026"
        },
        {
          "label": "凌云县",
          "value": "451027"
        },
        {
          "label": "乐业县",
          "value": "451028"
        },
        {
          "label": "田林县",
          "value": "451029"
        },
        {
          "label": "西林县",
          "value": "451030"
        },
        {
          "label": "隆林各族自治县",
          "value": "451031"
        },
        {
          "label": "靖西市",
          "value": "451081"
        }
      ],
      [
        {
          "label": "八步区",
          "value": "451102"
        },
        {
          "label": "平桂区",
          "value": "451103"
        },
        {
          "label": "昭平县",
          "value": "451121"
        },
        {
          "label": "钟山县",
          "value": "451122"
        },
        {
          "label": "富川瑶族自治县",
          "value": "451123"
        }
      ],
      [
        {
          "label": "金城江区",
          "value": "451202"
        },
        {
          "label": "宜州区",
          "value": "451203"
        },
        {
          "label": "南丹县",
          "value": "451221"
        },
        {
          "label": "天峨县",
          "value": "451222"
        },
        {
          "label": "凤山县",
          "value": "451223"
        },
        {
          "label": "东兰县",
          "value": "451224"
        },
        {
          "label": "罗城仫佬族自治县",
          "value": "451225"
        },
        {
          "label": "环江毛南族自治县",
          "value": "451226"
        },
        {
          "label": "巴马瑶族自治县",
          "value": "451227"
        },
        {
          "label": "都安瑶族自治县",
          "value": "451228"
        },
        {
          "label": "大化瑶族自治县",
          "value": "451229"
        }
      ],
      [
        {
          "label": "兴宾区",
          "value": "451302"
        },
        {
          "label": "忻城县",
          "value": "451321"
        },
        {
          "label": "象州县",
          "value": "451322"
        },
        {
          "label": "武宣县",
          "value": "451323"
        },
        {
          "label": "金秀瑶族自治县",
          "value": "451324"
        },
        {
          "label": "合山市",
          "value": "451381"
        }
      ],
      [
        {
          "label": "江州区",
          "value": "451402"
        },
        {
          "label": "扶绥县",
          "value": "451421"
        },
        {
          "label": "宁明县",
          "value": "451422"
        },
        {
          "label": "龙州县",
          "value": "451423"
        },
        {
          "label": "大新县",
          "value": "451424"
        },
        {
          "label": "天等县",
          "value": "451425"
        },
        {
          "label": "凭祥市",
          "value": "451481"
        }
      ]
    ],
    [
      [
        {
          "label": "秀英区",
          "value": "460105"
        },
        {
          "label": "龙华区",
          "value": "460106"
        },
        {
          "label": "琼山区",
          "value": "460107"
        },
        {
          "label": "美兰区",
          "value": "460108"
        }
      ],
      [
        {
          "label": "海棠区",
          "value": "460202"
        },
        {
          "label": "吉阳区",
          "value": "460203"
        },
        {
          "label": "天涯区",
          "value": "460204"
        },
        {
          "label": "崖州区",
          "value": "460205"
        }
      ],
      [
        {
          "label": "西沙群岛",
          "value": "460321"
        },
        {
          "label": "南沙群岛",
          "value": "460322"
        },
        {
          "label": "中沙群岛的岛礁及其海域",
          "value": "460323"
        }
      ],
      [{
        "label": "儋州市",
        "value": "460400"
      }],
      [
        {
          "label": "五指山市",
          "value": "469001"
        },
        {
          "label": "琼海市",
          "value": "469002"
        },
        {
          "label": "文昌市",
          "value": "469005"
        },
        {
          "label": "万宁市",
          "value": "469006"
        },
        {
          "label": "东方市",
          "value": "469007"
        },
        {
          "label": "定安县",
          "value": "469021"
        },
        {
          "label": "屯昌县",
          "value": "469022"
        },
        {
          "label": "澄迈县",
          "value": "469023"
        },
        {
          "label": "临高县",
          "value": "469024"
        },
        {
          "label": "白沙黎族自治县",
          "value": "469025"
        },
        {
          "label": "昌江黎族自治县",
          "value": "469026"
        },
        {
          "label": "乐东黎族自治县",
          "value": "469027"
        },
        {
          "label": "陵水黎族自治县",
          "value": "469028"
        },
        {
          "label": "保亭黎族苗族自治县",
          "value": "469029"
        },
        {
          "label": "琼中黎族苗族自治县",
          "value": "469030"
        }
      ]
    ],
    [
      [
        {
          "label": "万州区",
          "value": "500101"
        },
        {
          "label": "涪陵区",
          "value": "500102"
        },
        {
          "label": "渝中区",
          "value": "500103"
        },
        {
          "label": "大渡口区",
          "value": "500104"
        },
        {
          "label": "江北区",
          "value": "500105"
        },
        {
          "label": "沙坪坝区",
          "value": "500106"
        },
        {
          "label": "九龙坡区",
          "value": "500107"
        },
        {
          "label": "南岸区",
          "value": "500108"
        },
        {
          "label": "北碚区",
          "value": "500109"
        },
        {
          "label": "綦江区",
          "value": "500110"
        },
        {
          "label": "大足区",
          "value": "500111"
        },
        {
          "label": "渝北区",
          "value": "500112"
        },
        {
          "label": "巴南区",
          "value": "500113"
        },
        {
          "label": "黔江区",
          "value": "500114"
        },
        {
          "label": "长寿区",
          "value": "500115"
        },
        {
          "label": "江津区",
          "value": "500116"
        },
        {
          "label": "合川区",
          "value": "500117"
        },
        {
          "label": "永川区",
          "value": "500118"
        },
        {
          "label": "南川区",
          "value": "500119"
        },
        {
          "label": "璧山区",
          "value": "500120"
        },
        {
          "label": "铜梁区",
          "value": "500151"
        },
        {
          "label": "潼南区",
          "value": "500152"
        },
        {
          "label": "荣昌区",
          "value": "500153"
        },
        {
          "label": "开州区",
          "value": "500154"
        },
        {
          "label": "梁平区",
          "value": "500155"
        },
        {
          "label": "武隆区",
          "value": "500156"
        }
      ],
      [
        {
          "label": "城口县",
          "value": "500229"
        },
        {
          "label": "丰都县",
          "value": "500230"
        },
        {
          "label": "垫江县",
          "value": "500231"
        },
        {
          "label": "忠县",
          "value": "500233"
        },
        {
          "label": "云阳县",
          "value": "500235"
        },
        {
          "label": "奉节县",
          "value": "500236"
        },
        {
          "label": "巫山县",
          "value": "500237"
        },
        {
          "label": "巫溪县",
          "value": "500238"
        },
        {
          "label": "石柱土家族自治县",
          "value": "500240"
        },
        {
          "label": "秀山土家族苗族自治县",
          "value": "500241"
        },
        {
          "label": "酉阳土家族苗族自治县",
          "value": "500242"
        },
        {
          "label": "彭水苗族土家族自治县",
          "value": "500243"
        }
      ]
    ],
    [
      [
        {
          "label": "锦江区",
          "value": "510104"
        },
        {
          "label": "青羊区",
          "value": "510105"
        },
        {
          "label": "金牛区",
          "value": "510106"
        },
        {
          "label": "武侯区",
          "value": "510107"
        },
        {
          "label": "成华区",
          "value": "510108"
        },
        {
          "label": "龙泉驿区",
          "value": "510112"
        },
        {
          "label": "青白江区",
          "value": "510113"
        },
        {
          "label": "新都区",
          "value": "510114"
        },
        {
          "label": "温江区",
          "value": "510115"
        },
        {
          "label": "双流区",
          "value": "510116"
        },
        {
          "label": "郫都区",
          "value": "510117"
        },
        {
          "label": "金堂县",
          "value": "510121"
        },
        {
          "label": "大邑县",
          "value": "510129"
        },
        {
          "label": "蒲江县",
          "value": "510131"
        },
        {
          "label": "新津县",
          "value": "510132"
        },
        {
          "label": "都江堰市",
          "value": "510181"
        },
        {
          "label": "彭州市",
          "value": "510182"
        },
        {
          "label": "邛崃市",
          "value": "510183"
        },
        {
          "label": "崇州市",
          "value": "510184"
        },
        {
          "label": "简阳市",
          "value": "510185"
        }
      ],
      [
        {
          "label": "自流井区",
          "value": "510302"
        },
        {
          "label": "贡井区",
          "value": "510303"
        },
        {
          "label": "大安区",
          "value": "510304"
        },
        {
          "label": "沿滩区",
          "value": "510311"
        },
        {
          "label": "荣县",
          "value": "510321"
        },
        {
          "label": "富顺县",
          "value": "510322"
        }
      ],
      [
        {
          "label": "东区",
          "value": "510402"
        },
        {
          "label": "西区",
          "value": "510403"
        },
        {
          "label": "仁和区",
          "value": "510411"
        },
        {
          "label": "米易县",
          "value": "510421"
        },
        {
          "label": "盐边县",
          "value": "510422"
        }
      ],
      [
        {
          "label": "江阳区",
          "value": "510502"
        },
        {
          "label": "纳溪区",
          "value": "510503"
        },
        {
          "label": "龙马潭区",
          "value": "510504"
        },
        {
          "label": "泸县",
          "value": "510521"
        },
        {
          "label": "合江县",
          "value": "510522"
        },
        {
          "label": "叙永县",
          "value": "510524"
        },
        {
          "label": "古蔺县",
          "value": "510525"
        }
      ],
      [
        {
          "label": "旌阳区",
          "value": "510603"
        },
        {
          "label": "罗江区",
          "value": "510604"
        },
        {
          "label": "中江县",
          "value": "510623"
        },
        {
          "label": "广汉市",
          "value": "510681"
        },
        {
          "label": "什邡市",
          "value": "510682"
        },
        {
          "label": "绵竹市",
          "value": "510683"
        }
      ],
      [
        {
          "label": "涪城区",
          "value": "510703"
        },
        {
          "label": "游仙区",
          "value": "510704"
        },
        {
          "label": "安州区",
          "value": "510705"
        },
        {
          "label": "三台县",
          "value": "510722"
        },
        {
          "label": "盐亭县",
          "value": "510723"
        },
        {
          "label": "梓潼县",
          "value": "510725"
        },
        {
          "label": "北川羌族自治县",
          "value": "510726"
        },
        {
          "label": "平武县",
          "value": "510727"
        },
        {
          "label": "江油市",
          "value": "510781"
        }
      ],
      [
        {
          "label": "利州区",
          "value": "510802"
        },
        {
          "label": "昭化区",
          "value": "510811"
        },
        {
          "label": "朝天区",
          "value": "510812"
        },
        {
          "label": "旺苍县",
          "value": "510821"
        },
        {
          "label": "青川县",
          "value": "510822"
        },
        {
          "label": "剑阁县",
          "value": "510823"
        },
        {
          "label": "苍溪县",
          "value": "510824"
        }
      ],
      [
        {
          "label": "船山区",
          "value": "510903"
        },
        {
          "label": "安居区",
          "value": "510904"
        },
        {
          "label": "蓬溪县",
          "value": "510921"
        },
        {
          "label": "射洪县",
          "value": "510922"
        },
        {
          "label": "大英县",
          "value": "510923"
        }
      ],
      [
        {
          "label": "市中区",
          "value": "511002"
        },
        {
          "label": "东兴区",
          "value": "511011"
        },
        {
          "label": "威远县",
          "value": "511024"
        },
        {
          "label": "资中县",
          "value": "511025"
        },
        {
          "label": "内江经济开发区",
          "value": "511071"
        },
        {
          "label": "隆昌市",
          "value": "511083"
        }
      ],
      [
        {
          "label": "市中区",
          "value": "511102"
        },
        {
          "label": "沙湾区",
          "value": "511111"
        },
        {
          "label": "五通桥区",
          "value": "511112"
        },
        {
          "label": "金口河区",
          "value": "511113"
        },
        {
          "label": "犍为县",
          "value": "511123"
        },
        {
          "label": "井研县",
          "value": "511124"
        },
        {
          "label": "夹江县",
          "value": "511126"
        },
        {
          "label": "沐川县",
          "value": "511129"
        },
        {
          "label": "峨边彝族自治县",
          "value": "511132"
        },
        {
          "label": "马边彝族自治县",
          "value": "511133"
        },
        {
          "label": "峨眉山市",
          "value": "511181"
        }
      ],
      [
        {
          "label": "顺庆区",
          "value": "511302"
        },
        {
          "label": "高坪区",
          "value": "511303"
        },
        {
          "label": "嘉陵区",
          "value": "511304"
        },
        {
          "label": "南部县",
          "value": "511321"
        },
        {
          "label": "营山县",
          "value": "511322"
        },
        {
          "label": "蓬安县",
          "value": "511323"
        },
        {
          "label": "仪陇县",
          "value": "511324"
        },
        {
          "label": "西充县",
          "value": "511325"
        },
        {
          "label": "阆中市",
          "value": "511381"
        }
      ],
      [
        {
          "label": "东坡区",
          "value": "511402"
        },
        {
          "label": "彭山区",
          "value": "511403"
        },
        {
          "label": "仁寿县",
          "value": "511421"
        },
        {
          "label": "洪雅县",
          "value": "511423"
        },
        {
          "label": "丹棱县",
          "value": "511424"
        },
        {
          "label": "青神县",
          "value": "511425"
        }
      ],
      [
        {
          "label": "翠屏区",
          "value": "511502"
        },
        {
          "label": "南溪区",
          "value": "511503"
        },
        {
          "label": "宜宾县",
          "value": "511521"
        },
        {
          "label": "江安县",
          "value": "511523"
        },
        {
          "label": "长宁县",
          "value": "511524"
        },
        {
          "label": "高县",
          "value": "511525"
        },
        {
          "label": "珙县",
          "value": "511526"
        },
        {
          "label": "筠连县",
          "value": "511527"
        },
        {
          "label": "兴文县",
          "value": "511528"
        },
        {
          "label": "屏山县",
          "value": "511529"
        }
      ],
      [
        {
          "label": "广安区",
          "value": "511602"
        },
        {
          "label": "前锋区",
          "value": "511603"
        },
        {
          "label": "岳池县",
          "value": "511621"
        },
        {
          "label": "武胜县",
          "value": "511622"
        },
        {
          "label": "邻水县",
          "value": "511623"
        },
        {
          "label": "华蓥市",
          "value": "511681"
        }
      ],
      [
        {
          "label": "通川区",
          "value": "511702"
        },
        {
          "label": "达川区",
          "value": "511703"
        },
        {
          "label": "宣汉县",
          "value": "511722"
        },
        {
          "label": "开江县",
          "value": "511723"
        },
        {
          "label": "大竹县",
          "value": "511724"
        },
        {
          "label": "渠县",
          "value": "511725"
        },
        {
          "label": "达州经济开发区",
          "value": "511771"
        },
        {
          "label": "万源市",
          "value": "511781"
        }
      ],
      [
        {
          "label": "雨城区",
          "value": "511802"
        },
        {
          "label": "名山区",
          "value": "511803"
        },
        {
          "label": "荥经县",
          "value": "511822"
        },
        {
          "label": "汉源县",
          "value": "511823"
        },
        {
          "label": "石棉县",
          "value": "511824"
        },
        {
          "label": "天全县",
          "value": "511825"
        },
        {
          "label": "芦山县",
          "value": "511826"
        },
        {
          "label": "宝兴县",
          "value": "511827"
        }
      ],
      [
        {
          "label": "巴州区",
          "value": "511902"
        },
        {
          "label": "恩阳区",
          "value": "511903"
        },
        {
          "label": "通江县",
          "value": "511921"
        },
        {
          "label": "南江县",
          "value": "511922"
        },
        {
          "label": "平昌县",
          "value": "511923"
        },
        {
          "label": "巴中经济开发区",
          "value": "511971"
        }
      ],
      [
        {
          "label": "雁江区",
          "value": "512002"
        },
        {
          "label": "安岳县",
          "value": "512021"
        },
        {
          "label": "乐至县",
          "value": "512022"
        }
      ],
      [
        {
          "label": "马尔康市",
          "value": "513201"
        },
        {
          "label": "汶川县",
          "value": "513221"
        },
        {
          "label": "理县",
          "value": "513222"
        },
        {
          "label": "茂县",
          "value": "513223"
        },
        {
          "label": "松潘县",
          "value": "513224"
        },
        {
          "label": "九寨沟县",
          "value": "513225"
        },
        {
          "label": "金川县",
          "value": "513226"
        },
        {
          "label": "小金县",
          "value": "513227"
        },
        {
          "label": "黑水县",
          "value": "513228"
        },
        {
          "label": "壤塘县",
          "value": "513230"
        },
        {
          "label": "阿坝县",
          "value": "513231"
        },
        {
          "label": "若尔盖县",
          "value": "513232"
        },
        {
          "label": "红原县",
          "value": "513233"
        }
      ],
      [
        {
          "label": "康定市",
          "value": "513301"
        },
        {
          "label": "泸定县",
          "value": "513322"
        },
        {
          "label": "丹巴县",
          "value": "513323"
        },
        {
          "label": "九龙县",
          "value": "513324"
        },
        {
          "label": "雅江县",
          "value": "513325"
        },
        {
          "label": "道孚县",
          "value": "513326"
        },
        {
          "label": "炉霍县",
          "value": "513327"
        },
        {
          "label": "甘孜县",
          "value": "513328"
        },
        {
          "label": "新龙县",
          "value": "513329"
        },
        {
          "label": "德格县",
          "value": "513330"
        },
        {
          "label": "白玉县",
          "value": "513331"
        },
        {
          "label": "石渠县",
          "value": "513332"
        },
        {
          "label": "色达县",
          "value": "513333"
        },
        {
          "label": "理塘县",
          "value": "513334"
        },
        {
          "label": "巴塘县",
          "value": "513335"
        },
        {
          "label": "乡城县",
          "value": "513336"
        },
        {
          "label": "稻城县",
          "value": "513337"
        },
        {
          "label": "得荣县",
          "value": "513338"
        }
      ],
      [
        {
          "label": "西昌市",
          "value": "513401"
        },
        {
          "label": "木里藏族自治县",
          "value": "513422"
        },
        {
          "label": "盐源县",
          "value": "513423"
        },
        {
          "label": "德昌县",
          "value": "513424"
        },
        {
          "label": "会理县",
          "value": "513425"
        },
        {
          "label": "会东县",
          "value": "513426"
        },
        {
          "label": "宁南县",
          "value": "513427"
        },
        {
          "label": "普格县",
          "value": "513428"
        },
        {
          "label": "布拖县",
          "value": "513429"
        },
        {
          "label": "金阳县",
          "value": "513430"
        },
        {
          "label": "昭觉县",
          "value": "513431"
        },
        {
          "label": "喜德县",
          "value": "513432"
        },
        {
          "label": "冕宁县",
          "value": "513433"
        },
        {
          "label": "越西县",
          "value": "513434"
        },
        {
          "label": "甘洛县",
          "value": "513435"
        },
        {
          "label": "美姑县",
          "value": "513436"
        },
        {
          "label": "雷波县",
          "value": "513437"
        }
      ]
    ],
    [
      [
        {
          "label": "南明区",
          "value": "520102"
        },
        {
          "label": "云岩区",
          "value": "520103"
        },
        {
          "label": "花溪区",
          "value": "520111"
        },
        {
          "label": "乌当区",
          "value": "520112"
        },
        {
          "label": "白云区",
          "value": "520113"
        },
        {
          "label": "观山湖区",
          "value": "520115"
        },
        {
          "label": "开阳县",
          "value": "520121"
        },
        {
          "label": "息烽县",
          "value": "520122"
        },
        {
          "label": "修文县",
          "value": "520123"
        },
        {
          "label": "清镇市",
          "value": "520181"
        }
      ],
      [
        {
          "label": "钟山区",
          "value": "520201"
        },
        {
          "label": "六枝特区",
          "value": "520203"
        },
        {
          "label": "水城县",
          "value": "520221"
        },
        {
          "label": "盘州市",
          "value": "520281"
        }
      ],
      [
        {
          "label": "红花岗区",
          "value": "520302"
        },
        {
          "label": "汇川区",
          "value": "520303"
        },
        {
          "label": "播州区",
          "value": "520304"
        },
        {
          "label": "桐梓县",
          "value": "520322"
        },
        {
          "label": "绥阳县",
          "value": "520323"
        },
        {
          "label": "正安县",
          "value": "520324"
        },
        {
          "label": "道真仡佬族苗族自治县",
          "value": "520325"
        },
        {
          "label": "务川仡佬族苗族自治县",
          "value": "520326"
        },
        {
          "label": "凤冈县",
          "value": "520327"
        },
        {
          "label": "湄潭县",
          "value": "520328"
        },
        {
          "label": "余庆县",
          "value": "520329"
        },
        {
          "label": "习水县",
          "value": "520330"
        },
        {
          "label": "赤水市",
          "value": "520381"
        },
        {
          "label": "仁怀市",
          "value": "520382"
        }
      ],
      [
        {
          "label": "西秀区",
          "value": "520402"
        },
        {
          "label": "平坝区",
          "value": "520403"
        },
        {
          "label": "普定县",
          "value": "520422"
        },
        {
          "label": "镇宁布依族苗族自治县",
          "value": "520423"
        },
        {
          "label": "关岭布依族苗族自治县",
          "value": "520424"
        },
        {
          "label": "紫云苗族布依族自治县",
          "value": "520425"
        }
      ],
      [
        {
          "label": "七星关区",
          "value": "520502"
        },
        {
          "label": "大方县",
          "value": "520521"
        },
        {
          "label": "黔西县",
          "value": "520522"
        },
        {
          "label": "金沙县",
          "value": "520523"
        },
        {
          "label": "织金县",
          "value": "520524"
        },
        {
          "label": "纳雍县",
          "value": "520525"
        },
        {
          "label": "威宁彝族回族苗族自治县",
          "value": "520526"
        },
        {
          "label": "赫章县",
          "value": "520527"
        }
      ],
      [
        {
          "label": "碧江区",
          "value": "520602"
        },
        {
          "label": "万山区",
          "value": "520603"
        },
        {
          "label": "江口县",
          "value": "520621"
        },
        {
          "label": "玉屏侗族自治县",
          "value": "520622"
        },
        {
          "label": "石阡县",
          "value": "520623"
        },
        {
          "label": "思南县",
          "value": "520624"
        },
        {
          "label": "印江土家族苗族自治县",
          "value": "520625"
        },
        {
          "label": "德江县",
          "value": "520626"
        },
        {
          "label": "沿河土家族自治县",
          "value": "520627"
        },
        {
          "label": "松桃苗族自治县",
          "value": "520628"
        }
      ],
      [
        {
          "label": "兴义市",
          "value": "522301"
        },
        {
          "label": "兴仁县",
          "value": "522322"
        },
        {
          "label": "普安县",
          "value": "522323"
        },
        {
          "label": "晴隆县",
          "value": "522324"
        },
        {
          "label": "贞丰县",
          "value": "522325"
        },
        {
          "label": "望谟县",
          "value": "522326"
        },
        {
          "label": "册亨县",
          "value": "522327"
        },
        {
          "label": "安龙县",
          "value": "522328"
        }
      ],
      [
        {
          "label": "凯里市",
          "value": "522601"
        },
        {
          "label": "黄平县",
          "value": "522622"
        },
        {
          "label": "施秉县",
          "value": "522623"
        },
        {
          "label": "三穗县",
          "value": "522624"
        },
        {
          "label": "镇远县",
          "value": "522625"
        },
        {
          "label": "岑巩县",
          "value": "522626"
        },
        {
          "label": "天柱县",
          "value": "522627"
        },
        {
          "label": "锦屏县",
          "value": "522628"
        },
        {
          "label": "剑河县",
          "value": "522629"
        },
        {
          "label": "台江县",
          "value": "522630"
        },
        {
          "label": "黎平县",
          "value": "522631"
        },
        {
          "label": "榕江县",
          "value": "522632"
        },
        {
          "label": "从江县",
          "value": "522633"
        },
        {
          "label": "雷山县",
          "value": "522634"
        },
        {
          "label": "麻江县",
          "value": "522635"
        },
        {
          "label": "丹寨县",
          "value": "522636"
        }
      ],
      [
        {
          "label": "都匀市",
          "value": "522701"
        },
        {
          "label": "福泉市",
          "value": "522702"
        },
        {
          "label": "荔波县",
          "value": "522722"
        },
        {
          "label": "贵定县",
          "value": "522723"
        },
        {
          "label": "瓮安县",
          "value": "522725"
        },
        {
          "label": "独山县",
          "value": "522726"
        },
        {
          "label": "平塘县",
          "value": "522727"
        },
        {
          "label": "罗甸县",
          "value": "522728"
        },
        {
          "label": "长顺县",
          "value": "522729"
        },
        {
          "label": "龙里县",
          "value": "522730"
        },
        {
          "label": "惠水县",
          "value": "522731"
        },
        {
          "label": "三都水族自治县",
          "value": "522732"
        }
      ]
    ],
    [
      [
        {
          "label": "五华区",
          "value": "530102"
        },
        {
          "label": "盘龙区",
          "value": "530103"
        },
        {
          "label": "官渡区",
          "value": "530111"
        },
        {
          "label": "西山区",
          "value": "530112"
        },
        {
          "label": "东川区",
          "value": "530113"
        },
        {
          "label": "呈贡区",
          "value": "530114"
        },
        {
          "label": "晋宁区",
          "value": "530115"
        },
        {
          "label": "富民县",
          "value": "530124"
        },
        {
          "label": "宜良县",
          "value": "530125"
        },
        {
          "label": "石林彝族自治县",
          "value": "530126"
        },
        {
          "label": "嵩明县",
          "value": "530127"
        },
        {
          "label": "禄劝彝族苗族自治县",
          "value": "530128"
        },
        {
          "label": "寻甸回族彝族自治县",
          "value": "530129"
        },
        {
          "label": "安宁市",
          "value": "530181"
        }
      ],
      [
        {
          "label": "麒麟区",
          "value": "530302"
        },
        {
          "label": "沾益区",
          "value": "530303"
        },
        {
          "label": "马龙县",
          "value": "530321"
        },
        {
          "label": "陆良县",
          "value": "530322"
        },
        {
          "label": "师宗县",
          "value": "530323"
        },
        {
          "label": "罗平县",
          "value": "530324"
        },
        {
          "label": "富源县",
          "value": "530325"
        },
        {
          "label": "会泽县",
          "value": "530326"
        },
        {
          "label": "宣威市",
          "value": "530381"
        }
      ],
      [
        {
          "label": "红塔区",
          "value": "530402"
        },
        {
          "label": "江川区",
          "value": "530403"
        },
        {
          "label": "澄江县",
          "value": "530422"
        },
        {
          "label": "通海县",
          "value": "530423"
        },
        {
          "label": "华宁县",
          "value": "530424"
        },
        {
          "label": "易门县",
          "value": "530425"
        },
        {
          "label": "峨山彝族自治县",
          "value": "530426"
        },
        {
          "label": "新平彝族傣族自治县",
          "value": "530427"
        },
        {
          "label": "元江哈尼族彝族傣族自治县",
          "value": "530428"
        }
      ],
      [
        {
          "label": "隆阳区",
          "value": "530502"
        },
        {
          "label": "施甸县",
          "value": "530521"
        },
        {
          "label": "龙陵县",
          "value": "530523"
        },
        {
          "label": "昌宁县",
          "value": "530524"
        },
        {
          "label": "腾冲市",
          "value": "530581"
        }
      ],
      [
        {
          "label": "昭阳区",
          "value": "530602"
        },
        {
          "label": "鲁甸县",
          "value": "530621"
        },
        {
          "label": "巧家县",
          "value": "530622"
        },
        {
          "label": "盐津县",
          "value": "530623"
        },
        {
          "label": "大关县",
          "value": "530624"
        },
        {
          "label": "永善县",
          "value": "530625"
        },
        {
          "label": "绥江县",
          "value": "530626"
        },
        {
          "label": "镇雄县",
          "value": "530627"
        },
        {
          "label": "彝良县",
          "value": "530628"
        },
        {
          "label": "威信县",
          "value": "530629"
        },
        {
          "label": "水富县",
          "value": "530630"
        }
      ],
      [
        {
          "label": "古城区",
          "value": "530702"
        },
        {
          "label": "玉龙纳西族自治县",
          "value": "530721"
        },
        {
          "label": "永胜县",
          "value": "530722"
        },
        {
          "label": "华坪县",
          "value": "530723"
        },
        {
          "label": "宁蒗彝族自治县",
          "value": "530724"
        }
      ],
      [
        {
          "label": "思茅区",
          "value": "530802"
        },
        {
          "label": "宁洱哈尼族彝族自治县",
          "value": "530821"
        },
        {
          "label": "墨江哈尼族自治县",
          "value": "530822"
        },
        {
          "label": "景东彝族自治县",
          "value": "530823"
        },
        {
          "label": "景谷傣族彝族自治县",
          "value": "530824"
        },
        {
          "label": "镇沅彝族哈尼族拉祜族自治县",
          "value": "530825"
        },
        {
          "label": "江城哈尼族彝族自治县",
          "value": "530826"
        },
        {
          "label": "孟连傣族拉祜族佤族自治县",
          "value": "530827"
        },
        {
          "label": "澜沧拉祜族自治县",
          "value": "530828"
        },
        {
          "label": "西盟佤族自治县",
          "value": "530829"
        }
      ],
      [
        {
          "label": "临翔区",
          "value": "530902"
        },
        {
          "label": "凤庆县",
          "value": "530921"
        },
        {
          "label": "云县",
          "value": "530922"
        },
        {
          "label": "永德县",
          "value": "530923"
        },
        {
          "label": "镇康县",
          "value": "530924"
        },
        {
          "label": "双江拉祜族佤族布朗族傣族自治县",
          "value": "530925"
        },
        {
          "label": "耿马傣族佤族自治县",
          "value": "530926"
        },
        {
          "label": "沧源佤族自治县",
          "value": "530927"
        }
      ],
      [
        {
          "label": "楚雄市",
          "value": "532301"
        },
        {
          "label": "双柏县",
          "value": "532322"
        },
        {
          "label": "牟定县",
          "value": "532323"
        },
        {
          "label": "南华县",
          "value": "532324"
        },
        {
          "label": "姚安县",
          "value": "532325"
        },
        {
          "label": "大姚县",
          "value": "532326"
        },
        {
          "label": "永仁县",
          "value": "532327"
        },
        {
          "label": "元谋县",
          "value": "532328"
        },
        {
          "label": "武定县",
          "value": "532329"
        },
        {
          "label": "禄丰县",
          "value": "532331"
        }
      ],
      [
        {
          "label": "个旧市",
          "value": "532501"
        },
        {
          "label": "开远市",
          "value": "532502"
        },
        {
          "label": "蒙自市",
          "value": "532503"
        },
        {
          "label": "弥勒市",
          "value": "532504"
        },
        {
          "label": "屏边苗族自治县",
          "value": "532523"
        },
        {
          "label": "建水县",
          "value": "532524"
        },
        {
          "label": "石屏县",
          "value": "532525"
        },
        {
          "label": "泸西县",
          "value": "532527"
        },
        {
          "label": "元阳县",
          "value": "532528"
        },
        {
          "label": "红河县",
          "value": "532529"
        },
        {
          "label": "金平苗族瑶族傣族自治县",
          "value": "532530"
        },
        {
          "label": "绿春县",
          "value": "532531"
        },
        {
          "label": "河口瑶族自治县",
          "value": "532532"
        }
      ],
      [
        {
          "label": "文山市",
          "value": "532601"
        },
        {
          "label": "砚山县",
          "value": "532622"
        },
        {
          "label": "西畴县",
          "value": "532623"
        },
        {
          "label": "麻栗坡县",
          "value": "532624"
        },
        {
          "label": "马关县",
          "value": "532625"
        },
        {
          "label": "丘北县",
          "value": "532626"
        },
        {
          "label": "广南县",
          "value": "532627"
        },
        {
          "label": "富宁县",
          "value": "532628"
        }
      ],
      [
        {
          "label": "景洪市",
          "value": "532801"
        },
        {
          "label": "勐海县",
          "value": "532822"
        },
        {
          "label": "勐腊县",
          "value": "532823"
        }
      ],
      [
        {
          "label": "大理市",
          "value": "532901"
        },
        {
          "label": "漾濞彝族自治县",
          "value": "532922"
        },
        {
          "label": "祥云县",
          "value": "532923"
        },
        {
          "label": "宾川县",
          "value": "532924"
        },
        {
          "label": "弥渡县",
          "value": "532925"
        },
        {
          "label": "南涧彝族自治县",
          "value": "532926"
        },
        {
          "label": "巍山彝族回族自治县",
          "value": "532927"
        },
        {
          "label": "永平县",
          "value": "532928"
        },
        {
          "label": "云龙县",
          "value": "532929"
        },
        {
          "label": "洱源县",
          "value": "532930"
        },
        {
          "label": "剑川县",
          "value": "532931"
        },
        {
          "label": "鹤庆县",
          "value": "532932"
        }
      ],
      [
        {
          "label": "瑞丽市",
          "value": "533102"
        },
        {
          "label": "芒市",
          "value": "533103"
        },
        {
          "label": "梁河县",
          "value": "533122"
        },
        {
          "label": "盈江县",
          "value": "533123"
        },
        {
          "label": "陇川县",
          "value": "533124"
        }
      ],
      [
        {
          "label": "泸水市",
          "value": "533301"
        },
        {
          "label": "福贡县",
          "value": "533323"
        },
        {
          "label": "贡山独龙族怒族自治县",
          "value": "533324"
        },
        {
          "label": "兰坪白族普米族自治县",
          "value": "533325"
        }
      ],
      [
        {
          "label": "香格里拉市",
          "value": "533401"
        },
        {
          "label": "德钦县",
          "value": "533422"
        },
        {
          "label": "维西傈僳族自治县",
          "value": "533423"
        }
      ]
    ],
    [
      [
        {
          "label": "城关区",
          "value": "540102"
        },
        {
          "label": "堆龙德庆区",
          "value": "540103"
        },
        {
          "label": "林周县",
          "value": "540121"
        },
        {
          "label": "当雄县",
          "value": "540122"
        },
        {
          "label": "尼木县",
          "value": "540123"
        },
        {
          "label": "曲水县",
          "value": "540124"
        },
        {
          "label": "达孜县",
          "value": "540126"
        },
        {
          "label": "墨竹工卡县",
          "value": "540127"
        },
        {
          "label": "格尔木藏青工业园区",
          "value": "540171"
        },
        {
          "label": "拉萨经济技术开发区",
          "value": "540172"
        },
        {
          "label": "西藏文化旅游创意园区",
          "value": "540173"
        },
        {
          "label": "达孜工业园区",
          "value": "540174"
        }
      ],
      [
        {
          "label": "桑珠孜区",
          "value": "540202"
        },
        {
          "label": "南木林县",
          "value": "540221"
        },
        {
          "label": "江孜县",
          "value": "540222"
        },
        {
          "label": "定日县",
          "value": "540223"
        },
        {
          "label": "萨迦县",
          "value": "540224"
        },
        {
          "label": "拉孜县",
          "value": "540225"
        },
        {
          "label": "昂仁县",
          "value": "540226"
        },
        {
          "label": "谢通门县",
          "value": "540227"
        },
        {
          "label": "白朗县",
          "value": "540228"
        },
        {
          "label": "仁布县",
          "value": "540229"
        },
        {
          "label": "康马县",
          "value": "540230"
        },
        {
          "label": "定结县",
          "value": "540231"
        },
        {
          "label": "仲巴县",
          "value": "540232"
        },
        {
          "label": "亚东县",
          "value": "540233"
        },
        {
          "label": "吉隆县",
          "value": "540234"
        },
        {
          "label": "聂拉木县",
          "value": "540235"
        },
        {
          "label": "萨嘎县",
          "value": "540236"
        },
        {
          "label": "岗巴县",
          "value": "540237"
        }
      ],
      [
        {
          "label": "卡若区",
          "value": "540302"
        },
        {
          "label": "江达县",
          "value": "540321"
        },
        {
          "label": "贡觉县",
          "value": "540322"
        },
        {
          "label": "类乌齐县",
          "value": "540323"
        },
        {
          "label": "丁青县",
          "value": "540324"
        },
        {
          "label": "察雅县",
          "value": "540325"
        },
        {
          "label": "八宿县",
          "value": "540326"
        },
        {
          "label": "左贡县",
          "value": "540327"
        },
        {
          "label": "芒康县",
          "value": "540328"
        },
        {
          "label": "洛隆县",
          "value": "540329"
        },
        {
          "label": "边坝县",
          "value": "540330"
        }
      ],
      [
        {
          "label": "巴宜区",
          "value": "540402"
        },
        {
          "label": "工布江达县",
          "value": "540421"
        },
        {
          "label": "米林县",
          "value": "540422"
        },
        {
          "label": "墨脱县",
          "value": "540423"
        },
        {
          "label": "波密县",
          "value": "540424"
        },
        {
          "label": "察隅县",
          "value": "540425"
        },
        {
          "label": "朗县",
          "value": "540426"
        }
      ],
      [
        {
          "label": "乃东区",
          "value": "540502"
        },
        {
          "label": "扎囊县",
          "value": "540521"
        },
        {
          "label": "贡嘎县",
          "value": "540522"
        },
        {
          "label": "桑日县",
          "value": "540523"
        },
        {
          "label": "琼结县",
          "value": "540524"
        },
        {
          "label": "曲松县",
          "value": "540525"
        },
        {
          "label": "措美县",
          "value": "540526"
        },
        {
          "label": "洛扎县",
          "value": "540527"
        },
        {
          "label": "加查县",
          "value": "540528"
        },
        {
          "label": "隆子县",
          "value": "540529"
        },
        {
          "label": "错那县",
          "value": "540530"
        },
        {
          "label": "浪卡子县",
          "value": "540531"
        }
      ],
      [
        {
          "label": "那曲县",
          "value": "542421"
        },
        {
          "label": "嘉黎县",
          "value": "542422"
        },
        {
          "label": "比如县",
          "value": "542423"
        },
        {
          "label": "聂荣县",
          "value": "542424"
        },
        {
          "label": "安多县",
          "value": "542425"
        },
        {
          "label": "申扎县",
          "value": "542426"
        },
        {
          "label": "索县",
          "value": "542427"
        },
        {
          "label": "班戈县",
          "value": "542428"
        },
        {
          "label": "巴青县",
          "value": "542429"
        },
        {
          "label": "尼玛县",
          "value": "542430"
        },
        {
          "label": "双湖县",
          "value": "542431"
        }
      ],
      [
        {
          "label": "普兰县",
          "value": "542521"
        },
        {
          "label": "札达县",
          "value": "542522"
        },
        {
          "label": "噶尔县",
          "value": "542523"
        },
        {
          "label": "日土县",
          "value": "542524"
        },
        {
          "label": "革吉县",
          "value": "542525"
        },
        {
          "label": "改则县",
          "value": "542526"
        },
        {
          "label": "措勤县",
          "value": "542527"
        }
      ]
    ],
    [
      [
        {
          "label": "新城区",
          "value": "610102"
        },
        {
          "label": "碑林区",
          "value": "610103"
        },
        {
          "label": "莲湖区",
          "value": "610104"
        },
        {
          "label": "灞桥区",
          "value": "610111"
        },
        {
          "label": "未央区",
          "value": "610112"
        },
        {
          "label": "雁塔区",
          "value": "610113"
        },
        {
          "label": "阎良区",
          "value": "610114"
        },
        {
          "label": "临潼区",
          "value": "610115"
        },
        {
          "label": "长安区",
          "value": "610116"
        },
        {
          "label": "高陵区",
          "value": "610117"
        },
        {
          "label": "鄠邑区",
          "value": "610118"
        },
        {
          "label": "蓝田县",
          "value": "610122"
        },
        {
          "label": "周至县",
          "value": "610124"
        }
      ],
      [
        {
          "label": "王益区",
          "value": "610202"
        },
        {
          "label": "印台区",
          "value": "610203"
        },
        {
          "label": "耀州区",
          "value": "610204"
        },
        {
          "label": "宜君县",
          "value": "610222"
        }
      ],
      [
        {
          "label": "渭滨区",
          "value": "610302"
        },
        {
          "label": "金台区",
          "value": "610303"
        },
        {
          "label": "陈仓区",
          "value": "610304"
        },
        {
          "label": "凤翔县",
          "value": "610322"
        },
        {
          "label": "岐山县",
          "value": "610323"
        },
        {
          "label": "扶风县",
          "value": "610324"
        },
        {
          "label": "眉县",
          "value": "610326"
        },
        {
          "label": "陇县",
          "value": "610327"
        },
        {
          "label": "千阳县",
          "value": "610328"
        },
        {
          "label": "麟游县",
          "value": "610329"
        },
        {
          "label": "凤县",
          "value": "610330"
        },
        {
          "label": "太白县",
          "value": "610331"
        }
      ],
      [
        {
          "label": "秦都区",
          "value": "610402"
        },
        {
          "label": "杨陵区",
          "value": "610403"
        },
        {
          "label": "渭城区",
          "value": "610404"
        },
        {
          "label": "三原县",
          "value": "610422"
        },
        {
          "label": "泾阳县",
          "value": "610423"
        },
        {
          "label": "乾县",
          "value": "610424"
        },
        {
          "label": "礼泉县",
          "value": "610425"
        },
        {
          "label": "永寿县",
          "value": "610426"
        },
        {
          "label": "彬县",
          "value": "610427"
        },
        {
          "label": "长武县",
          "value": "610428"
        },
        {
          "label": "旬邑县",
          "value": "610429"
        },
        {
          "label": "淳化县",
          "value": "610430"
        },
        {
          "label": "武功县",
          "value": "610431"
        },
        {
          "label": "兴平市",
          "value": "610481"
        }
      ],
      [
        {
          "label": "临渭区",
          "value": "610502"
        },
        {
          "label": "华州区",
          "value": "610503"
        },
        {
          "label": "潼关县",
          "value": "610522"
        },
        {
          "label": "大荔县",
          "value": "610523"
        },
        {
          "label": "合阳县",
          "value": "610524"
        },
        {
          "label": "澄城县",
          "value": "610525"
        },
        {
          "label": "蒲城县",
          "value": "610526"
        },
        {
          "label": "白水县",
          "value": "610527"
        },
        {
          "label": "富平县",
          "value": "610528"
        },
        {
          "label": "韩城市",
          "value": "610581"
        },
        {
          "label": "华阴市",
          "value": "610582"
        }
      ],
      [
        {
          "label": "宝塔区",
          "value": "610602"
        },
        {
          "label": "安塞区",
          "value": "610603"
        },
        {
          "label": "延长县",
          "value": "610621"
        },
        {
          "label": "延川县",
          "value": "610622"
        },
        {
          "label": "子长县",
          "value": "610623"
        },
        {
          "label": "志丹县",
          "value": "610625"
        },
        {
          "label": "吴起县",
          "value": "610626"
        },
        {
          "label": "甘泉县",
          "value": "610627"
        },
        {
          "label": "富县",
          "value": "610628"
        },
        {
          "label": "洛川县",
          "value": "610629"
        },
        {
          "label": "宜川县",
          "value": "610630"
        },
        {
          "label": "黄龙县",
          "value": "610631"
        },
        {
          "label": "黄陵县",
          "value": "610632"
        }
      ],
      [
        {
          "label": "汉台区",
          "value": "610702"
        },
        {
          "label": "南郑区",
          "value": "610703"
        },
        {
          "label": "城固县",
          "value": "610722"
        },
        {
          "label": "洋县",
          "value": "610723"
        },
        {
          "label": "西乡县",
          "value": "610724"
        },
        {
          "label": "勉县",
          "value": "610725"
        },
        {
          "label": "宁强县",
          "value": "610726"
        },
        {
          "label": "略阳县",
          "value": "610727"
        },
        {
          "label": "镇巴县",
          "value": "610728"
        },
        {
          "label": "留坝县",
          "value": "610729"
        },
        {
          "label": "佛坪县",
          "value": "610730"
        }
      ],
      [
        {
          "label": "榆阳区",
          "value": "610802"
        },
        {
          "label": "横山区",
          "value": "610803"
        },
        {
          "label": "府谷县",
          "value": "610822"
        },
        {
          "label": "靖边县",
          "value": "610824"
        },
        {
          "label": "定边县",
          "value": "610825"
        },
        {
          "label": "绥德县",
          "value": "610826"
        },
        {
          "label": "米脂县",
          "value": "610827"
        },
        {
          "label": "佳县",
          "value": "610828"
        },
        {
          "label": "吴堡县",
          "value": "610829"
        },
        {
          "label": "清涧县",
          "value": "610830"
        },
        {
          "label": "子洲县",
          "value": "610831"
        },
        {
          "label": "神木市",
          "value": "610881"
        }
      ],
      [
        {
          "label": "汉滨区",
          "value": "610902"
        },
        {
          "label": "汉阴县",
          "value": "610921"
        },
        {
          "label": "石泉县",
          "value": "610922"
        },
        {
          "label": "宁陕县",
          "value": "610923"
        },
        {
          "label": "紫阳县",
          "value": "610924"
        },
        {
          "label": "岚皋县",
          "value": "610925"
        },
        {
          "label": "平利县",
          "value": "610926"
        },
        {
          "label": "镇坪县",
          "value": "610927"
        },
        {
          "label": "旬阳县",
          "value": "610928"
        },
        {
          "label": "白河县",
          "value": "610929"
        }
      ],
      [
        {
          "label": "商州区",
          "value": "611002"
        },
        {
          "label": "洛南县",
          "value": "611021"
        },
        {
          "label": "丹凤县",
          "value": "611022"
        },
        {
          "label": "商南县",
          "value": "611023"
        },
        {
          "label": "山阳县",
          "value": "611024"
        },
        {
          "label": "镇安县",
          "value": "611025"
        },
        {
          "label": "柞水县",
          "value": "611026"
        }
      ]
    ],
    [
      [
        {
          "label": "城关区",
          "value": "620102"
        },
        {
          "label": "七里河区",
          "value": "620103"
        },
        {
          "label": "西固区",
          "value": "620104"
        },
        {
          "label": "安宁区",
          "value": "620105"
        },
        {
          "label": "红古区",
          "value": "620111"
        },
        {
          "label": "永登县",
          "value": "620121"
        },
        {
          "label": "皋兰县",
          "value": "620122"
        },
        {
          "label": "榆中县",
          "value": "620123"
        },
        {
          "label": "兰州新区",
          "value": "620171"
        }
      ],
      [{
        "label": "嘉峪关市",
        "value": "620201"
      }],
      [
        {
          "label": "金川区",
          "value": "620302"
        },
        {
          "label": "永昌县",
          "value": "620321"
        }
      ],
      [
        {
          "label": "白银区",
          "value": "620402"
        },
        {
          "label": "平川区",
          "value": "620403"
        },
        {
          "label": "靖远县",
          "value": "620421"
        },
        {
          "label": "会宁县",
          "value": "620422"
        },
        {
          "label": "景泰县",
          "value": "620423"
        }
      ],
      [
        {
          "label": "秦州区",
          "value": "620502"
        },
        {
          "label": "麦积区",
          "value": "620503"
        },
        {
          "label": "清水县",
          "value": "620521"
        },
        {
          "label": "秦安县",
          "value": "620522"
        },
        {
          "label": "甘谷县",
          "value": "620523"
        },
        {
          "label": "武山县",
          "value": "620524"
        },
        {
          "label": "张家川回族自治县",
          "value": "620525"
        }
      ],
      [
        {
          "label": "凉州区",
          "value": "620602"
        },
        {
          "label": "民勤县",
          "value": "620621"
        },
        {
          "label": "古浪县",
          "value": "620622"
        },
        {
          "label": "天祝藏族自治县",
          "value": "620623"
        }
      ],
      [
        {
          "label": "甘州区",
          "value": "620702"
        },
        {
          "label": "肃南裕固族自治县",
          "value": "620721"
        },
        {
          "label": "民乐县",
          "value": "620722"
        },
        {
          "label": "临泽县",
          "value": "620723"
        },
        {
          "label": "高台县",
          "value": "620724"
        },
        {
          "label": "山丹县",
          "value": "620725"
        }
      ],
      [
        {
          "label": "崆峒区",
          "value": "620802"
        },
        {
          "label": "泾川县",
          "value": "620821"
        },
        {
          "label": "灵台县",
          "value": "620822"
        },
        {
          "label": "崇信县",
          "value": "620823"
        },
        {
          "label": "华亭县",
          "value": "620824"
        },
        {
          "label": "庄浪县",
          "value": "620825"
        },
        {
          "label": "静宁县",
          "value": "620826"
        },
        {
          "label": "平凉工业园区",
          "value": "620871"
        }
      ],
      [
        {
          "label": "肃州区",
          "value": "620902"
        },
        {
          "label": "金塔县",
          "value": "620921"
        },
        {
          "label": "瓜州县",
          "value": "620922"
        },
        {
          "label": "肃北蒙古族自治县",
          "value": "620923"
        },
        {
          "label": "阿克塞哈萨克族自治县",
          "value": "620924"
        },
        {
          "label": "玉门市",
          "value": "620981"
        },
        {
          "label": "敦煌市",
          "value": "620982"
        }
      ],
      [
        {
          "label": "西峰区",
          "value": "621002"
        },
        {
          "label": "庆城县",
          "value": "621021"
        },
        {
          "label": "环县",
          "value": "621022"
        },
        {
          "label": "华池县",
          "value": "621023"
        },
        {
          "label": "合水县",
          "value": "621024"
        },
        {
          "label": "正宁县",
          "value": "621025"
        },
        {
          "label": "宁县",
          "value": "621026"
        },
        {
          "label": "镇原县",
          "value": "621027"
        }
      ],
      [
        {
          "label": "安定区",
          "value": "621102"
        },
        {
          "label": "通渭县",
          "value": "621121"
        },
        {
          "label": "陇西县",
          "value": "621122"
        },
        {
          "label": "渭源县",
          "value": "621123"
        },
        {
          "label": "临洮县",
          "value": "621124"
        },
        {
          "label": "漳县",
          "value": "621125"
        },
        {
          "label": "岷县",
          "value": "621126"
        }
      ],
      [
        {
          "label": "武都区",
          "value": "621202"
        },
        {
          "label": "成县",
          "value": "621221"
        },
        {
          "label": "文县",
          "value": "621222"
        },
        {
          "label": "宕昌县",
          "value": "621223"
        },
        {
          "label": "康县",
          "value": "621224"
        },
        {
          "label": "西和县",
          "value": "621225"
        },
        {
          "label": "礼县",
          "value": "621226"
        },
        {
          "label": "徽县",
          "value": "621227"
        },
        {
          "label": "两当县",
          "value": "621228"
        }
      ],
      [
        {
          "label": "临夏市",
          "value": "622901"
        },
        {
          "label": "临夏县",
          "value": "622921"
        },
        {
          "label": "康乐县",
          "value": "622922"
        },
        {
          "label": "永靖县",
          "value": "622923"
        },
        {
          "label": "广河县",
          "value": "622924"
        },
        {
          "label": "和政县",
          "value": "622925"
        },
        {
          "label": "东乡族自治县",
          "value": "622926"
        },
        {
          "label": "积石山保安族东乡族撒拉族自治县",
          "value": "622927"
        }
      ],
      [
        {
          "label": "合作市",
          "value": "623001"
        },
        {
          "label": "临潭县",
          "value": "623021"
        },
        {
          "label": "卓尼县",
          "value": "623022"
        },
        {
          "label": "舟曲县",
          "value": "623023"
        },
        {
          "label": "迭部县",
          "value": "623024"
        },
        {
          "label": "玛曲县",
          "value": "623025"
        },
        {
          "label": "碌曲县",
          "value": "623026"
        },
        {
          "label": "夏河县",
          "value": "623027"
        }
      ]
    ],
    [
      [
        {
          "label": "城东区",
          "value": "630102"
        },
        {
          "label": "城中区",
          "value": "630103"
        },
        {
          "label": "城西区",
          "value": "630104"
        },
        {
          "label": "城北区",
          "value": "630105"
        },
        {
          "label": "大通回族土族自治县",
          "value": "630121"
        },
        {
          "label": "湟中县",
          "value": "630122"
        },
        {
          "label": "湟源县",
          "value": "630123"
        }
      ],
      [
        {
          "label": "乐都区",
          "value": "630202"
        },
        {
          "label": "平安区",
          "value": "630203"
        },
        {
          "label": "民和回族土族自治县",
          "value": "630222"
        },
        {
          "label": "互助土族自治县",
          "value": "630223"
        },
        {
          "label": "化隆回族自治县",
          "value": "630224"
        },
        {
          "label": "循化撒拉族自治县",
          "value": "630225"
        }
      ],
      [
        {
          "label": "门源回族自治县",
          "value": "632221"
        },
        {
          "label": "祁连县",
          "value": "632222"
        },
        {
          "label": "海晏县",
          "value": "632223"
        },
        {
          "label": "刚察县",
          "value": "632224"
        }
      ],
      [
        {
          "label": "同仁县",
          "value": "632321"
        },
        {
          "label": "尖扎县",
          "value": "632322"
        },
        {
          "label": "泽库县",
          "value": "632323"
        },
        {
          "label": "河南蒙古族自治县",
          "value": "632324"
        }
      ],
      [
        {
          "label": "共和县",
          "value": "632521"
        },
        {
          "label": "同德县",
          "value": "632522"
        },
        {
          "label": "贵德县",
          "value": "632523"
        },
        {
          "label": "兴海县",
          "value": "632524"
        },
        {
          "label": "贵南县",
          "value": "632525"
        }
      ],
      [
        {
          "label": "玛沁县",
          "value": "632621"
        },
        {
          "label": "班玛县",
          "value": "632622"
        },
        {
          "label": "甘德县",
          "value": "632623"
        },
        {
          "label": "达日县",
          "value": "632624"
        },
        {
          "label": "久治县",
          "value": "632625"
        },
        {
          "label": "玛多县",
          "value": "632626"
        }
      ],
      [
        {
          "label": "玉树市",
          "value": "632701"
        },
        {
          "label": "杂多县",
          "value": "632722"
        },
        {
          "label": "称多县",
          "value": "632723"
        },
        {
          "label": "治多县",
          "value": "632724"
        },
        {
          "label": "囊谦县",
          "value": "632725"
        },
        {
          "label": "曲麻莱县",
          "value": "632726"
        }
      ],
      [
        {
          "label": "格尔木市",
          "value": "632801"
        },
        {
          "label": "德令哈市",
          "value": "632802"
        },
        {
          "label": "乌兰县",
          "value": "632821"
        },
        {
          "label": "都兰县",
          "value": "632822"
        },
        {
          "label": "天峻县",
          "value": "632823"
        },
        {
          "label": "大柴旦行政委员会",
          "value": "632857"
        },
        {
          "label": "冷湖行政委员会",
          "value": "632858"
        },
        {
          "label": "茫崖行政委员会",
          "value": "632859"
        }
      ]
    ],
    [
      [
        {
          "label": "兴庆区",
          "value": "640104"
        },
        {
          "label": "西夏区",
          "value": "640105"
        },
        {
          "label": "金凤区",
          "value": "640106"
        },
        {
          "label": "永宁县",
          "value": "640121"
        },
        {
          "label": "贺兰县",
          "value": "640122"
        },
        {
          "label": "灵武市",
          "value": "640181"
        }
      ],
      [
        {
          "label": "大武口区",
          "value": "640202"
        },
        {
          "label": "惠农区",
          "value": "640205"
        },
        {
          "label": "平罗县",
          "value": "640221"
        }
      ],
      [
        {
          "label": "利通区",
          "value": "640302"
        },
        {
          "label": "红寺堡区",
          "value": "640303"
        },
        {
          "label": "盐池县",
          "value": "640323"
        },
        {
          "label": "同心县",
          "value": "640324"
        },
        {
          "label": "青铜峡市",
          "value": "640381"
        }
      ],
      [
        {
          "label": "原州区",
          "value": "640402"
        },
        {
          "label": "西吉县",
          "value": "640422"
        },
        {
          "label": "隆德县",
          "value": "640423"
        },
        {
          "label": "泾源县",
          "value": "640424"
        },
        {
          "label": "彭阳县",
          "value": "640425"
        }
      ],
      [
        {
          "label": "沙坡头区",
          "value": "640502"
        },
        {
          "label": "中宁县",
          "value": "640521"
        },
        {
          "label": "海原县",
          "value": "640522"
        }
      ]
    ],
    [
      [
        {
          "label": "天山区",
          "value": "650102"
        },
        {
          "label": "沙依巴克区",
          "value": "650103"
        },
        {
          "label": "新市区",
          "value": "650104"
        },
        {
          "label": "水磨沟区",
          "value": "650105"
        },
        {
          "label": "头屯河区",
          "value": "650106"
        },
        {
          "label": "达坂城区",
          "value": "650107"
        },
        {
          "label": "米东区",
          "value": "650109"
        },
        {
          "label": "乌鲁木齐县",
          "value": "650121"
        },
        {
          "label": "乌鲁木齐经济技术开发区",
          "value": "650171"
        },
        {
          "label": "乌鲁木齐高新技术产业开发区",
          "value": "650172"
        }
      ],
      [
        {
          "label": "独山子区",
          "value": "650202"
        },
        {
          "label": "克拉玛依区",
          "value": "650203"
        },
        {
          "label": "白碱滩区",
          "value": "650204"
        },
        {
          "label": "乌尔禾区",
          "value": "650205"
        }
      ],
      [
        {
          "label": "高昌区",
          "value": "650402"
        },
        {
          "label": "鄯善县",
          "value": "650421"
        },
        {
          "label": "托克逊县",
          "value": "650422"
        }
      ],
      [
        {
          "label": "伊州区",
          "value": "650502"
        },
        {
          "label": "巴里坤哈萨克自治县",
          "value": "650521"
        },
        {
          "label": "伊吾县",
          "value": "650522"
        }
      ],
      [
        {
          "label": "昌吉市",
          "value": "652301"
        },
        {
          "label": "阜康市",
          "value": "652302"
        },
        {
          "label": "呼图壁县",
          "value": "652323"
        },
        {
          "label": "玛纳斯县",
          "value": "652324"
        },
        {
          "label": "奇台县",
          "value": "652325"
        },
        {
          "label": "吉木萨尔县",
          "value": "652327"
        },
        {
          "label": "木垒哈萨克自治县",
          "value": "652328"
        }
      ],
      [
        {
          "label": "博乐市",
          "value": "652701"
        },
        {
          "label": "阿拉山口市",
          "value": "652702"
        },
        {
          "label": "精河县",
          "value": "652722"
        },
        {
          "label": "温泉县",
          "value": "652723"
        }
      ],
      [
        {
          "label": "库尔勒市",
          "value": "652801"
        },
        {
          "label": "轮台县",
          "value": "652822"
        },
        {
          "label": "尉犁县",
          "value": "652823"
        },
        {
          "label": "若羌县",
          "value": "652824"
        },
        {
          "label": "且末县",
          "value": "652825"
        },
        {
          "label": "焉耆回族自治县",
          "value": "652826"
        },
        {
          "label": "和静县",
          "value": "652827"
        },
        {
          "label": "和硕县",
          "value": "652828"
        },
        {
          "label": "博湖县",
          "value": "652829"
        },
        {
          "label": "库尔勒经济技术开发区",
          "value": "652871"
        }
      ],
      [
        {
          "label": "阿克苏市",
          "value": "652901"
        },
        {
          "label": "温宿县",
          "value": "652922"
        },
        {
          "label": "库车县",
          "value": "652923"
        },
        {
          "label": "沙雅县",
          "value": "652924"
        },
        {
          "label": "新和县",
          "value": "652925"
        },
        {
          "label": "拜城县",
          "value": "652926"
        },
        {
          "label": "乌什县",
          "value": "652927"
        },
        {
          "label": "阿瓦提县",
          "value": "652928"
        },
        {
          "label": "柯坪县",
          "value": "652929"
        }
      ],
      [
        {
          "label": "阿图什市",
          "value": "653001"
        },
        {
          "label": "阿克陶县",
          "value": "653022"
        },
        {
          "label": "阿合奇县",
          "value": "653023"
        },
        {
          "label": "乌恰县",
          "value": "653024"
        }
      ],
      [
        {
          "label": "喀什市",
          "value": "653101"
        },
        {
          "label": "疏附县",
          "value": "653121"
        },
        {
          "label": "疏勒县",
          "value": "653122"
        },
        {
          "label": "英吉沙县",
          "value": "653123"
        },
        {
          "label": "泽普县",
          "value": "653124"
        },
        {
          "label": "莎车县",
          "value": "653125"
        },
        {
          "label": "叶城县",
          "value": "653126"
        },
        {
          "label": "麦盖提县",
          "value": "653127"
        },
        {
          "label": "岳普湖县",
          "value": "653128"
        },
        {
          "label": "伽师县",
          "value": "653129"
        },
        {
          "label": "巴楚县",
          "value": "653130"
        },
        {
          "label": "塔什库尔干塔吉克自治县",
          "value": "653131"
        }
      ],
      [
        {
          "label": "和田市",
          "value": "653201"
        },
        {
          "label": "和田县",
          "value": "653221"
        },
        {
          "label": "墨玉县",
          "value": "653222"
        },
        {
          "label": "皮山县",
          "value": "653223"
        },
        {
          "label": "洛浦县",
          "value": "653224"
        },
        {
          "label": "策勒县",
          "value": "653225"
        },
        {
          "label": "于田县",
          "value": "653226"
        },
        {
          "label": "民丰县",
          "value": "653227"
        }
      ],
      [
        {
          "label": "伊宁市",
          "value": "654002"
        },
        {
          "label": "奎屯市",
          "value": "654003"
        },
        {
          "label": "霍尔果斯市",
          "value": "654004"
        },
        {
          "label": "伊宁县",
          "value": "654021"
        },
        {
          "label": "察布查尔锡伯自治县",
          "value": "654022"
        },
        {
          "label": "霍城县",
          "value": "654023"
        },
        {
          "label": "巩留县",
          "value": "654024"
        },
        {
          "label": "新源县",
          "value": "654025"
        },
        {
          "label": "昭苏县",
          "value": "654026"
        },
        {
          "label": "特克斯县",
          "value": "654027"
        },
        {
          "label": "尼勒克县",
          "value": "654028"
        }
      ],
      [
        {
          "label": "塔城市",
          "value": "654201"
        },
        {
          "label": "乌苏市",
          "value": "654202"
        },
        {
          "label": "额敏县",
          "value": "654221"
        },
        {
          "label": "沙湾县",
          "value": "654223"
        },
        {
          "label": "托里县",
          "value": "654224"
        },
        {
          "label": "裕民县",
          "value": "654225"
        },
        {
          "label": "和布克赛尔蒙古自治县",
          "value": "654226"
        }
      ],
      [
        {
          "label": "阿勒泰市",
          "value": "654301"
        },
        {
          "label": "布尔津县",
          "value": "654321"
        },
        {
          "label": "富蕴县",
          "value": "654322"
        },
        {
          "label": "福海县",
          "value": "654323"
        },
        {
          "label": "哈巴河县",
          "value": "654324"
        },
        {
          "label": "青河县",
          "value": "654325"
        },
        {
          "label": "吉木乃县",
          "value": "654326"
        }
      ],
      [
        {
          "label": "石河子市",
          "value": "659001"
        },
        {
          "label": "阿拉尔市",
          "value": "659002"
        },
        {
          "label": "图木舒克市",
          "value": "659003"
        },
        {
          "label": "五家渠市",
          "value": "659004"
        },
        {
          "label": "铁门关市",
          "value": "659006"
        }
      ]
    ],
    [
      [{
        "label": "台北",
        "value": "660101"
      }],
      [{
        "label": "高雄",
        "value": "660201"
      }],
      [{
        "label": "基隆",
        "value": "660301"
      }],
      [{
        "label": "台中",
        "value": "660401"
      }],
      [{
        "label": "台南",
        "value": "660501"
      }],
      [{
        "label": "新竹",
        "value": "660601"
      }],
      [{
        "label": "嘉义",
        "value": "660701"
      }],
      [{
        "label": "宜兰",
        "value": "660801"
      }],
      [{
        "label": "桃园",
        "value": "660901"
      }],
      [{
        "label": "苗栗",
        "value": "661001"
      }],
      [{
        "label": "彰化",
        "value": "661101"
      }],
      [{
        "label": "南投",
        "value": "661201"
      }],
      [{
        "label": "云林",
        "value": "661301"
      }],
      [{
        "label": "屏东",
        "value": "661401"
      }],
      [{
        "label": "台东",
        "value": "661501"
      }],
      [{
        "label": "花莲",
        "value": "661601"
      }],
      [{
        "label": "澎湖",
        "value": "661701"
      }]
    ],
    [
      [{
        "label": "香港岛",
        "value": "670101"
      }],
      [{
        "label": "九龙",
        "value": "670201"
      }],
      [{
        "label": "新界",
        "value": "670301"
      }]
    ],
    [
      [{
        "label": "澳门半岛",
        "value": "680101"
      }],
      [{
        "label": "氹仔岛",
        "value": "680201"
      }],
      [{
        "label": "路环岛",
        "value": "680301"
      }],
      [{
        "label": "路氹城",
        "value": "680401"
      }]
    ]
  ];
  const _sfc_main$b = {
    data() {
      return {
        pickerValue: [0, 0, 0],
        provinceDataList: provinceData,
        cityDataList: cityData[0],
        areaDataList: areaData[0][0],
        /* 是否显示控件 */
        showPicker: false
      };
    },
    created() {
      this.init();
    },
    props: {
      /* 默认值 */
      pickerValueDefault: {
        type: Array,
        default() {
          return [0, 0, 0];
        }
      },
      /* 主题色 */
      themeColor: String
    },
    watch: {
      pickerValueDefault() {
        this.init();
      }
    },
    methods: {
      init() {
        this.handPickValueDefault();
        const pickerValueDefault = this.pickerValueDefault;
        this.cityDataList = cityData[pickerValueDefault[0]];
        this.areaDataList = areaData[pickerValueDefault[0]][pickerValueDefault[1]];
        this.pickerValue = pickerValueDefault;
      },
      show() {
        setTimeout(() => {
          this.showPicker = true;
        }, 0);
      },
      maskClick() {
        this.pickerCancel();
      },
      pickerCancel() {
        this.showPicker = false;
        this._$emit("onCancel");
      },
      pickerConfirm(e) {
        this.showPicker = false;
        this._$emit("onConfirm");
      },
      showPickerView() {
        this.showPicker = true;
      },
      handPickValueDefault() {
        const pickerValueDefault = this.pickerValueDefault;
        let provinceIndex = pickerValueDefault[0];
        let cityIndex = pickerValueDefault[1];
        const areaIndex = pickerValueDefault[2];
        if (provinceIndex !== 0 || cityIndex !== 0 || areaIndex !== 0) {
          if (provinceIndex > provinceData.length - 1) {
            this.pickerValueDefault[0] = provinceIndex = provinceData.length - 1;
          }
          if (cityIndex > cityData[provinceIndex].length - 1) {
            this.pickerValueDefault[1] = cityIndex = cityData[provinceIndex].length - 1;
          }
          if (areaIndex > areaData[provinceIndex][cityIndex].length - 1) {
            this.pickerValueDefault[2] = areaData[provinceIndex][cityIndex].length - 1;
          }
        }
      },
      pickerChange(e) {
        let changePickerValue = e.mp.detail.value;
        if (this.pickerValue[0] !== changePickerValue[0]) {
          this.cityDataList = cityData[changePickerValue[0]];
          this.areaDataList = areaData[changePickerValue[0]][0];
          changePickerValue[1] = 0;
          changePickerValue[2] = 0;
        } else if (this.pickerValue[1] !== changePickerValue[1]) {
          this.areaDataList = areaData[changePickerValue[0]][changePickerValue[1]];
          changePickerValue[2] = 0;
        }
        this.pickerValue = changePickerValue;
        this._$emit("onChange");
      },
      _$emit(emitName) {
        let pickObj = {
          label: this._getLabel(),
          value: this.pickerValue,
          cityCode: this._getCityCode()
        };
        this.$emit(emitName, pickObj);
      },
      _getLabel() {
        let pcikerLabel = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
        return pcikerLabel;
      },
      _getCityCode() {
        return this.areaDataList[this.pickerValue[2]].value;
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "mpvue-picker" }, [
      vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass({ "pickerMask": $data.showPicker }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.maskClick && $options.maskClick(...args)),
          catchtouchmove: "true"
        },
        null,
        2
        /* CLASS */
      ),
      vue.createElementVNode(
        "div",
        {
          class: vue.normalizeClass(["mpvue-picker-content", { "mpvue-picker-view-show": $data.showPicker }])
        },
        [
          vue.createElementVNode("div", {
            class: "mpvue-picker__hd",
            catchtouchmove: "true"
          }, [
            vue.createElementVNode("div", {
              class: "mpvue-picker__action",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.pickerCancel && $options.pickerCancel(...args))
            }, "取消"),
            vue.createElementVNode(
              "div",
              {
                class: "mpvue-picker__action",
                style: vue.normalizeStyle({ color: $props.themeColor }),
                onClick: _cache[2] || (_cache[2] = (...args) => $options.pickerConfirm && $options.pickerConfirm(...args))
              },
              "确定",
              4
              /* STYLE */
            )
          ]),
          vue.createElementVNode("picker-view", {
            "indicator-style": "height: 40px;",
            class: "mpvue-picker-view",
            value: $data.pickerValue,
            onChange: _cache[3] || (_cache[3] = (...args) => $options.pickerChange && $options.pickerChange(...args))
          }, [
            vue.createElementVNode("template", null, [
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.provinceDataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        class: "picker-item",
                        key: index
                      },
                      vue.toDisplayString(item.label),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.cityDataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        class: "picker-item",
                        key: index
                      },
                      vue.toDisplayString(item.label),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.areaDataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        class: "picker-item",
                        key: index
                      },
                      vue.toDisplayString(item.label),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ], 40, ["value"])
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const mpvueCityPicker = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-a822e6e6"], ["__file", "F:/project/社区交友/components/uni-uni/mpvue-citypicker/mpvueCityPicker.vue"]]);
  const genderArray = ["男", "女", "保密"];
  const relationArray$1 = ["保密", "未婚", "已婚"];
  const _sfc_main$a = {
    components: {
      uniList,
      uniListItem,
      mpvueCityPicker
    },
    data() {
      return {
        userpic: "/static/common/demo6.jpg",
        username: "",
        gender: 2,
        relation: 0,
        job: "保密",
        birthday: "",
        pickerText: "",
        themeColor: "#007AFF",
        cityPickerValueDefault: [0, 0, 1]
      };
    },
    onLoad() {
      let userinfo = this.user.userinfo;
      if (userinfo) {
        this.pickerText = userinfo.path;
        this.username = this.user.username;
        this.gender = userinfo.sex;
        this.relation = userinfo.qg;
        this.job = userinfo.job;
        this.birthday = userinfo.birthday;
      }
    },
    computed: {
      ...mapState({
        user: (state) => state.user
      }),
      genderText() {
        return genderArray[this.gender];
      },
      relationText() {
        return relationArray$1[this.relation];
      }
    },
    methods: {
      showCityPicker() {
        this.$refs.mpvueCityPicker.show();
      },
      // 三级联动提交事件
      onConfirm(e) {
        this.pickerText = e.label;
      },
      // 修改生日
      onDateChange(e) {
        this.birthday = e.detail.value;
      },
      // 修改头像
      changeUserpic() {
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success: (res) => {
            this.$H.upload("/edituserpic", {
              filePath: res.tempFilePaths[0],
              name: "userpic",
              token: true
            }).then((result) => {
              this.$store.commit("editUserInfo", {
                key: "userpic",
                value: result.data
              });
              uni.showToast({
                title: "修改头像成功",
                icon: "none"
              });
            }).catch((err) => {
              formatAppLog("log", "at pages/user-ownerinfo/user-ownerinfo.vue:146", err);
            });
          }
        });
      },
      // 修改性别
      changeGender() {
        uni.showActionSheet({
          itemList: genderArray,
          success: (res) => {
            this.gender = res.tapIndex;
          }
        });
      },
      // 修改情感状态
      changeRelation() {
        uni.showActionSheet({
          itemList: relationArray$1,
          success: (res) => {
            this.relation = res.tapIndex;
          }
        });
      },
      // 修改职业
      changeJob() {
        let jobArray = ["IT", "教师", "学生"];
        uni.showActionSheet({
          itemList: jobArray,
          success: (res) => {
            this.job = jobArray[res.tapIndex];
          }
        });
      },
      // 提交
      submit() {
        let obj = {
          name: this.username,
          sex: this.gender,
          qg: this.relation,
          job: this.job,
          birthday: this.birthday,
          path: this.pickerText
        };
        this.$H.post("/edituserinfo", obj, {
          token: true
        }).then((res) => {
          this.$store.commit("editUserInfo", {
            key: "username",
            value: this.username
          });
          this.$store.commit("editUserUserInfo", obj);
          uni.navigateBack({
            delta: 1
          });
          uni.showToast({
            title: "修改资料成功",
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list_item = vue.resolveComponent("uni-list-item");
    const _component_uni_list = vue.resolveComponent("uni-list");
    const _component_mpvue_city_picker = vue.resolveComponent("mpvue-city-picker");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_list_item, {
            title: "头像",
            onClick: $options.changeUserpic
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode("image", {
                src: $data.userpic,
                style: { "width": "100rpx", "height": "100rpx" },
                class: "rounded-circle"
              }, null, 8, ["src"]),
              vue.createElementVNode("text", { class: "iconfont icon-bianji1 ml-2" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          vue.createVNode(_component_uni_list_item, { title: "昵称" }, {
            right: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "uni-input text-right",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.username = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.username]
              ]),
              vue.createElementVNode("text", { class: "iconfont icon-bianji1 ml-2" })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_list_item, {
            title: "性别",
            onClick: $options.changeGender
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.genderText),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", { class: "iconfont icon-bianji1 ml-2" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          vue.createElementVNode("picker", {
            mode: "date",
            value: $data.birthday,
            onChange: _cache[1] || (_cache[1] = (...args) => $options.onDateChange && $options.onDateChange(...args))
          }, [
            vue.createVNode(_component_uni_list_item, { title: "生日" }, {
              right: vue.withCtx(() => [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($data.birthday),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "iconfont icon-bianji1 ml-2" })
              ]),
              _: 1
              /* STABLE */
            })
          ], 40, ["value"]),
          vue.createVNode(_component_uni_list_item, {
            title: "情感",
            onClick: $options.changeRelation
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.relationText),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", { class: "iconfont icon-bianji1 ml-2" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          vue.createVNode(_component_uni_list_item, {
            title: "职业",
            onClick: $options.changeJob
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($data.job),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", { class: "iconfont icon-bianji1 ml-2" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          vue.createVNode(_component_uni_list_item, {
            title: "家乡",
            onClick: $options.showCityPicker
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($data.pickerText),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", { class: "iconfont icon-bianji1 ml-2" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "py-2 px-3" }, [
        vue.createElementVNode("button", {
          class: "bg-color text-white",
          style: { "border-radius": "50rpx", "border": "0" },
          type: "primary",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.submit && $options.submit(...args))
        }, "完成")
      ]),
      vue.createVNode(_component_mpvue_city_picker, {
        themeColor: $data.themeColor,
        ref: "mpvueCityPicker",
        pickerValueDefault: $data.cityPickerValueDefault,
        onOnConfirm: $options.onConfirm
      }, null, 8, ["themeColor", "pickerValueDefault", "onOnConfirm"])
    ]);
  }
  const PagesUserOwnerinfoUserOwnerinfo = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "F:/project/社区交友/pages/user-ownerinfo/user-ownerinfo.vue"]]);
  const _sfc_main$9 = {
    name: "UniCollapse",
    props: {
      accordion: {
        // 是否开启手风琴效果
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {};
    },
    provide() {
      return {
        collapse: this
      };
    },
    created() {
      this.childrens = [];
    },
    methods: {
      onChange() {
        let activeItem = [];
        this.childrens.forEach((vm, index) => {
          if (vm.isOpen) {
            activeItem.push(vm.nameSync);
          }
        });
        this.$emit("change", activeItem);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const uniCollapse = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-83aa08f3"], ["__file", "F:/project/社区交友/components/uni-uni/uni-collapse/uni-collapse.vue"]]);
  const _sfc_main$8 = {
    name: "UniCollapseItem",
    components: {
      uniIcons
    },
    props: {
      title: {
        // 列表标题
        type: String,
        default: ""
      },
      name: {
        // 唯一标识符
        type: [Number, String],
        default: 0
      },
      disabled: {
        // 是否禁用
        type: Boolean,
        default: false
      },
      showAnimation: {
        // 是否显示动画
        type: Boolean,
        default: false
      },
      open: {
        // 是否展开
        type: Boolean,
        default: false
      },
      thumb: {
        // 缩略图
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isOpen: false
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
      }
    },
    inject: ["collapse"],
    created() {
      this.isOpen = this.open;
      this.nameSync = this.name ? this.name : this.collapse.childrens.length;
      this.collapse.childrens.push(this);
      if (String(this.collapse.accordion) === "true") {
        if (this.isOpen) {
          let lastEl = this.collapse.childrens[this.collapse.childrens.length - 2];
          if (lastEl) {
            this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = false;
          }
        }
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return;
        }
        if (String(this.collapse.accordion) === "true") {
          this.collapse.childrens.forEach((vm) => {
            if (vm === this) {
              return;
            }
            vm.isOpen = false;
          });
        }
        this.isOpen = !this.isOpen;
        this.collapse.onChange && this.collapse.onChange();
        this.$forceUpdate();
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = vue.resolveComponent("uni-icons");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass([{ "uni-collapse-cell--disabled": $props.disabled, "uni-collapse-cell--notdisabled": !$props.disabled, "uni-collapse-cell--open": $data.isOpen, "uni-collapse-cell--hide": !$data.isOpen }, "uni-collapse-cell"])
      },
      [
        vue.createElementVNode("view", {
          class: "uni-collapse-cell__title",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
        }, [
          $props.thumb ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            src: $props.thumb,
            class: "uni-collapse-cell__title-img"
          }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "text",
            { class: "uni-collapse-cell__title-text" },
            vue.toDisplayString($props.title),
            1
            /* TEXT */
          ),
          vue.createVNode(_component_uni_icons, {
            class: vue.normalizeClass([{ "uni-collapse-cell__title-arrow-active": $data.isOpen, "uni-collapse-cell--animation": $props.showAnimation === true }, "uni-collapse-cell__title-arrow"]),
            color: "#bbb",
            size: "20",
            type: "arrowdown"
          }, null, 8, ["class"])
        ]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-collapse-cell__content--hide": !$data.isOpen }, "uni-collapse-cell__content"])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass([{ "uni-collapse-cell--animation": $props.showAnimation === true }, "uni-collapse-cell__wrapper"]),
                style: vue.normalizeStyle({ "transform": $data.isOpen ? "translateY(0)" : "translateY(-50%)", "-webkit-transform": $data.isOpen ? "translateY(0)" : "translateY(-50%)" })
              },
              [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    );
  }
  const uniCollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-5e56371b"], ["__file", "F:/project/社区交友/components/uni-uni/uni-collapse-item/uni-collapse-item.vue"]]);
  const _sfc_main$7 = {
    components: {
      uniCollapse,
      uniCollapseItem
    },
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_collapse_item = vue.resolveComponent("uni-collapse-item");
    const _component_uni_collapse = vue.resolveComponent("uni-collapse");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_collapse, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_collapse_item, {
            title: "标题文字",
            showAnimation: ""
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "content" }, "折叠内容主体，可自定义内容及样式")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_collapse_item, {
            title: "标题文字",
            showAnimation: ""
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "content" }, "折叠内容主体，可自定义内容及样式")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "py-2 px-3" }, [
        vue.createElementVNode("button", {
          class: "bg-color text-white",
          style: { "border-radius": "50rpx", "border": "0" },
          type: "primary"
        }, "意见反馈")
      ])
    ]);
  }
  const PagesUserFeedbackUserFeedback = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "F:/project/社区交友/pages/user-feedback/user-feedback.vue"]]);
  const _imports_0 = "/static/common/demo5.jpg";
  const _sfc_main$6 = {
    components: {
      uniList,
      uniListItem
    },
    data() {
      return {
        version: ""
      };
    },
    onLoad() {
      plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
        this.version = widgetInfo.version;
      });
    },
    methods: {
      update() {
        this.$U.update(true);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list_item = vue.resolveComponent("uni-list-item");
    const _component_uni_list = vue.resolveComponent("uni-list");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "flex align-center justify-center flex-column pt-4 pb-3" }, [
        vue.createElementVNode("image", {
          src: _imports_0,
          style: { "width": "200rpx", "height": "200rpx" },
          class: "rounded-circle"
        }),
        vue.createElementVNode(
          "text",
          { class: "font text-muted mt-2" },
          "version " + vue.toDisplayString($data.version),
          1
          /* TEXT */
        )
      ]),
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_list_item, {
            title: "新版本检测",
            onClick: $options.update
          }, null, 8, ["onClick"]),
          vue.createVNode(_component_uni_list_item, { title: "社区用户协议" })
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "F:/project/社区交友/pages/about/about.vue"]]);
  const _sfc_main$5 = {
    components: {
      uniStatusBar,
      otherLogin
    },
    data() {
      return {
        status: false,
        username: "",
        password: "",
        phone: "",
        pincode: "",
        codeTime: 0
      };
    },
    onLoad() {
    },
    computed: {
      disabled() {
        if (this.status) {
          return this.phone === "" || this.pincode === "";
        } else {
          return this.username === "" || this.password === "";
        }
      }
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      },
      // 初始化表单
      initForm() {
        this.username = "";
        this.password = "";
        this.phone = "";
        this.pincode = "";
      },
      // 切换登录方式
      changeStatus() {
        this.initForm();
        this.status = !this.status;
      },
      // 获取验证码
      getCode() {
        if (this.codeTime > 0) {
          return;
        }
        if (!this.validata())
          return;
        this.codeTime = 60;
        let timer = setInterval(() => {
          if (this.codeTime >= 1) {
            this.codeTime--;
          } else {
            this.codeTime = 0;
            clearInterval(timer);
          }
        }, 1e3);
      },
      // 表单验证
      validata() {
        var mpattern = /^1[3-9]\d{9}$/;
        if (!mpattern.test(this.phone)) {
          uni.showToast({
            title: "手机号格式不正确",
            icon: "none"
          });
          return false;
        }
        return true;
      },
      // 提交
      submit() {
        if (this.staus) {
          if (!this.validata())
            return;
        }
        this.$H.post("/user/login", {
          username: this.username,
          password: this.password
        }).then((res) => {
          this.$store.commit("login", res.data.data);
          this.$store.dispatch("openSocket");
          uni.navigateBack({
            delta: 1
          });
          uni.showToast({
            title: "登录成功",
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = vue.resolveComponent("uni-status-bar");
    const _component_other_login = vue.resolveComponent("other-login");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_status_bar),
      vue.createElementVNode("view", {
        class: "iconfont icon-guanbi1 flex align-center justify-center font-lg",
        style: { "width": "100rpx", "height": "100rpx" },
        "hover-class": "bg-light",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
      }),
      vue.createElementVNode(
        "view",
        {
          class: "text-center",
          style: { "padding-top": "130rpx", "padding-bottom": "70rpx", "font-size": "55rpx" }
        },
        vue.toDisplayString($data.status ? "手机验证码登录" : "账号密码登录"),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "px-2" }, [
        !$data.status ? (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 0 },
          [
            vue.createElementVNode("view", { class: "mb-2" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.username = $event),
                  placeholder: "昵称/手机号/邮箱",
                  class: "border-bottom p-2"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.username]
              ])
            ]),
            vue.createElementVNode("view", { class: "mb-2 flex align-stretch" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.password = $event),
                  placeholder: "请输入密码",
                  class: "border-bottom p-2 flex-1"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.password]
              ]),
              vue.createElementVNode("view", {
                class: "border-bottom flex align-center justify-center font text-muted",
                style: { "width": "150rpx" }
              }, "忘记密码")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            vue.createElementVNode("view", { class: "mb-2 flex align-stretch" }, [
              vue.createElementVNode("view", { class: "border-bottom flex align-center justify-center font px-2" }, "+86"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.phone = $event),
                  placeholder: "手机号",
                  class: "border-bottom p-2 flex-1"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.phone]
              ])
            ]),
            vue.createElementVNode("view", { class: "mb-2 flex align-stretch" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.pincode = $event),
                  placeholder: "请输入验证码",
                  class: "border-bottom p-2 flex-1"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.pincode]
              ]),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["border-bottom flex align-center justify-center font-sm text-white", $data.codeTime > 0 ? "bg-color-disabled" : "bg-color"]),
                  style: { "width": "180rpx" },
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.getCode && $options.getCode(...args))
                },
                vue.toDisplayString($data.codeTime > 0 ? $data.codeTime + "s" : "获取验证码"),
                3
                /* TEXT, CLASS */
              )
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "py-2 px-3" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["text-white", $options.disabled ? "bg-color-disabled" : "bg-color"]),
          style: { "border-radius": "50rpx", "border": "0" },
          type: "primary",
          disabled: $options.disabled,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.submit && $options.submit(...args))
        }, "登录", 10, ["disabled"])
      ]),
      vue.createElementVNode("view", { class: "flex align-center justify-center pt-2 pb-4" }, [
        vue.createElementVNode(
          "view",
          {
            class: "text-primary font-sm",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.changeStatus && $options.changeStatus(...args))
          },
          vue.toDisplayString($data.status ? "账号密码登录" : "验证码登录"),
          1
          /* TEXT */
        ),
        vue.createElementVNode("text", { class: "text-muted mx-2" }, "|"),
        vue.createElementVNode("view", { class: "text-primary font-sm" }, "登录遇见问题")
      ]),
      vue.createElementVNode("view", { class: "flex align-center justify-center" }, [
        vue.createElementVNode("view", { style: { "height": "1rpx", "background-color": "#ddd", "width": "100rpx" } }),
        vue.createElementVNode("view", { class: "mx-2 text-muted" }, "社交账号登录"),
        vue.createElementVNode("view", { style: { "height": "1rpx", "background-color": "#ddd", "width": "100rpx" } })
      ]),
      vue.createCommentVNode(" 第三方登录 "),
      vue.createVNode(_component_other_login, { back: "" }),
      vue.createElementVNode("view", { class: "flex align-center justify-center text-muted" }, [
        vue.createTextVNode(" 注册即代表同意"),
        vue.createElementVNode("text", { class: "text-primary" }, "《xxx社区协议》")
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "F:/project/社区交友/pages/login/login.vue"]]);
  const relationArray = ["保密", "未婚", "已婚"];
  const _sfc_main$4 = {
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
        return uni.showToast({
          title: "非法参数",
          icon: "none"
        });
      }
      this.user_id = e.user_id;
      this.getUserInfo();
      this.getCounts();
      uni.$on("updateFollowOrLiked", (e2) => {
        switch (e2.type) {
          case "follow":
            this.follow(e2.data.user_id);
            break;
          case "liked":
            this.liked(e2.data);
            break;
        }
      });
      uni.$on("updateCommentsCount", ({ id, count }) => {
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
      uni.$off("updateFollowOrLiked", (e) => {
      });
      uni.$off("updateCommentsCount", (e) => {
      });
    },
    computed: {
      ...mapState({
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
          return uni.navigateTo({
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
            regtime: $T.getAgeByBirthday(res.data.data.create_time),
            birthday: $T.getHoroscope(res.data.data.userinfo.birthday),
            job: res.data.data.userinfo.job ? res.data.data.userinfo.job : "无",
            path: res.data.data.userinfo.path ? res.data.data.userinfo.path : "无",
            qg: relationArray[res.data.data.userinfo.qg]
          };
          uni.setNavigationBarTitle({
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
        uni.showToast({
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
        uni.showToast({
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
            uni.showToast({
              title: msg + "成功",
              icon: "none"
            });
            uni.$emit("updateIndex");
            this.getList();
          });
        });
      },
      // 进入编辑资料
      openUserInfo() {
        uni.navigateTo({
          url: "/pages/user-ownerinfo/user-ownerinfo"
        });
      },
      // 加入或移出黑名单
      doBlack() {
        this.checkAuth(() => {
          let url = this.userinfo.isblack ? "/moveoutblack" : "/addblack";
          let msg = this.userinfo.isblack ? "移出黑名单" : "加入黑名单";
          uni.showModal({
            content: "是否要" + msg,
            success: (res) => {
              this.$H.post(url, {
                id: this.user_id
              }, {
                token: true
              }).then((res2) => {
                this.userinfo.isblack = !this.userinfo.isblack;
                uni.showToast({
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_load_more = vue.resolveComponent("load-more");
    const _component_uni_popup = vue.resolveComponent("uni-popup");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 头部 "),
      vue.createElementVNode("view", { class: "flex align-center p-4 border-bottom border-light-secondary" }, [
        vue.createElementVNode("image", {
          src: $data.userinfo.userpic,
          style: { "width": "180rpx", "height": "180rpx" },
          class: "rounded-circle"
        }, null, 8, ["src"]),
        vue.createElementVNode("view", { class: "pl-3 flex flex-column flex-1" }, [
          vue.createElementVNode("view", { class: "flex align-center" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.counts, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "flex-1 flex flex-column align-center justify-center",
                  key: index
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "font-lg font-weight-bold" },
                    vue.toDisplayString(item.num),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "font text-muted" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "flex align-center justify-center" }, [
            $data.user_id == _ctx.user.id ? (vue.openBlock(), vue.createElementBlock("button", {
              key: 0,
              type: "default",
              size: "mini",
              style: { "width": "80%" },
              onClick: _cache[0] || (_cache[0] = (...args) => $options.openUserInfo && $options.openUserInfo(...args))
            }, "编辑资料")) : (vue.openBlock(), vue.createElementBlock(
              "button",
              {
                key: 1,
                type: "default",
                size: "mini",
                class: vue.normalizeClass($data.userinfo.isFollow ? "bg-light text-dark" : "bg-color"),
                style: { "width": "80%" },
                onClick: _cache[1] || (_cache[1] = (...args) => $options.doFollow && $options.doFollow(...args))
              },
              vue.toDisplayString($data.userinfo.isFollow ? "已关注" : "关注"),
              3
              /* TEXT, CLASS */
            ))
          ])
        ])
      ]),
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
            }, vue.toDisplayString(item.name), 11, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      $data.tabIndex === 0 ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createElementVNode("view", { class: "p-3 border-bottom" }, [
            vue.createElementVNode("view", { class: "font-md" }, "账号信息"),
            vue.createElementVNode(
              "view",
              { class: "font" },
              "账号年龄:" + vue.toDisplayString($data.userinfo.regtime),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "font" },
              "账号ID:" + vue.toDisplayString($data.user_id),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "p-3 border-bottom" }, [
            vue.createElementVNode("view", { class: "font-md" }, "个人信息"),
            vue.createElementVNode(
              "view",
              { class: "font" },
              "星座:" + vue.toDisplayString($data.userinfo.birthday),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "font" },
              "职业:" + vue.toDisplayString($data.userinfo.job),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "font" },
              "故乡:" + vue.toDisplayString($data.userinfo.path),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "font" },
              "情感:" + vue.toDisplayString($data.userinfo.qg),
              1
              /* TEXT */
            )
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.list, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_common_list, {
                key: index,
                item,
                index,
                onFollow: $options.follow,
                onLiked: $options.liked
              }, null, 8, ["item", "index", "onFollow", "onLiked"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", { class: "divider" }),
          vue.createVNode(_component_load_more, { loadmore: $options.loadmore }, null, 8, ["loadmore"])
        ],
        64
        /* STABLE_FRAGMENT */
      )),
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
              onClick: _cache[2] || (_cache[2] = (...args) => $options.doBlack && $options.doBlack(...args))
            }, [
              vue.createElementVNode("text", { class: "iconfont icon-icon-1 mr-2" }),
              vue.createTextVNode(
                " " + vue.toDisplayString($data.userinfo.isblack ? "移出黑名单" : "加入黑名单"),
                1
                /* TEXT */
              )
            ]),
            !$data.userinfo.isblack ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "flex align-center justify-center color-aliceblue w-100 font-md py-1",
              style: { "height": "100rpx" },
              "hover-class": "color-global",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.openChat && $options.openChat(...args))
            }, [
              vue.createElementVNode("text", { class: "iconfont icon-qingchu mr-2" }),
              vue.createTextVNode(" 开始聊天 ")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesUserSpaceUserSpace = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "F:/project/社区交友/pages/user-space/user-space.vue"]]);
  const _sfc_main$3 = {
    components: {
      uniList,
      uniListItem
    },
    data() {
      return {
        list: []
      };
    },
    computed: {
      ...mapState({
        user: (state) => state.user
      })
    },
    onShow() {
      this.__init();
    },
    methods: {
      __init() {
        let list = [{
          name: "手机号",
          data: this.user.phone ? this.user.phone : "未绑定",
          type: "navigateTo",
          url: "/pages/user-phone/user-phone"
        }, {
          name: "登录密码",
          data: this.user.password ? "修改密码" : "未设置",
          type: "navigateTo",
          url: "/pages/user-password/user-password"
        }, {
          name: "绑定邮箱",
          data: this.user.email ? this.user.email : "未绑定",
          type: "navigateTo",
          url: "/pages/user-email/user-email"
        }];
        this.list = [...list];
        this.$H.get("/user/getuserbind", {}, {
          token: true
        }).then((res) => {
          this.$store.commit("editUserInfo", {
            key: "user_bind",
            value: res
          });
          let other = [{
            name: "微信绑定",
            data: this.user.user_bind.data.data.weixin ? this.user.user_bind.data.data.weixin.nickname : "未绑定",
            type: "bind",
            provider: "weixin"
          }, {
            name: "微博绑定",
            data: this.user.user_bind.data.data.sinaweibo ? this.user.user_bind.data.data.sinaweibo.nickname : "未绑定",
            type: "bind",
            provider: "sinaweibo"
          }, {
            name: "qq绑定",
            data: this.user.user_bind.data.data.qq ? this.user.user_bind.data.data.qq.nickname : "未绑定",
            type: "bind",
            provider: "qq"
          }];
          this.list = [...this.list, ...other];
        });
      },
      handleEvent(item) {
        if (item.type === "")
          return;
        switch (item.type) {
          case "navigateTo":
            uni.navigateTo({
              url: item.url
            });
            break;
          case "bind":
            if (item.data !== "未绑定") {
              return uni.showToast({
                title: "你已经绑定过了",
                icon: "none"
              });
            }
            this.bind(item.provider);
            break;
        }
      },
      // 绑定第三方登录
      bind(provider) {
        uni.login({
          provider,
          success: (r) => {
            uni.getUserInfo({
              provider,
              success: (res) => {
                let obj = {
                  provider,
                  openid: res.userInfo.openId,
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl
                };
                this.$H.post("user/bindother", obj, {
                  token: true
                }).then((res2) => {
                  this.__init();
                  uni.showToast({
                    title: "绑定成功",
                    icon: "none"
                  });
                });
              }
            });
          }
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list_item = vue.resolveComponent("uni-list-item");
    const _component_uni_list = vue.resolveComponent("uni-list");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.list, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                title: item.name,
                key: index,
                onClick: ($event) => $options.handleEvent(item)
              }, {
                right: vue.withCtx(() => [
                  vue.createElementVNode(
                    "view",
                    { class: "flex align-center text-right text-light-muted" },
                    vue.toDisplayString(item.data),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["title", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesUserSafeUserSafe = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "F:/project/社区交友/pages/user-safe/user-safe.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        phone: "",
        code: "",
        codeTime: 0
      };
    },
    computed: {
      disabled() {
        return this.phone === "" || this.code === "";
      }
    },
    methods: {
      // 验证密码
      check() {
        var rule = /^1[3-9]\d{9}$/;
        if (!rule.test(this.phone)) {
          uni.showToast({
            title: "手机号格式不正确",
            icon: "none"
          });
          return false;
        }
        return true;
      },
      submit() {
        if (!this.check()) {
          return;
        }
        this.$H.post("/user/bindphone", {
          phone: this.phone,
          code: this.code
        }, {
          token: true
        }).then((res) => {
          this.$store.commit("ediUserInfo", {
            key: "phone",
            value: this.phone
          });
          uni.navigateBack({
            delta: 1
          });
          uni.showToast({
            title: "修改成功",
            icon: "none"
          });
        });
      },
      // 获取验证码
      getCode() {
        if (this.codeTime > 0) {
          return;
        }
        if (!this.check())
          return;
        this.codeTime = 60;
        let timer = setInterval(() => {
          if (this.codeTime >= 1) {
            this.codeTime--;
          } else {
            this.codeTime = 0;
            clearInterval(timer);
          }
        }, 1e3);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "mb-2 flex align-stretch" }, [
        vue.createElementVNode("view", { class: "border-bottom flex align-center justify-center font px-2" }, "+86"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.phone = $event),
            placeholder: "手机号",
            class: "border-bottom p-2 flex-1"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.phone]
        ])
      ]),
      vue.createElementVNode("view", { class: "mb-2 flex align-stretch" }, [
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "text",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.code = $event),
            placeholder: "请输入验证码",
            class: "border-bottom p-2 flex-1"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.code]
        ]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["border-bottom flex align-center justify-center font-sm text-white", $data.codeTime > 0 ? "bg-color-disabled" : "bg-color"]),
            style: { "width": "180rpx" },
            onClick: _cache[2] || (_cache[2] = (...args) => $options.getCode && $options.getCode(...args))
          },
          vue.toDisplayString($data.codeTime > 0 ? $data.codeTime + "s" : "获取验证码"),
          3
          /* TEXT, CLASS */
        )
      ]),
      vue.createElementVNode("view", { class: "py-2 px-3" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["bg-color text-white", $options.disabled ? "bg-color-disabled" : ""]),
          style: { "border-radius": "50rpx", "border": "0" },
          type: "primary",
          disabled: $options.disabled,
          onClick: _cache[3] || (_cache[3] = (...args) => $options.submit && $options.submit(...args))
        }, "绑定", 10, ["disabled"])
      ])
    ]);
  }
  const PagesUserPhoneUserPhone = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/project/社区交友/pages/user-phone/user-phone.vue"]]);
  const _sfc_main$1 = {
    components: {
      commonList,
      noThing
    },
    data() {
      return {
        list: []
      };
    },
    onLoad() {
      let list = uni.getStorageSync("history");
      if (list) {
        this.list = JSON.parse(list);
      }
      uni.$on("updateFollowOrLiked", (e) => {
        switch (e.type) {
          case "follow":
            this.follow(e.data.user_id);
            break;
          case "liked":
            this.liked(e.data);
            break;
        }
      });
      uni.$on("updateCommentsCount", ({ id, count }) => {
        this.list.forEach((item) => {
          if (item.id === id) {
            item.comment_count = count;
          }
        });
      });
    },
    onUnload() {
      uni.$off("updateFollowOrLiked", (e) => {
      });
      uni.$off("updateCommentsCount", (e) => {
      });
    },
    onNavigationBarButtonTap() {
      uni.showModal({
        content: "是否要清除历史记录",
        success: (res) => {
          if (res.confirm) {
            uni.removeStorageSync("history");
            this.list = [];
          }
        }
      });
    },
    methods: {
      //关注
      follow(user_id) {
        this.list.forEach((item) => {
          if (item.user_id === user_id) {
            item.isFollow = true;
          }
        });
        uni.showToast({
          title: "关注成功",
          icon: "none"
        });
      },
      //顶踩
      liked(e) {
        this.list.forEach((item) => {
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
        uni.showToast({
          title: msg + "成功",
          icon: "none"
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_common_list = vue.resolveComponent("common-list");
    const _component_no_thing = vue.resolveComponent("no-thing");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.list, (item, index) => {
          return vue.openBlock(), vue.createBlock(_component_common_list, {
            key: index,
            item,
            index
          }, null, 8, ["item", "index"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $data.list.length === 0 ? (vue.openBlock(), vue.createBlock(_component_no_thing, { key: 0 })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesHistoryHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/project/社区交友/pages/history/history.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/msg/msg", PagesMsgMsg);
  __definePage("pages/owner/owner", PagesOwnerOwner);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/add-input/add-input", PagesAddInputAddInput);
  __definePage("pages/topic-nav/topic-nav", PagesTopicNavTopicNav);
  __definePage("pages/topic-detail/topic-detail", PagesTopicDetailTopicDetail);
  __definePage("pages/friend-list/friend-list", PagesFriendListFriendList);
  __definePage("pages/users-chat/users-chat", PagesUsersChatUsersChat);
  __definePage("pages/post-detail/post-detail", PagesPostDetailPostDetail);
  __definePage("pages/user-setting/user-setting", PagesUserSettingUserSetting);
  __definePage("pages/user-password/user-password", PagesUserPasswordUserPassword);
  __definePage("pages/user-email/user-email", PagesUserEmailUserEmail);
  __definePage("pages/user-ownerinfo/user-ownerinfo", PagesUserOwnerinfoUserOwnerinfo);
  __definePage("pages/user-feedback/user-feedback", PagesUserFeedbackUserFeedback);
  __definePage("pages/about/about", PagesAboutAbout);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/user-space/user-space", PagesUserSpaceUserSpace);
  __definePage("pages/user-safe/user-safe", PagesUserSafeUserSafe);
  __definePage("pages/user-phone/user-phone", PagesUserPhoneUserPhone);
  __definePage("pages/history/history", PagesHistoryHistory);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      this.$U.update();
      this.$U.onNetwork();
      this.$store.dispatch("initUser");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:14", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:17", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/project/社区交友/App.vue"]]);
  const $C = {
    // api请求前缀
    webUrl: "https://ceshi.virtualfri.asia/",
    // websocket地址
    websocketUrl: "wss://ceshi.virtualfri.asia/wss"
  };
  const store = createStore({
    state: {
      // 登录
      loginStatus: false,
      token: false,
      user: {
        // "id": 7,
        // "username": "zcmcss",
        // "userpic": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/1.jpg",
        // "password": true,
        // "phone": "13450772004",
        // "email": "123@qq.com",
        // "status": 1,
        // "create_time": null,
        // "logintype": "username",
        // "token": "a8bb3f6f50ff5049d70b6022b48e1f45c24a96f8",
        // "userinfo": {
        // 	"id": 1,
        // 	"user_id": 7,
        // 	"age": 23,
        // 	"sex": 1,
        // 	"qg": 1,
        // 	"job": "IT",
        // 	"path": "北京市-市辖区-朝阳区",
        // 	"birthday": "1996-06-12"
        // },
        // user_bind:{
        // 	"qq": {
        // 		"id": 229,
        // 		"nickname": "airson"
        // 	}
        // }
      },
      // Socket连接状态
      IsOpen: false,
      // SocketTask
      SocketTask: false,
      // 是否上线（会员id绑定客户端id，验证用户身份，通过则绑定）
      IsOnline: false,
      // 当前聊天对象（进入聊天页面获取）
      ToUser: {
        user_id: 0,
        // 通过判断user_id是否为0，当前用户处在什么场景下
        username: "",
        userpic: ""
      },
      // 聊天会话列表
      chatList: []
    },
    getters: {
      // 总未读数
      totalNoread(state) {
        let total = 0;
        state.chatList.forEach((item) => {
          total += item.noread;
        });
        return total;
      }
    },
    mutations: {
      // 创建聊天对象
      createToUser(state, ToUser) {
        state.ToUser = ToUser;
      },
      // 关闭聊天对象
      closeToUser(state) {
        state.ToUser = {
          user_id: 0,
          username: "",
          userpic: ""
        };
      },
      // 登录
      login(state, user) {
        state.loginStatus = true;
        state.user = user;
        state.token = state.user.token;
        uni.setStorageSync("user", JSON.stringify(user));
        uni.$emit("updateIndex");
      },
      // 退出登录
      logout(state) {
        state.loginStatus = false;
        state.user = {};
        state.token = false;
        uni.removeStorageSync("user");
        uni.$emit("updateIndex");
      },
      // 修改用户信息(手机号,邮箱,密码)
      editUserInfo(state, { key, value }) {
        state.user[key] = value;
        uni.setStorageSync("user", JSON.stringify(state.user));
      },
      // 修改资料
      editUserUserInfo(state, obj) {
        if (state.user.userinfo) {
          state.user.userinfo.sex = obj.sex;
          state.user.userinfo.qg = obj.qg;
          state.user.userinfo.job = obj.job;
          state.user.userinfo.path = obj.path;
          state.user.userinfo.birthday = obj.birthday;
          uni.setStorageSync("user", JSON.stringify(state.user));
        }
      },
      // 存储会话列表
      saveChatList(state, list) {
        uni.setStorageSync("chatlist_" + state.user.id, JSON.stringify(list));
      },
      // 删除会话列表
      clearChatList(state, list) {
        uni.removeStorageSync("chatlist_" + state.user.id);
        state.chatList = [];
      },
      // 存储与某个用户聊天内容列表
      saveChatDetail(state, { list, toId }) {
        let myId = state.user.id;
        toId = toId ? toId : state.ToUser.user_id;
        let key = "chatdetail_" + myId + "_" + toId;
        uni.setStorageSync(key, JSON.stringify(list));
      }
    },
    actions: {
      // 初始化登录状态
      initUser({ state, dispatch }) {
        let user = uni.getStorageSync("user");
        if (user) {
          state.user = JSON.parse(user);
          state.loginStatus = true;
          state.token = state.user.token;
          dispatch("openSocket");
        }
      },
      // 关闭socket
      closeSocket({ state }) {
        if (state.IsOpen) {
          state.SocketTask.close();
        }
      },
      // 打开socket
      openSocket({ state, dispatch }) {
        if (state.IsOpen)
          return;
        state.SocketTask = uni.connectSocket({
          url: $C.websocketUrl,
          complete: () => {
          }
        });
        if (!state.SocketTask)
          return;
        state.SocketTask.onOpen(() => {
          formatAppLog("log", "at store/index.js:161", "将连接状态设为已连接");
          state.IsOpen = true;
        });
        state.SocketTask.onClose(() => {
          formatAppLog("log", "at store/index.js:166", "连接已关闭");
          state.IsOpen = false;
          state.SocketTask = false;
          state.IsOnline = false;
        });
        state.SocketTask.onError(() => {
          formatAppLog("log", "at store/index.js:175", "连接错误");
          state.IsOpen = false;
          state.SocketTask = false;
          state.IsOnline = false;
        });
        state.SocketTask.onMessage((e) => {
          formatAppLog("log", "at store/index.js:182", "接收消息", e);
          let res = JSON.parse(e.data);
          if (res.type == "bind") {
            return dispatch("userBind", res.data);
          }
          if (res.type !== "text")
            return;
          dispatch("handleChatMessage", res);
        });
      },
      // 用户绑定
      userBind({ state, dispatch }, client_id) {
        $H$1.post("/chat/bind", {
          type: "bind",
          client_id
        }, {
          token: true
        }).then((data) => {
          formatAppLog("log", "at store/index.js:221", "绑定成功", data);
          if (data.status && data.type === "bind") {
            state.IsOnline = true;
            dispatch("initChatList");
            dispatch("getUnreadMessages");
          }
        }).catch((err) => {
        });
      },
      // 获取未读信息
      getUnreadMessages({ state, dispatch }) {
        formatAppLog("log", "at store/index.js:237", "获取未读信息中...");
        $H$1.post("/chat/get", {}, {
          token: true
        }).then((data) => {
          formatAppLog("log", "at store/index.js:241", "获取未读信息成功", data);
          data.forEach((msg) => {
            dispatch("handleChatMessage", msg);
          });
        });
      },
      // 初始化会话列表
      async initChatList({ state, dispatch, commit }) {
        state.chatList = await dispatch("getChatList");
        formatAppLog("log", "at store/index.js:251", "初始化会话列表", state.chatList);
        dispatch("updateTabbarBadge");
      },
      // 处理接收消息
      handleChatMessage({ state, dispatch }, data) {
        formatAppLog("log", "at store/index.js:256", "处理接收消息", data);
        uni.$emit("UserChat", data);
        dispatch("updateChatDetailToUser", {
          data,
          send: false
        });
        dispatch("updateChatList", {
          data,
          send: false
        });
      },
      // 更新聊天会话列表
      async updateChatList({ state, dispatch, commit }, { data, send }) {
        formatAppLog("log", "at store/index.js:272", "更新聊天会话列表", data);
        let isMySend = send;
        formatAppLog("log", "at store/index.js:275", isMySend ? "本人发送的信息" : "不是本人发送的");
        let chatList = await dispatch("getChatList");
        let i = chatList.findIndex((v) => {
          return v.user_id == data.to_id || v.user_id == data.from_id;
        });
        if (i === -1) {
          let obj = await dispatch("formatChatListObject", {
            data,
            send
          });
          if (!isMySend) {
            obj.noread = 1;
          }
          formatAppLog("log", "at store/index.js:293", "不存在当前会话,创建", obj);
          chatList.unshift(obj);
        } else {
          let item = chatList[i];
          item.data = data.data;
          item.type = data.type;
          item.time = data.time;
          if (!isMySend && state.ToUser.user_id !== item.user_id) {
            item.noread++;
          }
          formatAppLog("log", "at store/index.js:306", "存在当前会话", item);
          chatList = $U.__toFirst(chatList, i);
        }
        state.chatList = chatList;
        commit("saveChatList", chatList);
        if (data.from_id !== state.ToUser.user_id && !isMySend) {
          await dispatch("updateTabbarBadge");
        }
      },
      // 获取所有聊天会话列表
      getChatList({ state }) {
        let list = uni.getStorageSync("chatlist_" + state.user.id);
        return list ? JSON.parse(list) : [];
      },
      // 获取与某个用户聊天内容列表
      getChatDetailToUser({ state }, toId = 0) {
        let myId = state.user.id;
        toId = toId ? toId : state.ToUser.user_id;
        let key = "chatdetail_" + myId + "_" + toId;
        let list = uni.getStorageSync(key);
        return list ? JSON.parse(list) : [];
      },
      // 消息转聊天会话对象
      formatChatListObject({ state }, { data, send }) {
        return {
          user_id: send ? state.ToUser.user_id : data.from_id,
          avatar: send ? state.ToUser.avatar : data.from_userpic,
          username: send ? state.ToUser.username : data.from_username,
          update_time: data.time,
          // 最新消息时间戳
          data: data.data,
          noread: 0
          // 未读数
        };
      },
      // 消息转对话对象
      formatChatDetailObject({ state }, e) {
        let data = e.data;
        formatAppLog("log", "at store/index.js:347", "formatChatDetailObject");
        formatAppLog("log", "at store/index.js:348", e);
        return {
          user_id: e.send ? state.user.id : data.from_id,
          avatar: e.send ? state.user.userpic : data.from_userpic,
          username: e.send ? state.user.username : data.from_username,
          data: data.data,
          type: data.type,
          create_time: (/* @__PURE__ */ new Date()).getTime()
        };
      },
      // 更新未读数
      updateTabbarBadge({ state, getters }) {
        let total = getters.totalNoread;
        formatAppLog("log", "at store/index.js:361", "更新未读数", total);
        if (total === 0) {
          formatAppLog("log", "at store/index.js:364", "移除未读数");
          return uni.removeTabBarBadge({
            index: 2
          });
        }
        formatAppLog("log", "at store/index.js:369", "设置未读数", total);
        uni.setTabBarBadge({
          index: 2,
          text: total > 99 ? "99+" : total.toString()
        });
      },
      // 更新与某个用户聊天内容列表
      async updateChatDetailToUser({ state, dispatch, commit }, e) {
        formatAppLog("log", "at store/index.js:377", "更新与某个用户聊天内容列表", e);
        let data = e.data;
        let toId = e.send ? state.ToUser.user_id : data.from_id;
        let list = await dispatch("getChatDetailToUser", toId);
        list.push(await dispatch("formatChatDetailObject", e));
        commit("saveChatDetail", {
          list,
          toId
        });
      },
      // 发送消息
      async sendChatMessage({ dispatch }, data) {
        formatAppLog("log", "at store/index.js:396", "发送消息");
        let sendData = await dispatch("formatSendData", data);
        formatAppLog("log", "at store/index.js:399", "发送消息数据格式", sendData);
        dispatch("updateChatDetailToUser", {
          data: sendData,
          send: true
        });
        dispatch("updateChatList", {
          data: sendData,
          send: true
        });
        return sendData;
      },
      // 组织发送格式
      formatSendData({ state }, data) {
        return {
          to_id: state.ToUser.user_id,
          from_id: state.user.id,
          from_username: state.user.username,
          from_userpic: state.user.userpic ? state.user.userpic : "/static/default.jpg",
          type: data.type,
          data: data.data,
          time: (/* @__PURE__ */ new Date()).getTime()
        };
      },
      // 读取当前会话(去除未读数,更新tabbar)
      readChatMessage({ state, commit, dispatch }, item) {
        formatAppLog("log", "at store/index.js:449", "读取当前会话(去除未读数,更新tabbar)", item);
        if (item.noread === 0)
          return;
        state.chatList.forEach((v) => {
          if (v.user_id == item.user_id) {
            v.noread = 0;
          }
        });
        commit("saveChatList", state.chatList);
        dispatch("updateTabbarBadge");
      }
    }
  });
  const $H$1 = {
    common: {
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      data: {}
    },
    request(options = {}) {
      return new Promise((resolve, reject) => {
        options.url = $C.webUrl + options.url;
        options.method = options.method || this.common.method;
        options.header = options.header || this.common.header;
        if (options.token) {
          options.header.token = store.state.token;
          if (!options.noCheck && !options.header.token && !options.notoast) {
            return uni.showToast({
              title: "非法token，请重新登录",
              icon: "none"
            });
          }
        }
        options.success = (res) => resolve(res);
        options.fail = (err) => {
          uni.showToast({
            title: "网络连接失败",
            icon: "none"
          });
          reject({
            code: -1,
            msg: "网络异常",
            raw: err
          });
        };
        uni.request(options);
      });
    },
    get(url, data = {}, options = {}) {
      options.url = url;
      options.data = data;
      options.method = "GET";
      return this.request(options);
    },
    post(url, data = {}, options = {}) {
      options.url = url;
      options.data = data;
      options.method = "POST";
      return this.request(options);
    },
    upload(url, options = {}) {
      options.url = $C.webUrl + url;
      options.header = options.header || {};
      if (options.token) {
        options.header.token = store.state.token;
        if (!options.header.token) {
          return uni.showToast({
            title: "非法token,请重新登录",
            icon: "none"
          });
        }
      }
      return new Promise((res, rej) => {
        uni.uploadFile({
          ...options,
          success: (uploadFileRes) => {
            if (uploadFileRes.statusCode !== 200) {
              return uni.showToast({
                title: "上传图片失败",
                icon: "none"
              });
            }
            let data = JSON.parse(uploadFileRes.data);
            res(data);
          },
          fail: (err) => {
            rej(err);
          }
        });
      });
    }
  };
  const $U = {
    // 监听网络
    onNetwork() {
      let func = (res) => {
        if (res.networkType === "none") {
          uni.showToast({
            title: "当前处于断网状态"
          });
        }
      };
      uni.getNetworkType({
        success: func
      });
      uni.onNetworkStatusChange(func);
    },
    // 热更新
    update(showToast = false) {
      plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
        $H.post("/update", {
          ver: widgetInfo.version
        }).then((data) => {
          if (!data.url) {
            if (showToast) {
              uni.showToast({ title: "无需更新", icon: "none" });
            }
            return;
          }
          uni.showModal({
            title: "发现新的版本",
            content: "最新版本：" + data.version,
            cancelText: "放弃更新",
            confirmText: "立即更新",
            success: (res) => {
              if (!res.confirm)
                return;
              uni.downloadFile({
                url: data.url,
                success: (downloadResult) => {
                  if (downloadResult.statusCode === 200) {
                    plus.runtime.install(downloadResult.tempFilePath, {
                      force: false
                    }, function() {
                      formatAppLog("log", "at common/utill.js:47", "install success...");
                      plus.runtime.restart();
                    }, function(e) {
                      formatAppLog("error", "at common/utill.js:50", "install fail...");
                    });
                  }
                }
              });
            }
          });
        });
      });
    },
    // 转换公共列表数据
    formatCommonList(v) {
      let isFollow = v.user.fens.length > 0;
      let liked = "";
      if (v.liked.length > 0) {
        liked = v.liked[0].type === 0 ? "liked" : "disliked";
      }
      return {
        id: v.id,
        user_id: v.user_id,
        username: v.user.username,
        userpic: v.user.userpic,
        nowstime: v.create_time,
        isFollow,
        title: v.title,
        titlepic: v.titlepic,
        liked: {
          type: liked,
          liked_count: v.ding_count,
          disliked_count: v.cai_count
        },
        comment_count: v.comment_count,
        share_count: v.share_count
      };
    },
    // 数组置顶
    __toFirst(arr, index) {
      if (index != 0) {
        arr.unshift(arr.splice(index, 1)[0]);
      }
      return arr;
    },
    // userinfo格式转换
    formatUserinfo(obj) {
      if (obj.user && obj.user_id > 0) {
        return {
          id: obj.user.id,
          username: obj.user.username || obj.nickname,
          userpic: obj.user.userpic || obj.avatarurl,
          phone: obj.user.phone,
          email: obj.user.email,
          status: obj.user.status,
          create_time: obj.user.create_time,
          logintype: obj.logintype,
          password: obj.user.password,
          token: obj.token,
          userinfo: {
            id: obj.user.userinfo.id,
            user_id: obj.user.userinfo.user_id,
            age: obj.user.userinfo.age,
            sex: obj.user.userinfo.sex,
            qg: obj.user.userinfo.qg,
            job: obj.user.userinfo.job,
            path: obj.user.userinfo.path,
            birthday: obj.user.userinfo.birthday
          }
        };
      }
      return {
        id: obj.user_id,
        username: obj.nickname,
        userpic: obj.avatarurl,
        phone: false,
        email: false,
        status: 1,
        create_time: false,
        logintype: obj.logintype,
        token: obj.token,
        userinfo: false
      };
    }
  };
  const checkAuth = (callback, checkPhone = true) => {
    if (!store.state.loginStatus) {
      uni.showToast({
        title: "请先登录",
        icon: "none"
      });
      return uni.navigateTo({
        url: "/pages/login/login"
      });
    }
    if (checkPhone && !store.state.user.phone) {
      uni.showToast({
        title: "请先登录",
        icon: "none"
      });
      return uni.navigateTo({
        url: "/pages/user-phone/user-phone"
      });
    }
    callback();
  };
  const navigateTo = (options, checkPhone = true) => {
    if (!store.state.loginStatus) {
      uni.showToast({
        title: "请先登录",
        icon: "none"
      });
      return uni.navigateTo({
        url: "/pages/login/login"
      });
    }
    if (checkPhone && !store.state.user.phone) {
      uni.showToast({
        title: "请先登录",
        icon: "none"
      });
      return uni.navigateTo({
        url: "/pages/user-phone/user-phone"
      });
    }
    uni.navigateTo(options);
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.component("no-thing", noThing);
    app.config.globalProperties.$C = $C;
    app.config.globalProperties.$U = $U;
    app.config.globalProperties.$H = $H$1;
    app.config.globalProperties.$store = store;
    app.config.globalProperties.checkAuth = checkAuth;
    app.config.globalProperties.navigateTo = navigateTo;
    app.use(store);
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
