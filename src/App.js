import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext';//importamos el proveedor
import RecetasProvider from './context/RecetasContext';//importamos el proveedor
import ModalProvider from './context/ModalContext';//importamos el proveedor

function App() {
  //todos los componentes que tenga dentro el provider (CategoriasProvider) va a tener disponible lo que tenga dentro del value
  return (
    <CategoriasProvider>
      
      <RecetasProvider>

        <ModalProvider>

          <Header/>
          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
            <ListaRecetas/>
          </div>

        </ModalProvider>
        
      </RecetasProvider>
      
    </CategoriasProvider>
    
  );
}

export default App;
