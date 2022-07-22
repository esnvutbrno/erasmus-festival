<script setup>
import HeyCactusSvg from '../assets/svg/cactus.svg?component'
import HungryBullSvg from '../assets/svg/bull.svg?component'
import FoodLine from "./FoodLine";
import WallHeading from "./Wall";
import WallNavigation from "./WallNavigation";
import {STAGE} from '../store/screen'

</script>

<template>
  <div class="h-full relative">
    <WallHeading klass="h-1/3">
      <span>FEELING</span>
      <span class="ml-16 lg:ml-32">HUNGRY?</span>
      <template #append>
        <WallNavigation>
          <template #right>
            <SimpleArrow dir="right" @click="STAGE.scrollTo()"/>
          </template>
        </WallNavigation>
      </template>
    </WallHeading>

    <div class="h-2/3 flex flex-col">
      <FoodLine color="text-yellow-200">
        <template #icon>
          <HeyCactusSvg
            class="w-1/2 max-h-full max-w-max drop-shadow-2xl"
          />
        </template>
        <template #title>Hey, Cactus!</template>
        <template #description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolores?
        </template>
      </FoodLine>

      <FoodLine color="text-rose-300">
        <template #icon>
          <HungryBullSvg
            class="
              w-1/2 max-h-full max-w-max drop-shadow-2xl
              mr-4 sm:mr-6 lg:mr-12
            "
          />
        </template>
        <template #title>Hungry Bull</template>
        <template #description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolores?
        </template>
      </FoodLine>

    </div>
  </div>
</template>

