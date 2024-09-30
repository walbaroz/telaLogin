const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

let tentativas = 0 // contador de tentativas

frm.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // verifica se o número de tentativas já chegou em 3 tentativas
    if (tentativas >= 3) {
        resp.innerText = `Você excedeu o número de 3 tentativas.\nTenta mais tarde!`
        resp.style.color = "red"
        return;
    }

    const usuario = frm.inNome.value;
    const senha = Number(frm.inSenha.value);
    
    if (usuario == "walbaroz" && senha == 12345) {
        resp.innerText = `Bem vindo ${usuario}!`
        resp.style.color = "green";
        tentativas = 0; // reseta o contador caso correto
    } else {
        tentativas ++; // incrementa mais um ao contador em caso de falha
        resp.innerText = `Usuário ou Senha inválida!\n Tentativas restantes: ${3-tentativas}x.`;
        resp.style.color = "red";
    }
})

frm.addEventListener("reset", () => {
    resp.innerText = "";
})