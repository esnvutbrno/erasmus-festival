<script setup lang="ts">
import {onMounted} from 'vue'
import {STAGE, CLUBS, CHILL, FOOD} from '~/store/screen'


onMounted(() => {
  document.getElementById(STAGE.id).scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
})
</script>

<template>
  <div class="View" ref="View">
    <div class="View__screen bg-red-600" v-bind="FOOD.elAttrs">
      FOOD
    </div>
    <div class="View__screen" v-bind="STAGE.elAttrs">
      <StageScreen></StageScreen>
    </div>
    <div class="View__screen bg-violet-600 gap-x-16" v-bind="CHILL.elAttrs">
      <button @click="STAGE.scrollTo()">&lt;</button>

      CHILL

      <button @click="CLUBS.scrollTo()">&gt;</button>
    </div>
    <div class="View__screen bg-pink-400" v-bind="CLUBS.elAttrs">
      CLUBS
    </div>
  </div>
</template>

<style scoped>
.View {
  @apply mx-auto w-full h-screen overflow-hidden flex flex-row;
}

.View__screen {
  @apply h-full flex-shrink-0;

  @apply text-white text-8xl;
}
</style>
