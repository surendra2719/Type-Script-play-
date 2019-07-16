var DemoObject = /** @class */ (function () {
    function DemoObject(name, code) {
        this.empName = name,
            this.empId = code;
    }
    return DemoObject;
}());
var obj = new DemoObject("surendra", 1234);
console.log("-------object--------", obj);
