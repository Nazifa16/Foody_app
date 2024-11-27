
import { useEffect, useState } from 'react';
import { fileStorage } from '../../server/configs/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
interface AdminAddFormT {
    name: string;
    description?: string;
    img_url?: string;
    category_id?: string;
    rest_id?: string;
    price?: number;
}

export function useUploadImage(initUrl: string = '') {
    const [imageUrl, setImageUrl] = useState<string>(initUrl);
    const [loading, setLoading] = useState(false);
    const toast = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<AdminAddFormT>({})

    useEffect(() => {
        setImageUrl(initUrl);
    }, [initUrl]);

    const uploadImage = async (file: File) => {
        if (!file) return;
        const imageRef = ref(fileStorage, `files/images/${Date.now()}_${file.name}`);
        try {
            setLoading(true);
            const snapshot = await uploadBytes(imageRef, file);
            const url = await getDownloadURL(snapshot.ref);
            setImageUrl(url);
            return url;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const uploadedUrl = await uploadImage(file);
                setValue('img_url', uploadedUrl);
            } catch {
                toast({ description: 'Failed to upload image.', status: 'error', duration: 3000, isClosable: true });
            }
        }
    };

    return { imageUrl, uploadImage, loading, handleFileChange };
}
