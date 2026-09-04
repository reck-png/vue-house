<template>
  <div>
    <a :href="info.line" target="_blank" v-if="!isMobile && info.line">
      <img src="@/section/s1/lineicon.png" class="lineicon fixed z-[99] right-[1vw] bottom-[8vw] w-[4vw]" />
    </a>
    <div class="contact-info-img">
    </div>
    <div class="contact-info mx-auto  flex flex-col items-center justify-between">
      <!--  <div class="logo">
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div> -->

      <div class="flex justify-between w-full contact-item-box">
        <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'"
          v-if="info.phone">
          <img src="//h35.banner.tw/img//form/phone.svg" alt="電話" srcset="" />
          <div>{{ info.phone }}</div>
        </div>
        <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'messenger'">
          <img src="//h35.banner.tw/img//form/messenger.svg" alt="Facebook 諮詢" srcset="" />
          <div>Facebook 諮詢</div>
        </div>
        <div class="flex contact-item justify-center items-center btfanpage" @click="open()">
          <img src="//h35.banner.tw/img//form/fb.svg" alt="前往粉絲專頁" srcset="" />
          <div>前往粉絲專頁</div>
        </div>
      </div>

      <!--  v-if="info.address" 地圖連動開關 -->
      <div class="flex justify-between w-full contact-item-box no-gap" v-if="info.address">
        <div class="flex contact-item justify-center items-center address">
          <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>

        </div>
        <div class="flex contact-item justify-center items-center googlemap"
          @click="modalOpen = true; modalType = 'gmap'">
          <img src="//h35.banner.tw/img//form/gmap.svg" alt="導航 GoogleMap" srcset="" />
          <div>導航 GoogleMap</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
 <Teleport to="body">
  <div class="bg-white mo-contact-info mo-only flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="//h35.banner.tw/img//form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'messenger'">
      <img src="//h35.banner.tw/img//form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <!--  <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'" v-if="info.fbLink && (!info.address || !info.phone)">
      <img src="//h35.banner.tw/img//form/fb.svg" alt="粉絲專頁" srcset="" />
      <div>粉絲專頁</div>
    </div> 手機腳頁按鈕 -->

    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h35.banner.tw/img//form/pen.svg" alt="預約賞屋" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'" v-if="info.address">
      <img src="//h35.banner.tw/img//form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'line'" v-if="info.line">
      <img src="//h35.banner.tw/img//form/line.svg" alt="Line" srcset="" />
      <div>Line</div>
    </div>
  </div>
  </Teleport>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'messenger'" src="//h35.banner.tw/img//form/messenger.svg"
        alt="messenger" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h35.banner.tw/img//form/gmap.svg" alt="gmap" srcset="" />
      <img class="h-12" v-else-if="modalType == 'line'" src="//h35.banner.tw/img//form/line.svg" alt="line" srcset="" />
      <!-- title -->

      <!--  
      <div class="text-xl mt-4 font-bold">{{
  modalType == 'phone' ? '賞屋專線' :
    modalType == 'fb' ? 'Facebook Messenger' :
        `${info.address2 ? info.address2 : '導航地址'}`
      }}</div>
      -->

      <div class="text-xl mt-4 font-bold">{{
        modalType == 'phone' ? '賞屋專線' :
          modalType == 'messenger' ? 'Facebook Messenger' :
            modalType == 'fb' ? 'Facebook 粉絲專頁' :
              modalType == 'line' ? 'LINE賞屋客服' :
                modalType == 'gmap' ? `${info.address2 ? info.address2 : '導航地址'}` :
                  ''
      }}</div>

      <div class="text-md mt-4">{{
        modalType == 'phone' ? info.phone :
          modalType == 'messenger' ? '線上諮詢' :
            modalType == 'fb' ? '' :
              modalType == 'line' ? '' :
                modalType == 'gmap' ? `${info.address}` :
                  ''
      }}</div>

      <!-- 
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
        `${info.address}`
      }}</div>-->
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()"
        v-if="modalType != 'phone'" v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'messenger',
          'btsearch': modalType == 'gmap',
          'btline': modalType == 'line',
          'btcontac': modalType == 'phone'
        }">
        {{
          modalType == 'phone' ? '撥打電話' :
            modalType == 'messenger' ? '立即諮詢' :
              modalType == 'fb' ? '立即諮詢' :
                modalType == 'line' ? '加入' :
                  modalType == 'gmap' ? '開啟導航' :
                    ''
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else
        v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'messenger',
          'btsearch': modalType == 'gmap',
          'btline': modalType == 'line',
          'btcontac': modalType == 'phone'
        }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'messenger' ? '立即諮詢' : '開啟導航'
        }}</div>
    </div>
  </div>


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.bg-color1 {
  background-color: #005366;
}

