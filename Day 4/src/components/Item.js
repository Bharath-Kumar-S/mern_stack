const Item = ({ task }) => {
  return (
    <div>
      <div>{task.date}</div>
      <h2>{task.title}</h2>
      <div>{task.amount}</div>
    </div>
  );
};

export default Item;
