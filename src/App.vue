<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import OfficeGeo from '@/components/OfficeGeo.vue';
import SiteBanner from '@/components/SiteBanner.vue';
import SliderSection from '@/components/SliderSection.vue';

import DentLifeHeader from '@/components/DentLifeHeader.vue';
import DentLifeFooter from '@/components/DentLifeFooter.vue';
import CardsWrapper from '@/components/CardsWrapper.vue';
</script>

<template>
  <v-app class="dent-life-app">
    <DentLifeHeader />
    <v-main min-width="320">
      <v-container max-width="1280">
        <SiteBanner class="mb-10" />
        <CardsWrapper class="mb-5" />
        <SliderSection class="mb-5" />
        <!-- <h1>Main Content</h1> -->
        <!-- <HelloWorld msg="You did it!" /> -->
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <RouterView />
        <OfficeGeo />
      </v-container>
    </v-main>
    <DentLifeFooter />
  </v-app>
</template>

<style lang="scss" scoped>
.dent-life-app {
  outline: 1px solid rgba(11, 88, 221, 0.393);
  min-width: 320px;
}
.dl-container {
  outline: 1px solid rgba(221, 11, 88, 0.393);
}
</style>
