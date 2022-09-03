<script setup>
import {STAGE, CLUBS, PARTNERS} from "../store/screen";
import {useView} from "../composables/useView";

import HomeLeftSvg from '../assets/svg/home-left.svg?component'
const view = useView()
</script>

<template>
  <Wall @headingClick="CLUBS.goTo()">
    <span>Students</span>
    <span class="ml-16 lg:ml-32">in Brno</span>

    <template #append>
      <WallNavigation>
        <template #left>
          <HomeLeftSvg @click="view.goTo(STAGE)" class="transition-transform hover:-translate-x-2 w-40 cursor-pointer"/>
        </template>
        <template #right>

          <ArrowSign
            alt="Go to partners section"
            title="All our lovely partners"
            dir="right"
            font-size="35"
            text="PARTNERS"
            class="w-32 lg:w-40 translate-y-6"
            @click="view.goTo(PARTNERS)"
          ></ArrowSign>
        </template>
      </WallNavigation>
    </template>
  </Wall>
</template>

<script>
export default {
  name: "ClubsScreen"
}
</script>

<style scoped>

</style>
