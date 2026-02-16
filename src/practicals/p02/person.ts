export class Person {
        firstname : string ='';
        lastname : string ='';
        static COUNTRY : string = 'THAILAND' ;
        private age : number = 0 ;

    getFullName(): void {
    console.log(`${this.firstname} ${this.lastname}`)
}
    setAge(age:number){
    this.age = age
}
    getAge():number {
    return this.age
}
}
