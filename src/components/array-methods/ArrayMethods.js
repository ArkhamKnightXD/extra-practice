import useArrayFunctions from "./useArrayFunctions";

const ArrayMethods = () => {

    const array = [
        {id: 1, name: "joseph"},
        {id: 2, name: "joseph2"},
        {id: 3, name: "joseph3"},
        {id: 4, name: "joseph4"},
        {id: 5, name: "joseph5"},
    ];

    const {findArrayElementById} = useArrayFunctions();


    const data = findArrayElementById(array, 4);


    return (
        <>
            {data.name}
        </>
    );
};

export default ArrayMethods;
