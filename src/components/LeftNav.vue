<template>
    <Menu  active-name="1" style="width: 200px">
        <MenuGroup title="内容管理">
            <MenuItem :to="`/list/${item._id}`" v-for="item in category" :key="item._id" :name="item.name">
          <!--      <Icon :type="item.type" />-->
                {{item.name}}
            </MenuItem>
        </MenuGroup>
    </Menu>
</template>

<script>
    export default {
        name: "LeftNav",
        data(){
            return {
                category:[]
            }
        },
        mounted() {
            //axios
            var that=this;
            //获取课程列表
            this.axios({
                method:'get',
                url:'http://localhost:4000/VueCategory'
            }).then(result=>{
/*                console.log(result)
                console.log(result.data.category.length)*/
                if(result.data.category.length>0){
                    that.category=result.data.category;
                }
            })
        }
    }
</script>

<style scoped>

</style>