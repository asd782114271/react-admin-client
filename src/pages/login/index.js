import React, { Component } from "react";
import {
    Form,
    Input,
    Button
  } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
import logo from './images/logo.png'


export default class Login extends Component{
    formRef = React.createRef();

    //表单提交
    onFinish = (values)=>{
        //表单校验
        this.formRef.current.validateFields().then(values=>{
            //校验成功
            console.log('校验通过，提交登录的ajax表单',values);
        }).catch(errInfo=>{
            //校验失败
            console.log(errInfo);
        })
    }

    validatorPwd =(rule,value)=>{
        if(!value){
            return Promise.reject('密码不能为空');            
        }else if(value.length<=4){
            return Promise.reject('密码长度至少为4位');       
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            return Promise.reject('用户名必须是英文，数字或下划线');
        }else{
            return Promise.resolve();
        }  
    }

    render(){
        return (
            <div className="login">
                <header className="login-header">
                <img src={logo} alt="logo"/>
                <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        ref={this.formRef}
                        name="normal_login"
                        className="login-form"
                        onFinish={this.onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, whitespace:true, message: '请输入用户名!' },
                                { min: 4, message: '用户名至少4位!' },
                                { max: 12, message: '用户名最多8位!' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字或下划线!' },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { validator:this.validatorPwd}
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}