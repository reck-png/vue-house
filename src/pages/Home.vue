<template>

      <S1 />
      <Order />

</template>


<style lang="scss">


.s1-sec,
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

  .bg-pc {
    display: none;
  }

  .bg-mobile {
    display: block;
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