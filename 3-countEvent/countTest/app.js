const app = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },
    methods: {
        addCount() {
            this.number += 1
        },
        removeCount() {
            this.number -= 1,
                this.color = black
        },
        resetCount() {
            this.number = 0
        },
        changeColor(number) {
            if (number > 10) {
                return {'color':'green'}
            } 
            else if (this.number < 0) {
                return {'color':'red'}
            } else if (this.number === 0) {
                return {'color':'black'}
            }
            else if (this.number > 0 && this.number <= 10) {
                return {'color':'gray'}
            }
        }
    }
})