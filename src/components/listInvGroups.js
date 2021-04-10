import React, {useEffect, useState} from 'react'
import '../App.css';

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
  const { items, requestSort, sortConfig } = useSortableData(props.todos);

  const [searchTermNom, setSearchTermNom] = useState('');
  const [searchTermFec, setSearchTermFec] = useState('');
  const [searchTermDep, setSearchTermDep] = useState('');
  const [searchTermCiu, setSearchTermCiu] = useState('');
  const [searchTermAG, setSearchTermAG] = useState('');
  const [searchTermAE, setSearchTermAE] = useState('');
  const [searchTermEM, setSearchTermEM] = useState('');

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    
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
          <input type="text" placeholder="Filter" onChange={event =>{setSearchTermFec(event.target.value)}}/>
                <br/>
                <br/>
            Formación<br/>
            <button type="button" onClick={() => requestSort('fecformacion')} className={getClassNamesFor('fecformacion')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th style={{"width":"5%"}}>
          <input type="text" placeholder="Filter" onChange={event =>{setSearchTermDep(event.target.value)}}/>
                <br/>
                <br/>
            Departamento<br/>
            <button type="button" onClick={() => requestSort('departamento')} className={getClassNamesFor('departamento')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th style={{"width":"5%"}}>
          <input type="text" placeholder="Filter" onChange={event =>{setSearchTermCiu(event.target.value)}}/>
                <br/>
                <br/>
            Ciudad<br/>
            <button type="button" onClick={() => requestSort('ciudad')} className={getClassNamesFor('ciudad')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th style={{"width":"5%"}}>
          <input type="text" placeholder="Filter" onChange={event =>{setSearchTermEM(event.target.value)}}/>
                <br/>
                <br/>
            Email<br/>
            <button type="button" onClick={() => requestSort('email')} className={getClassNamesFor('email')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th>
          <input type="text" placeholder="Filter" onChange={event =>{setSearchTermAG(event.target.value)}}/>
                <br/>
                <br/>
            Area General<br/>
            <button type="button" onClick={() => requestSort('acgeneral')} className={getClassNamesFor('acgeneral')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th>
          <input type="text" placeholder="Filter" onChange={event =>{setSearchTermAE(event.target.value)}}/>
                <br/>
                <br/>
            Area Especifica<br/>
            <button type="button" onClick={() => requestSort('acespecifico')} className={getClassNamesFor('acespecifico')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th style={{"width":"5%"}}>Integrantes<br/>
            <button type="button" onClick={() => requestSort('integrantes')} className={getClassNamesFor('integrantes')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th style={{"width":"5%"}}>Publicaciones<br/>
            <button type="button" onClick={() => requestSort('prodbibliografica')} className={getClassNamesFor('prodbibliografica')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
          <th style={{"width":"5%"}}>Proyectos<br/>
            <button type="button" onClick={() => requestSort('proyectos')} className={getClassNamesFor('proyectos')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.filter((val)=>{
              if(searchTermEM=== '' &&searchTermNom=== '' && searchTermFec=== '' && searchTermDep=== '' && searchTermCiu=== '' && searchTermAG=== '' && searchTermAE=== ''){
                return val;
              }else{
                if ( val.email.toLowerCase().includes(searchTermEM.toLowerCase()) && val.nombre.toLowerCase().includes(searchTermNom.toLowerCase()) && val.fecformacion.toLowerCase().includes(searchTermFec.toLowerCase()) &&
                val.departamento.toLowerCase().includes(searchTermDep.toLowerCase()) && val.ciudad.toLowerCase().includes(searchTermCiu.toLowerCase()) &&
                val.acgeneral.toLowerCase().includes(searchTermAG.toLowerCase()) && val.acespecifico.toLowerCase().includes(searchTermAE.toLowerCase()) ){
                  return val;        
                } 
              } 
            }).map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.fecformacion}</td>
            <td>{item.departamento}</td>
            <td>{item.ciudad}</td>
            <td>{item.email}</td>
            <td>{item.acgeneral}</td>
            <td>{item.acespecifico}</td>
            <td>{item.integrantes}</td>
            <td>{item.prodbibliografica}</td>
            <td>{item.proyectos}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
};

const ListInvGroups = () => {

  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/fullinfogrupos");
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

export default ListInvGroups