import useWindowsMethods from "./useWindowsMethods";

const WindowsMethods = () => {

    const {getCookieByName} = useWindowsMethods();


    return (
        <>
            <button onClick={() => getCookieByName("test")}>open </button>
        </>
    );
};

export default WindowsMethods;
