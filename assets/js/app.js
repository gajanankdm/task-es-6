
let  cl = console.log;
// ----------------------
//  Sample Data ==> (You can change the array to increase the difficulty level.) 
// ----------------------
const products = [
  { id: 1, name: "Laptop", price: 45000, category: "Electronics", inStock: true },
  { id: 2, name: "Mobile", price: 15000, category: "Electronics", inStock: false },
  { id: 3, name: "Shirt", price: 1200, category: "Clothing", inStock: true },
  { id: 4, name: "Shoes", price: 2500, category: "Footwear", inStock: true },
  { id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false }
];

const users = [
  { id: 101, name: "Ravi", age: 25, role: "admin" },
  { id: 102, name: "Amit", age: 28, role: "user" },
  { id: 103, name: "Sneha", age: 22, role: "user" },
  { id: 104, name: "Priya", age: 30, role: "manager" }
];

// ----------------------
//  100 Tasks
// ----------------------

//  Easy (1–30)

// let & const
// 1. Declare let and const variables and reassign them to see error/success.

//let
// let products=[10,20,30];
// cl(products)//erro='products' has already been declared 


//const
// const products = [10,20,30];
// cl(products) //Identifier 'products' has already been declared


// 2. Use const for products array and try to push a new product.

products.push({ id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false });
 cl(products)
// 3. Create a block using let and check if variable is accessible outside.

if(true){

    let x= 10
}
//cl(x)// x is not defined because it create block scope

// 4. Compare var, let, const by declaring inside loop.
// for(var i=0;i<products.length;i++){
//     cl("var",i);
// }
// cl("var",i);

// for(let i=0;i<products.length;i++){
//     cl("let",i)
// }
//  cl("let",i)

// for(const i=0;i<products.length;i++){
//     cl("const",i)
// }
//  cl("const",i)

// 5. Use const with users object and modify one user’s property.

users[1].role="runner";
cl(users)


// Arrow Functions
// 6. Convert normal function to arrow for adding two numbers.

// normal function

// function add(a,b) {
//     return  a + b;
// }
// console.log(add(10, 20))

// arrow function
 add = (a,b)=> a+b;
cl(add(10,20))

// 7. Use arrow function to filter products with price > 2000.

let result1 = products.filter(a=> a.price > 2000);
cl(result1)
// 8. Use arrow with map() to extract all users names.
let result2 = products.map(a=>a.name);
cl(result2);
// 9. Use arrow function with setTimeout to print user after 2 sec.
setTimeout(() => {
  cl(users)  
}, 2000);
// 10. Show this issue with arrow inside an object method.
const obj = {
  a: 10,
  b: 20,
  add: () => {
    return this.a + this.b;
  }
};

cl(obj.add());


// Arrow functions do not have their own this.
// They use the this value from where they were defined (lexical scope).
// In this case, this does not point to obj — 
// it points to the global scope (or undefined in strict mode).


// Template Literals
// 11. Use template literals to print "Laptop - ₹45000".

// products = [
//   { id: 1, name: "Laptop", price: 45000, category: "Electronics", inStock: true },
//   { id: 2, name: "Mobile", price: 15000, category: "Electronics", inStock: false },
//   { id: 3, name: "Shirt", price: 1200, category: "Clothing", inStock: true },
//   { id: 4, name: "Shoes", price: 2500, category: "Footwear", inStock: true },
//   { id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false }
// ];
let result4=products.forEach(a=>{
    return `${a.name}-${a.price} .`
})
cl(result4)
// 12. Loop through products and log `${name} costs ₹${price}`.

for(let i=0;i<products.length;i++){
    cl(`${products[i].name} costs ₹$${products[i].price}`)

}

// const users = [
//   { id: 101, name: "Ravi", age: 25, role: "admin" },
//   { id: 102, name: "Amit", age: 28, role: "user" },
//   { id: 103, name: "Sneha", age: 22, role: "user" },
//   { id: 104, name: "Priya", age: 30, role: "manager" }
// ];

