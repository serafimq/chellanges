<template>
  <Loader v-if="loading" />
  <Products :products="products" v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/api.js';

import Loader from '@/components/UI/Loader.vue';
import Products from '@/components/Products.vue';

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  products.value = await api.getPopularProducts();
  loading.value = false;
})
</script>

