import ImageCard from './ImageCard';

function Gallery({ imagesData, handleClickImage }) {
  //EL MAP ENTRE LLAVES PORQUE ES CÓDIGO JAVASCRIPT

  return (
    <div>
      {imagesData.map((image, index) => {
        return (
          <ImageCard
            imageData={image}
            key={index}
            handleClickImage={handleClickImage}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
