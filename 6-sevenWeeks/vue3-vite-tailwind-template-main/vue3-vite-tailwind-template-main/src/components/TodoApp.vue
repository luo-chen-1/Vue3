<template>
    <div class="px-40 py-20 bg-cyan-200">
        <h1>To Do List</h1>
        <todo-form />
        <todo-list />
    </div>
</template>

<script setup>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
</script>

<style lang="scss" scoped></style>