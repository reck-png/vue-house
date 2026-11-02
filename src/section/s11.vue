<template>
  <article class="s11"><!--
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">公園門牌  綠富生活</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">隱富繁華大道旁，心在幽靜樹海裡，「三景三錦」榮景只在轉身之間，公園門牌連動捷運便利，更顯地段價值非凡，近靜漲的魅力，成為層峰家庭置產首選。</p>
    </div>
    </div> -->
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@use '@/assets/style/function.scss' as *;

.s11 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:6em 0 10em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
  .hr{position: absolute;
  width:size(1525);bottom: size(-50);left:size(-10);pointer-events: none;z-index: 2;
  }
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
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s11 {
  @apply flex-col;
    height: auto;
    padding: 0 0 2em 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;
  .hr{
  width:sizem(600);bottom: sizem(-80);left:sizem(-100);
  }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 4.4em auto 1.3em;
}

  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(211);
      
    }
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
    img:new URL("./s11/1.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s11/2.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s11/3.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s11/4.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s11/5.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s11/6.jpg", import.meta.url).href ,
    caption: ""
  },
]
</script>

