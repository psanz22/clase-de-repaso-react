import '../scss/components/ImageCard.scss';

function ImageCard({ imageData, handleClickImage }) {
  const handleClick = (event) => {
    const idImage = event.currentTarget.id;
    handleClickImage(idImage);
  };
  return (
    <div className='imageCard' onClick={handleClick} id={imageData.id}>
      <img
        className='imageCard__img'
        src={imageData.url}
        alt={imageData.title}
      />
      <h5>{imageData.title}</h5>
    </div>
  );
}

export default ImageCard;
