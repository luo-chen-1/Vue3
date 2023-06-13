const app = Vue.createApp({
    data() {
        return {
            name: 'vue',
            simples:[
                {
                    name: '袜子',
                    price: 10,
                    place: '北京',
                },
                {
                    name: '衣服',
                    price: 20,
                    place: '南京',
                },
                {
                    name: '鞋子',
                    price: 30,
                    place: '上海',
                },
            ],

            details:[
                {
                    name: '袜子',
                    price: 10,
                    place: '北京',
                    color: '红色',
                },
                {
                    name: '衣服',
                    price: 20,
                    place: '南京',
                    color: '蓝色',
                },
                {
                    name: '鞋子',
                    price: 30,
                    place: '上海',
                    color: '灰色',
                },
            ],
        }
    },

    methods: {
        handleshow(e) {
            alert(JSON.stringify(e))
        }
    }


})
