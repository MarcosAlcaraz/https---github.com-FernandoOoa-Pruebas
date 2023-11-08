import { useEffect, useState } from "react";
import { CreatingTextBoxes, Decorator1, GetStringConvertValues } from "../Functions/ItemFunctionsJavaScript";
import { GetNameFunction } from "../Functions/MapCodesJavaScripts";
import "../Styles/EjecutarCodigo.css";
export const EjecutarCodigo = ({ Item } = props) => {

  // Hook para inputs, donde se almacenan lasa cajas de de texto que se vayan a utilizar 
  const [Inputs, setInputs] = useState([]);

  //Hook Values, Guarda los valores almacenados en las cajas de textos creadas
  const [Values, setValues] = useState({
    ListValues: [],
    StrValues: ''
  });

  //Hook que guarda el resutlado de la compilación de la función creada por el usuario
  const [SaveResult, setSaveResult] = useState('');

  const [FlagError, setFlagError] = useState(false);
  const [OutPut, setOutPut] = useState('');

  //Crea la cajas de texto que el usuario vaya a necesitar
  useEffect(() => {
    //console.log("Entra");
    let TextBoxes = CreatingTextBoxes(Item.Codigo, setValues, Values.ListValues);
    setInputs(TextBoxes);
  }, [])

  // Función que manda a llamar a la función almacenada consultada por el usuario
  const ExecuteCode = () => {
    let Name = GetNameFunction(Item.Codigo);
    let StringValues = GetStringConvertValues(Values.ListValues);
    let code = `${Item.Codigo} ${Name} ${StringValues}`;
    console.log(code);
    setFlagError(false);
    try {
      // Crear la nueva funcion a partir de la cadena de codigo
      eval(new String(code));
      //eval("2+2");
      let Result = eval(code); 
      console.log(eval(code));
      setInputs(Result);
    } catch (error) {
      setFlagError(true);
      console.error('Error al ejecutar el código', error);
    }
  };

  //Mostrar Resultados se la compilación del codigo
  const ShowResult = (Decorator, Results) => {
    if (!FlagError) {
      setOutPut(Decorator(Results));
    }
  }

  return (
    <div className="columna-central">
    <div className="contenedor-sombreado">
    <div>
      <h1>{Item.Titulo}</h1>
      <div className="descripcion"><text>{ Item.Descripcion}</text></div>
      <div
      // Crea las cajas de texto de cada función
      >{Inputs}</div>
      <div></div>
      <div // results div
        style={{
          marginLeft: 40,
        }}
      >
        <button onMouseDown={ ExecuteCode }
          onMouseUp={() => {
            ShowResult(Decorator1, SaveResult);
          }}
        >Run</button>
      </div>
    </div>
    </div>
    </div>
  )
}
