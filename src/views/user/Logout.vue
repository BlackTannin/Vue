<template>
    <div class="home">
        <Layout>
            <Header style=" height: 60px;background: white;">
                <TopNav />
            </Header>
            <Layout style="width: 1000px;margin: 10px auto">
                <Sider hide-trigger style="width: 200px;background: #f5f7f9">
                    <LeftNav />
                </Sider>
                <Content style=" margin: 0px 30px;">
                    <Card style="height: 500px"></Card>
                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>

    </div>
</template>

<script>
    import TopNav from "../../components/TopNav";
    import LeftNav from "../../components/LeftNav";

    export default {
        name: "Logout",
        components: {
            TopNav,LeftNav
        },
        mounted() {
            sessionStorage.removeItem('isLogin');

        }
    }
</script>

<style scoped>

</style>