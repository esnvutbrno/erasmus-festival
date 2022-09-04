<script setup>
import {useView} from "../composables/useView";
import {FOOD, STAGE} from "../store/screen";
import WallNavigation from './WallNavigation.vue'
import DjStage from '../assets/svg/dj.svg?component'
const view = useView();

import HomeRightSvg from '../assets/svg/home-right.svg?component'
import TailsSvg from '../assets/svg/tails.svg?component'
import FallsSvg from '../assets/svg/falls.svg?component'
import CfHSvg from '../assets/svg/cfh.svg?component'
import Dj1Svg from '../assets/svg/dj-1.svg?component'
import Dj2Svg from '../assets/svg/dj-2.svg?component'
import Dj3Svg from '../assets/svg/dj-3.svg?component'
</script>
<template>
  <div class="h-full relative">
    <Wall klass="h-[50%]">
      <template #append>
        <div class="h-full w-4/5 flex flex-col justify-center items-start relative mb-auto">
          <div class="flex flex-col lg:flex-row w-full justify-center items-center justify-self-center h-2/3 lg:h-1/2 pt-8">
            <TailsSvg
              alt="The Tails"
              class="max-h-full transition-transform hover:scale-95"
            />
            <div class="flex flex-row lg:flex-col justify-between items-center w-full lg:w-[30%] h-auto mx-8 lg:mx-16 my-8 gap-x-4">
              <Dj1Svg class="max-w-full transition-transform hover:scale-95"/>
              <Dj2Svg class="max-w-full transition-transform hover:scale-95"/>
              <Dj3Svg class="max-w-full transition-transform hover:scale-95"/>
            </div>
            <FallsSvg
              alt="Break Falls"
              class="max-w-[50%] max-h-full transition-transform hover:scale-95"
            />
          </div>

          <CfHSvg
            alt="Call from Home"
            class="w-4/5 mx-auto h-1/4 lg:h-1/2 transition-transform hover:scale-95"
          />
        </div>
      </template>
    </Wall>

    <div class="max-h-[50%] max-w-full flex flex-col justify-start items-center relative">
      <DjStage alt="" class="h-full -mt-44 lg:-mt-36"/>
    </div>

    <WallNavigation disable-vertical-placement class="bottom-8 inset-x-8">
      <template #left>
        <ArrowSign
          alt="Go to food section"
          title="Curious or hungry?"
          dir="left"
          text="FOOD"
          class="w-40"
          @click="view.goTo(FOOD)"
        ></ArrowSign>
      </template>

      <template #right>
        <HomeRightSvg @click="view.goTo(STAGE)" class="transition-transform hover:translate-x-2 w-40 cursor-pointer"/>
      </template>
    </WallNavigation>
    <!--    <div class="relative max-w-4xl mx-auto text-white text-2xl flex flex-col justify-center h-[45%]">-->
    <!--      <p class="drop-shadow-xl">-->
    <!--        🎸 The Tails is a music band of four handsome men from Čejkovice near Hodonín town. As this village is so-->
    <!--        legendary, The Tails could only raise the bar and bring some legendary music, not to make a complete a*s off-->
    <!--        themselves.-->
    <!--      </p>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "BandsScreen"
}
</script>

<style scoped>

</style>
