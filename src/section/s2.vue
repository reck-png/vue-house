<template>
  <article class="s2">
    
    <img src="./s2/1.jpg" class="t1" v-if="isMobile">
    <img src="./s2/2.jpg" class="t1" v-else>
    <!--
    <div class="txt">
      <h2 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">
        <img class=" " src="./s2/s2-h1.png" />
      </h2>
      <ul>
        <li class="txt1" data-aos="fade-up" data-aos-delay="100">地段決定身價,眼界決定境界。 <br /> 站在關埔的最核心,您的眼界,已領先一步 <br />
          時間醞釀的答卷,獻給懂完美的你。</li>
        <div class="sub">完美的名字 <br /> 昌益鉑翡 EVERYTHING IS PERFECT</div>
        <li data-aos="fade-up" data-aos-delay="200"></li>
        <li class="txt3" data-aos="fade-up" data-aos-delay="300">
          <img class=" " src="./s2/S2T3-2.png" />

        </li>

      </ul>
    </div>
    <div class="caption">本圖片為AI情境模擬,以實際完工現況為準。</div>
 -->
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden;
  width: 100%;
 // min-height: size(900);
 // max-height: size(1080);
 // height: 99vh;
  padding: 0;
  font-size: size(18);


  .t1{width: 100%;}
 // background: url("./s2/s2.jpg");
/*
  .txt1 {
    margin-top: 2.8em;
    margin-bottom: 2em;
    margin-left: 0em;
    font-weight: 200;
    font-size: 1.3em;
  }

  .sub {
    color: #fff;
    text-align: center;
    margin: 0 auto;
    margin-top: -1em;
    text-align: center;
    font-size: size(23);
  }

  .txt3 {
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 0em;
    font-weight: 500;
    font-size: 2em;
    background-clip: text;
    background: linear-gradient(to bottom, #ffc71f 0%, #ffffff 50%, #f2bd00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .caption {
    position: absolute;
    bottom: .5em;
    left: .5em;
    font-size: sizem(12);

    @media screen and (min-width: 768px) {
      font-size: size(15);
    }

  }

  .txt {
    z-index: 5;
    margin: 2em auto;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    font-size: size(20);
    color: #fff;



    .title {
      font-size: 4em;
      margin: 0 auto;
      line-height: 1.4;
      font-weight: 700;
      //color: #CEA93C;
      //background: url("./s2/s2-h1.png") no-repeat; 
      //background-clip: text;
      //background: linear-gradient(to bottom, #ffc71f 0%, #ffffff 50%, #f2bd00 100%);
      //-webkit-background-clip: text;
      //-webkit-text-fill-color: transparent; 
      text-align: center;
      margin-top: 1em;
      margin-left: -11em;


      &::after,
      &::before {
        content: "";
        width: 0 !important;
        height: 0 !important;
        display: none;
      }
    }
  }

  .st {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: size(60);
    height: size(740);
    bottom: calc(50% - 16vw);
    right: size(120);
    background-image: linear-gradient(180deg, #fff0 0%, #FFF 50%, #fff0 100%);

    img {
      width: 50%;
      margin: 0 0 2vw;
    }
  }*/
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}


/* mo */
@media screen and (max-width: 767px) {

  .s1 .logo {
    //  width: 40vw;
    //  margin: 15vw 0vw 0vw 0vw;
  }


  .s2 {
    @apply flex-col;
   /* min-height: sizem(0);
    max-height: sizem(1080);
    height: 277vw;
    font-size: sizem(14) !important;
    background: url("./s2/s2m.png") 50% 100% no-repeat;
    background-size: 100% auto;*/
/*
    .sub {
      color: #fff;
      margin: 0 auto;
      margin-left: 0em;
      margin-top: 6em;
    }

    .txt1 {
      margin-top: 3em;
      margin-bottom: 2em;
      margin-left: 0em;
      font-weight: 200;
      font-size: 1.3em;
    }

    .txt3 {
      margin-top: 4em;
      margin-bottom: 2em;
      margin-left: 0em;
      font-weight: 500;
    }

    .txt {
      margin: 4em auto auto auto;
      font-size: sizem(14);

      .sub {
        font-size: sizem(18) !important;
      }

      .title {
        font-size: sizem(22) !important;
        font-weight: 700;

        img {
          width: 12em;
          margin: 0 auto;
          margin-left: 12em;
        }
      }
    }

    .st {
      width: sizem(20);
      height: sizem(220);
      bottom: sizem(50);
      right: sizem(30);


    }*/

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
/*
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
  */
</script>
