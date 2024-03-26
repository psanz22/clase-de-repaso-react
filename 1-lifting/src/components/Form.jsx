import React from 'react';

function Form() {
  return (
    <div>
      <form className='form' onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className='form'>
          {/* name */}
          <InputGroupText
            labelText='Escribe el nombre:'
            inputName='name'
            inputId='name'
            namePerson={name}
            onChangeInput={handleName}
            inputPlaceholder='María García'
            typeInput='text'
          />
          <InputGroupText
            labelText='Escribe un email:'
            inputName='email'
            inputId='email'
            namePerson={email}
            onChangeInput={handleEmail}
            inputPlaceholder='maria-garcía@gmail.com'
            typeInput='email'
          />

          <InputGroupSelect onChangeSelect={handleRegion} region={region} />

          <label className='label-text'>Indica tu método de pago:</label>

          <InputGroupRadio
            paymentType={paymentType}
            idInput='creditCard'
            checked={paymentType === 'creditCard'}
            onChangeRadio={handlePaymentType}
            valueInput='creditCard'
            label='Tarjeta de Crédito'
          />
          <InputGroupRadio
            paymentType={paymentType}
            idInput='cash'
            checked={paymentType === 'cash'}
            onChangeRadio={handlePaymentType}
            valueInput='cash'
            label='Efectivo'
          />
          <InputGroupRadio
            paymentType={paymentType}
            idInput='cashOnDelivery'
            checked={paymentType === 'cash'}
            onChangeRadio={handlePaymentType}
            valueInput='cashOnDelivery'
            label='Contra reembolso'
          />

          {/* legal terms */}
          <div className='input-group-checkbox'>
            <label className='label-check' htmlFor='legalTerms'>
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type='checkbox'
              name='legalTerms'
              id='legalTerms'
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>

        <Preview
          namePerson={name}
          emailPerson={email}
          regionPerson={region}
          legalTerms={legalTerms}
          paymentType={paymentType}
        />

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input
          className='button'
          type='submit'
          value='Enviar'
          disabled={isValidForm() === false}
        />

        {/* send */}
        <button className='button reset' onClick={handleResetButton}>
          Limpiar el formulario
        </button>
      </form>
    </div>
  );
}

export default Form;
