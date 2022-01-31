class Animal{

    dob:string;
    weight:number;
    legs:number;

    constructor(dob:string, weight:number, legs:number){
        this.dob=dob;
        this.weight=weight;
        this.legs=weight;
    }
Information():string{
    return "Hello ";
}
}

let a = new Animal("01/01/00", 90, 4);

console.log(a.dob);

