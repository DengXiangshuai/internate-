//获取应用实例
var app = getApp();
Page({
    data: {
        addressList: [],
        isDefault: 1
    },
    selectTap: function (e) {
        //从商品详情下单选择地址之后返回
        var sid = e.currentTarget.dataset.id;
      this.setData({
        isDefault : sid
      })
    },
    addessSet: function (e) {
        wx.navigateTo({
            url: "/pages/my/addressSet"
        })
    },
    onShow: function () {
        var that = this;
        that.setData({
            addressList: [
                {
                    id:1,
                    name: "小黑",
                    mobile: "12345678901",
                    detail: "开发区1号公寓256",
                    
                },
                {
                    id: 2,
                    name: "小白",
                    mobile: "12345678901",
                    detail: "开发区3号公寓612",
                    
                }
            ]
        });
    }
});
