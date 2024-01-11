<template>
  <div class="bg-gray-200 rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.name }}</div>
      <div class="bg-gray-300 h-64"></div>
      <p class="text-gray-700 text-base">Price: {{ product.price }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <button
        v-if="isBasketAdded"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="basketStore.addToBasket(product)"
      >
        Add to Cart
      </button>
      <div v-else class="flex items-center">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          @click="basketStore.decreaseQuantity(product.id)"
        >
          -
        </button>
        <span class="text-center w-full">{{ product.quantity }}</span>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          @click="basketStore.increaseQuantity(product.id)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBasketStore } from '@/stores/basket.ts'
import { computed } from 'vue'

const props = defineProps({
  product: { type: Object, default: () => ({}) }
})

const basketStore = useBasketStore()

const isBasketAdded = computed(() => !basketStore.productsId.includes(props.product.id))
</script>
