import {useRef} from "react";

const ReactHookUseRef = () => {

    //Mediante useRef podemos acceder a las propiedades de un elemento html, esto se usa en caso especificos
    //No es recomendable estar haciendo esto seguido, podemos hacer esto cuando trabajamos con graficas
    const textAreaElement = useRef(null);


    const handleBtnClick = () => {

        //El useRef nos devuelve un elemento current, con el cual podremos alterar los valores de
        //el elemento que elegimos, aqui cambiaremos el texto y haremos focus en el elemento
        textAreaElement.current.value =
            "The is the story of your life. You are an human being, and you're on a website about React Hooks";
        textAreaElement.current.focus();
    };


    return (
        <section style={{ textAlign: "center" }}>
            <div>
                <button onClick={handleBtnClick}>Focus and Populate Text Field</button>
            </div>
            <label
                htmlFor="story"
                style={{
                    display: "block",
                    background: "olive",
                    margin: "1em",
                    padding: "1em"
                }}
            >
                The input box below will be focused and populated with some text
                (imperatively) upon clicking the button above.
            </label>
            {/*Le pasamos nuestro elementos useRef al elemento que deseamos manipular*/}
            <textarea ref={textAreaElement} id="story" rows="5" cols="33" />
        </section>
    );
};

export default ReactHookUseRef;
