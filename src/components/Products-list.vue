<script setup>
import { reactive } from 'vue'
const articles = reactive([
  { title: 'Artículo 11', description: 'Descripción del artículo 1.' },
  { title: 'Artículo 2', description: 'Descripción del artículo 2.' },
  { title: 'Artículo 3', description: 'Descripción del artículo 3.' },
  { title: 'Artículo 4', description: 'Descripción del artículo 4.' },
  { title: 'Artículo 5', description: 'Descripción del artículo 5.' },
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
