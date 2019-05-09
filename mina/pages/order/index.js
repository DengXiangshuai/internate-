//获取应用实例
var app = getApp();
var Foodmsg = require("../../data/database.js");
Page({
    data: {
      
        default_address: {
            name: "小黑",
            mobile: "12345678901",
            detail: "开发区6号公寓613",
        },
        yun_price: "1.00",
        pay_price: "00.00",
        total_price: "00.00",
        params: null
    },
    onShow: function () {
        var that = this;
    },
  onLoad: function (options) {
       
      var that = this;
      var id = options.id;
      var goods = [];
    goods = Foodmsg.foodmsg[id];
    var price = goods.price;

      that.setData({
       goods : goods,
        pay_price: price,
        total_price: price
    })



    },
    createOrder: function (e) {
       
        var that = this;
        wx.navigateTo({
          url: "/pages/payOK/payOK"
        });
    },
    addressSet: function () {
        wx.navigateTo({
            url: "/pages/my/addressSet"
        });
    },
    selectAddress: function () {
        wx.navigateTo({
            url: "/pages/my/addressList"
        });
    }

});
