<template>
    <div>
        <Layout>
            <Header style=" height: 60px;background: white;">
                <TopNav />
            </Header>
            <Layout style="width: 1000px;margin: 10px auto">
                <Content style=" margin: 0px 30px;">
                    <Card style="height: 500px">
                        <form @submit.prevent="postLogin"><!--prevent取默-->
                            <div>
                                用户名：<input required type="text" placeholder="请输入用户名" v-model="formdata.username"><!--required用户名不能为空-->
                            </div>
                            <div>
                                登录密码：<input required type="password" v-model="formdata.userpwd">
                            </div>
                            <div>
                                <input type="submit" value="登录">
                            </div>
                        </form>
                    </Card>
                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>
    </div>
</template>

<script>
    import TopNav from "../../components/TopNav";

    export default {
        name: "Login",
        components: {
            TopNav,
        },
        data(){
            return{
                formdata:{
                    username:'',
                    userpwd:''
                }
            }
        },
        methods:{
            postLogin(){
                console.log(this.formdata);
                let that = this;
                this.axios({
                    method:'post',
                    url:'http://localhost:4000/Users/VueLogin',
                    data:that.formdata
                }).then(result=>{
                    console.log(result.data);
                    if (!result.data.type){
                        //保存用户数据
                        window.sessionStorage.setItem('user',result.data.username);
                        window.sessionStorage.setItem('user',result.data.username);
                        window.sessionStorage.setItem('isLogin',true);
                        /*isLogin*/
                        that.$router.push("/");
                    }else {
                        alert('登录失败')
                    }

                })
            }

        }

    }
</script>

<style scoped>

</style>