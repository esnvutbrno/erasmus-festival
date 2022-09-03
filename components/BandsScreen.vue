<script setup>
import {useView} from "../composables/useView";
import {FOOD, STAGE} from "../store/screen";
import WallNavigation from './WallNavigation.vue'
const view = useView();

import TailsSvg from '../assets/svg/tails.svg?component'
import FallsSvg from '../assets/svg/falls.svg?component'
import CfHSvg from '../assets/svg/cfh.svg?component'
</script>
<template>
  <div class="h-full">
    <Wall>
      <template #append>
        <WallNavigation disable-vertical-placement class="bottom-4 inset-x-4">
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
            <SimpleArrow dir="right" @click="view.goTo(STAGE)"/>
          </template>
        </WallNavigation>

        <div class="h-2/3 lg:h-full w-4/5 lg:w-2/3 flex flex-col justify-center relative mb-auto">
          <div class="flex flex-row w-full justify-center justify-self-center h-1/2 pt-8">
            <TailsSvg
              alt="The Tails"
              class="max-w-[50%] max-h-full transition-transform hover:scale-95"
            />
            <FallsSvg
              alt="Break Falls"
              class="max-w-[50%] max-h-full transition-transform hover:scale-95"
            />
          </div>

          <CfHSvg
            alt="Call from Home"
            class="w-4/5 mx-auto h-1/2 transition-transform hover:scale-95"
          />
        </div>
      </template>
    </Wall>
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
