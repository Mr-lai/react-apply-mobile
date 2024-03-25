import './index.scss'
import { Card, Form, Input, Button, Toast  } from 'antd-mobile'
import { useDispatch } from 'react-redux';
import logo from '@/assets/logo.png'
import { fetchLogin } from '@/store/modules/user.ts';
import { useNavigate } from 'react-router-dom';
const Login = () => { 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (value) => {
    console.log('Received values of form: ', value);

    try { 
      await dispatch(fetchLogin(value))
      navigate('/')
      Toast.show({
        icon: 'success',
        content: '登录成功',
      })
    }catch(error){ 
      Toast.show({
        icon: 'fail',
        content: '登录失败',
      })
    }
  };
  return (
    <div className="login">
      <img className="login-logo" src={logo} alt="" />
      <Card className="login-container">
        {/*登录表单 */}
        <Form
          onFinish={onFinish}
          validateTrigger="onBlur"
          layout='horizontal'
          mode='card'
        >
          <Form.Item
            name="mobile"
            label='手机号码' 
            rules={[
                {
                  required: true,
                  message: '请输入手机号!',
              },
              {
                pattern: /^1[345789]\d{9}$/,
                message: '请输入正确的手机号!',
              }
              ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            label='验证码' 
            extra={<a>发送验证码</a>}
             rules={[
                 {
                   required: true,
                   message: '请输入验证码!',
               },
               {
                 pattern: /^[0-9]{6}$/,
                 message: '请输入正确的验证码!',
               }
               ]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button block color='primary' size='large'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login