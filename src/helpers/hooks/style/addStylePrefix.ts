export const addStylePrefix = (styleString: string, prefix: string) => {
    const stringArr = styleString.split(" ");
    return stringArr.reduce(
        (accumulator, current) => `${accumulator} ${prefix}:${current}`,
        " "
    );
};
