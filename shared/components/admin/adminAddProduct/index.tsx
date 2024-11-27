import Image from 'next/image'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { IoMdCloudUpload } from "react-icons/io";
import { AdminButton } from '../adminButton'
import AdminDropdown from '../adminDropdown';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { postProduct } from '../../../services/product';
import { getRestuarants } from '../../../services/restaurants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUploadImage } from '../../../hooks/useUploadImage';
interface AdminAddProductFormT {
    name: string;
    description: string;
    img_url?: string;
    rest_id: string;
    price: number;
}

interface AdminAddProducttModalT {
    // show?: boolean
    // onClose?: () => void
    text?: string
    // handleClick?: () => void
    show?: boolean;
    onClose?: () => void;
}


function AdminAddProducttModal({ show = true, onClose, text }: AdminAddProducttModalT) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<AdminAddProductFormT>({})

    const toast = useToast()

    const { imageUrl, uploadImage, handleFileChange, loading } = useUploadImage();

    const [disable, setDisable] = useState(false)
    const [restaurantId, setRestaurantId] = useState<string | null>('')
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (data: any) => postProduct(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            toast({
                description: "Product added successfully!",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            });
            reset();
        },
        onError: () => {
            toast({
                description: 'Failed to add product.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            });
        },
        onSettled: () => setDisable(false),
    });

    // // image
    // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) {
    //         try {
    //             const uploadedUrl = await uploadImage(file);
    //             setValue('img_url', uploadedUrl);
    //         } catch {
    //             toast({ description: 'Failed to upload image.', status: 'error', duration: 3000, isClosable: true });
    //         }
    //     }
    // };

    // React hook form func
    const onSubmit = async (data: AdminAddProductFormT) => {
        console.log(restaurantId, "res");
        if (!restaurantId) {
            toast({
                description: 'Please select a restaurant.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            });
            return;
        }
        setDisable(true);
        mutation.mutate({
            ...data, rest_id: restaurantId,
            img_url: imageUrl,
        });
    };

    return (
        <div>
            <div className={`fixed  z-10  w-full sm:w-3/4    sm:pl-12 ${show ? "  -right-full" : "right-0"
                }  transition-all duration-700 top-0 h-screen`}>
                <button onClick={onClose} className='rounded-full bg-admin-close-modal absolute right-5 sm:left-0 top-7 w-7 h-7 cursor-pointer'>
                    <IoClose className=" fill-white h-4 w-6 pl-1" />
                </button>

                <div className='bg-admin-main flex-col pl-7 pt-3 pb-5 pr-7 lg:pr-14 max-h-screen overflow-y-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <p className='text-2xl text-admin-text font-medium mb-8 '>Add Product</p>
                        </div>
                        <div className='flex flex-col w-full lg:flex-row mb-16'>
                            <div className='w-full h-36 lg:w-1/3'>
                                <p className='font-medium text-lg text-admin-text mb-3'>Upload your product image</p>
                                <div>
                                    {imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt="Uploaded Product"
                                            width={118}
                                            height={122}
                                            className="w-[100px] h-[84px] lg:w-[118px] lg:h-[118px] object-cover"
                                        />
                                    ) : (
                                        <Image
                                            src="/adminUpload.svg"
                                            alt="Upload Placeholder"
                                            width={118}
                                            height={122}
                                            className="w-[100px] h-[84px] lg:w-[118px] lg:h-[118px] object-cover"
                                        />)}
                                </div>
                            </div>
                            <div className='w-full lg:w-2/3 h-38'>
                                <div className='cursor-pointer bg-admin-modal-framebg  h-full flex rounded-2xl items-center justify-center'>
                                    <div className='relative'>
                                        <input  {...register("img_url")} className='cursor-pointer absolute opacity-0 w-full h-full  font-display' type='file' onChange={handleFileChange} />
                                        <IoMdCloudUpload className=' h-10 w-14  fill-admin-modal-upload cursor-pointer' />
                                        <p className=" text-admin-text font-medium text-lg font-display">Upload</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row w-full mb-10'>
                            <div className='w-full lg:w-1/3'>
                                <p className='font-medium text-admin-text tracking-wide capitalize text-lg font-display'>Add your Product description and necessary information</p>
                            </div>

                            <div className='bg-admin-modal-framebg w-full lg:w-2/3 pt-5 pl-5 pr-7 rounded-2xl max-h-[390px] overflow-y-scroll scrollbar'>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <p className="font-medium text-admin-text text-base font-display">name</p>
                                        <input  {...register("name", { required: "Product name is required" })} placeholder='Burger King' className="rounded-2xl font-medium text-base bg-admin-input text-admin-modal-placeholder pl-5 py-3 capitalize font-display" type='text' />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                    </div>
                                    <div className='mt-6'>
                                        <p className="text-admin-text font-medium mb-2 text-base font-display">Description</p>
                                        <textarea placeholder="Drink, Fast food ..." {...register("description", { required: "Description is required" })} className="w-full rounded-2xl h-24 font-medium text-base text-admin-modal-placeholder pt-2 pl-4 bg-admin-input capitalize font-display" />
                                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

                                    </div>
                                    <div className='flex flex-col gap-2 mt-8'>
                                        <p className="font-medium text-admin-text text-base font-display">price</p>
                                        <input  {...register("price", { required: "Price is required", valueAsNumber: true })} placeholder='12' className="rounded-2xl font-medium text-base bg-admin-input text-admin-modal-placeholder pl-5 py-3 capitalize font-display" type='number' />
                                        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

                                    </div>

                                    <AdminDropdown
                                        p="Restaurants"
                                        classNameDiv="mt-4 mb-2 placeholder"
                                        classNameSelect="bg-admin-input w-full text-admin-text rounded-2xl pl-3 font-medium text-base py-4 font-display"
                                        queryKey='restaurants'
                                        getData={getRestuarants}
                                        setId={setRestaurantId}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-around  border-t-2   border-t-admin-cancel-btn pt-6  border-admin-main gap-10'>
                            <AdminButton
                                onClick={onClose}
                                className="  text-white bg-admin-cancel-btn py-3 w-1/2 rounded-2xl font-display hover:bg-admin-input"
                                text='Cancel'
                            />
                            <AdminButton className='text-white bg-admin-purpl-modal-btn py-3 w-1/2 rounded-2xl font-display hover:bg-admin-modal-upload' text='Create  Product' type="submit" disabled={disable} />
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )


}
export default AdminAddProducttModal;
