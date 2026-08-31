<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const splideRef1 = ref(null)
const no1 = ref(0);
/*
const goPrev1 = () => {
  splideRef1.value?.splide.go('-1')
  no1.value = splideRef1.value?.splide.index;
}

const goNext1 = () => {
  splideRef1.value?.splide.go('+1')
  no1.value = splideRef1.value?.splide.index;
}
*/

const splideRef2 = ref(null)
const no2 = ref(0);
/*
const goPrev2 = () => {
  splideRef2.value?.splide.go('-1')
  no2.value = splideRef2.value?.splide.index;
}

const goNext2 = () => {
  splideRef2.value?.splide.go('+1')
  no2.value = splideRef2.value?.splide.index;
}
*/
onMounted(() => {
  if (splideRef1.value) {
    splideRef1.value.splide.on('moved', () => {
      no1.value = splideRef1.value?.splide.index;
    });
  }

  if (splideRef2.value) {
    splideRef2.value.splide.on('moved', () => {
      no2.value = splideRef2.value?.splide.index;
    });
  }
});

onBeforeUnmount(() => {
  if (splideRef1.value) {
    splideRef1.value.splide.off('moved');
  }

  if (splideRef2.value) {
    splideRef2.value.splide.off('moved');
  }
});
</script>

<template>
  <article class="s5 relative" id="s5">

    <img class="bg_decor hidden md:block" src="@/section/s5/bg_decor.webp" alt="bg_decor">

    <div class="wrapper">
      <div class="item">
        <div class="pic">
          <Splide ref="splideRef1" :options="{
            type: 'slide',       // 使用 slide 模式而非 fade
            autoplay: true,     // 不自動播放
            interval: 5000,      // 可省略，因為 autoplay 是 false
            speed: 1000,         // 切換速度
            arrows: true,        // 顯示左右箭頭 ✅
            pagination: false,    // 顯示下方小點 ✅
            drag: true,          // 可拖曳
            perPage: 1,          // 每頁一張
            rewind: true         // 可循環播放
          }">
           <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic01.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">全聯實景拍攝</span>
                </div>

              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic02.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">迪卡儂實景拍攝</span>
                </div>

              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic03.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">家樂福實景拍攝</span>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic04.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">集美市場實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic05.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">集美市場實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic06.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">三重行政大樓實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic07.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">三重國民運動中心實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic08.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">聯合醫院實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic09.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic10.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">松山CITY LINK示意</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/t_pic11.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">松山CITY LINK示意</span>
                </div>
              </div>
            </SplideSlide>
          </Splide>
