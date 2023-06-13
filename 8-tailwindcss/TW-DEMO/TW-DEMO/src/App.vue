<script setup>
</script>

<template>
  <header>

    <div class="flex justify-center items-center mt-10">
      <nav class="">
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/about" class=" text-black hover:text-green-500 active:text-green-700">Todo</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
