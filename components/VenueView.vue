<script setup lang="ts">
import {onMounted} from 'vue'
import {STAGE, CLUBS, CHILL, FOOD, TOTAL_WIDTH} from '~/store/screen'


onMounted(() => {
  document.getElementById(STAGE.id).scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
})
</script>

<template>
  <div class="View will-change-scroll" ref="View">
    <div class="View__bgs" :style="{width: `${TOTAL_WIDTH}vw`}">
      <!-- backgrounds -->
      <div class="Bg__brick"></div>
      <div class="Bg__grass-line h-12 -mt-12 z-10"></div>
      <div class="Bg__grass z-0"></div>
    </div>

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
  @apply mx-auto w-full h-screen overflow-hidden flex flex-row relative;
}

.View__screen {
  @apply h-full flex-shrink-0;

  @apply text-white text-8xl;
}

.View__bgs {
  @apply absolute top-0 left-0 right-0 h-full z-0;
}
</style>
