<script setup lang="ts">
import {FLAG_PARADE, FESTIVAL_PROGRAMME} from "~/store/screen";
import {useView} from "~/composables/useView";

import MoreSignSvg from '~/assets/svg/more-sign.svg?component'

const view = useView()
</script>

<template>
  <section v-bind="FLAG_PARADE.elAttrs" class="h-screen relative">
    <div
      class="flex flex-col justify-center items-center"
    >
      <h2
        class="mt-16 text-white text-4xl xl:text-8xl font-festival drop-shadow-2xl cursor-pointer"
        @click="view.goTo(FLAG_PARADE)"

      >
        FLAG
        PARADE
      </h2>
      <h3 class="text-2xl xl:text-4xl text-white mt-8">
        2:45 PM, Brno City Centre
      </h3>


      <h3
        class="p-6 my-4 text-2xl font-festival text-white bg-red-600 flex flex-row items-center gap-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px" class="w-14 h-14"
             viewBox="0 0 404 404" style="enable-background:new 0 0 404 404;" xml:space="preserve">
          <path fill="#ffffff"
                d="M245.975,175.6c-4.4,0-8,3.6-8,8v12c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8v-12C253.975,179.2,250.375,175.6,245.975,175.6z"/>
          <path fill="#ffffff" d="M362.775,175.6l34-85.6c2-4.8,1.6-10.4-1.2-14.8c-2.8-4.8-8-7.2-13.2-7.2h-128.4v-8c0-22-18-40-40-40h-136V8
				c0-4.4-3.6-8-8-8c-4.4,0-8,3.6-8,8v20v192v168h-48c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h112c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8h-48
				V227.6h112.4v8c0,22,18,40,40,40h151.6c5.6,0,10.4-2.8,13.2-7.2c3.2-4.8,3.6-10.4,1.2-15.2L362.775,175.6z M230.375,259.6
				c-13.2,0-24-10.8-24-24v-16c0-4.4-3.6-8-8-8c-0.8,0-1.2,0-2,0.4c-0.8,0-1.2-0.4-2-0.4h-116.4v-176h136c13.2,0,24,10.8,24,24v88
				c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8v-64h128V84l-35.2,88.8c-0.8,2-0.8,4,0,6l35.2,80.8H230.375z"/>
          </svg>
        bring your national flags
      </h3>

      <a href="https://goo.gl/maps/BxpMVA9Bpucq1LSv8" target="_blank"
         class="p-8 my-4 bg-white text-4xl font-festival text-red-600 flex flex-row items-center gap-6 hover:scale-95 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>

        Meeting Point
      </a>

    </div>


    <WallNavigation disable-auto-placement class="inset-x-0 bottom-4">
      <template #center>
        <MoreSignSvg
          @click="view.goTo(FESTIVAL_PROGRAMME)"
          class="transition-transform hover:translate-y-2 cursor-pointer w-48"
        ></MoreSignSvg>
      </template>
    </WallNavigation>
  </section>
</template>

<style scoped>
section {

  background-position: center center;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .35)), url("~/assets/img/flag-parade.jpg");
}
</style>
