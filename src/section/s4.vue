ebp<template>
  <article class="s4 " ref="s4">
    <div class="img1" data-aos="fade" data-aos-delay="600"></div>
    <svg class="img2" viewBox="0 0 100 100"><path fill="#fff000" d="M0,100V0h100"/></svg>
    <svg class="img3" viewBox="0 0 100 100"><path fill="#736446" d="M100,100H0V0"/></svg>
    <svg class="img4" v-if="!isMobile" viewBox="0 0 100 100"><path fill="#736446" d="M0,100V0h100"/></svg>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">食衣住行動 便利全到位</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">星級餐廳與連鎖名品環繞於北新商圈，4分鐘舉步即享風格日常；車行6分鐘即至裕隆城、家樂福等大型商場，完美涵蓋家庭採買與休閒娛樂。與景美夜市、景美河濱公園僅一橋之隔，週末騎車運動輕鬆樂活，美食美景垂手可得。無論是購物、育兒、運動，生活機能全點滿。</p>
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



.s4 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  &::before{content: "";position: absolute;width: 100%;height: 100%;
  top: 0;left: 0;background: url("./s4/bg_7d6a35.jpg");mix-blend-mode: multiply;
}
.img1{position: absolute;right: size(190);top:size(380);
  width: size(415);height: size(415);background: #fff000;}
.img2{position: absolute;left: size(220);top:size(270);
  width: size(50);}
.img3{position: absolute;right: size(170);top:size(180);
  width: size(35);}
.img4{position: absolute;right: size(510);bottom:size(0);
  width: size(95);}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}
.txt{
 // margin: auto auto 3vw auto;
 padding: 0 0 0;
  .subtitle{font-weight: 400;}
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
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
.s4 .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: 0;
    gap: 1.2em;
    color: #fff;
    li {
      button {
        //@apply rounded-full;
        width: 1em;
        height: 1em;
        background:currentColor ;
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

  .s4 {
    @apply flex-col;
    height: auto;
    padding: 0 0 0.5em 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
.img1{right: sizem(0);bottom:sizem(165);top: auto;
  width: sizem(100);height: sizem(100);}
.img2{left: sizem(30);top:sizem(30);width: sizem(20);}
.img3{right: sizem(10);top:sizem(220); width: sizem(20);}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {margin:3em auto 3em;padding: 0;
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
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    caption: "北新商圈"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "家樂福"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    caption: "景美夜市"
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    caption: "景美河濱公園"
  },
  {
    img:new URL("./s4/5.jpg", import.meta.url).href ,
    caption: "景美河濱公園"
  },
  {
    img:new URL("./s4/6.jpg", import.meta.url).href ,
    caption: "裕隆城"
  },
  {
    img:new URL("./s4/7.jpg", import.meta.url).href ,
    caption: "裕隆城"
  },
]
</script>

