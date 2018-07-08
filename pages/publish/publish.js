var app = getApp();
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    address:"点击选择,要勾选哦~",
    success:false
  },
staticData:{
  type:'buy',
  contact:"",
  message:""
},

/**
 * 点击我的地址
 */
  handleAddressClick(){
    wx.chooseLocation({
       success:this.handleChooseLocationSucc.bind(this)
    })
  },
  handleChooseLocationSucc(res){
     this.setData({
       address:res.address
     });
     Object.assign(this.staticData,{
       latitude: res.latitude,
       longtitude: res.longtitude
     })
  },

  handleTypeChange(e){
    this.staticData.type=e.detail.value;
    console.log(this.staticData);
    console.log(this.data);
  },

  handleContactChange(e){
    this.staticData.contact = e.detail.value;
  },

  handleMessagetChange(e){
    this.staticData.message = e.detail.value;
  },

  handleSubmit(){
    if (this.data.address === "点击选择,要勾选哦~" || !this.data.address){
      wx.showToast({
        title: '请填写地址',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
    if (!this.staticData.message){
      wx.showToast({
        title: '请填写说明信息',
        icon: 'loading',
        duration: 2000
      })
      return;
    }

    if (!this.staticData.contact) {
      wx.showToast({
        title: '请填写联系方式',
        icon: 'loading',
        duration: 2000
      })
      return;
    }

    const data = Object.assign({}, this.staticData,{
      address: this.data.address,
      distinct:"baolimin_cource"
    })
    wx.request({
      url: 'https://nuanwan.wekeji.cn/student/index.php/trade/add_item',
      data:data,
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: this.handleSubmitSucc.bind(this)
    })

  },
 
  handleSubmitSucc(res){
    if(res.data){
      this.setData({
          success:true
      })
    }
  },
  handleBackTap(){
    wx.navigateBack()
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