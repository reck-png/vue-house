const caseName = "大進一852段"

export default {
  caseid: "f65b0dfd-6b1d-448b-9460-b5112e1ac995",
  //caseid_j: "3c00c7f1-d23a-4d28-a94c-790a8f4626c5", //兩邊id一樣可以不用有
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "接待中心 - 台中市西屯區文心路市政路口 (市政路8號)",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7280.884670071533!2d120.6402469!3d24.1562151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d939f7b2511%3A0xaa46621742d9036c!2zNDA36Ie65Lit5biC6KW_5bGv5Y2A5oOg5L6G6YeM5biC5pS_6LevOOiZnw!5e0!3m2!1szh-TW!2stw!4v1793703933002!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/hTD63YBir8JdzrSt9",
  phone: "04-2259-6166",
  fbLink: "https://www.facebook.com/profile.php?id=61594831185170",
  fbMessage: "https://m.me/61594831185170",
  //line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
    ["建設公司", "興益發建設企業股份有限公司"],
    ["代銷公司", "興益發建設企業股份有限公司"],
    ["格局規劃", "2-3房"],
    ["建物形態", "大樓"],
    /*
    */
  ],
   gtmCode: ["GTM-MZW7KDGM"], // 可放置多個
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
 order: {
    title: "立即登記",
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