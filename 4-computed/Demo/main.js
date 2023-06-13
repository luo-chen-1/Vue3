
const app = Vue.createApp({

    data(){

        return{
            shoppingCart:[
                {
                    productId:1,
                    name:'苹果',
                    price:6,
                },
                {
                    productId:2,
                    name:'梨子',
                    price:15,
                },
                {
                    productId:3,
                    name:'milk',
                    price:52,
                }
            ]
        }

    },
    computed:{
        test(){
            return this.t;
        },
// console.log(element.price);
//                 sumPrice += element.price;

// for循环版本
        count(){
            var sumPrice = 0;
            for (let index = 0; index < this.shoppingCart.length; index++) {
                const element = this.shoppingCart[index].price;
                sumPrice += element;
            }
            return sumPrice;
        },



        countforeach(){
            var sumPrice = 0;

        }



    }



})