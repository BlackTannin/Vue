<template>
    <div>
        <Layout>
            <Header style=" height: 60px;background: white;">
                <TopNav />
            </Header>
            <Layout style="width: 1000px;margin: 10px auto">
                <Sider hide-trigger style="width: 200px;background: #f5f7f9">
                    <LeftNav />
                </Sider>
                <Content style=" margin: 0px 30px;">
                    <Card dis-hover title="推荐列表">
                        <Card dis-hover class="Courser_List_Card" :to="`/ListShow/${item._id}`" v-for="item in course" :key="item._id" :name="item.name">
                            <div>
                                <img class="Courser_List_Card_hidpic" :src="'http://localhost:4000/uploads/course/'+item.user.headpic">
                                    <p class="Courser_List_Card_title">{{item.name}}</p>
                                    <div class="Courser_List_Card_content">
                                        {{item.contents}}
                                    </div>
                                    <div class="Courser_List_Card_end">点赞：{{item.praise}} 收藏：{{item.collect}} 浏览：{{item.browse}}</div>
                                <div class="Courser_List_Card_img">
                                    <img  :src="'http://localhost:4000/uploads/course/'+item.thumbnail" alt="">

                                </div>
                            </div>
                        </Card>

                    </Card>
                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>


    </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import LeftNav from "../components/LeftNav";
    export default {
        name: "List",
        components: {
            TopNav,LeftNav
        },
        data(){
            return {
                course: []
            }
        },
        mounted() {
            var _id = this.$route.params.id;
            //this.axios
            var that=this;
            //获取课程列表
            this.axios({
                method:'get',
                url:'http://localhost:4000/VueCategoryId/'+_id
            }).then(result=>{
                //console.log(result.data)
                if(result.data.course.length>0){
                    that.course=result.data.course;
                }
            })
        },
    }
</script>

<style scoped>
    .Courser_List_Card{
        height: 200px;
    }
    .Courser_List_Card_hidpic{
        width: 50px;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    .Courser_List_Card_title{
        position: absolute;
        left: 50%;
        margin: -60px -270px;
        font-weight: bold;
        font-size: 16px;
        color: black;
    }
    .Courser_List_Card_content{
        width: 300px;
        clear:both;
        color: rgba(0,0,0,.45);;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; /*//作为弹性伸缩盒子模型显示。*/
        -webkit-box-orient:vertical; /*//设置伸缩盒子的子元素排列方式--从上到下垂直排列*/
        -webkit-line-clamp:2; /*//显示的行*/

    }
    .Courser_List_Card_end{
        margin-top: 40px;
        color:  #8590a6;
    }
    .Courser_List_Card_img{
        width:280px ;
        height: 180px;
        position: absolute;
        float: right;
        left: 50%;
        margin: -165px 50px;
        overflow:hidden;
        object-fit:contain;
    }
</style>