import PropTypes from 'prop-types';

function InputGroupRadio({
  paymentType,
  onChangeRadio,
  idInput,
  valueInput,
  label,
}) {
  const handleChangeRadio = (event) => {
    const valueRadio = event.target.value;
    onChangeRadio(valueRadio);
  };
  return (
    <>
      <div className='input-group-radio'>
        <label className='label-radio' htmlFor={idInput}>
          {label}
        </label>

        <input
          type='radio'
          name='paymentType'
          id={idInput}
          value={valueInput}
          checked={paymentType === idInput}
          onChange={handleChangeRadio}
        />
      </div>
    </>
  );
}

InputGroupRadio.propTypes = {
  paymentType: PropTypes.string.isRequired,
  onChangeRadio: PropTypes.func.isRequired,
  idInput: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputGroupRadio;
