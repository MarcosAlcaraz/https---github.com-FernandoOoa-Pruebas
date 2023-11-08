import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../api/firebase.config";
import { ItemListBusqueda } from "./ItemListBusqueda";

export const ItemlistBusquedaContainer = ({ Busqueda = '', Tag = '' }= props) => {

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
      <ItemListBusqueda Codigos={ListCodes} Busqueda = {Busqueda} Tag = {Tag} />
    </div>
  )
}

