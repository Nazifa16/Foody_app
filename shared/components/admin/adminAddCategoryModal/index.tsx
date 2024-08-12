import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import { IoMdCloudUpload } from "react-icons/io";
import { AdminButton } from '../adminButton'
import AdminInput from '../adminInput'


interface AdminAddCategoryModalT {
    show?: boolean
    onClose?: () => void
    text?: string
}

function AdminAddCategoryModal({ show = true, onClose, text }: AdminAddCategoryModalT) {
    return (
        <div>
            <div className={`fixed  z-10  w-full sm:w-3/4    sm:pl-12 ${show ? "  -right-full" : "right-0"
                }  transition-all duration-700 top-0 h-screen `}>
                <button onClick={onClose} className='rounded-full bg-admin-close-modal absolute right-5 sm:left-0 top-7 w-7 h-7 cursor-pointer'>
                    <IoClose className=" fill-white h-4 w-6 pl-1" />
                </button>

                <div className='bg-admin-main flex-col pl-7 pt-3 pb-5 pr-7 lg:pr-14 max-h-screen overflow-y-auto'>
                    <div>
                        <p className='text-2xl text-admin-text font-medium mb-8 '>Add Category  </p>
                    </div>
                    <div className='flex flex-col w-full lg:flex-row mb-16'>
                        <div className='w-full h-36 lg:w-1/3'>
                            <p className='font-medium text-lg text-admin-text mb-3'>Upload your category image</p>
                            <div>
                                <Image
                                    width={118}
                                    height={122}
                                    alt="Upload"
                                    src="/adminUpload.svg"
                                    className="w-[100px] h-[84px] lg:w-[118px] lg:h-[118px] object-fill overflow-hidden"
                                />
                            </div>
                        </div>
                        <div className='w-full lg:w-2/3 h-38'>
                            <div className='cursor-pointer bg-admin-modal-framebg  h-full flex rounded-2xl items-center justify-center'>
                                <div className='relative'>
                                    <input className='cursor-pointer absolute opacity-0 w-full h-full  font-display' type='file' />
                                    <IoMdCloudUpload className=' h-10 w-14  fill-admin-modal-upload cursor-pointer' />
                                    <p className=" text-admin-text font-medium text-lg font-display">Upload</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row w-full mb-10'>
                        <div className='w-full lg:w-1/3'>
                            <p className='font-medium text-admin-text tracking-wide capitalize text-lg font-display'>
                                Add your Category information</p>
                        </div>
                        {/* children */}
                        <div className='bg-admin-modal-framebg w-full lg:w-2/3 pt-5 pl-5 pr-7 rounded-2xl max-h-[390px] overflow-y-scroll scrollbar'>
                            <div>

                                <AdminInput p='name' placeholder='Mc Donald’s' classNameDiv='flex flex-col gap-2 pb-6' />

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around  border-t-2   border-t-admin-cancel-btn pt-6  border-admin-main gap-10'>
                        <AdminButton
                            onClick={onClose}
                            className="  text-white bg-admin-cancel-btn py-3 w-1/2 rounded-2xl font-display hover:bg-admin-input"
                            text='Cancel'
                        />
                        <AdminButton className='text-white bg-admin-purpl-modal-btn py-3 w-1/2 rounded-2xl font-display hover:bg-admin-modal-upload' text='Create  Category' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddCategoryModal