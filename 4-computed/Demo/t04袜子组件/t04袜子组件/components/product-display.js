app.component('product-display', {

    template: `
     <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                   <p>{{msg}}</p>
                    <img :src="image">
                 
                </div>
                
                <div class="product-info">
                    
                    <h1>{{product}}</h1>

                    <p>{{description}}</p>
                    <a :href="url">https://cn.vuejs.org</a>

                    <p v-if="inventory>10">In Stock</p>
                    <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                    <p v-else>Out of Stock</p>

                    <p v-if="onSale">On Sale</p>
                    <!-- <p v-show="inStock">In Stock</p> -->


                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>

                    <ul>
                        <li v-for="(size,index) in sizes" :key="index">{{size}}</li>
                    </ul>


                    <div class="color-circle" v-for="variant in variants" :key="variant.id"
                         @mouseover="updateImage(variant.image)"
                         :style="{backgroundColor:variant.color}">
                        {{ variant.color }}
                    </div>

                    <span v-if="cart > 0">购买:{{cart}}只</span>

                    <button class="button" :class="{disabledButton:!inStock}" v-on:click="addToCart" :disabled="!inStock">Add to Cart</button>
                    <button class="button" v-on:click="removeToCart">Remove Item</button>
                    <p v-if="cart > 0">一共:{{cartNum}}元</p>
                    <!-- 可以使用三元运算符
                        <div :class="[true?clssName:'']"></div>
                    -->
                </div>
            </div>
        </div>
    `,
    props: {
        free: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            url: 'https://cn.vuejs.org',
            inStock: true, //new data property
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            index: 2234,
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    price: 10
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    price: 20
                },
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0


        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeToCart() {
            this.cart -= 1;
        },
        updateImage(variantImage) {
            this.image = variantImage

        }
    },
    computed: {
        cartNum() {
            if (this.cart > 0) {
                return this.cart * 10;
            }
        },
        msg() {
            if (this.free) {
                return 'Free'
            }
            return "9999999"
        }
    }
})
