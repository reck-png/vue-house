<template>
  <article class="s1 relative" id="s1">

	<img 
      class="s1-bg"
      src="@/section/s1/1020-s1-bg.jpg"
    />

    
	<img 
      class="s1-bg-m"
      src="@/section/s1/1020-bg-m-2-spw.jpg"
    />

  <img 
      class="s1-h1"
      src="@/section/s1/s1-h1.png"
    />

    
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';


.s1 {
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  }

.s1-bg-m,.s1-h1 {
  display:none;
}

.s1-bg {
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 800px) {

 .s1 {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: auto;
  }

.s1-bg-m {
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
}

.s1-h1 {
  position: absolute;
  display: flex;
  width: 100%;
  height: auto;
  top:40vw;
  object-fit: cover;
  object-position: center top;
  z-index: 2;
}

.s1-bg {
  display: none;

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
</script>