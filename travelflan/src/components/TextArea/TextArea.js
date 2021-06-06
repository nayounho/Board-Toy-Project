const TextArea = ({ name, id, cols, rows, value, placeholder, className }) => {
  return (
    <div className={className}>
      <textarea name={name} id={id} cols={cols} rows={rows} value={value} />
      <label htmlFor={id}>{value ? "" : placeholder}</label>
    </div>
  );
};

export default TextArea;
