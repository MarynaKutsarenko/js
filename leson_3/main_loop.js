 'use strict';

let money = newMoney,
    time =

function start() {

    let money = prompt("Ваш бюджет на месяц? " , "");
        time = prompt("Введите дату в формате YYYY - MM- DD ", "");

    while (money != '' && money == null) {

    }else {
        alert("Введите Ваш бюджет на месяц! " , "")
    }
}

start();  

function checkBudgetAmount(questionSpending,questionCost) {

    while (typeof(questionSpending)) != null && (isNaN(questionSpending)) == true && questionSpending != ''
            && (typeof(questionCost)) != null && questionCost != '' && questionSpending.length < 50;
            break;
}

checkBudgetAmount();

let appData = {
    budget: money,         
    timeDate: time,        
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: true
};


for (let i = 0; i < 2; i++) {
    let questionSpending = prompt("Введите обязательную статью расходов в этом месяце", ''),
        questionCost = prompt("Во сколько обойдется?", '');
        
    if (checkBudgetAmount(questionSpending,questionCost)){
            console.log("done");
            appData.expenses[questionSpending] = questionCost;
        } else {
            alert("Статья расходов обязательна");
            i--;
        }
}

function name(params) {
    
}
    if (appDate.moneyPerDay < 100) {
        console.log("Минимальный уровень дохода");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень дохода");
    }else if(appData.moneyPerDay > 2000){
        console.log("Высокий уровень дахода");
    }else{
        console.log("Произошла ошибка");
    }

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный доход" + appData.moneyPerDay);

function checkSavings() {
    if (appData.savings == true) {
        let seve = prompt("Какова сумма накоплений?");
            percent = prompt("Под какой процент?");

        appData.monthIncome = save/100/12 * percent;
        alert("Доход в месяц:" + appData.monthIncome)
    }
}

checkSavings();

/*
function retVar() {
    let num = 50;
    return num;
}
 let anotherNum = retVar();
 console.log(anotherNum);

let str = "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext";
console.log(str.length);
if (str>50);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

let twelwe = "12.24566";

console.log(parseInt(twelwe));
console.log(parseFloat(twelwe));*/