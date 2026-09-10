<template>
  <section class="s1">

<div class="s1-pc">
    <img
        class="s1-bg-pic"
        src="@/section/s1/s1-bg.jpg">

    <div class="Head" >
        <img
            class="H1"
            src="@/section/s1/LOGO.svg"
            alt="詮美湛"
            data-aos="zoom-out"
            data-aos-offset="0"
            data-aos-delay="520"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="true"
            >

        <div class="HD">
             <img
                class="H2"
                src="@/section/s1/H2.svg"
                alt="一橋台北靜隱集美"  
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="true">

            <div class="p5group"
                        alt="詮美湛"
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="true"
            >    
                <img
                    class="p5"
                    src="@/section/s1/H3.svg"
                    alt="簽訂5%工程期0付款">

                <img class="p5light"
                    src="@/section/s1/new-light.png">
            </div>
        </div>
    </div>

    <div class="right-side">
        <img class="bl"
        src="@/section/s1/bl.png">

        <img class="bl-light"
        src="@/section/s1/bl-light.png">
    </div>    

    <p class="3D">3D外觀透視示意圖</p>
</div>


<div class="s1-m">
    <img
        class="s1-bg-pic-m"
        src="@/section/s1/s1-bg-m.jpg">

    <div class="Head-m">
        <img
            class="top-m"
            src="@/section/s1/top-m.svg"
            alt="一橋台北靜隱集美">
        <img
            class="LOGO-m"
            src="@/section/s1/LOGO.svg"
            alt="詮美湛">
        <img
            class="H2-m"
            src="@/section/s1/H2-m.svg"
            alt="均質35坪純3房">
        <img
            class="5p-m"
            src="@/section/s1/5p-m.svg"
            alt="簽訂5%工程期0付款">
         <img class="5light-m"
            src="@/section/s1/light.png">
    </div>

    <div class="right-side">
        <img class="bl-m"
        src="@/section/s1/bl.png">

        <img class="bl-light-m"
        src="@/section/s1/s1-light.svg">
    </div> 
    
    <p class="3D-m">3D外觀透視示意圖</p>
</div>




  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  position: relative;
  width: auto;
  height: auto;}
  
  @media screen and (min-width:768px) {

    .s1-m{display:none;}

    .s1-pc{
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .s1-bg-pic{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -50;
        margin-top: -120px;
    }

    .Head{
        position: absolute;
        display: flex;
        width: clamp(302px, 40vw, 738px);
        flex-direction: column;
        align-items: center;
        gap: 72px;
        margin-top:120px;
        margin-left:clamp(0px, 16vw, 302px);
    }

    .HD{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 34px;
        align-self: stretch;
    }

    .H2{
        z-index: 1;
    }

   .p5light {
    position: absolute;

    left: clamp(50px, 5.2vw, 95px);
    top: clamp(-25px, -7.8vw, -120px);

    width: clamp(110px, 8vw, 154px);
    height: clamp(110px, 8vw, 154px);

    margin: 0;

    mix-blend-mode: screen;

    transform-origin: center center;
    animation: p5-natural-light 7s ease-in-out infinite;

    will-change: transform, opacity;
    pointer-events: none;
}

    .p5group {
    position: relative;

    transform-origin: center center;
    animation: p5-bounce 4s ease-in-out infinite;
    will-change: transform;
    z-index: 0;
}

.p5 {
    display: block;
    width: auto;
    height: auto;
}

    .right-side{
        
        position: absolute;
        width: 100%;
        height: auto;
    }


    .bl{
        position: absolute;
        width: 1542px;
        height: auto;
        aspect-ratio: 241/128;
        margin-top: 100px;
        margin-left: 680px;
        z-index: -5;
    }

    .bl-light{
        position: absolute;
        width: 665px;
        height: auto;
        aspect-ratio: 241/128;
        margin-top: 64px;
        margin-left: 1312px;
        z-index: -4;
        mix-blend-mode: screen;
    }

}


@media screen and (max-width:1022px){

    .s1-pc {
        display: none;
    }

    .s1-m {
        position: relative;
        width: 100%;
        height: 100vh;
        display: block;
        overflow: hidden;
    }

    .s1-bg-pic-m {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;

        display: block;
        object-fit: cover;
        object-position: center top;
    }

}


@keyframes p5-bounce {
    0%,
    100% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.02);
    }

    35% {
        transform: scale(0.98);
    }

    50% {
        transform: scale(1.02);
    }

    70% {
        transform: scale(1);
    }
}

@keyframes p5-natural-light {

    0% {
        opacity: 0.2;
        transform: rotate(0deg) scale(0.94);
    }

    7% {
        opacity: 0.55;
        transform: rotate(28deg) scale(0.99);
    }

    13% {
        opacity: 0.3;
        transform: rotate(51deg) scale(0.96);
    }

    24% {
        opacity: 0.9;
        transform: rotate(96deg) scale(1.07);
    }

    31% {
        opacity: 0.65;
        transform: rotate(121deg) scale(1.02);
    }

    39% {
        opacity: 0.25;
        transform: rotate(147deg) scale(0.95);
    }

    52% {
        opacity: 0.75;
        transform: rotate(205deg) scale(1.04);
    }

    59% {
        opacity: 0.45;
        transform: rotate(237deg) scale(0.98);
    }

    68% {
        opacity: 0.95;
        transform: rotate(281deg) scale(1.08);
    }

    73% {
        opacity: 0.35;
        transform: rotate(302deg) scale(0.96);
    }

    84% {
        opacity: 0.7;
        transform: rotate(338deg) scale(1.03);
    }

    91% {
        opacity: 0.25;
        transform: rotate(356deg) scale(0.95);
    }

    100% {
        opacity: 0.2;
        transform: rotate(380deg) scale(0.94);
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