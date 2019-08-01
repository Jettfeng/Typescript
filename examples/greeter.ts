class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = this.lastName
        this.fullName = firstName + " " + lastName
    }
}
interface Person { //接口就是对对象结构的描述
    firstName: string
    lastName: string
}
function gretter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName
}
let user: Person = {
    firstName: 'Yee',
    lastName: 'Huang'
}
console.log(gretter(user));

let user1 = new User('Yee', 'Huang')
