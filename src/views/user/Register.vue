<template>
    <div>
        <Layout>
            <Header style=" height: 60px;background: white;">
                <TopNav />
            </Header>
            <Layout style="width: 1000px;margin: 10px auto">
                <Sider hide-trigger style="width: 200px;background: #f5f7f9">

                </Sider>
                <Content style=" margin: 0px 30px;">
                    <Card style="height: 500px">
                        111
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
        name: "Register",
        components: {
            TopNav,
        },

    }
</script>

<style scoped>

</style>