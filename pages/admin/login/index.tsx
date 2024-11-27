
import Image from 'next/image'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import { postAdmin } from '../../../shared/services/admin'

type FormData = {
    email: string
    password: string
}

const AdminLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const toast = useToast()
    const { push } = useRouter()
    const [disable, setDisable] = useState(false)

    const onSubmit = async (data: FormData) => {
        try {
            setDisable(true)
            const res = await postAdmin(data)

            // Check if the response is successful
            if (res && res.status === 200) {
                toast({
                    description: "You've successfully logged in.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right',
                })
                push('/admin')
            } else {
                throw new Error('Invalid login credentials')
            }
        } catch (error) {
            toast({
                description: 'Login failed. Invalid username or password.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            })
        } finally {
            setDisable(false)
        }
        console.log(data);

    }

    return (
        <div className='min-h-screen bg-admin-bg'>

            <nav className='pt-14 mb-20 pl-8 md:mb-44'>
                <Image width={102} height={22} src="/adminFoody.svg" alt='foodyLogo' />
            </nav>

            <div className='flex justify-center'>
                <div className='flex flex-col-reverse md:flex-row'>
                    {/* login side */}
                    <div className='w-full sm:w-full md:bg-admin-main py-14 px-6 sm:px-7 md:px-12 max-w-md'>
                        <h1 className='text-4xl font-bold text-center mb-10 text-admin-text'>Welcome Admin</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
                            <input
                                type='text'
                                className='bg-admin-input text-admin-text rounded py-4 pl-10 text-lg font-medium'
                                placeholder='Username'
                                {...register("email", {
                                    required: 'Username is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            <input
                                className='mb-3 bg-admin-input text-admin-text rounded py-4 pl-10 text-lg font-medium'
                                type='password'
                                placeholder='Password'
                                {...register("password", { required: 'Password is required' })}
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                            <button
                                className='w-full bg-admin-btn text-white text-2xl font-medium rounded py-3 cursor-pointer hover:bg-admin-btnhover'
                                type="submit"
                                disabled={disable}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                    {/* picture side */}
                    <div className='flex justify-center md:bg-white px-7 w-full'>
                        <Image src="/adminLoginBg.svg" alt="login" width={346} height={304} className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
