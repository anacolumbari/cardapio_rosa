//1. selecionar os elementos importantes ( botao, mensagem)
//2. verificar se o app pode ser instalado
//3. adicionar o evento de instalacao no botao
//4. verificar se a instalacao deu certo 

//1
const botaoInstalar = document.getElementById("install-button");
const msgInstalar = document.getElementById("install-message");
let eventoInstalacao = null;

//2
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    eventoInstalacao = event;
    botaoInstalar.hidden = false;
    msgInstalar.textContent = "essa aplicada pode ser instalada";
});

//3
botaoInstalar.addEventListener("click", ()=>{
    if(!eventoInstalacao){
        return;
    }

    eventoInstalacao.prompt();
    botaoInstalar.hidden = true;
});

//4
window.addEventListener("appinstalled", ()=>{
    msgInstalar.textContent= "O app foi instalado com sucesso. Voce ja pode abrir o aplicativo";
    botaoInstalar.hidden = true;
    eventoInstalacao = null;
});