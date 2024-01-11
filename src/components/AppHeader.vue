<template>
  <div class="h-20 bg-gray-700 flex items-center justify-end px-6">
    <p class="text-white font-bold text-4xl">$ {{ basketStore.totalCost }}</p>
  </div>
</template>

<script setup>
import { useBasketStore } from '@/stores/basket.ts'

const basketStore = useBasketStore()
</script>
