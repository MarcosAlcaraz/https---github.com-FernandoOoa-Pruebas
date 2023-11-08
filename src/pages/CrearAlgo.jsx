import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from 'react';
import { db } from '../api/firebase.config';
import { UserAuth } from "../context/AuthContext";
import '../Styles/CrearAlgo.css'

export function CrearAlgo() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [tag, setTag] = useState('');
  const [language, setLanguage] = useState('');
  const [selected_language, set_selected_language] = useState('Seleccionar Lenguaje');

  const algoRef = collection(db, "Algoritmos");
  const subirAlgo = async () => {
    try {
      await setDoc(doc(algoRef), {
        Titulo: title,
        Lenguaje: language,
        Idpropietario: user.displayName,
        Descripcion: description,
        Codigo: code,
      });
      window.alert("Codigo subido")
      Location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  const { user, logOut } = UserAuth();

  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    console.log(code);
  };

  const handleJsLanguage = () => {
    setLanguage("Java Scrip");
    set_selected_language("Java Script");
    console.log(language);
  };

  const handlePyLanguage = () => {
    setLanguage("Python");
    set_selected_language("Python");
    console.log(language);
  };

  return (
    <div className="Container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Algoritmos SPQR Solutions</a>
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
      <div className="contenedor">
        <div className="cuerpo">
          <div className="input-group mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{selected_language}</button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={handleJsLanguage}>Java Scrip</button></li>
              <li><button className="dropdown-item" onClick={handlePyLanguage}>Python</button></li>
            </ul>
            <button className="btn btn-primary" type="button" onClick={subirAlgo} href="/">Guardar y Salir</button>
          </div>
          <h3>Título</h3>
          <textarea
            value={title}
            onChange={handleTitleChange}
            placeholder="Escribe el titulo del Algoritmo Aquí..."
          ></textarea>
          <h3>Descripción</h3>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Escribe la descripción del algoritmo aquí..."
          ></textarea>
          <h3>Código</h3>
          <textarea className='codigo'
            value={code}
            onChange={handleCodeChange}
            placeholder={`function Name(prop1, prop2, ...) \n {\n  return (prop1 + prop2) \n }`}
          ></textarea>
        </div>
      </div>
    </div>
  );
}