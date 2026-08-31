<script setup>
import Fullview from '../components/fullview.vue';
</script>

<template>
  <article class="s2 relative" id="s2">
    <div class="t1 hidden md:block">雙星璀璨 一橋咫尺   極致生活 跨域美好</div>
    <div class="t1 block md:hidden">雙星璀璨 一橋咫尺<br>極致生活 跨域美好</div>

    <div class="map hidden md:block">
      <img src="@/section/s2/map.jpg" alt="bg_decor">
    </div>

    <div class="map block md:hidden">
      <Fullview />
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  // background: #C7000B;
  width: 100%;
  position: relative;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    padding: size(40);
  }
      @media screen and (max-width: 767px) {
    background: #0587df;overflow: hidden;
      }

  .map {
    @media screen and (min-width: 768px) {
      img{
        width: 100%;
      }
    }
    position: relative;
    z-index: 1;
      img{
      //background: url("@/section/s2/map.jpg") center;
      background-size: cover;
      }
      @media screen and (max-width: 767px) {
       margin-top: 15vw;
      }
  }


  .t1{
      position: absolute;
      z-index: 99;
      font-weight: 500;
      top:size-m(40);
      left:size-m(85);
      font-size: size-m(25);
      padding-bottom: size-m(40);
      line-height: 1.5;
      color: #fff;

      @media screen and (min-width: 768px) {
        font-size: size(36);
        top:size(86);
        left:size(676);
        padding-bottom: size(65);
        line-height: unset
      }
  }
}
</style>
