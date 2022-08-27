<script setup>
import {useView} from "../composables/useView";
import {FOOD, STAGE} from "../store/screen";

const view = useView();
</script>
<template>
  <div class="h-full">
    <Wall>
      <template #append>
        <div class="h-[90%] w-2/3 flex flex-col justify-center">
          <img
            src="../assets/img/band-tails.png"
            alt="The Tails"
            class="self-start w-auto max-h-[33%]"
          >
          <img
            src="../assets/img/band-call.png"
            alt="Call from Home"
            class="self-end w-auto max-h-[33%]"
          >
          <img
            src="../assets/img/band-falls.png"
            alt="Break Falls"
            class="self-start w-auto max-h-[33%]"
          >
        </div>

        <WallNavigation>
          <template #left>
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
            <SimpleArrow dir="right" @click="view.goTo(STAGE)"/>
          </template>
        </WallNavigation>
      </template>
    </Wall>
<!--    <div class="relative max-w-4xl mx-auto text-white text-2xl flex flex-col justify-center h-[45%]">-->
<!--      <p class="drop-shadow-xl">-->
<!--        🎸 The Tails is a music band of four handsome men from Čejkovice near Hodonín town. As this village is so-->
<!--        legendary, The Tails could only raise the bar and bring some legendary music, not to make a complete a*s off-->
<!--        themselves.-->
<!--      </p>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "BandsScreen"
}
</script>

<style scoped>

</style>
