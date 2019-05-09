//index.js
//获取应用实例
var Foodmsg = require("../../data/database.js");
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    swiperCurrent: 0,
    categories: [],
    currentNavtab: "0",
    goods: [],
    scrollTop: "0",
    loadingMoreHidden: true,
    searchInput: ''
  },
  onLoad: function() {
    var that = this;

    wx.setNavigationBarTitle({
      title: app.globalData.shopName
    });

    that.setData({
      banners: [{
          "id": 1,
          "pic_url": "/images/food/chuancai/C1.jpg"
        },
        {
          "id": 2,
          "pic_url": "/images/food/dongbei/D1.jpg"
        },
        {
          "id": 3,
          "pic_url": "/images/food/qingzhen/Q1.jpg"
        }
      ],
      categories: [{
          id: 0,
          name: "全部"
        },
        {
          id: 1,
          name: "川菜"
        },
        {
          id: 2,
          name: "清真"
        },
        {
          id: 3,
          name: "东北菜"
        },
      ],
      activeCategoryId: 0,
      goods: Foodmsg.foodmsg,
      chuancai: [{
        "id": 1,
        "name": "豆角炒肉",
        "min_price": "15.00",
        "price": "15.00",
        "pic_url": "/images/food/chuancai/C1.jpg"
      },
        {
          "id": 3,
          "name": "口水鸡",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/chuancai/C2.jpg"
        },
        {
          "id": 9,
          "name": "香辣肉丝",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/chuancai/C4.jpg"
        },
        {
          "id": 8,
          "name": "麻辣豆腐",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/chuancai/C3.jpg"
        },
      ],
      dongbei: [{
        "id": 7,
        "name": "小鸡炖蘑菇",
        "min_price": "15.00",
        "price": "15.00",
        "pic_url": "/images/food/dongbei/D4.jpg"
      }, {
          "id": 5,
          "name": "地三鲜",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/dongbei/D2.jpg"
        }, {
          "id": 2,
          "name": "凉拌菜",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/dongbei/D1.jpg"
        }, {
          "id": 6,
          "name": "锅包肉",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/dongbei/D3.jpg"
        }],
      qingzhen: [{
        "id": 11,
        "name": "云吞",
        "min_price": "15.00",
        "price": "15.00",
        "pic_url": "/images/food/qingzhen/Q4.jpg"
      }, {
          "id": 10,
          "name": "特色瓦罐",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/qingzhen/Q3.jpg"
        }, {
          "id": 4,
          "name": "面条",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/qingzhen/Q2.jpg"
        }, {
          "id": 0,
          "name": "韩式拌饭",
          "min_price": "15.00",
          "price": "15.00",
          "pic_url": "/images/food/qingzhen/Q1.jpg"
        }],
      loadingMoreHidden: false
    });
  },

  scroll: function(e) {
    var that = this,
      scrollTop = that.data.scrollTop;
    that.setData({
      scrollTop: e.detail.scrollTop
    });
  },
  //事件处理函数
  swiperchange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  switchTab: function(e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  listenerSearchInput: function(e) {
    this.setData({
      searchInput: e.detail.value
    });
  },

  tapBanner: function(e) {
    if (e.currentTarget.dataset.id != 0) {
      wx.navigateTo({
        url: "/pages/food/info?id=" + e.currentTarget.dataset.id
      });
    }
  },
  toDetailsTap: function(e) {
    wx.navigateTo({
      url: "/pages/food/info?id=" + e.currentTarget.dataset.idx
    });
  }
});