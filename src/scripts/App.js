import "../styles/App.css";
import Item from "./Item";
import db from "./firebase";
import "firebase/firestore";
import { collection, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import OptionsList from "./OptionsList";

function App() {
  const [currentItem, setCurrentItem] = useState(false);
  const [itemName, setItemName] = useState(false);

  const items = [
    { name: "#FF0000" },
    { name: "#0000FF" },
    { name: "#000000" },
    { name: "#00FF00" },
    { name: "#FFFF00" },
    { name: "#9F2B68" },
    { name: "#FFA500" },
    { name: "#555555" },
    { name: "#964B00" },
  ];
  const [leftItems, setLeftItems] = useState(items);
  const handleClick = (item) => {
    setCurrentItem(item);
  };

  const itemsList = leftItems.map((item, index) => (
    <li key={index} onClick={() => handleClick(item.name)}>
      <Item name={item.name} />
      {currentItem === item.name && currentItem !== "#FFFFFF" && (
        <OptionsList
          itemName={itemName}
          leftItems={leftItems}
          setLeftItems={setLeftItems}
          currentItem={currentItem}
        />
      )}
    </li>
  ));

  useEffect(() => {
    const readData = async () => {
      try {
        const querySnapshot = await getDoc(doc(db, "Objects", currentItem));
        setItemName(querySnapshot.data().name);
      } catch (error) {
        console.error("Error getting documents: ", error.message);
      }
    };

    readData();
  }, [currentItem]);

  return (
    <div>
      <ul className="all-items">{itemsList}</ul>
    </div>
  );
}

export default App;
