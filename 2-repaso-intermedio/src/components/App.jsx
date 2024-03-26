import { useState } from 'react';
import FilterInput from './FilterInput';
import Gallery from './Gallery';
import CardDetail from './CardDetail';
import '../scss/App.scss';

// Crear el repositorio
// Estrctura del proyeto (react)
//Primer commit
// Bocetar el esqueleto de componentes necesarios
//Pintar las cards de flores --> gallery pinta cada imagecard
// Filtrar
// Cuando el usuario escriba en el input (Filter), recojo el valor (variable de estado)
// Según el valor que ha escrito el usuario muestro unas cards u otras

const dataFlowers = [
  {
    url: 'https://i.pinimg.com/564x/00/40/57/004057972908c0494ec9a1191092546a.jpg',
    title: 'Flores rosas',
    id: 1,
  },
  {
    url: 'https://i.pinimg.com/564x/81/02/fa/8102fa887aa0e43f5db67aa2576b42fc.jpg',
    title: 'Flores blancas',
    id: 2,
  },
  {
    url: 'https://i.pinimg.com/564x/d4/68/11/d468118796ccecbd619dce1c6ec54da8.jpg',
    title: 'Flores amarillas',
    id: 3,
  },
];
// LO PONEMOS FUERA DE LA FUNCIÓN PARA QUE ESTROBE MENOS PORQUE SON VARIABLES ESTÁTICAS, SE PODRÍA PONER DENTRO DE LA FUNCIÓN PERO ESTORBARÍA DICE ANA

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [idClicked, setIdClicked] = useState(null);

  const handleChangeSearch = (value) => {
    setSearchValue(value);
  };
  const handleClickImage = (id) => {
    setIdClicked(id);
  };
  const filteredImages = dataFlowers.filter((flower) => {
    return flower.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  const imgClicked = dataFlowers.find((image) => {
    return image.id === parseInt(idClicked);
  });

  return (
    <main>
      <h1>Galería de Imágenes</h1>
      {idClicked && <CardDetail imageInfo={imgClicked} />}

      {idClicked ? (
        <CardDetail imageInfo={imgClicked} />
      ) : (
        <>
          <FilterInput handleChangeSearch={handleChangeSearch} />
          <Gallery
            imagesData={filteredImages}
            handleClickImage={handleClickImage}
          />
        </>
      )}
    </main>
  );
}

export default App;
