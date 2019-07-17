
class Persons {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class jobs extends Persons {
    code: number
    constructor(code: number, name: string) {
        super(name)
        this.name = name
        this.code = code;

    }
    display(): void {
        console.log("Name---"+this.name +"    "+ 'EmpCode ---- ' + this.code);

    }
}
let newempy = new jobs(1234, 'surendra')
newempy.display()
console.log('employee',newemp);
