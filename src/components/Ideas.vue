<template>
  <div class="ideas">
    <HeroInfo title="It started with a small idea"
      description="A global brand with local beginnings, our story be gain in a small studio in South London in early 2014"
      background="#2A254B" colorDescription="#FFFFFF" colorTitle="#FFFFFF" colorLink="secondary" link="/"
      mobilePaddings />
    <img src="/img/room.jpg" alt="room" class="ideas-image">
  </div>
</template>

<script setup>
import HeroInfo from '@/components/HeroInfo.vue';
</script>

<style lang="scss" scoped>
.ideas {
  padding: 0 80px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;

  @media screen and (max-width: 767px) {
    padding: 0;
    grid-template-columns: 1fr;
  }

  &-image {
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      margin-top: 24px;
      height: auto;
    }
  }
}
</style>
