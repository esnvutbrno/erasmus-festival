<script setup lang="ts">
import {FLAG_PARADE, FESTIVAL_INFO} from "~/store/screen";
import {useView} from "~/composables/useView";

const view = useView()
</script>

<template>
  <section v-bind="FLAG_PARADE.elAttrs" class="h-screen relative">
    <div
      class="flex flex-col justify-center items-center"
    >
      <h2
        class="mt-16 text-white text-4xl xl:text-8xl font-festival drop-shadow-2xl cursor-pointer"
        @click="view.goTo(FLAG_PARADE)"

      >
        FLAG
        PARADE
      </h2>
      <h3 class="text-2xl xl:text-4xl text-white mt-8">
        3 PM, Brno City Centre
      </h3>
    </div>


    <WallNavigation disable-auto-placement class="inset-x-0 bottom-4">
      <template #right>
        <SimpleArrow
          @click="view.goTo(FESTIVAL_INFO)"
          dir="down"
          class="text-white font-festival text-4xl w-full"
        >
          vvv
        </SimpleArrow>
      </template>
    </WallNavigation>
  </section>
</template>

<style scoped>
section {

  background-position: center center;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .25)),
  url("~/assets/img/flag-parade.jpg");
}
</style>
