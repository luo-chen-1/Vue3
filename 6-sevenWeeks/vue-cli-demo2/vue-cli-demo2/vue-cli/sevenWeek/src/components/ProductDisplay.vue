<script setup>
import { reactive ,ref,computed} from 'vue'
import socksGreenImage from '../assets/images/socks_green.jpg'
import socksBlueImage from '../assets/images/socks_blue.jpg'


const props = defineProps({
    vip: {
        type: Boolean,
        required: true,
        defult: false

    }

})

const emit = defineEmits(['add-to-cart'])



const product = ref('Socks')
const brand = ref('Vue3')
const selectedIndex = ref(0)
const details = reactive([
    '50% cotton', '30% wool', '20% polyester'
])

const variants = reactive([
    {
        id: 1001,
        color: 'green',
        image: socksGreenImage,
        quantity: 50,
    },
    {
        id: 1002,
        color: 'blue',
        image: socksBlueImage,
        quantity: 0,
    },
])

const title = computed(() => {
    return brand.value + '' + product.value
})

const image = computed(() => {
    return variants[selectedIndex.value].image
})

const inStock = computed(() => {
    return variants[selectedIndex.value].quantity > 0
})

const info = computed(() => {
    if (props.vip) {
        return 'Free'
    }
    return 99.99
})

const addToCart = () => {
    emit('add-to-cart', variants[selectedIndex.value].id)
}

const changeIndex = (idnex) => {
    selectedIndex.value = index
}


</script>


<template>
    <div class="flex justify-around">
        <div class="flex-1">
            <img :src="image" alt="" class = "w-[70%] border-4 border-solid  border-ocean rounded-xl">
        </div>
        <div class="flex-1 text-2xl text-left">
            <p>{{ title }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>price:{{ info }}</p>
            
            <div v-for="(variant,index) in variants" class="w-12 h-12 my-12 rounded-full border-4 border-solid
            " :style ="{backgroundColor: variant.color}" 
            @mouseover="changeIndex(index)" :key="variant.id" :index="index">
                
            </div>


        </div>
    </div>
</template>



<style lang="scss" scoped></style>