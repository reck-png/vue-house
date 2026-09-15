<template>
<section class="s2">

<div class="s2-pc">


    <img
    class="s2-bg-pic"
    src="@/section/s2/newh-s2-bg.jpg"
    data-aos="zoom-out"
            data-aos-offset="20"
            data-aos-delay="520"
            data-aos-duration="3000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false">

    <img
    class="s2-twostar"
    src="@/section/s2/txt-twostar.svg"
    data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="820"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false">

    <img
    class="s2-shimen"
    src="@/section/s2/txt-shimen.svg"
    data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="820"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false">

    <img
    class="s2-bg-light"
    src="@/section/s2/s2-light.svg">

    <img
    class="s2-h"
    src="@/section/s2/s2-h.svg"
    data-aos="fade"
            data-aos-offset="10"
            data-aos-delay="5200"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false"
    >

    <p class="s2-AI-pic">中興橋實景拍攝輔AI情境示意</p>

  </div>
  


 <div class="s2-m">

    <img
    class="s2-bg-pic-m"
    src="@/section/s2/s2-bg-m.jpg">

    <img
    class="s2-twostar-m"
    src="@/section/s2/txt-twostar-m.svg">

    <img
    class="s2-twostar-m"
    src="@/section/s2/txt-twostar-m.svg">

    <img
    class="s2-shimen-m"
    src="@/section/s2/txt-shimen-m.svg">

    <img
    class="s2-h-m"
    src="@/section/s2/s2-h-m.svg">

    <img
    class="s2-toplight-m"
    src="@/section/s2/bylight-m-new.svg">

    <p class="s2-AI-pic-m">中興橋實景拍攝輔AI情境示意</p>


 </div>








</section>    
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    position: relative;
    width: 100%;
    height: auto;
    z-index: 0;
}
  
  @media screen and (min-width:1021px) {

    .s2-m {
        display: none;
    }

   .s2-pc {
    position: relative;
    width: 100%;
    height: auto;
    max-height:100vh;
    overflow: hidden;
    aspect-ratio: 1920 /1000;
}

  .s2-bg-pic {
    position: absolute;
    inset: 0;
    width: 100%;
    height: auto;
    max-height:100vh;
    aspect-ratio: 1920 /1000;
    object-fit: cover;
    object-position: center 65%;
    margin: 0;
    z-index: -5;
}

  .s2-twostar {
    position: absolute;

     width: clamp(1%, 1.1%, 1.5%);

    left: 50%;
    top: 20%;
    

    z-index: 1;
}

 .s2-shimen {
    position: absolute;

    width: clamp(1%, 1%, 1.5%);

    left: 80%;
    top: 20%;

    z-index: 1;
}


  .s2-bg-light{
    position: absolute;

    width: clamp(10%, 25%, 50%);

    left: 50%;
    top: 50%;
    transform: translate(50%, -2%);
    mix-blend-mode: screen;
    animation: sunlightFlicker 8s ease-in-out infinite;

    z-index: 1;
}

  .s2-h{
    position: absolute;

    width: clamp(250px, 28vw, 480px);

    left: 15%;
    top: 12%;
    mix-blend-mode: screen;
    z-index: 1;
  }

}

@media screen and (max-width:1020px) {

  .s2 {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 0;
    aspect-ratio: 376/453;
    max-height: none;
    overflow:visible;

    z-index: 10;
  }

  .s2-pc {
    display: none;
  }

  .s2-m {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 0;
    aspect-ratio: 376/453;
    overflow: hidden;
  }

  .s2-bg-pic-m {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    max-width: none;
    aspect-ratio: 376/453;
    margin: 0;
  }

  .s2-twostar-m {
    position: absolute;
    width: clamp(2%, 3%, 4%);
    left: 50%;
    top: 20%;
    z-index: 1;
  }

  .s2-shimen-m {
    position: absolute;
    width: clamp(1%, 1%, 1.5%);
    left: 80%;
    top: 20%;
    z-index: 1;
  }

  .s2-h-m{
    position: absolute;
  }

  .s2-toplight-m{
    position: absolute;

  }

}







</style>

<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>