<template>
  <article class="s10">
		<img src="./s1/oo.svg" class="oo" v-if="isMobile">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">質感豪宅公設<br v-if="isMobile"> 享受居家時光</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">回到家的時光，是享受生活的起點！可以在健身房和多功能室之間動靜自在切換，或是在KTV室和運動Bar好好放鬆身心，擁有多樣的公設規劃，讓居家的樂趣有更多可能！</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利。</span>
          <span class="caption_l">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@use '@/assets/style/function.scss' as *;

.s10 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:6em 0 10em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
  .oo{position: absolute;top: calc(50% - #{size(550)});right: calc(50% - #{size(190)});width: size(1100);
  transform: scaleX(-1);}
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);
}

  .slider {
    margin: 0;
   // flex-basis: size(1060);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }

    .splide__pagination{
      justify-content: flex-end;
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

  .s10 {
    flex-direction:column-reverse;
    height: auto;
    padding: 0 0 2em 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;
  .oo{bottom: sizem(-50);top: auto;
left: calc(50% - #{sizem(330)});
width: sizem(660);transform: rotate(90deg);
 }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 2em auto 6em;padding: 0;
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

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s10/1.jpg", import.meta.url).href ,
    caption: "迎賓大廳"
  },
  {
    img:new URL("./s10/2.jpg", import.meta.url).href ,
    caption: "交誼廳"
  },
  {
    img:new URL("./s10/3.jpg", import.meta.url).href ,
    caption: "KTV室"
  },
  {
    img:new URL("./s10/4.jpg", import.meta.url).href ,
    caption: "健身房"
  },
  {
    img:new URL("./s10/5.jpg", import.meta.url).href ,
    caption: "運動Bar"
  },
  {
    img:new URL("./s10/6.jpg", import.meta.url).href ,
    caption: "多功能室"
  },
]
</script>

