<script setup>
import { toRefs, computed, ref ,watch,reactive,watchEffect} from 'vue';
import { useCssVar } from '@vueuse/core'
const person = {
  name: 'wjj',
  age: 21
}

let { name, age } = toRefs(person)

let change = () => {
  age.value++;
  console.log(age.value)
}


const count = ref(0)

//计算属性
const changeCount =()=>{
  count.value++
}
//计算属性
const add = computed(() => count.value + 100)

const str = ref('此时此刻')

const age1 = ref(18)
// 响应式对象
let info = reactive ({
  id:1,
  title:'lll'
})
// 回调函数 2秒后变值
// setTimeout(()=>{str.value = '彼时彼刻',age1.value=28},2000);

// watch([str,age],(newValue,oldValue)=>{
//   console.log(newValue+","+oldValue);
// })

setTimeout(()=>{info.id = 2},2000);
watch(()=>info.id,(newValue,oldValue)=>{
  console.log(JSON.stringify(newValue) +","+JSON.stringify(oldValue));
})

</script>


<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="change">改变</button>
  </div>


  <div>
    <h1>计算属性</h1>
    <h1>{{ add }}</h1>
    <button @click="changeCount">改变</button>
  </div>
</template>







