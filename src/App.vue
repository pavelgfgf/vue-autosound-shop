<template>
  <div id="app">
    <Header :cart-items="cartItems" />
    <main>
      <router-view 
        :products="products" 
        :cart-items="cartItems"
        @add-to-cart="addToCart"
        @remove-from-cart="removeFromCart"
        @update-quantity="updateQuantity"
      />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import type { CartItem, Product, QuantityUpdate } from '@/types'
import { reactive, ref } from 'vue'

const cartItems = ref<CartItem[]>([])
const products = reactive<Product[]>([
  {
    id: 1,
    name: 'Акустика Pride Ruby Light 8"',
    category: 'Компонентные динамики',
    price: 7000,
    image: 'assets/speakers.jpeg',
    description: 'Компонентная акустика 20см с шелковым куполом',
    specs: {
      мощность: '150 Вт',
      чувствительность: '93 dB',
      сопротивление: '4 Ом'
    }
  },
  {
    id: 2,
    name: 'Сабвуфер Pioneer TS-WX1210',
    category: 'Сабвуферы',
    price: 18900,
    image: 'assets/sub.jpeg',
    description: 'Активный сабвуфер 12 дюймов в закрытом корпусе',
    specs: {
      мощность: '300 Вт',
      диаметр: '12 дюймов',
      тип: 'Активный'
    }
  },
  {
    id: 3,
    name: 'Усилитель Alpine GS-60',
    category: 'Усилители',
    price: 8500,
    image: 'assets/usil.jpeg',
    description: '4-канальный усилитель мощности',
    specs: {
      каналы: '4',
      мощность: '45 Вт x 4',
      класс: 'D'
    }
  },
  {
    id: 4,
    name: 'ГУ Pioneer DEH-S3200BT',
    category: 'Головные устройства',
    price: 11200,
    image: 'assets/magnitola.jpg',
    description: 'Медиасистема с Bluetooth и USB',
    specs: {
      экран: '2-строчный дисплей',
      выходы: '3 RCA',
      беспроводные: 'Bluetooth, USB'
    }
  }
])

const addToCart = (product: Product): void => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cartItems.value.push({
      ...product,
      quantity: 1
    })
  }
}

const removeFromCart = (productId: number): void => {
  cartItems.value = cartItems.value.filter(item => item.id !== productId)
}

const updateQuantity = ({ productId, quantity }: QuantityUpdate): void => {
  const item = cartItems.value.find(item => item.id === productId)
  if (item) {
    item.quantity = quantity
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 20px 0;
}
</style>