const optionOne = document.getElementById ("firstOption")
const optionTwo = document.getElementById ("secondOption")
const optionTree = document.getElementById ("thirdOption")
const optionFour = document.getElementById ("fourOption")
const optionFive = document.getElementById ("fiveOption")
const square = document.getElementById ("magicSquare")


const changeSquare = () =>{
     square.src = "../html/perfilpg.html"  
}

const changeForFinancial = () => {
     square.src = "../html/financeiro.html"
}

const changeForContrato = () => {
     square.src = "../html/meuContrato.html"
}

const changeForDrivers = () => {
     square.src = "../html/motoristas.html"
}

const changeForSuporte = () => {
     square.src = "../html/suporte.html"
}


optionOne.addEventListener("click", changeSquare)
optionTwo.addEventListener("click", changeForFinancial)
optionTree.addEventListener("click", changeForContrato)
optionFour.addEventListener("click", changeForDrivers)
optionFive.addEventListener("click", changeForSuporte)