// 13. Create HTML string with users info using template literal.
let res='';
users.forEach(a=>{
    res+=`
    <li> age is ${a.age}</li>
    <li> name is ${a.name}</li>
    <li> id ${a.age}</li>
    <li> role in compony ${a.age}</li>
    `
})
cl(res)
// 14. Use template literal with function return (user role).
function nameis(a){
    return `user role of the person:${a}`
}
cl(nameis("admin"))
// 15. Build multiline string of all categories using template literals.

let categoriesof = `${products.map(a=>a.category).join(",")}`;
cl(categoriesof)

// Default Parameters
// 16. Function greetUser(name="Guest") print greeting.
function greetUser(name1="guest"){
    return "hello "+name1
}
cl(greetUser())
cl(greetUser("gajanan"))
// 17. Function calcDiscount(price, discount=0.1) apply discount.

 function calcDiscount(price, discount=0.1){
  return price-(price*discount);
 }
 cl(calcDiscount(1000));


// 18. Function with param default = another function return.

function getdefaultduscount(){
  return 0.1
}


 function calcDiscount1(price, discount= getdefaultduscount()){
  return price-(price*discount);
 }
 cl(calcDiscount1(700));


// 19. Function registerUser({name, role="user"}) use default role.
function registerUser({name1, role="user"}){
  return "the name is " + name1 + " and the role is"+ role;
}
cl(registerUser({name1:"gajanan"}))
cl(registerUser({name1:"boss"}))

// 20. Function sumAll(a=0, ...nums) return total.

function sumAll(a=0, ...nums){
  total = a+nums.reduce((acc,cv)=>acc+=cv,0);
  return total
}
cl(sumAll(10,20,30))

// products = [
//   { id: 1, name: "Laptop", price: 45000, category: "Electronics", inStock: true },
//   { id: 2, name: "Mobile", price: 15000, category: "Electronics", inStock: false },
//   { id: 3, name: "Shirt", price: 1200, category: "Clothing", inStock: true },
//   { id: 4, name: "Shoes", price: 2500, category: "Footwear", inStock: true },
//   { id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false }
// ];
// Destruct)uring
// 21. Destructure first two products from products.
const[one,two]=products;
cl(one);
cl(two);

// 22. Destructure name and role from users[0].
// const{name,role}=users[0];
// cl(name,role)

// 23. Nested destructuring ftrom product object {category}.
// const[{category}]=products;
// cl(category)
// 24. Function param destructuring for user details.

function details1({ name = "Unknown", age = 0, role = "Guest" } = {}) {
  console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
}

details1(users);
// 25. Rename object keys while destructuring (price as cost).
// products = [
//   { id: 1, name: "Laptop", price: 45000, category: "Electronics", inStock: true },
//   { id: 2, name: "Mobile", price: 15000, category: "Electronics", inStock: false },
//   { id: 3, name: "Shirt", price: 1200, category: "Clothing", inStock: true },
//   { id: 4, name: "Shoes", price: 2500, category: "Footwear", inStock: true },
//   { id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false }
// ];
// Take the first product from the array

const { id, name, price: cost, category, inStock } =products[0];
cl(cost)



// Rest & Spread (basic)
// 26. Merge two arrays [1,2] and [3,4] with spread.

let arr=[1,2];
let arr1=[3,4];
let final=[...arr,...arr1];
cl(final)
// 27. Clone products array with spread and add new product.
let products1 = [
  { id: 1, name: "Laptop", price: 45000, category: "Electronics", inStock: true },
  { id: 2, name: "Mobile", price: 15000, category: "Electronics", inStock: false },
  { id: 3, name: "Shirt", price: 1200, category: "Clothing", inStock: true },
  { id: 4, name: "Shoes", price: 2500, category: "Footwear", inStock: true },
  { id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false }
];

let final1 = [...products1,{ id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false }]
cl(final1)
// 28. Combine two user objects with spread.
let final2 =[...products1,...final1];
cl(final2)
// 29. Use rest to collect extra function args.
function persons(name,...deatails){
  // return [name,deatails]
    return {name,deatails}
}
cl(persons("gaju","kadam",9767667877,89000))
// 30. Spread products names into new array.

let fianl3 = [...products1.map(a=>a.name)];
cl(fianl3)

