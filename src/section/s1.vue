<template>
  <section class="s1-sec">

<div class="all-bg"
data-aos="fade"
    data-aos-delay="500"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

    <img 
      class="s1-bg"
      src="@/section/s1/s1-bg.jpg"
    />

    <img 
      class="s1-bg-m"
      src="@/section/s1/s1-bg-m.jpg"
    />

</div>

<div class="h1"
    data-aos="fade"
    data-aos-delay="500"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true"
>


    <img 
      class="s1-h1"
      src="@/section/s1/s1-h1.svg"
    />

    <img 
      class="s1-h1-m"
      src="@/section/s1/s1-h1-m.svg"
    >

    <img 
      class="th40"
      src="@/section/s1/40th.png"
    >
    
    <img 
      class="th40-m"
      src="@/section/s1/40th-m.svg" 
    >

</div>
    

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";



.s1-sec {
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  font-weight: 500;
  min-height: 100vh;
  }
  
    
    
  
.s1-bg-m,.s1-h1-m,.th40-m{
  display:none;
}

.all-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: auto;

  z-index: 1;
  
}

.s1-bg {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  height: auto;
  min-height: 100vh;
  width: clamp(768px, 100vw, 1920px);
  
    object-fit: cover;
    object-position: top left;
  transform: translateX(-50%);
}

.h1 {
    display: flex;
    flex-direction: column;
    position: relative;
    width: clamp(350px, 45vw, 1920px);
    height: fit-content;
    top:12vw;
    right:0%;
    gap: 5vw;
    z-index: 3;
    align-items: center;
    
  }

.s1-h1{
    width: clamp(480px, 60vw, 898px);
    margin-right:-75vw;
    height: fit-content;
    object-fit: contain;
}

.th40{
    width: clamp(120px, 20vw, 800px);
    height: fit-content;
    margin-right:-75vw;
    object-fit: contain;
}


@media screen and (max-width:1568px){

    .s1-h1{
    margin-top:5vw;
    margin-right:-95vw;
}

.th40{
    height: fit-content;
    margin-right:-95vw;

}}

@media screen and (max-width:1076px){


.s1-sec {
  min-height: 0;
  height: auto;
}

    .s1-bg,
.s1-h1,
.th40{
    display:none;
}


    .s1-bg-m,
    .s1-h1-m,
    .th40-m{
        display:block;
    }


.s1-sec{
    background: rgba(255, 255, 255, 0.01);
box-shadow: 0 0 20.2px 0 rgba(169, 59, 0, 0.70);
width: 100%;
}

.all-bg {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 0;
  z-index: 1;
  overflow: hidden;
}

.s1-bg-m {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  min-height: 0;
  object-fit: contain;
  object-position: top center;
}

.h1 {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  gap: 12vw;
  z-index: 3;
  align-items: center;
}



.s1-h1-m {
    display: block;
    width: clamp(120px, 70vw, 898px);
    margin-top: 60vw;

    filter: drop-shadow(0px 0px 26.1px rgba(169, 14, 0, 0.80));
    height: fit-content;
    object-fit: contain;
}

.th40-m{
    width: clamp(120px, 45vw, 348px);


    height: fit-content;
    object-fit: contain;
}
    

}

.glow-breath {
  animation: glowBreath 1s ease-in-out infinite;
}

@keyframes glowBreath {
  0%,
  100% {
    filter:
      drop-shadow(0 0 2px rgba(255, 78, 196, 0.2))
      drop-shadow(0 0 6px rgba(255, 220, 170, 0.1));
  }

  50% {
    filter:
      drop-shadow(0 0 5px rgba(255, 92, 201, 0.7))
      drop-shadow(0 0 15px rgba(255, 220, 170, 0.45))
      drop-shadow(0 0 30px rgba(255, 220, 170, 0.2));
  }
}




//螢火蟲專區

.fireflies{
    position:absolute;
    inset:0;
    pointer-events:none;
    overflow:hidden;
    z-index:5;
}


.firefly{
    position:absolute;
    width:8px;
    height:8px;
}


/* 螢火蟲本體 */
.firefly span{

    display:block;

    width:100%;
    height:100%;

    border-radius:50%;

    background:#f6f48b;

    box-shadow:
        0 0 8px #fff7a0,
        0 0 20px #f6f48b,
        0 0 45px #d7ff78;


    animation:
        blink 2.5s ease-in-out infinite alternate;

}



/* -----------------
   位置 + 飛行
------------------ */


.f1{
    top:75%;
    left:15%;
    animation:fly1 18s ease-in-out infinite;
}


.f2{
    top:60%;
    left:10%;
    animation:fly2 22s ease-in-out infinite;
}


.f3{
    top:40%;
    left:20%;
    animation:fly3 20s ease-in-out infinite;
}


.f4{
    top:80%;
    right:15%;
    animation:fly4 24s ease-in-out infinite;
}


.f5{
    top:55%;
    right:18%;
    animation:fly5 19s ease-in-out infinite;
}


.f6{
    top:28%;
    right:5%;
    animation:fly6 21s ease-in-out infinite;
}


.f7{
    top:72%;
    left:90%;
    animation:fly7 25s ease-in-out infinite;
}




/* -----------------
   閃爍
------------------ */


@keyframes blink{

    0%{
        opacity:.2;
        transform:scale(.6);
    }


    40%{
        opacity:.9;
        transform:scale(1);
    }


    70%{
        opacity:.4;
        transform:scale(.8);
    }


    100%{
        opacity:1;
        transform:scale(1.35);
    }

}



/* -----------------
   飛行路徑
------------------ */


@keyframes fly1{

    0%{
        transform:translate(0,0);
    }

    25%{
        transform:translate(80px,-120px);
    }

    50%{
        transform:translate(-40px,-240px);
    }

    75%{
        transform:translate(130px,-330px);
    }

    100%{
        transform:translate(0,0);
    }

}



@keyframes fly2{

    0%{
        transform:translate(0,0);
    }

    30%{
        transform:translate(-120px,-100px);
    }

    55%{
        transform:translate(-40px,-260px);
    }

    80%{
        transform:translate(-180px,-350px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly3{

    0%{
        transform:translate(0,0);
    }

    25%{
        transform:translate(160px,-80px);
    }

    50%{
        transform:translate(100px,-260px);
    }

    75%{
        transform:translate(-40px,-360px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly4{

    0%{
        transform:translate(0,0);
    }

    30%{
        transform:translate(-100px,-140px);
    }

    60%{
        transform:translate(80px,-280px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly5{

    0%{
        transform:translate(0,0);
    }

    25%{
        transform:translate(-140px,-80px);
    }

    55%{
        transform:translate(-40px,-220px);
    }

    80%{
        transform:translate(-180px,-380px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly6{

    0%{
        transform:translate(0,0);
    }

    35%{
        transform:translate(130px,-120px);
    }

    60%{
        transform:translate(40px,-260px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly7{

    0%{
        transform:translate(0,0);
    }

    20%{
        transform:translate(-150px,-100px);
    }

    50%{
        transform:translate(-60px,-280px);
    }

    75%{
        transform:translate(-220px,-400px);
    }

    100%{
        transform:translate(0,0);
    }

}

.f1 span{
    animation-delay:0s;
}

.f2 span{
    animation-delay:.8s;
}

.f3 span{
    animation-delay:1.5s;
}

.f4 span{
    animation-delay:2.2s;
}

.f5 span{
    animation-delay:1s;
}

.f6 span{
    animation-delay:3s;
}

.f7 span{
    animation-delay:1.8s;
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