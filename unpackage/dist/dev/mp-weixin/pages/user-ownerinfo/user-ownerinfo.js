"use strict";
const common_vendor = require("../../common/vendor.js");
const genderArray = ["男", "女", "保密"];
const relationArray = ["保密", "未婚", "已婚"];
const uniListItem = () => "../../components/uni-uni/uni-list-item/uni-list-item.js";
const uniList = () => "../../components/uni-uni/uni-list/uni-list.js";
const mpvueCityPicker = () => "../../components/uni-uni/mpvue-citypicker/mpvueCityPicker.js";
const _sfc_main = {
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
    ...common_vendor.mapState({
      user: (state) => state.user
    }),
    genderText() {
      return genderArray[this.gender];
    },
    relationText() {
      return relationArray[this.relation];
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
      common_vendor.index.chooseImage({
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
            common_vendor.index.showToast({
              title: "修改头像成功",
              icon: "none"
            });
          }).catch((err) => {
            common_vendor.index.__f__("log", "at pages/user-ownerinfo/user-ownerinfo.vue:146", err);
          });
        }
      });
    },
    // 修改性别
    changeGender() {
      common_vendor.index.showActionSheet({
        itemList: genderArray,
        success: (res) => {
          this.gender = res.tapIndex;
        }
      });
    },
    // 修改情感状态
    changeRelation() {
      common_vendor.index.showActionSheet({
        itemList: relationArray,
        success: (res) => {
          this.relation = res.tapIndex;
        }
      });
    },
    // 修改职业
    changeJob() {
      let jobArray = ["IT", "教师", "学生"];
      common_vendor.index.showActionSheet({
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
        common_vendor.index.navigateBack({
          delta: 1
        });
        common_vendor.index.showToast({
          title: "修改资料成功",
          icon: "none"
        });
      });
    }
  }
};
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  const _component_mpvue_city_picker = common_vendor.resolveComponent("mpvue-city-picker");
  (_component_uni_list_item + _component_uni_list + _component_mpvue_city_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.userpic,
    b: common_vendor.o($options.changeUserpic),
    c: common_vendor.p({
      title: "头像"
    }),
    d: $data.username,
    e: common_vendor.o(($event) => $data.username = $event.detail.value),
    f: common_vendor.p({
      title: "昵称"
    }),
    g: common_vendor.t($options.genderText),
    h: common_vendor.o($options.changeGender),
    i: common_vendor.p({
      title: "性别"
    }),
    j: common_vendor.t($data.birthday),
    k: common_vendor.p({
      title: "生日"
    }),
    l: $data.birthday,
    m: common_vendor.o((...args) => $options.onDateChange && $options.onDateChange(...args)),
    n: common_vendor.t($options.relationText),
    o: common_vendor.o($options.changeRelation),
    p: common_vendor.p({
      title: "情感"
    }),
    q: common_vendor.t($data.job),
    r: common_vendor.o($options.changeJob),
    s: common_vendor.p({
      title: "职业"
    }),
    t: common_vendor.t($data.pickerText),
    v: common_vendor.o($options.showCityPicker),
    w: common_vendor.p({
      title: "家乡"
    }),
    x: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    y: common_vendor.sr("mpvueCityPicker", "54344eeb-8"),
    z: common_vendor.o($options.onConfirm),
    A: common_vendor.p({
      themeColor: $data.themeColor,
      pickerValueDefault: $data.cityPickerValueDefault
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-ownerinfo/user-ownerinfo.js.map
