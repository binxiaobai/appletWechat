var util = require('../../utils/util.js')
var app = getApp()
Page({
   data: {
      userInfo: [],
      userImg: [],
      userName: ''
   },
   //事件处理函数
   //去书架
   tobookrack: function() {
      wx.navigateTo({
         url: '../bookrack/bookrack',
      })
   },
   //修改个人信息
  changeUserInfo: function () {
     console.log("chasdh")
     wx.navigateTo({
        url: '../userinfo/userinfo',
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
            const tempFilePaths = res.tempFilePaths
            console.log(tempFilePaths)
            that.setData({
               userImg: tempFilePaths
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

   onLoad: function(option) {
      let that = this
      wx.getUserInfo({
         success: function(e) {
            let userImg = e.userInfo.avatarUrl
            let userName = e.userInfo.nickName
            that.setData({
               userImg: userImg,
               userName: userName
            })
         }
      }) 
   },
   //分享功能
   onShareAppMessage: function() {

   }
})