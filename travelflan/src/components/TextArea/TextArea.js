const TextArea = ({ name, id, cols, rows, value, placeholder, className, onChange }) => {
  return (
    <div className={className}>
      <textarea className="textArea" name={name} id={id} cols={cols} rows={rows} value={value} onChange={onChange} />
      <label htmlFor={id}>{value ? "" : placeholder}</label>
    </div>
  );
};

export default TextArea;
