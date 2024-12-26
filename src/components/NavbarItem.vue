<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import ToolingIcon from './icons/IconTooling.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li>
        <span class="icon">
          <DocumentationIcon />
        </span>
        <router-link to="/"> Home </router-link>
      </li>
      <li>
        <span class="icon">
          <ToolingIcon />
        </span>
        <router-link to="/products"> Productos</router-link>
      </li>
      <li>
        <span class="icon">
          <EcosystemIcon />
        </span>
        <router-link to="/users"> Usuarios</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  padding: 20px;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.nav-list li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-list .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.nav-list a {
  text-decoration: none;
  font-size: 16px;
  color: #333;
  transition: color 0.3s ease;
}

.nav-list a:hover {
  color: var(--color-accent);
}

.nav-list li a.router-link-active {
  color: var(--color-accent);
}
</style>
