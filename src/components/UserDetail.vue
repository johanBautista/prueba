<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const customer = ref(null)
const products = ref([])
const hasCustomerError = ref(false)
const isLoading = ref(true)

const fetchCustomer = async () => {
  try {
    const response = await fetch(
      `https://render-json-q3qu.onrender.com/customers/${route.params.id}`,
    )
    if (!response.ok) {
      hasCustomerError.value = true
      throw new Error('Error al obtener los datos del cliente')
    }
    const data = await response.json()
    customer.value = data
  } catch (error) {
    console.error('Error al obtener el cliente:', error)
    hasCustomerError.value = true
  }
}

const fetchProducts = async () => {
  try {
    const response = await fetch('https://render-json-q3qu.onrender.com/products')
    if (!response.ok) {
      hasCustomerError.value = true
      throw new Error('Error al obtener los productos')
    }
    const data = await response.json()
    products.value = data
  } catch (error) {
    console.error('Error al obtener los productos:', error)
    hasCustomerError.value = true
  }
}

const loadData = async () => {
  isLoading.value = true
  try {
    await Promise.all([fetchCustomer(), fetchProducts()])
  } finally {
    isLoading.value = false
  }
}

const filteredProducts = computed(() => {
  if (!customer.value || !products.value.length) return []
  return products.value.filter((product) => {
    if (Array.isArray(product.customerId)) {
      return product.customerId.includes(customer.value.customer)
    }
    return product.customerId === customer.value.customerId
  })
})

onMounted(loadData)
</script>

<template>
  <div>
    <div v-if="isLoading">Cargando datos...</div>
    <div v-else-if="hasCustomerError">
      No se pudo cargar el cliente. Intenta de nuevo más tarde.
    </div>
    <div v-else>
      <h1>Detalles del Cliente</h1>
      <div v-if="customer">
        <div class="user-info">
          <img
            alt="Telefonia logo"
            class="logo"
            src="@/assets/usuario.png"
            width="125"
            height="125"
          />
          <div class="user-details">
            <p><strong>Nombre:</strong> {{ customer.givenName }}</p>
            <p><strong>Apellido:</strong> {{ customer.familyName1 }}</p>
            <p><strong>Email:</strong> {{ customer.email }}</p>
            <p><strong>Teléfono:</strong> {{ customer.phone }}</p>
          </div>
        </div>
      </div>

      <div v-if="!filteredProducts.length">
        <h2>No hay productos contratados.</h2>
      </div>
      <div v-else>
        <h2>Productos Contratados</h2>
        <table class="user-products">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th># Terminal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td>{{ product.productName ?? '--' }}</td>
              <td>{{ product.price ?? '--' }}</td>
              <td>{{ product.mbSpeed ?? '--' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.user-info {
  display: flex;
  align-items: center;
  margin: 20px;
}

.user-details {
  margin-left: 2rem;
}

.user-products {
  margin: 20px;
}
.user-products {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-products th,
.user-products td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.user-products th {
  cursor: pointer;
  background-color: #f4f4f4;
}
strong {
  color: #000;
  font-weight: bold;
}
</style>
