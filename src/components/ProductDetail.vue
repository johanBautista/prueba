<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)
const hasProductError = ref(false)

const fetchProduct = async () => {
  try {
    const response = await fetch(
      `https://render-json-q3qu.onrender.com/products/${route.params.id}`,
    )
    if (!response.ok) {
      hasProductError.value = true
      throw new Error('Error al obtener los datos del producto')
    }
    const data = await response.json()
    product.value = data
  } catch (error) {
    console.error('Error al obtener el producto:', error)
  }
}

onMounted(fetchProduct)
</script>
<template>
  <div v-if="hasProductError">No se pudo cargar el producto. Intenta de nuevo más tarde.</div>
  <div v-else>
    <h1>Detalles del producto</h1>
    <div v-if="product">
      <div class="product-info">
        <img alt="Telefonia logo" class="logo" src="@/assets/system.png" width="125" height="125" />
        <div class="product-details">
          <p><strong>Nombre:</strong> {{ product.productName ?? '--' }}</p>
          <p><strong>Precio:</strong> {{ product.price ?? '--' }}</p>
          <p><strong>Velocidad/MB:</strong> {{ product.mbSpeed ?? '--' }}</p>
          <p><strong>Capacidad/GB:</strong> {{ product.gbData ?? '--' }}</p>
          <p><strong>Tipo:</strong> {{ product.productTypeName ?? '--' }}</p>
          <p><strong># Terminal:</strong> {{ product.numeracioTerminal ?? '--' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.product-details {
  margin-left: 2rem;
}

strong {
  color: #000;
  font-weight: bold;
}
</style>
