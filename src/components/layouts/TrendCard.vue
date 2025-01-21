<script lang="ts" setup>
defineProps({
  src: String,
  user: String,
  description: String,
})
</script>

<template>
  <div class="trend">
    <figure>
      <img class="avatar" :src="src" alt="avatar" />
    </figure>
    <div class="trend-details">
      <h6>{{ user }}</h6>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