//  Medium (31–70)

// Map & Set
// 31. Convert products names to Set (remove duplicates).
let result5= [new Set (products.map(a=>a.name))];
cl(result5)
// 32. Convert Set back to array.

let result6 =Array.from(result5);
cl(result6)
// 33. Create a Map of userId → userName.
// Create a new Map
const usersMap = new Map([
  [1, "Gajanan"],
  [2, "Kadam"],
  [3, "Rohit"],
  [4, "Sagar"]
]);

cl(usersMap);

// 34. Loop Map with for...of.
for(const[id,name1] of usersMap){
  cl(`id:${id},name:${name1}`)
}

// 35. Use object as Map key.
const usermap1=new Map();
const user1 = { id: 1, name: "Gajanan" };
const user2 = { id: 2, name: "Kadam" };
usermap1.set(user1,"engineer");
usermap1.set(user2,"angular-developer");
cl(usermap1)
// 36. Compare Set.size vs array.length.
const arr4 = [10, 20, 20, 40];
cl(arr4.length); 
const set = new Set([10, 20, 20, 30]);
cl(set.size);

// 37. Union of two Sets of categories.
let union= new Set([...arr4,...set])
cl(union)
// 38. Intersection of two Sets of user roles.
const roles1 = new Set(["admin", "editor", "viewer"]);
const roles2 = new Set(["editor", "viewer", "guest"]);

const intersection = new Set(
  [...roles1].filter(role => roles2.has(role))
);

cl(intersection);

// 39. Difference of two Sets.
const roles3 = new Set(["admin", "editor", "viewer"]);
const roles4= new Set(["editor", "viewer", "guest"]);

const difference = new Set(
  [...roles1].filter(role => !roles2.has(role))
);

cl(difference);

// 40. Convert Map to Object.

// Object.values / Object.entries / Descriptors
// 41. Use Object.values(products[0]).
let result41 = Object.values(products[0])
cl(result41)
// 42. Sum all product prices using Object.values().
let sumall =products.map(a=>Object.values(a)[2])
.reduce((acc,cv)=>acc+cv,0);
cl(sumall)
// 43. Iterate users with Object.entries().
let result43 = Object.entries(products[0]);
cl(result43)
// 44. Convert user object to array and back.
let toarray = Object.entries(products)
cl(toarray);
let reto = Object.fromEntries(toarray);
cl(reto)

// 45. Destructure key-value from Object.entries(users[0]).
let result45 = Object.entries(users[0]);
cl(result45)
// 46. Deep clone user object using entries.

// 47. Get descriptors of users[0].
const descriptors = Object.getOwnPropertyDescriptors(users[0]);
cl(descriptors);
// 48. Compare writable property of two objects.
// 49. Lock user object with descriptors.
// 50. Implement deep copy using descriptors.
// let products1 = [
//   { id: 1, name: "Laptop", price: 45000, category: "Electronics", inStock: true },
//   { id: 2, name: "Mobile", price: 15000, category: "Electronics", inStock: false },
//   { id: 3, name: "Shirt", price: 1200, category: "Clothing", inStock: true },
//   { id: 4, name: "Shoes", price: 2500, category: "Footwear", inStock: true },
//   { id: 5, name: "Fridge", price: 30000, category: "Electronics", inStock: false }
// ];

// for...of loop
// 51. Iterate products with for...of.
for (const product of products1) {
  console.log(`id: ${product.id} name: ${product.name} 
    price: ${product.price} category: ${product.category} inStock: ${product.inStock}`);
}

for(const p1 of products1){
  cl(p1)
}

// 52. Iterate users and print roles.
for(const usr1 of users){
  cl(usr1.role)
}
// 53. Iterate string "JavaScript" with for...of.
let str1="JavaScript";
for(st of str1){
  cl(st)
} 
// 54. Iterate Set of categories.
for(cat of products1){
  cl(`${cat.category}`)
}
// 55. Create custom iterable (range 1–5) and loop.

