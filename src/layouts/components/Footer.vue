<script setup>
import SubscribeForm from '@/components/SubscribeForm.vue'
const menus = [
  {
    title: 'Menu',
    subMenu: [
      {
        subMenuTitle: 'New arrivals',
        to: '/'
      },
      {
        subMenuTitle: 'Best sellers',
        to: '/'
      },
      {
        subMenuTitle: 'Recently viewed',
        to: '/'
      },
      {
        subMenuTitle: 'Popular this week',
        to: '/'
      },
      {
        subMenuTitle: 'All products',
        to: '/'
      },
    ]
  },
  {
    title: 'Categories',
    subMenu: [
      {
        subMenuTitle: 'Crockery',
        to: '/'
      },
      {
        subMenuTitle: 'Furniture',
        to: '/'
      },
      {
        subMenuTitle: 'Homeware',
        to: '/'
      },
      {
        subMenuTitle: 'Plant pots',
        to: '/'
      },
      {
        subMenuTitle: 'Chairs',
        to: '/'
      },
      {
        subMenuTitle: 'Crockery',
        to: '/'
      },
    ]
  },
  {
    title: 'Our company',
    subMenu: [
      {
        subMenuTitle: 'About us',
        to: '/'
      },
      {
        subMenuTitle: 'Vacancies',
        to: '/'
      },
      {
        subMenuTitle: 'Contact us',
        to: '/'
      },
      {
        subMenuTitle: 'Privacy',
        to: '/'
      },
      {
        subMenuTitle: 'Returns policy',
        to: '/'
      },
    ]
  },
]

</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-menu">
          <div class="footer-menu-column" v-for="menu in menus" :key="menu.title">
            <div class="footer-menu__title">{{ menu.title }}</div>
            <router-link v-for="subMenu in menu.subMenu" :key="subMenu.subMenuTitle" :to="subMenu.to"
              class="footer-menu__link">
              {{ subMenu.subMenuTitle }}
            </router-link>
          </div>
        </div>

        <SubscribeForm bgInput="rgba(255, 255, 255, 0.15)" colorButton="white" colorText="white" />
      </div>
      <div class="footer-bottom">
        <span class="footer-bottom__copyright">
          Copyright 2022 Avion LTD
        </span>
        <div class="footer-bottom__socials">
          <a href="#" class="footer-bottom__socials-link">
            <img src="/svg/linkedin.svg" alt="linkedin">
          </a>
          <a href="#" class="footer-bottom__socials-link">
            <img src="/svg/facebook.svg" alt="facebook">
          </a>
          <a href="#" class="footer-bottom__socials-link">
            <img src="/svg/instagram.svg" alt="instagram">
          </a>
          <a href="#" class="footer-bottom__socials-link">
            <img src="/svg/skype.svg" alt="skype">
          </a>
          <a href="#" class="footer-bottom__socials-link">
            <img src="/svg/twitter.svg" alt="twitter">
          </a>
          <a href="#" class="footer-bottom__socials-link">
            <img src="/svg/pinterest.svg" alt="pinterest">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scope>
.footer {
  background-color: var(--dark);
  color: var(--light);

  @media screen and (max-width: 767px) {
    margin: 0 -24px;
  }

  &-content {
    padding: 58px 82px 25px;

    @media screen and (max-width: 1024px) {
      padding: 58px 30px 25px;
    }

    @media screen and (max-width: 767px) {
      padding: 40px 25px;
    }
  }

  &-bottom {
    padding-top: 22px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
      display: block;
      text-align: center;
    }

    &__copyright {
      font-size: 14px;

      @media screen and (max-width: 767px) {
        display: block;
        margin-bottom: 20px;
      }
    }

    &__socials {
      display: flex;
      align-items: center;

      &-link {
        margin: 0 12px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  &-top {
    display: grid;
    grid-template-columns: 540px 1fr;
    column-gap: 110px;
    border-bottom: 1px solid #4E4D93;
    padding-bottom: 48px;

    @media screen and (max-width: 1150px) {
      grid-template-columns: 450px 1fr;
      column-gap: 10px;
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);


    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &-column {
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 767px) {
        margin-bottom: 40px;
      }
    }

    &__title {
      margin-bottom: 12px;
      font-size: 16px;
      color: var(--light);
      font-family: var(--clash);
    }

    &__link {
      display: block;
      color: var(--light);
      font-size: 14px;
      text-decoration: none;
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
