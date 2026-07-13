<template>
  <article class="s5">
    <div class="img1" v-if="!isMobile"  data-aos="fade" data-aos-delay="600"></div>
    <img src="./s3/img-2.svg" class="img2" v-if="!isMobile" />
    <img src="./s3/imgm-2.svg" class="img2" v-else />
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">東基頂尖團隊<br v-if="isMobile"> 讓願景落地成真</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">當建築不只築起生活，更重塑土地的價值——東基開發，從規劃、建造到交屋，全程堅持最高標準，以職人之心琢磨每一寸空間。攜手三位建築美學大師，從格局設計、外觀景觀到光影層次，層層匠心、處處韻味。這不只是一場建築計畫，更是對理想生活的極致呈現。</p>
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
          <span class="caption">{{ img.caption }} </span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative flex flex-col items-center justify-center text-[#222];
  width: 100%;
  // height: size(800);
  padding:5em 0 10em 0;
  font-size:size(20);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
  &::before{content: "";position: absolute;width: 100%;height: 100%;
  top: 0;left: 0;background: url("./s3/bg2.webp");mix-blend-mode: multiply;
}
.img1{position: absolute;right: size(320);bottom:size(185);
  width: size(415);height: size(415);background: #fff000}
.img2{position: absolute;left: size(70);bottom:size(100);
  width: size(790);transform: rotate(180deg);}
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1050);text-align: center;
  .title{color: #3d3523;}
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
      justify-content:center;
      bottom: -2em;
    }
  }
  .caption_l{
     @apply absolute font-['Noto_serif_TC',serif];
     bottom: .5em;
    left: .5em;right: auto;font-size:size(30);font-weight: 700;
    text-shadow: 2px 3px 7px rgba(0, 0, 0, 0.8);}
}
.s5 .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: 0;
    gap: 1.2em;
    color: #fff;
    li {
      button {
        //@apply rounded-full;
        width: 1em;
        height: 1em;
        background:#ffffff ;
        transition: background .5s, transform .5s;
        overflow: hidden;
        &::before{content: "";
          display:block;width: 100%;height: 100%;
          background: #FFEB00;transform:skewY(0deg)scaleY(0);transform-origin: 0 0 ;transition:transform .5s ;}
        &:hover{
          transform: scale(.8);
        }
        &.is-active{
          &::before{
            transform:skewY(-45deg)scaleY(1);
          }
        }
      }
    }
  }
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
    @apply flex-col;
    height: auto;
    padding: 0 0 0.5em 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
gap:0em;
.img1{right: sizem(0);bottom:sizem(165);top: auto;
  width: sizem(100);height: sizem(100);}
  .img2{left: sizem(10);bottom:sizem(270);width: sizem(280);}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 3em auto 3em;padding: 0;text-align: justify;
  width: sizem(310);
}

  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(10);right: 1em;bottom: .7em;
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
    img:new URL("./s5/5.jpg", import.meta.url).href ,
    caption: "東基M1外觀示意合成參考圖"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "東基建設民生段3D外觀示意圖"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "華固映月"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "國立科學博物館 常設展 奇幻自然"
  },
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: ""
  },
]
</script>

