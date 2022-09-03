<script setup lang="ts">
import {FOOD, STAGE, PARTNERS, BANDS, CHILL, FLAG_PARADE} from '~/store/screen';
import StageSvg from '~/assets/svg/stage.svg?component'
import FansSvg from '~/assets/svg/fans.svg?component'
import MoreSignSvg from '~/assets/svg/more-sign.svg?component'
import PartnersSignSvg from '~/assets/svg/partners-sign.svg?component'
import SimpleArrow from "~/components/SimpleArrow.vue";
import WallNavigation from "~/components/WallNavigation.vue";
import {useView} from "~/composables/useView";
import ArrowSign from "~/components/ArrowSign.vue";

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
              class="w-32 lg:w-40 lg:translate-y-40 origin-bottom transition-transform hover:-rotate-2 cursor-pointer"
              @click="view.goTo(BANDS)"
            ></ArrowSign>

            <ArrowSign
              alt="Go to food section"
              title="Curious or hungry?"
              dir="left"
              text="FOOD"
              class="w-32 lg:w-40 lg:translate-y-6 -translate-y-24"
              @click="view.goTo(FOOD)"
            ></ArrowSign>
          </template>
          <template #right>
            <PartnersSignSvg
              alt="Go to partners section"
              title="See our partners"
              @click="view.goTo(PARTNERS)"
              class="w-32 lg:w-40 lg:translate-y-40 origin-bottom transition-transform hover:rotate-2 cursor-pointer"
            ></PartnersSignSvg>

            <ArrowSign
              alt="Go to chill section"
              title="Chill-zone, best place for all"
              dir="right"
              text="CHILL"
              class="w-32 lg:w-40 lg:translate-y-6 -translate-y-24"
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
          absolute inset-x-0 w-4/5 mx-auto max-h-[35vh]
          bottom-20 lg:bottom-4
      "></FansSvg>

      <WallNavigation disable-auto-placement disable-vertical-placement class="inset-x-0 bottom-4 top-[unset]">
        <template #right>
          <div class="w-screen flex flex-row justify-center">
            <MoreSignSvg
              @click="view.goTo(FLAG_PARADE)"
              class="transition-transform hover:translate-y-2 cursor-pointer w-48"
            ></MoreSignSvg>
          </div>
        </template>
      </WallNavigation>
    </div>
  </div>
</template>
