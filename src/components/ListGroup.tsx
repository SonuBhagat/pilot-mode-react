function ListGroup() {
  const items = ["Delhi", "UP", "Haryana"];
  const story = ["Pollution", "Ghar Mai Gus ke Marenge", "Chhori Kya Hove h"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
