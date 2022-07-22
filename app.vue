<script setup lang="ts">
import {FLAG_PARADE} from "~/store/screen";

</script>
<template>
  <NuxtLayout>
    <VenueView/>

    <div
      class="bg-lime-600 h-screen text-white text-4xl xl:text-8xl flex flex-row justify-center items-center"
      v-bind="FLAG_PARADE.elAttrs"
    >
      FLAG PARADE
    </div>
    <div class="bg-blue-800 mx-auto max-w-6xl py-8">
      <h1 class="font-festival text-white text-5xl text-center py-8">Erasmus Festival </h1>
      <article class="max-w-xl mx-auto">
        <p class="text-white font-xl py-4" v-for="_ in Array(6)">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam,
          asperiores dolorem eaque earum eius hic necessitatibus nesciunt nobis non perferendis quas recusandae saepe
          suscipit tenetur voluptate! Facilis, quaerat!
        </p>
      </article>
    </div>
  </NuxtLayout>
</template>


