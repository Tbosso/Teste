var SetaDireita = window.document.getElementById("setadireita")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    Bruna.style ="display:none"
    Samantha.style ="display:flex"

    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:55px"

}

function RolarParaEsquerda() {

    Bruna.style ="display:flex"
    Samantha.style ="display:none"
    SetaDireita.style = "display:flex; margin-top:55px"
    SetaEsquerda.style ="display:none"
    
}
    






