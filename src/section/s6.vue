<template>
  <article class="s6" ref="s6">
    <div class="img1" data-aos="fade" data-aos-delay="600"></div>
    <svg class="img2" v-if="!isMobile" viewBox="0 0 100 100"><path fill="#736446" d="M0,0V100h100"/></svg>
    <svg class="img3" viewBox="0 0 100 100"><path fill="#fff000" d="M0,100V0h100"/></svg>
    <svg class="img4" v-if="!isMobile" viewBox="0 0 100 100"><path fill="#736446" d="M0,100V0h100"/></svg>
    <div class="main">
      <div class="txt">
          <h3 class="title" data-aos="fade-up" data-aos-delay="200">榮耀四冠 鑄就安心地標</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="600">地震頻傳，選房子當然要選有認證的！<br>
東基M1一次拿下有建築界奧斯卡之稱、台灣建築界最高榮譽的「金質獎」、評定超嚴格，全新店僅5件獲得的「國家級耐震標章」，再加碼永續健康及智能的指標認證「黃金級綠建築」、「銀級智慧建築」！<br>
囊括四大國家級認證，從結構安全到節能減碳，從空中花園到智慧生活，每個細節都為您的美好未來把關。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
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



.s6 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:10em 0 10em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  flex-direction:row-reverse;
  &::before{content: "";position: absolute;width: 100%;height: 100%;
  top: 0;left: 0;background:  url("./s4/bg_7d6a35.jpg");mix-blend-mode: multiply;
}
.img1{position: absolute;left: size(190);top:size(360);
  width: size(415);height: size(415);background: #fff000;}
.img2{position: absolute;left: size(170);top:size(160);
  width: size(40);}
.img3{position: absolute;right: size(150);bottom:size(280);
  width: size(55);}
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
 padding: 0 0;
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

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s6 {
@apply flex-col;
  height: auto;
  padding: 0 0 0.5em 0;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
.img1{left: sizem(0);bottom:sizem(165);top: auto;
  width: sizem(100);height: sizem(100);}
  .img3{right: sizem(10);bottom:sizem(260);width: sizem(30);}

.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 3em auto 2em;padding: 0;
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


const imgs = [
  {
    img:new URL("./s6/1.jpg", import.meta.url).href ,
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

