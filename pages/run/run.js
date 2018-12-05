Page({
   data: {
      markers: [{
         iconPath: "/images/book.png",
         id: 0,
         latitude: 21.977130,
         longitude: 110.609127,
         width: 50,
         height: 50
      }],
      polyline: [{
         points: [{
            longitude: 110.908184,
            latitude: 21.665485
         }, {
               longitude: 110.908527,
               latitude: 21.677130
         }],
         color: "#FF0000DD",
         width: 2,
         dottedLine: true
      }],
      controls: [{
         id: 1,
         iconPath: '/images/book.png',
         position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
         },
         clickable: true
      }]
   },
   regionchange(e) {
      console.log(e.type)
   },
   markertap(e) {
      console.log(e.markerId)
   },
   controltap(e) {
      console.log(e.controlId)
   }
})