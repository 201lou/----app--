"use strict";
const common_vendor = require("../common/vendor.js");
const common_config = require("../common/config.js");
const common_request = require("../common/request.js");
const common_utill = require("../common/utill.js");
const store = common_vendor.createStore({
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
      common_vendor.index.setStorageSync("user", JSON.stringify(user));
      common_vendor.index.$emit("updateIndex");
    },
    // 退出登录
    logout(state) {
      state.loginStatus = false;
      state.user = {};
      state.token = false;
      common_vendor.index.removeStorageSync("user");
      common_vendor.index.$emit("updateIndex");
    },
    // 修改用户信息(手机号,邮箱,密码)
    editUserInfo(state, { key, value }) {
      state.user[key] = value;
      common_vendor.index.setStorageSync("user", JSON.stringify(state.user));
    },
    // 修改资料
    editUserUserInfo(state, obj) {
      if (state.user.userinfo) {
        state.user.userinfo.sex = obj.sex;
        state.user.userinfo.qg = obj.qg;
        state.user.userinfo.job = obj.job;
        state.user.userinfo.path = obj.path;
        state.user.userinfo.birthday = obj.birthday;
        common_vendor.index.setStorageSync("user", JSON.stringify(state.user));
      }
    },
    // 存储会话列表
    saveChatList(state, list) {
      common_vendor.index.setStorageSync("chatlist_" + state.user.id, JSON.stringify(list));
    },
    // 删除会话列表
    clearChatList(state, list) {
      common_vendor.index.removeStorageSync("chatlist_" + state.user.id);
      state.chatList = [];
    },
    // 存储与某个用户聊天内容列表
    saveChatDetail(state, { list, toId }) {
      let myId = state.user.id;
      toId = toId ? toId : state.ToUser.user_id;
      let key = "chatdetail_" + myId + "_" + toId;
      common_vendor.index.setStorageSync(key, JSON.stringify(list));
    }
  },
  actions: {
    // 初始化登录状态
    initUser({ state, dispatch }) {
      let user = common_vendor.index.getStorageSync("user");
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
      state.SocketTask = common_vendor.index.connectSocket({
        url: common_config.$C.websocketUrl,
        complete: () => {
        }
      });
      if (!state.SocketTask)
        return;
      state.SocketTask.onOpen(() => {
        common_vendor.index.__f__("log", "at store/index.js:161", "将连接状态设为已连接");
        state.IsOpen = true;
      });
      state.SocketTask.onClose(() => {
        common_vendor.index.__f__("log", "at store/index.js:166", "连接已关闭");
        state.IsOpen = false;
        state.SocketTask = false;
        state.IsOnline = false;
      });
      state.SocketTask.onError(() => {
        common_vendor.index.__f__("log", "at store/index.js:175", "连接错误");
        state.IsOpen = false;
        state.SocketTask = false;
        state.IsOnline = false;
      });
      state.SocketTask.onMessage((e) => {
        common_vendor.index.__f__("log", "at store/index.js:182", "接收消息", e);
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
      common_request.$H.post("/chat/bind", {
        type: "bind",
        client_id
      }, {
        token: true
      }).then((data) => {
        common_vendor.index.__f__("log", "at store/index.js:221", "绑定成功", data);
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
      common_vendor.index.__f__("log", "at store/index.js:237", "获取未读信息中...");
      common_request.$H.post("/chat/get", {}, {
        token: true
      }).then((data) => {
        common_vendor.index.__f__("log", "at store/index.js:241", "获取未读信息成功", data);
        data.forEach((msg) => {
          dispatch("handleChatMessage", msg);
        });
      });
    },
    // 初始化会话列表
    async initChatList({ state, dispatch, commit }) {
      state.chatList = await dispatch("getChatList");
      common_vendor.index.__f__("log", "at store/index.js:251", "初始化会话列表", state.chatList);
      dispatch("updateTabbarBadge");
    },
    // 处理接收消息
    handleChatMessage({ state, dispatch }, data) {
      common_vendor.index.__f__("log", "at store/index.js:256", "处理接收消息", data);
      common_vendor.index.$emit("UserChat", data);
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
      common_vendor.index.__f__("log", "at store/index.js:272", "更新聊天会话列表", data);
      let isMySend = send;
      common_vendor.index.__f__("log", "at store/index.js:275", isMySend ? "本人发送的信息" : "不是本人发送的");
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
        common_vendor.index.__f__("log", "at store/index.js:293", "不存在当前会话,创建", obj);
        chatList.unshift(obj);
      } else {
        let item = chatList[i];
        item.data = data.data;
        item.type = data.type;
        item.time = data.time;
        if (!isMySend && state.ToUser.user_id !== item.user_id) {
          item.noread++;
        }
        common_vendor.index.__f__("log", "at store/index.js:306", "存在当前会话", item);
        chatList = common_utill.$U.__toFirst(chatList, i);
      }
      state.chatList = chatList;
      commit("saveChatList", chatList);
      if (data.from_id !== state.ToUser.user_id && !isMySend) {
        await dispatch("updateTabbarBadge");
      }
    },
    // 获取所有聊天会话列表
    getChatList({ state }) {
      let list = common_vendor.index.getStorageSync("chatlist_" + state.user.id);
      return list ? JSON.parse(list) : [];
    },
    // 获取与某个用户聊天内容列表
    getChatDetailToUser({ state }, toId = 0) {
      let myId = state.user.id;
      toId = toId ? toId : state.ToUser.user_id;
      let key = "chatdetail_" + myId + "_" + toId;
      let list = common_vendor.index.getStorageSync(key);
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
      common_vendor.index.__f__("log", "at store/index.js:347", "formatChatDetailObject");
      common_vendor.index.__f__("log", "at store/index.js:348", e);
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
      common_vendor.index.__f__("log", "at store/index.js:361", "更新未读数", total);
      if (total === 0) {
        common_vendor.index.__f__("log", "at store/index.js:364", "移除未读数");
        return common_vendor.index.removeTabBarBadge({
          index: 2
        });
      }
      common_vendor.index.__f__("log", "at store/index.js:369", "设置未读数", total);
      common_vendor.index.setTabBarBadge({
        index: 2,
        text: total > 99 ? "99+" : total.toString()
      });
    },
    // 更新与某个用户聊天内容列表
    async updateChatDetailToUser({ state, dispatch, commit }, e) {
      common_vendor.index.__f__("log", "at store/index.js:377", "更新与某个用户聊天内容列表", e);
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
      common_vendor.index.__f__("log", "at store/index.js:396", "发送消息");
      let sendData = await dispatch("formatSendData", data);
      common_vendor.index.__f__("log", "at store/index.js:399", "发送消息数据格式", sendData);
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
      common_vendor.index.__f__("log", "at store/index.js:449", "读取当前会话(去除未读数,更新tabbar)", item);
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
exports.store = store;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
