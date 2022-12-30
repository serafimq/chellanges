<script setup>
import { ref, onMounted } from "vue";
import { soundCollection } from "./helper";

import Piano from "@/components/icons/Piano.vue";

const piano = ref(null);
const pianoKeys = ref([]);

const playSound = (id) => {
  console.log("id", id);

  if (id) {
    const file = soundCollection[id];
    const audio = new Audio(file);
    audio.play();
  }
};

const keyHandle = (e) => {
  playSound(e.target.id);
};

onMounted(() => {
  pianoKeys.value = piano.value.$el.children;
  Array.from(pianoKeys.value).forEach((element, index) => {
    element.setAttribute("id", index);
  });
});
</script>

<template>
  <div class="keyboard__wrapper">
    <Piano ref="piano" @click="keyHandle" />
  </div>
</template>

<style lang="scss">
.keyboard {
  &__wrapper {
    background-color: #37b2c3;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
svg {
  max-width: 90%;
  margin: 0 auto;
  path {
    cursor: pointer;
  }
  path.white-keys {
    fill: #fff;
    &:hover {
      fill: #ffd200;
    }
  }
  path.black-keys {
    fill: #000;
    &:hover {
      fill: #f40082;
    }
  }
}
</style>
