import React, {useContext, useState} from 'react';//Importamos el hook useContext
import {CategoriasContext} from '../context/CategoriasContext';//Importamos el context creado
import {RecetasContext} from '../context/RecetasContext';//Importamos el context creado

const Formulario = () => {

    //creamos un useState local independientemente de usar redux o context si no keremos que fluya... pues se hace uno local y ya está
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsulta} = useContext(RecetasContext);

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }
    
    return(        
        
        <form
           className="col-12"
           onSubmit={e => {
               e.preventDefault();
               buscarRecetas(busqueda);
               guardarConsulta(true);
           }}
           >

            
              
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                       type="text"
                       name="nombre"
                       className="form-control"
                       placeholder="Buscar por ingrediente"
                       onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                       className="form-control"
                       name="categoria"
                       onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona categoría --</option>

                        {categorias.map(categoria=>(
                          <option
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                          >{categoria.strCategory}</option>
                        )) } 

                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
        
    )
}
export default Formulario;