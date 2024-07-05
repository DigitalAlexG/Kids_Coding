import "./index.scss"
import { Card, Form, Input, Button } from "antd"
import logo from "@/assets/logo.png"

const Login = () => {
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger={["onBlur"]} onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                pattern: /3,/,
                message: "Please enter a username with at least 3 characters",
              },
            ]}
          >
            <Input
              size="large"
              // placeholder="please enter username"
            />
          </Form.Item>

          <Form.Item
            label="Password  "
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                pattern: /3,/,
                message: "Please enter a password with at least 3 characters",
              },
            ]}
          >
            <Input
              size="large"
              // placeholder="Please enter password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
