let frontend =['React', 'Vue'];
let backend = ["Node", "Express"];

fullstack = [...frontend,...backend]
console.log(fullstack);

const profile ={
    name : 'mira',
    age : 22,
};

const profileUpdate = {...profile, country : 'Ph'};
const {name, age}=profileUpdate;
console.log(name ,age)

const average = (...nums) => {
    return nums.reduce((a,b)=>a+b,0)/nums.length;
}
console.log(average(1,2,3,4,5,6,7));


