import User from "./user.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

// const novoUser = new User ('Larissa', 'l@l.com', '1996-18-08')
// console.log(novoUser.exibirInfos())

//const novoAdmin = new Admin ('Vinicius', 'v@v.com', '2023-05-05')
//console.log(novoAdmin.exibirInfos())

// const novoAdmin = new Admin ('Vinicius', 'v@v.com', '2023-05-05')
// console.log(novoAdmin.nome)
//chamada da função getter
//deve ser chamada como uma propriedade sem os parenteses

const novoAdmin = new Admin ('Vinicius', 'v@v.com', '2023-05-05')
console.log(novoAdmin.nome)
novoAdmin.nome = 'Bruno'
console.log(novoAdmin.nome)