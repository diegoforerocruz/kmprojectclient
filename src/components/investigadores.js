import React, {useState, useEffect} from "react";
import ListInvestigators from '../components/listInvestigators';
import Charts from '../components/charts';


export const Investigadores = ({ title }) => {
  const [infoAreas, setInfoAreas] = useState([]);
  const getInfoAreas = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/areasdesarrolladasporinvestigador");
      const jsonData = await response.json();
      setInfoAreas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getInfoAreas();
  }, []);
  return (
    <div className="contenedor container">
      
      <ul className="nav nav-tabs " id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Todos los Investigadores</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Gráfica de Desarrollo de Áreas</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><ListInvestigators/></div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <br/>
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
              <h4 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Número de Investigadores Desarrollando un Área de Conocimiento
                </button>
              </h4>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  <div className="row d-flex justify-content-center">
                    <Charts data={infoAreas} />
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