import PropTypes from 'prop-types';

function InputGroupText({
  namePerson,
  onChangeInput,
  labelText,
  inputName,
  inputId,
  inputPlaceholder,
  typeInput,
}) {
  const handleChange = (event) => {
    const valueUser = event.target.value;
    onChangeInput(valueUser);
  };
  return (
    <div className='input-group-text'>
      <label className='label-text' htmlFor={inputId}>
        {labelText}
      </label>
      <input
        className='input-text'
        type={typeInput}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={namePerson}
        onChange={handleChange}
      />
    </div>
  );
}

InputGroupText.propTypes = {
  namePerson: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
};

export default InputGroupText;
{
  /* 
RECOPILACIÓN DE LO QUE HEMOS HECHO:
-escucho el evento onChange en el input de InputGroupText

-le paso la información a la madre: el usuario ha escrito en el input y ha sido este valor

-hija recibe por props una función (handleName)

-la hija le pasa el event.target.value que es lo que ha escrito al usuario a la madre mediante el parámetro de la función (handleName) que es la que le hemos pasado por props

-ejecutamos la función en la hija, pero la función está definida en la madre

-Si fuera un evento de click no hará falta poner parámetros en la handleName de la madre
*/
}
