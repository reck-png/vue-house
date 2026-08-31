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


const splideRef2 = ref(null)
const no2 = ref(0);

const goPrev2 = () => {
  splideRef2.value?.splide.go('-1')
  no2.value = splideRef2.value?.splide.index;
}

const goNext2 = () => {
  splideRef2.value?.splide.go('+1')
  no2.value = splideRef2.value?.splide.index;
}


const splideRef3 = ref(null)
const no3 = ref(0);

const goPrev3 = () => {
  splideRef3.value?.splide.go('-1')
  no3.value = splideRef3.value?.splide.index;
}

const goNext3 = () => {
  splideRef3.value?.splide.go('+1')
  no3.value = splideRef3.value?.splide.index;
}


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

  if (splideRef3.value) {
    splideRef3.value.splide.on('moved', () => {
      no3.value = splideRef3.value?.splide.index;
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

  if (splideRef3.value) {
    splideRef3.value.splide.off('moved');
  }
});

</script>

<template>
  <article class="s3 relative" id="s3">

    <div class="wrapper">
      <div class="title font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="500">
        <span class="hidden md:block">西區門戶 國門首席 璀璨時代 極刻啟程</span>
        <span class="block md:hidden">
          西區門戶 國門首席<br>
          璀璨時代 極刻啟程
        </span>
      </div>
      <div class="content">
        <div class="item">

          <div class="pic">
            <Splide ref="splideRef1" :options="{
              type: 'slide',       // 使用 slide 模式而非 fade
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
                  <div class="item_pic"><img src="@/section/s3/l_pic01.jpg" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">雙子星3D透視圖</span>
                  </div>

                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/l_pic02.jpg" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">雙子星3D透視圖</span>
                  </div>

                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/l_pic03.jpg" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">中華郵政塔3D透視參考圖</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/l_pic06.jpg" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">明日台北珵3D透視參考圖</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/l_pic07.jpg" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">市議會舊址3D透視參考圖</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/l_pic08.jpg" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">皇翔台汽北站3D透視參考圖</span>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/l_pic04.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">西區門戶意象</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/l_pic05.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">一橋北市 (忠孝橋/中興橋)意象</span>
                  </div>
                </div>
              </SplideSlide>
            </Splide>

            <div class="_btn_ hidden md:block">
              <div class="splide_btn prev" @click="goPrev1">
                <img src="@/section/s3/prev.svg" alt="prev">
              </div>
              <div class="splide_btn next" @click="goNext1">
                <img src="@/section/s3/next.svg" alt="next">
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
          </div>
          <div class="text">
            <h3 class="hidden md:block font-['Noto_Sans_TC'] text-[#EEBA51]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              <span class="hidden md:block">GATEGATEWAY TO THE NATION</span>
              <img class="block md:hidden" src="@/section/s3/title01.svg" alt="title">
            </h3>
            <h4 class="hidden md:block font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">六鐵共構  台北中央車站</h4>
            <p class="hidden md:block font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              台北中央車站-雙子星國門特區，高級住宅、國際商務、購物休閒、<br>
              五星級飯店一應俱全，台鐵、捷運、高鐵、機場捷運，四通八達，<br>
              國家門戶之首，西區崛起。
            </p>

            <h3 class="block md:hidden font-['Noto_Sans_TC'] text-[#EEBA51]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              <span class="hidden md:block">DRAWS GLOBAL ATTENTION</span>
              <img class="block md:hidden" src="@/section/s3/title02.svg" alt="title">
            </h3>

            <h4 class="block md:hidden font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">首都璀璨  台北雙子星</h4>
            <p class="block md:hidden font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              西區即刻顛覆，東軸西轉，台北雙子星大樓，挹注建設金額達606億，<br>
              規模超越台北101，西區嶄新門戶，萬眾焦點，舉世矚目。
            </p>
          </div>

        </div>

        <div class="item">

          <div class="pic">
            <Splide ref="splideRef2" :options="{
              type: 'slide',       // 使用 slide 模式而非 fade
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
                    <img src="@/section/s3/r_pic01.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">台北車站實景圖</span>
                  </div>

                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/r_pic02.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">台北車站實景圖</span>
                  </div>

                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/r_pic03.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">台北車站實景圖</span>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/r_pic04.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">台北車站實景圖</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/r_pic5.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">台北車站實景圖</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide class="slide">
                <div class="slide_item">
                  <div class="item_pic"><img src="@/section/s3/r_pic06.webp" alt="pic">
                    <span class="font-['Noto_Sans_TC'] text-[#fff]">台北車站實景圖</span>
                  </div>
                </div>
              </SplideSlide>
            </Splide>

            <div class="_btn_ hidden md:block">
              <div class="splide_btn prev" @click="goPrev2">
                <img src="@/section/s3/prev.svg" alt="prev">
              </div>
              <div class="splide_btn next" @click="goNext2">
                <img src="@/section/s3/next.svg" alt="next">
              </div>
            </div>

            <div class="prev_btn block md:hidden" @click="goPrev2">
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

            <div class="next_btn block md:hidden" @click="goNext2">
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

          </div>
          <div class="text hidden md:block">
            <h3 class="hidden md:block font-['Noto_Sans_TC'] text-[#EEBA51]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              <span class="hidden md:block">DRAWS GLOBAL ATTENTION</span>
              <img class="block md:hidden" src="@/section/s3/title02.svg" alt="title">
            </h3>

            <h4 class="hidden md:block font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">首都璀璨  台北雙子星</h4>
            <p class="hidden md:block font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              西區即刻顛覆，東軸西轉，台北雙子星大樓，挹注建設金額達606億，<br>
              規模超越台北101，西區嶄新門戶，萬眾焦點，舉世矚目。
            </p>

            <h3 class="block md:hidden font-['Noto_Sans_TC'] text-[#EEBA51]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              <span class="hidden md:block">GATEGATEWAY TO THE NATION</span>
              <img class="block md:hidden" src="@/section/s3/title01.svg" alt="title">
            </h3>
            <h4 class="block md:hidden font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">六鐵共構  台北中央車站</h4>
            <p class="block md:hidden font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="500">
              台北中央車站-雙子星國門特區，高級住宅、國際商務、購物休閒、<br>
              五星級飯店一應俱全，台鐵、捷運、高鐵、機場捷運，四通八達，<br>
              國家門戶之首，西區崛起。
            </p>
          </div>

        </div>
      </div>

      <div class="mrt" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
        <img class="base" src="@/section/s3/MRT.png" />

      </div>

      <div class="content_b">

        <div class="text">
          <h3 class="font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="500">極速交通</h3>

          <div class="light" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <img class="hidden md:block" src="@/section/s3/light.webp" />
            <img class="block md:hidden" src="@/section/s3/light_m.webp" />
          </div>

          <h4 class="font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="500">A2機捷三重站 ╳ 新蘆線三重站雙捷匯聚</h4>

          <p class="font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            1站直達台北車站，快速接軌高鐵與全台捷運網絡，通勤無憂。一線直通桃園國際機場，<br>
            隨時啟程，連結世界零時差。便捷交通，讓繁華與國際盡在轉瞬之間！
          </p>
        </div>

        <div class="pic">
          <Splide ref="splideRef3" :options="{
            type: 'loop',
            autoplay: true,
            interval: 5000,
            speed: 1000,         // 切換速度
            arrows: false,        // 顯示左右箭頭 ✅
            pagination: false,    // 顯示下方小點 ✅
            drag: true,          // 可拖曳
            perPage: 3,          // 每頁3張
            perMove: 3,
            rewind: true,         // 可循環播放
            gap: '15px',
            breakpoints: {
              768: {
                autoWidth: true,
                focus: 'center',
                perMove: 1,
              }
            }
          }">
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic">
                  <img src="@/section/s3/b_pic00.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">台北車站(台灣高鐵)示意圖</span>
                </div>

              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s3/b_pic01.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">捷運三重站實景圖</span>
                </div>

              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s3/b_pic02.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">捷運三重站實景圖</span>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s3/b_pic03.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">捷運三重站實景圖</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s3/b_pic04.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">捷運三重站實景圖</span>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide class="slide">
              <div class="slide_item">
                <div class="item_pic"><img src="@/section/s3/b_pic05.webp" alt="pic">
                  <span class="font-['Noto_Sans_TC'] text-[#fff]">捷運三重站實景圖</span>
                </div>
              </div>
            </SplideSlide>
          </Splide>

          <div class="_btn_">
            <div class="splide_btn prev" @click="goPrev3">
              <img src="@/section/s3/prev.svg" alt="prev">
            </div>
            <div class="splide_btn next" @click="goNext3">
              <img src="@/section/s3/next.svg" alt="next">
            </div>
          </div>
        </div>

      </div>
    </div>

    <img class="bg_decor1 hidden md:block" src="@/section/s3/bg_decor1.webp" alt="pic">
    <img class="bg_decor1 block md:hidden" src="@/section/s3/bg_decor1m.webp" alt="pic">

    <img class="bg_decor2 hidden md:block" src="@/section/s3/bg_decor2.webp" alt="pic">
    <img class="bg_decor2 block md:hidden" src="@/section/s3/bg_decor2m.webp" alt="pic">
        <img class="blend" src="@/section/s3/MRT_m.png" />

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  width: 100%;
  position: relative;
  box-sizing: border-box;

  .wrapper {
    padding-top: size-m(50);
    padding-bottom: size-m(50);
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
      padding-top: size(150);
      padding-bottom: size(50);
    }

    .title {
      font-weight: 500;
      text-align: center;
      font-size: size-m(25);
      padding-bottom: size-m(40);
      line-height: 1.5;

      @media screen and (min-width: 768px) {
        font-size: size(36);
        padding-bottom: size(65);
        line-height: unset
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: size-m(30);
      padding-right: size-m(30);

      @media screen and (min-width: 768px) {
        max-width: size(1580);
        padding-left: 0;
        padding-right: 0;
      }

      .item {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;

        @media screen and (max-width: 767px) {
          margin-bottom: size-m(50);
        }

        .pic {
          width: 100%;
          position: relative;

          @media screen and (max-width: 767px) {
            order: 1 !important;
          }



          .slide_item {
            .item_pic {
              position: relative;

              img {
                width: 100%;
              }

              span {
                position: absolute;
                bottom: size-m(7.5);
                right: size-m(5);

                text-shadow: 0px 4px 4px #000;
                font-size: size-m(12);
                font-weight: 500;

                @media screen and (min-width: 768px) {
                  font-size: size(12);
                  bottom: size(15);
                  right: unset;
                  left: size(10);
                }
              }


            }
          }

          @media screen and (min-width: 768px) {
            ._btn_ {
              margin-top: size(10);
              display: flex;
              justify-content: space-around;
              align-items: center;
              background-color: rgba(0, 0, 0, 0.44);
              width: size(72);
              height: size(22);
              border-radius: size(14);
              position: relative;

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
          }

          .prev_btn,
          .next_btn {
            width: size-m(26);
            height: size-m(26);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            svg {
              width: 100%;
              height: 100%;
            }
          }

          .prev_btn {
            left: size-m(-26);
          }

          .next_btn {
            right: size-m(-26);
          }
        }

        .right {
          margin-bottom: size(50);
          margin-top: size(40);

          @media screen and (max-width: 767px) {
            margin-bottom: size-m(0);
            margin-top: size(0);
          }
        }

        .text {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          @media screen and (max-width: 767px) {
            order: 2 !important;
          }

          h3 {
            font-weight: 300;
            width: 100%;
            order: 1;
            font-size: size-m(12);
            letter-spacing: size-m(7.5);
            margin-top: size-m(15);
            margin-bottom: size-m(10);

            img {
              width: 100%;
            }

            @media screen and (max-width: 767px) {
              order: 1 !important;
            }

            @media screen and (min-width: 768px) {
              font-size: size(20);
              letter-spacing: 0.87em;
              margin-top: 0;
              margin-bottom: 0;
            }
          }

          h4 {
            font-weight: 800;
            width: 100%;
            order: 2;
            margin-bottom: size-m(10);

            @media screen and (max-width: 767px) {
              order: 2 !important;
            }

            @media screen and (min-width: 768px) {
              font-size: size(20);
              margin-bottom: 0;
            }
          }

          p {
            font-weight: 400;
            width: 100%;
            order: 3;
            font-size: size-m(13);

            @media screen and (max-width: 767px) {
              order: 3 !important;

              br {
                display: none;
              }
            }

            @media screen and (min-width: 768px) {
              font-size: size(15);
            }
          }
        }

        &:nth-child(1),
        &:nth-child(2) {
          width: 100%;

          @media screen and (min-width: 768px) {
            width: calc(50% - size(7.5));
          }
        }

        &:nth-child(1) {
          @media screen and (min-width: 768px) {
            margin-right: size(15);
          }

          .text {
            @media screen and (min-width: 768px) {
              padding-left: size(60);
            }

            h4 {
              order: 1;

              @media screen and (min-width: 768px) {
                margin-bottom: size(10);
                padding-left: size(100);
              }
            }

            p {
              order: 2;

              @media screen and (min-width: 768px) {
                margin-bottom: size(35);
                padding-left: size(100);
              }
            }

            h3 {
              order: 3;
            }

          }

        }

        &:nth-child(2) {
          .pic {
            order: 2;

            ._btn_ {
              margin-left: auto;

            }
          }

          .text {
            order: 1;
            padding-left: size(35);

            @media screen and (min-width: 768px) {
              margin-top: size(60);
              margin-bottom: size(50);

              h3 {
                margin-bottom: size(45);
              }

              h4 {
                margin-bottom: size(15);
              }
            }
          }
        }

      }

    }

    .mrt {
      position: relative;
      overflow: hidden;
      width: size-m(465);
      height: size-m(95);
      left: size-m(-170);

      // transform: translateX(-50%);

      @media screen and (min-width: 768px) {
        width: size(1299);
        height: size(263);
        left: size(-150);
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }

    .content_b {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
      margin-top: size-m(25);

      @media screen and (min-width: 768px) {
        max-width: size(1580);
        margin-top: 0;
      }

      .text {
        padding-left: size-m(30);
        padding-right: size-m(30);

        @media screen and (min-width: 768px) {
          padding-left: 0;
          padding-right: 0;
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
        .slide_item {

          .item_pic {
            position: relative;

            img {
              width: 100%;
            }

            span {
              position: absolute;
              bottom: size-m(5);
              right: size-m(5);
              font-size: size-m(13);

              @media screen and (min-width: 768px) {
                font-size: size(12);
                bottom: size(10);
                right: size(10);
              }
            }
          }

          // span {
          //   position: absolute;
          //   bottom: size(15);
          //   right: size(10);
          // }

          @media screen and (max-width: 767px) {
            width: size-m(217);
          }


        }


        ._btn_ {
          margin-left: auto;
          margin-right: auto;
          margin-top: size-m(15);
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.44);
          width: size-m(72);
          height: size-m(22);
          border-radius: size-m(14);
          position: relative;

          @media screen and (min-width: 768px) {
            width: size(72);
            height: size(22);
            border-radius: size(14);
            margin-top: size(10);
          }

          &::before {
            content: "";
            width: size-m(16);
            height: 1px;
            background-color: #fff;
            transform: rotate(119.74deg);
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;

            @media screen and (min-width: 768px) {
              width: size(16);
            }
          }

          .splide_btn {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            img {
              width: size-m(7);

              @media screen and (min-width: 768px) {
                width: size(7);
              }
            }
          }
        }
      }

    }
  }

  .bg_decor1 {
    position: absolute;
    left: 0;
    top: size-m(-100);
    width: 100%;

    @media screen and (min-width: 768px) {
      top: size(-400);
      width: auto;
    }
  }
  .blend {
  mix-blend-mode: color-dodge;
    position: absolute;
    left:size-m(-250);;z-index: 3;
    top: size-m(930);
    width: size-m(600);
    @media screen and (min-width: 768px) {
    top: size(1100);
    left: 0;
    width: size(1166);

    }
  }
  .bg_decor2 {
    position: absolute;
    right: 0;
    top: size-m(800);
    width: 100%;

    @media screen and (min-width: 768px) {
      top: size(700);
      width: auto;
    }
  }
}
</style>
