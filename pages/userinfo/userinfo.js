var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     headerImg: '',
     nameFlag: false,
     name:'',
     indiFlag: false,
     indi:''
  },
 //改变头像
   changeImg:function () {
      var that = this
      wx.chooseImage({
         success: function(res) {
            app.globalData.userImg = res.tempFilePaths
            that.setData({
               headerImg: app.globalData.userImg
            })
         },
      })
   } ,
   //弹出修改名字窗口
   changeName: function () {
      this.setData({
         nameFlag: true
      })
   },
   //修改名字
   newName: function (e) {
      app.globalData.userName = e.detail.value
      this.setData({
         name: app.globalData.userName
      })
   },
   //关闭修改窗口
   closeTips: function () {
      this.setData({
         nameFlag: false
      })
   },
   //开启个性窗口
   changeIndi: function () {
      this.setData({
         indiFlag: true
      })
   },
   //修改个性
   newIndi: function (e) {
      var newIndi = e.detail.value
      this.setData({
         indi: newIndi
      })
   },
   //关闭修改窗口
   closeTips1: function (e) {
      
      this.setData({
         indiFlag: false
      })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(options)
     var name = app.globalData.userName
     var headerImg = app.globalData.userImg
    var indi = options.indi
    this.setData({
       name: name,
       headerImg: headerImg,
       indi: indi
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (e) {
 
    wx.reLaunch({
      //  url: '../my/my?img=' + this.data.headerImg+'&name='+this.data.name+'&indi='+this.data.indi,
       url: '../my/my?indi=' + this.data.indi,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})