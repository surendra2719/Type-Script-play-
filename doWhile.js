var i = 5;
while (i < 10) {
    console.log('while loop -------', +i);
    // code block excuted inside through while condition
    i++;
}
// =============================do While=======================
var i1 = 11;
do {
    console.log("inside do ", +i1);
    i1++;
    // it will check first inside do and next it wiil go for while conditiondepend upon on the condition it wiil gp inside go to incremet/decrement
} while (i1 < 10);
// ==================do while another scenario============
var i2 = 4;
do {
    console.log('scenario do loop', +i2);
} while (i2 < 4);
