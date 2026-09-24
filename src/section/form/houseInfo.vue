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
  <div class="footer">
    <a href="https://www.lixin.com.tw/" target="_blank">
      <img
        src="//h65.tw/img/footerLogo.gif"
        alt="立炘數位"
      >
    </a>

    <a
      href="https://www.h65.tw/admin/test/login"
      target="_blank"
    >
      網頁製作
    </a>
  </div>

</template>


<style lang="scss">
@import "@/assets/style/function.scss";


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
  padding: 80px 30px;
}


/* =========================================================
   Info Box
========================================================= */

.info-box {
  position: relative;

  width: 100%;
  max-width: 1100px;

  margin-left: auto;
  margin-right: auto;
}


/* =========================================================
   Title
========================================================= */

.title {
  width: 100%;

  margin-bottom: 40px;

  color: #fff;

  font-family: "Inter", "Noto Sans TC", sans-serif;

  font-size: 24px;
  font-weight: 400;

  letter-spacing: 2px;
  line-height: 1.5;

  text-align: center;
}


/* =========================================================
   Info Grid
   整組縮小並置中
========================================================= */

.info-items {
  width: 100%;
  max-width: 1000px;

  margin-left: auto;
  margin-right: auto;

  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: 60px;
  row-gap: 24px;

  font-family: "Inter", "Noto Sans TC", sans-serif;
}

/* =========================================================
   Single Item
========================================================= */

.item {
  width: 100%;
  min-width: 0;

  display: flex;
  align-items: flex-start;

  font-family: "Inter", "Noto Sans TC", sans-serif;

  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 1px;

  text-align: left;
}


/* =========================================================
   Label
========================================================= */

.item-label {
  flex: 0 0 auto;

  margin: 0 18px 0 0;

  padding-left: 18px;
  padding-right: 18px;

  border-left: 2px solid #fff;

  color: #fff;

  font-weight: 500;

  white-space: nowrap;
}


/* =========================================================
   Value
========================================================= */

.item-value {
  flex: 1 1 auto;
  min-width: 0;

  margin: 0;

  color: #fff;
  font-weight: 400;
  text-align: left;

  white-space: pre-line;
  overflow-wrap: anywhere;
  word-break: break-word;
}


/* =========================================================
   Footer
========================================================= */

.footer {
  position: relative;
  z-index: 1;

  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  background: #302626;

  img {
    display: block;
    height: 17px;
  }

  a {
    color: #fff;
    font-size: 12px;
  }
}


/* =========================================================
   Tablet
   769px ~ 1100px
========================================================= */

@media screen and (max-width: 1100px) {

  .house-inner {
    padding: 70px 30px;
  }

  .info-box {
    width: min(100%, 800px);
  }

  .title {
    font-size: 20px;
    margin-bottom: 32px;
    letter-spacing: 2px;
  }

  .info-items {
    width: 100%;
    max-width: 800px;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    column-gap: 30px;
    row-gap: 25px;

    margin-left: auto;
    margin-right: auto;
  }

  .item {
    width: 100%;
    font-size: 14px;
  }

  .item-label {
    margin-right: 14px;
    padding-left: 14px;
    padding-right: 14px;
  }
}


/* =========================================================
   Mobile
   768px 以下
========================================================= */

@media screen and (max-width: 1100px) {

 .house-inner {
  width: 100%;
  box-sizing: border-box;

  padding: 55px 24px calc(100px + env(safe-area-inset-bottom));
}

  .info-box {
    width: 100%;
    max-width: 100%;

    margin-left: auto;
    margin-right: auto;
  }


  /* -------------------------
     Title
  ------------------------- */

  .title {
    width: 100%;

    margin-bottom: 30px;

    font-size: 22px;
    letter-spacing: 2px;
    line-height: 1.5;

    text-align: center;
  }


  /* -------------------------
     Mobile Info
     單欄並置中
  ------------------------- */

  .info-items {
  width: fit-content;
  max-width: 100%;

  display: grid;

  grid-template-columns: 1fr;

  column-gap: 0;
  row-gap: 18px;

  margin-left: auto;
  margin-right: auto;
}


  /* -------------------------
     Item
  ------------------------- */

  .item {
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;

  font-size: clamp(12px, 3.8vw, 16px);
  line-height: 1.6;
}


  /* -------------------------
     Label
  ------------------------- */

  .item-label {
  flex: 0 0 auto;

  margin: 0 12px 0 0;

  padding-left: 0;
  padding-right: 12px;

  border-left: none;
  border-right: 1px solid #fff;

  font-size: clamp(12px, 3.8vw, 16px);

  white-space: nowrap;
}


  /* -------------------------
     Value
  ------------------------- */

  .item-value {
  flex: 1 1 auto;

  min-width: 0;

  margin: 0;

  font-size: clamp(12px, 3.8vw, 16px);
  line-height: 1.6;

  text-align: left;

  white-space: pre-line;

  overflow-wrap: anywhere;
  word-break: break-word;
}


  /* -------------------------
     Footer
  ------------------------- */

  .footer {
    height: 40px;
    gap: 8px;
  }

  .footer img {
    height: 17px;
  }

  .footer-link {
    font-size: 12px;
  }
}


/* =========================================================
   Very Small Mobile
   375px 以下
========================================================= */

@media screen and (max-width: 375px) {

  .house-inner {
    padding-left: 20px;
    padding-right: 20px;
  }

  .title {
    font-size: 22px;
  }

  .info-items {
    row-gap: 16px;
  }

  .item {
    font-size: 14px;
  }

  .item-label {
    margin-right: 9px;
    padding-right: 9px;

    font-size: 14px;
  }

  .item-value {
    font-size: 14px;
  }
}

</style>


<script setup>
import info from "@/info";
</script>