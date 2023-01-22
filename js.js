function validar() {

    var formValido = true;
    var spanValido = document.getElementById("fValido");
    var nome = document.getElementById("nome");
    var spanNome = document.getElementById("spanNome");
    var telefone = document.getElementById("telefone");
    var spanTelefone = document.getElementById("spanTelefone");
    var email = document.getElementById("email");
    var spanEmail = document.getElementById("spanEmail");
    var spanApoio = document.getElementById("spanApoio");
    var texto = document.getElementById("texto");
    var spanTexto = document.getElementById("spanTexto");
    var radio;

    spanNome.textContent = "";
    spanTelefone.textContent = "";
    spanEmail.textContent = "";
    spanApoio.textContent = "";
    spanTexto.textContent = "";

    if (nome.value == "") {
        spanNome.textContent = 'Nome obrigatório';
        formValido = false;
    }

    if (telefone.value == "") {
        spanTelefone.textContent = 'Telefone obrigatório';
        formValido = false;
    }

    if (email.value == "") {
        spanEmail.textContent = 'Email obrigatório';
        formValido = false;
    }

    if ((!document.getElementById('ajV').checked) && (!document.getElementById('ajD').checked) && (!document.getElementById('ntI').checked)) {
        spanApoio.textContent = 'Selecione uma das opções acima!';
        formValido = false;
    }

    if (texto.value == "") {
        spanTexto.textContent = 'Campo obrigatório!';
        formValido = false;
    }

    if (formValido) {
        var contin = document.getElementById('continentes');
        contSelec = contin.options[contin.selectedIndex].text;

        const radios = document.getElementsByName('ajuda');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                radio = radios[i].value
                break;
            }
        }

        document.getElementById("legenda").textContent = 'Dados'
        document.getElementById("dados1").textContent = `Nome: ${nome.value}`;
        document.getElementById("dados2").textContent = `Telefone: ${telefone.value}`;
        document.getElementById("dados3").textContent = `Email: ${email.value}`;
        document.getElementById("dados4").textContent = `Interesse(s) específico: `;
        if (document.getElementById('Causa1').checked) {
            document.getElementById("dados4").textContent += document.getElementById("Causa1").value;
        }
        if (document.getElementById('Causa2').checked) {
            document.getElementById("dados4").textContent += ' ' + document.getElementById("Causa2").value;
        }
        if (document.getElementById('Causa3').checked) {
            document.getElementById("dados4").textContent += ' ' + document.getElementById("Causa3").value;
        }
        if (document.getElementById('Causa4').checked) {
            document.getElementById("dados4").textContent += ' ' + document.getElementById("Causa4").value;
        }
        document.getElementById("dados5").textContent = `Região: ${contSelec}`;
        document.getElementById("dados6").textContent = `Deseja apoiar? ${radio}`;
        document.getElementById("dados7").textContent = `Motivo do contato: ${texto.value}`;
        $("#modal-mensagem").modal();
    }
}

function resetar(){
    document.getElementById("formulario").reset();
}