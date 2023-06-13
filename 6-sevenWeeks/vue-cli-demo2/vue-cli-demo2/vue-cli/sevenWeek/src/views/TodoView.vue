<script setup>
import { ref } from 'vue'
import useTodoList from '@/use/useList1'
const { todoItems, addItem, finishedCount, remove } = useTodoList()


const inputValue = ref('')

</script>

<template>
    <div class="divide-dashed w-1/2 h-[100%] border-2">
        <h1 class="text-blue-700 ">MyToDos</h1>
        <input class="border-2" type="text" v-model="inputValue" @keydown.enter="addItem(inputValue)">
        <li v-for="todoItem in todoItems" :key="todoItem.id" class="list" :class="{ textGreen: todoItem.finished }">
            <span @click="todoItem.finished = !todoItem.finished">{{ todoItem.title }}</span>
        </li>
        <div class="flex space-x-4">
            <span class="flex-1"><button>全部</button></span>
            <span class="flex-1"><button>已完成</button></span>
            <span class="flex-1"><button>未完成</button></span>
            <span class="flex-1"><button @click="remove(index)">删除</button></span>
        </div>
    </div>
</template>



<style>
body,
html {
    height: 100%;
}

.list {
    list-style-type: decimal;
    list-style-position: inside;
}

.textGreen {
    opacity: 0.5;
    font-style: italic;
    color: green;
}
</style>