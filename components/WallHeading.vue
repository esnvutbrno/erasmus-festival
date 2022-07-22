<script setup lang="ts">
defineProps<{
  klass?: string
}>()
</script>

<template>
  <div
    class="flex flex-col justify-center items-center relative"
    :class="[klass || 'h-[55%]']"
  >
    <h2 @click="$emit('headingClick')" class="cursor-pointer">
      <slot/>
    </h2>

    <slot name="append"></slot>
  </div>
</template>
