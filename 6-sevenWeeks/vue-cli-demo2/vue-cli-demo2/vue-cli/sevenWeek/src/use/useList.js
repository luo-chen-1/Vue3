import { computed, reactive } from "vue";


export default function useTodoList() {
    //定义了响应数据
    const todoItems = reactive([
        {
            id: 1,
            title: '吃饭',
            finished: false,
        }, {
            id: 2,
            title: '上班',
            finished: true,
        },
        {
            id: 3,
            title: '下班',
            finished: false,
        }, {
            id: 4,
            title: '睡觉',
            finished: true,
        },


    ])

    //封装逻辑
    const addItem = (val) => {
        todoItems.push({
            id: todoItems.length + 1,
            title: val,
            finished: false

        })
    }

    const remove = (index) => {
        todoItems.splice(index, 1)
    }

    const finishedCount = computed(() => {
        return todoItems.filter((item) => item.finished === true).length
    })

    return { todoItems, addItem, finishedCount,remove }
}