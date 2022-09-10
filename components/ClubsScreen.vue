<script setup>
import {STAGE, CLUBS, PARTNERS} from "../store/screen";
import {useView} from "../composables/useView";

import HomeLeftSvg from '../assets/svg/home-left.svg?component'
// import BoardSvg from '../assets/svg/board.svg?component'

const view = useView()
</script>

<template>
  <div class="h-screen w-full flex flex-col justify-between items-center w-full bg-red">
    <div class="h-[40%] flex flex-row">
      <!--    <span>Students</span>-->
      <!--    <span class="ml-16 lg:ml-32">in Brno</span>-->
    </div>
    <div class="flex flex-row justify-between">
      <HomeLeftSvg @click="view.goTo(STAGE)" class="transition-transform hover:-translate-x-2 w-40 cursor-pointer"/>

      <ArrowSign
        alt="Go to partners section"
        title="All our lovely partners"
        dir="right"
        font-size="35"
        text="PARTNERS"
        class="w-32 lg:w-40 translate-y-6"
        @click="view.goTo(PARTNERS)"
      ></ArrowSign>
    </div>
  </div>
</template>
