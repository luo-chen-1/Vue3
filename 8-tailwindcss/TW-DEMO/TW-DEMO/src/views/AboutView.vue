<template>
  <div class="container   mx-auto mt-3 w-1/2 min-h-[500px] bg-blue-300 bg-opacity-30 border border-2 border-gray-800">
    <div class="h-10"></div>
    <p class="text-4xl font-bold text-center text-blue-500">MyToDos</p>
    <div class="mt-5 text-center">
      <div>
        <p>待办事项助手</p>
        <input type="text" v-model="input1" placeholder="请输入代办事项"><button @click="addItems(input1)"
          class="ml-2 border ">添加</button>
      </div>
      <div class="min-h-[200px] text-center">
        <li class=" list-decimal" v-for="item in data.filteredItems" :key="item.id" @click="itemClicked(item)">
          <span :class="{ 'line-through': item.finished }" class="cursor-pointer ml-10">
            {{ item.title }}
          </span>
        </li>
      </div>
      <div class="flex space-x-4">
        <button @click="showAll" class="flex-1 ml-2 border border-2 border-gray-500">全部</button>
        <button @click="showUnfinished" class="flex-1 ml-2 border border-2 border-gray-500">待完成</button>
        <button @click="showFinished" class="flex-1 ml-2 border border-2 border-gray-500">已完成</button>
        <button @click="deFinished" class="flex-1 ml-2 border border-2 border-gray-500">清除完成</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
const input1 = ref('')
const data = reactive({
  todoItems: [],
  filteredItems: []
})
const addItems = (val) => {
  data.todoItems.push({
    id: data.todoItems.length + 1,
    title: val,
    finished: false
  });
  input1.value = '';
  data.filteredItems = data.todoItems;
}

const itemClicked = (item) => {
  item.finished = !item.finished
}
const showAll = () => {
  data.filteredItems = data.todoItems
}

const showUnfinished = () => {
  data.filteredItems = data.todoItems.filter(item => !item.finished)
}

const showFinished = () => {
  data.filteredItems = data.todoItems.filter(item => item.finished)
}
const deFinished = () => {
  data.todoItems = data.todoItems.filter(item => !item.finished)
  data.filteredItems = data.todoItems
}
</script>

<style></style>
