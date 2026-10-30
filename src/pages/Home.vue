<template>
 <div class="home">

<img class="bg" src="@/section/s1/bg.jpg">

<img class="bg-m" src="@/section/s1/bg-m.jpg">



      <S1 />
      <S2 />
      <Order />

</div>
</template>


<style lang="scss">

.home {
  position: relative;
  isolation: isolate;
  width: 100%;
}
/*::selection {
  background: rgba(255, 255, 255, 0.411);
  color: #1c36ad;
  
}*/

/* =========================
   背景
========================= */

.bg-m{display:none;}

.bg {
  position: absolute;
  top: 0;
  left: 0;

  width: auto;
  min-width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: left top;

  z-index: 0;
}


/* =========================
   內容
========================= */

.s1,
.s2,
.order {
  position: relative;
  z-index: 1;
}

.light-effect {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
}


/* =========================
   RWD
========================= */

@media(max-width: 767px) {

  .bg {
    display: none;
  }

 .bg-m {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  width: auto;
  min-width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: left top;

    z-index: 0;
    pointer-events: none;
  }


}

/* macOS Safari */
@supports (-webkit-hyphens: none) and (not (-webkit-touch-callout: none)) {
  .page-bg {
    filter: none !important;
  }
}

/* iOS Safari */
@supports (-webkit-touch-callout: none) {
  .page-bg {
    filter: none !important;
  }
}

@keyframes iosWater {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
  }

  50% {
    transform: scale(1.015) translate3d(0.5%, -0.3%, 0);
  }

  100% {
    transform: scale(1.01) translate3d(-0.5%, 0.4%, 0);
  }
}



</style>


<script setup>

import info from "@/info"

import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"

import { onMounted, ref } from "vue"

import AOS from "aos"


const isLoading = ref(true)

const gtmNoScript = ref('')

const config = ref({
  showNav: false
})




onMounted(() => {

  window.onload = function () {

    isLoading.value = false

    AOS.init()

  }

})

</script>