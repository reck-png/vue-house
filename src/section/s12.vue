<template>
  <article class="s2 relative" id="s2">
    <img src="./s2/bg.jpg" class="bg">
    <div class="txt">
      <h2 class="t1">玖登開發<span></span>春樹系列3</h2>
      <p>將於桃園八德擴大重劃核心區<br v-if="isMobile"><span v-else>，</span>豐德二路、豐德三路口完美角地</p>
      <p class="t2">/ 再續建築新篇章▪值得等待 /</p>
      <img src="./s2/t1.svg" class="t3">
      <img src="./s2/t2.svg" class="t32">
    </div>
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <span class="caption" v-html="img.caption"></span>
          <span class="name" v-html="img.name"></span>
          <span class="bottom"><b v-html="img.t1"></b>{{ img.t2 }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .s2 {
    position: relative;
 //   height:  size-m(604);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  color: #000;
  font-size: size-m(17);
  line-height: 1.5;
  padding: 3.8em 0 4.6em 0;
@media screen and (min-width: 768px) {
 // line-height: 1.8;
  font-size: size(20);
}
  &::before{content: "";display: block;position: absolute;top: 0;left: 0;width: 100%;bottom: 0;right: 0;
background: url("./s2/bg.jpg") 0 15%;
background-size: cover;
}
  .bg{position: absolute;
    top:0;right:-20%;width:auto;
    height: 100%; //transform: translateX(calc(-100% + 100vw));
    animation: bg 7s linear alternate infinite;
  }
@keyframes bg {
  30%{
   opacity: 1;
  }
  70% {
   opacity: 0;
  }
  100% {
   opacity: 0;
  }
}

 // overflow: hidden;
  .txt{position: relative;z-index: 2;text-align: center;margin:0 auto 0em;
  text-shadow:0em 0em .3em #fff7;
  }
.t1{font-weight: 900;font-size: 1.5em;display: flex;
  justify-content: center;
  align-items: center;margin: 0 auto .3em;
span{
  display: inline-block;height: 1px;background: currentColor;width: 2em;margin: 0 .3em;
}
@media screen and (min-width: 768px) {font-size: 2em;}
}
.t2{margin: .3em auto 1em;font-weight: 700;font-size: 1.1em;}
.t3{width: size-m(375);
  @media screen and (min-width: 768px) {width: size(1420);}}
.t32{width: size-m(100);display: block;margin: -.8em auto 0;
  @media screen and (min-width: 768px) {width: size(160);margin: -1.8em auto 0;}}
.slider{width:100%;
  filter:drop-shadow(.2em .2em .05em #0004);
  font-size: size-m(14);
  @media screen and (min-width: 768px) {width:size(1420);
    font-size: 1em;}
.slide{width: 100%;}
.slide-item{width: 100%;padding: 2em 0.85em 0;
  img{width: 100%;z-index: 2;position: relative;}
 /* @media screen and (max-width: 767px) {
    opacity: .5;
    transition: opacity .2s;
    &.is-active{opacity: 1;}
  }*/


}
.caption{position: absolute;bottom: 5.5em;right:1.7em;color: #fff;font-size: 0.64em;}
.name{position: absolute;background: #ffe75c;display: flex;aspect-ratio: 1/1;justify-content: center;align-items: center;border-radius: 50%;font-weight: 700;font-size: 1.3em;width: 5.2em;white-space: nowrap;z-index: 3;
  box-shadow:.2em .2em .1em -.08em #0002;
  left: .2em;top: .2em;letter-spacing: 0;}
.bottom{background: #ffe75c;display: block;width: 100%;text-align: center;font-size: 1.1em;
  line-height: 1.2;padding: 1em 0;z-index: 1;
b{border-right: 1px solid currentColor;margin-right: .5em;padding-right:.5em;display: inline-block;}
}

@media screen and (max-width: 767px) {
.name{transform: translate(0%,20%);transition: transform .5s, opacity .5s;opacity: 0;}
.bottom{opacity: 0;transition: transform .5s, opacity .5s;transform: translate(0%,-50%);}

.slide-item{
  img{filter: grayscale(50%);transition: filter .2s;
    transform-origin: 50% 0;}
}
.slide-item.is-active{
  img{filter: grayscale(0%);}
    .name{transform: translate(0);opacity: 1;}
    .bottom{opacity: 1;transform: translate(0);}
}
}
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

const splide = ref();

const imgs = [
  {
    img: new URL("./s2/1.jpg", import.meta.url).href,
    caption: "現場實景拍攝",
    name:"Y世代",
    t1:"台北內湖",
    t2:"植萃生活 悠然經典",
  },
  {
    img: new URL("./s2/2.jpg", import.meta.url).href,
    caption: "現場實景拍攝",
    name:"植春樹",
    t1:"桃園蘆竹",
    t2:"並肩青埔 質感地標",
  },
  {
    img: new URL("./s2/3.jpg", import.meta.url).href,
    caption: "現場實景拍攝",
    name:"寓上·春樹",
    t1:"桃園蘆竹",
    t2:"公園首席 綠意豐盈",
  },
];

const options = computed(() => {
  const mobile = isMobile.value;

    return {
      type:mobile? 'loop':'slide',
      perPage: mobile?1:3,
      perMove: 1,
      focus: 'center',
      padding: mobile ? { left: '10%', right: '10%' } : 0,
      autoplay: mobile? true:false,
      interval: 5000,
      arrows: false,
      pagination: false,
      drag:  mobile? true:false,
      gap: 0,
    };
});
</script>