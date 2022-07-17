import {useEffect, useState} from "react";
import axios from "axios";

const ReactUseEffect = () => {

    const URL = "http://localhost:88";
    const [age, setAge] = useState(0);
    const [videoGames, setVideoGames] = useState([]);
    const handleClick = () => setAge(age + 1);

    useEffect(() => {

        //Mediante document.title, podemos modificar el titulo de la apgina
        document.title = 'You are ' + age + ' years old!'

    //    Basicamente cada vez que el estado age cambie, se ejecutaran los elementos que esten en el useEffect
    //    Si por alguna razon no pongo dependencia, el useEffect se ejecutara en cada renderizado, es decir
    //    El useEffect se ejecutara cada vez que un estado cambie, lo cual podria ser problematico
    //    Por lo tanto lo correcto es siempre poner un array de deps, ya sea vacio o con alguna variable
    }, [age]);


    //Uno de los problemas principales que crea el useEffect son los memory leaks, esto sucede cuando realizamos una
    //peticion a un Api y el componente se desmonta antes de que esta peticion termine, entonces cuando la peticion
    //termina sucede un memory leak ya que el estado en el que se iba a guardar, no existe
    //Que un componente se desmonte es el equivalente a cambiar de un componente, osea cambiar de una pagina a otra
    useEffect(() => {

        //De esta forma evitamos memory leak, seteamos una variable booleana, que indica que el componente esta mount
        // set our variable to true
        let isComponentMount = true;

        axios.get(`${URL}/api/v1/video-games`).then((response) => {
            //los datos del api solo seran guardados mientras el componente este montado
            if (isComponentMount) {
                // handle success
                setVideoGames(response.data);
            }
        });

        //Cuando cambiemos de pagina ejecutara esta cleanup function que seteara nuestro bool a false,
        //y por lo tanto no se manejar la peticion del api lo cual nos resolvera el memory leak
        return () => {
            // cancel the subscription
            isComponentMount = false;
        };
    }, []);

    return <div>
        <p> Look at the title of the current tab in your browser </p>
        <button onClick={handleClick}>Update Title!! </button>
    </div>
};

export default ReactUseEffect;
