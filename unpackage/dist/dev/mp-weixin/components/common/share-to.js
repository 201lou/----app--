"use strict";
const common_vendor = require("../../common/vendor.js");
const uniPopup = () => "../uni-uni/uni-popup/uni-popup.js";
const _sfc_main = {
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
        const res = await common_vendor.index.getProvider({ service: "share" });
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
        common_vendor.index.__f__("error", "at components/common/share-to.vue:129", "获取分享服务失败", e);
        common_vendor.index.showToast({
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
      common_vendor.index.__f__("log", "at components/common/share-to.vue:141", options);
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    async share(e) {
      if (!e.id) {
        common_vendor.index.showToast({
          title: "分享服务未就绪",
          icon: "none"
        });
        return;
      }
      common_vendor.index.__f__("log", "at components/common/share-to.vue:156", "分享通道:" + e.id + "； 分享类型:" + this.shareType);
      if (!this.shareText && (this.shareType === 1 || this.shareType === 0)) {
        common_vendor.index.showModal({
          content: "分享内容不能为空",
          showCancel: false
        });
        return;
      }
      if (!this.image && (this.shareType === 2 || this.shareType === 0)) {
        common_vendor.index.showModal({
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
          common_vendor.index.__f__("log", "at components/common/share-to.vue:179", "success", e2);
          common_vendor.index.showModal({
            content: "已分享",
            showCancel: false
          });
        },
        fail: (e2) => {
          common_vendor.index.__f__("log", "at components/common/share-to.vue:186", "fail", e2);
          common_vendor.index.showModal({
            content: e2.errMsg,
            showCancel: false
          });
        },
        complete: function() {
          common_vendor.index.__f__("log", "at components/common/share-to.vue:193", "分享操作结束!");
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
      common_vendor.index.share(shareOPtions);
    },
    compress() {
      common_vendor.index.__f__("log", "at components/common/share-to.vue:234", "开始压缩");
      let img = this.image;
      return new Promise((res) => {
        var localPath = plus.io.convertAbsoluteFileSystem(img.replace("file://", ""));
        common_vendor.index.__f__("log", "at components/common/share-to.vue:238", "after" + localPath);
        plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
          entry.file((file) => {
            common_vendor.index.__f__("log", "at components/common/share-to.vue:242", "getFile:" + JSON.stringify(file));
            if (file.size > 20480) {
              plus.zip.compressImage({
                src: img,
                dst: img.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG"),
                width: "10%",
                height: "10%",
                quality: 1,
                overwrite: true
              }, (event) => {
                common_vendor.index.__f__("log", "at components/common/share-to.vue:252", "success zip****" + event.size);
                let newImg = img.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG");
                res(newImg);
              }, function(error) {
                common_vendor.index.showModal({
                  content: "分享图片太大,需要请重新选择图片!",
                  showCancel: false
                });
              });
            }
          });
        }, (e) => {
          common_vendor.index.__f__("log", "at components/common/share-to.vue:264", "Resolve file URL failed: " + e.message);
          common_vendor.index.showModal({
            content: "分享图片太大,需要请重新选择图片!",
            showCancel: false
          });
        });
      });
    }
  }
};
if (!Array) {
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  _component_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.providerList, (item, index, i0) => {
      return {
        a: common_vendor.n(item.icon + " " + item.color),
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.share(item), index)
      };
    }),
    b: common_vendor.o(($event) => $options.close()),
    c: common_vendor.sr("popup", "d46bab86-0"),
    d: common_vendor.p({
      type: "bottom"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/share-to.js.map
