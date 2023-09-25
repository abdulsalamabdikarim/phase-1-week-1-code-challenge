
//The function grades has one parameter (which is studentMarks).
let grade; // initialized grade variable
function grades(studentMarks){
/*==> The If statement sets the boundaries for the marks to be accepted as arguments
      to the function(between 0 and 100).
  ==> The nested if then defines the grade boundaries and prints out the grade attained.*/
    if(studentMarks >= 0 && studentMarks <=100){
        if(studentMarks > 79){
            grade = `A`;
        } else if(studentMarks >= 60 && studentMarks <= 79){
            grade = `B`;
        } else if(studentMarks > 49 && studentMarks <= 59){
            grade = `C`;
        } else if(studentMarks >= 40 && studentMarks <= 49){
            grade = `D`;
        } else if(studentMarks < 40 ){
            grade = `E`;
        }
    } else {
        // if studentMarks input as the argument is not between 0 and 100.
        console.log(`Invalid input.`);
    }
return grade;
}
//==== Example function calls ====
grades(101);
grades(-1);
console.log(grades(80));
console.log(grades(79));
console.log(grades(69));
console.log(grades(59));
console.log(grades(49));
console.log(grades(39));
console.log(grade);