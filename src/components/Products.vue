<template>
  <div class="products-container">
    <div class="products">
      <Product v-for="item of products" :key="item.id" :id="item.id" :img="item.img" :title="item.title"
        :price="item.price" />
    </div>
    <div class="btn__wrapper">
      <UIButton mobileFullWidth color="lightgray">View collection</UIButton>
    </div>
  </div>
</template>

<script setup>
import Product from '@/components/Product.vue';
import UIButton from '@/components/UI/Button.vue'

const props = defineProps({
  products: {
    type: Array,
    default: []
  }
})
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding: 0 80px;
  margin-bottom: 48px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0;
  }

  &-container {
    margin-bottom: 56px;
  }

  &-link {
    text-align: center;
    text-decoration: none;
    color: var(--dark);
    padding: 16px 32px;
    background-color: var(--light-gray);

    &:hover {
      text-decoration: underline;
    }

    &__wrapper {
      display: flex;
      justify-content: center;
    }
  }
}

.btn__wrapper {
  display: flex;
  justify-content: center;
}
</style>
