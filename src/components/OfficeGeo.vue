<script setup lang="ts">
  import { computed, ref, watchEffect } from 'vue';
  import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map';
  import { createAssetMap } from '@/utils/assets.ts';
  import ContactsBlock from '@/components/ContactsBlock.vue';
  import { useMaineStore } from '@/stores/main.store.ts';

  interface Props {
    options?: Record<string, unknown>;
  }
  withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  const store = useMaineStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedLanguage = computed(() => {
    const lang = store.currentLang?.toLowerCase();
    if (lang === 'ua') return 'uk';
    return ['uk', 'en', 'ru'].includes(lang || '') ? lang : 'uk';
  });

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const styleKey = import.meta.env.VITE_GOOGLE_GRAY_MAP;

  const region = ref('UA');
  const center = { lat: 50.3891, lng: 30.382977 };
  const zoom = ref(17);
  const markerOptions = computed(() => ({
    position: center,
    title: store.currentMeta?.name || 'Дент-Лайф'
  }));

  const mapRef = ref<InstanceType<typeof GoogleMap> | null>(null);
  watchEffect(() => {
    if (mapRef.value && mapRef.value.map) {
      console.log('Map instance:', mapRef.value.ready);
    }
  });

  const infoWindow = ref(true); // Will be open when mounted

  const userIcons = import.meta.glob<{ default: string }>('@/assets/images/ui/*', { eager: true });
  const userIconsMap = createAssetMap(userIcons);

  watchEffect(() => {
    if (mapRef.value?.ready && mapRef.value.map) {
      const map = mapRef.value.map;
      map.setOptions({
        streetViewControl: false, // убираем Pegman
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: true, // оставляем масштаб
        disableDefaultUI: false // отключает все стандартные кнопки (если true)
      });
      google.maps.event.addListenerOnce(map, 'idle', () => {
        // Сдвиг через 300 мс после полной загрузки
        setTimeout(() => {
          map.panBy(0, -80); // сдвинет карту вниз
        }, 300);
      });
    }
  });
</script>

<template>
  <div class="map-block">
    <v-alert
      v-if="!apiKey"
      type="error"
      class="mb-4">
      Google Maps API Key is missing!
    </v-alert>
    <v-card>
      <GoogleMap
        :api-key="apiKey"
        :map-id="styleKey"
        language="uk"
        :region="region"
        :center="center"
        :zoom="zoom"
        ref="mapRef"
        class="map-block__google-map"
        :options="{ disableDefaultUI: true }">
        <AdvancedMarker
          class="advanced-marker"
          :options="{ position: markerOptions.position }">
          <template #content>
            <div class="dent-life-sign">
              <v-img
                class="dent-life-sign__image"
                :src="userIconsMap['logo-white.svg']"
                max-width="14"
                alt="logo" />
              <span class="dent-life-sign__text">{{ markerOptions.title }}</span>
            </div>
          </template>
          <InfoWindow
            v-model="infoWindow"
            class="advanced-marker__info">
            <ContactsBlock />
          </InfoWindow>
        </AdvancedMarker>
      </GoogleMap>
    </v-card>
  </div>
</template>
<style lang="scss" scoped>
  @use '@/styles/settings.scss';
  .map-block {
    &__google-map {
      width: 100%;
      height: 500px;
      @include settings.respond-down(md) {
        height: 600px;
      }
    }
    .advanced-marker {
      .dent-life-sign {
        $sign-color: rgb(var(--v-theme-secondary));
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background-color: $sign-color;
        padding: 8px 12px;
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
        &__image {
          width: 100%;
          flex-shrink: 0;
        }
        &__text {
          font-size: 0.75rem;
          flex-shrink: 0;
          letter-spacing: 1.5px;
          font-weight: 500;
          color: $white;
          line-height: normal;
        }
      }
    }
  }
</style>
<style lang="scss">
  @use '@/styles/settings.scss';

  .map-block {
    &__google-map {
      .gm-style-iw.gm-style-iw-c {
        min-width: 295px !important;
      }
      .gm-style-iw-chr {
        position: relative;
      }
      .gm-style-iw-ch {
        display: none;
      }
      .gm-style-iw-d {
        // padding-right: 12px !important;
        // padding-inline-end: 12px !important;
        overflow: hidden !important;
        padding: 0 12px 12px 0 !important;
      }
      .gm-ui-hover-effect {
        position: absolute !important;
        top: 4px;
        right: 4px;
        width: 32px !important;
        height: 32px !important;
        display: grid !important;
        place-content: center;
        border-radius: 50% !important;
        background: rgba(0, 0, 0, 0.2) !important;
        & > span {
          margin: 0 !important;
          width: 20px !important;
          height: 20px !important;
        }
      }
      .advanced-marker {
        &__info {
          padding-top: 12px;
        }
      }
      // removes Pegman in the bottom right corner, brutal way
      // .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom {
      //   .gm-svpc {
      //     display: none !important;
      //   }
      // }
    }
  }
</style>
