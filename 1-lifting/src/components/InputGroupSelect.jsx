import PropTypes from 'prop-types';

function InputGroupSelect({ onChangeSelect, region }) {
  const handleRegion = (event) => {
    const val = event.target.value;
    onChangeSelect();
  };
  return (
    <div className='input-group-select'>
      <label className='label-text' htmlFor='region'>
        Indica tu región:
      </label>
      <select
        className='input-select'
        name='region'
        id='region'
        value={region}
        onChange={onChangeSelect}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
}
InputGroupSelect.propTypes = {
  onChangeSelect: PropTypes.func.isRequired,
  regionPerson: PropTypes.string,
};
export default InputGroupSelect;
