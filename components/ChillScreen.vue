<script setup lang="ts">
import {CHILL, STAGE, PARTNERS} from "~/store/screen";
import {useView} from "~/composables/useView";
import HomeLeftSvg from '../assets/svg/home-left.svg?component'
import CandySvg from '../assets/svg/candy.svg?component'
import PistolsSvg from '../assets/svg/pistols.svg?component'
import MapFlagsSvg from '../assets/svg/map-flags.svg?component'
import CameraSvg from '../assets/svg/camera.svg?component'
import HennaSvg from '../assets/svg/henna.svg?component'
import FacePaintingSvg from '../assets/svg/face-painting.svg?component'
import FormulaSvg from '../assets/svg/formula.svg?component'
import PopcornSvg from '../assets/svg/popcorn.svg?component'
import SoccerSvg from '../assets/svg/soccer.svg?component'
import ArrowSign from "~/components/ArrowSign.vue";

const view = useView()
</script>
<template>
  <div class="h-full flex flex-col bg-white justify-between">
    <div class="
      order-2 md:order-1
      md:h-1/3 flex flex-row flex-wrap items-center justify-around px-8 md:px-16 py-8 md:py-0
      bg-white
    ">
      <div class="flex flex-row justify-start items-center gap-6 lg:mt-8">
        <CandySvg class="w-28 lg:w-36"></CandySvg>
        <h2 class="font-festival text-2xl lg:text-4xl text-[#FFD0FA] heading-stroke">Cotton <br> Candy</h2>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mt-4">
        <img class="w-28 lg:w-36" src="../assets/img/board-game.png" alt="board games">
        <h2 class="font-festival text-2xl lg:text-4xl text-orange-400">Board <br> Games</h2>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mb-8">
        <h2 class="font-festival text-2xl lg:text-4xl text-lime-400">Face <br> Painting</h2>
        <FacePaintingSvg class="w-28 lg:w-36"></FacePaintingSvg>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mt-4">
        <PopcornSvg class="w-28 lg:w-36"></PopcornSvg>
        <h2 class="font-festival text-2xl lg:text-4xl text-[#F7B239]">Crunchy <br> Popcorn</h2>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mb-16">
        <h2 class="font-festival text-2xl lg:text-4xl text-blue-400">Water <br> Pistols</h2>
        <PistolsSvg class="w-28 lg:w-36"></PistolsSvg>
      </div>

    </div>
    <div
      class="
        md:h-1/3 py-8 px-4 order-1 md:order-2
        flex flex-row items-center text-2xl lg:text-4xl uppercase text-black bg-[#faae38]
        font-festival text-4xl sm:text-5xl md:text-6xl lg:text-8xl
      ">
      <button class="mr-auto rotate-90 ml-8 transition-transform hover:-translate-x-2 cursor-pointer" @click="view.goTo(STAGE)">v</button>
      <h2>chill zone</h2>
      <button class="ml-auto -rotate-90 mr-8 transition-transform hover:translate-x-2 cursor-pointer" @click="view.goTo(PARTNERS)">v</button>
    </div>
    <div class="
      order-3
      md:h-1/3 flex flex-row flex-wrap items-center justify-around px-8 md:px-16  px-8 md:px-16 py-8 md:py-0
      bg-white
    ">
      <div class="flex flex-row justify-start items-center gap-6 lg:mb-24">
        <MapFlagsSvg class="w-28 lg:w-36"></MapFlagsSvg>
        <h2 class="font-festival text-2xl lg:text-4xl text-[#4fba6e]">Flags <br> Map</h2>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mb-8">
        <FormulaSvg class="w-28 lg:w-36"></FormulaSvg>
        <h2 class="font-festival text-2xl lg:text-4xl text-red-400">Formula <br> Simulator</h2>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mt-0">
        <h2 class="font-festival text-2xl lg:text-4xl text-[#b3e59f]">Table <br> Football</h2>
        <SoccerSvg class="w-28 lg:w-36"></SoccerSvg>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mb-16">
        <CameraSvg class="w-28 lg:w-36"></CameraSvg>
        <h2 class="font-festival text-2xl lg:text-4xl text-[#31C0D8]">Photo <br> Booth</h2>
      </div>
      <div class="flex flex-col justify-start items-center gap-6 lg:mt-4">
        <h2 class="font-festival text-2xl lg:text-4xl text-amber-700">Henna <br> Tattoos</h2>
        <HennaSvg class="w-28 lg:w-36"></HennaSvg>
      </div>
    </div>
  </div>
</template>

<style>
.heading-stroke {
  -webkit-text-stroke: 3px black;
}
</style>
