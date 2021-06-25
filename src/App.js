import React, {Fragment, useState, useEffect} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import ListadoNoticias from './component/ListadoNoticias';

function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=bcb97d07251f42f29e3c5b9c0b930756`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>

      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
      <Formulario 
        guardarCategoria={guardarCategoria}
      />
      <ListadoNoticias 
        noticias={noticias}
      />
      </div>

    </Fragment>
    );
}

export default App;
