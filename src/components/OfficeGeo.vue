<script setup lang="ts">
import { ref } from 'vue';
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map';
import { createAssetMap } from '@/utils/assets.ts';
import ContactsBlock from '@/components/ContactsBlock.vue';

interface Props {
  options?: Record<string, unknown>;
}
const props = withDefaults(defineProps<Props>(), {
  options: () => ({}), // дефолтное значение
});

const mapKey = props.options.apiKey || import.meta.env.VITE_GOOGLE_API_KEY;
const mapId = props.options.apiKey || import.meta.env.VITE_GOOGLE_GRAY_MAP_ID;

// выбранный язык (по умолчанию украинский)
const selectedLanguage = ref('uk');
const region = ref('UA');

const languageOptions = [
  { title: 'Українська', value: 'uk', name: 'Дент-Лайф' },
  { title: 'English', value: 'en', name: 'Dent-Life' },
  { title: 'Русский', value: 'ru', name: 'Дент-Лайф' },
];

const center = { lat: 50.3891, lng: 30.382977 };
const zoom = ref(17);
const markerOptions = {
  position: center,
  title: 'Dent-Life',
};

const mapRef = ref<InstanceType<typeof GoogleMap> | null>(null);

const onMapLoaded = (map: google.maps.Map) => {
  console.log('Map loaded with language:', selectedLanguage.value);
  console.log('API Key used:', mapKey ? '✅ Loaded' : '❌ Missing');
  console.log('Map instance:', map);
};
const infoWindow = ref(true); // Will be open when mounted

const userIcons = import.meta.glob<{ default: string }>('@/assets/images/ui/*', { eager: true });
const userIconsMap = createAssetMap(userIcons);
</script>

<template>
  <div class="map-block">
    <v-card class="mb-4">
      <v-select v-model="selectedLanguage" :items="languageOptions" label="Map Language" dense />
    </v-card>
    <v-alert v-if="!mapKey" type="error" class="mb-4"> Google Maps API Key is missing! </v-alert>
    <v-card>
      <GoogleMap
        :key="selectedLanguage"
        :api-key="mapKey"
        :map-id="mapId"
        :language="selectedLanguage"
        :region="region"
        :center="center"
        :zoom="zoom"
        @loaded="onMapLoaded"
        style="width: 100%; height: 500px"
        ref="mapRef"
        class="map-block__google-map"
      >
        <AdvancedMarker class="marker" :options="{ position: markerOptions.position }">
          <template #content>
            <div class="marker__sign">
              <v-img
                class="marker__sign-image"
                :src="userIconsMap['logo-white.svg']"
                max-width="16"
                alt="logo"
              />
              <span class="marker__sign-text">{{ markerOptions.title }}</span>
            </div>
          </template>
          <InfoWindow v-model="infoWindow" class="marker__info">
            <ContactsBlock />
          </InfoWindow>
        </AdvancedMarker>
      </GoogleMap>
    </v-card>
  </div>
</template>
<style lang="scss" scoped>
.map-block {
  .marker {
    &__sign {
      $sign-color: green;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;
      background-color: $sign-color;
      padding: 4px 8px;
      border-radius: 4px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $sign-color;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &__sign-image {
      width: 100%;
      flex-shrink: 0;
    }
    &__sign-text {
      flex-shrink: 0;
      color: white;
      letter-spacing: 2px;
      font-weight: 500;
    }
    &__info {
      padding-top: 24px;
    }
  }
}
</style>
<style lang="scss">
.map-block {
  &__google-map {
    .gm-style-iw.gm-style-iw-c {
      min-width: 260px !important;
    }
    .gm-style-iw-chr {
      position: relative;
    }
    .gm-style-iw-ch {
      display: none;
    }
    .gm-ui-hover-effect {
      position: absolute !important;
      right: 0;
      width: 32px !important;
      height: 32px !important;
      & > span {
        margin: 0 !important;
      }
    }
  }
}
</style>
