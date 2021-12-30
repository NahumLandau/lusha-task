export const getImages = () => {
    return fetch('/api/images')
    .then(response => response.json())
    .then(data => data)
    .catch(e => {
        console.log(e.message);
        return [];
    })
}

export const likeImage = (imageId) => {
    return fetch(`/api/images/${imageId}`, {
        method: 'PATCH',
      })
    .then(response => response.json())
    .then(image => image)
    .catch(e =>{
        console.log(e.message);
        return {}
    })
}