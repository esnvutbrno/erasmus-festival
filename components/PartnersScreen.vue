<script setup>

import {STAGE} from "../store/screen";
import {useView} from "../composables/useView";

const view = useView();
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="
      order-2 lg:order-1
      lg:h-1/3 flex flex-row flex-wrap lg:flex-nowrap items-center justify-between px-8 lg:px-16
    ">
      <img
        src="../assets/svg/dzs.svg?url"
        width="48" height="48"
        class="Logo w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/svg/muni.svg?url"
        width="181" height="32"
        class="Logo w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/svg/vut.svg?url"
        width="311" height="99"
        class="Logo w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/svg/mendelu.svg?url"
        width="107" height="71"
        class="Logo w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/svg/starobrno.svg?url"
        width="487" height="366"
        class="Logo w-1/3 lg:w-1/5"
      />
    </div>
    <div
      class="
        lg:h-1/3 py-8 px-4 order-1 lg:order-2
        bg-[#000040] flex flex-row items-center text-4xl uppercase text-white
        font-festival text-4xl sm:text-5xl md:text-6xl lg:text-8xl
      ">
      <button class="mr-auto rotate-90 ml-8" @click="view.goTo(STAGE)">v</button>
      <h2 class="mr-auto">Partners</h2>
    </div>
    <div class="
      order-3
      lg:h-1/3 flex flex-row flex-wrap lg:flex-nowrap items-center justify-between px-8 lg:px-16
    ">
      <img
        src="../assets/img/aisec.png"
        width="1265" height="259"
        class="Logo w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/img/formule.png"
        width="941" height="592"
        class="Logo bg-[#000040] py-8 px-2 w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/svg/brnoregion.svg?url"
        width="173" height="173"
        class="Logo w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/svg/best.svg?url"
        width="975" height="494"
        class="Logo bg-[#000040] py-8 px-2  w-1/3 lg:w-1/5"
      />
      <img
        src="../assets/img/ki.png"
        width="210" height="60"
        class="Logo w-1/3 lg:w-1/5"
      />
    </div>
  </div>
</template>

<style>
.Logo {
  @apply max-h-[50%] px-8;
}
</style>
