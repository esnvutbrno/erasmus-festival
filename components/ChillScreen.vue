<script setup lang="ts">
import {CHILL, STAGE, CLUBS} from "~/store/screen";
import {useView} from "~/composables/useView";

const view = useView()
</script>
<template>
  <!-- wall part -->
  <Wall @headingClick="view.goTo(CHILL)">
    <span>CHILL</span>
    <span class="ml-8 md:ml-16 lg:ml-32">ZONE</span>

    <template #append>
      <WallNavigation>
        <template #left>
          <SimpleArrow dir="left" @click="view.goTo(STAGE)"/>
        </template>
        <template #right>
          <button
            class="
              w-44 lg:w-56
              transition-transform hover:translate-x-1 drop-shadow-xl
            "
            @click="view.goTo(CLUBS)"
          >
            <img
              class="w-full"
              src="~/assets/svg/students-sign.svg?url"
              alt="Students clubs in Brno"
            >
          </button>
        </template>
      </WallNavigation>
    </template>
  </Wall>
</template>
