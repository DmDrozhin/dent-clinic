<script setup lang="ts">
  import { computed } from 'vue';
  import { CONTACTS } from '@/settings/Dent-Life.ts';
  import { useMaineStore } from '@/stores/main.store.ts';
  // import DentLifeLogo from '@/components/DentLifeLogo.vue';
  import { formatPhone } from '@/utils/assets.ts';
  import { getImagePath } from '@/utils/assets.ts';
  import { useDisplay } from 'vuetify';

  const entrance = getImagePath('entrance.webp');
  const { mdAndUp } = useDisplay();

  const store = useMaineStore();
  interface Props {
    options?: Record<string, unknown>;
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  const currentMeta = computed(() => store.currentMeta || {});

  const defaultOptions = {};
  const mainOptions = computed(() => ({
    ...defaultOptions,
    ...props.options,
    ...currentMeta.value,
    ...CONTACTS
  }));

  const formattedPhones = computed(() => ({
    phone1: formatPhone(mainOptions.value.phone_1),
    phone2: formatPhone(mainOptions.value.phone_2),
    viber: formatPhone(mainOptions.value.viber)
  }));
</script>

<template>
  <div class="contacts">
    <div class="contacts__left-side">
      <v-img
        class="contacts__outdoor-pic"
        :src="entrance"
        absolute
        cover
        alt="dent-life-outdoor" />
      <!-- <DentLifeLogo :options="{ mainHeader: false, maxWidth: 32, light: false, customClass: 'dl-center' }" /> -->
    </div>
    <div
      class="contacts__right-side"
      v-if="mdAndUp">
      <div class="contacts__content">
        <div
          v-if="mainOptions.address"
          class="contacts__wrapper meta address">
          <v-img
            class="contacts__icon"
            :src="store.userIconsMap['meta-geo.svg']"
            max-width="20" />
          <div
            class="contacts__address"
            v-html="mainOptions.address"></div>
        </div>
        <div
          v-if="mainOptions.phone_1 || mainOptions.phone_2"
          class="contacts__wrapper meta">
          <v-img
            class="contacts__icon"
            :src="store.userIconsMap['meta-phone.svg']"
            max-width="20" />
          <div class="contacts__phones">
            <span v-if="mainOptions.phone_1">
              <a :href="`tel:${mainOptions.phone_1}`">{{ formattedPhones.phone1 }}</a>
            </span>
            <span v-if="mainOptions.phone_2">
              <a :href="`tel:${mainOptions.phone_2}`">{{ formattedPhones.phone2 }}</a>
            </span>
          </div>
        </div>
        <div
          class="contacts__wrapper meta"
          v-if="mainOptions.viber">
          <v-img
            class="contacts__icon"
            :src="store.userIconsMap['meta-viber.svg']"
            max-width="20" />
          <div class="contacts__viber">
            <a :href="`viber://chat?number=${mainOptions.viber}`">Viber: {{ formattedPhones.viber }}</a>
          </div>
        </div>

        <div
          v-if="mainOptions.email"
          class="contacts__wrapper meta">
          <v-img
            class="contacts__icon"
            :src="store.userIconsMap['meta-email.svg']"
            max-width="18" />
          <div class="contacts__email">
            <a :href="`mailto:${mainOptions.email}`">{{ mainOptions.email }}</a>
          </div>
        </div>
        <div
          v-if="mainOptions.schedule"
          class="contacts__wrapper meta schedule">
          <v-img
            class="contacts__icon"
            :src="store.userIconsMap['meta-schedule.svg']"
            max-width="20" />
          <div
            class="contacts__schedule"
            v-html="mainOptions.schedule"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- <v-divider class="my-3" /> -->
</template>

<style lang="scss" scoped>
  @use '@/styles/settings.scss';

  .contacts {
    width: 100%;
    min-height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    &__left-side {
      position: relative;
      min-width: 320px;
      aspect-ratio: 16/10;
      @include settings.respond-down(sm) {
        min-width: 270px;
      }
    }
    &__right-side {
      flex-shrink: 0;
    }
    &__outdoor-pic {
      position: absolute;
    }
    &__content {
      position: relative;
      font-weight: 500;
    }
    &__wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      &.meta * {
        font-family: 'jost', sans-serif;
        color: black;
        gap: 12px;
      }
    }
    &__icon {
      flex-shrink: 0;
      width: 100%;
    }
    &__address,
    &__schedule {
      padding: 2px 4px;
    }
  }
</style>
<style lang="scss"></style>
