<template>
  <article class="s7">
    <img src="./s1/bg2.webp" class="eggbg1" alt="蛋黃">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">水岸公園美景 <br v-if="isMobile"> 全室設計師美裝</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">景觀×裝潢  好美成雙</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">緊鄰淡水河畔公園，限量水岸景觀席飽覽壯闊河景，窗景萬千，白天臨摹震撼人心的山水畫作，晚上畫風一轉，增豔而成撫慰心靈的百萬夜景。景美室更美，步入大廳猶如置身精品飯店，全室設計師精緻裝潢傢俱，一卡皮箱開啟質感水岸人生。</p>
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

.s7 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:10em 0 10em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column-reverse;
	.eggbg1{position: absolute;
    display: block;
    top: size(-200);left:size(0);width:size(1300);
		transform:translateY(-10%);
		animation: an 2s ease-in-out infinite alternate-reverse;}
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
    flex-basis: size(1000);
      height: size(1000);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(1000);
      
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

  .s7 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
  margin-bottom:0em;
gap:0em;
background:linear-gradient(135deg, #3F94CA 0%, #71A3A5 20%, #E0C663 50%,#E1A843 70%);
	.eggbg1{
    top: sizem(50);left:sizem(100);width:sizem(400);}

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
    img:new URL("./s7/1.webp", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/2.webp", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/3.webp", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/4.webp", import.meta.url).href ,
    caption: "社區梯廳實景"
  },
  {
    img:new URL("./s7/5.webp", import.meta.url).href ,
    caption: "社區門面實景"
  },
  {
    img:new URL("./s7/6.webp", import.meta.url).href ,
    caption: "接待大廳實景"
  },
  {
    img:new URL("./s7/7.webp", import.meta.url).href ,
    caption: "淡水河畔公園實景"
  },
  {
    img:new URL("./s7/8.webp", import.meta.url).href ,
    caption: "淡水河畔公園實景"
  },
]
</script>

