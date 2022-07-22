<script setup lang="ts">
defineProps<{
  dir: "right" | "left"
}>()
</script>
<template>
  <button
    class="
      font-festival text-white opacity-80
      text-6xl transition-transform
    "
    :class="[dir === 'left' ? ' hover:-translate-x-1' : 'hover:translate-x-1']"
  >
    <span v-if="dir === 'left'" class="block rotate-90">V</span>
    <span v-else class="block -rotate-90">V</span>
  </button>
</template>
