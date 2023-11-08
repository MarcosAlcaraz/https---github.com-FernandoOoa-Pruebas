import { ItemBusqueda } from "./itemBusqueda"

export const ItemListBusqueda = ({ Codigos, Busqueda, Tag } = props) => {

  return (
    //incio de tarjetas
    <div>
      {Codigos.map((Cod) => <ItemBusqueda algoritmo={Cod} key={Cod.ID} Busqueda={Busqueda} Tag={Tag} />)}
    </div>
  )
}
