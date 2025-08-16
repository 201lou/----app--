"use strict";
const common_vendor = require("../../common/vendor.js");
const isOpenArray = ["仅自己可见", "所有人可见"];
const uniNavBar = () => "../../components/uni-uni/uni-nav-bar/uni-nav-bar.js";
const uploadImage = () => "../../components/common/upload-image.js";
const _sfc_main = {
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
      common_vendor.index.showModal({
        content: "是否要保存为草稿?",
        showCancel: true,
        cancelText: "不保存",
        confirmText: "保存",
        success: (res) => {
          if (res.confirm) {
            this.store();
          } else {
            common_vendor.index.removeStorage({
              key: "add-input"
            });
          }
          common_vendor.index.navigateBack({ delta: 1 });
        }
      });
      this.showBack = true;
      return true;
    }
  },
  //页面加载
  onLoad() {
    common_vendor.index.getStorage({
      key: "add-input",
      success: (res) => {
        if (res.data) {
          let result = JSON.parse(res.data);
          this.content = result.content, this.imageList = result.imageList;
        }
      }
    });
    common_vendor.index.$on("chooseTopic", (e) => {
      this.topic.id = e.id;
      this.topic.title = e.title;
    });
    this.getPostClass();
  },
  beforeDestroy() {
    common_vendor.index.$off("chooseTopic", (e) => {
    });
  },
  methods: {
    // 发布文章
    submit() {
      if (this.topic.id == 0) {
        return common_vendor.index.showToast({
          title: "请选择话题",
          icon: "none"
        });
      }
      if (this.post_class_id == -1) {
        return common_vendor.index.showToast({
          title: "请选择分类",
          icon: "none"
        });
      }
      common_vendor.index.showLoading({
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
        common_vendor.index.__f__("log", "at pages/add-input/add-input.vue:193", res);
        common_vendor.index.hideLoading();
        common_vendor.index.$emit("updateIndex");
        common_vendor.index.showToast({
          title: "发布成功",
          icon: "none"
        });
        this.showBack = true;
        common_vendor.index.navigateBack({
          delta: 1
        });
      }).catch((err) => {
        common_vendor.index.hideLoading();
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
      common_vendor.index.navigateTo({
        url: "../topic-nav/topic-nav?choose=true"
      });
    },
    // 切换可见性
    changeOpen() {
      common_vendor.index.showActionSheet({
        itemList: isOpenArray,
        success: (res) => {
          this.isOpen = res.tapIndex;
        }
      });
    },
    // 返回上一步
    goBack() {
      common_vendor.index.navigateBack({ delta: 1 });
    },
    // 选中图片
    changeImage(e) {
      this.imageList = e;
    },
    //保存操作
    store() {
      common_vendor.index.setStorage({
        key: "add-input",
        data: JSON.stringify({
          content: this.content,
          imageList: this.imageList
        })
      });
    },
    // 返回上一步
    back() {
      common_vendor.index.navigateBack();
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
if (!Array) {
  const _component_uni_nav_bar = common_vendor.resolveComponent("uni-nav-bar");
  const _component_upload_image = common_vendor.resolveComponent("upload-image");
  (_component_uni_nav_bar + _component_upload_image)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.isOpenText),
    b: common_vendor.o((...args) => $options.changeOpen && $options.changeOpen(...args)),
    c: common_vendor.p({
      border: false
    }),
    d: $data.content,
    e: common_vendor.o(($event) => $data.content = $event.detail.value),
    f: common_vendor.t($options.post_class_name ? "所属分类：" + $options.post_class_name : "请选择分类"),
    g: common_vendor.t($data.topic.title ? "所属话题：" + $data.topic.title : "请选择话题"),
    h: common_vendor.sr("uploadImage", "70f5b96e-1"),
    i: common_vendor.o($options.changeImage),
    j: common_vendor.p({
      show: $options.show,
      list: $data.imageList
    }),
    k: $options.range,
    l: common_vendor.o((...args) => $options.choosePostClass && $options.choosePostClass(...args)),
    m: common_vendor.o((...args) => $options.chooseTopic && $options.chooseTopic(...args)),
    n: common_vendor.o(($event) => $options.iconclick("uploadImage")),
    o: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/add-input/add-input.js.map
