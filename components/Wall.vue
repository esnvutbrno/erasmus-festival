<script setup lang="ts">

defineProps<{
  klass?: string
}>()
const slots = useSlots()
</script>

<template>
  <div
    class="flex flex-col justify-center items-center relative"
    :class="[klass || 'h-[55%]']"
  >
    <h2
      v-if="slots.default"
      @click="$emit('headingClick')"
      class="
        font-festival text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl

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
