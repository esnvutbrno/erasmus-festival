<script setup lang="ts">
import {FOOD, STAGE, CHILL} from '~/store/screen';
import StageSvg from '~/assets/svg/stage.svg?component'


</script>

<template>
  <div class="
    relative w-full h-full
    flex flex-col
    items-center
  ">
    <div class="w-full relative pt-8">
      <StageSvg
        class="Stage__img w-3/4 mx-auto relative cursor-pointer"
        @click="STAGE.scrollTo()"
      />
      <div class="Bg__grass-line absolute w-2/3 mx-auto bottom-0 left-0 right-0 h-12"></div>
      <!--      <svg class="Stage__img w-3/4 mx-auto relative cursor-pointer" viewBox="0 0 121 77">-->
      <!--        <use :xlink:href="import('@/assets/svg/stage.svg') + '#stage'"/>-->
      <!--      </svg>-->
    </div>
    <div class="w-full flex flex-row justify-between -mt-[18%] px-24">
      <img
        src="~/assets/svg/food-sign.svg?url"
        alt="Go to food section"
        title="Curious or hungry?"
        class="
          w-56 relative cursor-pointer
          duration-300 transition-transform origin-bottom-right -rotate-6 hover:rotate-[-9deg]
        "
        @click="FOOD.scrollTo()"
      >
      <img
        src="~/assets/svg/chill-sign.svg?url"
        alt="Go to chill section"
        title="Chill-zone, best place for all"
        class="
          w-56 relative cursor-pointer
          duration-300 transition-transform origin-bottom-left rotate-12 hover:rotate-[15deg]
        "
        @click="CHILL.scrollTo()"
      >
    </div>
  </div>
</template>


<style scoped>
.Stage__img {
  @apply w-3/4;
  max-height: 65vh;
}
</style>

<style>
@keyframes PandaHandLeft {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10%);
  }
  75% {
    transform: translateY(5%);
  }
}

@keyframes PandaHandRight {
  0%, 30% {
    transform: translate(0, 0);
  }
  70%, 100% {
    transform: translate(-8%, -4%);
  }
}

@keyframes PeaBody {
  0%, 30% {
    transform: rotate(0deg);
  }
  70%, 100% {
    transform: rotate(-10deg);
  }
}

@keyframes PeaLips {
  0%, 30% {
    transform: scale(1);
  }
  70%, 100% {
    transform: scale(1.1);
  }
}

@keyframes CrocoHandLeft {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10%);
  }
  75% {
    transform: translateY(10%);
  }
}

@keyframes CrocoHandRight {
  0% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(15deg);
  }
  75% {
    /*transform: translateY(5%);*/
  }
}

#panda-hand-left {
  animation: ease-in-out PandaHandLeft 200ms infinite alternate;
}

#panda-hand-right {
  animation: ease-in-out PandaHandRight 1500ms infinite alternate;
}

#pea-body {
  transform-box: fill-box;
  animation: ease-in-out PeaBody 1200ms infinite alternate;
  transform-origin: bottom center;
}

#pea-lips {
  transform-box: fill-box;
  animation: ease-in-out PeaLips 400ms infinite alternate;
  transform-origin: right;
}

#croco-hand-left {
  transform-box: fill-box;
  animation: ease-in-out CrocoHandLeft 400ms infinite alternate;
}

#croco-hand-right {
  transform-box: fill-box;
  animation: ease-in-out CrocoHandRight 400ms infinite alternate;
  transform-origin: top right;
}


</style>
