import '../scss/components/CardDetail.scss';

function CardDetail({ imageInfo }) {
  return (
    <div className='cardDetail'>
      <img src={imageInfo.url} alt={imageInfo.title} />
      <h3>{imageInfo.title}</h3>
    </div>
  );
}

export default CardDetail;
