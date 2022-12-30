<script setup>
import { ref, onMounted } from 'vue';
import supabase from '@/supabase.js';

import Loader from '@/components/UI/Loader.vue';


const loading = ref(true);
const isHasError = ref(null);
const favorites = ref(null);

const getFavorite = async () => {
  const { data, error } = await supabase
    .from('favorites')
    .select()
    .order('price', { ascending: false })

  if (error) {
    isHasError.value = 'Could not fetch the favorites';
    favorites.value = null;
    console.log('error', error);
  }

  if (data) {
    isHasError.value = null;
    favorites.value = data;
  }
}

onMounted(async () => {
  await getFavorite();
  loading.value = false;
})
</script>

<template>
  <h1 class="supabase__title">Supabase</h1>
  <Loader v-if="loading" />
  <div v-else class="favorites">
    <div v-if="isHasError" class="favorite__error">{{ isHasError }}</div>
    <div v-if="favorites" class="favorite__list">
      <div class="favorite_item" v-for="favorite of favorites" :key="favorite.id">
        {{ favorite.title }} : {{ favorite.price }}
      </div>
    </div>
  </div>
</template>

