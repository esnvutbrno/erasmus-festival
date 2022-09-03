<script setup lang="ts">
import {onMounted} from 'vue'
import {CHILL, CLUBS, FOOD, STAGE, BANDS, TOTAL_WIDTH, PARTNERS} from '~/store/screen'
import Wall from "~/components/Wall.vue";
import SimpleArrow from "~/components/SimpleArrow.vue";
import ArrowSign from "~/components/ArrowSign.vue";
import {useView} from "~/composables/useView";

const view = useView()
</script>

<template>
  <div class="will-change-scroll" style="transform: translate3d(0, 0, 0)">
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

      <section class="View__screen bg-gray-200" v-bind="BANDS.elAttrs">
        <BandsScreen />
      </section>

      <section class="View__screen" v-bind="STAGE.elAttrs">
        <StageScreen/>
      </section>

      <section class="View__screen bg-violet-800" v-bind="CHILL.elAttrs">
        <ChillScreen/>
      </section>

      <section class="View__screen bg-orange-600" v-bind="CLUBS.elAttrs">
        <Wall @headingClick="CLUBS.goTo()">
          <span>Students</span>
          <span class="ml-16 lg:ml-32">in Brno</span>

          <template #append>
            <WallNavigation>
              <template #left>
                <SimpleArrow dir="left" @click="view.goTo(STAGE)"/>
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
      </section>

      <section class="View__screen" v-bind="PARTNERS.elAttrs">
        <PartnersScreen/>
      </section>
    </div>
  </div>
</template>
