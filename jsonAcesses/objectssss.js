
var obj = {};
// Object.keys(object.SurveyData).forEach(function(rec, index){
//      obj[rec] =  object.SurveyData[rec];
// })
var transcript = [{
    "question": "Select any one of the option",
    "answer": "I want to make the payment"
}, {
    "question": "Select any one of the option",
    "answer": "I want to make the payment"
}, {
    "question": "Select any one of the option",
    "answer": "I want to make the payment"
}]
for (let index = 0; index < transcript.length; index++) {
    // const element = transcript[index];
    // console.log('inside',index);
    var questionData = "q" + (parseInt(index) +1);
    // console.log(qdata);
    obj[questionData] = transcript[index]
}
var object = {
    "ModuleId": "112",
    "ClientId": "111",
    "EmployeeCode": "284",
    "SessionKey": "1",
    "SurveyId": "12",
    "SurveyData": obj
}
console.log("obbject", object);

                             

    // const persons = [
    //     { name: 'Peter', age: 16 },
    //     { name: 'Mark', age: 18 },
    //     { name: 'John', age: 27 },
    //     { name: 'Jane', age: 14 },
    //     { name: 'Tony', age: 24},
    //   ];
    //   const fullAge = {};
    //   for(let i = 0; i < persons.length; i++) {
        // if(persons[i].age >= 18) {
        //   fullAge.push({persons:persons[i]});
    //       fullAge['p'+i]=persons[i]
    //     }
    //   }
    //   console.log(fullAge);
    
