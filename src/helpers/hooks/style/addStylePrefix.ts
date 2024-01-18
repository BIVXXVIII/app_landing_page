export const addStylePrefix = (styleString: string, prefix: string) => {
    const stringArr = styleString.trim().split(" ");
    if (stringArr.length > 1)
        return stringArr.reduce((accumulator, current) => {
            if (accumulator.includes(prefix))
                return `${accumulator} ${prefix}:${current}`;
            return `${prefix}:${accumulator} ${prefix}:${current}`;
        });
    return `${prefix}:${styleString}`;
};
