import {useEffect, useState} from "react";

const ReactUseEffect = () => {

    const [name, setName] = useState("");
    const [object, setObject] = useState({
        name: "",
        selected: false
    });


    useEffect(() => {

        console.debug("useEffect run");

    //    Cuando ponemos dentro de las deps de un useEffect un objeto, tenemos que tener en cuenta, que el useEffect
    //    Se va a ejecutar siempre, aunque ninguno de los valores dentro del objeto hayan cambiado, esto es debido a
    //    Que un objeto no es un tipo de dato primitivo, esto quiere decir que siempre que comparemos un objeto con otro
    //    siempre dara false, sin importar que todos los elementos dentro del objeto sean idénticos
    //    strings, boolean, numbers son tipos de datos primitivos, pero objetos y arreglos no lo son
    //    Asi que idealmente en el array de deps solo deberíamos poner tipos de datos primitivos
    //    La solución más inmediata para que el useEffect no se ejecute en cada renderizado del objeto
    //    Es evaluar las propiedades interna del objeto, tambien
        //    esto se podría solucionar con useMemo
    }, [object.name, object.selected]);


    const handleChangeName = () => {

        setObject((prevState) => ({...prevState, name }));
    };


    const handleSelected = () => {

        setObject((prevState) => ({...prevState, selected: true}))
    };



    return (
        <>
            <input onChange={(event) => setName(event.target.value)}/>
            <button onClick={handleChangeName}>change name</button>
            <button onClick={handleSelected}>selected</button>

        </>
    )
};

export default ReactUseEffect;
