'use strict';

let money =  prompt ("Ваш бюджет на месяц? " , "");

let time = prompt("Введите дату в формате YYYY - MM- DD ", "");

let appData = {
    budget: money,         
    timeDate: time,        
    expenses:{},
    optionalExpenses:  {},
    income: {},
    saving: false
};  

let i = 0;

do {
    let questionSpending = prompt("Введите обязательную статью расходов" , ""),
        questionCost = prompt("Во сколько обойдется?" , "");
            i++;
                appData.expenses[questionSpending] = questionCost;
}
while(i<2);

console.log(appData);
 
alert(money/30);




