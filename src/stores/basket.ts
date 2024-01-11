import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', () => {
  const basketProducts = ref([])

  const totalCost = computed(() =>
    basketProducts.value.reduce((sum, product) => sum + product.price * product.quantity, 0)
  )

  const productsId = computed(() => basketProducts.value.map((product) => product.id))

  function addToBasket(product) {
    if (!basketProducts.value.includes(product)) {
      product.quantity = 1
      basketProducts.value.push(product)
    }
    console.log(basketProducts.value)
    return
  }

  function increaseQuantity(id) {
    const product = basketProducts.value.find((product) => product.id === id)
    if (product) {
      product.quantity++
    }
  }

  function decreaseQuantity(id) {
    const productIndex = basketProducts.value.findIndex((product) => product.id === id)
    if (productIndex !== -1) {
      const product = basketProducts.value[productIndex]
      if (product.quantity > 1) {
        product.quantity--
      } else {
        basketProducts.value.splice(productIndex, 1)
      }
    }
  }

  return { totalCost, basketProducts, productsId, addToBasket, increaseQuantity, decreaseQuantity }
})
