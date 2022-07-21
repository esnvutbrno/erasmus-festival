<script setup lang="ts">
import {FOOD, STAGE, CHILL} from '~/store/screen';
import StageSvg from '~/assets/svg/stage.svg?component'
import FestivalBannerSvg from '~/assets/svg/festival-banner.svg?component'
import FoodSignSvg from '~/assets/svg/food-sign.svg?component'
import ChillSignSvg from '~/assets/svg/chill-sign.svg?component'


</script>

<template>
  <div class="
    relative w-full h-full
    flex flex-col justify-center
    items-center
  ">
    <div class="relative mt-8 w-5/6 lg:w-4/5 xl:w-3/4 max-h-[65vh] mb-56 basis-4/5">
      <!-- stage itself -->
      <StageSvg
        class="cursor-pointer max-h-full mx-auto"
        @click="STAGE.scrollTo()"
      />
    </div>

    <div class="
      absolute left-0 right-0 top-1/2
      flex flex-row justify-evenly items-start

      lg:justify-between lg:px-24
      xl:top-1/3
    ">
      <FoodSignSvg
        alt="Go to food section"
        title="Curious or hungry?"
        class="
          w-48 lg: h-max
          relative cursor-pointer
          duration-300 transition-transform origin-bottom-right lg:-rotate-6 lg:hover:rotate-[-9deg]
        "
        @click="FOOD.scrollTo()"
      />
      <ChillSignSvg
        alt="Go to chill section"
        title="Chill-zone, best place for all"
        class="
          w-48 lg: h-max
          relative cursor-pointer
          duration-300 transition-transform origin-bottom-left lg:rotate-12 lg:hover:rotate-[15deg]
        "
        @click="CHILL.scrollTo()"
      />
    </div>
  </div>
</template>


<style>
#food-sign-stick,
#chill-sign-stick {
  display: none;
}

@media (min-width: 1024px) {
  #food-sign-stick,
  #chill-sign-stick {
    display: unset;
  }
}

</style>
