<script setup>
defineProps({
  color: String
})

</script>
<template>
  <div class="
    h-1/2 flex
    flex-col md:flex-row
    justify-end items-center
    p-8
    gap-x-16 lg:gap-x-32
    gap-y-8 lg:gap-y-0
  ">
    <!-- icon line -->
    <slot name="icon"/>

    <!-- text -->
    <div class="w-full lg:w-1/2">
      <h3
        class="
          max-w-lg
          font-festival
          text-2xl sm:text-3xl md:text-4xl lg:text-7xl
          drop-shadow-2xl
        " :class="[color]">
        <slot name="title"/>
      </h3>
      <p class="max-w-2xl mt-4 sm:text-xl lg:text-2xl font-bold" :class="[color]">
        <slot name="description"/>
      </p>
    </div>
  </div>
</template>
