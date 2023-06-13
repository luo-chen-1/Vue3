app.component('product-list',{

template:`<div v-for="(product,index) in products" :key="index">
<p>{{product}}</p>
</div>`,

props: {
    products:{
        type: Array,
        
    }
    
    
    [
        {
            name: '运动鞋',
            time: '2021-9-31',
            price: 200,
            
        },
        {
            name: '羽毛球拍',
            time: '2022-3-11',
            price: 200,
        }
    ],

    free: {
        type: Boolean,
        default: false
    }
},

data(){
    return{
    }
},
methods:{
    
},
computed:{

}

})