//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
   data: {
      userInfo: {},
      concern:'关注',
      con_color:'#52C980',
      flag: 1,
      fromquest:'',
      img:''
   },
   // 关注
   concern: function () {
      var that = this
      if (that.data.flag == 1){
         that.setData({
            concern: '已关注',
            con_color:'red',
            flag:0
         })
      }else{
         that.setData({
            concern: '关注',
            con_color: '#52C980',
            flag:1
         })
      }
   },
   //事件处理函数
   bindItemTap: function () {
      wx.navigateTo({
         url: '../answer/answer'
      })
   },
   onLoad: function (option) {
      var that = this
      //调用应用实例的方法获取全局数据
      var fromquest = option.question
      var img = option.img
      console.log(fromquest)
      that.setData({
         fromquest: fromquest,
         img: img
      })
      wx.getUserInfo({
         success: function (e) {
            let userInfo = e.userInfo.avatarUrl
            that.setData({
               userInfo: userInfo
            })
         }
      })
   },
   tapName: function (event) {
      console.log(event)
   }
})
