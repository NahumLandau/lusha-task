import { useEffect, useState } from 'react';
import ImageItem from './components/ImageItem';
import { likeImage } from './api';
import { getImageId } from './utils';
import Likes from './components/Likes';
import useGetImages from './hooks/getImages';

export const App = () => {
  const images = useGetImages();
  const [displayImages, setDisplayImages] = useState([]);
  const imagesChunkSize = 15;

  useEffect(() => {
    setDisplayImages(images.slice(0, imagesChunkSize))
  }, [images])

  const handleLikeClicked = (imageId) => {
    likeImage(imageId)
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
            <ImageItem {...image}>
              <Likes onLike={handleLikeClicked} imageId={getImageId(image.url)} isLiked={image.isLiked} likes={image.likes} />
            </ImageItem>
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
