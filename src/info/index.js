const caseName = "東基M1"

export default {
    caseid: "c6d5e013-7b31-4edf-88d2-fbc312df0612",
    //case_code: "dgm1",
    address1: "",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市新店區寶慶街85號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.397972905783!2d121.53840597607758!3d24.986589540197695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346801fef431a75d%3A0xf419117bfebfe525!2zMjMx5paw5YyX5biC5paw5bqX5Y2A5L-h576p6YeM5a-25oW26KGXODXomZ8!5e0!3m2!1szh-TW!2stw!4v1781063802862!5m2!1szh-TW!2stw",//嵌入的
    googleLink: "https://maps.app.goo.gl/Jb2XDrm7xx9XjyQ9A",//導航網址
    phone: "(02)8667-2266",
    fbLink: "https://www.facebook.com/100054446832848/",
    fbMessage: "https://m.me/100054446832848/",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "東基開發建設股份有限公司"],
        ["建築設計", "康益利建築師"],
        ["建照號碼", "113店建字第00408號"],
        ["行銷企劃", "海沃創意行銷"], 
        ["經&ensp;紀&ensp;人", "林閔鴻(107)基市字第00167號"],
    ],
    gtmCode: ["GTM-KQ46V36N"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        //title: "預約增值",
       // subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
       // subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["1房", "2房", "3房", "4房"],
          bypass:false,
        },
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["1500-2000萬","2000-2500萬","2500-3000萬","3000-3500萬","3500-4000萬","4000萬以上",],
          bypass:false, //必填開啟使用
        },
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
  },

    navList: [
        {
            name: "璽寓核心",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "尊榮捷境",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "制霸機能",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "名匠薈萃",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "榮耀四冠",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "重大建設",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英磁場",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "立即來電",
            target: ".contact-info",
            offset: "",
            type: 'btn'
        },
        {
              name: "地圖導航",
              target: ".gmap",
              offset: "",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
        /*
    */
    ],
}