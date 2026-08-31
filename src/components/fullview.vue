<template>
  <div class="viewbox" ref="viewbox">
    <img ref="viewImg" src="@/section/s2/map.jpg" alt="" srcset="">
    <div class="mask" v-bind:class="{ hide: swiped }" v-if="$isMobile()">
      <img src="@/components/fullview/finger.png" alt="" srcset="">
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox {
  position: relative;
  width: 100%;
  // height: 100%;
  background: #eee;
  height: calc(100vh + 100px);

  >img {
    height: 100%;
    // max-height: calc(100vh - 250px);
    max-width: unset;
     // background: url("@/section/s2/map.jpg") center;
      background-size: cover;
  }


  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    opacity: 1;
    transition: all 1s;
    background-color: rgba($color: #008DD5, $alpha: 0.5);

    img {
      height: 47px;
    }

    &.hide {
      opacity: 0;
    }
  }

}
</style>
<script setup>
import BScroll from '@better-scroll/core';
import { onMounted, ref, computed, getCurrentInstance } from 'vue';

const viewbox = ref();
const viewImg = ref();
const swiped = ref(false);
const offsetRatio = 2.57;

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

onMounted(() => {
  viewImg.value.addEventListener('load', () => {
    if (isMobile.value) {
      let scroll = new BScroll(viewbox.value, {
        probeType: 2,
        scrollX: true,
        scrollY: true,
        disableTouch: false,
        disableMouse: false,
        bindToWrapper: true,
        eventPassthrough: "vertical",
        bounce: false,
      });

      scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);
      setTimeout(() => {
        scroll.on("scroll", () => {
          swiped.value = true;
        });
      }, 1000);
    }
  });
});
</script>