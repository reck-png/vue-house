<template>
  <article class="s1 relative" id="s1">
    <picture>
      <source
        srcset="./s1/hero_twilight-m.jpg"
        media="(max-width: 768px)"
      >

      <img
        src="./s1/hero_twilight.jpg"
        alt=""
        class="bg"
      >
      


    </picture>
    
      <img
        src="./s1/logo2.svg"
        alt=""
        class="logo"
        data-aos="zoom-in"
        data-aos-delay="0"
      >

      <div class="H">
      <img
        src="./s1/H1.svg"
        alt=""
        class="t1"
        data-aos="zoom-in"
        data-aos-delay="200"
      >

       <img
        src="./s1/H2.svg"
        alt=""
        class="t2"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
      </div>
      <div class="c">3D透視模擬合成示意圖</div>
      
  </article>
  
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10;
  opacity: 1;


}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  position: relative;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
  font-size: sizem(15);

  // 桌機
  @media screen and (min-width: 768px) {
    height: size(1080);
    font-size: size(15);
  }

  // 手機
  @media screen and (max-width: 768px) {
    height: 92vh;
  }

.bg{
  width: 100%;
  object-fit:cover;
  object-position: right bottom;
  height: 100vh;
  @media screen and (max-width: 768px) {
    margin-top:0px;
     object-position: right top;
     height: 100vh;
  }
}


  .logo {
    position: absolute;
    top: clamp(sizem(32), 16vh, sizem(400));
    left: 0;
    right:0 ;margin: auto;
    width: sizem(130);
    filter:drop-shadow(0px 0px 5px rgba(0,0,0,0.1));

    @media screen and (min-width: 768px) {
     width: size(420);
    top:size(140);
     margin: 0;right: size(240);
     left: auto;
    }
  }

 .H {
  position: absolute;
  top: sizem(160);
  left: 0;
  right: 0;
  margin: auto;
  width: clamp(sizem(220), 72vw, sizem(600));

  display: flex;
  flex-direction: column;
  gap: sizem(8);
  align-items: flex-start;

  @media screen and (min-width: 935px) {
    width: clamp(size(480), 42vw, size(1600));
    top: size(150);
    margin: 0;
    left: size(240);
    right: auto;
  }

  @media screen and (max-width: 935px) {
  position: absolute;
  top: sizem(80);
  left: 0;
  right: 0;
  margin: auto;
  width: clamp(sizem(220), 72vw, sizem(600));

  display: flex;
  flex-direction: column;
  gap: sizem(8);
  align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
  position: absolute;
  top: clamp(sizem(80), 28vh, sizem(400));
  left: 0;
  right: 0;
  margin: auto;
  width: clamp(sizem(220), 70vw, sizem(320));

  display: flex;
  flex-direction: column;
  gap: sizem(8);
  align-items: flex-start;
  }
}


// ========================
// H1 / H2 刷亮
// ========================

.t1,
.t2 {
  display: block;

  animation: svgShine 4s ease-in-out infinite;
}


.t1 {
  width: 100%;
}

.t2 {
  width: 64%;
  margin-left: 0;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    
  }
}



.c {
  position: fixed;
  right: 2em;
  bottom: 36px;
  z-index: 10;

  color: #fff;
  font-size: sizem(12);
  letter-spacing: 0.1em;
  text-shadow: 0 0.2em 0.2em #000;

  @media screen and (min-width: 768px) {
    font-size: sizem(4);
  }
}



}

@keyframes svgShine {

  0% {
    filter:
      brightness(1)
      drop-shadow(0 0 0px rgba(255,255,255,0));
  }

  10% {
    filter:
      brightness(1.15)
      drop-shadow(0 0 3px rgba(255,255,255,.35));
  }

  50% {
    filter:
      brightness(1.3)
      drop-shadow(0 0 6px rgba(255, 204, 247, 0.678));
  }

  60% {
    filter:
      brightness(1.15)
      drop-shadow(0 0 3px rgba(255,255,255,.35));
  }

  100% {
    filter:
      brightness(1)
      drop-shadow(0 0 0px rgba(255,255,255,0));
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>