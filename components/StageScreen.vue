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
    flex flex-col
    items-center
  ">
    <div class="relative pt-8 w-5/6 lg:w-4/5 xl:w-3/4 max-h-[80vh] flex flex-col">
      <div class="h-full flex flex-row justify-center relative">
        <!-- stage itself -->
        <StageSvg
          class="cursor-pointer max-h-full"
          @click="STAGE.scrollTo()"
        />
<!--        <div class="Bg__grass-line h-12 absolute bottom-0 left-0 right-0 mx-auto w-full"></div>-->
<!--        &lt;!&ndash; date banner &ndash;&gt;-->
<!--        <FestivalBannerSvg-->
<!--          class="absolute mx-auto max-h-36 -bottom-8 left-0 right-0 mx-auto w-2/3"-->
<!--        />-->
      </div>
    </div>

    <div class="
      mt-16 lg:mt-0
      w-full flex flex-row justify-evenly lg:justify-between lg:px-24 xl:-mt-72
    ">
      <FoodSignSvg
        alt="Go to food section"
        title="Curious or hungry?"
        class="
          w-48 lg: h-max
          relative cursor-pointer
          duration-300 transition-transform origin-bottom-right lg:-rotate-6 hover:rotate-[-9deg]
        "
        @click="FOOD.scrollTo()"
      />
      <ChillSignSvg
        alt="Go to chill section"
        title="Chill-zone, best place for all"
        class="
          w-48 lg: h-max
          relative cursor-pointer
          duration-300 transition-transform origin-bottom-left lg:rotate-12 hover:rotate-[15deg]
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
