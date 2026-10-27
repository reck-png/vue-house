
<template>
  <div ref="heroStage" class="hero-stage">
    <div class="s1-layer">
      <S1 />
    </div>

    <div
      ref="orderLayer"
      class="order-layer"
    >
      <Order />
    </div>
  </div>
</template>




<style lang="scss">


::selection {
  color: #ffffff;    
  background: #c25700; 
}

::-moz-selection {
  color: #ffffff;
  background: #c25700;
}

.hero-stage {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  isolation: isolate;
}

.s1-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.s1-layer > .s1-sec {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.s1-layer .all-bg {
  min-height: 100vh;
}

.s1-layer .s1-bg {
  min-height: 100vh;
}

.order-layer {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #fff;

  transform: translate3d(0, 100%, 0);
  transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.order-layer.is-active {
  transform: translate3d(0, 0, 0);
}


.light-effect {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
}

html,
body {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar,
.hero-stage::-webkit-scrollbar,
.order-layer::-webkit-scrollbar {
  display: none;
  width: 0;
}


/* =========================
   RWD
========================= */

@media(max-width: 554px) {

    .hero-stage {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  .s1-layer {
    position: relative;
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  .s1-layer > .s1-sec {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  .order-layer {
    position: relative;
    inset: auto;
    height: auto;
    overflow: visible;
    transform: none;
    transition: none;
    will-change: auto;
  }

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
import { ref, onMounted, onUnmounted } from "vue";
import S1 from "@/section/s1.vue";
import Order from "@/section/order.vue";
import ContactInfo from "@/section/form/contactInfo.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import 'lenis/dist/lenis.css'

const heroStage = ref(null);
const orderLayer = ref(null);

let isOrderActive = false;
let touchStartY = 0;
let touchStartX = 0;
let isAnimating = false;
let animationTimer = null;
let orderAosObserver = null;

const ANIMATION_DURATION = 450;


const showOrder = () => {
  if (isAnimating || isOrderActive || !orderLayer.value) return;

  isAnimating = true;
  isOrderActive = true;

  orderLayer.value.classList.add("is-active");

  clearTimeout(animationTimer);
  animationTimer = setTimeout(() => {
    isAnimating = false;
  }, ANIMATION_DURATION);
};

const hideOrder = () => {
  if (isAnimating || !isOrderActive || !orderLayer.value) return;

  isAnimating = true;
  isOrderActive = false;

  orderLayer.value.classList.remove("is-active");

  clearTimeout(animationTimer);
  animationTimer = setTimeout(() => {
    isAnimating = false;
  }, ANIMATION_DURATION);
};

const handleWheel = (event) => {
  if (window.innerWidth <= 554) return;
  if (!heroStage.value || !orderLayer.value) return;

  const rect = heroStage.value.getBoundingClientRect();

const inStage =
  rect.top < window.innerHeight &&
  rect.bottom > 0;

if (!inStage) return;

  // 動畫期間避免連續觸發
  if (isAnimating) {
    event.preventDefault();
    return;
  }

  if (event.deltaY > 0 && !isOrderActive) {
    event.preventDefault();
    showOrder();
    return;
  }

  if (event.deltaY < 0 && isOrderActive) {
    // Order 內部已經往下捲動時，允許先捲回頂部
    if (orderLayer.value.scrollTop > 0) return;

    event.preventDefault();
    hideOrder();
  }
};

const handleTouchStart = (event) => {
  if (!event.touches.length) return;

  touchStartY = event.touches[0].clientY;
  touchStartX = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
  if (window.innerWidth <= 554) return;
  if (!event.changedTouches.length) return;
  if (!heroStage.value || !orderLayer.value) return;

  const touchEndY = event.changedTouches[0].clientY;
  const touchEndX = event.changedTouches[0].clientX;

  const deltaY = touchStartY - touchEndY;
  const deltaX = touchStartX - touchEndX;

  // 忽略橫向滑動及太短的滑動
  if (Math.abs(deltaY) < 50 || Math.abs(deltaY) < Math.abs(deltaX)) {
    return;
  }

  if (isAnimating) return;

  // 手指往上滑：開啟 Order
  if (deltaY > 0 && !isOrderActive) {
    showOrder();
    return;
  }

  // 手指往下滑：Order 已回到頂部才關閉
  if (deltaY < 0 && isOrderActive) {
    if (orderLayer.value.scrollTop > 0) return;

    hideOrder();
  }
};

onMounted(() => {
  AOS.init({
    offset: 0,
    duration: 1500,
    once: false,
  });

  // 等 Vue 完成元件渲染後，再監聽 Order 的 AOS 元素
  requestAnimationFrame(() => {
    if (!orderLayer.value) return;

    orderAosObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      {
        root: orderLayer.value,
        threshold: 0.15,
      }
    );

    orderLayer.value.querySelectorAll("[data-aos]").forEach((el) => {
      orderAosObserver.observe(el);
    });
  });

  window.addEventListener("wheel", handleWheel, {
    passive: false,
  });

  heroStage.value?.addEventListener(
  "touchstart",
  handleTouchStart,
  { passive: true }
);

heroStage.value?.addEventListener(
  "touchend",
  handleTouchEnd,
  { passive: true }
);

});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  clearTimeout(animationTimer);

  if (orderAosObserver) {
    orderAosObserver.disconnect();
    orderAosObserver = null;
  }

  heroStage.value?.removeEventListener(
  "touchstart",
  handleTouchStart
);

heroStage.value?.removeEventListener(
  "touchend",
  handleTouchEnd
);
});



</script>