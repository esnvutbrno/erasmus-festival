<script setup lang="ts">
import {onMounted} from 'vue'

class Screen {
  public ref: HTMLElement = null

  constructor(
    public readonly name: string,
    public readonly width: number
  ) {
  }

  get id() {
    return `view-${this.name}`
  }

  get elAttrs() {
    return {
      style: {flexBasis: `${this.width}vw`},
      id: this.id,
      ref: (ref) => this.ref = ref
    }
  }

  scrollTo() {
    this.ref.scrollIntoView({behavior: "smooth"})
  }
}

const FOOD = new Screen('food', 50)
const STAGE = new Screen('stage', 100)
const CHILL = new Screen('chill', 50)

// const SCREENS: Screen[] = [FOOD, STAGE, CHILL]

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
    <div class="View__screen bg-amber-600 gap-x-16" v-bind="STAGE.elAttrs">
      <button @click="FOOD.scrollTo()">&lt;</button>

      <button @click="STAGE.scrollTo()">STAGE</button>

      <button @click="CHILL.scrollTo()">&gt;</button>
    </div>
    <div class="View__screen bg-violet-600" v-bind="CHILL.elAttrs">
      CHILL
    </div>
  </div>
</template>

<style scoped>
.View {
  @apply mx-auto w-full h-screen overflow-hidden flex flex-row;
}

.View__screen {
  @apply h-full flex-shrink-0;

  @apply text-white text-8xl flex flex-row justify-center items-center;
}
</style>
