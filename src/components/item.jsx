import "../Styles/item.css";
import { UserAuth } from "../context/AuthContext";
//key para mandar a muestra
export const Item = ( {algoritmo, menu = "Home"} =   props ) =>{
    const { user } = UserAuth();
    if(menu == "Perfil"){
        console.log(menu)
        if(algoritmo.Idpropietario == user.displayName){
            return(
                <div className= "card border border-secondary shadow-0 mb-3" style={ { maxWidth: 320 , backgroundColor: 'white', MaxHeight: 420 } } >
                    <div className="card-header">
                    <div className="card-title"><p>{ algoritmo.Titulo }</p></div>
                    </div>
                    <div className="card-body text-dark">
                        <div className="card-text"><p>Descripcion: {algoritmo.Descripcion}</p></div>
                        <div className="card-text"><p>Lenguaje: {algoritmo.Lenguaje}</p></div>
                        <div className="card-text"><p>Autor: {algoritmo.Idpropietario}</p></div>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <a href={`/EjecutarCod/${ algoritmo.ID }`} className="btn btn-primary">Ejecución Código</a>
                        <pre></pre>
                        <a href={`/VisualizarCod/${ algoritmo.ID }`} className="btn btn-primary">Visualizar Código</a>
                    </div>
                </div>
            );
        }
    }
    else{
        return(
            <div className= "card border border-secondary shadow-0 mb-3" style={ { maxWidth: 320 , backgroundColor: 'white', MaxHeight: 420 } } >
                <div className="card-header">
                <div className="card-title"><p>{ algoritmo.Titulo }</p></div>
                </div>
                <div className="card-body text-dark">
                    <div className="card-text"><p>Descripcion: {algoritmo.Descripcion}</p></div>
                    <div className="card-text"><p>Lenguaje: {algoritmo.Lenguaje}</p></div>
                    <div className="card-text"><p>Autor: {algoritmo.Idpropietario}</p></div>
                </div>
                <div className="card-footer bg-transparent border-success">
                    <a href={`/EjecutarCod/${ algoritmo.ID }`} className="btn btn-primary">Ejecución Código</a>
                    <pre></pre>
                    <a href={`/VisualizarCod/${ algoritmo.ID }`} className="btn btn-primary">Visualizar Código</a>
                </div>
            </div>
        );
    }
}
