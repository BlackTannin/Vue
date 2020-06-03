<template>
    <div>
        <Layout>
            <Header style=" height: 60px;background: white;">
                <TopNav />
            </Header>
            <Layout style="width: 1000px;margin: 10px auto">
                <Sider hide-trigger style="width: 200px;background: #f5f7f9">
                    <Menu  active-name="2" style="width: 200px">
                        <MenuGroup title="用户管理">
                            <MenuItem to="/userinfo" name="userinfo">
                                <Icon type="md-bookmark" />
                                信息修改
                            </MenuItem>
                            <MenuItem to="/myorder" name="myorder">
                                <Icon type="ios-american-football-outline" />
                                我的订单
                            </MenuItem>

                        </MenuGroup>
                    </Menu>
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
    export default {
        name: "InfoNav",
        components: {
            TopNav,
        },
    }
</script>

<style scoped>

</style>