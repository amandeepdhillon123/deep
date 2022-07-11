let arr= JSON.parse(localStorage.getItem("sign")) ;
 
function subForm(e){
    e.preventDefault();
  //  console.log("aman");

   let form=document.getElementById("sub");
 let name= form.name.value;
 let email=form.email.value;
 let password=form.password.value;

 console.log(name,email,password)

 let ram={
    
   name:document.querySelector("#name").value,
   email:document.querySelector("#email").value,
   password:document.querySelector("#password").value,
 }
 console.log(ram)
//  arr.push(ram)
//  console.log(arr)

 localStorage.setItem("sign",JSON.stringify(ram));
//  window.location.reload();


}