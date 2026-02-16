export class Person {
        firstname : string ='';
        lastname : string ='';
        static COUNTRY : string = 'THAILAND' ;
        private age : number = 0 ;

    getFullName(): string {
    return`${this.firstname} ${this.lastname}`
}
    setAge(age:number){
    this.age = age
}
    getAge():number {
    return this.age
}
}
