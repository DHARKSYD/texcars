import React from 'react'
import { ASSETS } from '../assets'
import Form from 'antd/es/form/Form';
import Input from 'antd/es/input/Input';
import Button from 'antd/es/button/button';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function Login() {

    const [loginForm] = Form.useForm();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        if (values.email === "admin@texcars.com") { 
            dispatch({ type: "site/login", payload: { email: values.email } });
            toast.success("Login successful!", { id: "123", duration: 3000 });
            setTimeout(() => {
                window.location.replace("/dashboard/overview");
            }, 1500);
        }
        else {
            toast.error("Login failed due to the supply of invalid credentials!", { id: "123", duration: 3000 });
        }
        console.log('Form values:', values);
    }

    return (
        <main className='min-h-screen relative py-20 bg-white'>
            <div className='container mx-auto flex flex-col md:flex-row gap-6'>
                <aside className='relative flex-1 hidden md:block'>
                    <img src={ASSETS['shadowed_red_car']} alt="shadowed red car" className='absolute top-0 left-0 w-full h-full object-cover' />
                </aside>
                <aside className='flex-1 h-full grid place-items-center p-4 md:p-10'>
                    <Form
                        form={loginForm}
                        onFinish={handleSubmit}
                        layout='vertical'
                        className='w-full md:max-w-md shadow rounded-md p-4 bg-white'
                    >
                        <h3 className='text-primary text-lg md:text-2xl font-semibold font-serif mt-4 leading-1'>
                            Login to your <span className='text-secondary font-bold'>Account</span>
                        </h3>
                        <p className="text-sm md:text-base text-text md-4 mt-4">Enter Your Credentials Below</p>
                        <Form.Item
                            label="Enter Email Address"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            label="Enter Password"
                            name="password"
                            rules={[
                                { required: true, message: 'Please enter your password!' },
                                { min: 6, message: 'Password must be at least 6 characters long' }
                            ]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <button type="submit"  className='py-2 px-6 md:px-10 rounded-md cursor-pointer bg-primary text-backdrop w-full'>
                                Login
                            </button>
                        </Form.Item>
                    </Form>
                </aside>
            </div>
        </main>
    )
}
