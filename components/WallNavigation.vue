<script setup lang="ts">

import {computed, useSlots} from "#imports";

defineProps<{
  disableVerticalPlacement?: boolean,
  enableCentering?: boolean,
}>()
const slots = useSlots();
</script>
<template>
  <div
    class="
      absolute
      flex flex-row items-start lg:items-end
    "
    :class="{
      'top-6 bottom-[unset] lg:top-[unset] lg:bottom-10': !disableVerticalPlacement,
      'left-6 lg:left-10 right-6 lg:right-10': !disableVerticalPlacement,
      'justify-between': !enableCentering,
      'justify-center': enableCentering
    }"
  >
    <div class="flex flex-col gap-y-4">
      <slot name="left"/>
    </div>
    <slot name="center"/>
    <div class="flex flex-col gap-y-4">
      <slot name="right"/>
    </div>
  </div>
</template>
