<script setup lang="ts">
import {onMounted} from 'vue'
import {STAGE, CLUBS, CHILL, FOOD, TOTAL_WIDTH} from '~/store/screen'


onMounted(() => {
  document.getElementById(STAGE.id).scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
})
</script>

<template>
  <div class="will-change-scroll">
    <div class="View">
      <div class="View__bgs" :style="{width: `${TOTAL_WIDTH}vw`}">
        <!-- backgrounds -->
        <div class="Bg__brick"></div>
        <div class="Bg__grass-line h-12 -mt-12 z-10"></div>
        <div class="Bg__grass z-0"></div>
      </div>

      <div class="View__screen bg-red-700" v-bind="FOOD.elAttrs">
        <FoodScreen />
      </div>
      <div class="View__screen" v-bind="STAGE.elAttrs">
        <StageScreen />
      </div>
      <div class="View__screen bg-violet-800" v-bind="CHILL.elAttrs">
        <!-- wall part -->
        <div class="h-[55%] flex flex-col justify-center items-center relative">

          <h2
            class="cursor-pointer"
            @click="CHILL.scrollTo()"
          >
            <span>CHILL</span>
            <span class="ml-32">ZONE</span>
          </h2>

          <button
            class="absolute w-56 right-8 bottom-8 hover:right-6 transition-all cursor-pointer"
            @click="CLUBS.scrollTo()"
          >
            <img
              class="w-full"
              src="~/assets/svg/students-sign.svg?url"
              alt="Students clubs in Brno"
            >
          </button>
        </div>
        <!--      <button @click="STAGE.scrollTo()">&lt;</button>-->
        <!--      <button @click="CLUBS.scrollTo()">&gt;</button>-->
      </div>
      <div class="View__screen bg-orange-600" v-bind="CLUBS.elAttrs">
        <div class="h-[55%] flex flex-col justify-center items-center relative">
          <h2>
            <span>Students</span>
            <span class="ml-32">in Brno</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
