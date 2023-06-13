app.component('detail', {

    template: `
        <div class="border tx-center" style="width: 400px">
            <div class="d-flex">
                <span class="flex-1 border ">{{value.name}}</span>
                <span class="flex-1 border ">{{value.price}}</span>
                <span class="flex-1 border ">{{value.place}}</span>
                <span class="flex-1 border ">{{value.color}}</span>
            </div>
        </div>
    `,
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
})
