<template>
  <FiltersBar v-model:filters="filters" />
  <VariantCard
    v-for="variant in filteredVariants"
    :key="variant.alleleName + variant.leftAnchorPosition"
    :variant="variant"
  />
  <p v-if="!filteredVariants.length">Ничего не найдено</p>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Variant } from '@/types/Variant'
import VariantCard from '@/components/VariantCard.vue'
import FiltersBar from '@/components/FiltersBar.vue'

const variants = ref<Variant[]>([])
const filters = ref({
  name: '',
  hgvs: '',
  genotype: '',
  significance: '',
})

onMounted(async () => {
  const res = await fetch('/variants.json')
  variants.value = await res.json()
})

const filteredVariants = computed(() =>
  variants.value.filter(
    (v) =>
      (!filters.value.name ||
        v.alleleName?.toLowerCase().includes(filters.value.name.toLowerCase())) &&
      (!filters.value.hgvs ||
        Object.values(v.hgvs).some((h) =>
          h?.toLowerCase().includes(filters.value.hgvs.toLowerCase())
        )) &&
      (!filters.value.genotype || v.genotype === filters.value.genotype) &&
      (!filters.value.significance || v.significance === filters.value.significance)
  )
)
</script>
