export class Person {
        firstname : string ;
        lastname : string ;
        private COUNTRY : string ;
        age : number


    constructor (firstname : string, lastname : string,age : number){
        this.firstname = firstname
        this.lastname = lastname
        this.COUNTRY = 'THAILAND'
        this.age = age

    }
        getFullName(): string {
    return this.firstname +  this.lastname
}

getAge():number {
    return this.age
}
setAge():number{
return this.age
}
}
