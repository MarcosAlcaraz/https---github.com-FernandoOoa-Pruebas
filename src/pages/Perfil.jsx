import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Tarjetaperfil } from "../components/Tarjetaperfil";
import { UserAuth } from "../context/AuthContext";
export function Perfil() {
  const { user, logOut } = UserAuth();
  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }
  return (<Container>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="\">Algoritmos SPQR Solutions</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="\">Regresar</a>
      </li>
      <li className="nav-item">
        <button className="btn btn-primary" type="button" onClick={cerrarSesión}>Cerrar sesión</button>
      </li>
      </ul>
          </div>
        </div>
      </nav>
    <br />
    <div className="superDiv"><Tarjetaperfil /></div>

  </Container>);
}
const Container = styled.div`
  background: radial-gradient(#fedd58, #ff4139);
  width: 100%;
`