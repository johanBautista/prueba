<script setup>
import { ref, computed, onMounted } from 'vue'
import CommunityIcon from './icons/IconCommunity.vue'
import router from '@/router'

const products = ref([])
const filter = ref('')
const sortField = ref('')
const sortDirection = ref('asc')
const NoProductsService = ref(false)

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/products')
    if (!response.ok) {
      NoProductsService.value = true
      throw new Error('Error al obtener los productos')
    }
    const data = await response.json()
    products.value = data
  } catch (error) {
    console.error('Error al obtener los productos:', error)
  }
}

const filteredProducts = computed(() => {
  let filtered = products.value

  if (filter.value) {
    filtered = filtered.filter((product) =>
      product.productName.toLowerCase().includes(filter.value.toLowerCase()),
    )
  }

  if (sortField.value) {
    filtered.sort((a, b) => {
      const fieldA = a[sortField.value]
      const fieldB = b[sortField.value]
      if (fieldA < fieldB) return sortDirection.value === 'asc' ? -1 : 1
      if (fieldA > fieldB) return sortDirection.value === 'asc' ? 1 : -1
      return 0
    })
  }

  return filtered
})

const sortBy = (field) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortDirection.value = 'asc'
  }
}

const goToDetail = (id) => {
  router.push(`/product/${id}`)
}

onMounted(fetchProducts)
</script>

<template>
  <div v-if="NoProductsService">
    <p>Lo sentimos! Actualmente no tenemos productos en venta.</p>
  </div>
  <div v-else class="container">
    <h1>Listado de Artículos</h1>
    <input type="text" v-model="filter" placeholder="Filtrar por nombre" class="filter-input" />

    <table class="product-table">
      <thead>
        <tr>
          <th @click="sortBy('productName')">Nombre</th>
          <th @click="sortBy('price')">Precio</th>
          <th>Velocidad/MB</th>
          <th>Capacidad/GB</th>
          <th>Tipo</th>
          <th># Terminal</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.productName ?? '--' }}</td>
          <td>{{ product.price ?? '--' }}</td>
          <td>{{ product.mbSpeed ?? '--' }}</td>
          <td>{{ product.gbData ?? '--' }}</td>
          <td>{{ product.productTypeName ?? '--' }}</td>
          <td>{{ product.numeracioTerminal ?? '--' }}</td>
          <td>
            <button @click="goToDetail(product.id)" class="detail-button">
              <CommunityIcon />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.product-table th {
  cursor: pointer;
  background-color: #f4f4f4;
}

.filter-input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}
</style>
