<template>
  <article class="s4" ref="s4">
    <img src="./s1/bg2.webp" class="eggbg1" alt="蛋黃">
    <img src="./s1/bg3.webp" class="eggbg2" alt="蛋黃" v-if="!isMobile">
    <img src="./s1/oo.svg" alt="oo" class="oo1" v-if="!isMobile">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">北士科半價  最甜補漲區</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">好地段×大品牌  增值成雙</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">坐擁5分鐘直達士林燙金地段，北士科半價輕鬆挺進新士林生活圈，加上麗寶集團大品牌效益、未來捷運網路、銀新未來城等利多加持，享受未來紅利增值爆發期。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@use '@/assets/style/function.scss' as *;



.s4 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(19);
  gap:3em;
  flex-wrap: wrap;
    flex-direction:row-reverse;
	.eggbg1{position: absolute;
    display: block;
    top: size(-50);left:size(-30);width:size(500);
		transform:translateY(-10%);
		animation: an 2s ease-in-out infinite alternate-reverse;}
	.eggbg2{position: absolute;
    display: block;
    top: size(870);right:size(-30);width:size(350);
		transform:translateY(-50%);
		animation: an 4s ease-in-out infinite alternate;}
    .oo1{position: absolute;top:size(350);height:size(50);right:size(60);
		transform: translateX(20%);
		animation: an 3s ease-in-out infinite alternate;}


  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}



  .slider {
    margin: 0;
    flex-basis: size(840);
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


.s4 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(15);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;

	.eggbg1{
    top: sizem(-40);left:sizem(-50);width:sizem(400);}
.img{position: absolute;top:sizem(300);left: auto;
  right:sizem(-155);width:sizem(260);bottom: auto;}

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
    img:new URL("./s4/1.webp", import.meta.url).href ,
    caption: "士林生活圈實景"
  },
  {
    img:new URL("./s4/2.webp", import.meta.url).href ,
    caption: "士林商圈實景"
  },
  {
    img:new URL("./s4/3.webp", import.meta.url).href ,
    caption: "士林科教館實景"
  },
]
</script>

