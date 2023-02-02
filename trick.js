// Find unique numbers from array
const numbers = [1,2,5,6,1,4,5,6];

const duplicateNumbers = numbers.filter((value,index,array) => {
    return array.indexOf(value) === index;
});

console.log(`Duplicate numbers are: ${duplicateNumbers}`);