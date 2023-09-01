const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

const persons = [{name: 'Shweta', age: 22 , gender : 'f'}, {name: 'Ayush', age: 20 ,gender : 'm'}, {name: 'Vrunda', age: 16 , gender : 'f'}];


// const result = persons.map(person =>  {return {name: person.name, age: person.age, message: `Name: ${person.name}, Age: ${person.age}`}});

// console.log(result);


// console.log(persons.some (person => person.age>20 ));

// console.log(persons.filter(person => person.gender==='f'));

// const femaleCandidates = persons.filter(element => {    
//     console.log('Every element', element);
//     return element.gender==='f' 
// });

// found =persons.indexOf(persons.find(person =>person.name=='Vrunda'));
// found =persons.indexOf(person =>person.name=='Vrunda');
// console.log(found);
// rest //merge argus in array 
// function sum (...args)
// {

// }
// sum(1,2,3,4,4,5)

// destructure
// const prsn ={
// name : "shweta",
// address : {city : " ", states= ""}
// }
// const {age ,gender} = prsn
// const (adress : city ) =address
// console.log(age)


// // const fruit =[ "bana" , "cherry " , "orange" , "mango"] 

// found = fruit.splice(fruit.indexOf("orange"),1);

// console.log(fruit);



// ************************************************************************************************÷


// Create function 

// const functionName = (a,b) => {
// return a+b;
// }

// console.log(functionName(4,2));

// //concate
// const registration = "form";

// console.log(`please enter your details in ${registration} and complete your profile`);


// // object

// const person = {
// name :"shweta",
// language :"english",
// play : "cricket",
// age :2
// };
// //reduce 
// const printAbout = ({name, age}) => {
//     console.log(`name is ${name} and age is ${age}`);
// }
// console.log(`${person.name} is employee in ts and is good at ${person.language} and a good ${person.play}`)
// const functionname = () =>{}



//array

// arr= [{name:"shweta", game : "tt" , age : 3},{name : "vrunda", game : "vb" , age :1}, {name:"aesha" , age:4 , game:"bb"}]

// hobbies =["dancing","playing","running"]

// shobbies=[...hobbies,"rocking"]
// console.log(hobbies)
// console.log(shobbies)

//reduce
// ### where initial value lefyttttttttttttttt
// const arr1=[1,2,3,4]
// function sum reduce(total,currentValue)(
//      total=total+currentValue
//   );


//rest opt

// function sum(...args){

// }
// console.log(sum(2,3,4,5,2,6,))



// array1=[1,2,3,4,5]
// arr2=[5,6,7,8]

// // const iterator1 = array1.entries();

// // console.log(iterator1.next().value);
// // console.log(iterator1.next().value);
// // console.log(iterator1.next().value);
// // console.log(iterator1.next().value);

// // for (const [index, element] of array1.entries()) {
// //     console.log(index, element);
// // }

// // fill(value, start, end)
// // console.log(arr.fill(2,3,5))

// //find - return the first element that satisfy the condition
// // console.log(array1.find(element => element <3));


// //map : make same function apply on all element
// // console.log(array1.map(element=>element*2))

// //some : return true if atleast one element satisfy condition
// // console.log(array1.some(element => element >4))

// //every: return true all element satisfy condition
// // console.log(array1.every(element => element >4))

// // filter: return array of element satisfy condition
// // console.log(array1.filter(element => element >3))

// // slice : return the cut part and no changes in original
// // console.log(array1.slice(1,4))

// //splice : return the cut value and it make changes in original //strart , how many delete
// // const fruit =[ "bana" , "cherry " , "orange" , "mango"] 

// //  fruit.splice(1,3);
// //  console.log(fruit)

// //concat
// // console.log(array1.concat(arr2))

// const number = [10,20,30,40,50]
// const total = numbers.reduce((total, currentValue)=>{
//     total += currentValue;
//     return total;
// }, 1000);
// console.log("Total is", total);





//task 
// merge 2 array

// const arr1=[1,2,3,4]
// const arr2=[6,7,8,9]

// concate=[...arr1,...arr2]
// console.log(concate)

// const concate1=arr1.concat(arr2)
// console.log(concate1)
// push 
// console.log(arr1+arr2)
// spread and push when arr1 is constant
// arr1.push(arr2)
//splice
//loop




// String 



// let str1 = "Hello"
// let str2= "world"

// concat
// console.log(str1.concat(str2))
// console.log(str1.concat(" " ,str2))
// console.log(str1+" "+str2)
// console.log(`${str1} ${str2}`)

// length

// let str = "Hello world"

// console.log(str.length)

// replace

// string= "Mr Blue has a blue house and a blue car"

// SAME CASE FOR REPLACEALL
// String.replace(searchstring , replacerstring)
// console.log(string.replaceAll('blue','red')) // here it will find first match and replace

// SAME CASE FOR REPLACEALL
// String.replace(searchstring , replacerfunction)
// console.log(string.replaceAll('blue',match =>{
//     return match.toUpperCase()
// }))
// Mr Blue has a BLUE house and a blue car // function applied to first match only

// String.replace(regular exp , replacerstring)
// console.log(string.replace(/blue/g,'red'))
// Mr Blue has a red house and a red car // global expressing but consider caps

// SAME CASE FOR REPLACEALL
// console.log(string.replace(/blue/gi,'red')) //global expressing but ignore caps
// console.log(string.replace(/blue/i,'red')) 

// SAME CASE FOR REPLACEALL
// String.replace(regular exp , replacerfunction)
// console.log(string.replace(/blue/gi,match => {return match.toUpperCase()}))

