import { Routes, Route } from 'react-router-dom';
//Rutas importadas.
import { Home } from "../pages/Home";
import { Stadistic } from "../pages/Stadistic";
import { Product } from "../pages/Product";
import { Diagramas } from '../pages/Diagramas';
import { Reportes } from "../pages/Reportes";
import { Configuracion } from "../pages/Configuracion";
import { Salir } from "../pages/Salir"
export function Rute() {
  return(  
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<Product/>}/>
        <Route path="/estadisticas" element={<Stadistic/>}/>
        <Route path="/diagramas" element={<Diagramas/>}/>
        <Route path="/reportes" element={<Reportes/>}/>
        <Route path="/configuracion" element={<Configuracion/>}/>
        <Route path="/salir" element={<Salir/>}/>
    </Routes>
  );
}


