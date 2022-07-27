import './imageGrid.css'

const ImageGrid = ({ img1, img2}) => {
  return (
    <div className="image-Grid">
        <div className="image-Grid__images">
            <img src={`/images/${img1}`} alt='grid' />
            <img src={`/images/${img2}`}  alt='grid' />
        </div>
    </div>
  )
}

export default ImageGrid