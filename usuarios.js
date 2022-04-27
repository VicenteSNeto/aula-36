
let usuarios = [
{

    nome: "Vicente",
    sobrenome: "Saraiva",
    idade: "29",
    email: "institutional@qooue.com"

}

];


for (const usuario of usuarios) {


    for (const propriedade in usuario) {


        console.log(usuario[propriedade])
    }
}