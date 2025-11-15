<template>
  <div class="catalog">
    <div class="container">
      <h1>Каталог автозвука</h1>
      
      <div class="filters">
        <select v-model="selectedCategory" class="filter-select">
          <option value="">Все категории</option>
          <option value="Компонентные динамики">Динамики</option>
          <option value="Сабвуферы">Сабвуферы</option>
          <option value="Усилители">Усилители</option>
          <option value="Головные устройства">Головные устройства</option>
        </select>
      </div>

      <div class="products-grid">
        <ProductCard 
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="$emit('add-to-cart', product)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import type { Product } from '../types'

interface Props {
  products: Product[]
}

interface Emits {
  (e: 'add-to-cart', product: Product): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const selectedCategory = ref<string>('')

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return props.products
  return props.products.filter(product => 
    product.category === selectedCategory.value
  )
})
</script>

<style scoped>
.filters {
  margin: 2rem 0;
}

.filter-select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
</style>