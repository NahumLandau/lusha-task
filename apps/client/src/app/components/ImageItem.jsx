const ImageItem = ({ url, description, children }) => (
    <div
        className="image-item"
        style={{ backgroundImage: `url(${url})` }}
    >
        <div className='hover'>
            <p>{description}</p>
            {children}
        </div>
    </div>
)

export default ImageItem;