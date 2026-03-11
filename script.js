let botoes = document.querySelectorAll("button")

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