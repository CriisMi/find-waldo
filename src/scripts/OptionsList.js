import "../styles/OptionsList.css";

const OptionsList = (props) => {
  const allItems = [
    "red",
    "blue",
    "black",
    "green",
    "yellow",
    "purple",
    "brown",
    "orange",
    "gray",
  ];
  const createOptionsList = () => {
    const list = [];
    let position = Math.floor(Math.random() * 3);
    list[position] = props.itemName;
    let first = 0;
    let second = 0;

    do {
      first = Math.floor(Math.random() * 9);
      if (position === 0) {
        list[1] = allItems[first];
      } else {
        list[0] = allItems[first];
      }
    } while (allItems[first] === props.itemName);

    do {
      second = Math.floor(Math.random() * 9);
      if (position === 2) {
        list[1] = allItems[second];
      } else {
        list[2] = allItems[second];
      }
    } while (
      allItems[second] === props.itemName ||
      allItems[first] === allItems[second]
    );
    return list;
  };
  const rewriteList = () => {
    let list = props.leftItems;
    const newList = list.map((item) => {
      if (item.name === props.currentItem) {
        return { name: "#FFFFFF" };
      } else {
        return item;
      }
    });
    props.setLeftItems(newList);
  };

  const list = createOptionsList();

  const handleClick = (item) => {
    if (item === props.itemName) {
      rewriteList();
    } else {
      alert("nay");
    }
  };

  const options = list.map((item) => (
    <li onClick={() => handleClick(item)}>{item}</li>
  ));
  return <ul className="options">{options}</ul>;
};

export default OptionsList;
