<script setup>
import { ref, computed, onMounted } from 'vue'
import CommunityIcon from './icons/IconCommunity.vue'
import router from '@/router'

const customers = ref([])
const filter = ref('')
const sortField = ref('')
const sortDirection = ref('asc')
const NoCustomersService = ref(false)
const isLoading = ref(true)

const fetchCustomers = async () => {
  try {
    const response = await fetch('https://render-json-q3qu.onrender.com/customers')
    if (!response.ok) {
      NoCustomersService.value = true
      throw new Error('Error al obtener los clientes')
    }
    const data = await response.json()
    customers.value = data
  } catch (error) {
    console.error('Error al obtener los clientes:', error)
    NoCustomersService.value = true
  } finally {
    isLoading.value = false
  }
}

const filteredCustomers = computed(() => {
  let filtered = customers.value

  if (filter.value) {
    filtered = filtered.filter((customer) =>
      customer.givenName.toLowerCase().includes(filter.value.toLowerCase()),
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
  router.push(`/user/${id}`)
}

onMounted(fetchCustomers)
</script>

<template>
  <div v-if="NoCustomersService">
    <p>Lo sentimos! Actualmente no tenemos usuarios, intentelo mas tarde.</p>
  </div>

  <div v-else class="container">
    <h1>Listado de Clientes</h1>

    <div v-if="isLoading">
      <p>Cargando productos...</p>
      <div class="spinner"></div>
    </div>

    <div v-else>
      <input type="text" v-model="filter" placeholder="Filtrar por nombre" class="filter-input" />
      <table class="customer-table">
        <thead>
          <tr>
            <th @click="sortBy('givenName')">Nombre</th>
            <th @click="sortBy('familyName1')">Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filteredCustomers" :key="customer.id">
            <td>{{ customer.givenName }}</td>
            <td>{{ customer.familyName1 }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>
              <button @click="goToDetail(customer.id)" class="detail-button">
                <CommunityIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.customer-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.customer-table th,
.customer-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.customer-table th {
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

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #34b65f;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
