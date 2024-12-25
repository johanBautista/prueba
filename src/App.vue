<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
  </div>

  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  <!--
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Usuarios</RouterLink>
        <RouterLink to="/about">Productos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  -->
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  border-right: 1px solid #ccc;
  padding: 20px;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
