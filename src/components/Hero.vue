<template>
  <div class="hero">
    <HeroInfo title="Luxury home ware for people who love timeless design quality"
      description="Shop the new Spring 2022 collection today" colorLink="lightgray" link="/" />
  </div>
  <img src="/img/HeroBg.jpg" alt="" class="hero-info__image">

</template>

<script setup>
import HeroInfo from '@/components/HeroInfo.vue';
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('/img/HeroBg.jpg');
  height: 704px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;

  background-color: var(--light-gray);
  padding: 48px;

  @media screen and (max-width: 767px) {
    height: auto;
    background: transparent;
    padding: 0;
    display: block;
  }

  &-info__image {
    display: none;

    @media screen and (max-width: 767px) {
      display: block;
    }
  }
}
</style>
