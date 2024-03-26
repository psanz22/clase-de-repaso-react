function FilterInput({ handleChangeSearch }) {
  const handleInput = (event) => {
    const valueInput = event.target.value;
    handleChangeSearch(valueInput);
  };
  return (
    <input type='text' placeholder='Busca mi niña...' onChange={handleInput} />
  );
}

export default FilterInput;
