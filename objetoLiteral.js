const user = {
    nome: "Larissa",
    email: "larissa.ls85@gmail.com",
    nascimento: "18/08/1996",
    //role: "admin",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Bruna",
    email: "b@b.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()



//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()

//const exibir = function() {
//   console.log(this.nome)
//}

//const exibirNome = exibir.bind(user)
//exibirNome()
//exibir()