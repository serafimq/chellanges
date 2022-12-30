<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { WeatherTypes, WeatherColors } from "./constants/weather.types";

import api from "@/api.js";

import WeatherCard from "./components/WeatherCard.vue";

const currentWeather = ref({});
const weatherList = ref([
  {
    id: 1,
    type: "cloudy",
    degree: 71,
    day: "WED",
    numberDate: 8,
    precipitation: 84,
    low: 28,
  },
  {
    id: 2,
    type: "sunny",
    degree: 65,
    day: "THU",
    numberDate: 9,
    precipitation: 84,
    low: 28,
  },
  {
    id: 3,
    type: "stormy",
    degree: 71,
    day: "FRI",
    numberDate: 10,
    precipitation: 30,
    low: 21,
  },
  {
    id: 4,
    type: "snowy",
    degree: 32,
    day: "SAT",
    numberDate: 11,
    precipitation: 30,
    low: 21,
  },
  {
    id: 5,
    type: "rainy",
    degree: 53,
    day: "SUN",
    numberDate: 12,
    precipitation: 30,
    low: 21,
  },
  {
    id: 6,
    type: "partly_cloudy",
    degree: 63,
    day: "MON",
    numberDate: 13,
    precipitation: 30,
    low: 21,
  },
  {
    id: 7,
    type: "sunny",
    degree: 72,
    day: "TUE",
    numberDate: 14,
    precipitation: 30,
    low: 21,
  },
]);

const adaptWeatherList = computed(() => {
  return weatherList.value.map((el) => {
    return {
      ...el,
      contentColor: WeatherColors[el.type].contentColor,
      temperatureColor: WeatherColors[el.type].temperatureColor,
      backgroundColor: WeatherColors[el.type].backgroundColor,
    };
  });
});

onMounted(async () => {
  currentWeather.value = await api.getWeather("London", "2022-12-15");
  // when i can get data i will finish the widget
  console.log("currentWeather.value", currentWeather.value);
});
</script>


<template>
  <div class="weather__wrapper">
    <WeatherCard
      v-for="card of adaptWeatherList"
      :key="card.id"
      :dataCard="card"
      :content-color="card.contentColor"
      :temperature-color="card.temperatureColor"
      :background-color="card.backgroundColor"
    />
  </div>
</template>

<style lang="scss" scoped>
.weather {
  &__wrapper {
    display: flex;
    justify-content: center;
    background-color: #e9f5fa;
    height: 100%;
    padding: 60px 25px;
  }
}
</style>
