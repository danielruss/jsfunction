export function sum(...args) {
    args.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    })
}
