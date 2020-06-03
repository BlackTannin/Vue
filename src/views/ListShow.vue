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
                    <Card dis-hover title="课程详情">
                            <div class="Card_img_div">
                                <video controls :poster="'http://localhost:4000/uploads/course/'+course.thumbnail"  class="Card_img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4"></video>
                            </div>
                            <div class="Card_text_div">
                                <p class="Card_title">{{course.name}}</p>
                                <div class="Card_content">
                                    {{course.contents}}
                                </div>
                                <div class="Card_end">
                                    点赞：{{course.praise}}收藏{{course.collect}}：浏览：{{course.browse}}
                                </div>
                                <div class="Card_price">
                                    价格:{{course.price}}
                                </div>
                            </div>

                    </Card>
                    <Button class="Button_buy" type="success" @click.prevent="addCart">购买</Button>
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
        name: "ListShow",
        components: {
            TopNav,LeftNav
        },
        data(){
            return {
                course: []
            }
        },
        mounted() {
           // console.log(this.$route.params.id);
            var _id = this.$route.params.id;
            //this.axios
            var that=this;
            //获取课程列表
            this.axios({
                method:'get',
                url:'http://localhost:4000/VueFindCourse/'+_id
            }).then(result=>{
                //console.log(result.data)
                that.course=result.data.course;

            })
        },
        methods:{
            addCart(){
                var data = {
                    id:this.course._id,
                    name:this.course.name,
                    price:this.course.price,
                    num:1
                }
                //将当前的数据添加到state
               // this.$store.commit('changeStat',data)
                this.$router.push('/myorder');
            }
        }
    }
</script>

<style scoped>
.Card_img_div{
    margin: 0 auto;
    width:620px;
    height: 350px;
}
    .Card_img{
        width:620px;
        height: 350px;
    }
    .Card_text_div{
        margin-top: 20px;
    }
    .Card_title{
        font-size: 16px;
        font-weight: bold;
        color: black;

    }
    .Card_content{
        font-size: 14px;
        margin-top: 10px;
        color: rgba(0,0,0,.45);;
    }
    .Card_end{
        font-weight: lighter;
        font-size: 10px;
        padding-top: 10px;
        color:  #8590a6;
    }

    .Button_buy{
        position: absolute;
        float: right;
        left: 50%;
        margin-left: 350px;
        margin-top: -50px;
    }
    .Card_price{
        color: #e90000;
        font-size: 20px;
        position: absolute;
        left: 50%;
        margin: -30px 150px;
    }
</style>