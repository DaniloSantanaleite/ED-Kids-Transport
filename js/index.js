const optionOne = document.getElementById ("firstOption")
const square = document.getElementById ("magicSquare")
const btnvolta = document.getElementById("backbtn")

const changeSquare = () =>{
     square.src = "../html/perfilpg.html"  
}

const clickAndBack = () => {
     square.src = "../html/welcomepg.html"
}


optionOne.addEventListener("click", changeSquare)
btnvolta.addEventListener("click",clickAndBack)




