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
    <h2
      @click="$emit('headingClick')"
      class="
        font-festival text-white text-2xl md:text-5xl lg:text-8xl

        drop-shadow-xl
        inline-block flex flex-col justify-center items-center

        cursor-pointer
        transition-transform hover:scale-95
      "
    >
      <slot/>
    </h2>

    <slot name="append"></slot>
  </div>
</template>
