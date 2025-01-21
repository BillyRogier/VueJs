<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div class="anounce">
    <h5>{{ title }}</h5>
    <p>
      {{ description }}
    </p>
  </div>
</template>
