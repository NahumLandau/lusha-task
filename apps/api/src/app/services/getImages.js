import axios from 'axios';

const fetchImages = async () => {
    const images = await axios.get('https://api.jonathanczyzyk.com/api/v1/images/small', {
        headers: {
            'x-api-key': 'api-key-e29fee17-ea11-4910-be4c-cf8f0ceb245f'
        }
    })
    return images.data;
}


class Images {
    constructor(){
        if(Images.instance){
            return Images.instance
        }
        Images.instance = this;
        this.images = []
    }
    async get() {
        if(!this.images.length){
           this.images = await fetchImages()
            return this.images;
        }else{
            return this.images;
        }
    }

    likeImage(req, res){
        const {id} = req.params;
        
        const likedImage = this.images.find(image => {
            const imageId = new URL(image.url).pathname.substring(1);
            return imageId === id;
        })
        if(likedImage){
            likedImage.likes ++;
            likedImage.isLiked = true;
            res.status(201).send(likedImage)
        }else{
            res.status(404).send('not found')
        }
        
        
    }
}

const instance = new Images();
export default instance;