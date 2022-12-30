<script setup >
import Header from '@/layouts/components/Header.vue';
import Footer from '@/layouts/components/Footer.vue';
</script>

<template>
  <Header />
  <div class="container">
    <slot />
  </div>
  <Footer />
</template>
