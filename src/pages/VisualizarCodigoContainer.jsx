import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { db } from '../api/firebase.config';
import { VisualizarCodigo } from '../components/VisualizarCodigo';
import { UserAuth } from "../context/AuthContext";

export const VisualizarCodigoContainer = () => {
  const { user, logOut } = UserAuth();
  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }
  const [Item, setItem] = useState(null);
  const id = useParams().ID;
  useEffect(() => {
    const docRef = doc(db, "Algoritmos", id);

    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id });
      })
  }, [id])


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
                <a className="nav-link" href="\">Regresar</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" type="button" onClick={cerrarSesión}>Cerrar sesión</button>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
        {Item && <VisualizarCodigo Item={Item} />}
    </Container>
  )
}

const Container = styled.div`
  background: radial-gradient(#fedd58, #ff4139);
  width: 100%;
`