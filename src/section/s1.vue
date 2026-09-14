<template>
  <section class="s1">

<div class="s1-pc">

    <div class="pc-bg-warp">
        <img
        class="s1-bg-pic"
        src="@/section/s1/s1-bg.jpg">
    </div>    

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

        <p class="D3">3D外觀透視示意圖</p>
    </div>    

    
</div>


<div class="s1-m">
    <img
        class="s1-bg-pic-m"
        src="@/section/s1/s1-bg-m.jpg">

    <div class="Head-m">
    
        <img
            class="LOGO-m"
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
        <img
            class="H2-m"
            src="@/section/s1/H2-m.svg"
            alt="均質35坪純3房"
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="true">

            <div class="p5group-m"
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
            class="p5-m"
            src="@/section/s1/p5-m.svg"
            alt="簽訂5%工程期0付款">
         <img class="p5light-m"
            src="@/section/s1/new-light.png">
    </div>
    </div>

    <div class="right-side-m">
        <img class="bl-m"
        src="@/section/s1/bl.png">

        <p class="D3-m">3D外觀透視示意圖</p>

    </div> 
    
    
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

       .s1-m,
    .right-side-m {
        display: none;
    }

   .s1-pc {
    position: relative;
    width: 100%;
    height: 56.25vw;
    min-height: 100vh;
    overflow: hidden;
}

.pc-bg-warp {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -50;
}

.s1-bg-pic {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    margin: 0;
}

    .Head{
        position: absolute;
        display: flex;
        width: clamp(300px, 40vw, 738px);
        flex-direction: column;
        align-items: center;
        gap: 64px;
        margin-top:clamp(0px, 10vw, 302px);
        margin-left:clamp(0px, 10vw, 302px);
    }

    .H1{
        width: clamp(300px, 100vw, 543px);
        height: auto;
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

    left: clamp(50px, 5.2vw, 85px);
    top: clamp(-28px, -7.8vw, -120px);

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
    filter: drop-shadow(0 5px 10px rgb(0, 0, 0));
    

}

.right-side {
    position: absolute;
    width: 100%;
    height: auto;

    top: clamp(-80%, 80%, -8%);
    margin-left: clamp(0%, 35.4167%, 35.4167%);
}

.bl {
    position: relative;
    display: block;

    width: 80.3125%;
    height: auto;
    aspect-ratio: 241 / 128;

    margin-top: 120px;
    margin-left: 0%;

    z-index: -5;
}

.bl-light {
    position: absolute;

    width: 34.6354%;
    height: auto;
    aspect-ratio: 241 / 128;

    /* 重新用 right-side 當定位基準 */
    top: 100px;
    left: 33.3333%;

    margin: 0;

    z-index: -4;
    mix-blend-mode: screen;
    transform-origin: center center;

    animation: sunlightFlicker 8s ease-in-out infinite;
}

.D3 {
    position: absolute;
    right: 38vw;
    bottom:20px;

    width: auto;
    height: auto;

    margin: 0;

    color: #fff;
    text-align: right;

    text-shadow: 0 0 3.806px #000;
    font-family: "Noto Sans TC", sans-serif;
    font-size:clamp(12px , 8vw , 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 1.776px;

    z-index: 10;
    display: block;
}

}


@media screen and (max-width:1022px){

    .s1-pc,.right-side {
        display: none;
    }

   .s1-m {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
}



    .s1-bg-pic-m {
    position: absolute;

    left: 0;
    right: 0;

    width: 120%;
    height: auto;

    display: block;
    object-fit: cover;
    object-position: center bottom;

    top: clamp(-240px, 6vw, -112px);
}

    .Head-m{
        position: relative;
        display: flex;
        width: clamp(300px, 80vw, 738px);
        flex-direction: column;
        align-items: center;
        gap: 32px;
        margin-top:clamp(18px, 10vw, 36px);
        margin-left:clamp(0px, 10vw, 22px);
    }

    .LOGO-m{
        width:80%;
        height: auto;
    }

    .H2-m{
        width:clamp(300px, 80vw, 543px);
        height: auto;
    }

.p5group-m{
    position: relative;
    display: flex;
    width: clamp(300px, 80vw, 738px);
    flex-direction: column;
    align-items: center;
    gap: 32px;
    transform-origin: center center;
    animation: p5-bounce 4s ease-in-out infinite;
    will-change: transform;
}

.p5-m{
    width: clamp(300px, 70vw, 543px);
    height: auto;
}

.p5light-m {
    position: absolute;

    left: clamp(8%, 17%, 18%);
    top: clamp(-80%, -40%, -5%);

    width: 26.67%;
    height: auto;

    margin: 0;

    mix-blend-mode: screen;

    transform-origin: center center;
    animation: p5-natural-light-m 12s ease-in-out infinite;

    will-change: transform, opacity;
    pointer-events: none;
    filter: blur(1px);
}

.right-side-m {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 200%;
    height: auto;

    margin-top: clamp(0px, 6vw, 80px);
    margin-left: clamp(0px, 6vw, 80px);

    flex-shrink: 0;
}

.bl-m {
    position: relative;
    display: block;

    width: clamp(0px, 175%, 1200px);
    height: auto;

    margin: 0 auto;

    flex-shrink: 0;
}

.D3-m {
    position: absolute;
    right: 60vw;
    bottom:20px;

    width: auto;
    height: auto;

    margin: 0;

    color: #fff;
    text-align: right;

    text-shadow: 0 0 3.806px #000;
    font-family: "Noto Sans TC", sans-serif;
    font-size:clamp(12px , 8vw , 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 1.776px;

    z-index: 10;
    display: block;
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

@keyframes p5-natural-light-m {

    0% {
        opacity: 0.2;
        transform: rotate(0deg) scale(0.8);
    }

    7% {
        opacity: 0.55;
        transform: rotate(28deg) scale(0.99);
    }

    13% {
        opacity: 0.3;
        transform: rotate(51deg) scale(0.8);
    }

    24% {
        opacity: 0.9;
        transform: rotate(96deg) scale(1.07);
    }

    31% {
        opacity: 0.65;
        transform: rotate(121deg) scale(0.6);
    }

    39% {
        opacity: 0.25;
        transform: rotate(147deg) scale(0.8);
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
        transform: rotate(302deg) scale(0.8);
    }

    84% {
        opacity: 0.7;
        transform: rotate(338deg) scale(1.03);
    }

    91% {
        opacity: 0.25;
        transform: rotate(356deg) scale(0.8);
    }

    100% {
        opacity: 0.2;
        transform: rotate(380deg) scale(0.8);
    }
}

@keyframes sunlightFlicker {
    0% {
        opacity: 0.82;
        filter: brightness(1);
    }

    7% {
        opacity: 0.90;
        filter: brightness(1.05);
    }

    14% {
        opacity: 0.84;
        filter: brightness(0.98);
    }

    26% {
        opacity: 0.96;
        filter: brightness(1.10);
    }

    35% {
        opacity: 0.86;
        filter: brightness(1);
    }

    48% {
        opacity: 0.78;
        filter: brightness(0.94);
    }

    61% {
        opacity: 0.91;
        filter: brightness(1.06);
    }

    70% {
        opacity: 0.84;
        filter: brightness(0.98);
    }

    82% {
        opacity: 0.97;
        filter: brightness(1.12);
    }

    91% {
        opacity: 0.87;
        filter: brightness(1.01);
    }

    100% {
        opacity: 0.82;
        filter: brightness(1);
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