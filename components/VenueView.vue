<script setup lang="ts">
import {onMounted} from 'vue'
import {CHILL, CLUBS, FOOD, STAGE, BANDS, TOTAL_WIDTH} from '~/store/screen'
import Wall from "~/components/Wall.vue";
import SimpleArrow from "~/components/SimpleArrow.vue";
import ArrowSign from "~/components/ArrowSign.vue";


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

      <section class="View__screen bg-red-700" v-bind="FOOD.elAttrs">
        <FoodScreen/>
      </section>

      <section class="View__screen bg-gray-600" v-bind="BANDS.elAttrs">
        <Wall>
          <span>BANDS</span>

          <template #append>
            <WallNavigation>
              <template #left>
                <ArrowSign
                  alt="Go to food section"
                  title="Curious or hungry?"
                  dir="left"
                  text="FOOD"
                  class="w-40"
                  @click="FOOD.scrollTo()"
                ></ArrowSign>
              </template>

              <template #right>
                <SimpleArrow dir="right" @click="STAGE.scrollTo()"/>
              </template>
            </WallNavigation>
          </template>
        </Wall>
      </section>

      <section class="View__screen" v-bind="STAGE.elAttrs">
        <StageScreen/>
      </section>

      <section class="View__screen bg-violet-800" v-bind="CHILL.elAttrs">
        <ChillScreen />
      </section>

      <section class="View__screen bg-orange-600" v-bind="CLUBS.elAttrs">
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
      </section>
    </div>
  </div>
</template>