// const users = [
//   { id: 101, name: "Ravi", age: 25, role: "admin" },
//   { id: 102, name: "Amit", age: 28, role: "user" },
//   { id: 103, name: "Sneha", age: 22, role: "user" },
//   { id: 104, name: "Priya", age: 30, role: "manager" }
// ];
// Rest/Spread Advanced
// 56. Spread clone nested user object.
let result56Deep = JSON.parse(JSON.stringify(users));
cl(result56Deep);


// 57. Deep merge two objects (user + address).
// 58. Spread array in function call.
function add(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];
const result = add(...numbers);

cl(result);

// 59. Collect args with rest and return average.
// 60. Spread string into chars.
const word = "Hello";

const chars = [...word];

cl(chars);

// 61. Spread Set into array.
const newarr1 = new Set([10, 20, 30]);

const newarr2 = [...newarr1];

cl(newarr2);

// 62. Merge multiple arrays of product IDs.
const ids1 = [1,2,3,4];
const ids2 = [5,6,7];

const allIDs = [...ids1, ...ids2];

console.log(allIDs);

// 63. Conditional spread in array creation.
const isAdmin = true;

const menu = [
  "Home",
  "Profile",
  ...(isAdmin ? ["Admin Panel", "Settings"] : []),
  "Logout"
];

console.log(menu);

// 64. Nested rest destructuring.
const users = [
  { id: 1, name: "Ravi", age: 25 },
  { id: 2, name: "Sneha", age: 22 },
  { id: 3, name: "Amit", age: 28 }
];

const [first, ...others] = users;

cl(first); 
cl(others); 

// 65. Rest in object destructuring (take unknown keys).
const users = [
  { id: 1, name: "Ravi", age: 25 },
  { id: 2, name: "Sneha", age: 22 },
  { id: 3, name: "Amit", age: 28 }
];

const [first1, ...others1] = users;

cl(first); 
cl(others); 
// Combined Concepts
// 66. Destructure with default param in function args ({role="guest"}).
function greetUser({ name, role = "guest" }) {
  cl(`Hello ${name}, your role is ${role}`);
}

greetUser({ name: "Ravi", role: "admin" });
greetUser({ name: "Sneha" });              

// 67. Use arrow + template literals to show user greeting.
const greetUser = (user) => `Hello ${user.name}, your role is ${user.role || "guest"}`;

const use1 = { name: "Ravi", role: "admin" };
const use2 = { name: "Sneha" }; 

cl(greetUser(use1)); 
cl(greetUser(use2)); 

// 68. Spread operator + map to duplicate product prices.
let doubledPrices = products1.map(product => ({ 
  ...product,         
  price: product.price * 2  
}));

cl(doubledPrices);

// 69. Convert array of users into object {id: name}.
const usersObj2 = Object.fromEntries(users.map(u => [u.id, u.name]));

cl(usersObj2);

// 70. Use for...of with async/await over product promises.


//  Advanced (71–100)

// 71. Implement deep freeze using descriptors.
// 72. Build frequency counter of product categories using Map.
// 73. Function to find unique roles with Set + spread.
// 74. Tagged template for currency formatting.
// 75. Polyfill Object.values().
// 76. Polyfill Object.entries().
// 77. Function to merge N objects with spread.
// 78. Convert Map of products → array of template strings.
// 79. Use destructuring + rest to separate id and rest of user.
// 80. Function to calculate average product price using rest.
// 81. Clone object with descriptors (custom utility).
// 82. Deep merge arrays of product objects.
// 83. Use Map as LRU cache.
// 84. Check if username string has duplicate chars with Set.
// 85. Retry logic with default param (retries=3).
// 86. Async arrow with default param.
// 87. Convert user object → query string using Object.entries().
// 88. Parse query string back to object.
// 89. Build iterable class for product collection.
// 90. Use Map + template literal for SQL insert query.
// 91. Group products by category using Map.
// 92. Count product stock status with Map + for...of.
// 93. Partial application function using spread/rest.
// 94. Logger utility with template literals + default params.
// 95. Object differ utility using entries.
// 96. Make user object property read-only with descriptors.
// 97. Recursive clone with descriptors + spread.
// 98. Word counter for string using Set.
// 99. Async iterable generator with for...of.
// 100. CRUD mini-task with Map/Set storing products in memory.
