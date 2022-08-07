
const useArrayFunctions = () => {

    const findArrayElementById = (array, id) => {

        return array.find(element => element.id === id);
    };

    return {findArrayElementById};
};

export default useArrayFunctions;
