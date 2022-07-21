<script setup lang="ts">
import {FOOD, STAGE, CHILL} from '~/store/screen';

</script>

<template>
  <div class="
    relative w-full h-full
    flex flex-col
    items-center
  ">
    <div class="w-full relative pt-8">
      <img
        src="~/assets/svg/stage.svg"
        alt="Our stage ready for your"
        class="Stage__img w-3/4 mx-auto relative cursor-pointer"
        @click="STAGE.scrollTo()"
      >
      <div class="Bg__grass-line absolute w-2/3 mx-auto bottom-0 left-0 right-0 h-12"></div>
<!--      <svg class="Stage__img w-3/4 mx-auto relative cursor-pointer" viewBox="0 0 121 77">-->
<!--        <use :xlink:href="import('@/assets/svg/stage.svg') + '#stage'"/>-->
<!--      </svg>-->
    </div>
    <div class="w-full flex flex-row justify-between -mt-[18%] px-32">
      <img
        src="~/assets/svg/food-sign.svg"
        alt="Go to food section"
        title="Curious or hungry?"
        class="
          w-56 relative cursor-pointer
          duration-300 transition-transform origin-bottom-right -rotate-6 hover:rotate-[-9deg]
        "
        @click="FOOD.scrollTo()"
      >
      <img
        src="~/assets/svg/chill-sign.svg"
        alt="Go to chill section"
        title="Chill-zone, best place for all"
        class="
          w-56 relative cursor-pointer
          duration-300 transition-transform origin-bottom-left rotate-12 hover:rotate-[15deg]
        "
        @click="CHILL.scrollTo()"
      >
    </div>
  </div>
</template>

<style scoped>
.Stage__img {
  @apply w-3/4;
  max-height: 60vh;
}
</style>
