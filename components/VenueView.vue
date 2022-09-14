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

      <section class="View__screen" v-bind="STAGE.elAttrs">
        <StageScreen/>
      </section>

      <section class="View__screen bg-[#000040]" v-bind="CHILL.elAttrs">
        <ChillScreen/>
      </section>

      <section class="View__screen bg-[#000040]" v-bind="PARTNERS.elAttrs">
        <PartnersScreen/>
      </section>
    </div>
  </div>
</template>