.hover\:bg-color2:hover {
  background-color: #002e38;
}

.lineicon {
  filter: drop-shadow(0px 0px 10px #8cdfca);
}

.contact-info-img {
  @apply relative;
  height: 0;
  z-index: 52;
}

.contact-info {
  //padding: size(55) size(0) size(55) size(0);
  padding: 2vw 0vw 2vw 0vw;
  width: size(1440);
  min-width: 680px;
  position: relative;
  z-index: 50;
  // background: #045147;

  .logo {
    position: relative;
    width: size(367);
    // height: size(172);
    // background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: size(30) auto 0;

    img {
      width: 100%;
    }

    .logot {
      position: absolute;
      top: 31%;
      left: 0;
      right: 0;
      margin: auto;
      width: 85%;
    }
  }


  .contact-item-box {
    position: relative;
    margin-top: 0.6vw;
    gap: size(20);
    width: size(920);
    // min-width: 680px;

    .contact-item {
      background-color: #693331;
      color: #EDDCAB;

      width: 100%;
      flex: 1;
      padding: 1.1em 0;
      //  border-radius: .5em;
      font-size: size(16);
      line-height: 1.6; //3.8
      letter-spacing: 0em;
      // max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      //border: 1px solid #C29267;
      gap: 1em;
      border-radius: 0em;
      margin-left: -13px;

      &:hover {
        background-color: #313f6c;
        color: #EDDCAB;

        img {
          // filter: brightness(0) invert(1); //SVG 顏色
          filter: invert(87%) sepia(24%) saturate(371%) hue-rotate(4deg) brightness(98%) contrast(92%);
        }
      }

      img {
        filter: invert(87%) sepia(24%) saturate(371%) hue-rotate(4deg) brightness(98%) contrast(92%);
        max-width: size(27);
        height: auto;
        max-height: size(27);
        transition: all .5s;
        margin: 0;
      }

      &.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        position: relative;
        flex: 2.17;
        // border-radius: 999px 0 0 999px;
        //  max-width: 9999px;
        justify-content: center;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: transparent;
          left: calc(100% - 4em);
          z-index: -1;
        }

        div {
          text-indent: 0em;
          white-space: normal;
          padding: 0 1em;
        }
      }


      &.googlemap {
        flex: 1;
        //    background-color: #9B1E44;
        border-left-width: 0;
        color: #EDDCAB;

        img {
          // 黑白 filter: brightness(0) invert(0.5);
          filter: invert(87%) sepia(24%) saturate(371%) hue-rotate(4deg) brightness(98%) contrast(92%);
        }

        &:hover {
          //     background-color: #C29267;
          color: #FFF;

          img {
            filter: brightness(0) invert(1);
          }
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}

.modal-box {
  img {
    filter: invert(21%) sepia(81%) saturate(1277%) hue-rotate(160deg) brightness(93%) contrast(104%);
  }
}

@media screen and (max-width:768px) {

  .contact-info-img {}

  .mo-contact-info {
    z-index: 10001;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.301);
    background: #ebc830;

    .contact-item {
      height: 100%;
      font-size: sizem(16);
      font-weight: 400;
      color: #000;
      border-left: 1px solid #fff7;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(0);
      }

    }
  }

  .contact-info {
    width: 100%;
    min-width: 0;
    // height: sizem(400);
    // border-radius: sizem(68);
    //padding: sizem(0) sizem(0);
    padding: sizem(80) 0 sizem(80) 0;
    margin-top: sizem(0);
    position: relative;
    justify-content: space-between;
    background-size: sizem(450) auto;

    .logo {
      width: sizem(257);
      margin: sizem(40) auto sizem(30) auto;
      // margin-bottom: sizem(47);
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(15);
      flex-direction: column;
      width: sizem(310);

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        margin: 0;

        img {
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }

        div {
          text-indent: 2em;
        }

        &.address {
          font-size: sizem(15);
          border-radius: .5em .5em 0 0;
          padding: 1.1em 0;
          margin-top: sizem(25);
          //font-size: .9em;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
          border-radius: 0 0 .5em .5em;
        }

        &.googlemap {
          border-top-width: 0;
          border-left-width: 0;
        }
      }

      &.no-gap {
        gap: 0 !important;
      }
    }
  }
}

.mo-only {
  display: none;
}

@media screen and (max-width: 768px) {
  .mo-only {
    display: flex;
  }
}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == 'messenger') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);
  } else if (modalType.value == 'line') {
    window.open(info.line);

  }
}

const open = () => {
  window.open(info.fbLink);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>
