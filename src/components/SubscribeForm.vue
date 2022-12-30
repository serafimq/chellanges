<template>
  <form class="subscribe-form">
    <input type="text" placeholder="your@email.com" class="input-text subscribe-form-input"
      :style="{ backgroundColor: bgInput, color: colorText }">
    <UIButton :color="colorButton">Sign up </UIButton>
  </form>
</template>

<script setup>
import UIButton from '@/components/UI/Button.vue'

const props = defineProps({
  bgInput: {
    type: String,
    required: false,
  },
  colorButton: {
    type: String,
    default: 'primary',
  },
  colorText: {
    type: String,
    required: false,
  },
})
</script>

<style lang="scss" scoped>
.subscribe {

  &-form {
    display: flex;

    &-input {
      flex-grow: 1;
    }
  }
}
</style>
