const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 要得到自己的位置的经纬度
     */
    longitude:"",
    latitude:"",

    /**
     * 放置小图标
     */
    controls: [{
      id: 1,
      iconPath: '/resources/pin.jpg',
      position: {
        left: (app.globalData.windowWidth/2)-11,
        top: ((app.globalData.windowHeight-40) / 2) - 15,
        width: 22,
        height: 31
      }
    },{
      id: 2,
      iconPath: '/resources/pin.jpg',
      position: {
        left: 20,
        top: 20,
        width: 22,
        height: 31
      },
      clickable: true
    }]
  },
 controltap(e){
   this.mapCtx.moveToLocation();
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
    this.mapCtx = wx.createMapContext('map');

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  /**
   * 获取自己的位置 
   */
     this.getLocation();
     this.getMessages();
   },

  getMessages(){
    wx.request({
      url: 'https://nuanwan.wekeji.cn.student/index.php/trade/get_list', 
      data: {
        distinct: "baolimin_cource"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
 
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocationSucc.bind(this)
    })
  },
  handleGetLocationSucc(res){
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude
    })
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
    return{
      title:'萌宠交易平台',
      path:'/page/index/index'
    }
  }
})