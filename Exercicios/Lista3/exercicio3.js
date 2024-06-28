//Exercitando um pouco mais sobre condicionais e operadores lógicos.
let usuarioLogado;
let permissaoAdm = false;

//Condicional que verifica se as condições de usuário estar logado e se o usuario tem permissão de administrador são simultaneamente verdadeiras
if (usuarioLogado && permissaoAdm) {
    console.log("Bem vindo")
} else if (usuarioLogado == false) {
    console.log("Usuário não está logado")
} else if (permissaoAdm == false) {
    console.log("Você não possui permissão para fazer isso");
}