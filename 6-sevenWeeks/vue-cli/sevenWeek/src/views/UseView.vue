<script setup>
import useTodoList from '@/use/useList'
import { ref } from 'vue'

const { todoItems, addItem, finishedCount, remove, changeValue } = useTodoList()

const inputValue = ref('')
</script>

<template>
    <div>
        <h2>数组</h2>
        <h3>{{ finishedCount }}/{{ todoItems.length }}</h3>
        <li v-for="item in todoItems" :key="item.id">
            <span class="dis">{{ item.title }}</span>
            <span class="dis" @click="changeValue(item)">
                {{ item.finished }}
            </span>
            <button @click="remove(item.id)">
                删除
            </button>
        </li>
        <input type="text" v-model="inputValue" @keydown.enter="addItem(inputValue)">
    </div>
</template>
<style>
.dis {
    padding-right: 5rem;
}
</style>