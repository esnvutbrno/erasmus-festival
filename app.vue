<script setup lang="ts">
import {onMounted} from 'vue'

const toRight = (el: Element, how) => {
  el.scrollBy(
    {
      top: 0,
      left: how,
      behavior: "smooth"
    }
  )
}
onMounted(() => {
  document.getElementById('screen-stage').scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
})
</script>

<template>
  <NuxtLayout>
    <div class="View" ref="View" @click="toRight($refs.View, 20)">
      <div class="View__screen bg-red-600">FOOD</div>
      <div class="View__screen bg-amber-600" id="screen-stage">STAGE</div>
      <div class="View__screen bg-violet-600">CHILL</div>
    </div>
    <div class="View__screen View__screen--fp bg-lime-600">
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

<style scoped>
:global(:root) {
  --screen-width: 80%;
}

.View {
  @apply mx-auto;
  overflow: hidden;

  width: 100%;
  height: 100vh;
  @apply flex flex-row;
}

.View__screen {
  height: 100%;
  flex-basis: var(--screen-width);
  @apply min-w-min flex-shrink-0;

  @apply text-white text-8xl flex flex-row justify-center items-center;
}
.View__screen--fp {
  height: 80vh;
}
</style>
