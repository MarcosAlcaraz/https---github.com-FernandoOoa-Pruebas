import { useEffect, useState } from "react"
import { ItemList } from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase.config";

export const ItemListContainer = ({ menu }= props) => {

  const [ListCodes, setListCodes] = useState([]);

  useEffect(() => {

    const AlgoritmosRef = collection(db, "Algoritmos");

    getDocs(AlgoritmosRef)
      .then((resp) => {
        setListCodes(
          resp.docs.map((doc) => {
            return { ...doc.data(), ID: doc.id }
          })
        )
      })
  }, [])

  return (
    <div >
      <ItemList Codigos={ListCodes} menu = {menu} />
    </div>
  )
}

