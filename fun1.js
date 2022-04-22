function sum(...args) {
    return args.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    })
}
function prod(...args) {
    return args.reduce((previousValue, currentValue) => {
        return previousValue * currentValue
    })
}

export { sum, prod }