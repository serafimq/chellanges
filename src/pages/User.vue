<script setup>

</script>

<template>
  <div class="user__wrapper">
    <div class="user__header">
      <div class="user__info">1</div>
      <div class="user__tabs">2</div>
    </div>
  </div>
</template>


<style lang="scss" scope >
.user {
  &__wrapper {
    padding: 0 30px;
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 30px;
  }

  &__info {
    background-color: #D7F2BA;
  }

  &__tabs {
    background-color: #79B4A9;
  }

}
</style>
