<template>
<section class="s4-45">

<div class="s4-45-wrap">


    <div class="s4">
        <img
        class="s4-bg"
        src="@/section/s4/s4-bg.jpg"
         >
            <div class="s4-h-wrap">

               <img
                class="s4-span"
                src="@/section/s4/s4-span.svg"
                >
                <div class="s4-sp-warp">
                    <img
                    class="s4-h-2"
                    src="@/section/s4/s4-h-2.svg"
                    >

                  <span class="s4-line"></span>   
                    
                    <img
                    class="s4-h"
                    src="@/section/s4/s4-h.svg"
                    >
                </div>

            </div>

        <img
        class="s4-en"
        src="@/section/s4/s4-en.svg">

        <p class="s4-3D-txt">3D外觀透視示意圖</p>
    </div>
    </div>


 <div class="s45">
        <img
        class="s45-bg"
        src="@/section/s4/s45-bg.jpg"
         >

          <img
         class="s45-bg-light"
         src="@/section/s4/s45-bg-light.png">


                <div class="s45-all-wrap">

                      <div class="s45-h-wrap">
                            <img
                            class="s45-en"
                            src="@/section/s4/s45-en.png"
                            >
                            <img
                            class="s45-h"
                            src="@/section/s4/s45-h.svg"
                            >
                            <img
                            class="s45-light-2"
                            src="@/section/s4/s45-light2.svg"
                            > 
                      </div>

                      <div class="s45-sp-wrap">

                            <div class="s45-sp-1">
                                <img
                                class="s45-sp1-bg"
                                src="@/section/s4/s45-sp-bg.png"
                                >
                                        <img
                                        class="s45-sp-by-1"
                                        src="@/section/s4/s45-sp1.svg"
                                        >
                                    
                             </div>

                            <div class="s45-sp-2">
                                <img
                                class="s45-sp2-bg"
                                src="@/section/s4/s45-sp-bg.png"
                                >
                                        <img
                                        class="s45-sp-by-2"
                                        src="@/section/s4/s45-sp2.svg"
                                        >
                             </div>

                            <div class="s45-sp-3">
                                <img
                                class="s45-sp3-bg"
                                src="@/section/s4/s45-sp-bg.png"
                                >
                                        <img
                                        class="s45-sp-by-3"
                                        src="@/section/s4/s45-sp3.svg"
                                        >
                             </div>
                      </div>
                </div>

        <p class="s45-3D-txt">公設3D示意不含擺飾品 僅供參考</p>
    </div>



<div class="s4-45-wrap-m">

  <img class="s4-45-wrap-m-bg"
  src="@/section/s4/s4-45-wrap-m-bg.jpg">

    <div class="s4-m">
        
            <div class="s4-pic-wrap">
                <img
                class="s4-bg-m"
                src="@/section/s4/s4-bg-m.jpg"
                >
                <img
                class="s4-en-m"
                src="@/section/s4/s4-en-m.svg"
                >
                <p class="s4-3D-txt-m">3D外觀透視示意圖</p>
            </div>

            <img
                class="s4-h-m"
                src="@/section/s4/s4-h-m.svg"
                >
    </div>


   
  
 <div class="s45-m">
                <div class="s45-all-wrap-m">

                      <div class="s45-h-wrap-m">
                            <img
                            class="s45-en-m"
                            src="@/section/s4/s45-en.png"
                            >
                            <img
                            class="s45-h-m"
                            src="@/section/s4/s45-h-m.svg"
                            >
                      </div>
                      
                      <div class="s45-pic-warp-m">
                            <img class="s45-pic-m" src="@/section/s4/s45-bg.jpg">
                            <p class="s45-3D-txt-m">公設3D示意不含擺飾品 僅供參考</p>
                       </div>

                      <div class="s45-sp-wrap-m">

                            <div class="s45-sp-1-m">
                                <img
                                class="s45-sp1-bg-m"
                                src="@/section/s4/s45-sp-bg-m.png"
                                >
                                        <img
                                        class="s45-sp-by-1-m"
                                        src="@/section/s4/s45-sp1-m.svg"
                                        >
                             </div>

                            <div class="s45-sp-2-m">
                                <img
                                class="s45-sp2-bg-m"
                                src="@/section/s4/s45-sp-bg-m.png"
                                >
                                        <img
                                        class="s45-sp-by-2"
                                        src="@/section/s4/s45-sp2-m.svg"
                                        >
                             </div>

                            <div class="s45-sp-3-m">
                                <img
                                class="s45-sp3-bg-m"
                                src="@/section/s4/s45-sp-bg-m.png"
                                >
                                        <img
                                        class="s45-sp-by-3"
                                        src="@/section/s4/s45-sp3-m.svg"
                                        >
                             </div>
                      </div>
                </div>
    </div>
    </div>



  
</section>    
</template>

<style lang="scss">
@import "@/assets/style/function.scss";


.s4 {
    position: relative;
    width: 100%;
    height: auto;
    z-index: 0;
}
  
@media screen and (min-width:1201px) {

  .s4-45-wrap-m {
    display: none;
  }

  .s4,
  .s45 {
  position: relative;
  width: 100%;
  overflow: hidden;
}

  .s4-h-wrap {
      position: absolute;
  width:143px;
  height:379px;
  left: 1633;
  right: 0;
  top: 10%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  z-index: 5;
  }

  .s4-sp-warp{
    display: flex;
    align-items: flex-end;
    gap: 14px;

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