<script setup>
import { RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <NavbarItem />
    </aside>
    <main class="content">
      <router-view />
    </main>
    <!--
      <img alt="Telefonia logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    -->
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
