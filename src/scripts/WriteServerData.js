import db from "./firebase";
import "firebase/firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const WriteServerData = () => {
  const readData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Objects"));
      querySnapshot.forEach((doc) => {
        alert(`${doc.id}, =>, ${doc.data().name}`);
      });
    } catch (error) {
      console.error("Error getting documents: ", error.message);
    }
  };

  return (
    <div>
      <button onClick={readData}>Save Data</button>
    </div>
  );
};

export default WriteServerData;
