import "../styles/Item.css";

const Item = (props) => {
  return <div className="item" style={{ backgroundColor: props.name }}></div>;
};

export default Item;
