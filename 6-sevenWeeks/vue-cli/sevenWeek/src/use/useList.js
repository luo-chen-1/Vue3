import {computed, reactive} from 'vue';

export default function useTodoList(){

    const todoItems = reactive([
        {
            id:1,
            title:'吃饭',
            finished: false
        },
        {
            id:2,
            title:'上课',
            finished: false
        },
        {
            id:3,
            title:'睡觉',
            finished: true
        },
        {
            id:4,
            title:'运动',
            finished: true
        }
    ])

    // const printList = () =>{
    //     <li v-for>

    //     </li>
    // }


    // 封装了逻辑
    const addItem = (val) =>{
        todoItems.push(
            {
                id: todoItems.length + 1,
                title: val,
                finished: false
            }
        )
    }

    const changeValue = (item) => {
        item.finished = !item.finished
    }

    const remove = (index) =>{
        todoItems.splice(index,1)
    }

    const finishedCount = computed(( )=> {
        return todoItems.filter((item)=>item.finished === true).length
    })


    return {todoItems,addItem,finishedCount,remove,changeValue}

}

