 'use strict';

let money = prompt ("Ваш бюджет на месяц? " , "");

let time = prompt("Введите дату в формате YYYY - MM- DD ", "");

let appData = {
    budget: money,         
    timeDate: time,        
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: false
}; 

for (let i = 0; i < 2; i++) {
    let questionSpending = prompt("Введите обязательную статью расходов в этом месяце", ''),
        questionCost = prompt("Во сколько обойдется?", '');
        
    if ( (typeof(questionSpending))=== 'string' && (typeof(questionSpending)) != null && (typeof(questionCost)) != null 
        && questionSpending != '' && questionCost != '' && questionSpending.length < 50) {
            console.log("done");
            appData.expenses[questionSpending] = questionCost;
        }else {
            alert("Статья расходов обязательна")
            i--;

        }
};

/*let i = 0;

while (i<2) {
    let questionSpending = prompt("Введите обязательную статью расходов" , ""),
        questionCost = prompt("Во сколько обойдется?" , "");
            i++;

    if ( (typeof(questionSpending))=== 'string' && (typeof(questionSpending)) != null && (typeof(questionCost)) != null 
        && questionSpending != '' && questionCost != '' && questionSpending.length < 50) {
        console.log("done");
        appData.expenses[questionSpending] = questionCost;
    }else {
         alert("Статья расходов обязательна")
         i--;
     }            
}*/

/*let i = 0;

do {
    let questionSpending = prompt("Введите обязательную статью расходов" , ""),
        questionCost = prompt("Во сколько обойдется?" , "");
    
    if ( (typeof(questionSpending))=== 'string' && (typeof(questionSpending)) != null && (typeof(questionCost)) != null 
        && questionSpending != '' && questionCost != '' && questionSpending.length < 50) {
        console.log("done");
        appData.expenses[questionSpending] = questionCost;
        i++;
    }else {
         alert("Статья расходов обязательна")
     }           
}
while(i<2 )*/

appData.moneyPerDay = appData.budget / 30;
 
alert("Ежедневный доход" + appData.moneyPerDay);



