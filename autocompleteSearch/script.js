let keywords = [
    "Ayla",
    "Jake",
    "Sean",
    "Henry",
    "Brad",
    "Stephen",
    "Taylor",
    "Timmy",
    "Cathy",
    "John",
    "Amanda",
    "Amara",
    "Sam",
    "Sandy",
    "Danny",
    "Ellen",
    "Camille",
    "Chloe",
    "Emily",
    "Nadia",
    "Mitchell",
    "Harvey",
    "Lucy",
    "Amy",
    "Glen",
    "Peter",
  ];


  const ulList = document.querySelector('.list')
  const inputBox = document.querySelector('#inputBox')

  let sortedNames = keywords.sort();
     

  inputBox.addEventListener("keyup", searching)

  function searching(){
    // console.log("ok");
    let result = [];
    let inputValue = inputBox.value 
    console.log(inputValue);
    if(inputValue.length){
        result = keywords.filter((keyword) => {
            return keyword.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        });
        // console.log(result);
    }
    display(result);

  }

  function display(result){
    console.log(result);
    const content = result.map((list) => {
        // console.log(list);

    const liItem = document.createElement('li')
     liItem.innerText = list;
     liItem.classList.add("list-items");
     console.log(liItem);
     ulList.appendChild(liItem)
  
    })
  
   


   

  }