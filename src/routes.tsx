//Importar as dependências
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Importar as páginas
import Dashboard from './dashboard/Dashboard';
import NewOrder from './dashboard/NewOrder';
import Orders from './dashboard/UpdateOrder';
//Criar o componentes com as rotas
const ForRoutes = () => {
  return(
    <BrowserRouter>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route  path="/" element={<Dashboard />} />
        <Route  path="/neworder" element={<NewOrder />} />
        <Route  path="/orders" element={<Orders />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default ForRoutes;