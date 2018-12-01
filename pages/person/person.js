
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
   data: {
      tabs: ["主页", "创作", "精选"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      barPosition: "",
      bgImg:'../../images/icon8.jpg',
      heImg:'../../images/icon8.jpg'
   },
   //改变头像
   change_header: function () {
      var that = this;
      wx.chooseImage({
         count: 1, // 最多可以选择的图片张数，默认9
         sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
         sourceType: ['album', 'camera'],
         success: function (res) {
            const tempFilePaths = res.tempFilePaths
            console.log(tempFilePaths)
            that.setData({
              heImg: tempFilePaths
            })
         },
      })
   },
   //改变beijing图片
   change_bg:function () {
      var that = this;
      wx.chooseImage({
         count: 1, // 最多可以选择的图片张数，默认9
         sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
         sourceType: ['album', 'camera'],
         success: function (res) {  
            const tempFilePaths = res.tempFilePaths
            console.log(tempFilePaths)
            that.setData({
               bgImg: tempFilePaths
            })
         },
      })
   }, 
  //滚轮jianting
   onPageScroll: function (e) {
      var reach = e.scrollTop
      console.log(reach)
         if(reach > 215) {
            console.log("daoda")
            this.setData({
               // barPosition: "fiexd;left:0;top:0"
            })
         }
   },
   onLoad: function () {
      var that = this;
      wx.getSystemInfo({
         success: function (res) {
            that.setData({
               sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
               sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
         }
      });
      //获得屏幕高度
      wx.getSystemInfo({
         success: function (res) {
            console.log(res)
            var hight = 750/(res.windowHeight);
            var client = hight * res.windowHeight;
            var client = client - 200;
            that.setData({
               barPosition: client
            })
         },
      })
   },
  
   tabClick: function (e) {
      this.setData({
         sliderOffset: e.currentTarget.offsetLeft,
         activeIndex: e.currentTarget.id
      });
   }
});