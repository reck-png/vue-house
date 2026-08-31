const caseName = "統元極美"
export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    caseid: "45df4117-2e6e-4922-a514-1ac66476f978",
    case_code: "tongyuan",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "三重區光陽街78號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.2720759746768!2d121.48200091431106!3d25.057096851045657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a900523d0797%3A0x9660f889cba272ac!2z57Wx5YWD5qW1576OIOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1747587055966!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/B7yyvqbFPCywZVQC7",
    phone: "02-2989-2168",
    fbLink: "https://www.facebook.com/61551470159566/",
    fbMessage: "https://m.me/61551470159566/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "統元建設股份有限公司"],
        ["坪數規劃", "18-32坪"],
        ["建築規劃", "吳成榮建築師事務所"],
        ["企劃銷售", "創意家行銷股份有限公司"],
    ],
    gtmCode: ["GTM-5RWGFBCD"], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
    },
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
      room_type: {
        title: "需求房型",
        hold: "請選擇房型",
        option: ["兩房", "三房"],
        bypass:true,
      },
      
      budget: {
        title: "購屋預算",
        hold: "請選擇區間",
        option: ["1500~2000萬", "2000~2500萬", "2500~3000萬", "3000~3500萬"],
        bypass:true, //必填開啟使用
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
        },{
            name: "水岸生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英學區",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "安心品牌",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "電梯店墅",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "嚴選建材",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳家首席",
            target: ".s10",
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
    */
    ],
}