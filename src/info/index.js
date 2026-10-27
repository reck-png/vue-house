const caseName = "春福悅悅"

export default {
  caseid: "ea03258a-052f-4e25-bf80-7079ba23da9b",
  //caseid_j: "3c00c7f1-d23a-4d28-a94c-790a8f4626c5", //兩邊id一樣可以不用有
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "XXXXX",
  googleSrc: "",
  googleLink: "",
  phone: "06-2690111",
  fbLink: "https://www.facebook.com/profile.php?id=61594634672650",
  fbMessage: "https://m.me/61594634672650",
  //line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "春曉建設有限公司"],
    ["建造號碼", "(115)南工造字第00799號"],
    ["行銷企劃", "富裕臻實業有限公司"],
    ["經紀人　", "郭峰旻"],
    /*
    */
  ],
   gtmCode: ["GTM-WMLBZL2N"], // 可放置多個
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "預約賞屋",
    //subTitle: "歡迎填寫表單，將由專人與您聯繫並提供服務，謝謝！",
    //subTitle_mo: "歡迎填寫表單，將由專人與您聯繫並提供服務，謝謝！",
  },
  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: false,     // ✅ 控制顯示 / 隱藏
      required: false    // ✅ 是否必填（通常不會必填）
    }
  },

  //各種欄位
  selectFields: {
    room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["2房", "3房"],
      required: false, //必填開啟使用
      nowrap: false, //選項過長時是否換行
    }, 
    
        budget: {
          title: "購屋預算",
          type: "select",
          hold: "請選擇區間",
          option: ["1,000萬以下", "1,000～1,500萬", "1,500萬以上"],
          nowrap: false, //選項過長時是否換行
          //bypass:true, //必填開啟使用
        },

      
        
  },

  //縣市地區
  locationConfig: {
  city: {
    enabled: true,
    required: false
  },

  area: {
    enabled: true,     // ⚠️ 不能單獨 true
    required: false
  }

},






  navList: [
    /*
    {
        name: "雙核心地段",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "交通中軸",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    }
*/
  ],
}