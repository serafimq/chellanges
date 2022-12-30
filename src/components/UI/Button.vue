<template>
  <button v-if="type === 'button'" :class="[
    'btn',
    `btn--${color}`,
    { 'btn--full-width': mobileFullWidth },
  ]">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="[
    'btn',
    `btn--${color}`,
    { 'btn--full-width': mobileFullWidth },
  ]">
    <slot></slot>
  </router-link>
</template>


<script setup>
import UIButton from '@/components/UI/Button.vue'

const props = defineProps({
  background: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  to: {
    type: String,
    default: '/'
  },
  color: {
    type: String,
    default: 'primary',
  },
  mobileFullWidth: {
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss" scoped>
.btn {
  background-color: var(--dark);
  color: var(--light);
  font-size: 16px;
  padding: 0 32px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  text-decoration: none;
  white-space: nowrap;

  @media screen and (max-width: 767px) {
    padding: 0 15px;
  }

  &:hover {
    opacity: .8;
  }

  &--primary {
    background-color: var(--dark);
    color: var(--light);
  }

  &--secondary {
    background-color: rgba(249, 249, 249, 0.15);
  }

  &--lightgray {
    background-color: var(--light-gray);
    color: var(--dark);
  }

  &--white {
    background-color: var(--light);
    color: var(--dark);
  }

  &--full-width {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>
