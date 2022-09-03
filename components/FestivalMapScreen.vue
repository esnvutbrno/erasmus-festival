<script setup>
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from "@vue-leaflet/vue-leaflet";

import stageIconUrl from '../assets/img/icons/stage.png'
import flagParadeIconUrl from '../assets/img/icons/flag-parade.png'
import {FESTIVAL_MAP} from "../store/screen";

const zoom = ref(17);
const center = [49.198626, 16.601318];

</script>
<template>
  <div class="h-screen flex flex-col bg-[#000040]" v-bind="FESTIVAL_MAP.elAttrs">
    <h3
      class="
        mt-16
        text-white text-5xl
        font-festival
        drop-shadow-2xl
        cursor-pointer
        text-center
        mb-8
      "
    >
      MAP OF THE FESTIVAL
    </h3>
    <LMap
      ref="map"
      class="flex-grow"
      v-model:zoom="zoom"
      v-model:center="center"
      :min-zoom=7
      :max-bounds="[[51.2, 12], [48.5, 19]]"
    >
<!--      <LTileLayer-->
<!--        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"-->
<!--        layer-type="base"-->
<!--        name="OpenStreetMap"-->
<!--      />-->
      <LTileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"></LTileLayer>
      <LMarker :lat-lng="[49.2004081, 16.5985861]">
        <LIcon
          :icon-size="[50, 50]"
          :icon-anchor="[25, 25]"
          :icon-url="stageIconUrl"
        />
        <LTooltip>
          <strong>Faculty of Arts – Masaryk University</strong><br>
          Main stage
        </LTooltip>
      </LMarker>
      <LMarker :lat-lng="[49.196665, 16.603262]">
        <l-icon
          :icon-size="[50, 50]"
          :icon-anchor="[25, 25]"
          :icon-url="flagParadeIconUrl"
        />
        <LTooltip>
          <strong>Statue of T. G. Masaryk</strong><br>
          Beggining of Flag Parade
        </LTooltip>
      </LMarker>

    </LMap>
  </div>
</template>
<style lang="">
</style>
