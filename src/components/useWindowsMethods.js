// The window object is supported by all browsers. It represents the browser's window.
// All global JavaScript objects, functions, and variables automatically become members of the window object.

//mediante window puedes acceder a la propiedad document la cual cuenta con todos los DOM elements
// window.document.getElementById("header");
const useWindowsMethods = () => {

    // Window Size Two properties can be used to determine the size of the browser window.
    // Both properties return the sizes in pixels:

    // window.innerHeight - the inner height of the browser window (in pixels)
    // console.log("Window Height:", window.innerHeight);
    // window.innerWidth - the inner width of the browser window (in pixels)
    // console.log("Window width:", window.innerWidth);


    //Metodo para abrir un nuevo tab, con la url especificada
    const openNewTab = () => {

        //La url tiene que tener un buen formato sino abrira un blank page
        window.open("https://www.w3schools.com");
    };


    const closeCurrentTab = () => {

        window.close();
    };


    //Window.location nos da informacion general sobre la ubicacion de nuestra pagina,
    //Como conseguir la url actual de nuestra pagina, nota, podemos utilizar todos
    // los elementos de location sin tener que llamar window primero, pero hay que agregar una supression
    // eslint-disable-next-line no-restricted-globals
    // location.href
    //Por lo tanto me quedare utilizando window antes de los elementos y asi evito esta supresion

    const getActualPageUrl = () => {

        return window.location.href;
    }

    //returns the web protocol used (http: or https:)
    // window.location.protocol;

    //The property returns the number of the internet host port (of the current page).
    // window.location.port:

    const loadNewPage = () => {

        window.location.assign("https://www.w3schools.com");
    };


    // The window.history object contains the browsers history.

    //Para proteger la privacidad del usuario solo podemos acceder a los metodos back y forward

    //Metodo que nos permite ir una pagina atras
    const goBack = () => {

        window.history.back();
    };


    //Metodo que nos permite ir una pagina adelante
    const goForward = () => {

        window.history.forward();
    };

    // The appName property returns the application name of the browser: the name for the browsers will be netscape
    // window.navigator.appName

    //Esto nos retorna la plataforma en la que el usuario accedio, ya sea windows, linux o android etc...
    // window.navigator.platform;

    //JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

    //Este metodo mostrara una caja de alerta al usuario con el mensaje que deseemos
    const showAlertMessage = (message) => {

        window.alert(message);
    };

    //El metodo window.confirm return true si se presiona ok y false si se le da a cancel
    const showConfirmBox = () => {

        let text;

        if (window.confirm("Todo bien?")) {
            text = "You pressed OK!";
        } else {
            text = "You pressed Cancel!";
        }

        window.alert(text);
    };


   // JavaScript can be executed in time-intervals. This is called timing events.


    const showAlertBoxAfter5Seconds = () => {

        // Executes a function, after waiting a specified number of milliseconds.
        setTimeout(() => showAlertMessage("prueba de tiempo"), 5000);
    };


    const showAlertBoxEvery5Seconds = () => {

        //Hace basicamente lo mismo que setTimeOut, pero esta ejecutara la misma funcion cada 5 segundos
        setInterval(() => showAlertMessage("prueba de tiempo"), 5000);
    };


    return {openNewTab, loadNewPage, goBack, goForward, showConfirmBox};
};

export default useWindowsMethods;
