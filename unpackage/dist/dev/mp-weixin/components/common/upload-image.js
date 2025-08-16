"use strict";
const common_vendor = require("../../common/vendor.js");
const common_permission = require("../../common/permission.js");
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
const _sfc_main = {
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
      common_vendor.index.showModal({
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
      if (this.imageList.length === 9) {
        let isContinue = await this.isFullImg();
        common_vendor.index.__f__("log", "at components/common/upload-image.vue:106", "是否继续?", isContinue);
        if (!isContinue) {
          return;
        }
      }
      common_vendor.index.chooseImage({
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
              common_vendor.index.__f__("log", "at components/common/upload-image.vue:126", err);
            });
          });
        },
        fail: (err) => {
          common_vendor.index.getSetting({
            success: (res) => {
              let authStatus = false;
              switch (this.sourceTypeIndex) {
                case 0:
                  authStatus = res.authSetting["scope.camera"];
                  break;
                case 1:
                  authStatus = res.authSetting["scope.album"];
                  break;
                case 2:
                  authStatus = res.authSetting["scope.album"] && res.authSetting["scope.camera"];
                  break;
              }
              if (!authStatus) {
                common_vendor.index.showModal({
                  title: "授权失败",
                  content: "Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",
                  success: (res2) => {
                    if (res2.confirm) {
                      common_vendor.index.openSetting();
                    }
                  }
                });
              }
            }
          });
        }
      });
    },
    isFullImg: function() {
      return new Promise((res) => {
        common_vendor.index.showModal({
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
      common_vendor.index.previewImage({
        current,
        urls: this.imageList
      });
    },
    async checkPermission(code) {
      let type = code ? code - 1 : this.sourceTypeIndex;
      let status = common_permission.permission.isIOS ? await common_permission.permission.requestIOS(sourceType[type][0]) : await common_permission.permission.requestAndroid(type === 0 ? "android.permission.CAMERA" : "android.permission.READ_EXTERNAL_STORAGE");
      if (status === null || status === 1) {
        status = 1;
      } else {
        common_vendor.index.showModal({
          content: "没有开启权限",
          confirmText: "设置",
          success: function(res) {
            if (res.confirm) {
              common_permission.permission.gotoAppSetting();
            }
          }
        });
      }
      return status;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.show
  }, $props.show ? {
    b: common_vendor.t($data.imageList.length),
    c: common_vendor.f($data.imageList, (image, index, i0) => {
      return {
        a: image.url,
        b: image.url,
        c: common_vendor.o((...args) => $options.previewImage && $options.previewImage(...args), index),
        d: common_vendor.o(($event) => $options.deleteImage(index), index),
        e: index
      };
    }),
    d: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/upload-image.js.map
