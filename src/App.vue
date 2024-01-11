<template>
  <div>
    <AppHeader />
    <div class="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Product name 1',
    price: 20,
    image: 'image-url',
    quantity: 1
  },
  {
    id: 2,
    name: 'Product name 2',
    price: 100,
    image: 'image-url',
    quantity: 1
  },
  {
    id: 3,
    name: 'Product name 3',
    price: 50,
    image: 'image-url',
    quantity: 1
  }
])
</script>
