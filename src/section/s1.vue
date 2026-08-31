<script setup>
</script>

<template>
  <article class="s1 relative" id="s1">
    <img class="bg" src="@/section/s1/bg.webp" alt="bg">

    <img class="bg_decor hidden md:block" src="@/section/s1/bg_decor.webp" alt="bg_decor" data-aos="fade-up"
      data-aos-duration="1000" data-aos-delay="500">

    <img class="bg_decor block md:hidden" src="@/section/s1/bg_decor_m.webp" alt="bg_decor" data-aos="fade-up"
      data-aos-duration="1000" data-aos-delay="500">

    <div class="text">
      <img class="title" src="@/section/s1/title.svg" alt="bg_decor" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="600">
      <img class="ping" src="@/section/s1/ping.svg" alt="bg_decor" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="700">
      <img class="textPic" src="@/section/s1/text.svg" alt="bg_decor" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="800">
      <img class="s_logo" src="@/section/s1/s_logo.svg" alt="bg_decor" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="900">
    </div>

    <a class="reserve hidden md:block" href="#order">
      <img src="@/section/s1/reserve.svg" alt="reserve">
    </a>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  background: #DB2718;
  width: 100%;
  height: 100vh;
  max-height: size-m(607);
  position: relative;
  overflow: visible;


  // @media screen and (min-width: 768px) {
  //   height: 100vh;
  //   min-height: size(1080);
  //   max-height: size(1080);
  // }

  .bg {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  .bg_decor {
    position: absolute;
    margin: auto;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  }

  .text {
    width: 100%;
    right: 0;
    left: 0;
    margin: auto;
    bottom: size-m(30);
    position: absolute;
    text-align: center;
    padding-left: size-m(30);
    padding-right: size-m(30);

    @media screen and (min-width: 768px) {
      padding-left: 0;
      padding-right: 0;
      width: size(560);
      left: unset;
      right: size(650);
      bottom: size(120);
    }

    .title {
      width: size-m(225);

      @media screen and (min-width: 768px) {
        width: size(420);
      }
    }

    .ping {
      padding-top: size-m(120);
      padding-bottom: size-m(50);
      width: size-m(155);

      @media screen and (min-width: 768px) {
        padding-top: size(95);
        padding-bottom: size(95);
        width: size(210);
      }
    }

    .textPic {
      width: size-m(305);

      @media screen and (min-width: 768px) {
        width: 100%;
      }
    }

    .s_logo {
      width: 100%;
      margin-top: size-m(45);

      @media screen and (min-width: 768px) {
        margin-top: size(40);
        width: size(260);
      }
    }
  }

  .reserve {
    position: fixed;
    z-index: 51;

    @media screen and (min-width: 768px) {
      right: size(15);
      bottom: size(15);
      width: size(150);
      height: size(150);
    }

    right:size-m(5);
    bottom: size-m(70);
    width: size-m(75);
    height: size-m(75);

    img{
      width: 100%;
    }
  }
}
</style>
