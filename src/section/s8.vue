<template>
  <article class="s8">
    <div class="img1" data-aos="fade" data-aos-delay="600" v-if="!isMobile"></div>
    <svg class="img2" viewBox="0 0 100 100"><path fill="#736446" d="M0,100V0h100"/></svg>
    <svg class="img3" v-if="!isMobile" viewBox="0 0 100 100"><path fill="#736446" d="M0,100V0h100"/></svg>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">一橋北市<br v-if="isMobile">一門雙捷</h3>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
         <!-- <span class="caption">{{ img.caption }} </span>
           <span class="caption_l">{{ img.caption }}</span>  -->
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:6em 0 10em 0;
  font-size:size(20);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
  &::before{content: "";position: absolute;width: 100%;height: 100%;
  top: 0;left: 0;background:  url("./s4/bg_7d6a35.jpg")no-repeat center/cover;mix-blend-mode: multiply;
}
.img1{position: absolute;left: size(320);top:size(660);
  width: size(415);height: size(415);background: #fff000;}
.img2{position: absolute;left: size(340);top:size(100);
  width: size(90);}
.img3{position: absolute;right: size(150);bottom:size(0);
  width: size(55);}
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);text-align: center;
}

  .slider {
    margin: 0;
   // flex-basis: size(1060);
      height: size(820);
    width: size(1230);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1230);
      height: size(820);
      
    }

    .splide__pagination{
      justify-content: center;
      bottom: -2em;
    }
  }
  .caption_l{
     @apply absolute font-['Noto_serif_TC',serif];
     bottom: .5em;
    left: .5em;right: auto;font-size:size(30);font-weight: 700;
    text-shadow: 2px 3px 7px rgba(0, 0, 0, 0.8);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
    @apply flex-col;
    height: auto;
    padding: 0 0 0em 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
gap:0em;
.img2{left: sizem(270);top:sizem(50);width: sizem(50);}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 3em auto 1em;padding: 0;text-align: justify;
}

  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(10);left: 1em;bottom: .7em;
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(250);
      
    }
  }
  
  .caption_l{
    font-size: sizem(25);
    bottom: .8em;left: .4em;
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const imgs = [
  {
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: ""
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination:  imgs.length > 1, 
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop',
  drag: imgs.length > 1, 
}
</script>

