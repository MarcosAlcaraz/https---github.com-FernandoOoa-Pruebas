import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectorRuta } from "../components/ProtectorRuta";
import { UserAuth } from "../context/AuthContext";
import { CrearAlgo } from "../pages/CrearAlgo";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import { EjecutarCodigoContainer } from "../pages/EjecutarCodigoContainer";
import { VisualizarCodigoContainer } from "../pages/VisualizarCodigoContainer";
export function MyRoutes() {
  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to={"/login"} />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<ProtectorRuta> <Perfil /> </ProtectorRuta>} />
        <Route path="/crearAlgo" element={<ProtectorRuta> <CrearAlgo /> </ProtectorRuta>} />
        <Route path="/VisualizarCod/:ID" element = { <ProtectorRuta> <VisualizarCodigoContainer />  </ProtectorRuta> } />
        <Route path="/EjecutarCod/:ID" element = { <ProtectorRuta> <EjecutarCodigoContainer />  </ProtectorRuta> } />
      </Routes>
    </BrowserRouter>);
}
