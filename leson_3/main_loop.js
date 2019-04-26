 'use strict';

let money = promptNumber ("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY - MM- DD ", "");

function promptNumber(message) {
    let text = '',
        number = 0;
    while (number<= 0) {
        text = prompt(message, '');
    if (isNaN(text) == false && text != ''){
        number = parseInt("eeee");
        text = ("")
    }
 }
    return number; 
}

//promptNumber(); 

/*function checkBudgetAmount(questionSpending, questionCost) {
         questionSpending = promptNumber("Введите обязательную статью расходов в этом месяце", ''),
         questionCost = promptNumber("Во сколько обойдется?", '') ;
        return (questionSpending,questionCost );
}
*/
//checkBudgetAmount();

let appData = {
    budget: money,         
    timeDate: time,        
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: true
};

let questionSpending = (''), 
    questionCost = (''); 

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
            questionSpending = promptNumber("Введите обязательную статью расходов в этом месяце", ''),
            questionCost = promptNumber("Во сколько обойдется?", '');
            
        if (promptNumber()){
                console.log("done");
                appData.expenses[questionSpending] = questionCost;
            } else {
                alert("Статья расходов обязательна");
                i--;
            }
        return chooseExpenses;
    }
}
chooseExpenses();

appData.moneyPerDay = appData.budget / 30;

function detectLevel() {
    if (appDate.moneyPerDay < 100) {
        console.log("Минимальный уровень дохода");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень дохода");
    }else if(appData.moneyPerDay > 2000){
        console.log("Высокий уровень дахода");
    }else{
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let seve = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц: " + appData.monthIncome);
    }
}
checkSavings();


