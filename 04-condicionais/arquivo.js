const dados = '{"usuario":"Misael","idade":21,"cadastro":true}'
const usuario = JSON.parse(dados);

if (usuario.idade >= 18 && usuario.cadastro === true){
    console.log("acesso liberado")
}else {
    console.log("acesso negado")
}

