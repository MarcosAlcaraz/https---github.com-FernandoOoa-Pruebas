import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../Styles/VisualizarCodigo.css'; // Importa tu hoja de estilos CSS

export const VisualizarCodigo = ({ Item } = props) => {
  let code_Language = "Lenguaje Indefinido";
  const codigoConSaltosDeLinea = Item.Codigo.replace(/\\n/g, '\n');

  if(Item.Lenguaje == 0) {
    code_Language = "Java Script";
  } else if (Item.Lenguaje == 1) {
    code_Language = "Python";
  }

  return (
    <div className="columna-central">
      <div className="contenedor-sombreado">
        <h1>{Item.Titulo}</h1>
        <h2>Descripcion</h2>
        <p>{Item.Descripcion}</p>
        <h2>Lenguaje</h2>
        <p>{Item.Lenguaje}</p>
        <h2>Codigo</h2>
        <div className="codigo-responsivo">
          <SyntaxHighlighter language="javascript" style={androidstudio}>
            {codigoConSaltosDeLinea}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
