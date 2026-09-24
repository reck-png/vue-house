const caseName = "詮美湛"

export default {
  caseid: "027b6ad6-f582-4a2f-9d41-a8d916dd529e",
  //caseid_j: "3c00c7f1-d23a-4d28-a94c-790a8f4626c5", //兩邊id一樣可以不用有
  address1: "銷售中心",//按鈕區的--- 如空白會只呈現地址
  address2: "銷售中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "新北市三重區成功路50巷73號1樓旁",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3882.8034839622687!2d121.48750799999999!3d25.04978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzU5LjIiTiAxMjHCsDI5JzE1LjAiRQ!5e1!3m2!1szh-TW!2stw!4v1790248150698!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/QLXW9uAw35zkFkFx6",
  phone: "02-2270-6789",
  fbLink: "https://www.facebook.com/profile.php?id=61591981078591",
  fbMessage: "https://m.me/61591981078591",
  //line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
    ["建築興建", "詮美建設股份有限公司"],
    ["建築設計", "莊志寬建築師事務所"],
    ["建照號碼", "111重建字第00422號"],
    ["樓層規劃", "地上14層，地下3層"],
    ["格局規劃", "0店面純住社區｜戶戶邊間｜35坪正3房"],
    ["建築行銷", "聯頡廣告事業有限公司"],
    ["　經紀人", "程上銘（93）北縣字000888號"],
    ["銷售中心", "新北市三重區成功路50巷73號1樓旁"],
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
    title: "VIP優先預約",
    subTitle: "預計 116 年下半年落成  ｜  限時早鳥預約品鑑",
    subTitle_mo: "預計 116 年下半年落成  ｜  限時早鳥預約品鑑",
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
   /* room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["1房", "2房", "3房"],
      required: false, //必填開啟使用
      nowrap: false, //選項過長時是否換行
    }, */
    
        budget: {
        title: "最吸引您的特點（可複選）",
        type: "checkbox",
        hold: "請選擇",
        option: [
          "均質 35 坪、單層四併純 3 房",
          "14F/B3 零店面純住社區",
          "一橋到台北的絕對交通優勢",
          "訂簽 5%、工程 0 付款方案"
        ],
         nowrap: false,
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