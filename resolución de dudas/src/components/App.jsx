import { useState } from 'react';
import '../scss/App.scss';

function App() {
  //EJERCICIO DE RENDERIZADO CONDICIONAL, dependiendo de si el usuario ha iniciado sesión o no se mostrará un mensaje u otro

  const expirtyDatePassword = '2024-03-22';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const now = new Date();
  const expiryDate = new Date(expirtyDatePassword);
  const isPasswordExpired = now > expiryDate; // estamos comparando así pq hemos usado newDate
  console.log(isPasswordExpired);

  return (
    <main>
      {isLoggedIn ? (
        <div>
          <h1>¡Bienvenido Usuario!</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h1>Iniciar sesión para continuar</h1>
          <button onClick={handleLogin}>Iniciar Sesión</button>
          {isPasswordExpired && <p>La contraseña ha caducado</p>}{' '}
          {/* Si la condición se cumple (es truthy) entonces me lee lo de la derecha (la contraseña ha caducado), si la condición no se cumple (es falsy) entonces no lee lo de la derecha */}
        </div>
      )}
    </main>
    // Paula, el condicional ternario no tiene que ver con el número de líneas, si no con el número de caminos
  );
}

export default App;
