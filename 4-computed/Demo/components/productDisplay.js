app.component('product-display', {

    props:{
        free:{
            type: Boolean,
            default: false,
        }
    },
    

    // 显示死的内容
    template: `<div id="app">
    <p>{{msg}}</p>
    <h1>{{product}}</h1>
    <div class="product-image">
        <img v-bind:src="image" alt="">
    </div>
    <div class="url">
        <a :href="url">极客时间</a>
    </div>
    <p v-if="instock">In stock</p>
    <p v-else>Out of stock</p>
    <p v-show="instock">In stock</p>
    <div>
        <p v-if="inventory>10">In stock</p>
        <p v-else-if="inventory<=0 && inventory > 0">10</p>
        <p v-else>Out of stock</p>
    </div>
    <div>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
    </div>
    <!-- <div v-for="variant in variants" :key="variant.id">
        {{variant.color}}{{variant.size}}
    </div> -->
    <button class="button" v-on:click="cart += 1">Add to Cart</button>
    <div class="method">
        <button class="button" :class="{disabledButton:!instock}" :disabled="!instock" v-on:click="addToCart">Add to Cart</button>
        <button class="button" @click="decrement">Remove to Cart</button>
    </div>
    <div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)" class="color-circle"
        :style="{'background-color':variant.color}">
    </div>
</div>`,
    data() {
        return {
            product: 'Socks',
            image: './images/socks_green.jpg',
            url: 'https://time.geekbang.org/?utm_term=iTab&utm_source=iTab&utm_medium=iTab&utm_campaign=iTab&utm_content=iTab',
            instock: true,
            inventory: 100,
            details: ['50%', '30%', '20%'],
            variants: [
                { id: 2234, color: 'green' ,size:'36~42',image:'./images/socks_green.jpg'},
                { id: 2235, color: 'blue' ,size:'36~43',image:'./images/socks_blue.jpg'},
            ],
            cart:0,

        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        decrement(){
            this.cart -= 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
    computed:{
        msg(){
            if(this.free){
                return 'free'
            }
            return "99999"
        }
    }
})