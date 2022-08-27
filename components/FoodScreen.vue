<script setup>
import HeyCactusSvg from '../assets/svg/cactus.svg?component'
import HungryBullSvg from '../assets/svg/bull.svg?component'
import FoodLine from "./FoodLine";
import Wall from "./Wall";
import WallNavigation from "./WallNavigation";
import {STAGE} from '../store/screen'
import {useView} from "../composables/useView";

const view = useView()
</script>

<template>
  <div class="h-full relative">
    <Wall klass="h-1/3">
      <span>FEELING</span>
      <span class="ml-16 lg:ml-32">HUNGRY?</span>
      <template #append>
        <WallNavigation>
          <template #right>
            <SimpleArrow dir="right" @click="view.goTo(STAGE)"/>
          </template>
        </WallNavigation>
      </template>
    </Wall>

    <div class="h-2/3 flex flex-col">
      <FoodLine color="text-yellow-200">
        <template #icon>
          <HeyCactusSvg
            class="w-1/2 max-h-full max-w-max drop-shadow-2xl"
          />
        </template>
        <template #title>Hey, Cactus!</template>
        <template #description>
          How lovely small and cute food truck! Cactus offers the best snacks from fresh ingredients. Look forward
          for vegetarian hot-dog, Mexican Quesadilla or dark brownies!
        </template>
      </FoodLine>

      <FoodLine color="text-red-500">
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
          <span class="text-red-200">
            The actual masterpiece burgers, chicken, beef, and pumpkin, are all up to you!
            Of course addition of french fries, dips or homemade biscuits.
          </span>
        </template>
      </FoodLine>

    </div>
  </div>
</template>

