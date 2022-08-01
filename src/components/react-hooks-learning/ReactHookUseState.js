import {useState} from "react";

const ReactHookUseState = () => {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");

    //Siempre que se pueda inicializar objeto con corchetes y no con valores null, y si es posible,
    // tambien indicar los parametros que el objeto tendra dentro, para evitar undefined
    const [user, setUser] = useState({
        username: "john",
        email: "john@example.com",
        images: ["profile.png"]
    });


    //Ambas funciones add funcionan igual, la diferencia es que en una el valor se agrega de inmediato y en la otra no
    // const add = () => {
        //  La razon por la que los estados no se actualizan de inmediato,
        //es porque lo que hay en la variable number es una referencia, esta forma de setear estado tambien es correcta
        // setNumber(number + 1);
    // };


    const addInmediately = () => {

        //Si queremos actualizar de inmediato el state con su mismo valor lo hacemos de esta forma
        setNumber((currentNumber) => currentNumber + 1);
    };


    //De esta forma actualizo solo el elemento username de mi estado con varios campos
    const updateUsername = () => {

        //Basicamente envio, todos los datos actuales de mi estado, y solo cambio la propiedad que deseo,
        // agregando el nombre especifico de esta propiedad
        setUser(currentState => ({...currentState, username: name}))
    };

    console.log(user);

    return (
        <>

            <button onClick={addInmediately}>Add</button>
            <h1>{number}</h1>

            <input onChange={(event) => setName(event.target.value)} placeholder="enter a name"/>
            <button onClick={updateUsername}>Change Username</button>
            <span>username is: {user.username}</span>
        </>
    );
};

export default ReactHookUseState;
