import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { db } from '../api/firebase.config';
import { UserAuth } from "../context/AuthContext";
import { EjecutarCodigo } from "../components/EjecutarCodigo";


export const EjecutarCodigoContainer = () => {
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="\">Algoritmos SPQR Solutions</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link" href="\">Regresar</a>
              </li>
              <li class="nav-item">
                <button className="btn btn-primary" type="button" onClick={cerrarSesión}>Cerrar sesión</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <div>
        {Item && <EjecutarCodigo Item={Item} />}
      </div>
    </Container>
  )
}

const Container = styled.div`
  background: radial-gradient(#fedd58, #ff4139);
  width: 100%;
`