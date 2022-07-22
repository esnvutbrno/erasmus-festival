<script setup lang="ts">
import {CHILL, STAGE, CLUBS} from "~/store/screen";


</script>
<template>
  <!-- wall part -->
  <Wall @headingClick="CHILL.scrollTo()">
    <span>CHILL</span>
    <span class="ml-32">ZONE</span>

    <template #append>
      <WallNavigation>
        <template #left>
          <SimpleArrow dir="left" @click="STAGE.scrollTo()"/>
        </template>
        <template #right>
          <button
            class="w-56 transition-transform hover:translate-x-1 drop-shadow-xl"
            @click="CLUBS.scrollTo()"
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
