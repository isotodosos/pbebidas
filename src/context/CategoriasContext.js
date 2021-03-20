import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// Crear el context

export const CategoriasContext = createContext(); //esta funcion va crear el context y va a estar en categoriasContext


// Siempre que se crea un context tb tienes que crear un provider que es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    //creamos el state del context
    const [categorias, guardarCategorias] = useState([]);

    useEffect(() => {
       const obtenerCategorias = async () => {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const respuesta = await axios(url);
            guardarCategorias(respuesta.data.drinks);
       }

       obtenerCategorias();

    },[categorias]);

    return(
        <CategoriasContext.Provider
           value={{//todo lo que se ponga en el value va a estar disponible en los hijos gracias a props.children
               categorias
           }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;