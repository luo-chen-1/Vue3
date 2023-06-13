<script setup>
  import{ref,reactive} from 'vue'
  import one from '../components/one.vue';
  import{useDark,useToggle} from '@vueuse/core';


  const isDark = useDark();
  const toggleDark = useToggle(isDark)
  let msg = ref('喵喵')
  let arr = reactive(['篮球','羽毛球'])

  const changeMsg = (msg1)=>{
    msg.value = msg1;
  }

  const changeArr = (arr1)=>{
    arr.splice(0,arr.length,...arr1)
  }




</script>




<template>
  <div>
    <h1>组件</h1>
    <h1>isDark:{{ isDark }}</h1>
    <button @click="toggleDark()">
      开关
    </button>
    <one :msg="msg" :arr="arr" @change-msg="changeMsg" @change-arr="changeArr"></one>
  </div>
</template>

<style scoped>




</style>

