export const findPercOfValAndVal = (value, percentage) => {
    return parseInt(value) + (parseInt(percentage) * 100 / parseInt(value));
}
export const findPerFromVals = (val1, val2) => {
    return (parseInt(val2) - parseInt(val1)) * parseInt(val1) / 100;
}