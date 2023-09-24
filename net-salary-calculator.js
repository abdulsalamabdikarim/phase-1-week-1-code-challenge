
/*==> The function calculateNetSalary takes two parameters(basicSalary & benefits)
      which it then uses to determine the gross salary of the individual,from which
      the other values will be calculated.*/
function calculateNetSalary(basicSalary,benefits){
    grossSalary = basicSalary + benefits;
    housingLevy = (1.5/100) * grossSalary;
    personalRelief = 2400;

/*==> PAYE CALCULATION: An "If-statement" determines the PAYE tax amount using 
      the latest rates set.*/
    if(grossSalary >= 0 && grossSalary <= 24000){
        paye = (10/100) * grossSalary;
    } else if(grossSalary > 24000  && grossSalary <= 32333){
        paye = (25/100) * grossSalary;
    } else if(grossSalary > 32334  && grossSalary <= 500000){
        paye = (30/100) * grossSalary;
    } else if(grossSalary > 500001  && grossSalary <= 800000){
        paye = (32.5/100) * grossSalary;
    } else{
        paye = (35/100) * grossSalary;
    }
/*==> NHIF CALCULATION: "If-statement" determines the health insurance 
      premium using the latest rates set.*/
    if(grossSalary >= 0 && grossSalary <= 5999){
        nhif = 150;
    } else if(grossSalary > 6000  && grossSalary <= 7999){
        nhif = 300;
    } else if(grossSalary > 8000  && grossSalary <= 11999){
        nhif = 400;
    } else if(grossSalary > 12000  && grossSalary <= 14999){
        nhif = 500;
    } else if(grossSalary > 15000  && grossSalary <= 19999){
        nhif = 600;
    } else if(grossSalary > 20000  && grossSalary <= 24999){
        nhif = 750;
    } else if(grossSalary > 25000  && grossSalary <= 29999){
        nhif = 850;
    } else if(grossSalary > 30000  && grossSalary <= 34999){
        nhif = 900;
    } else if(grossSalary > 35000  && grossSalary <= 39999){
        nhif = 950;
    } else if(grossSalary > 40000  && grossSalary <= 44999){
        nhif = 1000;
    } else if(grossSalary > 45000  && grossSalary <= 49999){
        nhif = 1100;
    } else if(grossSalary > 50000  && grossSalary <= 59999){
        nhif = 1200;
    } else if(grossSalary > 60000  && grossSalary <= 69999){
        nhif = 1300;
    } else if(grossSalary > 70000  && grossSalary <= 79999){
        nhif = 1400;
    } else if(grossSalary > 80000  && grossSalary <= 89999){
        nhif = 1500;
    } else if(grossSalary > 90000  && grossSalary <= 99999){
        nhif = 1600;
    } else{
        nhif = 1700;
    }
/*==> NSSF CALCULATION: "If-statement" determines the NSSF deduuction 
      amount using the latest rates set.*/
    if(grossSalary <= 18000){
        nssf = (6/100) * grossSalary;
    } else{
        nssf = (6/100) * 18000;
    }
/*==> The total deductions are then calculated and used to determine
      the net salary by subtracting the total deductions(after subtracting 
      personal relief). from the gross salary */
deductions = paye + nhif + nssf + housingLevy;
netSalary = grossSalary - (deductions - personalRelief);
//The calculateNetSalary function then returns the net salary.
return netSalary;
}
//==> EXAMPLE FUNCTION CALL + CHECKING OF VALUES USING CONSOLE.LOG
console.log(calculateNetSalary(75700,23750));
console.log(grossSalary);
console.log(deductions);
console.log(nssf);
console.log(nhif);
console.log(paye);
console.log(housingLevy);
console.log(`================`);
console.log(calculateNetSalary(45700,3750));
console.log(grossSalary);
console.log(deductions);
console.log(nssf);
console.log(nhif);
console.log(paye);
console.log(housingLevy);
