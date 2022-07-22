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

      <div class="h-1/2 flex flex-row justify-end items-center p-8 gap-x-32">
        <!-- cactus line -->
        <HeyCactusSvg
          class="w-1/2 max-h-full max-w-max drop-shadow-2xl"
        />
        <div class="w-1/2">
          <h3
            class="
            max-w-lg
            text-yellow-200 font-festival text-5xl lg:text-7xl
            drop-shadow-2xl
        ">
            Hey, Cactus!
          </h3>
          <p class="max-w-lg mt-4 text-2xl font-bold text-yellow-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolores?
          </p>
        </div>


      </div>

      <div class="h-1/2 flex flex-row justify-end items-center p-8 gap-x-32">
        <!-- bull line -->
        <HungryBullSvg
          class="
            w-1/2 max-w-max
            max-h-full drop-shadow-2xl
          "
        />
        <div class="w-1/2">
          <h3
            class="
            max-w-lg text-rose-300 font-festival text-5xl lg:text-7xl
            drop-shadow-2xl
        ">
            Hungry Bull
          </h3>
          <p class="max-w-lg mt-4 text-2xl font-bold text-rose-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolores?
          </p>
        </div>


      </div>

    </div>
  </div>
</template>

