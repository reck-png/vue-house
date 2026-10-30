<template>
  <section class="s1">

<div class="H1"
    data-aos="fade"
    data-aos-delay="500"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

    <img 
      class="Coming-soon"
      src="@/section/s1/s1-h1.svg"
    />

    <img 
      class="Coming-soon-m"
      src="@/section/s1/s1-h1-m.svg"
    >

    <div class="h1-box">
      <p class="MRT">正南屯捷運 出站即到家</p>  
      <p class="park">森林公園・鋼骨地標 2~3房</p>  
    </div>

    <div class="h1-box-m">
      <p class="MRT-m">正南屯捷運 出站即到家</p>  
      <p class="park-m">森林公園・鋼骨地標 2~3房</p>  
    </div>

</div>
    

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  position: relative;
  width: 100%;
  height: auto;
  
  font-weight: 500;
  margin-bottom:190px;
  
  @media screen and (min-width:768px) {
    height: auto;
    
  

.Coming-soon-m,
.h1-box-m{
    display:none;
}
  


.H1 {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center; 
    width: auto ;
    height: auto;
    gap: clamp(4px, 2vw, 12px);
    z-index: 3;
    
  }

  .Coming-soon {
    position: relative;
    width: clamp(320px, 50vw, 951px);
    height: fit-content;
    object-fit: Contain;
    margin: clamp(148px, 20vw, 240px) auto clamp(8px, 5vw, 24px) auto;
    z-index: 3;
    animation: glowBreath 3s ease-in-out infinite;
  }

 .h1-box {
  position: relative;
  width: clamp(280px, 40vw, 700px);
  box-sizing: border-box;

  display: flex;
  padding: clamp(16px, 1.75vw, 25px)
           clamp(12px, 3vw, 45px)
           clamp(18px, 2.57vw, 37px);

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(5px, 0.7vw, 10px);

  border-radius: 8px;
  background: rgba(255, 139, 247, 0.04);
  box-shadow: 0 0 25.791px 0 rgba(255, 255, 255, 0.25);

  z-index: 3;
}


.MRT {
  position: relative;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;

  font-family: "Noto Serif TC Black", serif;
  font-weight: 900;
  font-size: clamp(18px, 2vw, 28px);
  line-height: 1.2;
  letter-spacing: clamp(1px, 0.58vw, 8.295px);

  text-align: center;

  background: linear-gradient(
    207deg,
    #F1E6FF -340.98%,
    #5D1C73 -25.06%,
    #FFF 80.24%,
    #E19DE8 322.76%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.park {
  position: relative;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;

  color: #FFF;
  font-family: "Noto Serif TC", serif;
  font-size: clamp(12px, 1.4vw, 19.5px);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: clamp(1px, 0.72vw, 10.4px);

  text-align: center;
}

}



@media screen and (max-width:767px){

    .Coming-soon,
    .Local,
    .LOGO{
        display:none;
    }


    .Coming-soon-m,
    .Coming-soon-TC-m,
    .Local-m,
    .LOGO-m{
        display:block;
    }

    .s1{margin-bottom: 132px;}    





    .Coming-soon-m{
      position: relative;
      width: clamp(240px, 100vw, 880px);
      height: fit-content;
      object-fit: Contain;
      margin-top: 134px;
      margin-bottom: 24px;
      z-index: 3;
      animation: glowBreath 3s ease-in-out infinite;
  }


    .Local-m{
      position: relative;
      width: clamp(264px, 60vw, 660px);
      height: fit-content;
      object-fit: Contain;
      margin-top: 64px;
      z-index: 3;
    }

    .LOGO-m{
      position: relative;
      width: clamp(256px, 56vw, 560px);
      height: fit-content;
      object-fit: contain;
      margin-top: 16px;
      margin-bottom: 0px;
      z-index: 3;


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