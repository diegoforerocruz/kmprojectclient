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
      <div className="card my-5 border-dark" >
          <div className="card-body">
            <h5 className="card-title">¿Qué Somos?</h5>
            <p className="card-text">Somos una herramienta que te va a permitir conocer los investigadores y grupos de investigación que pertencen a una base de datos correspondiente al 70% de los grupos de investigacion pertenecientes del programa nacional de ciencia y tecnología
            de Biotecnología pertenecientes a GrupLAC y CvLAC, además de ofrecer métodos de busqueda para encontrar investigadores y grupos de investigación que cumplan con un criterioe especifico</p>
          </div>
        </div>
        <div className="card my-5 border-dark" >
          <div className="card-body">
            <h5 className="card-title">Nuestras Funcionalidades</h5>
            <p className="card-text">
              En la barra de navegación superior se encuentran dos items Investigadores y Grupos de Investigacion donde en cada uno de estos se va a poder encontrar
              dos pestañas que corresponden a la lista de investigadores o grupos y una pestaña donde se puede encontrar graficas que muestran la distribución de la cantidad
              de grupos o investigadores que desarrollan diferentes áreas.
            </p>
            <h6>Lista de Funcionalidades</h6>
            <ul>
              <li>Grupos de investigación</li>
              <ul>
                <li>Vizualización de Lista de Grupos de Investigación</li>
                <ul>
                  <li>Ordenar de forma ascendente y descendente la información de la tabla por varios criterios</li>
                  <li>Realizar busquedas dentro de la tabla por uno o más criterios</li>
                </ul>
                <li>Gráficas</li>
                <ul>
                  <li>Gráfica que muestra cuantos grupos de investigación trabajan cierta área conocimiento general</li>
                  <li>Gráfica que muestra cuantos grupos de investigación trabajan cierta área conocimiento específico</li>
                  <li>Gráfica que muestra cuantos grupos de investigación trabajan una tupla de area general y específica</li>
                </ul>
              </ul>
              <li>Investigadores</li>
              <ul>
                <li>Vizualización de Lista Investigadores</li>
                <ul>
                  <li>Ordenar de forma ascendente y descendente la información de la tabla por varios criterios</li>
                  <li>Realizar busquedas dentro de la tabla por uno o más criterios</li>
                  <li>Ver el detalle de los investigadores donde se puedan ver las áreas de conocimiento de trabaja un investigadore en específico</li>
                </ul>
                <li>Gráficas</li>
                <ul>
                  <li>Gráfica que muestra cuantos investigadores trabajan  en cierta área conocimiento</li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      
      <br/>
    </div>
  );
};