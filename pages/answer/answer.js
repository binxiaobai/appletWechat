//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
   data: {
      userInfo: '',
      userinput: [],
      username: '',
      length: 0,
      reviewflag: false,
      concern:'十 关注',
      loveimg: '../../images/heart2.png',
      question: '',
      img:''
   },
   //事件处理函数
   toQuestion: function () {
      wx.navigateTo({
         url: '../question/question'
      })
   },
   //喜爱
   love: function () {
      this.setData({
         loveimg: '../../images/heart.png'
      })
   },
   // 关注
   concern: function () {
      this.setData({
         concern: '已 关注'
      })
   },
   showreview:function () {
      console.log("chufal")
      this.setData({
         reviewflag: true
      })
   },
   onLoad: function (option) {
      var that = this
      var  question= option.question
      var img = option.img
      that.setData({
         question: question,
         img: img
      })
      //调用应用实例的方法获取全局数据
      wx.getUserInfo({
         success: function (res) {
            let header = res.userInfo.avatarUrl
            var nickName = res.userInfo.nickName
            that.setData({
               userInfo: header,
               username: nickName
            })
         }
      })
   },
   closeview: function () {
      this.setData({
         reviewflag: false
      })
   },
   tapName: function (event) {
      console.log(event)
   },
  // 再次获得焦点，清空原来的数据
   focus: function () {
      var that = this
      let length1 = that.data.userinput.length 
      that.setData({
         length: length1,
      })
      console.log(that.data.length)
      if( that.data.length >= 1) {
         wx.showModal({
            title: '铁锤警告',
            content: '评论虽好，但不要贪多哦！',
            success(res) {
               if (res.confirm) {
                  that.setData({
                     reviewflag: false
                  })
               } else if (res.cancel) {
                  that.setData({
                     reviewflag: true
                  })
               }
            }
         })  
      }else{
         console.log('jinrushibai')
      }
   },
   formSubmit:function (event) {
      var that = this
      var input = event.detail.value.icontent
      var length = that.data.userinput.length
      that.setData ({
         userinput: that.data.userinput.concat(input),
         content: ''
        // userinput: []
      })
   }
})
