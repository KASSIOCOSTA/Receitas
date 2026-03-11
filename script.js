let botoes = document.querySelectorAll("button")
const doce = document.getElementById("btn-doce")
const salgado = document.getElementById("btn-salgado")
const receitasDoce =document.querySelector(".receitas-doces")
const receitasSalgado =document.querySelector(".receitas-salgados")

doce.addEventListener("click",function(){
    if(receitasDoce.style.display === "none"){
        receitasDoce.style.display = "block"
        receitasSalgado.style.display = "none"
        doce.innerText = "Fechar"

    }else{
        receitasDoce.style.display = "none"
        doce.innerText = "Doces"


    }
})
salgado.addEventListener("click",function(){
    if(receitasSalgado.style.display === "none"){
        receitasSalgado.style.display = "block"
        receitasDoce.style.display = "none"
        salgado.innerText = "Fechar"


    }else{
        receitasSalgado.style.display = "none"
        salgado.innerText = "Salgados"


    }
})



botoes.forEach(function(botao){

    botao.addEventListener("click",function(){

        const base = botao.parentElement
        let ingredientes = base.nextElementSibling

        if(ingredientes.style.display === "none"){
            ingredientes.style.display = "block"
            base.style.borderRadius = "15px 15px 0 0"
            botao.innerText = "Fechar"
        }
        else{
            ingredientes.style.display = "none"
            base.style.borderRadius = "15px"
            botao.innerText = "Abrir"
        }

    })

})