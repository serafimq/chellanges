<script setup>
import { ref, computed, watch, onMounted } from "vue";

import { getTime } from "./helper";

import IconBase from "@/components/icon-base/IconBase.vue";
import Check from "@/components/icons/Check.vue";
import Gear from "@/components/icons/Gear.vue";

const isStartTimer = ref(false);
const minutes = ref(1);
const seconds = ref(0);
const intervalIdTimer = ref(null);
const percentCount = ref(2.076);

const intervalIdStyle = ref(null);
const strokeColor = ref("#9d0000");
const strokeDashoffsetSize = ref(0);
const stylesCircle = computed(() => `${strokeDashoffsetSize.value}px`);

const handleTimer = () => {
  isStartTimer.value = !isStartTimer.value;

  if (isStartTimer.value) {
    strokeColor.value = "#9d0000";
    intervalIdStyle.value = setInterval(() => {
      strokeDashoffsetSize.value += percentCount.value;
    }, 100);
    if (seconds.value === 0) {
      seconds.value = 59;
      minutes.value -= 1;
    }

    intervalIdTimer.value = setInterval(() => {
      seconds.value -= 1;
      if (seconds.value === 0) {
        seconds.value = 59;
        minutes.value -= 1;
      }
    }, 1000);
  } else {
    clearInterval(intervalIdStyle.value);
    clearInterval(intervalIdTimer.value);
  }
};

const textButtonTimer = computed(() => (isStartTimer.value ? "Stop" : "Start"));
const minutesText = computed(() => {
  return minutes.value ? getTime(minutes.value) : "00";
});
const secondsText = computed(() =>
  seconds.value ? getTime(seconds.value) : "00"
);

watch(strokeDashoffsetSize, (strokeDashoffsetSize) => {
  if (strokeDashoffsetSize >= 1225) {
    strokeColor.value = "#00aa51";
    clearInterval(intervalIdStyle.value);
    clearInterval(intervalIdTimer.value);

    intervalIdStyle.value = null;
    seconds.value = null;
    minutes.value = 1;

    isStartTimer.value = !isStartTimer.value;
  }
});
watch(strokeColor, () => {
  strokeDashoffsetSize.value = 0;
});

onMounted(async () => {
  percentCount.value = percentCount.value / minutes.value;
});
</script>


<template>
  <div class="timer__wrapper">
    <div class="timer">
      <svg class="circle">
        <circle
          :style="{
            strokeDashoffset: stylesCircle,
            stroke: strokeColor,
          }"
          r="195"
          cx="216"
          cy="216"
        ></circle>
      </svg>
      <div class="timer__around" />
      <div class="timer__content">
        <div class="timer__time">{{ minutesText }}:{{ secondsText }}</div>
        <button class="timer__button" @click="handleTimer">
          {{ textButtonTimer }}
        </button>
        <IconBase color="rgba(88, 88, 88, 1)" :width="32">
          <Gear />
        </IconBase>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timer {
  position: relative;
  font-family: var(--bebasneue);
  color: #fff;
  text-align: center;
  &__wrapper {
    background-color: #2b2a30;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  &__around {
    position: absolute;
    width: 400px;
    height: 400px;
    border: 9px solid #000;
    border-radius: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    top: 46%;
    left: 50%;
    background: radial-gradient(
      71.4% 71.4% at 51.7% 28.6%,
      #3a393f 0%,
      #17171a 100%
    );
    box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  }
  &__content {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__time {
    font-size: 186px;
    margin-bottom: 16px;
  }
  &__button {
    text-transform: uppercase;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 10px;
    margin-bottom: 23px;
  }
}

svg.circle {
  position: absolute;
  top: 46%;
  right: 50%;
  z-index: 2;
  width: 432px;
  height: 432px;
  transform: translateX(50%) translateY(-50%) rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
  stroke-dasharray: 1225;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 9px;
  stroke: #9d0000;
  fill: none;
  animation: countdown 10s linear infinite forwards;
}
</style>
