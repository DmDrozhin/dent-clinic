<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { CONTACTS } from '@/data/Dent-Life';

  import DentLifeLogo from '@/components/DentLifeLogo.vue';
  import LangSwitcher from '@/components/LangSwitcher.vue';
  import PhonesBlock from '@/components/MetaPhones.vue';
  import { useDisplay } from 'vuetify';
  import { useMaineStore } from '@/stores/main.store.ts';

  const store = useMaineStore();

  interface Props {
    options?: Record<string, unknown>;
  }

  const { smAndDown, mdAndUp, xlAndUp, width } = useDisplay();
  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });
  const xxs = computed(() => width.value < 400);

  const defaultOptions: Record<string, unknown> = {};

  const mainOptions = computed(() => ({
    ...props.options,
    ...defaultOptions,
    ...CONTACTS
  }));

  const drawer = ref(false);
  const group = ref(null);
  watch(group, () => {
    drawer.value = false;
  });
</script>

<template>
  <v-app-bar class="app-bar" color="primary" dark>
    <v-container class="dl-container mx-auto" max-width="1280">
      <div class="header-block">
        <DentLifeLogo
          @click="$router.push('/')"
          target="_self"
          :options="{ mainHeader: true, maxWidth: 40, light: true, customClass: '' }" />
        <div class="d-flex align-center justify-between ga-3">
          <v-btn-toggle
            v-if="xlAndUp"
            :key="101"
            v-model="group"
            class="d-none d-md-flex"
            variant="text"
            density="comfortable"
            mandatory
            base-color="white">
            <v-btn class="header-block__button prices" :href="`#prices`" variant="text">
              <v-img
                class="mr-2"
                :src="store.userIconsMap['save-money-wt.svg']"
                min-width="28"
                max-width="28" />
              Наші ціни
            </v-btn>
            <v-btn class="header-block__button contacts" :href="`#contacts`" variant="text">
              <v-img
                class="mr-2"
                :src="store.userIconsMap['meta-geo-wt.svg']"
                min-width="26"
                max-width="26" />
              Контакти
            </v-btn>
            <v-btn
              class="header-block__button viber"
              :href="`viber://chat?number=${mainOptions.viber}`"
              variant="text">
              <v-img
                class="mr-2"
                :src="store.userIconsMap['meta-viber-wt.svg']"
                min-width="26"
                max-width="26" />
              Viber дзвінок
            </v-btn>
          </v-btn-toggle>
          <v-divider v-if="mdAndUp" vertical color="white" thickness="2"></v-divider>
          <PhonesBlock v-if="!smAndDown" />
          <div class="d-flex align-center">
            <LangSwitcher v-if="!xxs" class="mr-3" />
            <v-app-bar-nav-icon
              v-if="!xlAndUp"
              variant="text"
              @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </div>
        </div>
      </div>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    color="rgba(0, 0, 0, 0.5)"
    temporary
    class="nav-drawer py-6 px-4">
    <v-btn
      class="nav-drawer__button tel mb-5"
      :href="`tel:${mainOptions.phone_1}`"
      block
      size="x-large"
      elevation="0"
      rounded="lg">
      <v-img class="mr-2" :src="store.userIconsMap['meta-phone-thin.svg']" min-width="24" max-width="24" />
      Тел. дзвінок
    </v-btn>
    <v-btn
      class="nav-drawer__button viber mb-5"
      :href="`viber://chat?number=${mainOptions.viber}`"
      block
      size="x-large"
      elevation="0"
      rounded="lg">
      <v-img class="mr-2" :src="store.userIconsMap['meta-viber.svg']" min-width="28" max-width="28" />
      Viber дзвінок
    </v-btn>
    <v-btn
      class="nav-drawer__button prices mb-5"
      :href="`#prices`"
      block
      size="x-large"
      elevation="0"
      rounded="lg">
      <v-img class="mr-2" :src="store.userIconsMap['save-money.svg']" min-width="28" max-width="28" />
      Наші ціни
    </v-btn>
    <v-btn
      class="nav-drawer__button contacts mb-5"
      :href="`#contacts`"
      block
      size="x-large"
      elevation="0"
      rounded="lg">
      <v-img class="mr-2" :src="store.userIconsMap['meta-geo.svg']" min-width="28" max-width="28" />
      Контакти
    </v-btn>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
  .header-block {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    align-items: center;
  }
</style>

<style lang="scss"></style>
