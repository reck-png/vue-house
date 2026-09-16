<template>
<section class="s3">

<div class="s3-pc">

  <div
  class="s3-bg-wrap"
  data-aos="zoom-out"
  data-aos-offset="20"
  data-aos-delay="520"
  data-aos-duration="3000"
  data-aos-easing="ease-out-cubic"
  data-aos-once="false"
  data-aos-mirror="false"
>

    <div class="s3-bg-size">
        <img
        class="s3-bg"
        src="@/section/s3/s3-bg.jpg"
         >

        <img
        class="s3-local"
        src="@/section/s3/s3-local.png"
        >
    </div>

</div>

    <img
    class="s3-h"
    src="@/section/s3/s3-h.svg"
    data-aos="fade"
    data-aos-offset="10"
    data-aos-delay="5200"
    data-aos-duration="2000"
    data-aos-easing="ease-out-cubic"
/>

<p class="s3-p-txt">空拍實景經合成修飾示意</p>

  </div>
  


<div class="s3-m" @pointerdown="handleFgInteraction">

  <div class="s3-bg-wrap-m">

    <div class="s3-bg-size-m">

      <img
        class="s3-bg-m"
        src="@/section/s3/s3-bg.jpg"
        data-aos="zoom-out"
        data-aos-offset="20"
        data-aos-delay="520"
        data-aos-duration="3000"
        data-aos-easing="ease-out-cubic"
        data-aos-once="false"
        data-aos-mirror="false"
      >

      <img
        class="s3-local-m"
        src="@/section/s3/s3-local.png"
        data-aos="fade-up"
        data-aos-offset="20"
        data-aos-delay="820"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
        data-aos-once="false"
        data-aos-mirror="false"
      >

      <div
        class="fg-wp"
        :class="{ 'fg-hidden': !fgVisible }"
      ></div>

    </div>

  </div>

  <img
    class="s3-finger"
    src="@/section/s3/s3-finger.svg"
    :class="{ 'fg-hidden': !fgVisible }"
  >

  <img
    class="s3-h-m"
    src="@/section/s3/s3-h-m.svg"
    data-aos="fade"
    data-aos-offset="10"
    data-aos-delay="5200"
    data-aos-duration="2000"
    data-aos-easing="ease-out-cubic"
  >

<p class="s3-p-txt-m">空拍實景經合成修飾示意</p>

</div>
  
</section>    
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
    position: relative;
    width: 100%;
    height: auto;
    z-index: 0;
    background: linear-gradient(180deg, #00185F 0%, rgba(255, 255, 255, 0.00) 100%);
}
  
@media screen and (min-width:1201px) {

  .s3-m {
    display: none;
  }

  .s3-pc {
  position: relative;
  width: 100%;
  overflow: hidden;
}

  .s3-h {
    position: absolute;

    width: clamp(873px, 48vw, 1073px);
    top: clamp(0%, 6vw, 32%);
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: 1;
  }

.s3-bg-wrap {
  position: relative;

  width: 100%;

  overflow: hidden;
}


/* =========================
   1920 × 1000 設計稿
   ========================= */
.s3-bg-size {
  position: relative;

  width: max(100%, calc(100vh * 1.92));
  aspect-ratio: 1920 / 1000;

  left: 50%;
  transform: translateX(-50%);
}


/* BG */
.s3-bg {
  display: block;

  width: 100%;
  height: 100%;
}


/* LOCAL */
.s3-local {
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: 1;
}

.s3-p-txt {
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



@media screen and (max-width:1200px) {

  .s3-pc {
    display: none;
  }

  .s3-m {
  position: relative;
  width: 100%;
  overflow: hidden;
}

  .s3-h-m {
    position: absolute;

    width: clamp(162px, 80vw, 432px);
    top: clamp(4%, 3vw, 48%);
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: 1;
  }

.s3-bg-wrap-m {
  position: relative;

  width: 100%;

  overflow-x: auto;
  overflow-y: hidden;

  /* 隱藏 scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* 手機左右拖曳 */
  touch-action: pan-x;

  /* 上下透明，中間正常 */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.15) 8%,
    rgba(0, 0, 0, 0.6) 18%,
    #000 30%,
    #000 70%,
    rgba(0, 0, 0, 0.6) 82%,
    rgba(0, 0, 0, 0.15) 92%,
    transparent 100%
  );

  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.15) 8%,
    rgba(0, 0, 0, 0.6) 18%,
    #000 30%,
    #000 70%,
    rgba(0, 0, 0, 0.6) 82%,
    rgba(0, 0, 0, 0.15) 92%,
    transparent 100%
  );

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.s3-bg-wrap-m::-webkit-scrollbar {
  display: none;
}


.s3-bg-size-m {
  position: relative;

  width: max(100%, calc(100vh * 1.92));
  aspect-ratio: 1920 / 1000;

  /* 拿掉這兩個 */
  /* left: 50%; */
  /* transform: translateX(-50%); */

  flex-shrink: 0;
}


/* BG */
.s3-bg-m {
  display: block;

  width: 100%;
  height: 100%;
}


/* LOCAL */
.s3-local-m {
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
    rgba(14, 88, 177, 0.50) 80.91%,
    rgba(14, 88, 177, 0) 100%
  );

  opacity: 1;
  transition: opacity 0.35s ease;
}

.fg-wp.fg-hidden {
  opacity: 0;
}


.s3-finger {
  position: absolute;

  width: clamp(290px, 80vw, 490px);
  height: auto;

  pointer-events: none;

  opacity: 1;
  transition: opacity 0.35s ease;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 11;
}

.s3-finger.fg-hidden {
  opacity: 0;
}

.s3-p-txt-m {
    position: absolute;

    right: 20px;
    bottom: 20px;

    width: auto;
    height: auto;

    margin: 0;

    color: #fff;
    text-align: right;

    text-shadow: 0 0 3.806px #000;
    font-family: "Noto Sans TC", sans-serif;
    font-size: clamp(14px, 0.73vw, 14px);
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 1.776px;

    z-index: 10;
    white-space: nowrap;
  
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
  }, 1000);
};

onMounted(async () => {
  await nextTick();

  if (window.innerWidth <= 1200) {
    const wrap = document.querySelector('.s3-bg-wrap-m');

    if (wrap) {
      wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2;
    }
  }
});


</script>