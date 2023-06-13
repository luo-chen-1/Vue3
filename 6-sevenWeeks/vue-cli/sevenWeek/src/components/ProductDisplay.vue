<script setup>
import {ref,reactive,computed} from 'vue'
import 

const props = defineProps({
    vip:{
        type: Boolean,
        required: true,
        default: false
    }
})

const emit = defineEmits(['addToCart'])


const product = ref('Socks')
const brand = ref('Vue3')
const selectedIndex = ref(0)
const details = reactive([
    '50% cotton','30% wool','20% polyester'
])

const variants = reactive([
    {
        id:1001,
        color:'green',
        image:'socksGreenImage',
        quantity: 50
    },
    {
        id:1002,
        color:'blue',
        image:'socksGreenImage',
        quantity: 0
    }
])

const title = computed( () =>{
    return brand.value + '' + product.value
})

const image = computed(() =>{
    return variants.values[selectedIndex.value].image
})

const inStock = computed(( )=>{
    return variants.values[selectedIndex.value].quantity>0
})

const info = computed(() => {
    if(props.vip){
        return 'Free'
    }
    return 99.99
})

const addToCart = () =>{
    emit('add-to-cart', variants.values[selectedIndex.value].id)
}

const changeIndex = (index) => {
    selectedIndex.value = index
}

</script>

<template>
    <div>

    </div>
</template>


<style scoped>

</style>