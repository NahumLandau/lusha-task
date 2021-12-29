import { useEffect, useState } from 'react';
import ImageItem from './components/ImageItem';
import { getImageId } from './utils';

export const App = () => {

  const [images, setImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const imagesChunkSize = 15;

  useEffect(() => {
    fetch('/api/images')
      .then(response => response.json())
      .then(data => {
        setImages(data)
        setDisplayImages(data.slice(0, imagesChunkSize))
      })
  }, [])

  const handleLikeClicked = (imageId) => {
    fetch(`/api/images/${imageId}`, {
      method: 'PATCH',
    })
      .then(response => response.json())
      .then(() => {
        const newImages = displayImages.map(image => {
          if (getImageId(image.url) === imageId) {
            return {
              ...image,
              likes: image.likes + 1,
              isLiked: true
            }
          }
          return image;
        })

        setDisplayImages(newImages)
      })
  }


  const loadMoreImages = () => {
    const currImagesCount = displayImages.length;
    setDisplayImages(images.slice(0, currImagesCount + imagesChunkSize))
  }

  return (
    <div className='app'>
      <ul className='images-container'>
        {displayImages.map(image => (
          <li key={getImageId(image.url)}>
          <ImageItem {...image} onLike={handleLikeClicked} />
        </li>
        ))}
      </ul>

      {images.length !== displayImages.length &&
        <button className="load-more" onClick={loadMoreImages}>Load more...</button>
      }
    </div>
  );
}

export default App;
