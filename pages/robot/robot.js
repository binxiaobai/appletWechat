
const app = getApp()
Page({

   /**
    * 页面的初始数据
    */
   data: {
      tittle: "小姐姐咩",
      inputValue: '',
      syas: [{
         'robot': '你好~你好，你好呀',
         'isay': '你好'
      }
      ],
      headLeft: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2753418568,2820801190&fm=26&gp=0.jpg',
      headRight: '',

   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function () {
      let that = this
            that.setData({
               headRight: app.globalData.userImg
            })
   },
   converSation: function (e) {
      let that = this
      var obj = {},
         isay = e.detail.value.says,
         syas = that.data.syas,
         length = syas.length,
         key = 'e65f137c53ba4999ae2f2d070685d535'//这里填入你得到的图灵机器人的apikey

      console.log(length)
      wx.request({
         url: 'https://www.tuling123.com/openapi/api?key=' + key + '&info=' + isay,
         success: function (res) {
            var a = true
            let tuling = res.data.text;
            obj.robot = tuling;
            obj.isay = isay;
            syas[length] = obj;
            that.setData({
               syas: syas,
               inputValue: ''
            })
         }, 
      })
      // 聊天框聚焦
         setTimeout(function () {
            that.bottom()
         }, 500)
   },
   // 获取hei的id节点然后屏幕焦点调转到这个节点
  bottom: function () {
    var query = wx.createSelectorQuery()
    query.select('#hei').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      wx.pageScrollTo({
         scrollTop: res[0].bottom  // #the-id节点的下边界坐标
      })
      res[1].scroll-top // 显示区域的竖直滚动位置
    })
  },
   /* 
   用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})
