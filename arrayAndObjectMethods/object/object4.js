let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("Hello!");
  };
  
//   user.sayHi(); // Hello!

/**
 * Of course, we could use a pre-declared function as a method, like this:
 */

let user = {
    name: "John",
    age: 30
  };
  
  // first, declare
  function sayHi() {
    alert("Hello!");
  }
  
  // then add as a method
  user.sayHi = sayHi;
  
//   user.sayHi(); // Hello!


// Method shorthand

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };