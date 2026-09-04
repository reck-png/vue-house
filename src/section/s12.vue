<template>
  <article class="s12">
    <!-- -->
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">在關埔,我們重新定義了「完美」的座標
        <br />關埔一期、二期交匯核心,竹科門戶基地<br />三面臨路,COSTCO慈雲路生活圈
      </h3>
    </div>
    <Fullview />
    <div class="caption">空拍示意圖 實際環境依現況為主</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s12 {
  @apply relative overflow-hidden bg-[#008DD5];
  width: 100%;
  padding-top: 0;
  font-size: size(18);

  .txt {
    @apply absolute z-10;
    top: 4em;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    color: #fff;

    //text-shadow: 0 0 5px
    .title {
      font-size: 1.75em;
      margin: 0 auto;
      margin-left: 4em;
      margin-top: 3em;
      text-align: left;
      line-height: 1.4;
      font-weight: 200;

      /* 水平線裝飾*/
      &::after,
      &::before {}


    }


    /* 水平線裝飾
    .desc {
      font-size: 1.5em;
      letter-spacing: .1em;
    } */
  }

  .caption {
    position: absolute;
    bottom: .5em;
    left: .5em;
    font-size: sizem(12);

    @media screen and (min-width: 768px) {
      font-size: size(15);
    }

  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s12 {
    height: sizem(667);
    font-size: sizem(14);


    .txt {
      top: 4em;

      .title {
        font-size: 1.1em;
        margin: 0 auto;
        //margin-left:em;
        margin-top: -1em;
        text-align: center;

        /* 水平線裝飾
        &::after,
        &::before {
          width: 1em;
          visibility: hidden;
        }*/
      }

      /* 水平線裝飾 
      .desc {
        font-size: 1.1em;
        letter-spacing: .1em;
      }*/
    }

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
