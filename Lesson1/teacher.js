const getNameT = () => {
    return "my name is shakib";
}
const getAgeT = () => {
    return "30";
}
const result = 3.95;
exports.getName = getNameT;
exports.getAge = getAgeT;
module.exports = {
    getNameT,
    getAgeT,
    result
}