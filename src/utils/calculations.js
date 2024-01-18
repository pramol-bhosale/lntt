export const findPercOfValAndVal = (value, percentage) => {
    return parseInt(value) + (parseInt(percentage) * parseInt(value) / 100);
}
export const findPerFromVals = (val1, val2) => {
    return (parseInt(val2) - parseInt(val1)) * 100 / parseInt(val1);
}