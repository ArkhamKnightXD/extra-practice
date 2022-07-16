import useWindowsMethods from "./useWindowsMethods";

const WindowsMethods = () => {

    const {openNewTab, loadNewPage, goBack, goForward, showConfirmBox} = useWindowsMethods();


    return (
        <>
            <button onClick={showConfirmBox}>abrir </button>
        </>
    );
};

export default WindowsMethods;
