const { createApp, ref, reactive } = Vue;

createApp({
    setup(){
        const currentIdx = ref(0);
        const tabs =  ([
            {
                name: '我的信息',
            },
            {
                name: '用户信息',
            },
            {
                name: '账号安全',
            },
        ]);

        const contents = reactive([
            {
                image: './image/23.jpg'
            },
            {
                image: './image/100016.jpg'
            },
            {
                image: './image/1231622.jpg'
            },
        ]);

        const changeTab = (index) => {
            currentIdx.value = index;
        };
        return{
            currentIdx,
            tabs,
            changeTab,
            contents,
        };
    },
}).mount("#ex")