<script setup>

import {STAGE} from "../store/screen";
import {useView} from "../composables/useView";

const view = useView();

</script>

<template>
  <div class="h-full flex flex-col">
    <div class="h-1/3"></div>
    <div class="h-1/3 bg-[#000040] flex flex-row items-center text-4xl uppercase text-white font-festival text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
      <button class="mr-auto rotate-90 ml-8" @click="view.goTo(STAGE)">v</button>
      <h2 class="mr-auto">Partners</h2>
    </div>
    <div class="h-1/3"></div>
  </div>
</template>

