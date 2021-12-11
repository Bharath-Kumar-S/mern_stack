import ItemAmount from "./ItemAmount";
import ItemDate from "./ItemDate";
import ItemTitle from "./ItemTitle";
import './styles/item.css'

const Item = ({ task }) => {
  return (
    <div className="item">
      <ItemDate date={task.date} />
      <ItemTitle title={task.title} />
      <ItemAmount amount={task.amount} />
    </div>
  );
};

export default Item;
