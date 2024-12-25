<script setup>
import { reactive } from 'vue'

const articles = reactive([
  { title: 'user 11', description: 'Descripción del user 1.' },
  { title: 'user 2', description: 'Descripción del user 2.' },
  { title: 'user 3', description: 'Descripción del user 3.' },
  { title: 'user 4', description: 'Descripción del user 4.' },
  { title: 'user 5', description: 'Descripción del user 5.' },
])
</script>

<template>
  <div class="container">
    <h1>Listado de Artículos</h1>
    <div class="article-list">
      <div class="article" v-for="(article, index) in articles" :key="index">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>
