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

    //Si quisieramos obtener la altura y ancho de la pantalla del usuario debemos de utilizar screen
    // window.screen.width;
    // window.screen.height;


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


    //Cookies
    //     Cookies are data, stored in small text files, on your computer.
    //     When a web server has sent a web page to a browser, the connection
    //     is shut down, and the server forgets everything about the user.
    //     Cookies were invented to solve the problem "how to remember information about the user":
    // When a user visits a web page, his/her name can be stored in a cookie.
    //     Next time the user visits the page, the cookie "remembers" his/her name.

        //JavaScript can create, read, and delete cookies with the document.cookie property.

    //Cookies are saved in name-value pairs like:, podemos agregar fecha de expiracion y con path indicamos que las
    //Cookies pertenecen a esta pagina
    // document.cookie = "username: Kevin Rodriguez, expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";

    //Para modificarla se hace de la misma forma en que se crea
    // document.cookie = "username: Kevin Perez, expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";

    //Para borrar la cookie solo basta con modificar la fecha de expiracion y ponerle una fecha pasada
    // document.cookie = "username: Kevin Perez, expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";

    //Funcion para guardar una cookie con su nombre, valor y fecha de expiracion
    const setCookieData = (cookieName, cookieValue, expirationDays) => {

        const actualDate = new Date();

        actualDate.setTime(actualDate.getTime() + (expirationDays*24*60*60*1000));

        let expires = "expires="+ actualDate.toUTCString();

        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    };


    //Funcion para encontrar una cookie por nombre, esta funcion nos retornara el valor de la cookie que especifiquemos
    const getCookieByName = (cookieName) => {

        let name = cookieName + "=";

        let decodedCookie = decodeURIComponent(document.cookie);

        //separo por ; debido a que las cookie se separan por esto
        let ca = decodedCookie.split(';');

        for(let i = 0; i <ca.length; i++) {

            let c = ca[i];

            while (c.charAt(0) === ' ') {

                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {

                // console.log("Cookie Found:", c.substring(name.length, c.length));

                return c.substring(name.length, c.length);
            }
        }

        return "";
    };


    console.log("cookie", document.cookie);

    return {openNewTab, loadNewPage, goBack, goForward, showConfirmBox, setCookieData, getCookieByName,
        showAlertBoxAfter5Seconds, showAlertBoxEvery5Seconds, closeCurrentTab, getActualPageUrl};
};

export default useWindowsMethods;
