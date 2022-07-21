<script setup>
import HeyCactusSvg from '../assets/svg/cactus.svg?component'
import HungryBullSvg from '../assets/svg/bull.svg?component'
</script>

<template>
  <div class="h-full relative">
    <!--      wall part -->
    <div class="h-1/3 flex flex-col justify-center items-center">
      <h2>
        <span>FEELING</span>
        <span class="ml-16 lg:ml-32">HUNGRY?</span>
      </h2>
    </div>
    <div class="h-2/3 flex flex-col">
      <div class="h-1/2 flex flex-row justify-center items-center px-8 gap-x-8">
        <!-- cactus line -->
        <HeyCactusSvg
          class="w-1/2 max-h-full drop-shadow-2xl"
        />
        <div class="max-w-lg">
          <h3
            class="
            w-1/2
            text-yellow-200 font-festival text-5xl lg:text-7xl
            drop-shadow-2xl
        ">
            Hey, Cactus!
          </h3>
          <p class="mt-4 text-2xl font-bold text-yellow-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolores?
          </p>
        </div>


      </div>

      <div class="h-1/2 flex flex-row justify-center items-center px-8 gap-x-8">
        <!-- bull line -->
        <HungryBullSvg
          class="w-1/2 max-h-full drop-shadow-2xl"
        />
        <div class="max-w-lg">
          <h3
            class="
            w-1/2
            text-red-600 font-festival text-5xl lg:text-7xl
            drop-shadow-2xl
        ">
            Hungry Bull
          </h3>
          <p class="mt-4 text-2xl font-bold text-red-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolores?
          </p>
        </div>


      </div>
    </div>
  </div>
</template>

