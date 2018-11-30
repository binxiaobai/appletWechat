const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

var index = require('../data/data_index.js')
var index_next = require('../data/data_index_next.js')
var discovery = require('../data/data_discovery.js')
var discovery_next = require('../data/data_discovery_next.js')
var icon_list = require('../data/navdata.js')
var rang_list = require('../data/nav_rang.js')
var hot_list = require('../data/hotdoor.js')
var con_list = require('../data/concern.js')
function getData(url) {
   return new Promise(function (resolve, reject) {
      wx.request({
         url: url,
         data: {},
         header: {
            //'Content-Type': 'application/json'
         },
         success: function (res) {
            console.log("success")
            resolve(res)
         },
         fail: function (res) {
            reject(res)
            console.log("failed")
         }
      })
   })
}

function getData2() {
   return index.index;
}

function getNext() {
   return index_next.next;
}

function getDiscovery() {
   return discovery.discovery;
}

function discoveryNext() {
   return discovery_next.next;
}

function iconList () {
   return icon_list.iconlist;
}
function rangList() {
   return rang_list.ranglist;
}
function hotList() {
   return hot_list.hotlist;
}
function concernList() {
   return con_list.concernlist;
}



module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getNext = getNext;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;
module.exports.iconList = iconList;
module.exports.rangList = rangList;
module.exports.hotList = hotList;
module.exports.concernList = concernList;
