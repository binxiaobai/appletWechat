var util = require('../../utils/util.js')
var app = getApp()
Page({
   data: {
      inputShowed: false,
      inputVal: "",
      feed: [],
      feed_lenght: 0
   },
   toQuestion: function () {
      wx.navigateTo({
         url: '../question/question',
      })
   },
   toAnswer: function () {
      wx.navigateTo({
         url: '../answer/answer',
      })
   },
   onLoad: function () {
      console.log('onLoad')
      var that = this
      //调用应用实例的方法获取全局数据
      this.getData();
   },
   //顶部下拉刷新
   onPullDownRefresh: function () {
      wx.showNavigationBarLoading()
      this.refresh();
      console.log("upup");
      setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
   },
   //到达底部加载更多
   onReachBottom: function (e) {
      wx.showNavigationBarLoading();
      var that = this;
      setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
      console.log("bobo")
   },
   //scroll: function (e) {
   //  console.log("scroll")
   //},

   //网络请求数据, 实现首页刷新
   refresh0: function () {
      var index_api = '';
      util.getData(index_api)
         .then(function (data) {
            //this.setData({
            //
            //});
            console.log(data);
         });
   },

   //使用本地 fake 数据实现模拟刷新效果
   getData: function () {
      var feed = util.getData2();
      var feed_data = feed.data;
      this.setData({
         feed: feed_data,
         feed_length: feed_data.length
      });
   },
   refresh: function () {
      wx.showToast({
         title: '刷新中',
         icon: 'loading',
         duration: 3000
      });
      var feed = util.getData2();
      console.log("loaddata");
      var feed_data = feed.data;
      this.setData({
         feed: feed_data,
         feed_length: feed_data.length
      });
      setTimeout(function () {
         wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 2000
         })
      }, 3000)

   },

   //使用本地 fake 数据实现继续加载效果
   nextLoad: function () {
      wx.showToast({
         title: '加载中',
         icon: 'loading',
         duration: 4000
      })
      var next = util.getNext();
      console.log("continueload");
      var next_data = next.data;
      this.setData({
         feed: this.data.feed.concat(next_data),
         feed_length: this.data.feed_length + next_data.length
      });
      setTimeout(function () {
         wx.showToast({
            title: '加载成功',
            icon: 'success',
            duration: 2000
         })
      }, 3000)
   },
   //weui插件
   showInput: function () {
      this.setData({
         inputShowed: true
      });
   },
   hideInput: function () {
      this.setData({
         inputVal: "",
         inputShowed: false
      });
   },
   clearInput: function () {
      this.setData({
         inputVal: ""
      });
   },
   inputTyping: function (e) {
      this.setData({
         inputVal: e.detail.value
      });
   }
});