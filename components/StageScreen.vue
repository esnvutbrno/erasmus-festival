<script setup lang="ts">
import {FOOD, STAGE, BANDS, CHILL, FLAG_PARADE} from '~/store/screen';
import StageSvg from '~/assets/svg/stage.svg?component'
import FansSvg from '~/assets/svg/fans.svg?component'
import FestivalBannerSvg from '~/assets/svg/festival-banner.svg?component'
import FoodSignSvg from '~/assets/svg/food-sign.svg?component'
import ChillSignSvg from '~/assets/svg/chill-sign.svg?component'
import SimpleArrow from "~/components/SimpleArrow.vue";
import WallNavigation from "~/components/WallNavigation.vue";
import {useView} from "~/composables/useView";

const view = useView()

</script>

<template>
  <div class="h-full relative">
    <Wall>
      <template #append>
        <WallNavigation>
          <template #left>
            <ArrowSign
              alt="Go to bands section"
              title="Music fan?"
              dir="left"
              text="BANDS"
              class="w-40"
              @click="view.goTo(BANDS)"
            ></ArrowSign>

            <ArrowSign
              alt="Go to food section"
              title="Curious or hungry?"
              dir="left"
              text="FOOD"
              class="w-40"
              @click="view.goTo(FOOD)"
            ></ArrowSign>
          </template>
          <template #right>
            <ArrowSign
              alt="Go to chill section"
              title="Chill-zone, best place for all"
              dir="right"
              text="CHILL"
              class="w-40"
              @click="view.goTo(CHILL)"
            ></ArrowSign>
          </template>
        </WallNavigation>
      </template>
    </Wall>


    <div class="h-[45%] relative">
      <!-- stage itself -->
      <StageSvg
        class="
          absolute inset-x-0 mx-auto bottom-3/4
          cursor-pointer max-h-[65vh]
        "
        @click="view.goTo(STAGE)"
      />

      <FansSvg
        class="
          absolute bottom-4 inset-x-0 w-4/5 mx-auto max-h-[35vh]
      "></FansSvg>

      <WallNavigation>
        <template #right>
          <SimpleArrow
            @click="view.goTo(FLAG_PARADE)"
            dir="down"
            class="text-white font-festival text-4xl"
          >
            vvv
          </SimpleArrow>
        </template>
      </WallNavigation>
    </div>
  </div>
</template>
