<template>
<section class="s2">

<div class="s2-pc">

  <div
  class="s2-bg-wrap"
>

    <div class="s2-bg-size"
    >
        <img
        class="s2-bg"
        src="@/section/s2/s2-map.webp"
         >


         <img
    class="s2-light"
    src="@/section/s2/s2-light.webp"
    data-aos="fade"
    data-aos-offset="10"
    data-aos-delay="5200"
    data-aos-duration="2000"
    data-aos-easing="ease-out-cubic"
/>
    </div>



    
</div>
<img
    class="s2-h1"
    src="@/section/s2/s2-h1.svg"
    data-aos="fade"
    data-aos-offset="10"
    data-aos-delay="5200"
    data-aos-duration="2000"
    data-aos-easing="ease-out-cubic"
/>

<!-- <p class="s2-p-txt">空拍實景經合成修飾示意</p> -->

  </div>
  


<div class="s2-m" @pointerdown="handleFgInteraction">

  <div class="s2-bg-wrap-m">

    <div class="s2-bg-size-m">

      <img
        class="s2-bg-m"
        src="@/section/s2/s2-map.webp"
        data-aos="zoom-out"
        data-aos-offset="20"
        data-aos-delay="520"
        data-aos-duration="3000"
        data-aos-easing="ease-out-cubic"
        data-aos-once="false"
        data-aos-mirror="false"
      >

      <div
        class="fg-wp"
        :class="{ 'fg-hidden': !fgVisible }"
      ></div>

      

      <img
    class="s2-light-m"
    src="@/section/s2/s2-light.webp"
    data-aos="fade"
    data-aos-offset="10"
    data-aos-delay="5200"
    data-aos-duration="2000"
    data-aos-easing="ease-out-cubic"
/>

    </div>

  </div>

  <img
    class="s2-finger"
    src="@/section/s2/s2-finger.svg"
    :class="{ 'fg-hidden': !fgVisible }"
  >

  <img
    class="s2-h1-m"
    src="@/section/s2/s2-h1.svg"/>

<!--<p class="s2-p-txt-m">空拍實景經合成修飾示意</p>-->

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
  
@media screen and (min-width:1601px) {

  .s2-m {
    display: none;
  }

  .s2-pc {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.s2-h1 {
  position: absolute;

  width: 40vw;
  height: auto;

  left: 0;
  right: 0;
  top: 22%;

  margin: auto;

  transform: translateY(-50%);

  z-index: 3;
}

  .s2-light {
  position: absolute;

  width: 13.2769%;
  height: auto;
  aspect-ratio: 254.916 / 745;

  left: 45.3%;
  top: 49%;

  animation: glowBreath 3s ease-in-out infinite;
  mix-blend-mode: plus-lighter;

  z-index: 2;
}

.s2-bg-wrap {
  position: relative;

  width: 100%;

  overflow: hidden;
}


/* =========================
   1920 × 1000 設計稿
   ========================= */
.s2-bg-size {
  position: relative;
  width: max(100%, calc(100vh * 1.92));

  left: 50%;
  transform: translateX(-50%);
}


/* BG */
.s2-bg {
  display: block;
  margin-top: -15vw;
  width: 100%;
  height: auto;
}


/* LOCAL */
.s2-local {
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: 1;
}

.s2-p-txt {
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



@media screen and (max-width:1600px) {

  .s2-pc {
    display: none;
  }

.s2-h1-m {
  position: absolute;

  width: 60vw;
  height: auto;

  left: 0;
  right: 0;
  top: 45vw;

  margin: auto;

  transform: translateY(-50%);

  z-index: 3;
}

  .s2-m {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.s2-light-m {
  position: absolute;

  width: 13.2769%;
  height: 41.1148%;

  top: 45.5%;
  left: 45.15%;

  animation: glowBreath 3s ease-in-out infinite;
  mix-blend-mode: plus-lighter;

  z-index: 2;
}



.s2-bg-wrap-m {
  position: relative;

  width: 100%;

  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  touch-action: pan-x pan-y;

-webkit-mask-image: linear-gradient(
  to bottom,
  transparent 0%,
  rgba(0, 0, 0, 0.15) 8%,
  rgba(0, 0, 0, 0.6) 18%,
  #000 30%,
  #000 100%
);

mask-image: linear-gradient(
  to bottom,
  transparent 0%,
  rgba(0, 0, 0, 0.15) 8%,
  rgba(0, 0, 0, 0.6) 18%,
  #000 30%,
  #000 100%
);

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.s2-bg-wrap-m::-webkit-scrollbar {
  display: none;
}


.s2-bg-size-m {
  position: relative;
  width: max(100%, calc(100vh * 1.0596));
}


/* BG */
.s2-bg-m {
  margin-top: 15vw;
  display: block;
  width: 100%;
  height: auto;
}


/* LOCAL */
.s2-local-m {
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: 1;
}


.fg-wp {
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: 10;

  pointer-events: none;

  background: linear-gradient(
    180deg,
    rgba(14, 88, 177, 0) 0%,
    rgba(0, 0, 0, 0.5) 80.91%,
    rgba(14, 88, 177, 0) 100%
  );

  opacity: 1;
  transition: opacity 0.35s ease;
}

.fg-wp.fg-hidden {
  opacity: 0;
}


.s2-finger {
  position: absolute;

  width: clamp(290px, 80vw, 490px);
  height: auto;

  pointer-events: none;

  opacity: 1;
  transition: opacity 0.35s ease;

  top: 70%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 11;
}

.s2-finger.fg-hidden {
  opacity: 0;
}

.s2-p-txt-m {
    position: absolute;

    right: 20px;
    bottom: clamp(20px, 8vw, 60px);

    width: auto;
    height: auto;

    margin: 0;

    color: #fff;
    text-align: right;

    text-shadow: 0 0 3.806px #000;
    font-family: "Noto Sans TC", sans-serif;
    font-size: clamp(12px, -12vw, 12px);
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 1.776px;

    z-index: 10;
    white-space: nowrap;
  
  }


}

@media screen and (max-width:768px) {

.s2-bg-m {
  display: block;
margin-top: 45vw;
  width: 100%;
  height: auto;
}

.s2-h1-m {
  position: absolute;

  width: 80vw;
  height: auto;

  left: 0;
  right: 0;
  top: 45%;

  margin: auto;

  transform: translateY(-50%);

  z-index: 3;
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

[data-aos="zoom-out"] {
    filter: blur(80px) !important;
    opacity: 0;
}

[data-aos="zoom-out"].aos-animate {
    filter: blur(0px) !important;
    opacity: 1;
}







</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted, nextTick } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll');

const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  });
};


/* =========================
   FG 點擊隱藏
========================= */

const fgVisible = ref(true);

let fgTimer = null;

const handleFgInteraction = () => {

  // 立即隱藏
  fgVisible.value = false;

  // 重新計時
  clearTimeout(fgTimer);

  fgTimer = setTimeout(() => {
    fgVisible.value = true;
  }, 1500);
};

onMounted(async () => {
  await nextTick();

  if (window.innerWidth <= 1600) {
    const wrap = document.querySelector('.s2-bg-wrap-m');

    if (wrap) {
      wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2;
    }
  }
});


</script>