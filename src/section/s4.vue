<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const splideRef1 = ref(null)
const no1 = ref(0);

const goPrev1 = () => {
  splideRef1.value?.splide.go('-1')
  no1.value = splideRef1.value?.splide.index;
}

const goNext1 = () => {
  splideRef1.value?.splide.go('+1')
  no1.value = splideRef1.value?.splide.index;
}

onMounted(() => {
  if (splideRef1.value) {
    splideRef1.value.splide.on('moved', () => {
      no1.value = splideRef1.value?.splide.index;
    });
  }

});

onBeforeUnmount(() => {
  if (splideRef1.value) {
    splideRef1.value.splide.off('moved');
  }

});

</script>

<template>
  <article class="s4 relative" id="s4">

    <div class="text">
      <h3 class="font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        極萃綠地</h3>

      <div class="light" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img class="hidden md:block" src="@/section/s3/light.webp" />
        <img class="block md:hidden" src="@/section/s3/light_m.webp" />
      </div>

      <h4 class="font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        呼吸純粹的自由，擁抱綠意的靜謐</h4>


      <p class="font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        新北大都會公園424公頃、相當於1.25倍紐約中央公園、16座大安森林公園，水漾路前公園、集美商圈內玫瑰公園。讓孩子跑跳，樂活在陽光與綠地之間。
      </p>
    </div>

    <div class="pic">
      <Splide ref="splideRef1" :options="{
        type: 'loop',       // 使用 slide 模式而非 fade
        autoplay: true,     // 不自動播放
        interval: 5000,      // 可省略，因為 autoplay 是 false
        speed: 1000,         // 切換速度
        arrows: false,        // 顯示左右箭頭 ✅
        pagination: false,    // 顯示下方小點 ✅
        drag: true,          // 可拖曳
        perPage: 1,          // 每頁一張
        rewind: true         // 可循環播放
      }">
        <SplideSlide class="slide">
          <div class="slide_item">
            <div class="item_pic">
              <div class="hidden md:block"><img src="@/section/s4/pic01.webp" alt="pic"></div>
              <div class="block md:hidden"><img src="@/section/s4/pic01_m.webp" alt="pic"></div>
              <span class="font-['Noto_Sans_TC'] text-[#fff]">新北大都會公園實景</span>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide class="slide">
          <div class="slide_item">
            <div class="item_pic">
              <div class="hidden md:block"><img src="@/section/s4/pic02.webp" alt="pic"></div>
              <div class="block md:hidden"><img src="@/section/s4/pic02_m.webp" alt="pic"></div>
              <span class="font-['Noto_Sans_TC'] text-[#fff]">新北大都會公園實景</span>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide class="slide">
          <div class="slide_item">
            <div class="item_pic">
              <div class="hidden md:block"><img src="@/section/s4/pic03.webp" alt="pic"></div>
              <div class="block md:hidden"><img src="@/section/s4/pic03_m.webp" alt="pic"></div>
              <span class="font-['Noto_Sans_TC'] text-[#fff]">新北大都會公園實景</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="slide">
          <div class="slide_item">
            <div class="item_pic">
              <div class="hidden md:block"><img src="@/section/s4/pic04.webp" alt="pic"></div>
              <div class="block md:hidden"><img src="@/section/s4/pic04_m.webp" alt="pic"></div>
              <span class="font-['Noto_Sans_TC'] text-[#fff]">新北大都會公園實景</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="slide">
          <div class="slide_item">
            <div class="item_pic">
              <div class="hidden md:block"><img src="@/section/s4/pic05.webp" alt="pic"></div>
              <div class="block md:hidden"><img src="@/section/s4/pic05_m.webp" alt="pic"></div>
              <span class="font-['Noto_Sans_TC'] text-[#fff]">新北大都會公園實景</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="slide">
          <div class="slide_item">
            <div class="item_pic">
              <div class="hidden md:block"><img src="@/section/s4/pic06.webp" alt="pic"></div>
              <div class="block md:hidden"><img src="@/section/s4/pic06_m.webp" alt="pic"></div>
              <span class="font-['Noto_Sans_TC'] text-[#fff]">新北大都會公園實景</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="slide">
          <div class="slide_item">
            <div class="item_pic">
              <div class="hidden md:block"><img src="@/section/s4/pic07.webp" alt="pic"></div>
              <div class="block md:hidden"><img src="@/section/s4/pic07_m.webp" alt="pic"></div>
              <span class="font-['Noto_Sans_TC'] text-[#fff]">新北大都會公園實景</span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div class="_btn_ block md:hidden">
        <div class="splide_btn prev" @click="goPrev1">
          <img src="@/section/s3/prev.svg" alt="prev">
        </div>
        <div class="splide_btn next" @click="goNext1">
          <img src="@/section/s3/next.svg" alt="next">
        </div>
      </div>

    </div>

    <div class="prev_btn block md:hidden" @click="goPrev1">
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="34" viewBox="0 0 31 34" fill="none">
        <g filter="url(#filter0_d_61_350)">
          <rect x="27" y="26" width="26" height="26" rx="13" transform="rotate(-180 27 26)" fill="black"
            fill-opacity="0.44" shape-rendering="crispEdges" />
        </g>
        <path d="M17 20L10 13.1892L17 6" stroke="white" stroke-linecap="round" />
        <defs>
          <filter id="filter0_d_61_350" x="-3" y="0" width="34" height="34" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_350" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_350" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>

    <div class="next_btn block md:hidden" @click="goNext1">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" fill="none">
        <g filter="url(#filter0_d_61_347)">
          <rect x="4" width="26" height="26" rx="13" fill="black" fill-opacity="0.44" shape-rendering="crispEdges" />
        </g>
        <path d="M14 6L21 12.8108L14 20" stroke="white" stroke-linecap="round" />
        <defs>
          <filter id="filter0_d_61_347" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_347" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_347" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  background-color: #fff;
  width: 100%;
  // height: calc(100vh - 63px);
  // max-height: size-m(750);
  position: relative;
  overflow: visible;


  // @media screen and (min-width: 768px) {
  //   height: 100vh;
  //   min-height: size(1080);
  //   max-height: size(1080);
  // }

  .text {
    padding-left: size-m(30);
    padding-right: size-m(30);
    position: absolute;
    left: 0;
    right: 0;
    top: size-m(65);
    margin: auto;
    z-index: 1;
    pointer-events: none;

    @media screen and (min-width: 768px) {
      padding-left: 0;
      padding-right: 0;
      top: size(107);
      width: size(670);
    }

    h3 {
      text-align: center;
      font-weight: 700;
      font-size: size-m(25);
      letter-spacing: size-m(2.5);
      margin-bottom: size-m(5);

      @media screen and (min-width: 768px) {
        font-size: size(60);
        letter-spacing: size(6);
        margin-bottom: size(15);
      }
    }

    .light {
      text-align: center;
      width: calc(100% + size-m(60));
      margin-left: size-m(-30);
      margin-right: size-m(-30);

      @media screen and (min-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }

      img {
        width: 100%;

        @media screen and (min-width: 768px) {
          max-width: size(1000);
        }
      }
    }

    h4 {
      text-align: center;
      font-weight: 500;
      font-size: size-m(17);
      margin-top: size-m(10);
      margin-bottom: size-m(10);

      @media screen and (min-width: 768px) {
        margin-top: size(5);
        margin-bottom: size(20);
        font-size: size(36);
      }
    }



    p {
      text-align: center;
      font-weight: 400;
      font-size: size-m(13);
      line-height: 1.7;
      margin-bottom: size-m(35);

      br {
        display: none;
      }

      @media screen and (min-width: 768px) {
        font-size: size(15);
        margin-bottom: size(75);

        br {
          display: block;
        }
      }
    }
  }


  .pic {
    position: relative;

    .slide {
      .slide_item {
        width: 100%;

        .item_pic {
          position: relative;
          width: 100%;

          // max-height: 100vh;
          img {
            width: 100%;
            display: flex;
          }

          span {
            position: absolute;
            font-weight: 500;
            font-size: size-m(12);
            bottom: size-m(15);
            right: size-m(10);

            @media screen and (min-width: 768px) {
              font-size: size(13);
              bottom: size(20);
              right: size(20);
            }
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      ._btn_ {
        position: absolute;
        left: 0;
        right: 0;
        bottom: size(70);
        margin: auto;
        margin-top: size(10);
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.44);
        width: size(72);
        height: size(22);
        border-radius: size(14);
        position: relative;

        &::before {
          content: "";
          width: size(16);
          height: 1px;
          background-color: #000;
          transform: rotate(119.74deg);
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        .splide_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          img {
            width: size(7);
            filter: brightness(0);
          }
        }
      }
    }
  }


  .next_btn,
  .prev_btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .next_btn {
    right: size-m(5);
  }

  .prev_btn {
    left: size-m(5);
  }
}
</style>
