<script setup lang="ts">
defineProps<{
  dir: "right" | "left"| "down"
}>()
const slots = useSlots()
</script>
<template>
  <button
    class="transition-transform cursor-pointer"
    :class="[
      dir === 'left' ? 'hover:-translate-x-1' : '',
      dir === 'right' ? 'hover:translate-x-1' : '',
      dir === 'down' ? 'hover:translate-y-1' : '',
      !slots.default ? 'font-festival text-white opacity-80 text-4xl lg:text-6xl' : '',
    ]"
  >
    <slot></slot>
    <template v-if="!slots.default">
      <span v-if="dir === 'left'" class="block rotate-90">V</span>
      <span v-if="dir === 'right'" class="block -rotate-90">V</span>
      <span v-if="dir === 'down'" class="block">V</span>
    </template>
  </button>
</template>
