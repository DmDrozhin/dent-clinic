<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  // import HelloWorld from './components/HelloWorld.vue';
  import OfficeGeo from '@/components/OfficeGeo.vue';
  import SiteBanner from '@/components/SiteBanner.vue';
  import SliderSection from '@/components/SliderSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import PriceList from '@/components/PriceList.vue';

  import DentLifeHeader from '@/components/DentLifeHeader.vue';
  import DentLifeFooter from '@/components/DentLifeFooter.vue';
  import CardsWrapper from '@/components/CardsWrapper.vue';
  import { useMaineStore } from '@/stores/main.store.ts';
  import { onBeforeMount } from 'vue';
  import { getImagePath } from '@/utils/assets.ts';
  import { useDisplay } from 'vuetify';

  const store = useMaineStore();
  const cardsSectionBg = getImagePath('bg-section-cards.png');
  const backgroundImg = getImagePath('top-banner.jpg');
  const { mdAndUp } = useDisplay();

  onBeforeMount(() => {
    store.fetchPrices();
  });
</script>

<template>
  <v-responsive>
    <v-app class="dent-life">
      <DentLifeHeader />
      <v-main min-width="320">
        <section class="dent-life__section banner">
          <v-img
            :src="store.userIconsMap['bg-5.svg']"
            absolute
            cover
            position="center center"
            style="z-index: 0" />
          <v-container class="dl-container mx-auto pa-0" max-width="1280">
            <v-img
              class="banner__background"
              :class="{ 'faded-border-y': mdAndUp }"
              :src="backgroundImg"
              absolute
              cover
              position="center center"
              style="z-index: 0" />
            <SiteBanner />
          </v-container>
        </section>

        <section class="dent-life__section about">
          <v-img
            :src="store.userIconsMap['bg-7.svg']"
            absolute
            position="center 50%"
            :style="{ transform: 'rotate(180deg)' }"
            cover
            style="z-index: 0" />
          <v-container class="dl-container mx-auto pa-0" max-width="1280" style="z-index: 1">
            <AboutSection />
          </v-container>
        </section>

        <section class="dent-life__section cards">
          <v-img
            :src="cardsSectionBg"
            absolute
            cover
            max-width="1280"
            style="z-index: 0; left: unset; right: 0" />
          <v-container class="dl-container mx-auto" max-width="1280">
            <CardsWrapper />
          </v-container>
        </section>

        <section class="dent-life__section prices">
          <!-- <v-img
            :src="store.userIconsMap['bg-test.svg']"
            absolute
            cover
            style="z-index: 0"
          /> -->
          <v-container class="dl-container mx-auto" max-width="1280">
            <PriceList />
          </v-container>
        </section>

        <v-container max-width="1280">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
          <RouterView />
        </v-container>

        <section class="dent-life__section slider">
          <v-img
            :src="store.userIconsMap['bg-6.svg']"
            absolute
            position="right center"
            cover
            style="z-index: 0" />
          <v-container class="dl-container mx-auto pa-0" max-width="1280">
            <SliderSection />
          </v-container>
        </section>

        <section class="dent-life__section spacer-3">
          <v-img
            :src="store.userIconsMap['bg-7.svg']"
            absolute
            position="right 50%"
            :style="{ transform: 'rotate(180deg)' }"
            cover
            style="z-index: 0" />
        </section>

        <!-- <section class="dent-life__section spacer-2">
          <v-img
            :src="store.userIconsMap['bg-8.svg']"
            absolute
            position="right top"
            :style="{ transform: 'rotate(180deg)' }"
            style="z-index: 0" />
        </section> -->

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
    min-width: 320px;
    &__section {
      position: relative;
      width: 100%;
      transition: background 0.3s ease;
      &.about {
        min-height: 400px;
        background-color: rgba($secondary, 0.3);
        overflow: hidden;
        padding-top: 64px;
        z-index: 1;
      }
      &.spacer {
        min-height: 450px;
        background-color: rgba($secondary, 0.5);
      }
      &.spacer-3 {
        min-height: 450px;
        background-color: rgba($secondary, 0.3);
      }
      &.spacer-2 {
        min-height: 450px;
        background-color: #f5f5f5;
        background-color: #fff;
      }

      &.banner {
        max-height: 500px;
        background-color: #7a7c79;
        background-color: #fff;
        z-index: 1;
      }
      &.banner::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 100%;
        height: 100%;
        background: #6d6e6a;
        background: #fff;
        z-index: 0;
      }
      &.cards {
        padding: 64px 0 32px 0;
        min-height: 300px;
        // background-color: #E8EAE6;
        // background-color: #37c437;
        overflow: hidden;
        background-image: linear-gradient(
          to bottom,
          #6b6b6b,
          #737373,
          #7c7b7b,
          #848382,
          #8c8b8a,
          #908f8f,
          #959493,
          #999898,
          #9b9a9a,
          #9c9c9c,
          #9e9e9e,
          #a0a0a0
        );
      }
      &.prices {
        padding: 64px 0;
        min-height: 450px;
        background-color: rgba($secondary, 0.5);
      }
      &.slider {
        padding: 64px 0;
        min-height: 400px;
        // background: radial-gradient(circle, rgb(187, 187, 187) 0%, rgb(116 116 116) 100%);
        background: radial-gradient(circle, rgb(234 234 234) 0%, rgb(139 137 137) 100%);
      }
    }
  }
  .dl-container {
    position: relative;
    z-index: 1;
    // outline: 1px solid rgba(221, 11, 88, 0.393);
  }
  .faded-border-y {
    -webkit-mask-image: linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;

    mask-image: linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%);
  }
</style>
