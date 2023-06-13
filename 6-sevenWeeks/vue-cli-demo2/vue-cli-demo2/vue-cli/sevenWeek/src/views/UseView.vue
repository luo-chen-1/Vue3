<script setup>
import { ref } from 'vue'
import useTodoList from '@/use/useList'


const { todoItems, addItem, finishedCount } = useTodoList()

const inputValue = ref('')

const remove = (val) => {
    todoItems.splice(val, 1)
}



</script>
<template>
    <div>
        <h2>数组</h2>
        <h3>{{ finishedCount }}/{{ todoItems.length }}</h3>
        <li v-for="item in todoItems" :key="item.id" class="point" :class="{ op: item.finished }">
            <span @click="item.finished = !item.finished"> {{ item.title }}</span>
            <button class="button" @click="remove(index)">删除</button>
        </li>
        <!-- <input type="text" v-model="inputValue" @keydown.enter="addItem(inputValue); inputValue = ''"> -->
        <input type="text " v-model="inputValue" @keydown.enter="addItem(inputValue)">
    </div>
</template>



<style  scoped>
* {
    margin-left: 30px;
}

.op {
    opacity: 0.5;
    font-style: italic;
    color: green;
}

.point {
    cursor: pointer;
}

.button {
    margin-left: 20px;
}
</style>