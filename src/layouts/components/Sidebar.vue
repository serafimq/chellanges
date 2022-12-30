<script setup>
import { WidgetRouterName } from "@/router/constants/router.names.js";
const links = [
  { name: "Challenge #1. Timer", href: `/${WidgetRouterName.timer}` },
  { name: "Challenge #2. Keyboard", href: `/${WidgetRouterName.keyboard}` },
  { name: "Challenge #3. Weather", href: `/${WidgetRouterName.weather}` },
];
</script>

<template>
  <nav class="sidebar">
    <router-link
      v-for="link in links"
      :key="link.name"
      class="sidebar__link"
      :to="link.href"
      >{{ link.name }}
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  border-right: 1px solid var(--gray);
  display: flex;
  flex-direction: column;

  .router-link-active {
    background-color: var(--light-gray);
  }

  &__link {
    margin-bottom: 7px;
    padding: 5px;
    border-radius: 7px;
    &:hover {
      background-color: var(--light-gray);
    }
  }
}
</style>




