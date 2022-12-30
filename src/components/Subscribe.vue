<template>
  <div class="subscribe">
    <div class="subscribe-content">
      <h3 class="subscribe-title">Join the club and get the benefits</h3>
      <span class="subscribe-description">Sign up for our newsletter and receive exclusive offers on new ranges, sales,
        pop up stores and more</span>
      <div class="subscribe-checks">
        <div v-for="check in checkTitles" :key="check" class="subscribe-check">
          <img src="/svg/check.svg" alt="check" class="subscribe-check__icon">
          <span class="subscribe-check__name">{{ check.name }}</span>
        </div>
      </div>
      <SubscribeForm />
    </div>
  </div>
</template>

<script setup>
import SubscribeForm from '@/components/SubscribeForm.vue'
const checkTitles = [
  {
    name: 'Exclusive offers'
  },
  {
    name: 'Free events'
  },
  {
    name: 'Large discounts'
  },
]
</script>

<style lang="scss" scoped>
.subscribe {
  background-image: url('/img/subscribe-bg.jpg');
  background-size: cover;
  padding: 97px 0 86px;
  color: var(--light);

  @media screen and (max-width: 767px) {
    padding: 24px;
    margin: 0 -24px;
  }

  &-content {
    max-width: 500px;
    margin: auto;
    text-align: center;

    @media screen and (max-width: 767px) {
      text-align: left;
    }
  }

  &-title {
    display: block;
    margin: 0 0 12px;
    font-size: 32px;
    font-weight: 400;
    font-family: var(--clash);

    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }

  &-description {
    font-size: 18px;
    display: block;
    margin-bottom: 30px;

    @media screen and (max-width: 767px) {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }

  &-checks {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    @media screen and (max-width: 767px) {
      display: block;
    }
  }

  &-check {
    display: flex;
    align-items: center;

    &:nth-child(2) {
      margin: 0 36px;

      @media screen and (max-width: 767px) {
        margin: 0 0 8px;
      }
    }

    @media screen and (max-width: 767px) {
      margin-bottom: 8px;
    }


    &__icon {
      margin-right: 9px;
    }
  }
}
</style>
