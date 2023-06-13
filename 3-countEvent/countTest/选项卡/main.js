const { createApp, ref, reactive } = Vue;

createApp({
    setup(){
        const currentIdx = ref(0);
        const tabs =              ([
            {
                name: '资源',
                count: 4,
            },
            {
                name: '成员',
                count: 31,
            },
            {
                name: '活动',
                count: 9,
            },
            {
                name: '消息',
                count: 0,
            },
            {
                name: '详情',
                count: -1,
            }
        ]);

        const contents = reactive([
            {
                lists: ['选项卡练习.pdf','计数器练习','uni-app 说明(下).mp4'
                ,'uni-app说明(上).mp4'],
            },
            {
                lists: ["张三", "李四", "王五", "赵六", "伯仲"],
            },
            {
                lists: ['uni-app 练习（一）','前端补充学习打卡区','选项卡','计数器练习']
            },
            {
                lists: ['']
            },
            {
                lists: ['']
            }
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