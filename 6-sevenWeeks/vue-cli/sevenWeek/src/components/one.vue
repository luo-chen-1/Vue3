<script setup>

    defineProps({
        msg:String,
        arr:Array
    })

    const emits = defineEmits(['change-msg','change-arr'])

    const onchangeMsg = ()=>{
        emits('change-msg','HelloWorld')
    }

    let newArr = ['羽毛球','篮球','足球']
    let arr2 = [...newArr]

    const onchangeArr = ()=>{
        emits('change-arr',arr2)
    }


</script>

<template>
    <div>
        <h1>改变值</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ arr }}</h1>
        <button @click="onchangeMsg">改变</button>
        <button @click="onchangeArr">数组</button>
    </div>
</template>


