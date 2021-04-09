import React, {useEffect, useState} from "react";
import ListInvGroups from '../components/listInvGroups';
import Charts from '../components/charts';


export const Grupos = ({ title }) => {
  const [infoGen, setInfoGen] = useState([]);
  const [infoEsp, setInfoEsp] = useState([]);
  const [infoAmbas, setInfoAmbas] = useState([]);
  const getInfoGen = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/tematicasgeneralesvsgrupos");
      const jsonData = await response.json();
      setInfoGen(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getInfoEsp = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/tematicasespecificosvsgrupos");
      const jsonData = await response.json();
      setInfoEsp(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getInfoAmbas = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/ambastematicasvsgrupos");
      const jsonData = await response.json();
      setInfoAmbas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getInfoGen();
    getInfoEsp();
    getInfoAmbas();
  }, []);
  return (
    <div className="contenedor container">
      
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Todos los Grupos</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Gráficas de Desarrollo de Áreas</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><ListInvGroups/></div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <br/>
          <div className="accordion accordion-flush" id="accordionExample">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Grupos Desarrollando un Área de Conocimiento General
                </button>
              </h4>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  <div className="row d-flex justify-content-center">
                    <Charts data={infoGen} />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Grupos Desarrollando un Área de Conocimiento Especifico
                </button>
              </h4>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  <div className="row d-flex justify-content-center">
                    <Charts data={infoEsp} />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Grupos Desarrollando una Tupla de Área de Conocimiento General y Especifico
                </button>
              </h4>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  <div className="row d-flex justify-content-center">
                    <Charts data={infoAmbas} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};