// let user = new Object(); // "object constructor" syntax


// let user1 = {};  // "object literal" syntax

// let user2 = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };

let user = {
    name: "John",
    age: 30
  };

  
  // access by variable
//   console.log(user["name"]); // John (if enter "name")
//   console.log(user.name);


//   function makeUser(name, age) {
//     return {
//       name: name,//name
//       age: age,//age
//       // ...other properties
//     };
//   }
  
//   let user = makeUser("John", 30);
//   console.log(user.name); // John

/**
 * how for loop for object ( for in)
 */
for (let value in user) {
    // keys
    console.log( value );  // name, age
    // values for the keys
   
}


  for (let value in user) {
    // keys
    console.log( user[value] );  // john, 30
    // values for the keys
   
  }