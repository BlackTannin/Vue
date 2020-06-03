<template>
    <div id="TopNav">
        <Menu mode="horizontal" >
            <MenuItem name="login" to="/">
                主页
            </MenuItem>
            <MenuItem name="register" to="/#">
                副页
            </MenuItem>

            <MenuItem name="admin" to="/admin" replace target="_blank" style="margin: 0 150px">
                后台
            </MenuItem>

            <div style='float: right'>
                <div  v-if="isLogin" >
                    <MenuItem name="login" to="/userinfo">
                        {{user}}
                    </MenuItem>
                    <MenuItem name="exit" to="/logout"  @click="exit">
                        注销
                    </MenuItem>
                </div>

                <div v-else>
                    <MenuItem name="login" to="/login">
                        登录
                    </MenuItem>
                    <MenuItem name="register" to="/register">
                        注册
                    </MenuItem>
                </div>
            </div>
        </Menu>

    </div>
</template>

<script>
    export default {
        name: "TopNav",
        data(){
            return {
                isLogin:false,
                user:''
            }
        },
         mounted() {
             console.log(window.sessionStorage.getItem('user'))     //输出用户
             if(window.sessionStorage.getItem('isLogin')){
                 this.isLogin = true;
                 this.user= window.sessionStorage.getItem('user');
             }
         },
        methods:{
            exit(){
                console.log('点击注销')
                console.log(this.$store.state.isLogin)

                this.$store.state.isLogin = false
            }
        }
    }
</script>

<style scoped>
#TopNav{

}
</style>