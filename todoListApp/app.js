const add = document.querySelector('.create');
const inputTask = document.querySelector('.new.list');
const taskList = document.querySelector('.task-list');

const formTask = document.getElementById('addTodoListForm');


formTask.addEventListener('submit', (e)=> {
    e.preventDefault();
    const inputValue = inputTask.value;
    if(inputValue === ""){
        alert("Enter the task in input field")
       
    } else{
        saveTodo(inputValue); //Save Function
    }
       

}
)

function saveTodo(task){
    // console.log(task);
 


    const todoLi = document.createElement("li");
    todoLi.classList.add("list-name");
  
    const todoP = document.createElement("p");
    todoP.classList.add("task-complted");
    todoP.innerHTML = task;
  
    todoLi.appendChild(todoP)
  
    taskList.appendChild(todoLi)

    

    //edit button for task

    const todoEdit = document.createElement("button");
    todoEdit.classList.add("task-edit");
    todoEdit.innerHTML = "Edit"
    todoLi.appendChild(todoEdit)

 // done task
    const todoDone = document.createElement("button");
    todoDone.classList.add("task-done");
    todoDone.innerHTML = "Done"
    todoLi.appendChild(todoDone)

    //delete button for task

    const todoDelete = document.createElement("button");
    todoDelete.classList.add("task-delete");
    todoDelete.innerHTML = "Delete"
    todoLi.appendChild(todoDelete)

   
    inputTask.value = ""
    inputTask.focus();


}


const functionaltiy = (e) =>{
    //  console.log(e.target.innerHTML);

    if(e.target.innerHTML === "Delete"){
        console.log(e.target.parentElement);
        taskList.removeChild(e.target.parentElement)
    }

    if(e.target.innerHTML === "Edit"){
        console.log(e.target.previousElementSibling.innerHTML);
        e.target.previousElementSibling.innerHTML 
        console.log( document.querySelector('p').innerText);
      
    }


    if(e.target.innerHTML === "Done"){
        if(e.target.previousElementSibling.previousElementSibling){
            document.querySelector('.task-complted')
        }
       
    }

    
}


taskList.addEventListener('click', functionaltiy)








    








