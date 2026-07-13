<template>
  <article class="s3" ref="s3">
    <div class="img1" data-aos="fade" data-aos-delay="600"></div>
    <img src="./s3/imgm-2.svg" class="img2" data-aos="fade-left" v-if="isMobile" />
    <img src="./s3/img-2.svg" class="img2" data-aos="fade-left" v-else />
    <div class="main">
      <div class="txt">
          <h3 class="title" data-aos="fade-up" data-aos-delay="200">一橋北市 一門雙捷 </h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="600">坐落於雙北交界的黃金門戶，與北市僅一橋之遙，三分鐘散步即可抵達大坪林雙捷運站，迅速轉乘環狀線串聯雙北。6分鐘馳上國道與交流道，無論北上南下都快人一步，從容接軌全台脈動。</p>
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
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex items-center justify-center text-[#222];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  flex-direction:row-reverse;
  &::before{content: "";position: absolute;width: 100%;height: 100%;
  top: 0;left: 0;background: url("./s3/bg2.webp");mix-blend-mode: multiply;
}
.img1{position: absolute;left: size(190);top:size(380);
  width: size(415);height: size(415);background: #fff000}
.img2{position: absolute;right: size(70);top:size(100);
  width: size(790);}
.img3{position: absolute;left: size(56);bottom:size(-150);//transform-origin: 0 0;
  mix-blend-mode: multiply;
  width: size(250);}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
    flex-direction: column;
    text-align: justify;
  }
.txt{
 // margin: auto auto 3vw auto;
 padding: 0;
 .title{color: #3d3523;}
  .subtitle{font-weight: 400;}
  a{text-decoration:underline;margin: 0 1em 0 0;display: inline-block;
  &::after{content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 17' fill='none' stroke='%23FFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M12,10v3.5c0,1.4-1.1,2.5-2.5,2.5H3.5c-1.4,0-2.5-1.1-2.5-2.5v-6c0-1.4,1.1-2.5,2.5-2.5h3.5M16,8V1h-7M5,12L16,1'/%3E%3C/svg%3E");display: inline-block;width: .8em;margin:0 0 0 .2em;position: relative;top: .1em;}
  &:hover{text-decoration:none;}
  }
}


  .slider {
    margin: 0;
    flex-basis: size(840);
    width: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
  }
}
.s3 .splide__pagination {
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


.s3 {
@apply flex-col;
  height: auto;
  padding: 0 0 0.5em 0;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
.img1{left: sizem(0);bottom:sizem(165);top: auto;
  width: sizem(100);height: sizem(100);}
.img2{right: sizem(10);top:sizem(10);width: sizem(250);}
.img3{left: sizem(130);bottom:sizem(-30); width: sizem(50);}

.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 3em auto 3em;padding: 0;
}


.slider {
  height: auto;
  width: 95%;

  .caption {
  font-size:sizem(12);  
  right:sizem(5);
  bottom:sizem(5);
  }
  .slide-item {
    @apply bg-cover;
    width: 100%;
  flex-basis: auto;
    height: sizem(250);
    
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
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    caption: "64號快速道路"
  },
  {
    img:new URL("./s3/2.jpg", import.meta.url).href ,
    caption: "大坪林捷運站(3號出口)"
  },
  {
    img:new URL("./s3/3.jpg", import.meta.url).href ,
    caption: "北新橋"
  },
  {
    img:new URL("./s3/4.jpg", import.meta.url).href ,
    caption: "國道3號"
  },
  {
    img:new URL("./s3/5.jpg", import.meta.url).href ,
    caption: "新北環快"
  },
]
</script>

