<script setup lang="ts">
import { computed } from 'vue';
import { CONTACTS } from '@/settings/Dent-Life.ts';
import { useMaineStore } from '@/stores/main.store.ts';

const store = useMaineStore();
interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const currentMeta = computed(() => store.currentMeta || {});

const defaultOptions = {};
const mainOptions = computed(() => ({
  ...defaultOptions,
  ...props.options,
  ...currentMeta.value,
  ...CONTACTS,
}));

// --- форматирование телефонов ---
function formatPhone(num: string): string {
  if (!num) return '';
  // убираем всё кроме цифр
  const digits = num.replace(/\D/g, '');
  // если номер в украинском формате (10 цифр после кода 0)
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
  }
  // если международный (например +380...)
  if (digits.length === 12 && digits.startsWith('380')) {
    return `(${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10)}`;
  }
  return num; // fallback
}
const formattedPhones = computed(() => ({
  phone1: formatPhone(mainOptions.value.phone_1),
  phone2: formatPhone(mainOptions.value.phone_2),
  viber: formatPhone(mainOptions.value.viber),
}));
</script>

<template>
  <div class="contacts">
    <div class="contacts__wrapper title">
      <v-img
        class="marker__image"
        :src="store.userIconsMap['logo-green.svg']"
        max-width="32"
        alt="logo"
      />
      <h2 class="contacts__company-name">{{ mainOptions.name }}</h2>
    </div>
    <v-divider class="my-3" />
    <div class="contacts__content">
      <div v-if="mainOptions.address" class="contacts__wrapper meta address">
        <v-img :src="store.userIconsMap['meta-geo.svg']" width="20" />
        <div class="contacts__address" v-html="mainOptions.address"></div>
      </div>
      <div v-if="mainOptions.phone_1 || mainOptions.phone_2" class="contacts__wrapper meta">
        <v-img :src="store.userIconsMap['meta-phone.svg']" max-width="20" />
        <div class="contacts__phones">
          <span v-if="mainOptions.phone_1">
            <a :href="`tel:${mainOptions.phone_1}`">{{ formattedPhones.phone1 }}</a>
          </span>
          <span v-if="mainOptions.phone_2">
            <a :href="`tel:${mainOptions.phone_2}`">{{ formattedPhones.phone2 }}</a>
          </span>
        </div>
      </div>
      <div class="contacts__wrapper meta" v-if="mainOptions.viber">
        <v-img :src="store.userIconsMap['meta-viber.svg']" max-width="20" />
        <div class="contacts__viber">
          <a :href="`viber://chat?number=${mainOptions.viber}`"
            >Viber: {{ formattedPhones.viber }}</a
          >
        </div>
      </div>

      <div v-if="mainOptions.email" class="contacts__wrapper meta">
        <v-img :src="store.userIconsMap['meta-email.svg']" max-width="18" />
        <div class="contacts__email">
          <a :href="`mailto:${mainOptions.email}`">{{ mainOptions.email }}</a>
        </div>
      </div>
      <div v-if="mainOptions.schedule" class="contacts__wrapper meta schedule">
        <v-img :src="store.userIconsMap['meta-schedule.svg']" max-width="20" />
        <div class="contacts__schedule" v-html="mainOptions.schedule"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  min-height: 50px;
  &__company-name {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    font-weight: 600;
    margin: 0;
    color: green;
  }
  &__content {
    position: relative;
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
    &.title {
      justify-content: center;
    }
  }
  &__address, &__schedule {
    padding: 3px;
  }
}
</style>
<style lang="scss"></style>
