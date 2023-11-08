import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styled from "styled-components";
import '../Styles/itemlist.css';
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemlistBusquedaContainer } from "../components/ItemlistBusquedaContainer";
import { UserAuth } from "../context/AuthContext";
import { Button } from "bootstrap";

export function Home() {
  const { user, logOut } = UserAuth();

  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');

  const handleTagChange= (language) => {
    setTag(language);
  };

  // const handleNameChange= (event) => {
  //   if (event == '') {
  //     event = ' ';
  //   }
  //   setTag(ev.target.busqueda.value);
  //   //console.log(tag);
  // };

  
  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="\">Algoritmos SPQR Solutions</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="\Perfil">Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\CrearAlgo">Crear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Analiticas</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" type="button" onClick={cerrarSesión}>Cerrar sesión</button>
              </li>
            </ul>
            
            <form className="d-flex" role="search" onSubmit={ev => { ev.preventDefault(); setSearch(ev.target.busqueda.value) }}>
              <input name="busqueda" className="form-control me-2" type="search" placeholder="Buscar por Título" aria-label="Busqueda" /> 
              <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</Button>
            </form>

            <div>
            <button style={{margin: 5}} type="button" className="btn btn-light" onClick={() => handleTagChange("Java Script")}>
                Java Script 
              </button>
              <button style={{margin: 5}} type="button" className="btn btn-light" onClick={() => handleTagChange("Python")}>
                Python 
              </button>
            </div>

          </div>
        </div>
      </nav>
      <div className="catalogo">
        {search ? <ItemlistBusquedaContainer Busqueda={search} Tag={tag} /> : <ItemListContainer menu="Home" />}
      </div>
    </Container>);
}
const Container = styled.div`
  background: radial-gradient(#fedd58, #ff4139);
  width: 100%;
`