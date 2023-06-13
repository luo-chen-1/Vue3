<template>
    <div>
        <form @submit.prevent="addItemAndClear(todo)">
            <BaseInput label="todo" type="text" v-model="todo" />
            <div class="my-2">
                <button class="p-2 w-50 border bg-cyan-500 rounded-md" type="submit">提交</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '../stores/todoList'
import BaseInput from './BaseInput.vue';

const todo = ref('')
const store = useTodoListStore()
function addItemAndClear(item) {
    if (item.length === 0) {
        return
    }
    store.addTodo(item)
    todo.value = ''
}

</script>

<style lang="scss" scoped></style>