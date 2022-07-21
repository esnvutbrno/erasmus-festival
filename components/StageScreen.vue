<script setup lang="ts">
import {FOOD, STAGE, CHILL} from '~/store/screen';

</script>

<template>
  <div class="
    relative
    flex flex-col w-full items-center
  ">
    <div class="w-full relative pt-8">
      <!-- out of flex -->
      <div class="Bg__brick"></div>

      <img
        src="~/assets/svg/stage.svg"
        alt="Our stage ready for your"
        class="Stage__img w-3/4 mx-auto relative cursor-pointer"
        @click="STAGE.scrollTo()"
      >
    </div>
    <div class="w-full flex flex-row justify-between -mt-[15%] px-32">
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
