import { UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import AuthContent from '../AuthContent';
import { useState } from 'react';
const { Content, Sider } = Layout;

const items = [
    {
        key: "1",
        icon: <UserOutlined />,
        label: "Register"
    },
    {
        key: "2",
        icon: <LoginOutlined />,
        label: "Login"
    },
]

const Home = () => {
    const [selectedId, setSelectedId] = useState("1");
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}

            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedId]} onClick={(e) => {
                    setSelectedId(e.key);
                    console.log(e.key);
                }} items={items} />
            </Sider>
            <Layout>
               
                <Content style={{
                    margin: '24px 16px 0',
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '95vh'
                }}
                >
                    <div
                        style={{
                            padding: 30,
                            minHeight: "50vh",
                            width: '60%',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <AuthContent id={selectedId} />

                    </div>

                </Content>

            </Layout>
        </Layout>
    );
}

export default Home