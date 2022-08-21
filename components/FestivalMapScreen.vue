<script setup>
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from "@vue-leaflet/vue-leaflet";

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
    <LMap
      ref="map"
      v-model:zoom="zoom"
      style="height: 75vh"
      v-model:center="center"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[49.2004081, 16.5985861]">
        <LIcon
          :icon-size="[50, 50]"
          :icon-anchor="[25, 25]"
          icon-url="/assets/img/icons/stage.png"
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
          icon-url="/assets/img/icons/flag-parade.png"
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