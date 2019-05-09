//index.js
//获取应用实例
var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');
var Foodmsg = require("../../data/database.js");

Page({
    data: {
        autoplay: true,
        interval: 3000,
        duration: 1000,
        swiperCurrent: 0,
        hideShopPopup: true,
        buyNumber: 1,
        buyNumMin: 1,
        buyNumMax:1,
        canSubmit: false, //  选中时候是否允许加入购物车
        shopCarInfo: {},
        shopType: "addShopCar",//购物类型，加入购物车或立即购买，默认为加入购物车,
        id: 0,
        shopCarNum: 4,
        commentCount:2,
      buyNumMax: 2,
      "summary": '',
    },
    onLoad: function (options) {
        var that = this;
        var id = options.id;
        var idx = id;
        that.setData({
          goods: Foodmsg.foodmsg[id],
          index :idx,
            commentList: [
                {
                    "score": "好评",
                    "date": "2017-10-11 10:20:00",
                    "content": "很好吃！！下次一定还来",
                    "user": {
                        "avatar_url": "/images/smile.jpg",
                        "nick": "angellee 🐰 🐒"
                    }
                },
                {
                    "score": "好评",
                    "date": "2017-10-11 10:20:00",
                    "content": "特别喜欢这种味道",
                    "user": {
                      "avatar_url": "/images/avater.jpg",
                        "nick": "angellee 🐰 🐒"
                    }
                }
            ]
        });

        WxParse.wxParse('article', 'html', that.data.summary, that, 5);
    },
    goShopCar: function () {
        wx.reLaunch({
            url: "/pages/cart/index"
        });
    },
    toAddShopCar: function () {
        this.setData({
            shopType: "addShopCar"
        });
        this.bindGuiGeTap();
    },
    tobuy: function () {
        this.setData({
            shopType: "tobuy"
        });
        this.bindGuiGeTap();
    },
    addShopCar: function () {

    },
    buyNow: function () {
      var that = this;
      var index = that.data.index;
        wx.navigateTo({
          url: "/pages/order/index?id="+index
        });
    },
    /**
     * 规格选择弹出框
     */
    bindGuiGeTap: function () {
        this.setData({
            hideShopPopup: false
        })
    },
    /**
     * 规格选择弹出框隐藏
     */
    closePopupTap: function () {
        this.setData({
            hideShopPopup: true
        })
    },
    numJianTap: function () {
        if( this.data.buyNumber <= this.data.buyNumMin){
            return;
        }
        var currentNum = this.data.buyNumber;
        currentNum--;
        this.setData({
            buyNumber: currentNum
        });
    },
    numJiaTap: function () {
        if( this.data.buyNumber >= this.data.buyNumMax ){
            return;
        }
        var currentNum = this.data.buyNumber;
        currentNum++;
        this.setData({
            buyNumber: currentNum
        });
    },
    //事件处理函数
    swiperchange: function (e) {
        this.setData({
            swiperCurrent: e.detail.current
        })
    }
});
