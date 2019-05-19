//index.js
//获取应用实例
const app = getApp();
let timer;
let num;
let n1 = 0;
let onOff =  true;


Page({
  data: {
    allImage: [
      "../../image/jiandao.png",
      "../../image/shitou.png",
      "../../image/bu.png"
    ],
    ask: "../../image/wenhao.png",
    pcPunch: "../../image/shitou.png",
    result: "看结果",
    n: 0

  },
  myPunch: function (e) {
    if(!onOff) return;
    let index = e.target.id;

    
    if ((num == 0 && index == 1) || (num == 1 && index == 2) || (index == 0 && num == 2)) {
      n1++;
      this.setData({
        ask: this.data.allImage[index],
        result: "您赢了",
        n: n1
      })
    } else if (index == num) {
      this.setData({
        ask: this.data.allImage[index],
        result: "平局"
      })
    } else {
      this.setData({
        ask: this.data.allImage[index],
        result: "您输了"
      })
    }

    onOff=false;
    clearInterval(timer);

  },

  pcPunch1: function () {
    let obj = this;
    timer = setInterval(function () {

      num = Math.floor(Math.random() * 3);
      obj.setData({
        pcPunch: obj.data.allImage[num]

      })
    }, 100)
  },
  again: function () {
    clearInterval(timer);
    onOff = true;
    this.setData({
      result: "猜拳中",

      ask: "../../image/wenhao.png"
    })

    this.pcPunch1();

    this.myPunch()
  },

  allClear:function(){
    onOff = true;
    this.setData({
      result: "看结果",
      n: 0,
      ask: "../../image/wenhao.png"
    })
  },




  onReady: function () {
    //当页面加载完毕之后，自动调用电脑出拳函数，让电脑随机出拳
    this.pcPunch1();
  }

})