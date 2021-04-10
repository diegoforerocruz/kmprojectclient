import React, {useEffect, useState} from 'react'



const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };
  
  
  const ProductTable = (props) => {

    const [nombreInvestigadorDetail,setNombreInvestigadorDetail] = useState("");
    const [datosAreasActuacion, setDatosAreasActuacion] = useState([]);
    const [searchTermSexo, setSearchTermSexo] = useState('');
    const [searchTermNac, setSearchTermNac] = useState('');
    const [searchTermNom, setSearchTermNom] = useState('');

    const { items, requestSort, sortConfig } = useSortableData(props.todos);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    const getAreasInvestigador = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/fullinfoinvestigador/${id}`);
        const jsonData = await response.json();
        await setNombreInvestigadorDetail(jsonData[0].nombre);
        await setDatosAreasActuacion(jsonData);
        await console.log(datosAreasActuacion);
      } catch (err) {
        console.error(err.message);
      }
    };
    return (
      <div>
        <table className="table mt-5 text-center table-bordered">
          <thead>
            <tr>
              <th>
              
                <input type="text" placeholder="Filter" onChange={event =>{setSearchTermNom(event.target.value)}}/>
                <br/>
                <br/>
                Nombre<br/>
                <button type="button" onClick={() => requestSort('nombre')} className={getClassNamesFor('nombre')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                </button>
                
              </th>
              <th>
              
                <input type="text" placeholder="Filter" onChange={event =>{setSearchTermNac(event.target.value)}}/>
                <br/>
                <br/>
                Nacionalidad<br/>
                <button type="button" onClick={() => requestSort('nacionalidad')} className={getClassNamesFor('nacionalidad')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                </button>
                
              </th>
              <th>
                <input type="text" placeholder="Filter" onChange={event =>{setSearchTermSexo(event.target.value)}}/>
                <br/>
                <br/>
                Sexo<br/>
                <button type="button" onClick={() => requestSort('sexo')} className={getClassNamesFor('sexo')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                </button>
                
                
              </th>
              <th>Publicaciones<br/>
                <button type="button" onClick={() => requestSort('publicaciones')} className={getClassNamesFor('publicaciones')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                </button>
              </th>
              <th>Proyectos<br/>
                <button type="button" onClick={() => requestSort('proyectos')} className={getClassNamesFor('proyectos')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                </button>
              </th>
              <th className="align-middle">Areas Acción<br/>
                
              </th>
            </tr>
          </thead>
          <tbody>
            {items.filter((val)=>{
              if(searchTermSexo === '' && searchTermNac=== '' && searchTermNom=== ''){
                return val;
              }else{
                if (val.sexo.toLowerCase().includes(searchTermSexo.toLowerCase()) && val.nacionalidad.toLowerCase().includes(searchTermNac.toLowerCase()) && val.nombre.toLowerCase().includes(searchTermNom.toLowerCase())){
                  return val;        
                } 
              } 
            }).map((item) => (
              <tr key={item.id}>
                <td className="align-middle">{item.nombre}</td>
                <td className="align-middle">{item.nacionalidad}</td>
                <td className="align-middle">{item.sexo}</td>
                <td className="align-middle">{item.publicaciones}</td>
                <td className="align-middle">{item.proyectos}</td>
                <td className="align-middle"><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getAreasInvestigador(item.id)}>Ver Áreas</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id="exampleModalLabel">El investigador {nombreInvestigadorDetail} actua en las siguientes áreas:</h6>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul>
                {datosAreasActuacion.map((item) => (
                    <li className="text-start" key={item.idareaconocimiento}>{item.areaconocimiento}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



const ListInvestigators = () => {
    const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/investigadores");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getTodos();
  }, []);

  return(
    <div className="App">
      <ProductTable todos={todos}/>
    </div>
  )
}

export default ListInvestigators
