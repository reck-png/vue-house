<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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

function selectSlide(index) {
  console.log(index);
  no3.value = index
  splideRef3.value?.go(index) // 切換到指定 slide
}

const pic = ref(null)
const ball_svg = ref(null)
const line = ref(null);

function updateLinePosition() {
  //  window.innerWidth >= 786 &&
  if (
    pic.value &&
    ball_svg.value &&
    line.value
  ) {
    const container = pic.value;
    const ball = ball_svg.value;
    const ballRect = ball.getBoundingClientRect();
    const middleOfBall = ball.offsetTop + ballRect.height / 2;
    const distanceFromBottom = container.offsetHeight - middleOfBall;

    line.value.style.bottom = `${distanceFromBottom}px`;
    line.value.style.top = ''; // 清除 top
  }
}
onMounted(() => {
  updateLinePosition();

  if (splideRef3.value) {
    splideRef3.value.splide.on('moved', () => {
      no3.value = splideRef3.value?.splide.index;
    });
  }
});

onBeforeUnmount(() => {
  if (splideRef3.value) {
    splideRef3.value.splide.off('moved');
  }
});

</script>

<template>
  <article class="s6 relative" id="s6">
    <div class="title">
      <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <span class="font-['Noto_Serif_TC'] text-[#fff]">樸實真摯 雋永極美</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="49" viewBox="0 0 119 49" fill="none">
          <path
            d="M105.078 7.5037V0.0717773C91.7813 4.9612 75.9248 7.60901 59.255 7.60901C42.5853 7.60901 26.7438 4.97625 13.4321 0.0717773V7.5037C26.9998 12.1374 42.7811 14.6197 59.255 14.6197C75.729 14.6197 91.5103 12.1374 105.078 7.5037Z"
            fill="#DCA435" />
          <path
            d="M118.51 24.2186C99.7774 20.5779 79.7948 18.6672 59.2551 18.6672C38.7153 18.6672 18.7327 20.5779 0 24.2186V31.3497C14.7724 28.401 30.388 26.5806 46.4704 25.9487C40.432 33.155 28.2949 38.917 13.4472 41.5648V48.7259C33.5804 45.4613 49.1358 36.8409 55.0387 25.7231C56.4391 25.708 57.8546 25.6779 59.2551 25.6779C60.6555 25.6779 62.071 25.708 63.4714 25.7231C69.3744 36.8409 84.9298 45.4613 105.063 48.7259V41.5648C90.2153 38.917 78.0782 33.155 72.0397 25.9487C88.1222 26.5806 103.738 28.401 118.51 31.3497V24.2186Z"
            fill="#DCA435" />
        </svg>
        <span class="font-['Noto_Serif_TC'] text-[#fff]">統揚機構．統元建設</span>
      </h3>
      <p class="font-['Noto_Sans_TC'] text-[#fff]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        統元建設為統揚機構旗下子企業，近30年建設經驗，作品遍佈雙北。秉持「穩健踏實，真誠處事」的核心精神，<br>
        在建築設計上，堅守「細節至上，品質為先」的專業態度，匠心為客戶打造安心的溫馨家園。
      </p>
    </div>

    <div class="pic" ref="pic">
      <Splide ref="splideRef3" :options="{
        type: 'slide',
        autoplay: false,
        interval: 5000,
        speed: 1000,
        arrows: false,
        pagination: false,
        drag: true,
        perPage: 6,
        perMove: 1,
        rewind: true,
        gap: '20px',
        breakpoints: {
          768: {
            autoWidth: true,
            type: 'loop',
            focus: 'center',
          }
        }
      }">
        <SplideSlide class="slide" @click="selectSlide(0)" :class="{ 'pc-active': no3 === 0 }">
          <div class="slide_item">
            <div class="item_pic"><img src="@/section/s6/2024.webp" alt="pic"></div>
            <div class="text">
              <div class="year font-['Noto_Serif_TC'] text-[#DCA435]">2024</div>
              <div ref="ball_svg" class="ball">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#DCA435" />
                </svg>
              </div>
              <div class="ball_text">
                <h5 class="year font-['Noto_Sans_TC'] text-[#DCA435]">悠遊居</h5>
                <p class="year font-['Noto_Sans_TC'] text-[#fff]">三重市中心｜高坪效安心宅</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="slide" @click="selectSlide(1)" :class="{ 'pc-active': no3 === 1 }">
          <div class="slide_item">
            <div class="item_pic"><img src="@/section/s6/2020.webp" alt="pic"></div>
            <div class="text">
              <div class="year font-['Noto_Serif_TC'] text-[#DCA435]">2020</div>
              <div class="ball">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#DCA435" />
                </svg>
              </div>
              <div class="ball_text">
                <h5 class="year font-['Noto_Sans_TC'] text-[#DCA435]">陽明一會</h5>
                <p class="year font-['Noto_Sans_TC'] text-[#fff]">北市士林區｜國際半山豪邸</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="slide" @click="selectSlide(2)" :class="{ 'pc-active': no3 === 2 }">
          <div class="slide_item">
            <div class="item_pic"><img src="@/section/s6/2019.webp" alt="pic"></div>
            <div class="text">
              <div class="year font-['Noto_Serif_TC'] text-[#DCA435]">2019</div>
              <div class="ball">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#DCA435" />
                </svg>
              </div>
              <div class="ball_text">
                <h5 class="year font-['Noto_Sans_TC'] text-[#DCA435]">漾都心</h5>
                <p class="year font-['Noto_Sans_TC'] text-[#fff]">新莊副都心｜白系質感輕奢宅</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <!-- 
        <SplideSlide class="slide" @click="selectSlide(3)" :class="{ 'pc-active': no3 === 3 }">
          <div class="slide_item">
            <div class="item_pic"><img src="@/section/s6/2015.webp" alt="pic"></div>
            <div class="text">
              <div class="year font-['Noto_Serif_TC'] text-[#DCA435]">2015</div>
              <div class="ball">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#DCA435" />
                </svg>
              </div>
              <div class="ball_text">
                <h5 class="year font-['Noto_Sans_TC'] text-[#DCA435]">亞昕向上</h5>
                <p class="year font-['Noto_Sans_TC'] text-[#fff]">新莊副都心｜金質獎千坪奢邸</p>
              </div>
            </div>
          </div>
        </SplideSlide>
         -->

        <SplideSlide class="slide" @click="selectSlide(3)" :class="{ 'pc-active': no3 === 3 }">
          <div class="slide_item">
            <div class="item_pic"><img src="@/section/s6/2011.webp" alt="pic"></div>
            <div class="text">
              <div class="year font-['Noto_Serif_TC'] text-[#DCA435]">2011</div>
              <div class="ball">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#DCA435" />
                </svg>
              </div>
              <div class="ball_text">
                <h5 class="year font-['Noto_Sans_TC'] text-[#DCA435]">陽明上隱</h5>
                <p class="year font-['Noto_Sans_TC'] text-[#fff]">北市北投區｜日式極致藝品宅</p>
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide class="slide" @click="selectSlide(4)" :class="{ 'pc-active': no3 === 4 }">
          <div class="slide_item">
            <div class="item_pic"><img src="@/section/s6/2008.jpg" alt="pic"></div>
            <div class="text">
              <div class="year font-['Noto_Serif_TC'] text-[#DCA435]">2008</div>
              <div class="ball">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#DCA435" />
                </svg>
              </div>
              <div class="ball_text">
                <h5 class="year font-['Noto_Sans_TC'] text-[#DCA435]">克拉美地</h5>
                <p class="year font-['Noto_Sans_TC'] text-[#fff]">北市北投區｜23層SRC鋼骨制震</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="slide" @click="selectSlide(5)" :class="{ 'pc-active': no3 === 5 }">
          <div class="slide_item">
            <div class="item_pic"><img src="@/section/s6/2006.webp" alt="pic"></div>
            <div class="text">
              <div class="year font-['Noto_Serif_TC'] text-[#DCA435]">2006</div>
              <div class="ball">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#DCA435" />
                </svg>
              </div>
              <div class="ball_text">
                <h5 class="year font-['Noto_Sans_TC'] text-[#DCA435]">仁愛逸仙</h5>
                <p class="year font-['Noto_Sans_TC'] text-[#fff]">北市信義區｜仁愛路名家藝邸</p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>

      <div class="line" >
        <div class="splide_btn prev" @click="goPrev3">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path d="M8 1L1 7.81081L8 15" stroke="#DCA435" stroke-linecap="round" />
          </svg>
        </div>
        <div class="splide_btn next" @click="goNext3">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path d="M1 1L8 7.81081L1 15" stroke="#DCA435" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>


    <img class="text" src="@/section/s6/text.svg" alt="pic">

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  background: url(./s6/bg_decor.webp) #292A2B 50% / cover no-repeat;
  background-repeat: no-repeat;
  background-position: top left;

  padding-top: size-m(200);
  padding-left: size-m(0);
  padding-right: size-m(0);
  padding-bottom: size-m(10);
  background-size: 100%;

  @media screen and (min-width: 768px) {
    padding-top: size(235);
    padding-left: size(80);
    padding-right: size(80);
    padding-bottom: size(120);
    background-size: size(880);
  }

  .title {
    padding-bottom: size-m(25);
    padding-left: size-m(15);
    padding-right: size-m(15);

    @media screen and (min-width: 768px) {
      padding-bottom: size(50);
      padding-left: 0;
      padding-right: 0;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: size-m(15);

      @media screen and (min-width: 768px) {
        padding-bottom: size(12);
      }

      span {
        font-weight: 500;
        font-size: size-m(15);

        @media screen and (min-width: 768px) {
          font-size: size(36);
        }
      }

      svg {
        width: size-m(50);
        margin-left: size-m(15);
        margin-right: size-m(15);

        @media screen and (min-width: 768px) {
          margin-left: size(28);
          margin-right: size(28);
          width: size(120);
        }
      }
    }

    p {
      font-weight: 400;
      text-align: center;
      font-size: size-m(13);

      @media screen and (min-width: 768px) {
        font-size: size(15);
      }
    }
  }

  .pic {
    position: relative;

    @media screen and (min-width: 768px) {
      padding-left: size(90);
      padding-right: size(90);
    }

    .splide__track {
      @media screen and (min-width: 768px) {
        overflow: visible;
      }
    }

    .splide__slide {
      @media screen and (max-width: 767px) {
        width: size-m(177);
      }

      cursor: pointer;

      .slide_item {
        .item_pic {
          position: relative;

          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            background-color: #000;
            opacity: 0.6;
            transition: 0.3s;
          }

          img {
            width: 100%;
          }
        }

        .text {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          margin-top: size-m(20);
          max-width: unset;
          width: 100%;

          @media screen and (min-width: 768px) {
          //  width: size(60);
            margin-top: size(20);
            padding-top: size(10);
            margin-top: 0;
          }

          .year {
            opacity: 0.4;
            transition: 0.3s;
            font-weight: 500;
            padding-bottom: size-m(10);
            font-size: size-m(20.336);
            letter-spacing: size-m(0.407);

            @media screen and (min-width: 768px) {
              font-size: size(23.652);
              letter-spacing: size(0.473);
              padding-bottom: size(5);
            }
          }

          .ball {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            width: size-m(15);
            height: size-m(15);

            @media screen and (min-width: 768px) {
              width: size(17);
              height: size(17);
            }

            svg {
              margin-left: auto;
              margin-right: auto;

            }


          }

          .ball_text {
            transition: 0.3s;
            text-align: center;
            opacity: 0;
            margin-top: size-m(15);


            @media screen and (min-width: 768px) {
              // text-align: left;
              // width: size(210);
              height: size(55);
              margin-top: size(10);
            }

            h5 {
              font-weight: 500;
              font-size: size-m(20.336);
              letter-spacing: size-m(0.407);

              @media screen and (min-width: 768px) {
                font-size: size(16);
                letter-spacing: size(0.8);
              }
            }

            p {font-size: size-m(14);
              font-weight: 350;
              margin-bottom: 1.5em;

              @media screen and (min-width: 768px) {
                font-size: size(14);
              }
            }
          }
        }
      }

      @media screen and (max-width: 767px) {
        &.is-active {
          .slide_item {
            .item_pic {
              &::before {
                opacity: 0;
              }
            }

            .text {
              .year {
                opacity: 1;
              }

              .ball_text {
                opacity: 1;
              }
            }

          }
        }
      }

      @media screen and (min-width: 768px) {
        &.pc-active {
          .slide_item {

            .text {
              .year {
                opacity: 1;
              }

              .ball_text {
                opacity: 1;
              }
            }

          }
        }

        &:hover {
          .slide_item {
            .item_pic {
              &::before {
                opacity: 0;
              }
            }

            .text {
              .year {
                opacity: 1;
              }

              .ball_text {
                opacity: 1;
              }
            }

          }
        }
      }

    }

    .line {
      width: calc(100% - size(60));
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      background: linear-gradient(90deg, rgba(220, 164, 53, 0.00) 0%, #DCA435 15.5%, #DCA435 85%, rgba(220, 164, 53, 0.00) 100%);
      z-index: 1;
      height: size-m(1);
      bottom: size-m(135);

      @media screen and (min-width: 768px) {
        height: size(1);
        bottom: size(72.5);
      }

      .splide_btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &.prev {
          left: 0;
        }

        &.next {
          right: 0;
        }
      }
    }
  }

  .text {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - size-m(30));

    margin-top: size-m(30);

    @media screen and (min-width: 768px) {
      width: 100%;
      max-width: size(820);
      margin-top: size(60);
    }
  }
}
</style>
