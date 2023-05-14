
const error = () => {
  let title = "Engin";
  const handleClick = () => {
    title = 'Namık'
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>Başlığı değiştir</button>
    </>
  );
};
export default error;
