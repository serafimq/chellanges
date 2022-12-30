<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import supabase from "@/supabase.js";
import api from "@/api.js";

import PopularProducts from "@/components/PopularProducts.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import AboutBrand from "@/components/AboutBrand.vue";
import Subscribe from "@/components/Subscribe.vue";

const route = useRoute();
const router = useRouter();

const currentProduct = ref({});

const getFavorite = async (favorite) => {
  const { name } = favorite;
  const { data, error } = await supabase
    .from("favorites")
    .select()
    .eq("title", name)
    .single();

  if (error) {
    console.log("error", error);
  }

  if (data) {
    console.log("data", data);
  }
};

const updateFavorite = async (favorite) => {
  const { name } = favorite;
  const { data, error } = await supabase
    .from("favorites")
    .update({
      title: favorite.name,
      price: favorite.price,
      rating: 4,
    })
    .eq("title", name)
    .select();

  if (error) {
    console.log("error", error);
  }

  if (data) {
    console.log("data", data);
  }
};
const deleteFromFavorite = async (favorite) => {
  const { name } = favorite;
  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("title", name)
    .select();

  if (error) {
    console.log("error", error);
  }

  if (data) {
    console.log("data", data);
  }
};

onMounted(async () => {
  currentProduct.value = await api.getProduct(route.params.id);
  getFavorite(currentProduct.value);
});
</script>

<template>
  <ProductDetail :product="currentProduct" />
  <PopularProducts />
  <AboutBrand />
  <Subscribe />
</template>
