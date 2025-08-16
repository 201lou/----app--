"use strict";
const common_vendor = require("./vendor.js");
const common_config = require("./config.js");
const store_index = require("../store/index.js");
const $H = {
  common: {
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    data: {}
  },
  request(options = {}) {
    return new Promise((resolve, reject) => {
      options.url = common_config.$C.webUrl + options.url;
      options.method = options.method || this.common.method;
      options.header = options.header || this.common.header;
      if (options.token) {
        options.header.token = store_index.store.state.token;
        if (!options.noCheck && !options.header.token && !options.notoast) {
          return common_vendor.index.showToast({
            title: "非法token，请重新登录",
            icon: "none"
          });
        }
      }
      options.success = (res) => resolve(res);
      options.fail = (err) => {
        common_vendor.index.showToast({
          title: "网络连接失败",
          icon: "none"
        });
        reject({
          code: -1,
          msg: "网络异常",
          raw: err
        });
      };
      common_vendor.index.request(options);
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
    options.url = common_config.$C.webUrl + url;
    options.header = options.header || {};
    if (options.token) {
      options.header.token = store_index.store.state.token;
      if (!options.header.token) {
        return common_vendor.index.showToast({
          title: "非法token,请重新登录",
          icon: "none"
        });
      }
    }
    return new Promise((res, rej) => {
      common_vendor.index.uploadFile({
        ...options,
        success: (uploadFileRes) => {
          if (uploadFileRes.statusCode !== 200) {
            return common_vendor.index.showToast({
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
exports.$H = $H;
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/request.js.map
