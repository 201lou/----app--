"use strict";
const components_uniUni_mpvueCitypicker_cityData_province = require("./city-data/province.js");
const components_uniUni_mpvueCitypicker_cityData_city = require("./city-data/city.js");
const components_uniUni_mpvueCitypicker_cityData_area = require("./city-data/area.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pickerValue: [0, 0, 0],
      provinceDataList: components_uniUni_mpvueCitypicker_cityData_province.provinceData,
      cityDataList: components_uniUni_mpvueCitypicker_cityData_city.cityData[0],
      areaDataList: components_uniUni_mpvueCitypicker_cityData_area.areaData[0][0],
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
      this.cityDataList = components_uniUni_mpvueCitypicker_cityData_city.cityData[pickerValueDefault[0]];
      this.areaDataList = components_uniUni_mpvueCitypicker_cityData_area.areaData[pickerValueDefault[0]][pickerValueDefault[1]];
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
        if (provinceIndex > components_uniUni_mpvueCitypicker_cityData_province.provinceData.length - 1) {
          this.pickerValueDefault[0] = provinceIndex = components_uniUni_mpvueCitypicker_cityData_province.provinceData.length - 1;
        }
        if (cityIndex > components_uniUni_mpvueCitypicker_cityData_city.cityData[provinceIndex].length - 1) {
          this.pickerValueDefault[1] = cityIndex = components_uniUni_mpvueCitypicker_cityData_city.cityData[provinceIndex].length - 1;
        }
        if (areaIndex > components_uniUni_mpvueCitypicker_cityData_area.areaData[provinceIndex][cityIndex].length - 1) {
          this.pickerValueDefault[2] = components_uniUni_mpvueCitypicker_cityData_area.areaData[provinceIndex][cityIndex].length - 1;
        }
      }
    },
    pickerChange(e) {
      let changePickerValue = e.mp.detail.value;
      if (this.pickerValue[0] !== changePickerValue[0]) {
        this.cityDataList = components_uniUni_mpvueCitypicker_cityData_city.cityData[changePickerValue[0]];
        this.areaDataList = components_uniUni_mpvueCitypicker_cityData_area.areaData[changePickerValue[0]][0];
        changePickerValue[1] = 0;
        changePickerValue[2] = 0;
      } else if (this.pickerValue[1] !== changePickerValue[1]) {
        this.areaDataList = components_uniUni_mpvueCitypicker_cityData_area.areaData[changePickerValue[0]][changePickerValue[1]];
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
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  _component_template();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.showPicker ? 1 : "",
    b: common_vendor.o((...args) => $options.maskClick && $options.maskClick(...args)),
    c: common_vendor.o((...args) => $options.pickerCancel && $options.pickerCancel(...args)),
    d: $props.themeColor,
    e: common_vendor.o((...args) => $options.pickerConfirm && $options.pickerConfirm(...args)),
    f: common_vendor.f($data.provinceDataList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: index
      };
    }),
    g: common_vendor.f($data.cityDataList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: index
      };
    }),
    h: common_vendor.f($data.areaDataList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: index
      };
    }),
    i: $data.pickerValue,
    j: common_vendor.o((...args) => $options.pickerChange && $options.pickerChange(...args)),
    k: $data.showPicker ? 1 : ""
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni-uni/mpvue-citypicker/mpvueCityPicker.js.map
