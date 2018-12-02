Page({

  /**
   * 页面的初始数据
   */
  data: {
     headerImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2686229074,279277785&fm=26&gp=0.jpg',
     nameFlag: false,
     name:'bingo',
     indiFlag: false,
     indi:'不要问我从哪里来，我的故乡在远方，不要问我从哪里来，我的故乡在远方'
  },
 //改变头像
   changeImg:function () {
      var that = this
      wx.chooseImage({
         success: function(res) {
            var headerImg = res.tempFilePaths
            that.setData({
               headerImg: headerImg
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
      var newName = e.detail.value
      this.setData({
         name: newName
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
   closeTips1: function () {
      this.setData({
         indiFlag: false
      })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  onUnload: function () {
    wx.reLaunch({
       url: '../my/my?img=' + headerImg+'&name='+name+'&indi='+indi,
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