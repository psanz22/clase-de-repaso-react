import PropTypes from 'prop-types';

function Preview({
  namePerson,
  emailPerson,
  regionPerson,
  legalTerms,
  paymentType,
}) {
  const renderPaymentTypeText = () => {
    if (paymentType === 'creditCard') {
      return 'Tarjeta de crédito';
    } else if (paymentType === 'cash') {
      return 'Efectivo';
    } else if (paymentType === 'cashOnDelivery') {
      return 'Contra reembolso';
    }
  };
  // Hemos decidido mover esta función a Preview porque solo afecta a este componente, entonces la movemos aquí. La dejaríamos en App si afectase a la lógica general de la aplicación, pero al afectar solo a la línea 26 de este componente, la movemos aquí.

  // Si pasamos una función por props de madre a hija es una prop normal. Básicamente cuando utilicemos eventos haremos un lifting.

  return (
    <div className='preview'>
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {namePerson}</li>
        <li>Email: {emailPerson}</li>
        <li>Región: {regionPerson}</li>
        <li>Método de pago: {renderPaymentTypeText()}</li>
        <li>
          Has aceptado nuestros términos legales:{' '}
          {legalTerms === true ? 'Sí' : 'No'}
        </li>
      </ul>
    </div>
  );
}

Preview.propTypes = {
  namePerson: PropTypes.string.isRequired,
  emailPerson: PropTypes.string.isRequired,
  regionPerson: PropTypes.string.isRequired,
  legalTerms: PropTypes.bool.isRequired,
  paymentType: PropTypes.string.isRequired,
};

export default Preview;
