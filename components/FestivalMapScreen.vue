<script setup>
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

const zoom = ref(16);
const center = [49.198626, 16.601318];
</script>
<template>
  <div>
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
    <l-map
      ref="map"
      v-model:zoom="zoom"
      style="height: 75vh"
      v-model:center="center"
    >
      <l-tile
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker :lat-lng="[49.2004081, 16.5985861]">
        <l-icon
          :icon-size="[50, 50]"
          :icon-anchor="[25, 25]"
          icon-url="/assets/img/icons/stage.png"
        />
        <l-tooltip>
          <strong>Faculty of Arts – Masaryk University</strong><br>
          Main stage
        </l-tooltip>
      </l-marker>
      <l-marker :lat-lng="[49.196665, 16.603262]">
        <l-icon
          :icon-size="[50, 50]"
          :icon-anchor="[25, 25]"
          icon-url="/assets/img/icons/flag-parade.png"
        />
        <l-tooltip>
          <strong>Statue of T. G. Masaryk</strong><br>
          Beggining of Flag Parade
        </l-tooltip>
      </l-marker>
      
    </l-map>
  </div>
</template>
<style lang="">
</style>