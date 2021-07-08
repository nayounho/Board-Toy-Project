const List = ({ className, children, id }) => {
  return (
    <li className={className} id={id}>
      {children}
    </li>
  );
};

export default List;
