 'use strict';

let money = promptNumber ("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY - MM- DD ", "");

function promptNumber(message) {
    let text = '',
        number = 0;
    while (number<= 0) {
        text = prompt(message, '');
    if (isNaN(text) == false && text != ''){
        number = parseInt("");
        text = ("");
    }
 }
    return number; 
}

//promptNumber(); 

let appData = {
    budget: money,         
    timeDate: time,        
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: true
}

let questionSpending , 
    questionCost ; 

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
            questionSpending = promptNumber("Введите обязательную статью расходов в этом месяце", ''),
            questionCost = promptNumber("Во сколько обойдется?", '');
            
        if (promptNumber()){
                consol.log("done");
                appData.expenses[questionSpending] = questionCost;
            } else {
                alert( "Статья расходов обязательна" );
                i--;
            }
        return chooseExpenses;
    }
}
chooseExpenses();

let moneyPerDay = detectDayBudget ();

function detectDayBudget () {
    let money = [];
    money.push(appData.budget/30);
    alert(moneyPerDay);
}

let expenses = chooseOptExpenses();

function chooseOptExpenses() {
    let result = [];
    for (let i = 0; i < 3; i++) {
        result.push(promptNumber("Статья необязательных расходов?"));
    }
    return result;
}


function detectLevel(moneyPerDay) {
    if (moneyPerDay.appData < 100) {
        consol.log("Минимальный уровень дохода");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        consol.log("Средний уровень дохода");
    }else if(appData.moneyPerDay > 2000){
        consol.log("Высокий уровень дахода");
    }else{
        consol.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц: " + appData.monthIncome);
    }
}
checkSavings();


