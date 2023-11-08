import { Item } from "./item"

export const ItemList = ( { Codigos, menu } = props) => {
  return (
    //incio de tarjetas
    <div>
       { Codigos.map((Cod) => <Item algoritmo={Cod}  key={ Cod.ID } menu = {menu} />) } 
    </div>
  )  
}
