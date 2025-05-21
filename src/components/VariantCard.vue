<template>
  <div class="variant-card">
    <div class="variant-card__header">
      <strong>Вариант: {{ variant.alleleName }}</strong>
      <span>Значимость: {{ variant.significance }}</span>
    </div>
    <div>Генотип: {{ variant.genotype }}</div>
    <div>HGVS:</div>
    <ul>
      <li v-if="variant.hgvs.g">g: {{ variant.hgvs.g }}</li>
      <li v-if="variant.hgvs.c">c: {{ variant.hgvs.c }}</li>
      <li v-if="variant.hgvs.p">p: {{ variant.hgvs.p }}</li>
    </ul>
    <div
      v-if="
        variant.externalSourceEntries && variant.externalSourceEntries.length
      "
    >
      <strong>Источники:</strong>
      <ol>
        <li v-for="(source, i) in variant.externalSourceEntries" :key="i">
          {{ source.annotationSourceName }}:
          <p v-for="(val, key) in source.annotationAttributes" :key="key">
            {{ key }} = {{ val }}
          </p>
          <a
            v-if="source.maybeAnnotationSourceGeneticVariantUrl"
            :href="source.maybeAnnotationSourceGeneticVariantUrl"
            target="_blank"
            rel="noopener"
          />
        </li>
      </ol>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Variant } from "@/types/Variant";

defineProps<{
  variant: Variant;
}>();
</script>

<style scoped>
.variant-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}
.sources a {
  color: #007bff;
  text-decoration: none;
}
</style>
