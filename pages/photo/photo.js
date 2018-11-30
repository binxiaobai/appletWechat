Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    bigimg:[]
  },
   clearbig: function () {
      this.setData({
         bigimg: []
      })
   },
   takepho: function () {
      const tpt = wx.createCameraContext()
      tpt.takePhoto({
         quality: 'high',
         success: (res) => {
            console.log(res)
            const nexturl = res.tempImagePath
            this.setData({
               userInfo: this.data.userInfo.concat(nexturl)
            })
         }
      })
   },
   makebig: function (event) {
      var that = this
      var index = event.currentTarget.dataset.index
      this.setData({
         bigimg: that.data.bigimg.concat(that.data.userInfo[index])
      })
      // wx.downloadFile({
      //    url: '', //仅为示例，并非真实的资源
      //    success(res) {
      //    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
      //       console.log(res)
      //       if (res.statusCode === 200) {
      //          wx.playVoice({
      //             filePath: '../../down'
      //          })
      //       }
      //    }
      // })
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
    console.log(this.data.userInfo)
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