import { useEffect, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    setCharacters(data.results);
  }

  useEffect(() => { getData(); },[])

  return (
    <div className="container">
      <Header title="Busqueda de Personajes de" subtitle="Rick and Morty"/>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Ingrese nombre a buscar</span>
        <input 
        type="text" 
        className="form-control" 
        placeholder='buscar...' 
        onChange={(e) => setSearch(e.target.value)} 
        value={search} 
      />
      </div>
      <p>{search}</p>
      <div className='list'>
        {characters 
        .filter((x) => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) 
        .map((item) => ( 
          <div className="card m-3" key={item.id}> 
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Especie: {item.species} Genero: {item.gender}</p>
            </div>
          </div>
        )
        )}
      </div>
      <Footer title="misitio.cl"/>
    </div>
    
  );
}
export default App;