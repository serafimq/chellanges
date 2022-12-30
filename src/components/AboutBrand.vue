<script setup>
import { ref } from "vue";

const aboutBrands = [
  {
    img: '/svg/car.svg',
    title: 'Next day as standard',
    description: 'Order before 3pm and get your order the next day as standard',
  },
  {
    img: '/svg/done.svg',
    title: 'Made by true artisans',
    description: 'Handmade crafted goods made with real passion and craft man ship',
  },
  {
    img: '/svg/card.svg',
    title: 'Unbeatable prices',
    description: 'For our materials and quality you won’t find better prices anywhere',
  },
  {
    img: '/svg/plant.svg',
    title: 'Recycled packaging',
    description: 'We use 100% recycled to ensure our footprint is more manageable',
  },
]

</script>

<template>
  <div class="about-brand">
    <h3 class="about-brand__title">What makes our brand different</h3>
    <div class="about-brand-elements">
      <div v-for="(card, i) of aboutBrands" :key="i" class="about-brand-element">
        <img :src="card.img" :alt="`icon-${i}`" class="about-brand-element__img">
        <h4 class="about-brand-element__title">{{ card.title }}</h4>
        <span class="about-brand-element__description">{{ card.description }}</span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.about-brand {
  padding: 80px 80px 130px;

  @media screen and (max-width: 767px) {
    padding: 48px 24px;
  }

  &__title {
    align-items: center;
    font-size: 24px;
    color: var(--dark);
    margin: 0 0 84px 0;

    @media screen and (max-width: 767px) {
      font-size: 20px;
      text-align: left;
      margin-bottom: 36px;
    }
  }

  &-elements {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: space-between;

    @media screen and (max-width: 1150px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &-element {
    background-color: var(--light-gray);
    padding: 48px;
    color: var(--dark);

    @media screen and (max-width: 767px) {
      padding: 16px 10px;
    }

    &__img {
      display: block;
      margin-bottom: 12px;
    }

    &__title {
      margin: 0 0 12px;
      font-size: 20px;
      font-weight: 400;
    }

    &__description {
      font-size: 16px;
      line-height: 1.5;
    }
  }
}
</style>
