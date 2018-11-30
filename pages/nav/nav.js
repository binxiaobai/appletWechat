var sliderWidth = 94; // 需要设置slider的宽度，用于计算中间位置
var util = require('../../utils/util.js')
var app = getApp()
Page({
   data: {
      tabs: ["推荐", "圆桌", "热门","收藏"],
      // grids: ["吃饭","睡觉","打豆豆","约跑","聊骚","打游戏"],
      grids: [],
      rangs: [],
      hots: [],
      current: true,
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      feed: [],
      iconlist: [],
      feed_lenght: 0,
      imgUrls: [
         'http://img0.imgtn.bdimg.com/it/u=989300716,195510164&fm=26&gp=0.jpg',
         'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3234443702,9338150&fm=11&gp=0.jpg',
         'http://img1.imgtn.bdimg.com/it/u=1201838796,3623053205&fm=26&gp=0.jpg'
      ],
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000
  },
   onLoad: function () {
      var that = this;
      //调用应用实例的方法获取全局数据
      this.getData();
      //调用获得icons
      this.getIcon();
      //调用获得rangs
      this.getRang();
      //调用获得hots
      this.getHot();
      //swiper
      wx.getSystemInfo({
         success: function (res) {
            that.setData({
               sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
               sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
         }
      });
      
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
   addNum: function (event) { 
      // 获取当前点击下标
      var index = event.currentTarget.dataset.index;
      // data中获取列表
      var message = this.data.hots;
      for (let i in message) { //遍历列表数据
         if (i == index) { //根据下标找到目标
            var collectStatus = false
            if (message[i].collected == 0) { //如果是没点赞+1
               collectStatus = true
               message[i].collected = parseInt(message[i].collected) + 1
               message[i].hot_num = parseInt(message[i].hot_num) + 1
               message[i].color = 'red';
            } else {
               collectStatus = false
               message[i].collected = parseInt(message[i].collected) - 1
               message[i].hot_num = parseInt(message[i].hot_num) - 1 
               message[i].color = '#cccc';
            }
            wx.showToast({
               title: collectStatus ? '爱你' : '忘爱',
               duration:1500
            })
         }
      }
      this.setData({
         hots: message
      })
   },
   //获得热门图文信息
   getHot: function () {
      var hots = util.hotList();
      var hots_data = hots.data;
      this.setData({
         hots: hots_data
      })
   },
   //获得圆桌图文信息
   getRang: function() {
      var rangs = util.rangList();
      var rangs_data = rangs.data;
      this.setData({
         rangs: rangs_data
      })
   },
   // 获得九宫格信息
   getIcon: function () {
      var grids = util.iconList();
      var grids_data = grids.data;
      this.setData({
         grids: grids_data
      })
   },
   //使用本地 fake 获得推荐数据实现模拟刷新效果
   getData: function () {
      var feed = util.getData2();
      var feed_data = feed.data;
      this.setData({
         feed: feed_data,
         feed_length: feed_data.length
      });
   },
   //到达底部加载更多
   onReachBottom: function (e) {
      wx.showNavigationBarLoading();
      var that = this;
      setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
   },

   //使用本地 fake 数据实现继续加载效果
   nextLoad: function () {
      console.log("jiazai")
      wx.showToast({
         title: '加载中',
         icon: 'loading',
         duration: 300
      })
      var next = util.getNext();
      var next_data = next.data;
      var rangs = util.rangList();
      var rangs_data = rangs.data;
         this.setData({
         feed: this.data.feed.concat(next_data),
         feed_length: this.data.feed_length + next_data.length,
         rangs: this.data.rangs.concat(rangs_data)
      });
   },
   tabClick: function (e) {
      this.setData({
         sliderOffset: e.currentTarget.offsetLeft,
         activeIndex: e.currentTarget.id
      });
   }
});