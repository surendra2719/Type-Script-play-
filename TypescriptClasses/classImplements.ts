interface IEmp {
    nameEmp: String
    displayedInformation()
    /**
   * we  have to call these method beacuse we are creating object by these interface 
   */
}
interface IPerson {
    codeEmp: number
}
class Employees implements IEmp, IPerson {
    nameEmp: String;
    codeEmp: number;
    constructor(name: String, code: number) {
        this.nameEmp = name,
            this.codeEmp = code
    }
    displayedInformation(): void {
        console.log('Name--' + this.nameEmp + 'code-----' + this.codeEmp);

    }
}
let employed: IEmp = new Employees('surendra', 1234)
employed.displayedInformation()
/**
 * creating object through IEmp interface
 */

let employeed: IPerson = new Employees('SURENDRA', 5678)
employed.displayedInformation()
console.log('Iperson',employeed);

/**
 * creating object through IPerson interface
 */