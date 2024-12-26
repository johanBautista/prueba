<template>
  <header>
    <div class="logo">Mi Telefonía</div>
    <nav>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero" id="home">
    <h1>Conecta tu vida con nosotros</h1>
    <p>Planes de telefonía y fibra óptica al mejor precio. ¡Conéctate al futuro hoy mismo!</p>
    <button class="cta">Ver planes</button>
  </section>

  <section class="container-img">
    <img src="@/assets/logo.svg" alt="Conexión a Internet" style="width: 50%" />
  </section>

  <section class="products" id="products">
    <h2>Nuestros Productos</h2>
    <div class="product-list">
      <div class="product">
        <img src="https://via.placeholder.com/300x200" alt="Fibra 100MB" />
        <h3>Fibra 100MB</h3>
        <p>Conexión ultrarrápida para tu hogar.</p>
        <p class="price">$29.99/mes</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/300x200" alt="Móvil 200GB" />
        <h3>Móvil 200GB</h3>
        <p>Los mejores datos para tu móvil.</p>
        <p class="price">$19.99/mes</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/300x200" alt="TV Premium" />
        <h3>TV Premium</h3>
        <p>Entretenimiento para toda la familia.</p>
        <p class="price">$39.99/mes</p>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2024 MiTelefonía. Todos los derechos reservados.</p>
  </footer>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
}

a {
  text-decoration: none;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Cabecera */
header {
  background: #fff;
  color: #333;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  font-size: 24px;
  font-weight: bold;
}

header nav ul {
  display: flex;
  gap: 15px;
}

header nav ul li {
  font-size: 16px;
}

/* Hero */
.hero {
  background: linear-gradient(to right, #0ab761, #107a45);
  color: #fff;
  text-align: center;
  padding: 60px 20px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
}

.hero .cta {
  padding: 10px 20px;
  background: #fff;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hero .cta:hover {
  background: #f0f0f0;
}

.container-img {
  text-align: center;
  padding: 40px 20px;
}

/* Productos */
.products {
  padding: 40px 20px;
  text-align: center;
}

.products h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.products .product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.products .product {
  background: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  text-align: left;
}

.products .product img {
  max-width: 100%;
  border-radius: 5px;
}

.products .product h3 {
  font-size: 20px;
  margin: 15px 0 10px;
}

.products .product p {
  font-size: 16px;
  margin: 10px 0;
}

.products .product .price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* Pie de página */
footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

footer p {
  margin: 0;
  font-size: 14px;
}
</style>
