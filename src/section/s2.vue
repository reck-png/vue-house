<template>
  <article class="s2">
   <!-- 
    <div class="caption">基地空拍實景經後製修飾</div>  --> 
    <Fullview />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden bg-[#27AEE6] text-[#fff];
  width: 100%;
 // height: size(1059);
  font-size:size(20);
  .txt {text-align: center;position: relative;
  padding-top:1.8em;z-index: 10;margin-bottom:-6.3em ;
  }
  .viewbox{z-index: 2;
/*    margin: 0 0 -5vw 0;
    top: -5vw; */
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
   // height: sizem(550);
  font-size:sizem(15);

  .txt {//text-align: justify;
    position: absolute;top: sizem(50);left: 0;right: 0;
  padding-top:0em;width:sizem(310);margin:auto auto 0em auto;
  }
  .viewbox{height: sizem(660);
    margin: 0;
    padding: sizem(100) 0 0 0;
    top:0;}


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
