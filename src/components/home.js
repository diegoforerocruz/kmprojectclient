import React from "react";

export const Home = ({ title }) => {
  return (
    <div className="contenedor container">
      
      <div className="row bg-warning">
        <div className="col-1 py-2"><h5 className="text-uppercase">¡Aviso!</h5></div>
        <div className="col">
          <p>
            Esta página web es un proyecto en desarrollo para la clase de Administración de Conocimiento - MINE4103 de la Maestría en Ingeniería de Información
            de la Universidad de los Andes Semestre 2021-10
          </p>
        </div>
      </div>
      <br/>
    </div>
  );
};