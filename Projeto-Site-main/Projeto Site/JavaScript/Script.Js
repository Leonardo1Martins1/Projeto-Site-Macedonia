function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    
    alert("Formulário enviado com sucesso!");
    return true;
}

function mostrarOcultarTexto() {
    var texto = document.getElementById("textoReferencia");
    var botao = document.getElementById("botaoReferencia");
    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.textContent = "Ocultar Referência";
    } else {
        texto.style.display = "none";
        botao.textContent = "Mostrar Referência";
    }
}

function mostrarModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.querySelector(".imagemModal");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}



function mostrarOcultarTexto() {
    var texto = document.getElementById("textoReferencia");
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}

// Funções para a galeria de imagens (modal)
function mostrarModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.querySelector(".imagemModal");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


