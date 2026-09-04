<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
  <!--navigate
  <Nav v-if="config.showNav" />-->
<div class="home bg-[#a9a09b] font-['Noto_Sans_TC',sans-serif]">
  <section class="s1-sticky">
    <S1 />
  </section>

<section
  class="order-cover"
  :class="{ 'order-show': orderShow }"
  ref="orderCover"
>
  <div class="order-animation">
    <Order />
  </div>
</section>
</div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an1 {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes orderUp {
  0% {
    transform: translateY(80px);
    opacity: 0;
  }

  60% {
    transform: translateY(-10px);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.home {
  position: relative;
}

.s1-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 1;
}

.order-cover {
  position: relative;
  z-index: 2;
  background: #66605df8;
  box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.08);
}

.order-animation {
  position: relative;
  top: 60px;
  opacity: 0;

  transition:
    top 1s cubic-bezier(.175, .885, .32, 1.275),
    opacity 0.5s ease;
}

.order-show .order-animation {
  top: 0;
  opacity: 1;
}

.mob {
  display: none;
}

.pc {
  display: block;
}

.bg {
  position: absolute;
  width: 100%;
  height: 0;
  top: 0;
  left: 0;

  span {
    position: absolute;
    display: block;
    width: 1em;
    height: 1em;
    background: radial-gradient(ellipse at center, #fff 0%, #fff6 20%, #fff3 30%, #fff0 50%);
    transform: scale(.5);
    opacity: 0;
    animation: an1 2s ease-in-out infinite alternate;

    &:nth-child(2) {
      animation-delay: 1s;
    }

    &:nth-child(3) {
      animation-delay: 1.5s;
    }
  }
}


.bgh {
  opacity: .3;
  margin: 0 auto;
  text-align: center;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.home>.bgh {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

.caption {
  @apply absolute;
  right: 1em;
  bottom: .5em;
  font-weight: 300;
  font-size: size(15);
  color: #FFF;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
}


.txt {
  position: relative;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.7;
  width: 100%;

  .title-sub {
    font-size: size(20);
    text-align: center;
    margin-top: 2em;
    font-weight: 500;
  }

  .title {
    font-size: 2.2em;
    margin: 0em 0 0em;
    line-height: 1.4;
    font-weight: 700;
    color: #fff;
    text-align: center;
    /*
    &::after,
    &::before {
      content: "";
      width: 15.7em;
      height: 1px;
      background: #fff;
      display: inline-block;
      vertical-align: middle;
      margin: auto 1em;
    }
      */
  }

  .subtitle {
    font-size: size(30);
    font-weight: 700;
    margin: 0 0 .8em;
    color: #fff;
    line-height: 1.5;
  }

  .desc {
    margin: 0 0 1em;

    b {
      color: #C9A063;
    }
  }
}

.slider {
  @apply relative;

  .arrows {
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0;
    height: 100%;
    pointer-events: none;

    .prev,
    .next {
      width: 5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;

      justify-content: center;
      align-items: center;
      background: url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
      background-size: 50% auto;
      transition: background-color .5s;

      &:hover {
        background-color: #0003;
      }
    }

    .prev {
      transform: scaleX(-1);
    }

    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }

  .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: 0;
    gap: .5em;
    color: #fff;

    li {
      button {
        @apply rounded-full hover:opacity-50;
        width: 1em;
        height: 1em;
        border: 2px solid currentColor;

        &.is-active {
          background: currentColor;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {


  .mob {
    display: block;
  }

  .pc {
    display: none;
  }


  .home>.bgh {
    width: 100%;
    text-align: center;
    left: 0%;
    top: 0%;
  }

  .caption {
    font-size: sizem(12);
  }

  .txt {
    .title-sub {
      font-size: sizem(15);
      text-align: center;
    }

    .title {
      font-size: sizem(23);
      text-align: center;

      &::after,
      &::before {
        width: 0em !important;
        position: absolute;
      }
    }

    .subtitle {
      font-size: sizem(20);
      text-align: center
    }

    .desc {
      font-size: sizem(14);
    }
  }

  .slider {
    @apply relative;

    .arrows {

      .prev,
      .next {
        width: 8%;
      }
    }

    .splide__pagination {
      @apply absolute flex justify-center w-full;
      display: none;
      bottom: sizem(6.7);
      gap: sizem(2.5);

      li {
        button {
          @apply rounded-full hover:opacity-50;
          width: sizem(10.3);
          height: sizem(3.34);
          border: sizem(1) solid #fff;

          &.is-active {
            @apply bg-white;
          }
        }
      }
    }
  }
}

</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import Order from "@/section/order.vue"
// import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';



const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
})

const orderShow = ref(false)
const orderCover = ref(null)

onMounted(() => {
  window.onload = function () {
    isLoading.value = false

    AOS.init({
      offset: 0,
      duration: 800
    });
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        orderShow.value = true
      } else {
        orderShow.value = false
      }
    },
    {
      threshold: 0.05
    }
  )

  if (orderCover.value) {
    observer.observe(orderCover.value)
  }
})
</script>
