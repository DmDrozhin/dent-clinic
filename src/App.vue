<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import OfficeGeo from '@/components/OfficeGeo.vue';
import SiteBanner from '@/components/SiteBanner.vue';
import SliderSection from '@/components/SliderSection.vue';

import DentLifeHeader from '@/components/DentLifeHeader.vue';
import DentLifeFooter from '@/components/DentLifeFooter.vue';
import CardsWrapper from '@/components/CardsWrapper.vue';
import { useMaineStore } from '@/stores/main.store.ts';
const store = useMaineStore();
</script>

<template>
  <v-responsive class="dent-life border rounded">
    <v-app class="dent-life-app">
      <DentLifeHeader />
      <v-main min-width="320">
        <section class="dent-life__section banner">
          <v-container class="dl-container mx-auto pa-0" max-width="1280">
            <SiteBanner />
          </v-container>
        </section>
        <section class="dent-life__section cards">
          <v-img
            :src="store.userIconsMap['bg-5.svg']"
            absolute
            cover
            position="center center"
            style="z-index: 0"
          />
          <v-container class="dl-container mx-auto" max-width="1280">
            <CardsWrapper />
          </v-container>
        </section>
        <section class="dent-life__section slider">
          <v-img
            :src="store.userIconsMap['bg-6.svg']"
            absolute
            cover
            position="center top"
            style="z-index: 0"
          />
          <v-container class="dl-container mx-auto pa-0" max-width="1280">
            <SliderSection />
          </v-container>
        </section>

        <v-container max-width="1280">
          <!-- <h1>Main Content</h1> -->
          <!-- <HelloWorld msg="You did it!" /> -->
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
          <RouterView />
        </v-container>
        <section class="dent-life__section map">
          <OfficeGeo />
        </section>
      </v-main>
      <DentLifeFooter />
    </v-app>
  </v-responsive>
</template>

<style lang="scss" scoped>
.dent-life {
  outline: 1px solid rgba(11, 88, 221, 0.393);
  min-width: 320px;
  &__section {
    position: relative;
    width: 100%;

    &.banner {
      max-height: 400px;
      background-color: #babeb9;
      z-index: 1;
    }
    &.banner::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      background: #aaaba4;
      z-index: 0;
    }
    &.cards {
      padding: 32px 0;
      min-height: 300px;
      // background-color: #E8EAE6;
      // background-color: #37c437;
      overflow: hidden;
    }
    &.slider {
      padding: 32px 0 16px 0;
      min-height: 400px;
      background: $black-lighten3;
      background: radial-gradient(circle, rgb(187, 187, 187) 0%, rgb(116 116 116) 100%);
    }
  }
}
.dl-container {
  z-index: 1;
  // outline: 1px solid rgba(221, 11, 88, 0.393);
}
</style>
