<script setup>
import Header from "@/layouts/components/Header.vue";
import Sidebar from "@/layouts/components/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="container container--challenge">
    <Sidebar />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  &--challenge {
    display: grid;
    grid-template-columns: minmax(250px, 20%) 1fr;
    height: calc(100% - 132px);
    max-width: 100%;
  }
}
</style>



