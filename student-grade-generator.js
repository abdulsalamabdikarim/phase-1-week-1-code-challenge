
//The function grades has one parameter (which is studentMarks).
function grades(studentMarks){
/*==> The If statement sets the boundaries for the marks to be accepted as arguments
      to the function(between 0 and 100).
  ==> The nested if then defines the grade boundaries and prints out the grade attained.*/
    if(studentMarks >= 0 && studentMarks <=100){
        if(studentMarks > 79){
            console.log(`Grade: A`);
        } else if(studentMarks >= 60 && studentMarks <= 79){
            console.log(`Grade: B`);
        } else if(studentMarks > 49 && studentMarks <= 59){
            console.log(`Grade: C`);
        } else if(studentMarks >= 40 && studentMarks <= 49){
            console.log(`Grade: D`);
        } else if(studentMarks < 40 ){
            console.log(`Grade: E`);
        }
    } else {
        // if studentMarks input as the argument is not between 0 and 100.
        console.log(`Invalid input.`);
    }
}
//==== Example function calls ====
grades(101);
grades(-1);
grades(80);
grades(79);
grades(69);
grades(59);
grades(49);
grades(39);