// const btn = document.querySelector("button")
// const txt =  document.getElementById("text")
// btn.addEventListener("click" , ()=>{
//     txt.style.color="red"
// })

/////////////////////////////////////////////////////

// const btn = document.querySelector("button")
// const inp = document.querySelector("input")
// btn.addEventListener("click" , ()=>{
//     event.preventDefault();
//     let input = inp.value

//     let probelInd = input.indexOf(" ");
//     let name = input.substring(0, probelInd);
//     let lname= input.substring(probelInd+1);
//     let obj = {
//         name: name,
//         lname : lname,
//     }
//     console.log(obj);
    
// })

/////////////////////////////////////////////////////

// function hisobla() {
//     let birinchiSon = +document.getElementById("qoshuvchi").value;
//     let ikkinchiSon = +document.getElementById("qoshilinma").value;
    
//     let sum = birinchiSon + ikkinchiSon; 

//     document.querySelector("h2").innerHTML+=sum
// }


////////////////////////////////////////////////


// let btn = document.querySelector("button")
// let h1=document.querySelector("h1")
// btn.addEventListener("click", ()=>{
//     let num=Math.trunc(Math.random()*100)
//     if (num%2==0) {
//         h1.classList.add("red")
//         h1.classList.remove("blue")
//     }
//     else{
//         h1.classList.add("blue")
//         h1.classList.remove("red")
//     }
//     h1.innerHTML=num
// })