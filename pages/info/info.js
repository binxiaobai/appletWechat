
var util = require('../../utils/util.js')
var app = getApp()
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
   data: {
      tabs: ["通知", "赞与感谢", "关注"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      conlist: [],
      showcon:['嗯、好的', '恩恩，加油', '哈？', '不懂耶', '你教我好不好', '亲亲我', '抱抱我', '举高高',  '我陪你吧', '拒绝ta']
   },
   onLoad: function () {
      var that = this;
      //调用获得关注列表信息
      this.getconlist();
      wx.getSystemInfo({
         success: function (res) {
            that.setData({
               sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
               sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
         }
      });

   },
   getconlist: function () {
      var conlist = util.concernList();
       var conlist_data = conlist.data
      console.log(conlist_data)
      this.setData({
         conlist: conlist_data
      })
   },
   retback: function () {
      wx.showToast({
         title: '已向他表示感谢',
         duration: 2000
      })
   },
   tabClick: function (e) {
      this.setData({
         sliderOffset: e.currentTarget.offsetLeft,
         activeIndex: e.currentTarget.id
      });
   },
   //关注
   toconcren: function () {
      var rand = Math.floor(Math.random()*10)
      console.log(rand)
      wx.showToast({
         title: this.data.showcon[rand]
      })
   }
});