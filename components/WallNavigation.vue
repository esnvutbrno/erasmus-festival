<template>
  <div class="
    top-10 bottom-[unset]
    left-10 right-10
    lg:top-[unset] lg:bottom-10
    absolute

    flex flex-row justify-between items-start lg:items-end
  ">
    <div class="flex flex-col gap-y-4">
      <slot name="left"/>
    </div>
    <div class="flex flex-col gap-y-4">
      <slot name="right"/>
    </div>
  </div>
</template>
