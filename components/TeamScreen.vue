<script setup lang="ts">
import { FESTIVAL_TEAM, FESTIVAL_MAP } from "~/store/screen";

import MoreSignSvg from "~/assets/svg/more-sign.svg?component";
import { useView } from "~/composables/useView";

const view = useView();
</script>

<template>
  <section
    v-bind="FESTIVAL_TEAM.elAttrs"
    class="mx-auto py-4 xl:py-8 text-[#000040] relative"
  >
    <div class="Festival__bg-brick"></div>
    <div class="flex flex-col justify-center items-center">
      <h2 class="font-festival text-[#000040] text-5xl text-center py-4">
        FESTIVAL TEAM
      </h2>

      <div class="flex max-w-4xl flex-wrap justify-center text-center py-8">
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/marijana.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Marijana Brajdić</h3>
          <p class="opacity-75">Programme, afterparty</p>
        </div>
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/radmila.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Radmila Centnerová</h3>
          <p class="opacity-75">Food stands</p>
        </div>
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/adela.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Adéla Hurtová</h3>
          <p class="opacity-75">Flag Parade, partners</p>
        </div>
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/radka.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Radka Konečná</h3>
          <p class="opacity-75">Backstage service, programme</p>
        </div>
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/joe.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Joe Kolář</h3>
          <p class="opacity-75">Tech, bands, website</p>
        </div>
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/lukas.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Lukáš Pánek</h3>
          <p class="opacity-75">Tech, bands, website</p>
        </div>
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/matej.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Matej Špernoga</h3>
          <p class="opacity-75">PR, bars, logistics</p>
        </div>
        <div class="team__person w-1/2 md:w-1/4 p-4 mb-4 flex flex-col items-center">
          <img
            src="/assets/img/team/filip.jpg"
            class="mb-4 shrink-0 w-32 h-32 rounded-full"
          />
          <h3 class="font-bold text-xl">Filip Wagner</h3>
          <p class="opacity-75">Finance</p>
        </div>
      </div>

      <MoreSignSvg
        class="hover:translate-y-2 transition-transform w-36 cursor-pointer"
        @click="view.goTo(FESTIVAL_MAP)"
      ></MoreSignSvg>
    </div>
  </section>
</template>
