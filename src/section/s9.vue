<template>
  <article class="s9 relative" id="s9">
		<img src="./s1/logo.svg" class="logo">
		<img src="./s9/l.png" class="l">
		<img src="./s9/txt.svg" class="txt">
    
  </article>
</template>

<style lang="scss" scoped>  
@use '@/assets/style/function.scss' as *;
.s9 {
 // @apply relative w-full h-screen;
  // height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  font-size:size(40);
  color: #FFF;
  line-height: 1.5;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;


  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: 0.0;z-index: 50;}
  .logo{ margin: 1em auto 0em auto ;width: size(617);}
  .l{width: size(1077); margin: .8em auto 1.3em auto;
  }
  .txt{width: size(1077);}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(604);
    font-size:sizem(23);
    .logo{height:auto;width:sizem(200);margin: -.5em auto 0em auto }
    .l{height:auto;width:sizem(290);margin: .6em auto .8em auto;}
    .txt{height:auto;width:sizem(290);}
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