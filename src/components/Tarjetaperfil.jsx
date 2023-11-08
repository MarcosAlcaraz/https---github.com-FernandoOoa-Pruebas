import { UserAuth } from "../context/AuthContext";
import '../Styles/perfil.css';
import { ItemListContainer } from "../components/ItemListContainer";
import { useState } from "react";

export function Tarjetaperfil() {
  const [search, setSearch] = useState('');
  const { user, logOut } = UserAuth();
  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="columna-central">
      <div className="contenedor-sombreado">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src={user.photoURL} />
            </div>
            <div className="team-content">
              <h3 className="name">{user.displayName}</h3>

            </div>
            <ul className="social">
              <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="catalogo">
        <ItemListContainer menu = { "Perfil" }/>
      </div>
    </div>
    </div>
  );
}
