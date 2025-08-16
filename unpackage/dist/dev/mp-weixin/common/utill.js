"use strict";
const common_vendor = require("./vendor.js");
require("../store/index.js");
const $U = {
  // 监听网络
  onNetwork() {
    let func = (res) => {
      if (res.networkType === "none") {
        common_vendor.index.showToast({
          title: "当前处于断网状态"
        });
      }
    };
    common_vendor.index.getNetworkType({
      success: func
    });
    common_vendor.index.onNetworkStatusChange(func);
  },
  // 热更新
  update(showToast = false) {
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
exports.$U = $U;
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/utill.js.map
