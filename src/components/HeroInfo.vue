<template>
  <div class="hero-info" :style="{ backgroundColor: background }"
    :class="{ 'hero-info__mobile-padding': mobilePaddings }">
    <div class="hero-info__text">
      <h2 class="hero-info__title" :style="{ color: colorTitle }">
        {{ title }}
      </h2>
      <span class="hero-info__description" :style="{ color: colorDescription }">{{ description }}</span>
    </div>
    <UIButton mobileFullWidth :color="colorLink" type="link" to="/">View collection</UIButton>
  </div>
</template>

<script setup>
import UIButton from '@/components/UI/Button.vue'

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  colorTitle: {
    type: String,
    default: ''
  },
  colorDescription: {
    type: String,
    default: '#5B5676'
  },
  colorLink: {
    type: String,
    default: 'secondary',
  },
  background: {
    type: String,
    default: '#fff',
  },
  mobilePaddings: {
    type: Boolean,
    default: false,
  }
});
</script>

<style lang="scss" scoped>
.hero {
  &-info {
    background-color: var(--light);
    padding: 50px 55px;
    max-width: 630px;
    min-height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
      padding: 47px 0 32px;
      min-height: 0;
    }

    &__mobile-padding {
      @media screen and (max-width: 767px) {
        padding: 36px 32px;
      }
    }

    &__image {
      margin-top: 32px;
    }

    &__text {
      @media screen and (max-width: 767px) {
        margin-bottom: 32px;
      }
    }

    &__title {
      font-family: var(--satoshi);
      font-weight: 400;
      line-height: 1.5;
      margin: 0 0 20px 0;
    }

    &__description {
      color: var(--gray);
      font-size: 18px;
    }
  }
}
</style>
