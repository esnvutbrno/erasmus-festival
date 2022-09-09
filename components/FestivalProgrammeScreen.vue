<script setup>
import { ref } from "vue";

import stageIconUrl from "../assets/img/icons/stage.png";
import flagParadeIconUrl from "../assets/img/icons/flag-parade.png";
import { FESTIVAL_PROGRAMME, FESTIVAL_INFO } from "../store/screen";
import { useView } from "~/composables/useView";

const view = useView();

import MoreSignSvg from "~/assets/svg/more-sign.svg?component";
import TailsSvg from "../assets/svg/tails.svg?component";
import FallsSvg from "../assets/svg/falls.svg?component";
import CfHSvg from "../assets/svg/cfh.svg?component";
import Dj2Svg from "../assets/svg/dj-1.svg?component";
import Dj1Svg from "../assets/svg/dj-2.svg?component";
import Dj3Svg from "../assets/svg/dj-3.svg?component";
</script>
<template>
  <div
    class="min-h-screen flex flex-col relative FestivalProgrammeScreen"
    v-bind="FESTIVAL_PROGRAMME.elAttrs"
  >
    <div class="FestivalProgrammeScreen__bg"></div>
    <div class="z-10">
      <h3
        class="
          mt-16
          text-5xl
          font-festival
          drop-shadow-2xl
          cursor-pointer
          text-center
        "
      >
        PROGRAMME
      </h3>

      <div class="xl:px-12 lg:px-8 px-4 pt-8 pb-8 overflow-scroll">
        <table
          class="
            min-w-[400px]
            table-fixed
            w-full
            border-collapse
            select-none
            [&_th]:border-[#000040]
            [&_th]:h-10
            [&_th]:border-b-[1px]
            [&_th]:border-r-[1px]
            [&_th]:p-2
            [&_td]:border-[#000040]
            [&_td]:h-14
            [&_td]:border-b-[1px]
            [&_td]:border-r-[1px]
            [&_td]:p-2
            border-[#000040] border-b-[1px]
          "
        >
          <thead>
            <tr class="[&>th]:font-normal bg-[#000040] text-white">
              <th class="w-24"><strong>Time</strong></th>
              <th>
                <strong>Masaryk University</strong><br />Komenského náměstí 2
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                15:00
              </th>
              <td rowspan="2" class="font-festival text-2xl bg-[#e3e3ff]">
                Flag<br />Parade
              </td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                16:00
              </th>
            </tr>
          </tbody>
        </table>
        <table
          class="
            min-w-[400px]
            table-fixed
            w-full
            border-collapse
            select-none
            [&_th]:border-[#000040]
            [&_th]:h-10
            [&_th]:border-b-[1px]
            [&_th]:border-r-[1px]
            [&_th]:p-2
            [&_td]:border-[#000040]
            [&_td]:h-14
            [&_td]:border-b-[1px]
            [&_td]:border-r-[1px]
            [&_td]:p-2
            border-[#000040] border-b-[1px]
          "
        >
          <thead>
            <tr class="[&>th]:font-normal bg-[#000040] text-white">
              <th class="w-24"><strong>Time</strong></th>
              <th><strong>Main stage</strong></th>
              <th><strong>BUmerang stage</strong><br />(DJs and Games)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                17:05
              </th>
              <td rowspan="2" class="bg-[#e3e3ff] justify-center relative">
                <TailsSvg class="w-24 max-w-full absolute m-auto inset-0" />
              </td>
              <td></td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                17:30
              </th>
              <td></td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                17:50
              </th>
              <td></td>
              <td
                class="bg-[#e3e3ff] border-0 flex justify-center items-center"
              >
                <Dj1Svg class="w-40 max-w-full" />
              </td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                18:10
              </th>
              <td></td>
              <td></td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                18:30
              </th>
              <td rowspan="2" class="bg-[#e3e3ff] justify-center relative">
                <FallsSvg class="w-32 max-w-full absolute m-auto inset-0" />
              </td>
              <td class="bg-[#e3e3ff]">
                <span class="font-festival">1st game</span>
              </td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                19:00
              </th>
              <td></td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                19:15
              </th>
              <td></td>
              <td
                class="bg-[#e3e3ff] border-0 flex justify-center items-center"
              >
                <Dj2Svg class="w-40 max-w-full" />
              </td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                19:45
              </th>
              <td></td>
              <td></td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                20:05
              </th>
              <td class="bg-[#e3e3ff]">
                <span class="font-festival">Prizes draw</span>
              </td>
              <td></td>
            </tr>

            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                20:20
              </th>
              <td rowspan="2" class="bg-[#e3e3ff] justify-center relative">
                <span class="relative w-full h-full block">
                  <CfHSvg class="w-64 max-w-full absolute m-auto inset-0" />
                </span>
              </td>
              <td class="bg-[#e3e3ff]">
                <span class="font-festival">2nd game</span>
              </td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                21:10
              </th>
              <td></td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                21:45
              </th>
              <td
                class="bg-[#e3e3ff] border-0 flex justify-center items-center"
              >
                <Dj3Svg class="w-40 max-w-full" />
              </td>
              <td></td>
            </tr>
            <tr class="text-center">
              <th class="font-festival text-2xl bg-[#000040] text-white">
                22:00
              </th>
              <td colspan="2" class="font-festival text-2xl bg-[#e3e3ff]">
                AFTERPARTY
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-center">
        <MoreSignSvg
          class="
            hover:translate-y-2
            transition-transform
            w-36
            cursor-pointer
            mb-24
          "
          @click="view.goTo(FESTIVAL_INFO)"
        ></MoreSignSvg>
      </div>
    </div>
  </div>
</template>
<style lang="">
</style>
