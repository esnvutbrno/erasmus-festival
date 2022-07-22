<script setup lang="ts">
import {FLAG_PARADE, FESTIVAL_INFO} from "~/store/screen";

</script>

<template>
  <section v-bind="FLAG_PARADE.elAttrs" class="h-screen relative">
    <div
      class="flex flex-col justify-center items-center"
    >
      <h2 class="mt-16 text-white text-4xl xl:text-8xl font-festival drop-shadow-2xl">
        FLAG
        PARADE
      </h2>
      <h3 class="text-2xl xl:text-4xl text-white mt-8">
        3 PM, Brno City Centre
      </h3>
    </div>


    <WallNavigation>
      <template #right>
        <SimpleArrow
          @click="FESTIVAL_INFO.scrollTo()"
          dir="down"
          class="text-white font-festival text-4xl"
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
