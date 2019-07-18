var subject = {
    surendra: {
        surendra: "SURENDRA"
    }
}
console.log(subject.surendra);
/**
 * object with single method
 * 
 */
var objMethod =
{
    dispaly: function obj(params) {
        console.log(params + "----------");

    }
}
/**
 * object accesing 
 */
var newObject = {

    firstName: "surendra",
    lastName: "kumar",
    companyName: "Autonom8",
    employeeId: [
        { id: 1234 }, { id: 23456 }
    ]

}

// console.log(newObject)
for (i = 0; i < newObject.employeeId.length; i++)
    console.log(
        '----', newObject.employeeId[i]
    );

/**
 * ----------------------------------------------------------------------------
 */

var newObjects = {}
var newObjects = new Object
/**
 *----- these is second type  of declration in  object  defining
 */
newObjects.firstNames = "surendra",
    newObjects.lastNames = 'kumar',
    newObjects.employeeIds = 12364
newObject["company"] = "Autonom8"
console.log('--------declaration two-----------', newObjects);
/**
 * =======================================================================
 */


/**
 * 
 * @param {*} name 
 * @param {*} jobtitle 
 * @param {*} born 
 */


function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
}
employee.prototype.salary = 2000;

var fred = new employee("Fred Flintstone", "Caveman", 1970);
console.log('proptotype', fred);
/**
 * --------------------------object refrence--------------------------------------
 */
var person = { firstName: "John" };

var anotherPerson = person;

anotherPerson.firstName = "Bill";

person.firstName; 
console.log('object refernce',anotherPerson);
