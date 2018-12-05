Page({
   data: {
      x: 0,
      y: 0,
      height:'',
      bgColor:'#dcdcdc'
   },
   onLoad: function () {
      var that = this
      wx.getSystemInfo({
         success: function(res) {
            console.log(res)
            var heigh = parseInt(res.windowHeight) - 35;
            that.setData({
               height: heigh
            })
         },
      })
   },
   onChange: function (e) {
     var one = e.detail.x
     console.log(one)
     if(one ==42) {
        wx.showToast({
           title: 'bingo',
        })
     }
   },
   onScale: function (e) {
      console.log(e.detail)
   },
    onChange1: function (e) {

   },
   onScale1: function (e) {
     // console.log(e.detail)
   },
    onChange2: function (e) {

   },
   onScale2: function (e) {
     // console.log(e.detail)
   },
    onChange3: function (e) {

   },
   onScale3: function (e) {
     // console.log(e.detail)
   },
    onChange4: function (e) {

   },
   onScale4: function (e) {
      //console.log(e.detail)
   },
    onChange5: function (e) {

   },
   onScale5: function (e) {
      //console.log(e.detail)
   }
})