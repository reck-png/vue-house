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

    <p class="s2-AI-txt">中興橋實景拍攝輔AI情境示意</p>

  </div>
  


 <div class="s2-m">

    <img
    class="s2-bg-pic-m"
    src="@/section/s2/s2-bg-m.jpg"
    data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-delay="520"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false"
    >

    <img
    class="s2-twostar-m"
    src="@/section/s2/txt-twostar-m.svg"
    data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="820"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false">

    <img
    class="s2-shimen-m"
    src="@/section/s2/txt-shimen-m.svg"
    data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="820"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false">

    <img
    class="s2-h-m"
    src="@/section/s2/s2-h-m.svg"
    data-aos="fade"
            data-aos-offset="10"
            data-aos-delay="5200"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="false"
    >

    <img
    class="s2-bg-light-m"
    src="@/section/s2/s2-light.svg">

    <img
    class="s2-toplight-m"
    src="@/section/s2/bylight-m-new.svg">

    <p class="s2-AI-txt-m">中興橋實景拍攝輔AI情境示意</p>


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

  .s2-AI-txt {
    position: absolute;

    right: calc(12% - 12vh);
    bottom: 20px;

    width: auto;
    height: auto;

    margin: 0;

    color: #fff;
    text-align: right;

    text-shadow: 0 0 3.806px #000;
    font-family: "Noto Sans TC", sans-serif;
    font-size: clamp(12px, 0.73vw, 14px);
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 1.776px;

    z-index: 10;
    white-space: nowrap;
  
  }




}

@media screen and (max-width:1020px) {

  .s2 {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  .s2-pc {
    display: none;
  }

  .s2-m {
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  .s2-bg-pic-m {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }

  .s2-bg-pic-m {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 376/453;
    margin: 0;
  }

  .s2-twostar-m {
    position: absolute;
    width: clamp(2%, 3%, 4%);
    left: 42%;
    top: 45%;
    z-index: 1;
  }

  .s2-shimen-m {
    position: absolute;
    width: clamp(2%, 3%, 4%);
    left: 80%;
    top: 45%;
    z-index: 1;
  }

  .s2-h-m {
    position: absolute;
    width: clamp(244px, 70vw, 500px);
    top: clamp(10%, 8vw, 24%);
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
}

.s2-toplight-m {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    mix-blend-mode: screen;

    filter:
        sepia(1)
        saturate(2)
        hue-rotate(-16deg)
        brightness(1.08);

    animation: cityGlow 4s ease-in-out infinite;

    will-change: opacity;
}

.s2-bg-light-m {
    position: absolute;

    width: clamp(10%, 45%, 50%);

    left: 35%;
    top: 54%;
    transform: translate(50%, -2%);
    mix-blend-mode: screen;
    animation: sunlightFlicker 8s ease-in-out infinite;

    z-index: 1;
}
.s2-AI-txt-m {
  position: absolute;

  right: 8%;
  bottom: 20px;

  margin: 0;
  padding: 0;

  color: #fff;
  text-align: right;

  text-shadow: 0 0 3.806px #000;
  font-family: "Noto Sans TC", sans-serif;
  font-size: clamp(14px, 0.73vw, 14px);
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 1.776px;

  white-space: nowrap;
  z-index: 10;
}

  }



@keyframes cityGlow {

    0% {
        opacity: 0.30;
    }

    25% {
        opacity: 0.36;
    }

    50% {
        opacity: 0.48;
    }

    68% {
        opacity: 0.60;
    }

    76% {
        opacity: 0.58;
    }

    100% {
        opacity: 0.30;
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