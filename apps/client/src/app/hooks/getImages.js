import { useEffect, useState } from 'react';
import { getImages } from '../api';

export default function useImages() {
    const [images, setImages] = useState([])

    useEffect(() => {
        getImages()
            .then(images => setImages(images))
    }, [])

    return images;
}