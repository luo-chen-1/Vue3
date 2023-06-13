const app = Vue.createApp({
    data(){
        return{
            lists:[
                {
                    course_id:1,
                    image:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg?x-oss-process=style/s300x300',
                    course_name:'后端工程化开发',
                    myclass:'软件2242 web2班',
                    courseId:'10000',
                    term:'2022-2023-2',
                    courseTeacher: {
                        name: '许莫淇',
                        avatar: './image/touxiang.jpg'
                    },
                    flag:false,
                    finshed:false
                },
                {
                    course_id:2,
                    image:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300',
                    course_name:'前端工程化开发',
                    myclass:'软件2242 web2班',
                    courseId:'10001',
                    term:'2022-2023-2',
                    courseTeacher: {
                        name: '许莫淇',
                        avatar: './image/touxiang.jpg'
                    },
                    flag:false,
                    flashed:false
                },
                {
                    course_id:3,
                    image:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg?x-oss-process=style/s300x300',
                    course_name:'Web应用开发',
                    myclass:'软件2242 web2班',
                    courseId:'10002',
                    term:'2022-2023-2',
                    courseTeacher: {
                        name: '许莫淇',
                        avatar: './image/touxiang.jpg'
                    },
                    flag:false,
                    finshed:false
                }
            ]
        }
    },
    methods: {
        change(index,flag) {
            this.lists[index].flag = !flag
        },
        deleteList(index) {
            this.lists.splice(index, 1);
        }
    }
})