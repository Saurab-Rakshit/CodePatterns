//TODO: Check property exists in an object
const employee = {
    firstname:"Arjuna",
    lastname:"Varan",
    salary:20000
}

const isSalaryExists = "salary" in employee;
// console.log(isSalaryExists);

//TODO: Conditionally add a property to an object.

const isCountryExists = true;

const college = {
  name:"New Horizons Intitute of Technology",
  city:"Bangalore",
  state:"Karnataka",
  ...(isCountryExists && {country:"India"})  
}
// console.log(college);

//TODO: Use includes to check for multiple criteria.

const rgbColors = ["red","green","yellow","blue"];

const isColorExists = (color)=>{
  return rgbColors.includes(color);
};

// console.log(isColorExists("blue"));

//TODO: Remove duplicates from an array using Set.

const array = ["hello","red", "green", "blue","world", "hello", "yellow", "purple", "hello", "world"]

const uniqueArray = [...new Set(array)]
// console.log(notDuplicates);

//TODO: Use spread operator to shallow copy arrays and objects.
const runs = [20,3,0,50,60,90]
const clubs = {
    id:1,
    name:"manchester city",
    game:"football"   
} 

const newRuns = [...runs]
const newClubs = {...clubs}

// console.log(newRuns);
// console.log(newClubs);

//TODO: Use of falsy bouncer.

const numberWithFalsyValues = [7,null,10,17,false,NaN,"sandy","bobby"];
const numbers = numberWithFalsyValues.filter(Boolean)
// console.log(numbers);

//TODO: Use Array.some to check occurrence in array.

const randomString = ["title","name","surname","firstname"]
const checkOccurence = randomString.some(data => data==="surname");
// console.log(checkOccurence);

const assets = [
    {id:1,title:"v-1",type:"video"},
    {id:1,title:"v-1",type:"video"},
    {id:1,title:"v-1",type:"video"},
];
const checkOccurenceInObject = assets.some(data => data.type === "video");
// console.log(checkOccurenceInObject);

//TODO: Skip values in array destructuring.

const scores = [50,40,80,60,90];
let [, , , ...restScores] = scores;
// console.log(restScores);

//TODO: Format the output of JSON.stringify.
let car = {
    name:"i20",
    company:"hyundai",
    color:"red"
}

const format = JSON.stringify(car);
// console.log(format);

//TODO: Filter with JSON.stringify

const student = {
    id:45,
    name:"Umesh Varan",
    address:{
      city:"Durgapur",
      state:"West Bengal",
      country:"India"
    }
};

const filter = ["id","name","address","city","country"]; // remove some strings from the array to see the changes.
const filterEmployee = JSON.stringify(student,filter)
// console.log(filterEmployee);

//TODO: Convert to a flat array using Array.flat

const arr = [1,2,[3,4],[5,[6,7]]]
let flatArrOne = arr.flat();
// console.log(flatArrOne);//[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
let flatArrTwo = arr.flat(2);
// console.log(flatArrTwo);//[1, 2, 3, 4, 5, 6,7]

//TODO: Logging using console.group

console.group("Video");