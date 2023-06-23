 

 function validation(){
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

   // we can use a regex pattern to check that the password meets the minimum length requirement and contains at least one upper case letter, one lower case letter,one number, and one special character.

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

     let result = regex.test(password);
     console.log(result);

     if(result){
        document.getElementById('userPasswordError').innerHTML = " ";
     }else{
        document.getElementById('userPasswordError').innerHTML = "** Password is invalid ";
        document.getElementById('formId').reset()
        return false;

     }
    

 }


 