<script setup lang="ts">
import {FESTIVAL_INFO, FESTIVAL_TEAM} from "~/store/screen";

import MoreSignSvg from '~/assets/svg/more-sign.svg?component'
import ESNBrnoUnitedWhiteSvg from '../assets/svg/esn-bu-logo-white.svg?component'
import {useView} from "~/composables/useView";
import {FestivalMapScreen} from "#components";
import {FestivalProgrammeScreen} from "#components";

const view = useView()
</script>

<template>
  <section
    v-bind="FESTIVAL_INFO.elAttrs"
    class="bg-[#000040] mx-auto py-4 xl:py-8 text-white"
  >
    <div
      class="min-h-screen flex flex-col justify-center items-center"
    >
      <h1 class="font-festival text-white text-5xl text-center py-4">Erasmus Festival </h1>
      <h2 class="text-white text-3xl text-center py-4">17th of September, Brno</h2>
      <article class="max-w-xl mx-auto [&>p]:font-xl [&>p]:py-2 [&>p]:text-justify px-6 lg:px-0">
        <p>
          Going on an adventure to a new country while not knowing anybody around? Maybe it's a surprise, maybe not, but
          you're not alone! Believe me or not, everybody feels a bit scared about making new connections. Can at least
          something <strong>make it easier?</strong>
        </p>
        <p>
          Yeah, a festival! Just imagine: music playing in the background; you just finished a burger and took a sip of
          beer, the sun is shining, and you're looking around. Chill with others in the corner with the water pipes?
          Have
          a drink, cotton candy? Talk to people you enjoyed the flag parade with or dance with the crowd in front of the
          main stage. Maybe DJ on the second stage will make your day. <strong>It's upon you!</strong>
        </p>
        <p>
          On the 17th of September, all international students from Brno will be in the crowd walking through the city
          centre of Brno. They will be <strong>dancing, singing and holding the flags</strong> of their home countries. Then they'll be
          dancing to the music in the Festival area and enjoying the Festival atmosphere.
        </p>

        <h3 class="text-black text-center text-3xl py-4 xl:py-8 leading-relaxed bg-[#faae37]">
          Will you be there as well? <br> <strong>Buy
          your ticket in one <br> of the ESN offices.</strong>
        </h3>
      </article>

      <ESNBrnoUnitedWhiteSvg
        class="w-64 mx-auto my-8 px-8"
      />
      <MoreSignSvg
        class="hover:translate-y-2 transition-transform w-36 cursor-pointer"
        @click="view.goTo(FESTIVAL_TEAM)"
      ></MoreSignSvg>
    </div>
  </section>
</template>
