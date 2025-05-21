<!-- src/App.vue -->
<template>
  <main class="container">
    <h1>Генетические варианты пациента</h1>
    <VariantsView />
  </main>
</template>

<script setup lang="ts">
import VariantsView from '@/views/VariantsView.vue'
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
}
</style>
