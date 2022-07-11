

let getData=JSON.parse(localStorage.getItem("sign")) || [];

function subFun(e){
    e.preventDefault();
    console.log("amandeep")

    var enterEmail=document.querySelector("#email");
    var pass=document.querySelector("#password");

    for(var i=0; i<getData.length; i++)
    {
        console.log(gatData[i])
    }

}
