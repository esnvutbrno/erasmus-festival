<script setup lang="ts">
import {FESTIVAL_INFO} from "~/store/screen";

import ESNBrnoUnitedWhiteSvg from '../assets/svg/esn-bu-logo-white.svg?component'
</script>

<template>
  <section
    v-bind="FESTIVAL_INFO.elAttrs"
    class="bg-blue-800 mx-auto max-w-6xl py-8 min-h-screen"
  >
    <h1 class="font-festival text-white text-5xl text-center py-8">Erasmus Festival </h1>
    <article class="max-w-xl mx-auto">
      <p class="text-white font-xl py-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam,
        asperiores dolorem eaque earum eius hic necessitatibus nesciunt nobis non perferendis quas recusandae saepe
        suscipit tenetur voluptate! Facilis, quaerat!
      </p>

      <p class="text-red-300 font-xl py-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam,
        asperiores dolorem eaque earum eius hic necessitatibus nesciunt nobis non perferendis quas recusandae saepe
        suscipit tenetur voluptate! Facilis, quaerat!
      </p>
    </article>

    <ESNBrnoUnitedWhiteSvg
      class="w-64 mx-auto my-8 px-8"
    />

    <FestivalMapScreen class="snap-start	"/>
  </section>
</template>
