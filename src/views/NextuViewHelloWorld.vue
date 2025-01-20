<template>
  <div>
    <ProductList :products="productList" />
  </div>
</template>

<script setup lang="ts">
import ProductList from '../components/ProductList.vue'

const productList = [
  { id: 1, label: 'Carotte', description: 'De belles carottes', qte: 10 },
  { id: 2, label: 'Pomme', description: 'Des pommes rouges', qte: 0 },
  { id: 3, label: 'Poireau', description: 'Des poireaux frais', qte: 5 },
]
</script>
