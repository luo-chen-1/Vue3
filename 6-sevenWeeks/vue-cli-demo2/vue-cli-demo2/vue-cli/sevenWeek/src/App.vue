<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/home">响应式API</RouterLink>
        <RouterLink to="/about">组件</RouterLink>
        <RouterLink to="/use">Use</RouterLink>
        <RouterLink to="/socks">Socks</RouterLink>
        <RouterLink to="/todo">ToDo</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* header {
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
} */
header {
  height: 70px;
  line-height: 70px;
  background-color: #b8d7f3;
}

main {
  width: 85%;
  margin: 10px auto;
  border: 1px solid #ccc;
  min-height: 70vh;
  border-radius: 4px;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #1ea6e6;
}
</style>
