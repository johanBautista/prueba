<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import ToolingIcon from './icons/IconTooling.vue'
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li>
        <router-link to="/">
          <span class="icon">
            <DocumentationIcon />
          </span>
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/products">
          <span class="icon">
            <ToolingIcon />
          </span>
          Productos</router-link
        >
      </li>
      <li>
        <router-link to="/users">
          <span class="icon">
            <EcosystemIcon />
          </span>

          Usuarios</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style>
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 10px;
}

.icon {
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

.nav-list li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-list li a.router-link-active {
  color: #007bff;
}
</style>
