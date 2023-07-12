let searchable = [
    'Elastic',
    'PHP',
    'Something about CSS',
    'How to code',
    'JavaScript',
    'Coding',
    'Some other item',
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


const searchInput = document.getElementById('search');
console.log(searchInput);
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');





searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    // console.log(results);
    renderResults(results);
  });



function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join('');

  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;

    selectedItems(resultsWrapper)
  } 

function selectedItems(resultsWrapper){
   console.log(resultsWrapper);
   const li = document.querySelectorAll('li')
   console.log(li);

   [...li].forEach((item => {
      item.addEventListener('click', ()=> {
      const seletedItem = item.innerText
      console.log(seletedItem);
     searchInput.value = seletedItem;
     searchWrapper.classList.remove('show');
 
   
  })
}))






}
  



 

  
  


  