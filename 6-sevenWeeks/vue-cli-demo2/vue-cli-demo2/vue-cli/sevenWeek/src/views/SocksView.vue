<script setup>
import ProductDisplay from '../components/ProductDisplay.vue';
import {ref} from 'vue';
const vip = ref('true')


</script>


<template>
    <div class="h-16 mb-6 bg-gradient-to-r from-ocean to-leaf">
    </div>
    <div class=" my-6 mx-24 p-7 border border-solid border-mist  bg-cloud float-right">
        Cart
    </div>
    <ProductDisplay :vip="vip"></ProductDisplay>
</template>


<style lang="scss" scoped></style>