<!-- 

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
                <rect x="4" width="26" height="26" rx="13" fill="black" fill-opacity="0.44"
                  shape-rendering="crispEdges" />
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

          <div class="_btn_ hidden md:block">
            <div class="splide_btn prev" @click="goPrev1">
              <img src="@/section/s3/prev.svg" alt="prev">
            </div>
            <div class="splide_btn next" @click="goNext1">
              <img src="@/section/s3/next.svg" alt="next">
            </div>
          </div>  -->
        </div>
        <div class="text">
          <h2 class="font-['Noto_Sans_TC'] text-[#DCA435]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">極美機能</h2>
          <h3 class="font-['Noto_Sans_TC'] text-[#000]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">繁華環繞，便利盡在咫尺，收集美好生活</h3>
          <div class="text_content">
            <div class="text_content_item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <div class="label"><span class="font-['Noto_Sans_TC'] text-[#fff]">集美生活圈</span></div>
              <p class="font-['Noto_Sans_TC'] text-[#000]">
                集美街商業機能發達，連鎖商家、餐廳均有，採買可到全聯、環河南路傳統早市，聯上廣場內全國電子、特力屋、迪卡儂等賣場，豐富機能，5分鐘滿足採買需求。</p>
            </div>
            <div class="text_content_item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <div class="label"><span class="font-['Noto_Sans_TC'] text-[#fff]">CITY LINK<br>時尚購物商場</span></div>
              <p class="font-['Noto_Sans_TC'] text-[#000]">
                新北地標級大型百貨，完美結合多元生活與時尚潮流。主題餐廳匯聚美食饗宴，國際名品彰顯品味格調，無論是精品購物、親子時光，還是悠閒慢活，一站滿足。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <Splide ref="splideRef2" :options="{
            type: 'slide',       // 使用 slide 模式而非 fade
            autoplay: true,     // 不自動播放
            interval: 5000,      // 可省略，因為 autoplay 是 false
            speed: 1000,         // 切換速度
            arrows: true,        // 顯示左右箭頭 ✅
            pagination: false,    // 顯示下方小點 ✅
            drag: true,          // 可拖曳
            perPage: 1,          // 每頁一張
            rewind: true         // 可循環播放
          }">
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/b_pic01.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">集美雙語國小實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/b_pic02.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">三重高中實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/b_pic03.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">三重圖書館實景拍攝</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/b_pic04.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">小學生情境示意圖</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s5/b_pic05.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">中學生情境示意圖</span>
                </div>
              </div>
            </SplideSlide>
          </Splide>
<!-- 
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
                <rect x="4" width="26" height="26" rx="13" fill="black" fill-opacity="0.44"
                  shape-rendering="crispEdges" />
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

          <div class="_btn_ hidden md:block">
            <div class="splide_btn prev" @click="goPrev2">
              <img src="@/section/s3/prev.svg" alt="prev">
            </div>
            <div class="splide_btn next" @click="goNext2">
              <img src="@/section/s3/next.svg" alt="next">
            </div>
          </div>
          -->
        </div>
        <div class="text bot">

          <h2 class="font-['Noto_Sans_TC'] text-[#DCA435]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">極致學區</h2>
          <h3 class="font-['Noto_Sans_TC'] text-[#000] " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">一步雙語名校，菁英教育國際接軌</h3>
          <p class="font-['Noto_Sans_TC'] text-[#000]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            書香繚繞，名校為鄰。近享集美雙語國小與三重高中，十二年國教完美銜接，學子從容踏步未來。外語教育培養國際人才，步行可及的安心與便利，讓父母的期盼與學子的夢想，極致展開。</p>
        </div>
      </div>
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  background: url(./s5/book.webp) #fff 50% / cover no-repeat;
  background-position: right bottom;
  position: relative;
  padding-top: size-m(60);
  padding-bottom: size-m(215);
  background-size: auto size-m(370);

  @media screen and (min-width: 768px) {
    padding-top: size(150);
    padding-bottom: 0;
    background-size: size(1300);
  }

  .bg_decor {
    position: absolute;
    left: size(-50);
    z-index: 1;
    pointer-events: none;
    top: size(-275);
    width: size(1380);
  }

  .wrapper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: size-m(15);
    padding-right: size-m(15);

    @media screen and (min-width: 768px) {
      max-width: size(1580);
      padding-left: 0;
      padding-right: 0;
    }

    .item {
      display: flex;
      flex-wrap: wrap;

      &:nth-child(1) {
        padding-bottom: size(250);

        .pic {
          @media screen and (min-width: 768px) {
            order: 2;
          }

          ._btn_ {
            margin-left: auto;
          }
        }

        .text {

          @media screen and (min-width: 768px) {
            order: 1;
            padding-right: size(40);
          }
        }
      }

      &:nth-child(2) {
        @media screen and (min-width: 768px) {
          padding-bottom: size(150);

          .text {
            padding-left: size(110);
          }
        }
      }

      .pic {
        width: calc(100% + #{size-m(30)});
        position: relative;
        order: 2;
       // padding-left: size-m(15);
      //  padding-right: size-m(15);
      margin-left: size-m(-15);margin-right: size-m(-15);
        margin-top: size-m(15);

        @media screen and (min-width: 768px) {
          width: size(850);
          padding-left: 0;
          padding-right: 0;    margin-left: auto;margin-right: auto;
          margin-top: 0;
          order: unset
        }

        .slide_item {
          .item_pic {
            position: relative;

            img {
              width: 100%;
            }

            span {
              position: absolute;
              right: size(15);
              bottom: size(10);

              @media screen and (max-width: 768px) {
              right: size-m(5);
              bottom: size-m(5);
              font-size: size-m(13);
              }
            }
          }
        }

        ._btn_ {
          margin-top: size(10);
          display: none;
          justify-content: space-around;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.44);
          width: size(72);
          height: size(22);
          border-radius: size(14);
          position: relative;

          @media screen and (min-width: 768px) {
            display: flex;
          }

          &::before {
            content: "";
            width: size(16);
            height: 1px;
            background-color: #fff;
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
            }
          }
        }
        .prev_btn,
        .next_btn {
          width: size-m(26);
          height: size-m(26);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .prev_btn {
          left: size-m(-10);
        }

        .next_btn {
          right: size-m(-10);
        }
      }

      .bot{
          h2{
          &::before {
            @media screen and (min-width: 768px) {
              left: size(-605) !important;
            }
          }
        }

        h3{
          margin-bottom: size-m(20);
           @media screen and (min-width: 768px) {
              margin-bottom: size(0);
            }
        }
        }

      .text {
        width: 100%;
        order: 1;

        @media screen and (min-width: 768px) {
          width: calc(100% - size(850));
          order: unset
        }

        

        h2 {
          position: relative;
          font-weight: 700;
          font-size: size-m(25);
          letter-spacing: size-m(2.5);
          text-align: center;
          padding-bottom: size-m(5);
          margin-bottom: size-m(15);

          @media screen and (min-width: 768px) {
            font-size: size(60);
            line-height: size(90);
            letter-spacing: size(6);
            padding-left: size(30);
            margin-bottom: size(30);
            text-align: left;
          }

          &::before {
            content: "";
            background: #DCA435;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            width: size-m(228);
            height: size-m(5);
            bottom: 0;

            @media screen and (min-width: 768px) {
              bottom: unset;
              top: 0;
              width: size(17);
              height: 100%;
              left: size(-675);
            }
          }

          &::after {
            content: "";
            width: 100%;
            max-width: size(538);
            height: size(2);
            background: linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
            position: absolute;
            left: 0;
            bottom: 0;
            display: none;

            @media screen and (min-width: 768px) {
              display: block;
            }
          }
        }

        h3 {
          font-weight: 500;
          font-size: size-m(19);
          text-align: center;

          @media screen and (min-width: 768px) {
            font-size: size(36);
            margin-bottom: size(50);
          }
        }

        p {
          font-weight: 400;
          font-size: size-m(13);
          font-style: normal;
          line-height: 1.7;

          @media screen and (min-width: 768px) {
            font-size: size(15);
          }
        }

        .text_content {
          padding-left: size-m(15);
          padding-right: size-m(15);
          margin-top: size-m(25);

          @media screen and (min-width: 768px) {
            padding-left: 0;
            padding-right: 0;
            margin-top: 0;
          }

          .text_content_item {
            @media screen and (min-width: 768px) {
              display: flex;
              align-items: center;
            }

            &:nth-child(1) {
              margin-bottom: size-m(25);

              @media screen and (min-width: 768px) {
                margin-bottom: size(50);
              }
            }

            .label {
              background: #DCA435;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              width: 100%;
              border-radius: size-m(9);
              width: size-m(222);
              height: size-m(26);
              margin-left: auto;
              margin-right: auto;
              margin-bottom: size-m(5);

              @media screen and (min-width: 768px) {
                border-radius: size(9);
                width: size(157);
                height: size(80);
                margin-left: 0;
                margin-right: size(15);
                margin-bottom: 0;
              }

              span {
                font-weight: 900;
                font-size: size-m(14);

                br {
                  display: none;
                }

                @media screen and (min-width: 768px) {
                  font-size: size(20);

                  br {
                    display: block;
                  }
                }
              }
            }

            p {
              width: 100%;

              @media screen and (min-width: 768px) {
                width: calc(100% - size(157) - size(15));
              }
            }
          }


        }
      }
    }
  }
  .splide__arrows{background: #000;display: block;}
}
</style>
<style lang="scss">
@media screen and (max-width: 767px) {
.s5{
.splide{padding:0 8.5vw;}
.splide__arrows{display: flex;position: absolute;top:calc(50% - 1em);left: 0;right: 0;z-index: 10;height: 2em;width: 100%;
  border-radius: 1em;color:#fff;
  justify-content: space-between;
svg{ filter: brightness(0) invert(1);width: 1em;height: 2em;margin: auto;}
}
.splide__arrow {background: #0006;border-radius: 50%;height: 2em;width: 2em;}
.splide__arrow--prev{transform: scaleX(-1);margin: 0 1em 0 0;}

}  }
  @media screen and (min-width: 768px) {
.s5{
  .splide{padding:0 0 2.5em 0;}
  .splide__arrows{background: #0006;display: block;position: absolute;bottom:0;right: 0;z-index: 10;height: 2em;width: 5em;
    border-radius: 1em;
    text-align: center;color:#fff;
    &::before{content: "/";position: absolute;left:calc(50% - .2em);top: .1em;}
  svg{ filter: brightness(0) invert(1);width: 1em;height: 2em;}
}
.splide__arrow--prev{transform: scaleX(-1);margin: 0 1em 0 0;}

  }  }
</style>
