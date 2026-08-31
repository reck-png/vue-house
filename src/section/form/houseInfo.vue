<template>
    <!--  -->
    <div class="house" >
        <div class="h-full info-box mx-auto flex flex-col items-center justify-center">
            <div class="title">建案資訊</div>
            <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2 ">
                <div class="item flex items-center w-full whitespace-nowrap"
                    v-for="item in info.houseInfos" :key="item">
                    <p class="sub mr-5 pl-2 text-[#fff]" v-html="item[0]"></p>
                    <p class="whitespace-pre-line leading-normal text-left font-normal" v-html="item[1]">
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="house1 bg-[#fff] flex items-center justify-center py-5">
           <img src="@/section/form/cmlogo.svg" alt="創意家行銷" srcset="">
    </div>
    <div class="house2 bg-[#5F1818] flex items-center justify-center py-5">
           <img class="hidden md:block" src="@/section/form/copyright.svg" alt="創意家行銷" srcset="">
           <img class="block md:hidden" src="@/section/form/copyright_m.svg" alt="創意家行銷" srcset="">
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="//h35.banner.tw/img//footerLogo.gif" alt="立炘數位" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank" class="text-white text-xs">網頁製作</a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

$house-c1:#fff;
$house-c2:#fff;

.house2 {
   // height: auto;
    img{width:size(387);vertical-align: middle;}
}
.house1 {
   // height: auto;
    color: $house-c2;
    font-size: size(22);
    padding: 1em 0;
    // height:4em;
    img{width: 250px;vertical-align: middle;}
}

.house {
   // height: auto;
    color: $house-c2;
    font-size: size(22);
    padding: 3em 0;
    // height:4em;
    img{height: 1.3em;vertical-align: middle;}
}


.info-box {
    width: size(800);

    .title {
        font-size: size(40);
        font-weight: 700;
        color: #fff !important;
        margin: 0 auto 0em auto;
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(16);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;
            border-left: 2px solid $house-c1;

             .sub{
              color: $house-c1;
                // min-width: 4.5em;
            }
        }
    }
}

@media screen and (max-width:768px) {
.house1 {
    // background:#fff;
  //  height: size-m(400);
    font-size: size-m(13);
    img{width: 200px;}
}

.house2 {
    img{width:size-m(311);vertical-align: middle;}
}

.house {
    // background:#fff;
  //  height: size-m(400);
    font-size: size-m(13);
}


    .footer {
        margin-bottom: size-m(0);
        //margin-bottom: size-m(63);
    }

    .info-box {
        width: size-m(313);
        padding: 0;

        .title {
            font-size: size-m(29);
            width: auto;
        }

        .info-items {
            row-gap: size-m(20);

            .item {
                font-size: size-m(13);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>