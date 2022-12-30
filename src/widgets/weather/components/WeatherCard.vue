<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { WeatherTypes } from "../constants/weather.types";

import Precipitation from "@/components/icons/Precipitation.vue";
import IconBase from "@/components/icon-base/IconBase.vue";
import PartlyCloudy from "./PartlyCloudy.vue";
import Low from "@/components/icons/Low.vue";
import Cloudy from "./Cloudy.vue";
import Stormy from "./Stormy.vue";
import Rainy from "./Rainy.vue";
import Snowy from "./Snowy.vue";
import Sunny from "./Sunny.vue";

const typesWeather = {
  Stormy,
  PartlyCloudy,
  Cloudy,
  Rainy,
  Snowy,
  Sunny,
};

const props = defineProps({
  contentColor: {
    type: String,
    required: true,
  },
  temperatureColor: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  dataCard: {
    type: Object,
    required: true,
  },
});

const weather = computed(() => typesWeather[WeatherTypes[props.dataCard.type]]);
</script>


<template>
  <div class="weather-card__wrapper">
    <div class="weather-card__date">
      <div class="weather-card__weekday">{{ dataCard.day }}</div>
      <div class="weather-card__number-date">{{ dataCard.numberDate }}</div>
    </div>
    <div
      :style="{ backgroundColor: backgroundColor }"
      class="weather-card__card card cloudy"
    >
      <component class="card__image" :is="weather"></component>
      <div :style="{ color: temperatureColor }" class="card__degree">
        {{ dataCard.degree }}
      </div>
      <div :style="{ color: contentColor }" class="card__content">
        <IconBase class="card__content-icon" :color="contentColor" :width="32">
          <Precipitation />
        </IconBase>
        <div class="card__content-precipitation">
          {{ dataCard.precipitation }}%
        </div>
      </div>
      <div :style="{ color: contentColor }" class="card__content">
        <IconBase class="card__content-icon" :color="contentColor" :width="32">
          <Low />
        </IconBase>
        <div class="card__content-low">{{ dataCard.low }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Krona+One&family=Oswald&display=swap");

.weather-card {
  &__wrapper {
    text-align: center;
    margin: 0 35px;
  }

  &__date {
    color: rgba(77, 176, 211, 1);
  }

  &__weekday {
    font-family: "Krona One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    letter-spacing: 0.2em;
  }

  &__number-date {
    font-family: "Krona One";
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 121px;
    display: flex;
    justify-content: center;
  }
}

.card {
  width: 160px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
    14px 5px 45px rgba(32, 77, 92, 0.7);
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;

  &__image {
    flex: 0 1 220px;
  }

  &__degree {
    font-family: var(--clash);
    font-family: "Oswald";
    font-style: normal;
    font-weight: 500;
    font-size: 84px;
    line-height: 138px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 35px;
      width: 18px;
      height: 18px;
      border: 4px solid;
      border-color: inherit;
      border-radius: 50%;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;

    &-icon {
      margin-right: 5px;
    }

    &-precipitation {
      min-width: 70px;
    }

    &-low {
      min-width: 70px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 1px;
        width: 8px;
        height: 8px;
        border: 2px solid;
        border-color: inherit;
        border-radius: 50%;
      }
    }
  }
}
</style>
