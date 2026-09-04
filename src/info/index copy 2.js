const caseName = "春福莫內161"

export default {

    caseid: "1b256c41-fd3b-4822-884a-7a15512925a7",   //case_code: " ",
    address1: "",//接待中心   //按鈕區的--- 如空白會只呈現地址
    address2: "",//接待中心 //map點下確認的--- 如空白會顯示"導航地址"
    address: "台南市東區中華東路三段391號",//地圖連動
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.361603713859!2d120.2193484568695!3d22.973726770001775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e75004ff45f73%3A0xb67a2a7629db6f8a!2z5pil56aP6I6r5YWnMTYx5o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1773989055212!5m2!1szh-TW!2stw",
    //地圖連動
    googleLink: "https://maps.app.goo.gl/F7vH1fgSYBSJGp2r7", //地圖連動
    phone: "06-2686161",
    fbLink: "https://www.facebook.com/61585313904175/",
    fbMessage: "https://m.me/61585313904175/",
    // line: "https://lin.ee/eVsJqdc",// 客戶加賴
    caseName: caseName,
    houseInfos: [
        /*  ["起造興建", "和創建設有限公司"],
           ["建築設計", "張金城建築師事務所"],
           ["建照照號", "113桃市都建執照字第會屋01379號"],
           ["樓層規劃", "地上5層"],
           ["樓層規劃", "2房2衛|電梯寓所"],
           ["企劃行銷", "鴻智廣告有限公司"],
           ["經 紀 人", "陳怡靜 (104)新北經字第000884號"],
           ["銷售中心", "接待會館：新竹市東區埔頂路125號對面"],*/
    ],
    gtmCode: ["GTM-5RH473P9","GTM-PLC5C8ZR",], // 可放置多個

    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
     recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3

    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",


    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
        subTitle_mo: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    //  表單欄位
    // room_type: ["兩房", "三房"],
    selectFields: {
        /*
        budget: {
            title: "購屋預算",
            hold: "請選擇區間",
            option: ["3500~4000萬", "4000萬以上"],
            bypass: false, //必填開啟使用
        },
         */
        /*
        use_type: {
            title: "年齡",
            hold: "請選擇年齡",
            option: ["20-30歲", "30-40歲", "40-50歲", "50-60歲", "60歲以上"]
        },
        */
        /*
              room_type: {
                  title: "需求房型",
                  hold: "請選擇房型",
                  option: ["三房", "四房"],
                  bypass: false,
              },
            
      
           use_type: {
             title: "使用用途",
             hold: "請選擇用途",
             option: ["自住", "投資", "租賃"]
           },
           */
    },

    navList: [
        {
            name: "未來複利",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "交通複利",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "科技複利",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "健康複利",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "知識複利",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "核心複利",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "品牌複利",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "建築複利",
            target: ".s10",
            offset: "-60",
            offsetmo: "0",
        }, {
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
        , {
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
    ],
}