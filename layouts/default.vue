<script setup lang="ts">
import {STAGE, Screen} from "~/store/screen";
import {abortNavigation, useRoute, useView, onMounted} from "#imports";


const view = useView()
const route = useRoute()

onMounted(() => {
  const name = route.hash.slice(1)
  if (name) {
    const screen: Screen = view.screenByName(name)
    if (!screen)
      return abortNavigation('Unknown page')

    return view.goTo(screen)
  } else {
    return view.goTo(STAGE)
  }
})

</script>
<template>
  <div>
    <slot/>

    <Head>
      <Title>Erasmus Festival</Title>
    </Head>
  </div>
</template>
