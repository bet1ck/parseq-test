<!-- src/components/FiltersBar.vue -->
<template>
  <div class="filters">
    <input v-model="filters.name" placeholder="Вариант" />
    <input v-model="filters.hgvs" placeholder="HGVS" />
    <select v-model="filters.genotype">
      <option value="">Генотип</option>
      <option value="HETEROZYGOTE">HETEROZYGOTE</option>
      <option value="HOMOZYGOTE">HOMOZYGOTE</option>
    </select>
    <select v-model="filters.significance">
      <option value="">Значимость</option>
      <option value="PATHOGENIC">PATHOGENIC</option>
      <option value="LIKELY_PATHOGENIC">LIKELY_PATHOGENIC</option>
      <option value="BENIGN">BENIGN</option>
      <option value="LIKELY_BENIGN">LIKELY_BENIGN</option>
      <option value="UNCERTAIN">UNCERTAIN</option>
      <option value="UNDEFINED">UNDEFINED</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const filters = defineModel<{
  name: string
  hgvs: string
  genotype: string
  significance: string
}>('filters')
</script>

<style>
.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
.filters input,
.filters select {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
