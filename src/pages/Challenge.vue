<template>
  <div class="challenge">
    <div v-if='isRouteChallenge' class="challenge__content">
      <h1 class="challenge__title">Challenge</h1>
      <div class="challenge__describe">describe challenge</div>
    </div>
    <router-view v-else />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';


import { RouterNames } from "@/router/constants/router.names";

const route = useRoute();
const router = useRouter();

const isRouteChallenge = computed(() => {
  return route.name === RouterNames.challenge;
})

</script>

<style lang="scss" scoped>
.challenge {

  &__title {
    text-align: center;
  }
}
</style>
