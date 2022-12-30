<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/store/cart.js'

const cartStore = useCartStore();
const menus = [
  {
    name: 'Main page',
    path: '/',
  },
  {
    name: 'Supabase',
    path: '/supabase',
  },
  {
    name: 'Challenge',
    path: '/challenge',
  },
]

const isOpenModalMnu = ref(false);
</script>

<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <div class="header-top-search">
          <img src="/svg/header-search.svg" alt="search">
        </div>
        <div class="header-top-mobile-menu" @click="isOpenModalMnu = !isOpenModalMnu">
          <img src="/svg/menu.svg" alt="menu">
        </div>
      </div>
      <router-link to="/" class="header-logo">Avion</router-link>
      <div class="header-top-right">
        <div class="header-top-right__cart">
          <router-link to="/cart">
            <img src="/svg/header-cart.svg" alt="cart">
            <span class="header-top-right__count" v-if="cartStore.cart.length">
              {{ cartStore.cart.length }}
            </span>
          </router-link>
        </div>
        <div class="header-top-right__avatar">
          <router-link to="/user">
            <img src="/svg/header-avatar.svg" alt="avatar">
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <router-link class="header-menu__link" :to="menu.path" v-for="menu of menus" :key="menu.path">
        {{ menu.name }}
      </router-link>
    </div>
    <div class="header-menu-mobile" v-if="isOpenModalMnu">
      <router-link class="header-menu-mobile__link" :to="menu.path" v-for="menu of menus" :key="menu.path">
        {{ menu.name }}
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--light);
  height: 132px;
  position: relative;

  @media screen and (max-width: 767px) {
    height: auto;
  }

  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin: 0 28px;

    @media screen and (max-width: 767px) {
      margin: 0;
      border: none;
      height: auto;
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
    }

    &-left {
      @media screen and (max-width: 767px) {
        order: 2;
        display: flex;
      }
    }

    &-mobile-menu {
      display: none;
      margin-left: 16px;

      @media screen and (max-width: 767px) {
        display: block;
      }
    }

    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 767px) {
        display: none;
      }

      &__cart {
        margin-right: 16px;
        position: relative;
      }

      &__count {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: #000;
        border-radius: 50%;
        color: var(--light);
        font-size: 10px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -50%;
        bottom: 0;
      }
    }
  }

  &-logo {
    font-size: 24px;
    text-decoration: none;
    color: var(--dark);
    font-family: var(--satoshi);
    text-align: center;

    @media screen and (max-width: 767px) {
      order: 1;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
      display: none;
    }

    &__link {
      margin: 0 22px;
      color: var(--gray);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &-mobile {
      position: absolute;
      background-color: var(--light);
      padding: 10px;
      top: 60px;
      width: 100%;
      border: 1px solid;

      &__link {
        display: block;
        margin-bottom: 20px;
        color: var(--gray);
        text-decoration: none;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
