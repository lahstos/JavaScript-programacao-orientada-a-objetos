export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    //função getter

    get nome () {
        //pode ter lógica de condicional
        return this.#nome
    }
   
    get email () {
        return this.#nome
    }

    get nascimento () {
        return this.#nome
    }

    get role () {
        return this.#nome
    }

    get at () {
        return this.#nome
    }

    //set aceita apenas um parametro que vai ser aterado
    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato nã válido')
        }
        this.#nome = novoNome
    }

//LGPD
//     #montaObjUser() {
//         return({
//             nome: this.#nome,
//             email: this.#email,
//             nascimento: this.#nascimento,
//             role: this.#role,
//             ativo: this.#ativo
//         })
//     }

//LGPD
    exibirInfos () { 
        // const objUser = this.#montaObjUser ()
        // return `${objUser.nome}, ${objUser.email},  ${objUser.nascimento},  ${objUser.role},  ${objUser.ativo}`
        return `${this.nome}, ${this.email},  ${this.nascimento},  ${this.role},  ${this.ativo}`
    }
}
