var util = require('../../utils/util.js')
var app = getApp()
Page({
   data: {
      userInfo: [],
      userImg: [],
      userName: 'bingo',
      userIndi:'在一个需要方向，需要梦想，需要眼泪'
   },
   //事件处理函数
   //去书架
   tobookrack: function() {
      wx.navigateTo({
         url: '../bookrack/bookrack',
      })
   },
   //修改个人信息
   changeUserInfo: function (event) {
     var userImg = event.currentTarget.dataset.img
      var userName = event.currentTarget.dataset.name
      var userIndi = event.currentTarget.dataset.indi
     wx.navigateTo({
        url: '../userinfo/userinfo?img=' + userImg+' &name='+userName+'&indi='+userIndi,
     })
  } ,
   bindViewTap: function() {
      wx.navigateTo({
         url: ''
      })
   },
   chengeimg: function() {
      var that = this;
      wx.chooseImage({
         count: 1, // 最多可以选择的图片张数，默认9
         sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
         sourceType: ['album', 'camera'],
         success: function(res) {
            app.globalData.userImg = res.tempFilePaths
            that.setData({
               userImg: app.globalData.userImg
            })

         },
      })
   },
   totakephoto: function() {
      wx.navigateTo({
         url: '../photo/photo',
      })
   },
   takema: function() {
      var show;
      wx.scanCode({
         success: (res) => {
            this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
            wx.showToast({
               title: '好可爱呦',
               icon: 'success',
               duration: 2000
            })
         }

      })
   },

   onLoad: function(options) {
      let that = this
      var userImg = options.img
      var userIndi = options.indi
      var userName = options.name
      if (typeof (userImg) == "string" && typeof (userIndi) == "string" && typeof (userName) == "string") {
         that.setData({
            userImg: userImg,
            userIndi: userIndi,
            userName: userName
         })
      }else{
           //  全局变量重构
         console.log(app.globalData.userImg, app.globalData.userName)
         var userI =  app.globalData.userImg
          var userN = app.globalData.userName
            that.setData({
               userImg: userI,
               userName: userN
            })
            console.log("zhesgionlod")
         }
         
     
   },
   //分享功能
   onShareAppMessage: function() {

   }
})