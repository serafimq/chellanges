<template>
  <div class="product">
    <div>
      <img
        :src="product.image"
        :alt="product.name"
        @click="addToFavorite(product)"
      />
    </div>
    <div>
      <h2 class="product-name">{{ product.name }}</h2>
      <span class="product-price">£{{ product.price }}</span>
      <div class="product-block product-description">
        <div class="product-block__title">Product description</div>
        <div v-html="product.description"></div>
      </div>
      <div class="product-block">
        <span class="product-block__title">Dimensions</span>
        <span
          class="product-param"
          v-for="(param, i) of product.params"
          :key="i"
        >
          {{ param.title }}: {{ param.value }}
        </span>
      </div>
      <div class="product-block">
        <span class="product-block__title">Quantity</span>
        <div class="product-quantity">
          <span class="product-quantity-symbol" @click="changeQuantity('minus')"
            >-</span
          >
          <span class="product-quantity-value">{{ quantity }}</span>
          <span class="product-quantity-symbol" @click="changeQuantity('plus')"
            >+</span
          >
        </div>
      </div>

      <UIButton @click="cartStore.addToCart(product, quantity)"
        >Add to cart</UIButton
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/store/cart.js";

import supabase from "@/supabase.js";

import UIButton from "@/components/UI/Button.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();

const quantity = ref(1);

const changeQuantity = (type) => {
  if (type === "minus") {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
  } else {
    quantity.value === 3 ? (quantity.value = 3) : quantity.value++;
  }
};
const addToFavorite = async (currentProduct) => {
  const { data, error } = await supabase
    .from("favorites")
    .insert([
      {
        title: currentProduct.name,
        price: currentProduct.price,
        rating: 5,
      },
    ])
    .select();

  if (error) {
    console.log("error:", error);
  }

  if (data) {
    console.log("data", data);
  }
};
</script>

<style lang="scss" scoped>
.product {
  background-color: var(--light-gray);
  padding: 50px 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 500px;
  column-gap: 65px;
  margin-bottom: 65px;

  &-name {
    margin-bottom: 16px;
    font-family: var(--clash);
    font-size: 36px;
  }

  &-price {
    display: block;
    font-size: 24px;
    margin-bottom: 24px;
  }

  &-block {
    margin-bottom: 40px;

    &__title {
      display: block;
      margin-bottom: 14px;
      font-family: var(--clash);
    }
  }

  &-description {
    border-top: 1px solid var(--gray);
    padding-top: 24px;
  }

  &-param {
    display: block;
  }

  &-quantity {
    background-color: var(--light);
    width: 122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    &-symbol {
      color: var(--gray);
      cursor: pointer;
    }
  }
}
</style>
