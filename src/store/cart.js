import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product, count) {
      console.log(product, count)
      const cardIndex = this.cart.findIndex(el => el.id === product.id)
      if (cardIndex === -1) {
        this.cart.push({ ...product, count: count })
      }
    },
  }
})
