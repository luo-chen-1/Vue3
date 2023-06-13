app.component('simple', {

    template: `
        <div class="border tx-center" style="width: 400px">
            <div class="d-flex border" >
                <div class="flex-1 border">
                    商品名
                </div>
                <div class="flex-1 border">
                    价格
                </div>
                <div class="flex-1 border">
                    地点
                </div>
                <div class="flex-1 border">
                    操作
                </div>
            </div>
            <div class="d-flex  border" v-for="(value,index) in values" :key="value.name">
                <div class="flex-1 border ">{{value.name}}</div>
                <div class="flex-1 border">{{value.price}}</div>
                <div class="flex-1 border">{{value.place}}</div>
                <div class="flex-1 border"> <span @click="show"  @mouseover="updateCount(index)" >点击</span></div>
            </div>
            
        </div>
    `,
    props: {
        values: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            current: 0
        }
    },
    methods: {
        updateCount(index) {
            this.current = index
            console.log(this.current)
        },
        show() {
            this.$emit('notice-show', this.values[this.current]);
        }
    }
})
