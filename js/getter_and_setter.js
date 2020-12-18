
let koder = {
    name : "Alejandra",
    lastName: "Paez",
    fullName: function() {
        return this.name + " " + this.lastName;
    },
    dateOfBirth: "10/02/1996",
    get age() {
        let date = this.dateOfBirth.slice(this.dateOfBirth.length -4);
        return `${this.fullName()} tiene ${2020 - date} años`;
    },
    month : 2,
    get howManyToThirty() {
        console.log(`A ${this.fullName()} le faltan ${30 - this.age} años para llegar a los 30`);
    },
    get howManyToFinish() {
       console.log(`A ${this.fullName()} va en el ${this.month} mes del curso le faltan ${6 - this.month} meses`);
    },
};

console.log(koder.fullName);
koder.howManyToThirty;
koder.howManyToFinish;
console.log(koder.age);
