import {useState} from "react";

const ReactHookUseStateV2 = () => {

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });


    //De esta forma podemos actualizar todos los campos de un estado mediante un solo handleChange
    const handleChange = (event) => {

        //Basicamente tomamos el nombre del campo de la propiedad name del input y la colocamos en el state
        //nota como vamos indicar una propiedad mediante una variable debemos de agregar las llaves, sino da error
        setUser((currentData) => ({...currentData, [event.target.name]: event.target.value }));
    };

    console.log("user", user);

    return (
        <>
            <input name="name" type="text" onChange={handleChange} placeholder="name"/>
            <input name="surname" type="text" onChange={handleChange} placeholder="surname"/>
            <input name="email" type="text" onChange={handleChange} placeholder="email"/>
            <input name="password" type="text" onChange={handleChange} placeholder="password"/>
        </>
    );
};

export default ReactHookUseStateV2;
