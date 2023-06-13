<template>
    <div v-for="todo in todoList" :key="todo.id" class="list">
        <div class="item">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <span @click.stop="toggleCompleted(todo.id)">✔</span>
            <span @click.stop="deleteTodo(todo.id)">&#10060</span>
        </div>
    </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'
const store = useTodoListStore();
const { todoList } = storeToRefs(store)
const { toggleCompleted, deleteTodo } = store
</script>

<style  scoped>
.completed {
    text-decoration: line-through;
}
</style>