import { getImageId } from '../utils';
import Likes from './Likes';

const ImageItem = ({ url, isLiked, likes, description, onLike }) => {
    
    return (
        <div
            className="image-item"
            style={{ backgroundImage: `url(${url})` }}
        >
            <div className='hover'>
                <p>{description}</p>
                <Likes onLike={onLike} imageId={getImageId(url)} isLiked={isLiked} likes={likes}/>
            </div>
        </div>
    )
}
export default ImageItem;