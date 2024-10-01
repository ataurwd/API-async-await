const calculateAge = age => {
    return age * 12;
}

console.log(calculateAge(12));
console.log(calculateAge(13));
setTimeout(() => {
    console.log(calculateAge(45));
    
}, 1000) // 3000 means 3s delay loading that's why the data load last
console.log(calculateAge(14));
console.log(calculateAge(15));
