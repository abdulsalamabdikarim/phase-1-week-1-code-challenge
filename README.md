TITLE : PHASE-1-WEEK-1-CODE CHALLENGE.
AUTHOR: ABDULSALAM ABDIKARIM ADAN.

The code challenge consisted of three problems;
==> Student Grade Generator
==> Speed Detector
==> Net Salary Calculator

[x] STUDENT GRADE GENERATOR
The first problem required one to write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

SOLUTION:
The function "grades" takes one parameter (which is studentMarks). An If statement then sets the boundaries for the function parameter (it should be a number between 0 and 100). If the argument passed falls within the boundaries then the value is passed to a nested if statement that defines the grade boundaries and determines the grade attained.The function then returns the value of "grade".
If the argument passed does not fall within the boundaries, the function outputs a message saying "Invalid input.".


[x] SPEED DETECTOR
The second problem required one to write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

SOLUTION:
The function "speedDetector" takes one parameter (which is speed). For speeds below 70, the function prints to the screen the message "Ok". For speeds above the speed limit(70), then for every interval of increase by five km/h,the value is pushed into an array called intervalOfFive, using a for loop. The length of this array is what is then used to determine the number of demerit points, since the addition of every new element into the array indicates that the driver has incurred another demerit point by exceeding the speed limit by a further 5 km/h.
With every demerit point earned, the function prints out the new total. When the points exceed 12, the function prints the message "License suspended."

[x] NET SALARY CALCULATOR
The third problem required one to Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

SOLUTION:
The function "calculateNetSalary" takes two parameters (basicSalary & benefits) which it then uses to determine the gross salary of the individual,from which the other values are then going to be calculated.
An "If-statement" determines the PAYE tax amount using the latest rates set. Then another If-statement" determines the health insurance premium, also using the latest rates set. Finally another "If-statement" determines the NSSF deduuction amount using the latest rates set as well.
After these amounts are determined, the total deductions are then calculated and used to determine the net salary by subtracting the total deductions(after subtracting personal relief). from the gross salary. All these amounts are printed to the screen after being calculated.
The function then returns the individual's net salary.

