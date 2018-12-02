
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
   data: {
      tabs: ["主页", "创作", "精选"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      barPosition: "",
      bgImg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2686229074,279277785&fm=26&gp=0.jpg',
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
   onLoad: function (option) {
      var that = this;
      // /、、接收来自index的值
      var header = option.img;
      console.log(header)
      that.setData({
         heImg :header
      })
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
			var nex = 2*(res.screenWidth-375);
            var client = client-200+nex;
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