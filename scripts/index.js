
let array= JSON.parse(localStorage.getItem("listOfRoom")) || [] ;

async function showhotel()
{
    let query=document.querySelector("#query").value
    // console.log(query)
    try{
        let res = await fetch (`https://masai-mock-api.herokuapp.com/hotels/search?city=goa`)
    //    console.log(res)

    let data= await res.json();
    // console.log(data.hotels)
    final=data.hotels
    console.log(final)
    appendData(final);
    }
    catch(err){
        console.log("err",err)
    }
}
showhotel();

function appendData(final){

  final.forEach((elem) => {
    let div=document.createElement("div")
    div.setAttribute("id","box")

    let image=document.createElement("img")
    image.src=elem.Images.one;
    image.setAttribute("id","img")
    // image.src=elem.Images.two;

    let title=document.createElement("h4");
    title.innerText=elem.Title;

    let price=document.createElement("p");
    price.innerText=`Price per roo Rs ${elem.Price}`

       let rating=document.createElement("p");
    rating.innerText= ` Rating :${elem.Rating}`;
   
    let btn=document.createElement("button")
    btn.innerText="Book now"
   

    let ac=document.createElement("p");
    ac.innerText=` Ac :${elem.Ac}`;

    div.append(image,title,price,ac,rating,btn)
    document.querySelector("#hotels_list").append(div)

  });
}
