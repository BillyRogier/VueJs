<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>label</th>
        <th>description</th>
        <th>statut</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.label }}</td>
        <td>{{ product.description }}</td>
        <td>
          <span :class="getStatusClass(product.qte)">
            {{ getStatus(product.qte) }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Product {
  id: number
  label: string
  description: string
  qte: number
}

defineProps<{
  products: Product[]
}>()

const getStatus = (qte: number): string => {
  return qte > 0 ? 'Disponible' : 'Indisponible'
}

const getStatusClass = (qte: number): string => {
  return qte > 0 ? 'status-available' : 'status-unavailable'
}
</script>

<style scoped>
.status-available {
  color: green;
}

.status-unavailable {
  color: red;
}
</style>
