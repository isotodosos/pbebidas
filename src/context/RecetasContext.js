import axios from 'axios';
import React, {createContext, useState,useEffect} from 'react';
//import axios from 'axios';


export const RecetasContext =  createContext();  //context creado!!

const RecetasProvider = (props) => {
    
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });
    const [consulta, guardarConsulta] = useState(false);

    useEffect(() => {

        if(consulta){
            const obtenerReceta = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;
                const respuesta = await axios(url);
                guardarRecetas(respuesta.data.drinks);
            }
            obtenerReceta();
        }

        
    },[busqueda,consulta]);
    
    return(
        <RecetasContext.Provider
           value={{
               buscarRecetas,
               guardarConsulta,
               recetas
           }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}
export default RecetasProvider;