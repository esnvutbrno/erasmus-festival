<script setup lang="ts">
import {onMounted} from 'vue'
import {CHILL, CLUBS, FOOD, STAGE, TOTAL_WIDTH} from '~/store/screen'
import Wall from "~/components/Wall.vue";
import SimpleArrow from "~/components/SimpleArrow.vue";


onMounted(() => {
  document.getElementById(STAGE.id).scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
})
</script>

<template>
  <div class="will-change-scroll">
    <div class="View">
      <div class="View__bgs" :style="{width: `${TOTAL_WIDTH}vw`}">
        <!-- backgrounds -->
        <div class="Bg__brick"></div>
        <div class="Bg__grass-line h-16 -mt-16 z-10 relative"></div>
        <div class="Bg__grass z-0"></div>
      </div>

      <div class="View__screen bg-red-700" v-bind="FOOD.elAttrs">
        <FoodScreen/>
      </div>
      <div class="View__screen" v-bind="STAGE.elAttrs">
        <StageScreen/>
      </div>
      <div class="View__screen bg-violet-800" v-bind="CHILL.elAttrs">
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

        <!--      <button @click="STAGE.scrollTo()">&lt;</button>-->
        <!--      <button @click="CLUBS.scrollTo()">&gt;</button>-->
      </div>
      <div class="View__screen bg-orange-600" v-bind="CLUBS.elAttrs">
        <Wall @headingClick="CLUBS.scrollTo()">
          <span>Students</span>
          <span class="ml-32">in Brno</span>

          <template #append>
            <WallNavigation>
              <template #left>
                <SimpleArrow dir="left" @click="STAGE.scrollTo()"/>
              </template>
            </WallNavigation>
          </template>
        </Wall>
      </div>
    </div>
  </div>
</template>
