<template>

  <div class="house" v-if="info.houseInfos?.length">
    <div class="house-inner">
      <div class="info-box">

        <!-- 標題 -->
        <div class="title">
          建案資訊
        </div>

        <!-- 建案資訊 -->
        <div class="info-items">
          <div
            class="item"
            v-for="(item, index) in info.houseInfos"
            :key="index"
          >
            <!-- 左側標題 -->
            <p
              class="item-label"
              v-html="item[0]"
            ></p>

            <!-- 右側內容 -->
            <p
              class="item-value"
              v-html="item[1]"
            ></p>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Footer -->
 <div
    class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]"
  >
    <a href="https://www.lixin.com.tw/" target="_blank"
      ><img
        class="hover:opacity-50"
        src="//h35.banner.tw/img/footerLogo.gif"
        alt="立炘數位"
        srcset=""
    /></a>
    <a
      href="https://www.h65.tw/admin/test/login"
      target="_blank"
      class="text-white text-xs"
      >網頁製作</a
    >
  </div>
</template>


<style lang="scss">
@use "@/assets/style/function.scss" as *;


/* =========================================================
   House
========================================================= */



.house {
  position: relative;
  width: 100%;
  color: #fff;
  font-family: "Inter", "Noto Sans TC", sans-serif;
}


.house-inner {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: size(60);

}

.info-box {
  width: 80vw;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
}


/* =========================================================
   Title
========================================================= */

.title {
  width: 100%;
  margin-bottom: size(30);
  color: #fff;
  font-family: "Inter", "Noto Sans TC", sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.5;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 400px;
    max-width: 80%;
    height: 1px;
    margin: size(12) auto 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgb(255, 170, 101) 50%,
      transparent 100%
    );
  }
}


/* =========================================================
   Info Grid
========================================================= */

.info-items {
  width: fit-content;
  display: grid;
  grid-template-columns: max-content max-content;
  margin: 0 auto;
  padding: 0;
  column-gap: size(160);
  row-gap: size(12);
}
/* =========================================================
   Single Item
========================================================= */

.item {
  width: 100%;

  min-width: 0;

  display: flex;

  align-items: flex-start;

  font-family: "Inter","Noto Sans TC", sans-serif;

  /* 固定字體 */
  font-size: sizem(16);

  line-height: 1.6;

  letter-spacing: 1px;

  text-align: left;
}


/* =========================================================
   Label
========================================================= */

.item-label {
  flex: 0 0 auto;
font-size: sizem(16);
  margin: 0 size(18) 0 0;

  padding-right: size(18);

  border-right: 2px solid #fff;

  color: #fff;

  font-weight: 400;

  white-space: nowrap;
}


/* =========================================================
   Value
========================================================= */

.item-value {
  flex: 1 1 auto;

 font-size: sizem(16);
  min-width: 0;

  margin: 0;

  color: #fff;

  font-weight: 300;

  text-align: left;

  white-space: pre-line;

  overflow-wrap: anywhere;

  word-break: break-word;
}


/* =========================================================
   Footer
========================================================= */



 .footer {
  width:100%;
    margin-bottom: sizem(300);
    //margin-bottom: sizem(63);
  }


@media screen and (max-width: 554px) {

  .house-inner {
  padding-bottom: size(180);
}

}


@media screen and (max-width: 734px) {

.title {
    font-size: 18px;
    
  }



.house-inner {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: size(340);
}

  .title {
    font-size: 20px;
    padding-bottom: size(60);
  }

  

  .info-items {
    width:fit-content;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    column-gap: 0;
    row-gap: size(20);
  }

  .item {
    width: fit-content;
    font-size: sizem(13px);
  }

  .item-label {
    margin-right: 18px;
    padding-right: 18px;
    font-size: sizem(13px);
  }

  .item-value {
    font-size: sizem(13px);
  }
}


</style>


<script setup>
import info from "@/info";
</script>
