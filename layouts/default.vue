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
      return view.goTo(STAGE)

    return view.goTo(screen)
  } else {
    return view.goTo(STAGE)
  }
})

</script>
<template>
  <div>
    <Head>
      <Title>Erasmus Festival 2022</Title>
      <Meta name="description"
            content="On the 17th of September, all international students from Brno will be in the crowd walking through the city centre of Brno. They will be dancing, singing and holding the flags of their home countries. Then they'll be dancing to the music in the Festival area and enjoying the Festival atmosphere."/>
      <Meta name="author" content="ESN Brno United"/>
      <Meta name="og:type" content="website"/>
      <Meta name="og:image" content="https://festival.esnbrno.cz/og.png"/>
      <Meta name="og:image:width" content="2536"/>
      <Meta name="og:image:height" content="1331"/>

      <Meta name="twitter:card" content="summary_large_image"/>
    </Head>

    <slot/>
  </div>
</template>
