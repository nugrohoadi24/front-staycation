export default (number) => {
    const isNumber =  new Intl.NumberFormat("id-ID");
    return isNumber.format(number)
}